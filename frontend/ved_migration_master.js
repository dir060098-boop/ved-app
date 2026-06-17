/**
 * ved_migration_master.js
 * ══════════════════════════════════════════════════════════════════════════════
 * МАСТЕР-ФАЙЛ ИНТЕГРАЦИИ «ВЭД Система» → VED Manager Backend
 *
 * КАК ИСПОЛЬЗОВАТЬ:
 *   Добавить ОДИН тег в конец app.html (перед </body>):
 *
 *     <script src="./ved_migration_master.js"></script>
 *
 * ЧТО ДЕЛАЕТ ЭТОТ ФАЙЛ:
 *   1. Настраивает URL backend-а (определяется автоматически)
 *   2. Содержит полный код api_adapter (apiFetch, auth bridge)
 *   3. Содержит полный код shipments_api (dual-write для поставок)
 *   4. Предоставляет функции для поэтапной миграции всех модулей
 *   5. НЕ меняет UI, HTML, CSS — только перехватывает write-функции
 *
 * ФАЗЫ МИГРАЦИИ:
 *   Фаза 0 (сейчас):   dual-write — пишет в localStorage + API
 *   Фаза 1 (позже):    readFromApi = true — читает из API
 *   Фаза 2 (финал):    localStorage убран
 *
 * УПРАВЛЕНИЕ ИЗ КОНСОЛИ БРАУЗЕРА:
 *   VED_MIGRATION.status()              — показать состояние всех модулей
 *   await VED_MIGRATION.importAll()     — импортировать все данные в PostgreSQL
 *   await VED_MIGRATION.enableApiReads()— переключить чтение на API
 *   VED_MIGRATION.help()                — подробная инструкция
 *
 * ══════════════════════════════════════════════════════════════════════════════
 */

/* ════════════════════════════════════════════════════════════════════════════
   ⚙️  КОНФИГУРАЦИЯ — ИЗМЕНИТЬ ПОД СВОЙ ДЕПЛОЙ
   ════════════════════════════════════════════════════════════════════════════ */

const VED_BACKEND_URL = (() => {
  // 1. window.API_BASE_URL — высший приоритет (установить в HTML до этого скрипта)
  if (typeof window !== 'undefined' && window.API_BASE_URL) {
    return String(window.API_BASE_URL).replace(/\/$/, '');
  }
  // 2. <meta name="api-base-url" content="https://...">
  const meta = document.querySelector('meta[name="api-base-url"]');
  if (meta && meta.content) return meta.content.replace(/\/$/, '');
  // 3. Файловый протокол — локальный dev-сервер
  if (window.location.protocol === 'file:') return 'http://localhost:8000';
  // 4. Same-origin (backend и frontend на одном хосте)
  return '';
})();

/* ════════════════════════════════════════════════════════════════════════════
   🔌  CORE API ADAPTER
       Базовый fetch-обёртка с JWT, refresh-токеном, graceful fallback
   ════════════════════════════════════════════════════════════════════════════ */

const VED_API_CONFIG = {
  baseUrl:     VED_BACKEND_URL,
  enabled:     true,
  mirrorToApi: true,
  readFromApi: false,
  tokenKey:    '_api_token',
  refreshKey:  '_api_refresh',
  debug:       true,    // ← установить false в production
};

/* ── Circuit breaker ──────────────────────────────────────────────────────
   Когда backend недоступен, НЕ долбим его при каждом вызове (это вызывало
   шторм запросов и подвисание UI). Зафиксировали недоступность → на
   _API_DOWN_COOLDOWN_MS молча возвращаем null и работаем на localStorage.
   Любой успешный ответ немедленно «закрывает» предохранитель. */
const _API_DOWN_COOLDOWN_MS = 30000;   // 30 c тишины после падения
const _API_TIMEOUT_MS       = 4000;    // таймаут одиночного запроса
let   _apiDownUntil         = 0;        // timestamp, до которого считаем backend недоступным
let   _apiDownLogged        = false;    // чтобы не спамить лог при открытом предохранителе

function _apiMarkDown() {
  _apiDownUntil = Date.now() + _API_DOWN_COOLDOWN_MS;
  if (VED_API_CONFIG.debug && !_apiDownLogged) {
    console.warn(`[API] backend недоступен — пауза запросов на ${_API_DOWN_COOLDOWN_MS/1000}c, работаем на localStorage`);
    _apiDownLogged = true;
  }
}
function _apiMarkUp() { _apiDownUntil = 0; _apiDownLogged = false; }
function apiIsDown() { return Date.now() < _apiDownUntil; }

/**
 * apiFetch(path, options)
 * Как fetch(), но: добавляет Bearer token, обновляет его на 401,
 * возвращает null (не бросает) при недоступности backend-а.
 * С circuit breaker-ом и таймаутом — не штормит и не висит, если backend лёг.
 */
async function apiFetch(path, opts = {}) {
  if (!VED_API_CONFIG.enabled) return null;
  if (apiIsDown()) return null;                 // предохранитель открыт — мгновенно на localStorage
  const url = VED_API_CONFIG.baseUrl + path;
  const token = localStorage.getItem(VED_API_CONFIG.tokenKey);
  const headers = { ...(opts.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (opts.body && !(opts.body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  }
  // Таймаут (если вызывающий не передал свой signal)
  const signal = opts.signal || (typeof AbortSignal !== 'undefined' && AbortSignal.timeout
    ? AbortSignal.timeout(_API_TIMEOUT_MS) : undefined);
  try {
    let res = await fetch(url, { ...opts, headers, signal });
    if (res.status === 401) {
      const refreshed = await _apiRefreshTokens();
      if (refreshed) {
        headers['Authorization'] = `Bearer ${localStorage.getItem(VED_API_CONFIG.tokenKey)}`;
        res = await fetch(url, { ...opts, headers, signal });
      } else {
        localStorage.removeItem(VED_API_CONFIG.tokenKey);
        localStorage.removeItem(VED_API_CONFIG.refreshKey);
      }
    }
    _apiMarkUp();                               // успех — закрыли предохранитель
    if (VED_API_CONFIG.debug) console.log(`[API] ${opts.method || 'GET'} ${path} → ${res.status}`);
    return res;
  } catch (err) {
    _apiMarkDown();                             // сеть/таймаут — открыли предохранитель
    if (VED_API_CONFIG.debug && !_apiDownLogged) console.warn(`[API] ${path} unreachable:`, err.message);
    return null;
  }
}

async function _apiRefreshTokens() {
  const refresh = localStorage.getItem(VED_API_CONFIG.refreshKey);
  if (!refresh) return false;
  try {
    const res = await fetch(VED_API_CONFIG.baseUrl + '/api/v1/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refresh }),
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem(VED_API_CONFIG.tokenKey,  data.access_token);
      localStorage.setItem(VED_API_CONFIG.refreshKey, data.refresh_token);
      return true;
    }
  } catch (_) {}
  return false;
}

// Возвращает true при успешном входе (JWT сохранён), иначе false.
async function apiLogin(login, password) {
  if (!VED_API_CONFIG.enabled) return false;
  if (typeof apiIsDown === 'function' && apiIsDown()) return false;  // предохранитель открыт
  try {
    const form = new URLSearchParams({ username: login, password });
    const res = await fetch(VED_API_CONFIG.baseUrl + '/api/v1/auth/login', {
      method: 'POST', body: form,
      signal: (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) ? AbortSignal.timeout(6000) : undefined,
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem(VED_API_CONFIG.tokenKey,  data.access_token);
      localStorage.setItem(VED_API_CONFIG.refreshKey, data.refresh_token);
      if (typeof _apiMarkUp === 'function') _apiMarkUp();
      if (VED_API_CONFIG.debug) console.log('[API] JWT tokens stored');
      return true;
    }
    return false;   // неверные креды (401) — но сервер доступен
  } catch (_) {
    if (typeof _apiMarkDown === 'function') _apiMarkDown();  // сеть/таймаут
    return false;
  }
}

async function apiLogout() {
  const refresh = localStorage.getItem(VED_API_CONFIG.refreshKey);
  if (refresh) {
    await apiFetch('/api/v1/auth/logout', {
      method: 'POST',
      body: JSON.stringify({ refresh_token: refresh }),
    }).catch(() => {});
  }
  localStorage.removeItem(VED_API_CONFIG.tokenKey);
  localStorage.removeItem(VED_API_CONFIG.refreshKey);
}

// Patch logout-кнопку после загрузки DOM
(function patchAuthFunctions() {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (typeof doLogout === 'function') {
        const _orig = doLogout;
        window.doLogout = function () { apiLogout(); _orig(); };
      }
      // Патч кнопки логина убран: вход против бэкенда теперь внутри doLogin (app.js),
      // чтобы не задваивать apiLogin и работать одинаково для клика и Enter.
    }, 200);
  });
})();

// Проверка доступности backend при загрузке страницы
(async function checkBackend() {
  if (!VED_API_CONFIG.enabled) return;
  try {
    const res = await fetch(VED_API_CONFIG.baseUrl + '/api/v1/health', {
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      const d = await res.json();
      _apiMarkUp();
      console.log(`%c[ВЭД API] Backend доступен: ${d.app || 'VED Manager'} ✓`, 'color: #2a7a4b; font-weight: bold;');
    } else {
      _apiMarkDown();
    }
  } catch (_) {
    _apiMarkDown();   // открываем предохранитель сразу — не штормим при загрузке
    console.warn('%c[ВЭД API] Backend недоступен — работаем в localStorage-режиме', 'color: #c0392b;');
  }
})();

/* ════════════════════════════════════════════════════════════════════════════
   📦  SHIPMENTS BRIDGE
       Перехватывает shpSave() и shpDelete() для dual-write в PostgreSQL
   ════════════════════════════════════════════════════════════════════════════ */

const VED_SHIPS_API_CONFIG = {
  enabled:     true,
  readFromApi: false,   // ← Шаг 2: сменить на true после импорта
  dualWrite:   true,
};

function _shipsApiToFrontend(apiShipment, localShipment) {
  // GET /api/v1/shipments (list) returns flat fields (ShipmentListItem):
  //   mode, from_location, to_location, eta
  // GET /api/v1/shipments/{id} (single) returns nested JSONB (ShipmentRead):
  //   logistics: { mode, from, to }, dates: { eta, payment, ... }
  // This mapper handles both formats.
  const log   = apiShipment.logistics || {};
  const dates = apiShipment.dates     || {};
  return {
    id:              apiShipment.id,
    shipment_number: apiShipment.shipment_number,
    company:         apiShipment.company,
    status:          apiShipment.status,
    current_stage:   apiShipment.current_stage ?? 0,
    supplier_id:     apiShipment.supplier_id  || '',
    forwarder_id:    apiShipment.forwarder_id || '',
    broker_id:       apiShipment.broker_id    || '',
    contract_id:     apiShipment.contract_id  || '',
    incoterms:       apiShipment.incoterms    || '',
    currency:        apiShipment.currency     || 'USD',
    total_value:     apiShipment.total_value  ?? 0,
    // flat (list) takes priority over nested (single)
    mode: apiShipment.mode         || log.mode || '',
    from: apiShipment.from_location || log.from || '',
    to:   apiShipment.to_location   || log.to   || '',
    dates: {
      payment:    dates.payment    || '',
      production: dates.production || '',
      etd:        dates.etd        || '',
      // flat eta field (list response) takes priority
      eta:        apiShipment.eta  || dates.eta  || '',
      customs:    dates.customs    || '',
      delivery:   dates.delivery   || '',
    },
    notes: apiShipment.notes || '',
    // Preserve embedded sub-data from localStorage if available.
    // These are not stored in backend yet — avoid overwriting with empty arrays.
    items:        localShipment?.items        || [],
    docs:         localShipment?.docs         || [],
    customs_data: localShipment?.customs_data || {},
    payments:     localShipment?.payments     || [],
    events:       localShipment?.events       || [],
    // Preserve _api_id link if already set
    _api_id:      localShipment?._api_id      || apiShipment.id,
  };
}

function _shipsApiFromFrontend(d) {
  return {
    shipment_number: d.shipment_number,
    company:         d.company,
    status:          d.status,
    current_stage:   d.current_stage ?? 0,
    supplier_id:     d.supplier_id  || null,
    forwarder_id:    d.forwarder_id || null,
    broker_id:       d.broker_id    || null,
    contract_id:     d.contract_id  || null,
    incoterms:       d.incoterms    || null,
    currency:        d.currency     || 'USD',
    total_value:     d.total_value  ?? 0,
    logistics: { mode: d.mode || null, from: d.from || null, to: d.to || null },
    dates:     d.dates || {},
    notes:     d.notes || null,
  };
}

async function shipsApiFetchAll(company = null) {
  if (!VED_SHIPS_API_CONFIG.enabled) return null;
  const params = new URLSearchParams({ page_size: 200 });
  if (company) params.append('company', company);
  const res = await apiFetch(`/api/v1/shipments?${params}`);
  if (!res || !res.ok) return null;
  const data = await res.json();
  return (data.items || []).map(_shipsApiToFrontend);
}

async function shipsApiFetchOne(id) {
  if (!VED_SHIPS_API_CONFIG.enabled) return null;
  const res = await apiFetch(`/api/v1/shipments/${id}`);
  if (!res || !res.ok) return null;
  return _shipsApiToFrontend(await res.json());
}

async function shipsApiCreate(frontendData) {
  if (!VED_SHIPS_API_CONFIG.enabled) return null;
  const res = await apiFetch('/api/v1/shipments', {
    method: 'POST',
    body: JSON.stringify(_shipsApiFromFrontend(frontendData)),
  });
  if (!res || res.status >= 300) return null;
  return (await res.json()).id;
}

async function shipsApiUpdate(id, frontendData) {
  if (!VED_SHIPS_API_CONFIG.enabled) return;
  await apiFetch(`/api/v1/shipments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(_shipsApiFromFrontend(frontendData)),
  });
}

async function shipsApiDelete(id) {
  if (!VED_SHIPS_API_CONFIG.enabled) return;
  await apiFetch(`/api/v1/shipments/${id}`, { method: 'DELETE' });
}

/**
 * shipsApiImportLocalStorage()
 * ОДНОРАЗОВЫЙ ИМПОРТ — вызвать один раз из консоли браузера:
 *   await shipsApiImportLocalStorage()
 * Идемпотентен — пропускает уже существующие записи.
 */
async function shipsApiImportLocalStorage() {
  const raw = localStorage.getItem('ved_shipments');
  if (!raw) { console.log('[Ships] localStorage пуст — нечего импортировать'); return; }
  let rows;
  try { rows = JSON.parse(raw); }
  catch (e) { console.error('[Ships] Ошибка парсинга localStorage', e); return; }
  if (!Array.isArray(rows) || !rows.length) {
    console.log('[Ships] Нет данных для импорта');
    return;
  }
  console.log(`[Ships] Импортируем ${rows.length} поставок…`);
  const res = await apiFetch('/api/v1/shipments/import', {
    method: 'POST',
    body: JSON.stringify({ rows }),
  });
  if (!res || !res.ok) {
    console.error('[Ships] Ошибка импорта:', res?.status);
    return;
  }
  const result = await res.json();
  console.log(
    `%c[Ships] Импорт завершён: создано ${result.created}, пропущено ${result.skipped}, ошибок ${result.errors}`,
    'color: #2a7a4b; font-weight: bold;'
  );
  return result;
}

// Перехват shpSave() и shpDelete() после загрузки DOM
(function patchShipmentsModule() {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

      // ── Patch shpSave ───────────────────────────────────────────────
      if (typeof shpSave === 'function' && VED_SHIPS_API_CONFIG.dualWrite) {
        const _origShpSave = shpSave;
        window.shpSave = async function () {
          _origShpSave();  // Сначала сохраняем в localStorage (как раньше)
          try {
            const idEl  = document.getElementById('shp-f-id');
            const numEl = document.getElementById('shp-f-num');
            if (!numEl) return;
            const frontendData = {
              shipment_number: numEl.value.trim(),
              company:         document.getElementById('shp-f-company')?.value,
              status:          document.getElementById('shp-f-status')?.value,
              current_stage:   parseInt(document.getElementById('shp-f-stage')?.value) || 0,
              supplier_id:     document.getElementById('shp-f-supplier')?.value || '',
              forwarder_id:    document.getElementById('shp-f-forwarder')?.value || '',
              broker_id:       document.getElementById('shp-f-broker')?.value || '',
              contract_id:     document.getElementById('shp-f-contract')?.value?.trim(),
              incoterms:       document.getElementById('shp-f-inco')?.value,
              total_value:     parseFloat(document.getElementById('shp-f-value')?.value) || 0,
              currency:        document.getElementById('shp-f-currency')?.value,
              mode:            document.getElementById('shp-f-mode')?.value,
              from:            document.getElementById('shp-f-from')?.value?.trim(),
              to:              document.getElementById('shp-f-to')?.value?.trim(),
              notes:           document.getElementById('shp-f-notes')?.value?.trim(),
              dates: {
                payment:    document.getElementById('shp-f-d-payment')?.value,
                production: document.getElementById('shp-f-d-production')?.value,
                etd:        document.getElementById('shp-f-d-etd')?.value,
                eta:        document.getElementById('shp-f-d-eta')?.value,
                customs:    document.getElementById('shp-f-d-customs')?.value,
                delivery:   document.getElementById('shp-f-d-delivery')?.value,
              },
            };
            const existingId = idEl?.value;
            if (existingId) {
              const lsShip = (typeof DB_shipments !== 'undefined') ? DB_shipments?.find?.(existingId) : null;
              const apiId  = lsShip?._api_id || existingId;
              shipsApiUpdate(apiId, frontendData);
            } else {
              const apiId = await shipsApiCreate(frontendData);
              if (apiId) {
                const ships = (typeof DB_shipments !== 'undefined') ? DB_shipments?.all?.() || [] : [];
                const newShip = ships.find(s => s.shipment_number === frontendData.shipment_number);
                if (newShip) DB_shipments?.update?.(newShip.id, { _api_id: apiId });
              }
            }
          } catch (err) {
            if (VED_API_CONFIG.debug) console.warn('[Ships API] shpSave mirror error:', err);
          }
        };
        if (VED_API_CONFIG.debug) console.log('[Ships API] shpSave перехвачен');
      }

      // ── Patch shpDelete ─────────────────────────────────────────────
      if (typeof shpDelete === 'function' && VED_SHIPS_API_CONFIG.dualWrite) {
        const _origShpDelete = shpDelete;
        window.shpDelete = function (id) {
          const lsShip = (typeof DB_shipments !== 'undefined') ? DB_shipments?.find?.(id) : null;
          const apiId  = lsShip?._api_id || null;
          _origShpDelete(id);
          if (apiId) shipsApiDelete(apiId);
        };
        if (VED_API_CONFIG.debug) console.log('[Ships API] shpDelete перехвачен');
      }

    }, 300);
  });
})();

/* ════════════════════════════════════════════════════════════════════════════
   📋  PURCHASE REQUESTS — dual-write + API read (Фаза 0 → 1)
   ════════════════════════════════════════════════════════════════════════════ */

const VED_PR_API_CONFIG = {
  enabled:     true,
  readFromApi: false,
  dualWrite:   true,
};

/** Конвертация frontend-объекта → тело запроса к API */
function _prApiFromFrontend(d) {
  // product_description: строим из items или notes
  const items = d.items || [];
  const desc = items.length
    ? items.map(i => i.name_ru || i.name_en || i.name || '').filter(Boolean).join(', ') || d.notes || '—'
    : (d.notes || '—');
  // quantity: сумма позиций или 1
  const qty = items.reduce((s, i) => s + (parseFloat(i.qty_requested) || 0), 0) || 1;
  // цена первой позиции
  const price    = items[0]?.estimated_price ? parseFloat(items[0].estimated_price) : null;
  const currency = items[0]?.currency || 'USD';

  return {
    request_number:      d.num,
    product_description: desc,
    quantity:            qty,
    unit:                items[0]?.unit || 'шт',
    target_price:        price,
    target_currency:     currency,
    request_date:        d.date || null,
    required_date:       d.deadline || null,
    priority:            d.priority || 'normal',
    status:              d.status   || 'draft',
    initiator_id:        d.requested_by || null,
    department_id:       d.department_id || null,
    company_id:          d.company_id || null,
    comment:             d.notes || null,
  };
}

/** Конвертация API-ответа → frontend-объект (для read mode) */
function _prApiToFrontend(api, local) {
  return {
    id:            local?.id    || api.id,
    _api_id:       local?._api_id || api.id,
    num:           api.request_number,
    company_id:    api.company_id      || '',
    department_id: api.department_id  || '',
    requested_by:  api.initiator_id   || '',
    priority:      api.priority       || 'normal',
    status:        api.status         || 'draft',
    deadline:      api.required_date  || '',
    notes:         api.comment        || api.product_description || '',
    contract_num:  local?.contract_num || '',
    items:         local?.items        || [],
    // Поля для рендера таблицы
    created_at:    api.created_at     || local?.created_at || null,
    updated_at:    api.updated_at     || local?.updated_at || null,
  };
}

/** Получить список PR из API */
async function prApiFetchAll(company) {
  if (!VED_PR_API_CONFIG.enabled) return null;
  const params = new URLSearchParams({ page_size: 200 });
  if (company) params.append('company', company);
  const res = await apiFetch(`/api/v1/purchase-requests?${params}`);
  if (!res || !res.ok) return null;
  const data = await res.json();
  return (data.items || []).map(r => _prApiToFrontend(r, null));
}

/** Создать PR в API */
async function prApiCreate(frontendData) {
  if (!VED_PR_API_CONFIG.enabled) return null;
  const res = await apiFetch('/api/v1/purchase-requests', {
    method: 'POST',
    body: JSON.stringify(_prApiFromFrontend(frontendData)),
  });
  if (!res || res.status >= 300) {
    if (VED_API_CONFIG.debug) console.warn('[PR API] create error:', res?.status);
    return null;
  }
  return (await res.json()).id;
}

/** Обновить PR в API */
async function prApiUpdate(apiId, frontendData) {
  if (!VED_PR_API_CONFIG.enabled) return;
  await apiFetch(`/api/v1/purchase-requests/${apiId}`, {
    method: 'PUT',
    body: JSON.stringify(_prApiFromFrontend(frontendData)),
  });
}

/** Удалить PR в API */
async function prApiDelete(apiId) {
  if (!VED_PR_API_CONFIG.enabled) return;
  await apiFetch(`/api/v1/purchase-requests/${apiId}`, { method: 'DELETE' });
}

/** Переключить чтение PR на API (Фаза 1) */
async function _prEnableApiReads() {
  // Guard: не патчить дважды
  if (VED_PR_API_CONFIG.readFromApi) {
    if (VED_API_CONFIG.debug) console.log('[PR] API reads уже включены — пропускаем повторный патч');
    return;
  }
  console.log('[PR] Переключаемся на чтение из API…');
  VED_PR_API_CONFIG.readFromApi = true;

  if (typeof prLoad === 'function') {
    const _origPrLoad = prLoad;
    let _prLoadLock = false;   // Mutex: предотвращает конкурентные async-вызовы
    let _prLoadTimer = null;   // Debounce: схлопывает несколько быстрых вызовов в один

    // Внутренняя функция — выполняет реальный API-запрос + merge
    async function _prLoadCore() {
      if (_prLoadLock) {
        if (VED_API_CONFIG.debug) console.log('[PR] prLoad: пропускаем — уже выполняется (lock)');
        _origPrLoad();
        return;
      }
      _prLoadLock = true;
      try {
        // Загружаем ВСЕ PR из API (фильтрация по компании — на стороне _origPrLoad через dropdown)
        const apiRows = await prApiFetchAll(null);
        if (apiRows && apiRows.length >= 0) {
          // Merge: сохраняем items и contract_num из localStorage
          let localByNum = {}, localById = {};
          try {
            const existing = JSON.parse(localStorage.getItem('ved_purchase_requests') || '[]');
            for (const r of existing) {
              if (r.num)  localByNum[r.num]  = r;
              if (r.id)   localById[r.id]    = r;
            }
          } catch (_) {}

          const apiNums = new Set(apiRows.map(r => r.num));
          const apiIds  = new Set(apiRows.map(r => r.id).filter(Boolean));

          const mergedFromApi = apiRows.map(apiRow => {
            const local = localByNum[apiRow.num] || localById[apiRow.id] || null;
            const row = {
              ...apiRow,
              // Prefer local for user-managed fields — local is always at least as
              // current as the API (dual-write) and preserves quick status changes
              // (prQuickStatus) that haven't yet been mirrored to the API.
              status:        local?.status        || apiRow.status        || 'draft',
              items:         local?.items         || apiRow.items         || [],
              contract_num:  local?.contract_num  || apiRow.contract_num  || '',
              _api_id:       local?._api_id       || apiRow._api_id       || apiRow.id,
              // Prefer local department_id: local UUIDs match current DB_departments seed
              company_id:    local?.company_id    || apiRow.company_id    || '',
              department_id: local?.department_id || apiRow.department_id || '',
              requested_by:  local?.requested_by  || apiRow.requested_by  || '',
            };
            if (local?.id) row.id = local.id;
            return row;
          });

          // Сохранить local-only строки (только что созданы через UI, ещё не попали в API)
          let existing2 = [];
          try { existing2 = JSON.parse(localStorage.getItem('ved_purchase_requests') || '[]'); } catch (_) {}
          const localOnly = existing2.filter(r =>
            r.num && !apiNums.has(r.num) && r.id && !apiIds.has(r.id)
          );

          const merged = [...mergedFromApi, ...localOnly];
          localStorage.setItem('ved_purchase_requests', JSON.stringify(merged));
          if (VED_API_CONFIG.debug) console.log(`[PR] Загружено и слито ${merged.length} заявок из API`);
        }
      } catch (err) {
        if (VED_API_CONFIG.debug) console.warn('[PR] Fallback на localStorage:', err);
      } finally {
        _prLoadLock = false;
      }
      _origPrLoad();
    }

    // Публичный prLoad — дебаунс 250мс: схлопывает быстрые повторные вызовы в один
    window.prLoad = function () {
      if (_prLoadTimer) clearTimeout(_prLoadTimer);
      _prLoadTimer = setTimeout(() => {
        _prLoadTimer = null;
        _prLoadCore();
      }, 250);
    };
    console.log('[PR] prLoad перенаправлен на API');
  }
}

/**
 * _prBackfillCompanyId()
 * ОДНОРАЗОВАЯ операция: для всех PRs в localStorage где company_id есть,
 * но в API — null, отправляет PUT для обновления.
 * Вызывается ОДИН РАЗ при инициализации, не на каждый prLoad.
 */
async function _prBackfillCompanyId() {
  try {
    const existing = JSON.parse(localStorage.getItem('ved_purchase_requests') || '[]');
    const toBackfill = existing.filter(r => r.company_id && r._api_id);
    if (!toBackfill.length) return;
    const token = localStorage.getItem(VED_API_CONFIG.tokenKey);
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    let done = 0;
    for (const r of toBackfill) {
      try {
        const res = await fetch(`${VED_API_CONFIG.baseUrl}/api/v1/purchase-requests/${r._api_id}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({ company_id: r.company_id }),
        });
        if (res.ok) done++;
      } catch (_) {}
    }
    if (done > 0) console.log(`[PR] Backfill company_id: обновлено ${done} заявок в API`);
  } catch (e) {
    if (VED_API_CONFIG.debug) console.warn('[PR] backfill error:', e);
  }
}

/** Патч prSave / prSaveAndSubmit / prDelete для dual-write */
(function patchPurchaseRequestsModule() {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (!VED_PR_API_CONFIG.dualWrite) return;

      // ── Patch prSave ──────────────────────────────────────────
      if (typeof prSave === 'function') {
        const _origPrSave = prSave;
        window.prSave = async function (forceStatus) {
          _origPrSave(forceStatus);   // localStorage сначала (как раньше)
          try {
            const numEl  = document.getElementById('pr-f-num');
            const editEl = document.getElementById('pr-edit-id');
            if (!numEl?.value) return;

            const data = {
              num:           numEl.value.trim(),
              company_id:    document.getElementById('pr-f-company')?.value,
              department_id: document.getElementById('pr-f-dept')?.value || '',
              requested_by:  document.getElementById('pr-f-user')?.value || '',
              priority:      document.getElementById('pr-f-priority')?.value || 'normal',
              status:        forceStatus || document.getElementById('pr-f-status')?.value || 'draft',
              deadline:      document.getElementById('pr-f-deadline')?.value || '',
              notes:         document.getElementById('pr-f-notes')?.value?.trim() || '',
              contract_num:  document.getElementById('pr-f-contract')?.value?.trim() || '',
              items:         (typeof _prItems !== 'undefined') ? JSON.parse(JSON.stringify(_prItems)) : [],
            };

            const editId = editEl?.value;
            if (editId) {
              const lsPr = (typeof DB_purchase_requests !== 'undefined')
                ? DB_purchase_requests?.find?.(editId) : null;
              const apiId = lsPr?._api_id || null;
              if (apiId) await prApiUpdate(apiId, data);
            } else {
              const apiId = await prApiCreate(data);
              if (apiId) {
                // Сохранить _api_id в localStorage-записи по num
                setTimeout(() => {
                  if (typeof DB_purchase_requests !== 'undefined') {
                    const all   = DB_purchase_requests.all();
                    const newPr = all.find(r => r.num === data.num);
                    if (newPr) DB_purchase_requests.update(newPr.id, { _api_id: apiId });
                  }
                }, 100);
              }
            }
            if (VED_API_CONFIG.debug) console.log('[PR API] prSave зеркало выполнено');
          } catch (err) {
            if (VED_API_CONFIG.debug) console.warn('[PR API] prSave mirror error:', err);
          }
        };
        if (VED_API_CONFIG.debug) console.log('[PR API] prSave перехвачен');
      }

      // ── Patch prSaveAndSubmit ─────────────────────────────────
      if (typeof prSaveAndSubmit === 'function') {
        const _origPrSAS = prSaveAndSubmit;
        window.prSaveAndSubmit = async function () {
          _origPrSAS();
          try {
            const numEl  = document.getElementById('pr-f-num');
            const editEl = document.getElementById('pr-edit-id');
            if (!numEl?.value) return;
            const data = {
              num:           numEl.value.trim(),
              company_id:    document.getElementById('pr-f-company')?.value,
              department_id: document.getElementById('pr-f-dept')?.value || '',
              requested_by:  document.getElementById('pr-f-user')?.value || '',
              priority:      document.getElementById('pr-f-priority')?.value || 'normal',
              status:        'submitted',
              deadline:      document.getElementById('pr-f-deadline')?.value || '',
              notes:         document.getElementById('pr-f-notes')?.value?.trim() || '',
              contract_num:  document.getElementById('pr-f-contract')?.value?.trim() || '',
              items:         (typeof _prItems !== 'undefined') ? JSON.parse(JSON.stringify(_prItems)) : [],
            };
            const editId = editEl?.value;
            if (editId) {
              const lsPr  = typeof DB_purchase_requests !== 'undefined'
                ? DB_purchase_requests?.find?.(editId) : null;
              const apiId = lsPr?._api_id || null;
              if (apiId) await prApiUpdate(apiId, data);
            } else {
              const apiId = await prApiCreate(data);
              if (apiId) {
                setTimeout(() => {
                  if (typeof DB_purchase_requests !== 'undefined') {
                    const all   = DB_purchase_requests.all();
                    const newPr = all.find(r => r.num === data.num);
                    if (newPr) DB_purchase_requests.update(newPr.id, { _api_id: apiId });
                  }
                }, 100);
              }
            }
          } catch (err) {
            if (VED_API_CONFIG.debug) console.warn('[PR API] prSaveAndSubmit mirror error:', err);
          }
        };
        if (VED_API_CONFIG.debug) console.log('[PR API] prSaveAndSubmit перехвачен');
      }

      // ── Patch prDelete ────────────────────────────────────────
      if (typeof prDelete === 'function') {
        const _origPrDelete = prDelete;
        window.prDelete = function (id) {
          const lsPr  = typeof DB_purchase_requests !== 'undefined'
            ? DB_purchase_requests?.find?.(id) : null;
          const apiId = lsPr?._api_id || null;
          _origPrDelete(id);
          if (apiId) prApiDelete(apiId);
        };
        if (VED_API_CONFIG.debug) console.log('[PR API] prDelete перехвачен');
      }

      // ── Patch prQuickStatus ───────────────────────────────────
      // prQuickStatus меняет статус в localStorage, но не отправляет PUT в API.
      // Патч зеркалит изменение статуса в API асинхронно, не блокируя UI.
      if (typeof prQuickStatus === 'function') {
        const _origPrQS = prQuickStatus;
        window.prQuickStatus = function (id, status) {
          _origPrQS(id, status);   // localStorage update + prLoad (debounce)
          // fire-and-forget PUT in API — after _origPrQS, localStorage already has new status
          try {
            const lsPr  = typeof DB_purchase_requests !== 'undefined'
              ? DB_purchase_requests?.find?.(id) : null;
            const apiId = lsPr?._api_id || null;
            if (apiId && lsPr) {
              // Pass full lsPr (already has updated status) so _prApiFromFrontend
              // can build a complete PUT body without losing other fields.
              prApiUpdate(apiId, lsPr).catch(e => {
                if (VED_API_CONFIG.debug) console.warn('[PR API] prQuickStatus mirror error:', e);
              });
            }
          } catch (err) {
            if (VED_API_CONFIG.debug) console.warn('[PR API] prQuickStatus error:', err);
          }
        };
        if (VED_API_CONFIG.debug) console.log('[PR API] prQuickStatus перехвачен');
      }

    }, 350);
  });
})();

/* ── Немедленный патч prPopulateModalUsers + prOpenCreate ─────────────────────
   Выполняется сразу при загрузке bridge (bridge грузится ПОСЛЕДНИМ в body,
   после всех функций app.html, поэтому они уже определены).
   НЕ требует ждать DOMContentLoaded или setTimeout — безопасно применять сразу.
   ─────────────────────────────────────────────────────────────────────────── */
(function _patchUserDropdowns() {
  // ── Patch prPopulateModalUsers ──
  // Оригинал заполняет дропдаун только один раз (dataset.filled='1').
  // Патч убирает этот кэш — читает актуальный ved_users из localStorage
  // каждый раз при открытии формы.
  if (typeof prPopulateModalUsers === 'function') {
    window.prPopulateModalUsers = function () {
      const sel = document.getElementById('pr-f-user');
      if (!sel) return;
      try {
        const users = JSON.parse(localStorage.getItem('ved_users') || '[]');
        if (VED_API_CONFIG.debug) console.log('[PR] prPopulateModalUsers: users=', users.length);
        sel.innerHTML = '<option value="">— выберите пользователя —</option>' +
          users.map(u => `<option value="${u.login || u.id}">${u.name}</option>`).join('');
      } catch (e) {
        console.warn('[PR] prPopulateModalUsers error:', e);
      }
    };
    if (VED_API_CONFIG.debug) console.log('[PR] prPopulateModalUsers перехвачен ✓');
  } else {
    // prPopulateModalUsers ещё не определена — попробуем после DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof prPopulateModalUsers === 'function') {
        window.prPopulateModalUsers = function () {
          const sel = document.getElementById('pr-f-user');
          if (!sel) return;
          try {
            const users = JSON.parse(localStorage.getItem('ved_users') || '[]');
            sel.innerHTML = '<option value="">— выберите пользователя —</option>' +
              users.map(u => `<option value="${u.login || u.id}">${u.name}</option>`).join('');
          } catch (e) {}
        };
        if (VED_API_CONFIG.debug) console.log('[PR] prPopulateModalUsers перехвачен (отложено) ✓');
      }
    });
  }

  // ── Patch prOpenCreate ──
  // Оригинал вызывает prPopulateModalUsers только если currentUser != null.
  // Патч: вызываем prPopulateModalUsers всегда — даже при currentUser == null.
  if (typeof prOpenCreate === 'function') {
    const _origPrOpenCreate = prOpenCreate;
    window.prOpenCreate = function () {
      _origPrOpenCreate();
      const sel = document.getElementById('pr-f-user');
      if (sel && sel.options.length <= 1) {
        // Инициатор не был заполнен (currentUser был null) — заполним сейчас
        prPopulateModalUsers();
        if (VED_API_CONFIG.debug) console.log('[PR] prOpenCreate: принудительное заполнение инициатора');
      }
    };
    if (VED_API_CONFIG.debug) console.log('[PR] prOpenCreate перехвачен ✓');
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof prOpenCreate === 'function') {
        const _orig = prOpenCreate;
        window.prOpenCreate = function () {
          _orig();
          const sel = document.getElementById('pr-f-user');
          if (sel && sel.options.length <= 1) prPopulateModalUsers();
        };
        if (VED_API_CONFIG.debug) console.log('[PR] prOpenCreate перехвачен (отложено) ✓');
      }
    });
  }
})();

/* ── Заглушки для отсутствующих функций app.html ─────────────────────────── */
// spTypeChanged: вызывается из onchange в форме контрагентов, но не определена.
if (typeof spTypeChanged === 'undefined') {
  window.spTypeChanged = function (sel) {
    if (VED_API_CONFIG.debug) console.log('[SP] spTypeChanged:', sel?.value);
  };
}

/* ── Доступные модули: заменяем <select multiple> на чекбоксы ───────────────
   Родной <select multiple> требует Ctrl+Click — пользователи думают что зависло.
   Патч запускается после DOMContentLoaded и заменяет select на набор чекбоксов.
   Функция addUser() в app.html читает selectedOptions — переопределяем её тоже.
   ─────────────────────────────────────────────────────────────────────────── */
(function _patchAccessSelect() {
  const MODULE_OPTIONS = [
    { value: 'all',      label: 'Все модули' },
    { value: 'contract', label: 'Договор' },
    { value: 'spec',     label: 'Спецификация' },
    { value: 'invoice',  label: 'Инвойс' },
    { value: 'rfq',      label: 'Экспедитор' },
    { value: 'tracker',  label: 'Трекер' },
    { value: 'customs',  label: 'Таможня' },
  ];

  function replaceSelectWithCheckboxes() {
    const sel = document.getElementById('nu-access');
    if (!sel || sel.dataset.replaced) return;
    sel.dataset.replaced = '1';

    const wrapper = document.createElement('div');
    wrapper.id = 'nu-access-checkboxes';
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:6px;padding:8px 0';

    MODULE_OPTIONS.forEach(opt => {
      const label = document.createElement('label');
      label.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--text)';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = opt.value;
      cb.name = 'nu-access-cb';
      cb.style.cssText = 'width:15px;height:15px;cursor:pointer;accent-color:var(--co-accent,#4a9eff)';
      if (opt.value === 'all') cb.checked = true;
      // Если выбрано "Все модули" — снять остальные, и наоборот
      cb.addEventListener('change', function () {
        if (this.value === 'all' && this.checked) {
          wrapper.querySelectorAll('input[name="nu-access-cb"]').forEach(c => {
            if (c.value !== 'all') c.checked = false;
          });
        } else if (this.value !== 'all' && this.checked) {
          const allCb = wrapper.querySelector('input[value="all"]');
          if (allCb) allCb.checked = false;
        }
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(opt.label));
      wrapper.appendChild(label);
    });

    // Скрыть оригинальный select, вставить чекбоксы рядом
    sel.style.display = 'none';
    sel.parentNode.insertBefore(wrapper, sel.nextSibling);

    // Переопределить addUser чтобы читал чекбоксы вместо selectedOptions
    if (typeof addUser === 'function') {
      const _origAddUser = addUser;
      window.addUser = function () {
        // Подставим значения чекбоксов в оригинальный select перед вызовом
        const checked = Array.from(
          wrapper.querySelectorAll('input[name="nu-access-cb"]:checked')
        ).map(c => c.value);
        // Синхронизировать с <select> так чтобы _origAddUser прочёл правильно
        Array.from(sel.options).forEach(o => {
          o.selected = checked.includes(o.value);
        });
        _origAddUser();
        // Сбросить чекбоксы после добавления
        wrapper.querySelectorAll('input[name="nu-access-cb"]').forEach(c => {
          c.checked = (c.value === 'all');
        });
      };
    }

    if (VED_API_CONFIG.debug) console.log('[Admin] nu-access заменён на чекбоксы ✓');
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(replaceSelectWithCheckboxes, 400);
    // Также патчим кнопку "Добавить пользователя" — форма скрыта до клика
    const toggleBtn = document.querySelector('button[onclick="toggleAddUserForm()"]');
    if (toggleBtn) {
      const origOnclick = toggleBtn.onclick;
      toggleBtn.addEventListener('click', function () {
        setTimeout(replaceSelectWithCheckboxes, 50);
      });
    }
  });
})();

/* ════════════════════════════════════════════════════════════════════════════
   📋  PURCHASE REQUESTS — импорт из localStorage
   ════════════════════════════════════════════════════════════════════════════ */

/**
 * prApiImportAll()
 * Импортирует все записи из ved_purchase_requests → PostgreSQL.
 * Идемпотентен — пропускает уже существующие (по request_number).
 */
async function prApiImportAll() {
  const raw = localStorage.getItem('ved_purchase_requests');
  if (!raw) { console.log('[PR] localStorage пуст — нечего импортировать'); return { created: 0, skipped: 0 }; }
  let rows;
  try { rows = JSON.parse(raw); }
  catch (e) { console.error('[PR] Ошибка парсинга localStorage', e); return; }
  if (!Array.isArray(rows) || !rows.length) {
    console.log('[PR] Нет данных для импорта');
    return { created: 0, skipped: 0 };
  }
  console.log(`[PR] Импортируем ${rows.length} заявок…`);
  const res = await apiFetch('/api/v1/purchase-requests/import', {
    method: 'POST',
    body: JSON.stringify({ rows }),
  });
  if (!res || !res.ok) {
    const text = await res?.text?.() || '(нет ответа)';
    console.error('[PR] Ошибка импорта:', res?.status, text);
    return null;
  }
  const result = await res.json();
  console.log(
    `%c[PR] Импорт завершён: создано ${result.created}, пропущено ${result.skipped}`,
    'color: #2a7a4b; font-weight: bold;'
  );
  if (result.errors && result.errors.length) {
    console.warn('[PR] Ошибки при импорте:', result.errors);
  }
  return result;
}

/* ════════════════════════════════════════════════════════════════════════════
   🛃  CUSTOMS DECLARATIONS — импорт из localStorage
   ════════════════════════════════════════════════════════════════════════════ */

/**
 * cdtApiImportAll()
 * Импортирует все записи из ved_customs_declarations → PostgreSQL.
 * Для каждой декларации ищет API UUID поставки через `_api_id`
 * или по `shipment_number`.
 */
async function cdtApiImportAll() {
  const rawDecls = localStorage.getItem('ved_customs_declarations');
  if (!rawDecls) { console.log('[CDT] localStorage пуст — нечего импортировать'); return { created: 0, skipped: 0 }; }
  let decls;
  try { decls = JSON.parse(rawDecls); }
  catch (e) { console.error('[CDT] Ошибка парсинга localStorage', e); return; }
  if (!Array.isArray(decls) || !decls.length) {
    console.log('[CDT] Нет данных для импорта');
    return { created: 0, skipped: 0 };
  }

  // Build shipment_number → api_id map
  // Step 1: from localStorage _api_id (set when created via UI)
  const shipIdMap  = {};  // local_id  → api_uuid
  const shipNumMap = {};  // ship_num  → api_uuid
  try {
    const rawShips = localStorage.getItem('ved_shipments');
    if (rawShips) {
      const ships = JSON.parse(rawShips);
      for (const s of ships) {
        if (s._api_id) {
          shipIdMap[s.id] = s._api_id;
          if (s.shipment_number) shipNumMap[s.shipment_number] = s._api_id;
        }
      }
    }
  } catch (e) { /* ignore */ }

  // Step 2: fetch all shipments from API to fill gaps (bulk import doesn't set _api_id)
  try {
    const apiRes = await apiFetch('/api/v1/shipments?page_size=200');
    if (apiRes && apiRes.ok) {
      const apiData = await apiRes.json();
      for (const s of (apiData.items || [])) {
        if (s.shipment_number && s.id) shipNumMap[s.shipment_number] = s.id;
      }
    }
  } catch (e) { /* ignore — will fall back to local map */ }

  // Pre-build local shipments lookup for fast access
  let localShipsById = {};
  try {
    const rawShips = localStorage.getItem('ved_shipments');
    if (rawShips) {
      for (const s of JSON.parse(rawShips)) {
        localShipsById[s.id] = s;
      }
    }
  } catch (e) { /* ignore */ }

  // Enrich declarations with resolved shipment_api_id AND shipment_number
  const rows = decls.map(d => {
    const row = { ...d };

    // Resolve local shipment record by shipment_id
    const localShip = row.shipment_id ? localShipsById[row.shipment_id] : null;

    // Get the shipment number (localStorage uses 'num', API uses 'shipment_number')
    if (!row.shipment_number && localShip) {
      row.shipment_number = localShip.shipment_number || localShip.num || null;
    }

    // Try to get api_id from local _api_id (set during UI creates)
    if (!row.shipment_api_id) {
      row.shipment_api_id = (localShip && localShip._api_id) || shipIdMap[row.shipment_id] || null;
    }

    // Try to get api_id from API-fetched map via shipment_number
    if (!row.shipment_api_id && row.shipment_number) {
      row.shipment_api_id = shipNumMap[row.shipment_number] || null;
    }

    return row;
  });

  console.log(`[CDT] Импортируем ${rows.length} деклараций…`);
  const res = await apiFetch('/api/v1/customs-declarations/import', {
    method: 'POST',
    body: JSON.stringify({ rows }),
  });
  if (!res || !res.ok) {
    const text = await res?.text?.() || '(нет ответа)';
    console.error('[CDT] Ошибка импорта:', res?.status, text);
    return null;
  }
  const result = await res.json();
  console.log(
    `%c[CDT] Импорт завершён: создано ${result.created}, пропущено ${result.skipped}`,
    'color: #2a7a4b; font-weight: bold;'
  );
  if (result.errors && result.errors.length) {
    console.warn('[CDT] Ошибки при импорте:', result.errors);
  }
  return result;
}

/* ════════════════════════════════════════════════════════════════════════════
   🔄  ПЕРЕКЛЮЧЕНИЕ НА ЧТЕНИЕ ИЗ API (Shipments — Фаза 1)
   ════════════════════════════════════════════════════════════════════════════ */

async function _shipsEnableApiReads() {
  console.log('[Ships] Переключаемся на чтение из API…');
  VED_SHIPS_API_CONFIG.readFromApi = true;

  if (typeof shpLoad === 'function') {
    const _origShpLoad = shpLoad;
    window.shpLoad = async function () {
      try {
        const company = window._activeCompany || null;
        const apiRows = await shipsApiFetchAll(company);
        if (apiRows && apiRows.length >= 0) {
          // Build lookup from existing localStorage data to preserve embedded
          // sub-data (items, docs, payments, events, customs_data) and local IDs.
          // The API does not store these fields — they live in localStorage only.
          let localByNum = {};
          let localById  = {};
          try {
            const existing = JSON.parse(localStorage.getItem('ved_shipments') || '[]');
            for (const s of existing) {
              if (s.shipment_number) localByNum[s.shipment_number] = s;
              if (s.id)              localById[s.id]               = s;
            }
          } catch (_) {}

          // Merge: for each API row, inject embedded data from matching local record.
          // Keep the LOCAL id so all existing FK references (items, events, etc.) stay valid.
          const merged = apiRows.map(apiRow => {
            const local = localByNum[apiRow.shipment_number] || localById[apiRow.id] || null;
            const row   = _shipsApiToFrontend(apiRow, local);
            // Restore original local id if we found a match — avoids breaking FK chains.
            if (local && local.id) row.id = local.id;
            return row;
          });

          localStorage.setItem('ved_shipments', JSON.stringify(merged));
          if (VED_API_CONFIG.debug) console.log(`[Ships] Загружено и слито ${merged.length} поставок из API`);
        }
      } catch (err) {
        if (VED_API_CONFIG.debug) console.warn('[Ships] Fallback на localStorage:', err);
      }
      _origShpLoad();
    };
    console.log('[Ships] shpLoad перенаправлен на API');
  }
}

/* ════════════════════════════════════════════════════════════════════════════
   🛠  МАСТЕР-КОНСОЛЬ VED_MIGRATION
       Удобные команды для управления миграцией из DevTools
   ════════════════════════════════════════════════════════════════════════════ */

window.VED_MIGRATION = {

  /** Показать текущий статус всех модулей */
  status() {
    console.group('%c[ВЭД Миграция] Статус', 'color: #2e6fb5; font-weight: bold;');
    console.log('Backend URL:', VED_API_CONFIG.baseUrl || '(same-origin)');
    const icon  = VED_SHIPS_API_CONFIG.readFromApi ? '✅' : '⏸';
    const phase = VED_SHIPS_API_CONFIG.readFromApi ? 'Фаза 1 (читает из API)' : 'Фаза 0 (dual-write)';
    console.log(`${icon} Shipments: ${phase}`);
    const prIcon  = VED_PR_API_CONFIG.readFromApi ? '✅' : '⏸';
    const prPhase = VED_PR_API_CONFIG.readFromApi ? 'Фаза 1 (читает из API)' : 'Фаза 0 (dual-write)';
    console.log(`${prIcon} Purchase Requests: ${prPhase}`);
    console.groupEnd();
    const lsKeys = [
      'ved_shipments', 'ved_shipment_items', 'ved_purchase_requests',
      'ved_rfq_requests', 'ved_rfq_quotes', 'ved_invoices', 'ved_packing_lists',
      'ved_customs_declarations', 'ved_payments', 'ved_fx_rates',
    ];
    console.group('%c[ВЭД Миграция] localStorage', 'color: #c4943a; font-weight: bold;');
    for (const k of lsKeys) {
      try {
        const data = JSON.parse(localStorage.getItem(k) || '[]');
        console.log(`  ${k}: ${Array.isArray(data) ? data.length : '?'} записей`);
      } catch {
        console.log(`  ${k}: ошибка чтения`);
      }
    }
    console.groupEnd();
  },

  /**
   * Синхронизировать список пользователей из backend → localStorage.
   * Нужно для работы поля «Инициатор» в форме Заявок на закупку.
   *
   * ВАЖНО: использует стратегию MERGE, не overwrite.
   * Старый формат localStorage ({name, login, pass, dept, access, active})
   * сохраняется — backend-записи только добавляются если логина нет в списке,
   * или обновляют поле name если он изменился.
   * Это предотвращает поломку раздела «Пользователи» (который зависит от
   * полей pass/dept/access/active).
   */
  async syncUsers() {
    try {
      // DEFAULT_USERS определены в app.html — используем их как базу если ved_users пуст
      const DEFAULT_FALLBACK = [
        { name: 'Администратор', login: 'admin',   pass: 'ved2026',  dept: 'admin', access: ['all'], active: true },
        { name: 'Кириллюк С.Г.', login: 'kiriluk', pass: 'endv2026', dept: 'ved',   access: ['all'], active: true },
        { name: 'Логист',         login: 'logist',  pass: 'log2026',  dept: 'log',   access: ['rfq','tracker','customs'], active: true },
      ];

      // Прочитать существующий список (сохраняет старый формат с pass/dept/access/active)
      let existing = [];
      try { existing = JSON.parse(localStorage.getItem('ved_users') || '[]'); } catch(e) {}

      // Если ved_users пуст — засеять DEFAULT_FALLBACK сразу
      if (existing.length === 0) {
        existing = DEFAULT_FALLBACK;
        localStorage.setItem('ved_users', JSON.stringify(existing));
        console.log('[ВЭД] syncUsers: ved_users был пуст, засеян DEFAULT_FALLBACK');
      }

      // Попробовать получить пользователей из backend (merge)
      if (typeof apiIsDown === 'function' && apiIsDown()) return;  // предохранитель открыт — не штормим
      const base = VED_API_CONFIG.baseUrl;
      let resp;
      try {
        resp = await fetch(`${base}/api/v1/users/migration-list`, { signal: AbortSignal.timeout(3000) });
      } catch (e) {
        if (typeof _apiMarkDown === 'function') _apiMarkDown();   // открыть предохранитель
        return;
      }
      if (!resp.ok) {
        console.warn('[ВЭД] syncUsers: backend вернул', resp.status, '— используем локальный список');
        return;
      }
      const apiUsers = await resp.json();

      // Merge: backend → localStorage (не затираем поля pass/dept/access/active)
      const byLogin = {};
      existing.forEach(u => { byLogin[u.login] = u; });

      let added = 0;
      apiUsers.forEach(apiU => {
        if (byLogin[apiU.login]) {
          byLogin[apiU.login].name = apiU.name;  // обновить только имя
        } else {
          byLogin[apiU.login] = {
            name:    apiU.name,
            login:   apiU.login,
            pass:    '',
            dept:    apiU.department || '',
            access:  ['all'],
            active:  apiU.is_active !== false,
            _api_id: apiU.id,
          };
          added++;
        }
      });

      const merged = Object.values(byLogin);
      localStorage.setItem('ved_users', JSON.stringify(merged));

      // Сбросить кэш дропдауна инициатора (чтобы перечитал свежий список)
      const sel = document.getElementById('pr-f-user');
      if (sel) delete sel.dataset.filled;
      const fsel = document.getElementById('pr-filter-user');
      if (fsel) delete fsel.dataset.populated;

      console.log(`[ВЭД] syncUsers: ${merged.length} пользователей (новых из API: ${added})`);
    } catch (e) {
      console.warn('[ВЭД] syncUsers error:', e);
    }
  },

  /** Шаг 1: Импортировать поставки из localStorage в PostgreSQL */
  async importShipments() {
    return shipsApiImportLocalStorage();
  },

  /** Шаг 2: Переключить чтение поставок на API */
  async enableShipmentApiReads() {
    return _shipsEnableApiReads();
  },

  /** Импортировать purchase requests */
  async importPurchaseRequests() {
    return prApiImportAll();
  },

  /** Переключить чтение заявок на API (Фаза 1) */
  async enablePrApiReads() {
    return _prEnableApiReads();
  },

  /** Импортировать customs declarations */
  async importCustomsDeclarations() {
    return cdtApiImportAll();
  },

  /** Импортировать ВСЕ доступные модули */
  async importAll() {
    console.log('%c[ВЭД Миграция] Начинаем полный импорт…', 'color: #2e6fb5; font-weight: bold;');
    const results = {};

    if (typeof shipsApiImportLocalStorage === 'function') {
      results.shipments = await shipsApiImportLocalStorage();
    }
    if (typeof siApiImportAll === 'function') {
      results.shipment_items = await siApiImportAll();
    }
    if (typeof paymentsApiImportAll === 'function') {
      const ships = (typeof DB_shipments !== 'undefined') ? DB_shipments?.all?.() || [] : [];
      const mappings = ships.filter(s => s._api_id).map(s => ({ apiId: s._api_id, localKey: s.id }));
      if (mappings.length > 0) results.payments = await paymentsApiImportAll(mappings);
    }
    // Purchase Requests
    results.purchase_requests = await prApiImportAll();
    // Customs Declarations (needs shipment_api_id from already-imported shipments)
    results.customs_declarations = await cdtApiImportAll();

    console.log('%c[ВЭД Миграция] Импорт завершён:', 'color: #2a7a4b; font-weight: bold;', results);
    return results;
  },

  /** Переключить ВСЕ модули на чтение из API (Фаза 1) */
  async enableApiReads() {
    await _shipsEnableApiReads();
    await _prEnableApiReads();
    if (typeof VED_ITEMS_API_CONFIG !== 'undefined')        VED_ITEMS_API_CONFIG.readFromApi = true;
    if (typeof VED_PAYMENTS_API_CONFIG !== 'undefined')     VED_PAYMENTS_API_CONFIG.readFromApi = true;
    if (typeof VED_CURRENCY_RATES_CONFIG !== 'undefined')   VED_CURRENCY_RATES_CONFIG.readFromApi = true;
    console.log('%c[ВЭД Миграция] Все модули переключены на API (Фаза 1)', 'color: #2a7a4b; font-weight: bold;');
  },

  async phase1() { return this.enableApiReads(); },

  /** Проверить здоровье backend */
  async healthCheck() {
    try {
      const res = await fetch(VED_API_CONFIG.baseUrl + '/api/v1/health');
      const d = await res.json();
      console.log('%c[Backend] ✅ Доступен:', 'color: #2a7a4b;', d);
      return d;
    } catch (e) {
      console.error('%c[Backend] ❌ Недоступен:', 'color: #c0392b;', e.message);
      return null;
    }
  },

  help() {
    console.log(`
%c╔══════════════════════════════════════════════════════╗
║         ВЭД Система → VED Manager: Миграция         ║
╚══════════════════════════════════════════════════════╝%c

Команды (вызывать в консоли DevTools):

  VED_MIGRATION.status()              — состояние модулей
  VED_MIGRATION.healthCheck()         — проверить backend

  ── Пошаговая миграция Shipments ─────────────────────

  Шаг 1: await VED_MIGRATION.importShipments()
           → Импортирует localStorage → PostgreSQL (один раз)

  Шаг 2: await VED_MIGRATION.enableShipmentApiReads()
           → Переключает чтение на API

  Шаг 3: shpLoad()
           → Убедиться что список загружается из PostgreSQL

  ── Миграция отдельных модулей ───────────────────────

  await VED_MIGRATION.importShipments()            — Поставки
  await VED_MIGRATION.importPurchaseRequests()     — Заявки на закупку
  await VED_MIGRATION.importCustomsDeclarations()  — Таможенные декларации

  ── Миграция всего сразу ─────────────────────────────

  await VED_MIGRATION.importAll()      — импорт всех модулей
  await VED_MIGRATION.phase1()         — чтение из API для всех

`, 'color: #2e6fb5; font-weight: bold; font-size: 12px;', 'color: inherit;');
  },
};

console.log('%c[ВЭД API] Мастер-адаптер загружен. Вызовите VED_MIGRATION.help() для инструкций.', 'color: #2e6fb5; font-weight: 600;');
