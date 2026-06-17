
const ENDV_LOGO_B64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAACMCAMAAABI8CAQAAADAFBMVEV2cHEAnWJWUVKKhIUAroFmYGKSjY0Aml0sto/2+/mR0rlEupVaVVZhwaBFQEHt9/Om2sWp28bO6d0AmFlybG1dV1hNvZmBzLC7tba44c+U07rh8uqalJWvqao2MjTZ7uV6yaxoxKTE5dYAkEvY1dZ1yKpKRUaqpaUApXE5NDYzt5BoY2QArX4AnmS3srMXtItLRkhqZGViXF4Akk4AlFG+uboAom18dneOiYqs3MhCPT5AupQApnSJz7TB5NS74tFyx6k9uZOinZ0As4k7Nzg7uZJUT1BvaWoAn2YjtY2N0Le1380AllUAqnoAsIRlw6MAl1cAlFB+eHlcwZ99y67K6NsAqXgAoGlIu5eZ1b2dmJmGgIHNysp0b3CBfHxgW1xDPkBIQ0RuxqeRi4vAvL2WkJGEzbJPSUo8ODk+OTsAqHad1r9AOz1Wv5xTTU+Yk5NfWlpkX2AAoWqloKCgmpv4+Pj9/f19eHiyrq/h399xa2w4NDXQzMxRTE04MzXb2Nn7+vpnYWPc2tpNSEn08/T08/N/ensAkUzn5eZvamrEwcL9/v7JxcVQS0z4/Prd29w/Ojvw7/Dn9O7JxsdQSkv29vZ5dHQ9ODrp9e/z+vf6/fv8/f0Ak083uJHw+PReWFnr6erj8+zg3d5YU1Q5NTZ7dXbl4uOFf4A/Ojzy+fV7dnZwa2vU7OF6dHXl9O1PSktTTk/Szs+gm5tBPD1tZ2jT0dLe8egLs4qHzrOspqanoaHS6+Coo6SyrK3q9vHW7eJtaGkAsYd5c3QAomtsZmcAsoenoqKv3crHw8RZv53H59m94tJlYGFRvZro5+ex3svt7OyCfX7c8OcAkk3U0NFdWFlfWVqsp6jX7uMAm2DW0tMAq3yDfn+xq6y0r7CAzK+i2MJcVldgW1vLx8jy8fHv7u4ApG/Dvr/m5OSUj4/Pzc4AlVPi4eJ4cnOg18GMh4ekn5/s6uu/49SX1Lwwt49kXl+f18Ccl5iIgoOIg4SEfn5DPj9nxKMAkEk1MTP////QJoruAAAVb0lEQVR4Xu2dCXxOx/rHh9hb4Z+roUGEkIbUUnXFkoqt+Suupe61VkVsLWIpEluaE4QmDbGrJYJeaSlVW+1bq4iitJQbS1O13KrGUjdq7X3PebeZZ2bOmfMm5O195/v5eN8zvxMR73Nm5pnneWZS6A8k8UgKQ0HiIUjLeyrS8p6KtLynIi3vqUjLeyrS8p6KtLynIi3vqUjLeyrS8p6KtLynIi3vqRSBggn+1eLufVS89tjX4A3JnwAXLf91t5+6nM+8ZG1cb1fhU99fyS+QuDuFXMjPt790JhdqqEjLT9JGQ1Hivpju86knr2yGmspDhCZ+nvRXKEvcFZOWT42/T3d3O7koqNaXN6AqcU/MWf7uqIdQIshCKDQwA6oSd8TMPF82fB2UWISX2QQlifthYj3vd1vI8GjfmY5iXygpSMRH++zJfaHEIQv5lvp/KErcDGHLe/tmQYnPNVS0vG2xL3FTvBSosCl/PRpKusTt3/M3qEncCUHLe1+HihHd2td5ti4UJe6DmIdXwRcqApxoFA4lifsg1OePhCyFkgg+HR4Xg5rEXRDp86ujRL16gM/cTlCSuAsivn2l41ARJQZt/WkAFCVugUCf93kTKiaIWLEQShK3wNjyS0JNLORp9oWUhZLEHTC2/EFmUlacJs+vhpLEDTC0/JJYqJjl1JxSUJIUPIaWT6wOFdPsa70YSpICx3A936AyVMzTvW+x+lCTFDBGfT6wCVRc4UQtqEgKGqP1fCAUhEgf0gntHB3jFBpV/cHZkLgDRpbfCQVDitQ5O2NQP8tFyqlmbS50tpm/XPg+4qskBY1BNVbABajo0/FCCLmGmzPD96B20a7zQOKGpIAx6POFoKBLl12zYIQ/OhodGtDL0vE37wd3JAWLQZ8/0AgqfBrendsCalYCG3xkee32CdQlBYhBn+93Cipczs3lPiXnUcWrD1H23ubwhqTgMLD8L1DgcmHPIChhXF60Pyyz7ndQxomt8mOS/RIORAE3bRfjCZnL1GcvJUPNDfi8Zv+qgaezjtwJCq8p+D+xkFDCee3P/Ah97R8PQmULX7Z/igboj/bpfaDCoWHWbShB/pGdOWwuFB0k5JRVoMZgYZz2LM5ObzfZoWX80DDC0VAJbjnPfhkQ+ejWjjPqVZ8aV85Gjs92fBHK2BkYX29crxjnN1LZeKLcJVIxICMlpRUhxO4YeFWxN5Tnr3sPs15tu5/Qzi4jFFfilY1ehI3iDgc2RctQdVT32xfO3Ymp6G3TC/2zJ/5lhigHcrt8+3h2RAuDJ0Df8jtbQoVN6DmBTVWBQWU+hpqDuoI1AKnvqK/PXyHE1S+G4M0XyY6x9u+Wlx2tCQ2jbNrLVR2N2Gvmq4/CIuLx5rXn8BZSOr1keVJ9k3KyCVll8+91azhbR8kw54Al1vfg04QszpA1O72IjwXAjd42UZfkOc9DmYmQ4dHw3JTMXlC0U68SVNjsbqa+1nfaSiUkce+rWLNUPayBUG91GtregNAwxtYqm7pqj+3v1zHXvzSiNhFDjve7eAt91Q3FfBDUZ9AIQtUIqpXaprTDOUpqg99D379iff8tjJDFaTem/LwNhfmROF70tv159ZUcRXnknOcafjGeqxk4jW9ec+HdHaA98yW8BerDtYow0hyAkan+thBjJnlDjK14Y/xEvGXpWsh/4RqeCzT5Xol79mvHhZX1tve8JMyUGa9O8YeiHY6Hl/pIu6E7FdjJCcqBksqcT703XkvqX67P2cxVza1SPuyvXws+WBtprcgxluIzKJAMViYp6ph9Ed4QYUACNtzHk0WnccUX9FUIhWQQOn3fWpxOdnkHD6BgjgkPCo1hO7scy4cP15ZzsG+xSB7KMvze31eo/ScLqdHb5LhaNQysPvl9qJhie5t6+g7NIKZT7ERR2nxDDBwmGDYGa3QgRgA0rd4Rok0T3O/Ls+r7ZXjDCubYu4SiJP7C7BXs0X6df2ht9f1HeIPBoWehYiF7egQ2cMbsW7CiQoqznQd4u/e3ToIKSVcoUGyN+hBKomDG/hAENVoaGd4yXl37HEoYP0PBNBNimSfZsC1/w6ec9q56eQbUZ42jS/3t05Sd41d2+QDJJZpCwU77DVAxy7Epy6EkyIAEx2VRxSmrbCebTG6uUZcqFaFs5UUomCdtwmwoIY7lv9uEqmkXN7uAOxThQ6BioXwkVCxsjim5CGr5yPbOumVjIrWAZ6KcFjTFsN8clyUxWZg0NaxDzhIO9BZmoiyYABXEsXzDNegL69V88gZFkTcY5fQVr0JFI+Y/b+W9zGMtFBw8nA4V0zzkR5r0cVht8jFcFiadH+jIF24z8qQsyy9qjWx9HhnUU3TMZKxX0pnTisrD+/+AklmIoAlJC73pUozBxu4AE8dw31PBZXFOcgMnf4GCS6yiB0SWb//RLsdiIlKLfPJIrsI6Cyua54UhdDjocEOosdk8DSoq46YxAiJ2thd5BCWzKMPAjDiM14dbECFeh3c/eyYuizM5GPFjHfnAzUNQYVq+vOXPHuvluFC92MYYL6hYWKy3DslCbcV65omvoKLRHgo4D2/meVMHdIUC5gDBzlGyudW6clFc/gF6+YMBeRTZtNPPaFfz3rIVOm+lJ+kBJ6HCsPxx9XArW/Su7wvELZLtzOCD/zWoEGwKe3IlGh9P11bGT4NeZDjdFsx5XVsL65GR8u3scqw5hbOcR73J5nKRce2vD0LhWNUdtJnzfGP1xR69y03H7pCE/wQVDd1uaeELTvlGPjDo31Dh8XZCwuEdkW0CoC5MR7J327z7NYRI82hAi28eDTm2m9HfHuZjnaJfsU7wEaxKLVsYlteMbt8H2Zpbj1XkHYZbb8GwlmOOC1kRQW5rT60AvooSGrF82x+J8IYoScD31bz7GtwPy8rK3CV+lrekVqPfC4D3hFb+wsS3BRscegaRbZblj2sOmuNsq6FYUhmn3iedoaSxxTDFUOu3ACjlG30UqOhy0dueBTfNI4Voat59E1KDJObY/7Wkcf8k7jCwx+u3EKowyXD4odwr2vLWlHEVezM3q6PjFkbjBE6Qx5Zc1GN9HajkG4NMLuqHjXV1889z5F/Uhnv9c4GUDdYaDY1Nqc7rJwLssNRaiZ5xGms1Eut32ksZzvt1hKFYhHqMYvd4i0+4Cio0n1UwnJADVgLh9JwYViQKcru/raJBkAnZigI1jLQK6utp6xomaNsK7NZ7HbCG5t2fvUUokGn3sUZSvg7uAvwCV42U5SvZFmVOH/JKeE9wlG3or/wyfKFDtBqv4z04dmhfYLJuit1BsZk6S34Gi30VKGGQTsuXeOODCMJ4Fu9+jYILFOQ6LSIqjWjzYETfhAB1dHEPYCaSGu0fZlnfsdT8vtBe+Ijv2yyab3j10GNj1i6AigBiU/K8qVAxgOy64tQlR0LLcK//A4aB8TaYbOYzScAOJagkNmX5T23vWiWLjZEfffl6dKh6FdpuWbmx+/WOT8Eqy3TIeHJnqPysH0+gcNXyCMSatp5iV0DYgaGGSNAG2ONhsKuKUaMoqCekgyjUaB9mO8c81w+vcryJUIp/ddTla4SiMJkBx/ED+OxlBPzzCeU9qOhyKSAbSjzIyNXODOLTHdAvG29SQFeygUjxA0I6wyuXhrkBI4FEl/ZAy6c7BkuYPhptUFVjI7qw/hH4Nu4scnUCM8RRci3Gj5FQESSJHPqG6aY4EIJLJMHTZHfjBT9ODvJOki+z6t03neX3dvrRBajQ8qMcHtrME4I/G2AvFJisfxsqBUV3slJXDxBhnUqOFnSwnKAbaAs5RFxGWvepMhijDtCQ+9Q0T83zzqDkmnGYbAJusSfJASjkhTgomMClWgqNSsB/JqDW63C1QiwU+LhoBZL6augQAC2PxZZmuZYa3iiWhy2RnwU6efEXa0JBHJ1lRFgMVGDy8RxoA/Jef+ckpCjD+YSWx7Yw9OXWvOkSDR0ENpmOKGE+UJaONYkyfyNU+ICSeJQG4hwYzamoQiQojsACenrcgYJ5lPOHoYR0LY8+U7clmUc/hulgFhSMgD8qxpuNXC5Xqw3DnCbow69Kjw6Aymzy6UykUihsOBn/5lDgoyTCJ1YDeHhLFLzV4K4rk+AsX6EVtX6hF9WbTit0itlJBXq9KsbGI7q7l0KIiDFVrMDOU1tInHgrA07sZD32kDJE88kRprAXW8Dy1YnVekzHX11wxPr3gAoTfQ8nmw7Sc8qSrby33mBRxeZmpv7G2X69oELQjFdmEosmeEHL7/G/6GwsPwLLfwD2autoUP1jkoxpE/AthxhgCH2dbK5/MJQUhHgMBSY+rMoUl0leoEDJkPkb3y2jb3gj4jlLs5DbCMGUE8pu5YxvxngZGB7ZKwfylNcs+75yktcPgeWLkU2U+ZLAZgtIabGBAoYS8kZLWIWiS0juyxffXdeeKlQxC+XBW7luWRbVDoDq0lfsKcqkZfpjCXJsbIsFBrIfJAtjwSyiUm7F8L8OfGPK3em7uLb5JZPYRqrSUMgbjTm+kBXwSHcteaRyQj4kSsewA1LFLX9C6JKltF2bdyei2LhGG+g1mwL8jUpW008BGT12RI/N0lN6TzawPOMQoxPDTRfJH2EsH2n4jrFLVNwaAKWnQHMoqMzWRlhGj+nZtsWiwUUnHWR4B1XB8J99rU2vuiNGVidVvf0GNOk/6JgeDLl7yaZGLqp54P+gqMulVzijIIFuqeYHjBCkE1CQaqVxPgwiZcE/G8sqIbnS/bxjtd6CcuEtVB+uvvZMpL1Ui0WhYEXZ0hJWzmnfeAYpIladu8pKNVtRYzlQ0y/hG7xJgOWb3SbbVk6h1/xCzWRYhKZw3dOXMDdYmDE8T1uYDCyEqUGnuDSczk951leM1ybNJBMxIlT1sOHMr0EVVdm4osXx28CqvUo3Y3jjLxjtedXcmxdvDGkORT6vi0RwN0Mhr/TZBRWzvMEKdjFo5bxkzFnBJ6zvf6Pcey4Rd1BT1t5USH39eb4uVRwy4wFv+AWW59dPrv9ud7miVeEzxSE6ECoMtBK3fKVEX6iYo43C2i3GANtmUZGOwjo2PnsR0REdAqoORYNFMvHV7Bd01lUlaT9V6TOjL8f0wPK6RQ3X7p2PLnyuRzOBTI5I3xGr3jGFn9EqWZewN+KFpimCZGrdpDjWlz0qUKFINivU9FWCccZxtVGaq+771IMYzDE9+K8213WstKSyZQi7fub9KmuLZsObGDfSjbsfN8PsOlOLU/9xcVbX6o2GvwZVQ3KgUOMNxyVRbssn/vdwy2uodiiVLrtgkp+iw9BG0OUMjmTO9aDPi43APk3WzfzpwvXQjtW+g7ds3DROniWbLI0X4h410QmzevpihMTcLILDsMwqArsuxthMQ5EaaLXMWa4fbuOSUZe3cDEqAEo1I1m9HljezJ43n4PrznUOHcY+yyAAChTjjUcFFzg2GCqC1C+pzlC60SAOIL66kCj4H5dkOIYXaWWr8IgvCh8iEm9gLDb36GVRzWUM04Nv5jz2Q4ysgzNf+IJle84mYAyX86q61JgJFSGU2n21GlyhLCOgImnbueOJZvc1+hOQUni0I60dN4K5O9lG8dG6OSsHMe9ABf3MMD2w/DayKUKtsHBGqnk3a2ohENtoIAYWw3l3g/NamPqrTlrto4VgTDKVjHTADW1nAhsEAAmjX7M/sBK5Ph19eR1i4YWR+GSgk5lMeo4OKf88lDI9sPw4/qZpPj5nQHG3hb6GXi2ZQ2pLtMyChRiTXmb+y7wTEFTW+0fYP8gZzL9MkUm0fPFGMLWuGnG0JK8rh0WWw0IDFgb/ks5cXiijngmkiyg5jK9A1xxUpkwPLD8aPrFiRLamkjRG5W3tSE/2suF0qMPC77FGpVcDsJYF1W+2vjCIe/vGvE4/OT5UUEnNozLRise9Ax/s2s6ZbT8co6P4SpEBTZdTQ2PoI7/PYUwnqvDjGSBgDQsziRCccgH3Mq1Uhkki+IRdAm1BtneG1fi/gzbkGNnsPbABt8DFgKOvpb6Ft32/ro1P19mameI+KP0hJlrYmdb1rYzqg6cgogRh+sRezfE2g729n7tKCEkRo+rYelTbx8yUAqqGMltX7OJ1yF4OkDGpaOnBnIDpVbRv947g4Q2zsi02vHbvRPp1X2yrm430+94K1owi90teHZD4QCEUlKHmD3HgKedhX5BtYVrtIdsl/0O2IUcFw2X/U8TWq3ar39mJg1fcFRi6Y4p41TrO/7qpXuqvOVB/qcHKWb/Sz9vUu2S7JOl40pbfxqndMSTneGuiXZ7sF5BokzthJPkNXCJ2E8m1sPBZR7afIZuQj6AgecpAy980GKT5zCGzNPpV9+FUzFPylIGWR66O9vA8bur8NQL9u5KnAGV5e82nechlmm7gvjj3l2BInhaU5Usb7Pfik0t49/RCxEkX9ZRNScFCWZ6T8xeBSHTBwAGOr4tRA0k+Qlt+CdziLwx+sEeqTtneM3Q8S/LUoS3fFYRkxJmPXX/Cz8GG68XQJU8L2vJovnYWkgvg2WX+7who17U/lCQFAMPyb5orrneQjv9CsUjsmqDed64dwiLJZxiWR/vFT47B2Y6dx9TkuPOaoN5K6d25ByzL5y6icoci4AkyXm1PyBBTGx8lTw6W5VEjV/YadsROJz0OEkV2iv/45I7Bk5gD5uetHAoxPKWeIs6Z60lJY+4rD63D2ookKRiYfR7ljjA91Zdq7rw+xHxuxuTkZ+mdJI+wLY8GzS4FJX2+L5nruPbLduoOkpdVIgP7koKFY3nUfD9RV2jIRGcOZm0OY29VqR5R8ChWSYHCszxq8DF1foYOzT5zXK5LcPZ+O6HeJapATVKwsD08ldZe4fugxiF9yg+O63/FU0v57y9NMr9dTfKEgXV4OItn9oZF2kzO5Tr9Qb8c2OODSubKCd4N0bO8xUkfSHVgiqDLy7s6Gt6pIFOTfOC62ElZkqcMf7RXaXTOO8Jg78WYHGfUZssmsAnbN3jkWFKRuAv6fd5CpUkdWNtGbDQ+6azYTJn3G7khMeRGrPTn3RZDyyM058Aq9smpDQPTnnW2KtbBD74JarDpZVEHUVIQCFjegl/wXmj89O3fLHTutk9J9cbidunbv95CnQ4scS/ELG9hxbiHX02cNKppTHpszuXeVX5uhQ3kK4IbOR4M35o5fxnqdPkk7oqw5e2kwqk7tdbSl2JQ8lc7Op0ocu3OIZmF/ZNg2vIslhRD92WJ1Z8M/VWdINLqf0K4cXvJ/zjS8p6KtLynIi3vqUjLeyrS8p6KtLynIi3vqUjLeyrS8p6KtLynIi3vqUjLeyrS8p6KtLynIi3vqUjLeyr/BfDh+G4bGePhAAAAAElFTkSuQmCC';
const PBS_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="36" height="36"><circle cx="50" cy="50" r="48" fill="#D64545"/><path d="M22 38 C28 18 52 15 65 30 C78 45 72 62 58 68 C44 74 28 68 22 52 C18 42 22 38 22 38Z" fill="none" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 28 C48 16 70 18 76 35 C82 52 70 67 54 70" fill="none" stroke="#6ab0e0" stroke-width="4.5" stroke-linecap="round"/></svg>`;

// ── Логотип компании для документов (HTML/PDF) ──
function getCompanyLogoHtml(companyId, size) {
  size = size || 44;
  const id = companyId || activeCompany;
  if (id === 'ENDV') {
    return `<img src="${ENDV_LOGO_B64}" width="${size}" height="${size}" style="object-fit:contain;display:block">`;
  }
  // PBS — SVG с заменой размера
  return PBS_LOGO_SVG
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`);
}

// SC brand block для правой части шапки документа
const DOC_BRAND_BLOCK = `
  <div style="text-align:right;flex-shrink:0">
    <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:20px;font-weight:800;letter-spacing:-0.3px;line-height:1">
      <span style="color:#1F7A63">S</span><span style="color:#D64545">C</span>
    </div>
    <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#111;line-height:1.4">Supply Chain</div>
  </div>`;

// Dynamic: shows only active company code (not hardcoded ENDV · PBS)
function getDocBrandBlock() {
  return `<div style="text-align:right;flex-shrink:0">
    <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:20px;font-weight:800;letter-spacing:-0.3px;line-height:1">
      <span style="color:#1F7A63">S</span><span style="color:#D64545">C</span>
    </div>
    <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#111;line-height:1.4">Supply Chain</div>
    <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:8.5px;letter-spacing:0.15em;color:rgba(0,0,0,0.4)">${activeCompany || 'ENDV'}</div>
  </div>`;
}

// ── NAVIGATION ──
function showSection(name) {
  // Auth guard
  if (currentUser && !currentUser.access.includes('all')) {
    const restricted = ['contract','spec','invoice','rfq','tracker','customs'];
    if (restricted.includes(name) && !currentUser.access.includes(name)) {
      alert('У вас нет доступа к этому разделу'); return;
    }
  }
  document.querySelectorAll('.section').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const target = document.getElementById('section-' + name);
  if (target) { target.classList.add('active'); target.style.display = ''; }
  const labels = { dashboard:'обзор', contract:'договор', spec:'спецификация', invoice:'инвойс', packing:'упаков', rfq:'экспедитор', tracker:'трекер', customs:'чек-лист таможни', admin:'польз', calc:'калькулятор таможни', deadlines:'дедлайн', suppliers:'контраг', currency:'конвертер', budget:'бюджет', payments:'платежи', purchase:'заявки на закупку', 'rfq-supplier':'запросы поставщикам', catalog:'каталог товаров', shipments:'поставки', analytics:'аналитика', 'customs-declarations':'таможенные декларации' };
  document.querySelectorAll('.nav-item').forEach(n => {
    const onclick = n.getAttribute('onclick') || '';
    if (onclick.includes("'" + name + "'") || onclick.includes('"' + name + '"')) {
      n.classList.add('active');
    }
  });
  if (name === 'admin') renderAdminTable();
  if (name === 'deadlines') renderDeadlines();
  if (name === 'customs') tplInit();
  if (name === 'suppliers') renderSuppliers();
  if (name === 'currency') fxInit();
  if (name === 'packing') plInit();
  if (name === 'budget') { bgLoad(); renderBudgets(); }
  if (name === 'payments') { pmLoad(); renderPayments(); }
  // Company tabs
  if (name === 'contract') ctShowList();
  if (name === 'spec') spShowList();
  if (name === 'invoice')  renderCompanyTabsInto('invoice-company-tabs');
  if (name === 'dashboard') setTimeout(() => dashLoad(), 50);
  if (name === 'purchase') prLoad();
  if (name === 'rfq-supplier') rfqsLoad();
  if (name === 'catalog') catLoad();
  if (name === 'shipments') shpLoad();
  if (name === 'analytics') anlLoad();
  if (name === 'customs-declarations') cdtLoad();
}

// ── HELPERS ──
function fmtNum(n) { return parseFloat(n||0).toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function fmtDate(d) { if (!d) return ''; const dt = new Date(d); return dt.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}); }
function fmtDateRu(d) { if (!d) return ''; const dt = new Date(d); return dt.toLocaleDateString('ru-RU', {day:'numeric', month:'long', year:'numeric'}); }

// ── SPEC ROWS ──
const specRows = [
  {desc:'3C X 0.50SQ.MM ARM CABLE', descRu:'3C X 0.50SQ.MM ARM Кабель', unit:'Mtrs', qty:300, price:135.63},
  {desc:'7C X 0.50SQ.MM ARM CABLE', descRu:'7C X 0.50SQ.MM ARM Кабель', unit:'Mtrs', qty:300, price:206.35},
  {desc:'4C X 0.50SQ.MM ARM CABLE', descRu:'4C X 0.50SQ.MM ARM Кабель', unit:'Mtrs', qty:300, price:155.06},
];

function renderSpecTable() {
  const tbody = document.getElementById('spec-goods-body');
  tbody.innerHTML = '';
  let total = 0;
  specRows.forEach((row, i) => {
    const amt = row.qty * row.price;
    total += amt;
    tbody.innerHTML += `<tr>
      <td><input style="width:30px;text-align:center" value="${i+1}" readonly></td>
      <td><input style="width:200px" value="${row.desc}" onchange="specRows[${i}].desc=this.value;renderSpecTable()"></td>
      <td><input style="width:50px" value="${row.unit}" onchange="specRows[${i}].unit=this.value"></td>
      <td><input style="width:60px;text-align:right" value="${row.qty}" onchange="specRows[${i}].qty=parseFloat(this.value)||0;renderSpecTable()"></td>
      <td><input style="width:80px;text-align:right" value="${row.price}" onchange="specRows[${i}].price=parseFloat(this.value)||0;renderSpecTable()"></td>
      <td class="total-cell">${fmtNum(amt)}</td>
      <td><button class="del-btn" onclick="specRows.splice(${i},1);renderSpecTable()">×</button></td>
    </tr>`;
  });
  document.getElementById('spec-total-val').textContent = fmtNum(total);
  document.getElementById('spec-currency-lbl').textContent = document.getElementById('s-currency').value;
}

function addSpecRow() {
  specRows.push({desc:'', descRu:'', unit:'Mtrs', qty:0, price:0});
  renderSpecTable();
}

// ── INV ROWS ──
const invRows = [
  {desc:'3C X 0.50SQ.MM ARM CABLE', qty:300, unit:'Mtrs', price:135.63},
  {desc:'7C X 0.50SQ.MM ARM CABLE', qty:300, unit:'Mtrs', price:206.35},
  {desc:'4C X 0.50SQ.MM ARM CABLE', qty:300, unit:'Mtrs', price:155.06},
];

const INV_UNITS = ['Pcs','Mtrs','Kgs','Sets','Rolls','Coils','Drums','Cartons','L','T','m²'];
const INV_CUR_SYM = {USD:'$',EUR:'€',CNY:'¥',INR:'₹',RUB:'₽',GBP:'£'};

function invGetCurrency() {
  return document.getElementById('i-currency')?.value || 'USD';
}
function invGetDefaultUnit() {
  return document.getElementById('i-default-unit')?.value || 'Pcs';
}

function renderInvTable() {
  const cur = invGetCurrency();
  const sym = INV_CUR_SYM[cur] || cur;

  // Update column headers dynamically
  const th = id => document.getElementById(id);
  if (th('inv-th-price'))  th('inv-th-price').textContent  = `Цена за ед. (${cur})`;
  if (th('inv-th-amount')) th('inv-th-amount').textContent = `Сумма (${cur})`;
  if (th('inv-th-unit'))   th('inv-th-unit').textContent   = 'Ед. изм.';

  // Update total label
  const tlbl = document.getElementById('inv-total-lbl');
  const tcur  = document.getElementById('inv-total-cur');
  if (tlbl) tlbl.textContent = `TOTAL ${cur} ${sym}`;
  if (tcur) tcur.textContent = `${cur} ${sym}`;

  const tbody = document.getElementById('inv-goods-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  let total = 0;
  invRows.forEach((row, i) => {
    const amt = (row.qty||0) * (row.price||0);
    total += amt;
    const unitOpts = INV_UNITS.map(u =>
      `<option${u===(row.unit||invGetDefaultUnit())?' selected':''}>${u}</option>`
    ).join('');
    tbody.innerHTML += `<tr>
      <td><input style="width:30px;text-align:center" value="${i+1}" readonly></td>
      <td><input style="width:200px" value="${row.desc||''}" onchange="invRows[${i}].desc=this.value"></td>
      <td><input type="number" style="width:75px;text-align:right" value="${row.qty||0}" min="0" step="any"
            onchange="invRows[${i}].qty=parseFloat(this.value)||0;renderInvTable()"></td>
      <td><select style="padding:3px 4px;border:1px solid var(--border);border-radius:4px;font-size:11px"
            onchange="invRows[${i}].unit=this.value">${unitOpts}</select></td>
      <td><input type="number" style="width:80px;text-align:right" value="${row.price||0}" min="0" step="any"
            onchange="invRows[${i}].price=parseFloat(this.value)||0;renderInvTable()"></td>
      <td class="total-cell">${fmtNum(amt)}</td>
      <td><button class="del-btn" onclick="invRows.splice(${i},1);renderInvTable()">×</button></td>
    </tr>`;
  });
  document.getElementById('inv-total-val').textContent = fmtNum(total);
}

function addInvRow() {
  invRows.push({desc:'', qty:0, price:0, unit: invGetDefaultUnit()});
  renderInvTable();
}

// ── CONTRACT PREVIEW ──
function getContractData() {
  return {
    num: document.getElementById('c-num').value,
    date: document.getElementById('c-date').value,
    sellerName: document.getElementById('c-seller-name').value,
    sellerAddr: document.getElementById('c-seller-addr').value,
    sellerRep: document.getElementById('c-seller-rep').value,
    sellerPos: document.getElementById('c-seller-pos').value,
    sellerBank: document.getElementById('c-seller-bank').value,
    sellerSwift: document.getElementById('c-seller-swift').value,
    sellerAcc: document.getElementById('c-seller-acc').value,
    sellerIfsc: document.getElementById('c-seller-ifsc').value,
    buyerName: document.getElementById('c-buyer-name').value,
    buyerAddr: document.getElementById('c-buyer-addr').value,
    buyerRep: document.getElementById('c-buyer-rep').value,
    buyerPos: document.getElementById('c-buyer-pos').value,
    buyerInn: document.getElementById('c-buyer-inn').value,
    buyerOgrn: document.getElementById('c-buyer-ogrn').value,
    buyerBank: document.getElementById('c-buyer-bank').value,
    buyerBik: document.getElementById('c-buyer-bik').value,
    buyerAcc: document.getElementById('c-buyer-acc').value,
    buyerSwift: document.getElementById('c-buyer-swift').value,
    buyerCorr: document.getElementById('c-buyer-corr').value,
    buyerBankAddr: document.getElementById('c-buyer-bankaddr').value,
    inco: document.getElementById('c-inco').value,
    payment: document.getElementById('c-payment').value,
    currency: document.getElementById('c-currency').value,
    deliveryAddr: document.getElementById('c-delivery-addr').value,
    leadtime: document.getElementById('c-leadtime').value,
    warranty: document.getElementById('c-warranty').value,
  };
}

function buildContractHTML(d, forExport) {
  const dateEn = fmtDate(d.date);
  const dateRu = fmtDateRu(d.date);

  const biRow = (en, ru) => `
    <tr>
      <td class="ct-en">${en}</td>
      <td class="ct-ru">${ru}</td>
    </tr>`;

  const biHead = (en, ru) => `
    <tr class="ct-art-head">
      <th>${en}</th>
      <th>${ru}</th>
    </tr>`;

  const html = `
  <style>
    .ct-wrap { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; color: #111111; }
    .ct-doc-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:18px; padding-bottom:14px; border-bottom:1.5px solid #111111; }
    .ct-title-block { }
    .ct-title-block h2 { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:#111; }
    .ct-title-block .ct-num { font-size:13px; color:#1F7A63; font-weight:600; margin-top:4px; }
    .ct-title-block .ct-dated { font-size:11px; color:rgba(0,0,0,0.45); margin-top:2px; }
    .ct-doc-brand { text-align:right; }
    .ct-doc-brand-sc { font-size:20px; font-weight:800; letter-spacing:-0.3px; line-height:1; }
    .ct-doc-brand-sc .sc-s { color:#1F7A63; }
    .ct-doc-brand-sc .sc-c { color:#D64545; }
    .ct-doc-brand-name { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#111; }
    .ct-doc-brand-sub { font-size:8.5px; letter-spacing:0.15em; color:rgba(0,0,0,0.4); }
    .ct-preamble { margin-bottom:16px; border:1px solid #EAEAEA; border-radius:4px; overflow:hidden; }
    .ct-preamble table { width:100%; border-collapse:collapse; }
    .ct-preamble td { padding:10px 14px; vertical-align:top; width:50%; border-bottom:1px solid #EAEAEA; font-size:11px; line-height:1.6; }
    .ct-preamble td:first-child { border-right:1px solid #EAEAEA; background:#F5F7FA; }
    .ct-table { width:100%; border-collapse:collapse; margin-bottom:0; }
    .ct-table th, .ct-table td { padding:7px 12px; vertical-align:top; border:1px solid #EAEAEA; }
    .ct-table th { background:#0B1F3A; color:#fff; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; width:50%; }
    .ct-art-head th { background:#1C355E; color:#fff; font-size:11px; padding:7px 12px; }
    .ct-en { background:#F5F7FA; font-size:11px; line-height:1.65; width:50%; }
    .ct-ru { font-size:11px; line-height:1.65; width:50%; }
    .ct-en ol, .ct-ru ol { margin: 6px 0 0 18px; padding:0; }
    .ct-en li, .ct-ru li { margin-bottom:5px; }
    .ct-sigs { margin-top:24px; }
    .ct-sigs table { width:100%; border-collapse:collapse; }
    .ct-sigs td { width:50%; padding:10px 14px; vertical-align:top; border:1px solid #EAEAEA; }
    .ct-sigs td:first-child { background:#F5F7FA; border-right:1px solid #EAEAEA; }
    .ct-sig-label { font-weight:700; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#0B1F3A; margin-bottom:8px; }
    .ct-sig-line { border-bottom: 1px solid #333; margin: 28px 0 6px; width:80%; }
    .ct-sig-name { font-size:10px; color:rgba(0,0,0,0.5); }
    .ct-bank-table { width:100%; border-collapse:collapse; margin-top:6px; }
    .ct-bank-table td { padding:3px 8px; font-size:10.5px; border-bottom:1px solid #EAEAEA; }
    .ct-bank-table td:first-child { color:rgba(0,0,0,0.5); width:40%; }
    .ct-bank-table td:last-child { font-weight:600; }
  </style>
  <div class="ct-wrap">
    <!-- Шапка документа: логотип компании слева, SC Brand справа -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding-bottom:14px;border-bottom:1.5px solid #111">
      <div style="display:flex;align-items:center;gap:12px">
        ${getCompanyLogoHtml(d.buyerPrefix || activeCompany, 46)}
        <div>
          <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:700;color:#111;line-height:1.2">${COMPANIES[d.buyerPrefix || activeCompany]?.shortName || ''}</div>
          <div style="font-family:'Inter','Helvetica Neue',Arial,sans-serif;font-size:10px;color:rgba(0,0,0,0.45);margin-top:2px">${COMPANIES[d.buyerPrefix || activeCompany]?.shortEn || ''}</div>
        </div>
      </div>
      ${DOC_BRAND_BLOCK}
    </div>
    <!-- Название документа -->
    <div class="ct-title-block" style="text-align:center;margin-bottom:16px">
      <h2>Sales Contract &nbsp;·&nbsp; Договор поставки</h2>
      <div class="ct-num">№ ${d.num}</div>
      <div class="ct-dated">${dateEn} &nbsp;/&nbsp; ${dateRu}</div>
    </div>

    <!-- PREAMBLE -->
    <div class="ct-preamble">
      <table>
        <tr>
          <td><b>${d.sellerName}</b>, duly established and existing under the laws of Republic of India ("Seller"), represented by ${d.sellerPos}, ${d.sellerRep}, on the one hand, and <b>${d.buyerName}</b>, duly established and existing under the laws of the Russian Federation ("Buyer"), represented by ${d.buyerPos}, ${d.buyerRep}, acting on the basis of Charter, on the other hand, (hereinafter both referred to individually as "Party" and collectively as "Parties"), have concluded this Contract as follows:</td>
          <td><b>${d.sellerName}</b>, надлежащим образом созданное и существующее в соответствии с законодательством Республики Индия, («Продавец»), в лице ${d.sellerPos} ${d.sellerRep}, с одной стороны, и <b>${d.buyerName}</b>, юридическое лицо, зарегистрированное на территории Российской Федерации, («Покупатель»), в лице ${d.buyerPos} ${d.buyerRep}, действующего на основании Устава, с другой стороны, (в дальнейшем именуемые по отдельности «Сторона», а вместе — «Стороны»), заключили настоящий Договор о нижеследующем:</td>
        </tr>
      </table>
    </div>

    <!-- ARTICLES TABLE -->
    <table class="ct-table">
      <thead>
        <tr class="ct-art-head">
          <th>English</th>
          <th>Русский</th>
        </tr>
      </thead>
      <tbody>
        ${biHead('1. SUBJECT OF THE CONTRACT, PRICES &amp; TOTAL CONTRACT VALUE','1. ПРЕДМЕТ ДОГОВОРА, ЦЕНЫ И ОБЩАЯ СТОИМОСТЬ')}
        ${biRow(`<ol>
          <li>The Seller undertakes to supply the goods (hereinafter "Goods"), according to the description, quantity, configuration and delivery terms specified in the Specifications to this Contract, which are an integral part of it; the Buyer undertakes to accept and pay for the delivered Goods.</li>
          <li>Buyer is responsible for all shipping charges from factory to Buyer's warehouse. Seller is responsible for providing the export declaration.</li>
          <li>The total value of the Contract is made by sums indicated in the Specifications hereto for each delivery. The name of the goods and the terms of delivery are specified in the Specifications, which are an integral part of this Contract.</li>
          <li>Parties agree terms of supply by e-mail: goods description, technical parameters, prices, delivery and payment terms. Parties sign the Specification after mutual confirmation. The Seller shall issue a Proforma Invoice.</li>
          <li>The Seller certifies and guarantees that it has the right to use the trademark with which the Goods are marked, to the extent necessary for sale to the Buyer for use/distribution on the territory of the Russian Federation, with the consent of the trademark owner, and does not violate the rights of the trademark owner or third parties; by purchasing the Goods, the Buyer also receives the right to use the trademark for its intended purpose.</li>
        </ol>`,`<ol>
          <li>Продавец обязуется поставить товар (далее «Товар») согласно описанию, в количестве, комплектации и на условиях поставки, указанных в Спецификациях к настоящему Договору, являющихся его неотъемлемой частью; Покупатель обязуется принять и оплатить поставленный Товар.</li>
          <li>Покупатель несёт ответственность за все расходы по доставке товара со склада Продавца до склада Покупателя. Продавец несёт ответственность за предоставление экспортной декларации.</li>
          <li>Общая сумма договора определяется суммами согласно Спецификаций, составляемым на каждую поставку. Наименование товаров и условия поставки Покупатель указывает в Спецификациях, являющихся неотъемлемой частью настоящего договора.</li>
          <li>Стороны согласовывают по электронной почте условия выполнения заказа: наименование товаров, их технические характеристики, цены, условия поставки и оплаты. После согласования заказа стороны подписывают спецификацию. Продавец выставляет покупателю Счёт на оплату.</li>
          <li>Продавец заверяет и гарантирует, что он обладает правом использования товарного знака, которым промаркирован Товар, в объёме, необходимом и достаточном для реализации Товара Покупателю для использования/распространения на территории Российской Федерации с согласия правообладателя и не нарушает прав правообладателя либо третьих лиц; приобретая Товар, Покупатель получает также право использования товарного знака в объёме, необходимом для использования Товара по его назначению.</li>
        </ol>`)}

        ${biHead('2. SUPPLY TERMS AND SCHEDULE','2. УСЛОВИЯ, ПОРЯДОК И СРОКИ ПОСТАВКИ')}
        ${biRow(`<ol>
          <li>The Goods supplied under this Contract should be manufactured on the terms and conditions specified in the corresponding Specification to this Contract.</li>
          <li>The Seller undertakes to provide the Buyer with maximum detailed information about the Goods (incl. year of production, country of origin, series no., type, model, size, identification plate, net weight, gross weight with individual package, total gross weight with transport tare weight).</li>
          <li>Packaging of the goods shall be carried out according to established standards (or technical specifications) and guarantee, with proper handling of goods, their safety during transportation, including unloading.</li>
          <li>Every box (container, bag, etc.) shall be marked with: destination address of the Buyer; name and address of the Seller; CTN number; gross weight; net weight; other details submitted by the Seller in advance.</li>
          <li>The Seller shall provide the Buyer with: Invoice, Export Declaration, Packing list, Safety data sheet, Certificate of origin, Quality certificate, Manual.</li>
          <li>No shipment is allowed without all the confirming documents being checked and approved by the Buyer.</li>
          <li>Partial delivery is allowed.</li>
          <li>If the Seller's delay in delivery is more than 30 (thirty) calendar days, the Buyer has the right to unilaterally terminate the Contract (or its Annex) and require the Seller to return the advance payment in full. The contract will be considered terminated from the date of receipt by the Seller of the relevant notice.</li>
        </ol>`,`<ol>
          <li>Товар, поставляемый по настоящему договору, должен быть произведён в сроки и на условиях, определённых в Спецификациях, согласованных Сторонами.</li>
          <li>Продавец предоставляет максимально-исчерпывающую информацию (включая год выпуска, страна происхождения, серийный номер, тип, модель, размеры, шильдик, вес нетто, вес брутто с упаковкой, вес брутто с транспортной тарой).</li>
          <li>Упаковка Товара должна соответствовать установленным стандартам (или техническим условиям) и гарантировать при должном обращении с Товаром его сохранность во время транспортировки, включая разгрузку.</li>
          <li>На каждый ящик (контейнер, мешок и т.п.) должна быть нанесена следующая маркировка: наименование пункта назначения; адрес получателя — Покупателя; наименование и адрес Продавца; номер места; вес брутто; вес нетто; другие реквизиты, которые могут быть заблаговременно сообщены Покупателю Продавцом.</li>
          <li>Продавец должен предоставить Покупателю следующие документы: Инвойс, Экспортная декларация, Упаковочный лист, Паспорт безопасности, Сертификат происхождения, Сертификат качества, Руководство по использованию.</li>
          <li>Поставка без проверки и подтверждения Покупателем всех сопроводительных документов не разрешена.</li>
          <li>Частичная поставка разрешена.</li>
          <li>В случае если просрочка Продавца в поставке товара составляет более 30 (тридцати) календарных дней, Покупатель вправе в одностороннем порядке отказаться от исполнения Договора (или Приложения к нему) и потребовать от Продавца возврата аванса в полном объёме. Договор будет считаться расторгнутым с даты получения Продавцом соответствующего уведомления.</li>
        </ol>`)}

        ${biHead('3. TERMS OF PAYMENT','3. УСЛОВИЯ ПЛАТЕЖА')}
        ${biRow(`<ol>
          <li>Payments for the delivered Goods under this Contract are made by the Buyer after the Parties have signed this Contract, on the basis of the invoices issued for payment and in accordance with the conditions specified in the Delivery Specifications.</li>
          <li>The currency of price and payment as per this Contract is: <b>${d.currency}</b>.</li>
          <li>The payment is effected by bank transfer.</li>
          <li>All costs and fees in the Buyer's bank associated with the implementation of this Contract are the Buyer's expense. All costs and fees in the Seller's bank are the Seller's expense.</li>
          <li>Property right for the delivered Goods is passed on to the Buyer on the terms and conditions specified in the corresponding Specification to this Contract.</li>
        </ol>`,`<ol>
          <li>Платежи за поставляемый Товар по настоящему Договору производятся Покупателем после подписания Сторонами настоящего Договора, на основании выставленных счетов на оплату и в соответствии с условиями, определёнными в Спецификациях на поставку.</li>
          <li>Валютой цены и валютой платежа по настоящему Договору является: <b>${d.currency}</b>.</li>
          <li>Оплата осуществляется путём банковского перевода.</li>
          <li>Все расходы и комиссионные сборы банков в стране Покупателя, связанные с выполнением данного Контракта, являются расходами Покупателя. Все расходы и комиссионные сборы банков в стране Продавца являются расходами Продавца.</li>
          <li>Право собственности на Товар переходит к Покупателю на условиях, определённых в Спецификациях, согласованных Сторонами.</li>
        </ol>`)}

        ${biHead('4. DELIVERY DATES','4. СРОКИ И ПОРЯДОК ОТГРУЗКИ')}
        ${biRow(`<ol>
          <li>The Goods should be manufactured and shipped on the terms agreed between both Parties in the Specification. Delivery lead time: <b>${d.leadtime}</b>.</li>
          <li>The date of the Bill of Lading should be considered as the date of shipment, unless otherwise provided by the Specification to this Contract.</li>
          <li>The Seller shall inform the Buyer about the readiness of the Goods for shipment at least 7 days before the shipment and shall send a shipping advice by e-mail.</li>
        </ol>`,`<ol>
          <li>Товар будет изготовлен и отгружен в срок, согласованный обеими сторонами в спецификации. Срок поставки: <b>${d.leadtime}</b>.</li>
          <li>Дата транспортной накладной считается датой отгрузки, если иное не указано в Приложении или Спецификации к настоящему договору.</li>
          <li>Продавец должен проинформировать Покупателя минимум за 7 дней до отправки о готовности Товара к отгрузке и направить уведомление посредством электронной почты.</li>
        </ol>`)}

        ${biHead('5. GOODS QUALITY','5. КАЧЕСТВО ТОВАРА')}
        ${biRow(`<ol>
          <li>The quality of the Goods shall meet the requirements indicated in this Contract, and it should be supported by quality certificates, applicable to specific Goods, in regard to quality and design.</li>
        </ol>`,`<ol>
          <li>Качество Товара должно соответствовать требованиям, указанным в Договоре, и должно подтверждаться сертификатами качества и сертификатами происхождения, а также другими соответствующими для Товара такого рода документами.</li>
        </ol>`)}

        ${biHead('6. GOODS ACCEPTANCE','6. ПРИЁМКА ТОВАРА')}
        ${biRow(`<ol>
          <li>Acceptance of Goods as per quality and quantity will be made by the Buyer in the place of acceptance (final delivery of Goods on the territory of the Russian Federation) at the address: <b>${d.deliveryAddr}</b>, unless otherwise provided by the Specification to this Contract.</li>
          <li>In case of detection of the nonconformity of quality of the supplied Goods, or its deficiency in quantity, the Buyer makes a protocol and, depending on the causes of the violation, makes corresponding claim. All defects and comments discovered during inspection of the Goods shall be reflected in the act of acceptance. The Seller undertakes to replace the defective product at its own expense within the period of time agreed upon by the Parties.</li>
        </ol>`,`<ol>
          <li>Приёмка Товара по качеству и количеству будет произведена Покупателем в месте приёмки (конечной доставки Товара на территории Российской Федерации) по адресу: <b>${d.deliveryAddr}</b>, если иное не указано в Спецификации.</li>
          <li>В случае несоответствия качества поставленного Товара или недостачи его по количеству Покупатель составляет протокол и в зависимости от причин нарушения качества Товара предъявляет соответствующие рекламации. Все дефекты и замечания, обнаруженные при осмотре Товара, должны быть отражены Покупателем в акте приёмки товара. Продавец обязуется заменить некачественный Товар за свой счёт в согласованные сторонами сроки.</li>
        </ol>`)}

        ${biHead('7. WARRANTY','7. ГАРАНТИИ')}
        ${biRow(`<ol>
          <li>The Seller guarantees that the Goods are manufactured of high-quality materials and absolutely comply in all respects with the quality and specification as stipulated in this Contract.</li>
          <li>Seller shall warrant that these Goods have a warranty period of <b>${d.warranty}</b>.</li>
          <li>The Seller guarantees to replace defective parts or compounds for the supplied Goods at its own expense — in case such defects were caused by manufacturing faults or using of defective materials — if such defects shall be found within eighteen (18) months from the date of installation and operation start or twenty-four (24) months from the date of shipment, whichever occurs first.</li>
          <li>Seller must replace Goods, parts or compounds considered manufacturing-defective within thirty (30) calendar days after termination of investigation.</li>
        </ol>`,`<ol>
          <li>Продавец гарантирует, что поставляемый Товар изготавливается из качественных материалов и полностью соответствует качеству, заявленному в данном договоре.</li>
          <li>Продавец гарантирует, что Товар имеет гарантийный срок: <b>${d.warranty}</b>.</li>
          <li>Если в течение восемнадцати месяцев с момента установки и начала эксплуатации Товара (но не более двадцати четырёх месяцев с момента отправки, в зависимости, что произойдёт первым), обнаружатся дефекты, возникшие по причине некачественного изготовления или использования некачественных материалов, Продавец обязуется произвести соответствующую замену за свой счёт.</li>
          <li>Срок замены Товара, его частей или компонентов, признанных имеющими производственные дефекты, — не более тридцати (30) календарных дней с момента окончания расследования.</li>
        </ol>`)}

        ${biHead('8. FORCE MAJEURE','8. ФОРС-МАЖОР')}
        ${biRow(`<ol>
          <li>The Parties are released from responsibility for complete or partial nonfulfillment of the taken obligations hereunder the Contract, if it is the sequence of inevitable force (force-majeure) circumstances, namely: disasters, military actions of any character, blockade, import or export embargo, decisions made by bodies of state power and management. Fulfillment of the obligations, agreed on in the given contract, will be discontinued under the whole period above mentioned circumstances are active.</li>
          <li>Either Party which was unable to fulfill the obligations hereof, will immediately notify the other Party in written form on commencement or end of the above-mentioned circumstances, and upon other Party's request will present documents issued by competent bodies to confirm inevitable force circumstances (force-majeure).</li>
          <li>Should a.m. circumstances last for more than 3 months, each of the Parties will have a right to refuse further fulfillment of the taken obligations hereunder and neither Party will have a right to demand possible losses reimbursement to be paid by the other Party.</li>
        </ol>`,`<ol>
          <li>Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по контракту, если они являются следствием обстоятельств непреодолимой силы (Форс-мажор), а именно: стихийных бедствий, военных действий любого характера, блокады, запрещения импорта или экспорта, решений органов государственной власти и управления. Выполнение обязательств, согласованных в настоящем контракте, будет прервано на время действия вышеуказанных событий.</li>
          <li>Сторона, для которой создалось невозможность исполнения обязательств по настоящему контракту, обязана о наступлении или прекращении вышеуказанных обстоятельств немедленно письменно известить другую сторону, и по её требованию предоставить документы, подтверждающие обстоятельства непреодолимой силы (Форс-мажор).</li>
          <li>Если указанные обстоятельства будут продолжаться более трёх месяцев, то каждая из сторон будет иметь право отказаться от дальнейшего исполнения обязательств по контракту, и ни одна из сторон не будет иметь права требовать от другой стороны компенсации за возможные потери.</li>
        </ol>`)}

        ${biHead('9. ARBITRATION','9. АРБИТРАЖ')}
        ${biRow(`<ol>
          <li>In case of any disputes and/or disagreements between Seller and/or Buyer resulting from this Contract or in connection with its implementation, the Parties shall use their best efforts to settle them by the way of negotiations.</li>
          <li>If the Parties fail to settle any disputes and/or differences by the way of negotiations, such disputes and/or differences must be settled and tried by the International Commercial Arbitration in accordance with its regulation.</li>
        </ol>`,`<ol>
          <li>В случае возникновения между Продавцом и/или Покупателем споров и/или разногласий, вытекающих из настоящего Контракта или в связи с ним, Стороны примут все меры к разрешению их путём переговоров.</li>
          <li>Если сторонам не удастся разрешить споры и/или разногласия путём переговоров, то такие споры и/или разногласия передаются в Международный Коммерческий Арбитражный Суд при Торгово-Промышленной Палате в соответствии с его регламентом.</li>
        </ol>`)}

        ${biHead('10. MISCELLANEOUS','10. ПРОЧИЕ УСЛОВИЯ')}
        ${biRow(`<ol>
          <li>All amendments and addendums to this Contract shall be valid only if made in written form and signed by both Parties. All preliminary agreements, negotiations and correspondence between the Parties according to the points stated in this Contract which were taking place before the introduction of this Contract are cancelled from the date of signing the Contract.</li>
          <li>The present Contract is made in two duplicates, each in Russian and English languages. English text shall prevail in the event of a discrepancy between the Russian and English texts.</li>
          <li>The contract comes into force from the moment of signing by both Parties and operates until the Delivery period.</li>
          <li>Validity of the Contract is extended till both Parties are fully executed their obligations of both Parties.</li>
          <li>The scan copy of the present Contract has legal force.</li>
        </ol>`,`<ol>
          <li>Все изменения и дополнения к настоящему Контракту действительны лишь в том случае, если они совершены в письменной форме и подписаны обеими Сторонами. Все предварительные соглашения, переговоры и переписка между Сторонами по вопросам, изложенным в настоящем Контракте, имевшие место до вступления Контракта в силу, аннулируются с даты его подписания.</li>
          <li>Настоящий Контракт составлен в двух экземплярах рус. и английском языках. В случае расхождения русского и английского текстов преимущественную силу имеет английский текст.</li>
          <li>Договор вступает в силу с момента его подписания Сторонами и действует до окончания срока поставки.</li>
          <li>Срок действия настоящего Контракта продлевается до полного исполнения Сторонами своих обязательств.</li>
          <li>Сканированная копия настоящего Контракта имеет юридическую силу.</li>
        </ol>`)}

        ${biHead('11. LEGAL ADDRESSES AND BANK DETAILS OF THE PARTIES','11. ЮРИДИЧЕСКИЕ АДРЕСА И БАНКОВСКИЕ РЕКВИЗИТЫ СТОРОН')}
        ${biRow(`
          <b>SELLER / ПРОДАВЕЦ:</b><br>
          ${d.sellerName}<br>
          ${d.sellerAddr}<br>
          Ph: +91(40)44292922 &nbsp;|&nbsp; E-mail: <a href="mailto:info@thermocables.com">info@thermocables.com</a>
          <table class="ct-bank-table">
            <tr><td>Bank</td><td>${d.sellerBank}</td></tr>
            <tr><td>Account No.</td><td>${d.sellerAcc}</td></tr>
            <tr><td>IFSC</td><td>${d.sellerIfsc}</td></tr>
            <tr><td>SWIFT</td><td>${d.sellerSwift}</td></tr>
          </table>
        `,`
          <b>ПОКУПАТЕЛЬ / BUYER:</b><br>
          ${d.buyerName}<br>
          ${d.buyerAddr}<br>
          ${d.buyerInn ? 'ИНН: ' + d.buyerInn + '&nbsp;|&nbsp;' : ''} ${d.buyerOgrn ? 'ОГРН: ' + d.buyerOgrn : ''}
          <table class="ct-bank-table">
            <tr><td>Банк / Bank</td><td>${d.buyerBank}</td></tr>
            <tr><td>Р/с</td><td>${d.buyerAcc}</td></tr>
            <tr><td>БИК</td><td>${d.buyerBik}</td></tr>
            <tr><td>Кор. счёт</td><td>${d.buyerCorr}</td></tr>
            <tr><td>SWIFT</td><td>${d.buyerSwift}</td></tr>
            <tr><td>Адрес банка</td><td>${d.buyerBankAddr}</td></tr>
          </table>
        `)}
      </tbody>
    </table>

    <!-- SIGNATURES -->
    <div class="ct-sigs">
      <table>
        <tr>
          <td>
            <div class="ct-sig-label">Seller / Продавец</div>
            <div>${d.sellerName}</div>
            <div style="font-size:10px;color:#666;margin-top:4px">${d.sellerAddr}</div>
            <div class="ct-sig-line"></div>
            <div class="ct-sig-name">${d.sellerRep} &nbsp;·&nbsp; ${d.sellerPos}</div>
          </td>
          <td>
            <div class="ct-sig-label">Buyer / Покупатель</div>
            <div>${d.buyerName}</div>
            <div style="font-size:10px;color:#666;margin-top:4px">${d.buyerAddr}</div>
            <div class="ct-sig-line"></div>
            <div class="ct-sig-name">${d.buyerRep} &nbsp;·&nbsp; ${d.buyerPos}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>`;
  return html;
}

function generateContract() {
  const d = getContractData();
  const area = document.getElementById('preview-area');
  area.className = 'preview-area visible';
  area.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <button class="copy-btn" onclick="window.print()">🖨 Печать</button>
      <button class="copy-btn" onclick="exportContractPDF()">⬇ PDF</button>
      <button class="copy-btn" onclick="exportContractWord()">⬇ Word (.docx)</button>
    </div>
    ${buildContractHTML(d, false)}
  `;
  document.getElementById('btn-export-pdf').style.display = 'inline-block';
  document.getElementById('btn-export-word').style.display = 'inline-block';
  area.scrollIntoView({behavior:'smooth'});
  // Save contract to localStorage for cross-module autofill
  contractSaveToStorage();
}

function exportContractPDF() {
  const d = getContractData();
  const html = buildContractHTML(d, true);
  const w = window.open('','_blank');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
      @page { size: A4; margin: 18mm 14mm; }
      body { font-family: 'Mulish', Arial, sans-serif; font-size: 10px; }
      @media print { .no-print { display:none; } }
    </style>
  </head><body>
    <div class="no-print" style="padding:10px;background:#f0f0f0;margin-bottom:10px;">
      <button onclick="window.print()">🖨 Печать / Сохранить PDF</button>
      &nbsp; После открытия диалога печати выберите «Сохранить как PDF»
    </div>
    ${html}
  </body></html>`);
  w.document.close();
  setTimeout(() => w.print(), 800);
}

function exportContractWord() {
  const d = getContractData();
  const html = buildContractHTML(d, true);
  const fullHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
    xmlns:w='urn:schemas-microsoft-com:office:word'
    xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'>
    <style>
      body { font-family: Arial, sans-serif; font-size: 10pt; }
      table { border-collapse: collapse; width: 100%; }
      td, th { border: 1px solid #ccc; padding: 5pt; vertical-align: top; font-size: 9pt; }
      th { background: #0B1F3A; color: white; font-size: 9pt; }
      .ct-art-head th { background: #2b4a6f; color: white; }
      .ct-en { background: #f9f8f5; }
      h2 { font-size: 13pt; text-align: center; }
      ol { margin: 0; padding-left: 16pt; }
      li { margin-bottom: 4pt; }
    </style></head><body>${html}</body></html>`;
  const blob = new Blob(['\ufeff', fullHtml], {type: 'application/msword'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Contract_${d.num.replace(/[\/\\]/g,'_')}.doc`;
  a.click();
  URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════════════════════════
// CONTRACT REGISTRY — реестр договоров
// ══════════════════════════════════════════════════════════════

function ctShowList() {
  const lv = document.getElementById('ct-list-view');
  const fv = document.getElementById('ct-form-view');
  if (lv) lv.style.display = '';
  if (fv) fv.style.display = 'none';
  ctRenderList();
  // also render company tabs (used by invoice etc)
  renderCompanyTabsInto('contract-company-tabs');
}

function ctShowForm(id) {
  const lv = document.getElementById('ct-list-view');
  const fv = document.getElementById('ct-form-view');
  if (lv) lv.style.display = 'none';
  if (fv) fv.style.display = '';

  const title = document.getElementById('ct-form-title');
  const editId = document.getElementById('ct-editing-id');
  const pa = document.getElementById('preview-area');
  if (pa) pa.innerHTML = '';
  const epdf = document.getElementById('btn-export-pdf');
  const eword = document.getElementById('btn-export-word');
  if (epdf) epdf.style.display = 'none';
  if (eword) eword.style.display = 'none';

  if (id) {
    const c = DB_contracts.find(id);
    if (c) ctFillForm(c);
    if (title) title.textContent = 'Редактировать договор';
    if (editId) editId.value = id;
  } else {
    ctClearForm();
    if (title) title.textContent = 'Новый договор';
    if (editId) editId.value = '';
    const ecEl = document.getElementById('ct-editing-company');
    if (ecEl) ecEl.value = '';
  }
  renderCompanyTabsInto('contract-company-tabs');
}

function ctClearForm() {
  const fields = ['c-num','c-date','c-seller-name','c-seller-addr','c-seller-rep',
    'c-seller-pos','c-seller-bank','c-seller-swift','c-seller-acc','c-seller-ifsc',
    'c-delivery-num','c-delivery-addr','c-leadtime','c-warranty',
    'c-total-amount','c-unk','c-repat-date','c-bank-notify-date','c-vc-note'];
  fields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  // Reset buyer to active company defaults
  applyCompanyToForms(activeCompany);
  const hint = document.getElementById('c-delivery-hint');
  if (hint) hint.textContent = '';
}

function ctFillForm(c) {
  const fld = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  // Сохраняем company оригинального договора — используется при сохранении
  const ecEl = document.getElementById('ct-editing-company');
  if (ecEl) ecEl.value = c.company || 'ENDV';
  fld('c-num', c.num); fld('c-date', c.date);
  fld('c-seller-name', c.sellerName); fld('c-seller-addr', c.sellerAddr);
  fld('c-seller-rep',  c.sellerRep);  fld('c-seller-pos', c.sellerPos);
  fld('c-seller-bank', c.sellerBank); fld('c-seller-swift', c.sellerSwift);
  fld('c-seller-acc',  c.sellerAcc);  fld('c-seller-ifsc', c.sellerIfsc);
  fld('c-buyer-name',  c.buyerName);  fld('c-buyer-addr', c.buyerAddr);
  fld('c-buyer-rep',   c.buyerRep);   fld('c-buyer-pos', c.buyerPos);
  fld('c-buyer-inn',   c.buyerInn);   fld('c-buyer-ogrn', c.buyerOgrn);
  fld('c-buyer-bank',  c.buyerBank);  fld('c-buyer-bik', c.buyerBik);
  fld('c-buyer-acc',   c.buyerAcc);   fld('c-buyer-swift', c.buyerSwift);
  fld('c-buyer-corr',  c.buyerCorr);  fld('c-buyer-bankaddr', c.buyerBankAddr || c.buyerBankaddr);
  fld('c-delivery-addr', c.deliveryAddr); fld('c-leadtime', c.leadtime);
  fld('c-warranty',   c.warranty);    fld('c-delivery-num', c.deliveryNum);
  fld('c-total-amount', c.totalAmount || '');
  fld('c-unk',        c.unk || '');
  fld('c-repat-days', c.repatDays || 180);
  fld('c-repat-date', c.repatDate || '');
  fld('c-bank-notify-date', c.bankNotifyDate || '');
  fld('c-vc-note',    c.vcNote || '');
  ctUpdateThreshold();
  ctUpdateRepatStatus();
  // selects
  const selVal = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
  selVal('c-inco', c.inco); selVal('c-payment', c.payment); selVal('c-currency', c.currency);
}

function ctGetFormData() {
  const v = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  return {
    num: v('c-num'), date: v('c-date'),
    sellerName: v('c-seller-name'), sellerAddr: v('c-seller-addr'),
    sellerRep:  v('c-seller-rep'),  sellerPos:  v('c-seller-pos'),
    sellerBank: v('c-seller-bank'), sellerSwift: v('c-seller-swift'),
    sellerAcc:  v('c-seller-acc'),  sellerIfsc: v('c-seller-ifsc'),
    buyerName:  v('c-buyer-name'),  buyerAddr:  v('c-buyer-addr'),
    buyerRep:   v('c-buyer-rep'),   buyerPos:   v('c-buyer-pos'),
    buyerInn:   v('c-buyer-inn'),   buyerOgrn:  v('c-buyer-ogrn'),
    buyerBank:  v('c-buyer-bank'),  buyerBik:   v('c-buyer-bik'),
    buyerAcc:   v('c-buyer-acc'),   buyerSwift: v('c-buyer-swift'),
    buyerCorr:  v('c-buyer-corr'),  buyerBankAddr: v('c-buyer-bankaddr'),
    inco: v('c-inco'), payment: v('c-payment'), currency: v('c-currency'),
    deliveryAddr: v('c-delivery-addr'), leadtime: v('c-leadtime'),
    warranty: v('c-warranty'), deliveryNum: v('c-delivery-num'),
    totalAmount: parseFloat(v('c-total-amount')) || 0,
    unk: v('c-unk'),
    repatDays: parseInt(v('c-repat-days')) || 180,
    repatDate: v('c-repat-date'),
    bankNotifyDate: v('c-bank-notify-date'),
    vcNote: v('c-vc-note'),
    // При редактировании — сохраняем company оригинала; при новом — берём activeCompany
    company: v('ct-editing-company') || activeCompany,
    status: 'active',
    updatedAt: new Date().toISOString().slice(0, 10)
  };
}

function ctSaveOnly() {
  const eid = document.getElementById('ct-editing-id');
  const editingId = eid ? eid.value : '';
  const data = ctGetFormData();
  if (!data.num)        { alert('Введите номер договора'); return; }
  if (!data.sellerName) { alert('Введите наименование поставщика'); return; }
  let ok = false;
  if (editingId) {
    const res = DB_contracts.update(editingId, { ...data, id: editingId });
    ok = !!res;
    if (!ok) {
      // Запись не найдена по ID — добавляем заново
      DB_contracts.insert({ ...data, id: editingId, createdAt: data.updatedAt });
      ok = true;
    }
  } else {
    const newId = Date.now().toString();
    DB_contracts.insert({ ...data, id: newId, createdAt: data.updatedAt });
    if (eid) eid.value = newId;
    const ecEl = document.getElementById('ct-editing-company');
    if (ecEl) ecEl.value = data.company;
    ok = true;
  }
  syncRepatToDeadlines();
  // Переключаемся на компанию договора перед отображением реестра
  if (data.company && data.company !== activeCompany) setActiveCompany(data.company);
  ctShowList();
  if (typeof showToast === 'function') showToast(ok ? '✅ Договор сохранён в реестре' : '⚠️ Ошибка сохранения');
}

function ctSaveAndGenerate() {
  const eid = document.getElementById('ct-editing-id');
  const editingId = eid ? eid.value : '';
  const data = ctGetFormData();
  if (!data.num)        { alert('Введите номер договора'); return; }
  if (!data.sellerName) { alert('Введите наименование поставщика'); return; }
  let savedId = editingId;
  if (editingId) {
    DB_contracts.update(editingId, { ...data, id: editingId });
  } else {
    savedId = Date.now().toString();
    DB_contracts.insert({ ...data, id: savedId, createdAt: data.updatedAt });
    if (eid) eid.value = savedId;
    // update form title
    const t = document.getElementById('ct-form-title');
    if (t) t.textContent = 'Редактировать договор';
  }
  syncRepatToDeadlines();
  generateContract(); // generate preview (existing function)
}

function ctDeleteContract(id) {
  DB_contracts.delete(id);
  ctRenderList();
}

function ctRenderList() {
  const searchEl = document.getElementById('ct-search');
  const search = searchEl ? searchEl.value.toLowerCase() : '';
  let all = DB_contracts.all().filter(c => (c.company || 'ENDV') === activeCompany);
  if (search) {
    all = all.filter(c =>
      (c.num || '').toLowerCase().includes(search) ||
      (c.sellerName || '').toLowerCase().includes(search)
    );
  }

  const body = document.getElementById('ct-list-body');
  if (!body) return;

  if (all.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:60px 20px;color:var(--text3)">
        <div style="font-size:48px;margin-bottom:12px">📝</div>
        <div style="font-size:14px;font-weight:600;color:var(--text2);margin-bottom:6px">Реестр договоров пуст</div>
        <div style="font-size:12px">Нажмите «+ Новый договор» чтобы добавить первый договор поставщика</div>
      </div>`;
    return;
  }

  const sorted = [...all].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const statusBadge = s => s === 'active'
    ? `<span style="background:#e8f5e9;color:#2e7d32;padding:2px 9px;border-radius:10px;font-size:11px;font-weight:600">Действующий</span>`
    : `<span style="background:#f5f5f5;color:#888;padding:2px 9px;border-radius:10px;font-size:11px">Архив</span>`;

  body.innerHTML = `
    <table class="data-table">
      <thead><tr>
        <th>Номер договора</th>
        <th>Поставщик</th>
        <th>Дата</th>
        <th>Incoterms</th>
        <th>Валюта</th>
        <th>УНК</th>
        <th>Репатриация</th>
        <th>Статус</th>
        <th style="width:80px"></th>
      </tr></thead>
      <tbody>
        ${sorted.map(c => {
          const today = new Date(); today.setHours(0,0,0,0);
          let repatCell = '—';
          if (c.repatDate) {
            const rd = new Date(c.repatDate + 'T00:00:00');
            const diff = Math.round((rd - today) / 86400000);
            const dateStr = c.repatDate.split('-').reverse().join('.');
            if (diff < 0) {
              repatCell = `<span style="color:var(--red);font-weight:700;font-size:11px">🔴 ${dateStr}<br><span style="font-size:10px">${Math.abs(diff)} дн. назад</span></span>`;
            } else if (diff <= 30) {
              repatCell = `<span style="color:var(--rust);font-weight:700;font-size:11px">🟠 ${dateStr}<br><span style="font-size:10px">через ${diff} дн.</span></span>`;
            } else {
              repatCell = `<span style="color:var(--text2);font-size:11px">✅ ${dateStr}<br><span style="font-size:10px">через ${diff} дн.</span></span>`;
            }
          }
          return `<tr>
          <td style="font-family:'JetBrains Mono',monospace;font-weight:600;color:var(--co-accent);cursor:pointer" onclick="ctShowForm('${c.id}')">${c.num || '—'}</td>
          <td style="font-weight:500">${c.sellerName || '—'}</td>
          <td style="white-space:nowrap;color:var(--text2)">${c.date ? c.date.split('-').reverse().join('.') : '—'}</td>
          <td><span style="background:var(--co-accent-light);color:var(--co-accent);padding:2px 9px;border-radius:10px;font-size:11px;font-weight:600">${c.inco || '—'}</span></td>
          <td style="color:var(--text2)">${c.currency || '—'}</td>
          <td style="font-family:'Fira Code',monospace;font-size:11px;color:var(--text2)">${c.unk || '—'}</td>
          <td>${repatCell}</td>
          <td>${statusBadge(c.status)}</td>
          <td style="white-space:nowrap;text-align:center">
            <button onclick="ctShowForm('${c.id}')" title="Редактировать"
              style="background:none;border:none;cursor:pointer;font-size:14px;padding:4px 6px;color:var(--text2)">✏️</button>
            <button onclick="ctDeleteContract('${c.id}')" title="Удалить"
              style="background:none;border:none;cursor:pointer;font-size:14px;padding:4px 6px;color:var(--text3)">🗑</button>
          </td>
        </tr>`;}).join('')}
      </tbody>
    </table>
    <div style="margin-top:10px;font-size:11px;color:var(--text3)">Всего договоров: ${sorted.length}</div>`;
}

// ── CONTRACT: CURRENCY CONTROL / REPATRIATION HELPERS ──

function ctUpdateThreshold() {
  const amountEl = document.getElementById('c-total-amount');
  const badge    = document.getElementById('c-threshold-badge');
  const currEl   = document.getElementById('c-currency');
  if (!badge || !amountEl) return;
  const amount = parseFloat(amountEl.value) || 0;
  if (!amount) { badge.textContent = '— введите сумму контракта'; badge.style.color = 'var(--text3)'; return; }
  // Rough RUB equivalent for threshold check (user should verify with actual rate)
  const curr = currEl ? currEl.value : 'USD';
  const approxRates = { USD:90, EUR:100, CNY:12.5, INR:1.08, RUB:1 };
  const rate = approxRates[curr] || 90;
  const rubEquiv = amount * rate;
  if (rubEquiv < 3_000_000) {
    badge.textContent = `≈ ${Math.round(rubEquiv).toLocaleString('ru-RU')} ₽ — Учёт не требуется`;
    badge.style.color = 'var(--green)';
  } else if (rubEquiv < 6_000_000) {
    badge.textContent = `≈ ${Math.round(rubEquiv).toLocaleString('ru-RU')} ₽ — Уведомление банка`;
    badge.style.color = 'var(--rust)';
  } else {
    badge.textContent = `≈ ${Math.round(rubEquiv).toLocaleString('ru-RU')} ₽ — Постановка на учёт (УНК обязателен)`;
    badge.style.color = 'var(--red)';
  }
}

function ctCalcRepatFromDays() {
  const dateEl = document.getElementById('c-date');
  const daysEl = document.getElementById('c-repat-days');
  const repatEl = document.getElementById('c-repat-date');
  if (!dateEl || !daysEl || !repatEl) return;
  const base = dateEl.value;
  if (!base) { showToast('⚠️ Сначала укажите дату договора'); return; }
  const days = parseInt(daysEl.value) || 180;
  const d = new Date(base + 'T00:00:00');
  d.setDate(d.getDate() + days);
  repatEl.value = d.toISOString().slice(0, 10);
  ctUpdateRepatStatus();
}

function ctUpdateRepatDeadline() {
  // Called on repat-days input — auto-recalculate if date is already set
  const dateEl = document.getElementById('c-date');
  if (dateEl && dateEl.value) ctCalcRepatFromDays();
  ctUpdateRepatStatus();
}

function ctUpdateRepatStatus() {
  const repatEl  = document.getElementById('c-repat-date');
  const statusEl = document.getElementById('c-repat-status');
  if (!statusEl || !repatEl || !repatEl.value) { if (statusEl) statusEl.textContent = ''; return; }
  const today = new Date(); today.setHours(0,0,0,0);
  const rd = new Date(repatEl.value + 'T00:00:00');
  const diff = Math.round((rd - today) / 86400000);
  if (diff < 0) {
    statusEl.textContent = `🔴 Просрочено на ${Math.abs(diff)} дн.`;
    statusEl.style.color = 'var(--red)';
  } else if (diff <= 30) {
    statusEl.textContent = `🟠 До срока ${diff} дн.`;
    statusEl.style.color = 'var(--rust)';
  } else {
    statusEl.textContent = `✅ До срока ${diff} дн.`;
    statusEl.style.color = 'var(--green)';
  }
}

function syncRepatToDeadlines() {
  // Push repatriation deadlines for contracts of active company into the deadlines registry
  const all = DB_contracts.all().filter(c => (c.company || 'ENDV') === activeCompany);
  all.forEach(c => {
    if (!c.repatDate) return;
    const dlId = 'repat_' + c.id;
    // Remove old entry for this contract if exists
    deadlines = deadlines.filter(d => d.id !== dlId);
    deadlines.push({
      id: dlId,
      name: `Репатриация: ${c.num} (${c.sellerName || '?'})`,
      date: c.repatDate,
      type: 'customs',
      po: c.num || '',
      supplier: c.sellerName || '',
      note: c.vcNote ? `УНК: ${c.unk || '—'} · ${c.vcNote}` : `УНК: ${c.unk || '—'}`,
      done: false,
      source: 'repat',
      company: activeCompany,
    });
  });
  deadlines.sort((a,b) => (a.date||'').localeCompare(b.date||''));
  saveDeadlines();
}

// ── SPEC PRINT / PDF ──
function exportSpecPDF() {
  const area = document.getElementById('spec-preview-area');
  if (!area || !area.innerHTML.trim()) {
    alert('Сначала нажмите «Сохранить и сформировать» чтобы создать превью спецификации');
    return;
  }
  const w = window.open('', '_blank');
  const specTitle = `Спецификация №${document.getElementById('s-spec-num')?.value||'?'} · ${document.getElementById('s-contract-num')?.value||''}`;
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
    <title>${specTitle}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      /* Убираем колонтитулы браузера: нулевые поля @page,
         затем doc-wrapper добавляет внутренние поля */
      @page { size: A4; margin: 0; }
      * { box-sizing: border-box; }
      body { font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: #111; margin: 0; padding: 0; background: #f0f4f8; }
      .no-print { background: #1F7A63; color: white; padding: 10px 20px; text-align: center; }
      .no-print button { background: white; color: #1F7A63; border: none; padding: 7px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; margin-right: 12px; }
      .no-print span { font-size: 12px; opacity: 0.9; }
      /* A4-обёртка: ширина + внутренние поля вместо @page margin */
      .doc-wrapper { width: 794px; margin: 0 auto; padding: 16mm 14mm; background: white; min-height: 297mm; }
      @media print {
        body { background: white; }
        .no-print { display: none !important; }
        .doc-wrapper { width: 100%; margin: 0; padding: 16mm 14mm; }
      }
      /* Preview styles */
      .preview-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1.5px solid #111; }
      .preview-company { font-size: 18px; font-weight: 700; color: #111; letter-spacing: -0.3px; }
      .preview-doc-type { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: rgba(0,0,0,0.45); margin-top: 4px; }
      .preview-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
      .preview-table th { background: #F8F9FB; color: #555; padding: 8px 12px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 1px; }
      .preview-table td { padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 12px; color: #444; }
      .preview-table .num { font-family: 'JetBrains Mono', monospace; text-align: right; color: #1F7A63; }
      .preview-total-row { display: flex; justify-content: flex-end; padding: 12px 0; border-top: 2px solid #111; font-size: 18px; gap: 20px; color: #111; font-weight: 700; letter-spacing: -0.3px; }
      .preview-clause { margin-bottom: 12px; }
      .preview-clause-title { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1px; color: rgba(0,0,0,0.4); margin-bottom: 4px; }
      .doc-brand-block { text-align: right; flex-shrink: 0; }
      .doc-brand-sc { font-size: 20px; font-weight: 800; letter-spacing: -0.3px; line-height: 1; }
      .doc-brand-sc .sc-s { color: #1F7A63; }
      .doc-brand-sc .sc-c { color: #D64545; }
      .doc-brand-name { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; color: #111; text-transform: uppercase; line-height: 1.3; }
      .doc-brand-sub { font-size: 8.5px; letter-spacing: 0.15em; color: rgba(0,0,0,0.4); }
      .copy-btn { display: none !important; }
    </style>
  </head><body>
    <div class="no-print">
      <button onclick="window.print()">🖨 Печать / Сохранить PDF</button>
      <span>В диалоге печати: выберите «Сохранить как PDF» · снимите галку «Верхние и нижние колонтитулы»</span>
    </div>
    <div class="doc-wrapper">
      ${area.innerHTML}
    </div>
  </body></html>`);
  w.document.close();
  setTimeout(() => w.print(), 900);
}

// ══════════════════════════════════════════════════════════════
// SPEC REGISTRY — реестр спецификаций
// ══════════════════════════════════════════════════════════════

function spShowList() {
  const lv = document.getElementById('sp-list-view');
  const fv = document.getElementById('sp-form-view');
  if (lv) lv.style.display = '';
  if (fv) fv.style.display = 'none';
  spRenderList();
}

function spShowForm(id) {
  const lv = document.getElementById('sp-list-view');
  const fv = document.getElementById('sp-form-view');
  if (lv) lv.style.display = 'none';
  if (fv) fv.style.display = '';

  const title   = document.getElementById('sp-form-title');
  const editId  = document.getElementById('sp-editing-id');
  const pa      = document.getElementById('spec-preview-area');
  if (pa) pa.innerHTML = '';

  if (id) {
    const s = DB_specs_registry.find(id);
    if (s) spFillForm(s);
    if (title)  title.textContent = 'Редактировать спецификацию';
    if (editId) editId.value = id;
  } else {
    spClearForm();
    if (title)  title.textContent = 'Новая спецификация';
    if (editId) editId.value = '';
  }
}

function spClearForm() {
  const clear = ids => ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  clear(['s-contract-num','s-contract-date','s-spec-num','s-lead',
         'spec-linked-ship-id','sp-editing-id']);
  const hint = document.getElementById('s-contract-hint');
  if (hint) hint.textContent = '';
  const banner = document.getElementById('spec-si-banner');
  if (banner) banner.style.display = 'none';
  // Reset goods table
  specRows.length = 0;
  renderSpecTable();
}

function spFillForm(s) {
  const fld = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  fld('s-contract-num',  s.contractNum);
  fld('s-contract-date', s.contractDate);
  fld('s-spec-num',      s.specNum);
  fld('s-lead',          s.lead);
  const incoEl = document.getElementById('s-inco');
  if (incoEl && s.inco) incoEl.value = s.inco;
  const curEl  = document.getElementById('s-currency');
  if (curEl  && s.currency) curEl.value = s.currency;
  // Load items into specRows
  specRows.length = 0;
  if (s.items && s.items.length) {
    s.items.forEach(it => specRows.push({
      desc: it.desc || '', descRu: it.descRu || '',
      unit: it.unit || 'Pcs', qty: it.qty || 0, price: it.price || 0
    }));
  }
  renderSpecTable();
  if (s.contractNum) specContractHint(s.contractNum);
}

function spGetFormData() {
  const v    = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  const inco = document.getElementById('s-inco');
  const items = specRows.map(r => ({
    desc: r.desc, descRu: r.descRu || '', unit: r.unit, qty: r.qty, price: r.price
  }));
  const total = items.reduce((sum, r) => sum + (r.qty * r.price), 0);
  return {
    contractNum:  v('s-contract-num'),
    contractDate: v('s-contract-date'),
    specNum:      v('s-spec-num'),
    currency:     v('s-currency'),
    inco:         inco ? inco.value : 'EXW',
    lead:         v('s-lead'),
    items,
    total,
    status: 'active',
    updatedAt: new Date().toISOString().slice(0, 10)
  };
}

function spSaveOnly() {
  const eid = document.getElementById('sp-editing-id');
  const editingId = eid ? eid.value : '';
  const data = spGetFormData();
  if (!data.contractNum) { alert('Введите номер договора'); return; }
  if (!data.specNum)     { alert('Введите номер спецификации'); return; }
  if (editingId) {
    DB_specs_registry.update(editingId, { ...data, id: editingId });
  } else {
    DB_specs_registry.insert({ ...data, id: Date.now().toString(), createdAt: data.updatedAt });
  }
  // Also sync to old ved_contracts key for autofill compatibility
  specSaveToStorage();
  spShowList();
}

function spSaveAndGenerate() {
  const eid = document.getElementById('sp-editing-id');
  const editingId = eid ? eid.value : '';
  const data = spGetFormData();
  if (!data.contractNum) { alert('Введите номер договора'); return; }
  if (!data.specNum)     { alert('Введите номер спецификации'); return; }
  let savedId = editingId;
  if (editingId) {
    DB_specs_registry.update(editingId, { ...data, id: editingId });
  } else {
    savedId = Date.now().toString();
    DB_specs_registry.insert({ ...data, id: savedId, createdAt: data.updatedAt });
    if (eid) eid.value = savedId;
    const t = document.getElementById('sp-form-title');
    if (t) t.textContent = 'Редактировать спецификацию';
  }
  specSaveToStorage();
  generateSpec(); // existing preview function
}

function spDeleteSpec(id) {
  DB_specs_registry.delete(id);
  spRenderList();
}

function spRenderList() {
  const searchEl = document.getElementById('sp-search');
  const search   = searchEl ? searchEl.value.toLowerCase() : '';
  let all = DB_specs_registry.all();
  if (search) {
    all = all.filter(s =>
      (s.contractNum || '').toLowerCase().includes(search) ||
      (s.specNum     || '').toString().includes(search)
    );
  }

  const body = document.getElementById('sp-list-body');
  if (!body) return;

  if (all.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:60px 20px;color:var(--text3)">
        <div style="font-size:48px;margin-bottom:12px">📐</div>
        <div style="font-size:14px;font-weight:600;color:var(--text2);margin-bottom:6px">Реестр спецификаций пуст</div>
        <div style="font-size:12px">Нажмите «+ Новая спецификация» чтобы создать первое приложение к договору</div>
      </div>`;
    return;
  }

  const sorted = [...all].sort((a, b) => {
    const ca = a.contractNum || ''; const cb = b.contractNum || '';
    if (ca !== cb) return ca.localeCompare(cb);
    return (a.specNum || '0').localeCompare(b.specNum || '0', undefined, { numeric: true });
  });

  const fmtMoney = (n, cur) => {
    const sym = { CNY:'¥', INR:'₹', USD:'$', EUR:'€', RUB:'₽' }[cur] || cur || '';
    return `${sym}${Number(n||0).toLocaleString('ru-RU', {maximumFractionDigits:2})}`;
  };

  body.innerHTML = `
    <table class="data-table">
      <thead><tr>
        <th>Договор</th>
        <th>Приложение №</th>
        <th>Позиций</th>
        <th>Сумма</th>
        <th>Incoterms</th>
        <th>Валюта</th>
        <th>Дата</th>
        <th style="width:80px"></th>
      </tr></thead>
      <tbody>
        ${sorted.map(s => `<tr>
          <td style="font-family:'JetBrains Mono',monospace;font-weight:600;color:var(--co-accent);cursor:pointer" onclick="spShowForm('${s.id}')">${s.contractNum || '—'}</td>
          <td style="font-weight:600;text-align:center">№${s.specNum || '—'}</td>
          <td style="text-align:center;color:var(--text2)">${(s.items||[]).length}</td>
          <td style="font-weight:600;white-space:nowrap">${fmtMoney(s.total, s.currency)}</td>
          <td><span style="background:var(--co-accent-light);color:var(--co-accent);padding:2px 9px;border-radius:10px;font-size:11px;font-weight:600">${s.inco || '—'}</span></td>
          <td style="color:var(--text2)">${s.currency || '—'}</td>
          <td style="white-space:nowrap;color:var(--text2)">${s.updatedAt ? s.updatedAt.split('-').reverse().join('.') : '—'}</td>
          <td style="white-space:nowrap;text-align:center">
            <button onclick="spShowForm('${s.id}')" title="Редактировать"
              style="background:none;border:none;cursor:pointer;font-size:14px;padding:4px 6px;color:var(--text2)">✏️</button>
            <button onclick="spDeleteSpec('${s.id}')" title="Удалить"
              style="background:none;border:none;cursor:pointer;font-size:14px;padding:4px 6px;color:var(--text3)">🗑</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="margin-top:10px;font-size:11px;color:var(--text3)">Всего спецификаций: ${sorted.length}</div>`;
}

// ── SPEC PREVIEW ──
function generateSpec() {
  const contractNum = document.getElementById('s-contract-num').value;
  const contractDate = document.getElementById('s-contract-date').value;
  const specNum = document.getElementById('s-spec-num').value;
  const currency = document.getElementById('s-currency').value;
  const inco = document.getElementById('s-inco').value;
  const lead = document.getElementById('s-lead').value;

  let total = 0;
  let rows = specRows.map((r,i) => {
    const amt = r.qty * r.price;
    total += amt;
    return `<tr>
      <td>${i+1}</td>
      <td>${r.desc}</td>
      <td>${r.unit}</td>
      <td class="num">${r.qty}</td>
      <td class="num">${fmtNum(r.price)}</td>
      <td class="num">${fmtNum(amt)}</td>
    </tr>`;
  }).join('');

  const area = document.getElementById('spec-preview-area');
  area.className = 'preview-area visible';
  area.innerHTML = `
    <button class="copy-btn" onclick="exportSpecPDF()">🖨 Печать / PDF</button>
    <!-- Шапка: логотип слева, SC Brand справа -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:12px;border-bottom:1.5px solid #111">
      <div style="display:flex;align-items:center;gap:12px">
        ${getCompanyLogoHtml(activeCompany, 44)}
      </div>
      ${getDocBrandBlock()}
    </div>
    <!-- Информация о документе -->
    <div class="preview-header" style="border-bottom:none;margin-bottom:16px;padding-bottom:0">
      <div>
        <div class="preview-doc-type">Specification №${specNum} · Спецификация №${specNum}</div>
        <div class="preview-company">к договору № ${contractNum}</div>
        <div style="font-size:12px;color:rgba(0,0,0,0.45);margin-top:4px;font-family:'Inter',monospace">${fmtDate(contractDate)}</div>
      </div>
    </div>
    <table class="preview-table">
      <thead><tr>
        <th>#</th><th>Description / Описание</th><th>Unit</th>
        <th style="text-align:right">Qty</th>
        <th style="text-align:right">Unit Price (${currency})</th>
        <th style="text-align:right">Amount (${currency})</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="preview-total-row">
      <span>TOTAL ${currency}</span>
      <span>${fmtNum(total)}</span>
    </div>
    <div class="preview-clause" style="margin-top:20px">
      <div class="preview-clause-title">Delivery Terms</div>
      <div>${inco}</div>
    </div>
    <div class="preview-clause">
      <div class="preview-clause-title">Lead Time</div>
      <div>${lead}</div>
    </div>
  `;
  area.scrollIntoView({behavior:'smooth'});
  // Save spec to localStorage for autofill
  specSaveToStorage();
}

// ── INVOICE PREVIEW ──
function generateInvoice() {
  const num = document.getElementById('i-num').value;
  const date = document.getElementById('i-date').value;
  const exporter = document.getElementById('i-exporter').value;
  const consignee = document.getElementById('i-consignee').value;
  const precarriage = document.getElementById('i-precarriage').value;
  const pol = document.getElementById('i-pol').value;
  const pod = document.getElementById('i-pod').value;
  const origin = document.getElementById('i-origin').value;
  const dest = document.getElementById('i-dest').value;
  const hs = document.getElementById('i-hs').value;

  const cur = invGetCurrency();
  const sym = INV_CUR_SYM[cur] || cur;

  let total = 0;
  let rows = invRows.map((r,i) => {
    const amt = (r.qty||0) * (r.price||0);
    total += amt;
    return `<tr>
      <td>${i+1}</td>
      <td>${r.desc||''}</td>
      <td class="num">${r.qty||0}</td>
      <td class="num">${r.unit||invGetDefaultUnit()}</td>
      <td class="num">${fmtNum(r.price||0)}</td>
      <td class="num">${fmtNum(amt)}</td>
    </tr>`;
  }).join('');

  const area = document.getElementById('inv-preview-area');
  area.className = 'preview-area visible';
  area.innerHTML = `
    <button class="copy-btn" onclick="window.print()">🖨 Печать</button>
    <div class="preview-header">
      <div>
        <div class="preview-doc-type">Proforma Invoice</div>
        <div class="preview-company">${num}</div>
        <div style="font-size:12px;color:rgba(0,0,0,0.45);margin-top:4px;font-family:'Inter',monospace">${fmtDate(date)} · HS: ${hs} · ${origin} → ${dest}</div>
      </div>
      <div class="doc-brand-block">
        <div class="doc-brand-sc"><span class="sc-s">S</span><span class="sc-c">C</span></div>
        <div class="doc-brand-name">Supply Chain</div>
        <div class="doc-brand-sub">ENDV · PBS</div>
      </div>
    </div>
    <div class="preview-parties">
      <div>
        <div class="preview-party-label">Exporter / Экспортёр</div>
        <div class="preview-party-name" style="font-size:12px">${exporter}</div>
      </div>
      <div>
        <div class="preview-party-label">Consignee / Грузополучатель</div>
        <div class="preview-party-name" style="font-size:12px">${consignee}</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:20px;font-size:11px">
      <div><div class="preview-party-label">Pre-Carriage</div>${precarriage}</div>
      <div><div class="preview-party-label">Port of Loading</div>${pol||'—'}</div>
      <div><div class="preview-party-label">Port of Discharge</div>${pod||'—'}</div>
    </div>
    <table class="preview-table">
      <thead><tr>
        <th>#</th><th>Description of Goods</th>
        <th style="text-align:right">Qty</th>
        <th style="text-align:right">Unit</th>
        <th style="text-align:right">Unit Rate ${cur} ${sym}</th>
        <th style="text-align:right">Amount ${cur} ${sym}</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="preview-total-row">
      <span>TOTAL ${cur} ${sym}</span>
      <span>${fmtNum(total)}</span>
    </div>
  `;
  area.scrollIntoView({behavior:'smooth'});
}


// ── RFQ TABS ──
function showRfqTab(tab) {
  ['form','compare','result'].forEach(t => {
    document.getElementById('rfq-tab-' + t).style.display = t === tab ? 'block' : 'none';
    document.getElementById('tab-' + t).classList.toggle('active', t === tab);
  });
}

// ── RFQ LETTER GENERATION ──
function generateRfqLetter() {
  const cargo    = document.getElementById('rfq-cargo').value;
  const weight   = document.getElementById('rfq-weight').value;
  const vol      = document.getElementById('rfq-vol').value;
  const pkgs     = document.getElementById('rfq-pkgs').value;
  const pkgType  = document.getElementById('rfq-pkg-type').value;
  const value    = document.getElementById('rfq-value').value;
  const origin   = document.getElementById('rfq-origin').value;
  const dest     = document.getElementById('rfq-dest').value;
  const mode     = document.getElementById('rfq-mode').value;
  const inco     = document.getElementById('rfq-inco').value;
  const etd      = document.getElementById('rfq-etd').value;
  const eta      = document.getElementById('rfq-eta').value;
  const company  = document.getElementById('rfq-from-company').value;
  const contact  = document.getElementById('rfq-from-contact').value;
  const email    = document.getElementById('rfq-from-email').value;
  const phone    = document.getElementById('rfq-from-phone').value;
  const notes    = document.getElementById('rfq-notes').value;

  const srvs = [];
  if (document.getElementById('srv-pickup').checked)    srvs.push('Pick-up from supplier (EXW)');
  if (document.getElementById('srv-export').checked)    srvs.push('Export customs clearance (India)');
  if (document.getElementById('srv-import').checked)    srvs.push('Import customs clearance (Russia)');
  if (document.getElementById('srv-insurance').checked) srvs.push('Cargo insurance');
  if (document.getElementById('srv-delivery').checked)  srvs.push('Delivery to warehouse');
  if (document.getElementById('srv-docs').checked)      srvs.push('Customs declaration preparation');

  const today = new Date().toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'});
  const deadline = new Date(Date.now() + 5*24*3600*1000).toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'});

  const letterEn = `${today}

TO: [Freight Forwarder / Экспедитор]
FROM: ${company} — ${contact}
RE: Request for Freight Quotation (RFQ)

Dear Sir/Madam,

${company} is requesting a freight quotation for the shipment described below. Please provide your best rates and conditions by ${deadline}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CARGO DETAILS / ДЕТАЛИ ГРУЗА
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Description:        ${cargo}
Gross Weight:       ${weight || '—'} kg
Volume:             ${vol || '—'} m³
Packages:           ${pkgs || '—'} × ${pkgType}
Declared Value:     ${value || '—'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROUTING / МАРШРУТ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Origin:             ${origin}
Destination:        ${dest}
Transport Mode:     ${mode}
Incoterms:          ${inco}
Requested ETD:      ${etd ? fmtDate(etd) : '—'}
Requested ETA:      ${eta ? fmtDate(eta) : '—'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIRED SERVICES / УСЛУГИ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${srvs.map(s => '✓ ' + s).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUOTATION FORMAT REQUESTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Please quote separately:
1. Freight charges (origin → destination)
2. Local charges at origin (THC, documentation, etc.)
3. Local charges at destination
4. Customs clearance fees (if applicable)
5. Insurance premium (if applicable)
6. Total all-in cost
7. Transit time (days)
8. Validity of quotation

${notes ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nNOTES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${notes}\n` : ''}

Please send your quotation to: ${email || '[email]'}

Best regards,
${contact}
${company}
${phone || ''}`;

  showRfqTab('result');

  document.getElementById('rfq-letter-preview').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid var(--text)">
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:3px;color:var(--text3);margin-bottom:6px">Request for Quotation · Запрос ставок</div>
        <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700">${company}</div>
        <div style="font-size:11px;color:var(--text3);font-family:'IBM Plex Mono',monospace;margin-top:4px">${today}</div>
      </div>
      <div style="text-align:right">
        <button class="copy-btn" onclick="copyLetter()" style="margin-right:6px">⎘ Копировать текст</button>
        <button class="copy-btn" onclick="downloadRfqTxt()" style="margin-right:6px">⬇ Скачать .txt</button>
        <button class="copy-btn" onclick="exportRfqExcel()" style="background:rgba(31,122,99,0.12);border-color:rgba(31,122,99,0.4);color:var(--green)">⬇ Excel</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:28px">
      <div style="background:var(--card);padding:16px;border:1px solid var(--border)">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:8px">Груз</div>
        <div style="font-size:13px;font-weight:500">${cargo}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px">${weight ? weight + ' kg · ' : ''}${vol ? vol + ' m³' : ''}</div>
        <div style="font-size:11px;color:var(--text3)">${pkgs ? pkgs + ' × ' + pkgType : pkgType}</div>
      </div>
      <div style="background:var(--card);padding:16px;border:1px solid var(--border)">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:8px">Маршрут</div>
        <div style="font-size:13px;font-weight:500">${origin}</div>
        <div style="font-size:11px;color:var(--text3);margin:4px 0">↓ ${mode}</div>
        <div style="font-size:13px;font-weight:500">${dest}</div>
      </div>
      <div style="background:var(--card);padding:16px;border:1px solid var(--border)">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:8px">Сроки</div>
        <div style="font-size:11px"><b>ETD:</b> ${etd ? fmtDate(etd) : '—'}</div>
        <div style="font-size:11px;margin-top:4px"><b>ETA:</b> ${eta ? fmtDate(eta) : '—'}</div>
        <div style="font-size:11px;margin-top:4px;color:var(--accent)"><b>Ответ до:</b> ${deadline}</div>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:12px">Запрашиваемые услуги</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${srvs.map(s => `<span style="background:var(--text);color:white;padding:4px 12px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px">${s}</span>`).join('')}
      </div>
    </div>

    ${notes ? `<div style="margin-bottom:20px;padding:16px;border-left:3px solid var(--accent);background:white"><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:6px">Примечания</div><div style="font-size:12px">${notes}</div></div>` : ''}

    <div style="margin-top:28px;padding:20px;background:var(--card);border:1px solid var(--border)">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--text3);margin-bottom:12px">Полный текст письма (для копирования)</div>
      <pre id="letter-text" style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.8;white-space:pre-wrap;color:var(--text)">${letterEn}</pre>
    </div>
  `;

  // Store letter for copy
  window._rfqLetter = letterEn;
  // Store structured data for Excel export
  window._rfqData = { cargo, weight, vol, pkgs, pkgType, value, origin, dest, mode, inco,
    etd: etd ? fmtDate(etd) : '', eta: eta ? fmtDate(eta) : '',
    company, contact, email, phone, notes, services: srvs };
}

function copyLetter() {
  if (window._rfqLetter) {
    navigator.clipboard.writeText(window._rfqLetter).then(() => {
      const btn = document.querySelector('.copy-btn');
      if (btn) { btn.textContent = '✓ Скопировано'; setTimeout(() => btn.textContent = '⎘ Копировать текст', 2000); }
    });
  }
}

// ── FREIGHTER COMPARISON ──
const freighters = [];

function addFreighter() {
  const id = freighters.length;
  freighters.push({ name: '', freight: 0, customs: 0, extra: 0, transit: 0, reliability: 3 });
  renderFreighters();
}

function renderFreighters() {
  const list = document.getElementById('freighters-list');
  if (freighters.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text3);font-family:'IBM Plex Mono',monospace;font-size:12px;border:1px dashed var(--border)">Нажмите «+ Добавить экспедитора» чтобы начать сравнение</div>`;
    return;
  }
  list.innerHTML = freighters.map((f, i) => `
    <div class="freighter-card">
      <div class="freighter-card-title">
        <span>Экспедитор ${i + 1}</span>
        <button class="del-btn" onclick="freighters.splice(${i},1);renderFreighters()">× удалить</button>
      </div>
      <div class="form-grid cols-3">
        <div class="field" style="grid-column:span 3">
          <label>Название компании</label>
          <input value="${f.name}" placeholder="Название экспедитора / ТК" onchange="freighters[${i}].name=this.value">
        </div>
        <div class="field">
          <label>Фрахт (руб / USD)</label>
          <input type="number" value="${f.freight||''}" placeholder="0" onchange="freighters[${i}].freight=parseFloat(this.value)||0">
        </div>
        <div class="field">
          <label>Таможня</label>
          <input type="number" value="${f.customs||''}" placeholder="0" onchange="freighters[${i}].customs=parseFloat(this.value)||0">
        </div>
        <div class="field">
          <label>Доп. услуги</label>
          <input type="number" value="${f.extra||''}" placeholder="0" onchange="freighters[${i}].extra=parseFloat(this.value)||0">
        </div>
        <div class="field">
          <label>Транзит (дней)</label>
          <input type="number" value="${f.transit||''}" placeholder="0" onchange="freighters[${i}].transit=parseFloat(this.value)||0">
        </div>
        <div class="field">
          <label>Надёжность (1–5)</label>
          <select onchange="freighters[${i}].reliability=parseInt(this.value)">
            ${[1,2,3,4,5].map(n => `<option value="${n}" ${f.reliability===n?'selected':''}>${n} ${'★'.repeat(n)}${'☆'.repeat(5-n)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Комментарий</label>
          <input value="${f.note||''}" placeholder="Особые условия, ограничения..." onchange="freighters[${i}].note=this.value">
        </div>
      </div>
    </div>
  `).join('');
}

function compareFreighters() {
  if (freighters.length < 1) { alert('Добавьте хотя бы одного экспедитора'); return; }

  const results = freighters.map((f, i) => {
    const total = (f.freight||0) + (f.customs||0) + (f.extra||0);
    return { ...f, total, idx: i };
  });

  // Score: 60% price, 20% transit, 20% reliability
  const maxTotal = Math.max(...results.map(r => r.total)) || 1;
  const maxTransit = Math.max(...results.map(r => r.transit)) || 1;

  results.forEach(r => {
    const priceScore = maxTotal > 0 ? (1 - r.total / maxTotal) * 60 : 60;
    const transitScore = maxTransit > 0 ? (1 - r.transit / maxTransit) * 20 : 20;
    const relScore = (r.reliability / 5) * 20;
    r.score = priceScore + transitScore + relScore;
  });

  results.sort((a, b) => b.score - a.score);
  const maxScore = results[0].score;

  const tbody = document.getElementById('compare-body');
  tbody.innerHTML = results.map((r, rank) => `
    <tr style="${rank===0 ? 'background:#f1f8e9' : ''}">
      <td>
        <b>${r.name || 'Экспедитор ' + (r.idx+1)}</b>
        ${rank === 0 ? '<span style="background:#2e7d32;color:white;font-size:9px;padding:2px 8px;margin-left:6px;font-family:monospace;letter-spacing:1px">✓ ЛУЧШИЙ</span>' : ''}
      </td>
      <td class="num">${fmtNum(r.freight)}</td>
      <td class="num">${fmtNum(r.customs)}</td>
      <td class="num">${fmtNum(r.extra)}</td>
      <td class="num" style="font-weight:600;color:var(--accent)">${fmtNum(r.total)}</td>
      <td style="font-family:'IBM Plex Mono',monospace">${r.transit || '—'} дн.</td>
      <td>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;margin-bottom:3px">${r.score.toFixed(0)}/100</div>
        <div class="score-bar"><div class="score-fill" style="width:${(r.score/maxScore)*100}%"></div></div>
      </td>
    </tr>
  `).join('');

  const winner = results[0];
  document.getElementById('winner-box').innerHTML = `
    <div style="background:var(--text);color:white;padding:20px 24px;display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:3px;opacity:0.6;margin-bottom:6px">Рекомендуемый экспедитор</div>
        <div style="font-family:'Playfair Display',serif;font-size:20px">${winner.name || 'Экспедитор ' + (winner.idx+1)}</div>
        ${winner.note ? `<div style="font-size:11px;opacity:0.7;margin-top:4px">${winner.note}</div>` : ''}
      </div>
      <div style="text-align:right">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:0.6;margin-bottom:4px">Общая стоимость</div>
        <div style="font-family:'Playfair Display',serif;font-size:24px">${fmtNum(winner.total)}</div>
        <div style="font-size:10px;opacity:0.6;font-family:'IBM Plex Mono',monospace">Транзит: ${winner.transit || '—'} дн. · Рейтинг: ${'★'.repeat(winner.reliability)}</div>
      </div>
    </div>
  `;
  document.getElementById('compare-result').style.display = 'block';
  document.getElementById('compare-result').scrollIntoView({behavior:'smooth'});
}


// ══════════════════════════════════════════
// TRACKER
// ══════════════════════════════════════════

const PIPE_STAGES = [
  { key: 'contract',  label: 'Договор\nподписан',  icon: '📄' },
  { key: 'payment',   label: 'Оплата\nпроизведена', icon: '💳' },
  { key: 'production',label: 'Товар\nготов',        icon: '🏭' },
  { key: 'pickup',    label: 'Забор\nгруза',         icon: '🚛' },
  { key: 'export',    label: 'Экспортная\nтаможня', icon: '🇮🇳' },
  { key: 'transit',   label: 'В пути\n(транзит)',    icon: '🚢' },
  { key: 'arrival',   label: 'Прибытие\nв РФ',       icon: '⚓' },
  { key: 'customs',   label: 'Импортная\nтаможня',  icon: '🛃' },
  { key: 'delivery',  label: 'Доставка\nна склад',   icon: '🏠' },
];

const REQUIRED_DOCS = [
  'Договор поставки', 'Спецификация', 'Инвойс (коммерческий)', 'Упаковочный лист',
  'Коносамент / CMR', 'Сертификат происхождения', 'Разрешительные документы',
  'Таможенная декларация (экспорт)', 'Таможенная декларация (импорт)', 'Акт приёмки',
];

let shipments = [];

function openNewShipmentModal() {
  // Reset edit mode
  document.getElementById('modal-edit-id').value = '';
  document.getElementById('modal-shp-title').textContent = 'Новая поставка';
  document.getElementById('modal-shp-save-btn').textContent = '⬡ Создать поставку';
  // render docs list grouped by category — simple block layout, no flex issues
  document.getElementById('docs-checklist').innerHTML = SHP_DOC_GROUPS.map(group => {
    const rows = group.docs.map(def =>
      `<div style="padding:5px 0;border-bottom:1px solid var(--border)">
        <label style="display:block;cursor:pointer;font-size:12px;color:var(--text)">
          <input type="checkbox" id="doc-${def.id}" style="accent-color:var(--co-accent);margin-right:8px;vertical-align:middle">
          <span style="vertical-align:middle;margin-right:6px">${def.icon}</span>
          <span style="vertical-align:middle">${def.name}</span>
          ${def.required ? '<span style="font-size:9px;color:var(--co-accent);font-family:\'JetBrains Mono\',monospace;font-weight:700;margin-left:6px">●</span>' : ''}
        </label>
      </div>`
    ).join('');
    return `<div style="margin-bottom:14px">
      <div style="font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text3);padding:4px 0 6px;margin-bottom:4px;font-weight:700">${group.label}</div>
      ${rows}
    </div>`;
  }).join('');
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function createShipment() {
  const po = document.getElementById('m-po').value || ('SHIP-' + Date.now());
  const companyId = document.querySelector('input[name="m-company"]:checked')?.value || activeCompany || 'ENDV';
  const docs = SHP_DOCS_LIST.map(def => {
    const checked = document.getElementById('doc-' + def.id)?.checked || false;
    return { id: def.id, name: def.name, icon: def.icon, status: checked ? 'received' : 'none', received: checked };
  });
  const shipment = {
    id: Date.now(),
    po,
    company: companyId,
    supplier: document.getElementById('m-supplier').value,
    cargo: document.getElementById('m-cargo').value,
    value: document.getElementById('m-value').value,
    forwarder: document.getElementById('m-forwarder').value,
    from: document.getElementById('m-from').value,
    to: document.getElementById('m-to').value,
    inco: document.getElementById('m-inco').value,
    mode: document.getElementById('m-mode').value,
    dates: {
      payment:   document.getElementById('m-d-payment').value,
      production: document.getElementById('m-d-ready').value,
      pickup:    document.getElementById('m-d-etd').value,
      arrival:   document.getElementById('m-d-eta').value,
      customs:   document.getElementById('m-d-customs').value,
      delivery:  document.getElementById('m-d-warehouse').value,
    },
    // current stage index
    currentStage: 0,
    events: [{ date: new Date().toLocaleDateString('ru-RU'), icon: '✅', text: 'Поставка создана в системе', note: po }],
    docs,
    expanded: false,
  };
  // Link delivery number from saved contract if exists
  const linkedContract = contractFindByNum(po);
  if (linkedContract && linkedContract.deliveryNum) {
    shipment.deliveryNum = linkedContract.deliveryNum;
  }
  shipments.unshift(shipment);
  shipmentsSyncToDB(shipment); // persist to DB_shipments
  closeModal();
  renderShipments();
  renderRegistry();
}

function saveShipmentFromModal() {
  const editId = document.getElementById('modal-edit-id').value;
  if (editId) {
    updateShipment(editId);
  } else {
    createShipment();
  }
}

function editShipment(id) {
  const s = shipments.find(x => x.id == id);
  if (!s) return;
  // Open modal (renders doc checklist and resets state)
  openNewShipmentModal();
  // Switch to edit mode
  document.getElementById('modal-edit-id').value = String(id);
  document.getElementById('modal-shp-title').textContent = 'Редактировать поставку';
  document.getElementById('modal-shp-save-btn').textContent = '💾 Сохранить изменения';
  // Company
  const coVal = s.company || 'ENDV';
  const coRadio = document.querySelector('input[name="m-company"][value="' + coVal + '"]');
  if (coRadio) coRadio.checked = true;
  // Basic fields
  document.getElementById('m-po').value = s.po || s.shipment_number || '';
  document.getElementById('m-supplier').value = s.supplier || '';
  document.getElementById('m-cargo').value = s.cargo || '';
  document.getElementById('m-value').value = s.value || '';
  document.getElementById('m-forwarder').value = s.forwarder || '';
  document.getElementById('m-from').value = s.from || '';
  document.getElementById('m-to').value = s.to || '';
  // Selects
  const incoEl = document.getElementById('m-inco');
  for (let opt of incoEl.options) {
    if (opt.value === s.inco) { incoEl.value = opt.value; break; }
  }
  const modeEl = document.getElementById('m-mode');
  for (let opt of modeEl.options) {
    if (opt.text === s.mode || opt.value === s.mode) { modeEl.value = opt.value; break; }
  }
  // Dates
  const d = s.dates || {};
  document.getElementById('m-d-payment').value = d.payment || '';
  document.getElementById('m-d-ready').value = d.production || '';
  document.getElementById('m-d-etd').value = d.pickup || '';
  document.getElementById('m-d-eta').value = d.arrival || '';
  document.getElementById('m-d-customs').value = d.customs || '';
  document.getElementById('m-d-warehouse').value = d.delivery || '';
  // Docs — pre-check received/submitted
  SHP_DOCS_LIST.forEach(def => {
    const el = document.getElementById('doc-' + def.id);
    if (!el) return;
    const doc = (s.docs || []).find(dd => dd.id === def.id || dd.name === def.name);
    el.checked = !!(doc && (doc.status === 'received' || doc.status === 'submitted' || doc.received));
  });
}

function updateShipment(id) {
  const s = shipments.find(x => x.id == id);
  if (!s) return;
  s.company = document.querySelector('input[name="m-company"]:checked')?.value || s.company;
  s.po = document.getElementById('m-po').value || s.po;
  s.supplier = document.getElementById('m-supplier').value;
  s.cargo = document.getElementById('m-cargo').value;
  s.value = document.getElementById('m-value').value;
  s.forwarder = document.getElementById('m-forwarder').value;
  s.from = document.getElementById('m-from').value;
  s.to = document.getElementById('m-to').value;
  s.inco = document.getElementById('m-inco').value;
  s.mode = document.getElementById('m-mode').value;
  s.dates = {
    payment:    document.getElementById('m-d-payment').value,
    production: document.getElementById('m-d-ready').value,
    pickup:     document.getElementById('m-d-etd').value,
    arrival:    document.getElementById('m-d-eta').value,
    customs:    document.getElementById('m-d-customs').value,
    delivery:   document.getElementById('m-d-warehouse').value,
  };
  // Sync doc statuses from checkboxes (only update 'none' → 'received')
  SHP_DOCS_LIST.forEach(def => {
    const el = document.getElementById('doc-' + def.id);
    if (!el) return;
    let doc = (s.docs || []).find(dd => dd.id === def.id);
    if (!doc) {
      if (!s.docs) s.docs = [];
      doc = { id: def.id, name: def.name, icon: def.icon, status: 'none', received: false };
      s.docs.push(doc);
    }
    if (el.checked && (doc.status === 'none' || doc.status === 'requested')) {
      doc.status = 'received'; doc.received = true;
    } else if (!el.checked && doc.status === 'none') {
      doc.status = 'none'; doc.received = false;
    }
  });
  // Add edit event
  s.events = s.events || [];
  s.events.unshift({ date: new Date().toLocaleDateString('ru-RU'), icon: '✏️', text: 'Данные поставки обновлены', note: '' });
  shipmentsSyncToDB(s);
  shipmentsSave();
  closeModal();
  renderShipments();
}

function deleteShipment(id) {
  const s = shipments.find(x => x.id == id);
  const label = s ? (s.po || s.shipment_number || id) : id;
  if (!confirm('Удалить поставку «' + label + '»?\nЭто действие нельзя отменить.')) return;
  const idx = shipments.findIndex(x => x.id == id);
  if (idx !== -1) shipments.splice(idx, 1);
  // Remove from DB
  try {
    const rows = DB_shipments.all().filter(r => String(r.id) !== String(id));
    DB_shipments.save(rows);
  } catch(e) { console.warn('deleteShipment DB error', e); }
  shipmentsSave();
  renderShipments();
}

function advanceStage(id) {
  const s = shipments.find(x => x.id == id);
  if (!s || s.currentStage >= PIPE_STAGES.length - 1) return;
  s.currentStage++;
  const stage = PIPE_STAGES[s.currentStage];
  s.events.unshift({
    date: new Date().toLocaleDateString('ru-RU'),
    icon: stage.icon,
    text: 'Этап завершён: ' + stage.label.replace('\n', ' '),
    note: ''
  });
  // Also update current_stage for DB snake_case compatibility
  s.current_stage = s.currentStage;
  shipmentsSyncToDB(s);
  shipmentsSave();
  renderShipments();
}

function addEvent(id) {
  const textEl = document.getElementById('new-event-text-' + id);
  const noteEl = document.getElementById('new-event-note-' + id);
  if (!textEl || !textEl.value.trim()) return;
  const s = shipments.find(x => x.id == id);
  if (!s) return;
  const amountEl    = document.getElementById('new-event-amount-' + id);
  const budgetEl    = document.getElementById('new-event-budget-' + id);
  const linkedAmount = amountEl && amountEl.value ? parseFloat(amountEl.value) : 0;
  const linkedLine   = budgetEl ? budgetEl.value : '';
  s.events.unshift({
    date: new Date().toLocaleDateString('ru-RU'),
    icon: '📝',
    text: textEl.value.trim(),
    note: noteEl ? noteEl.value.trim() : '',
    ...(linkedAmount && linkedLine ? { amount: linkedAmount, budgetLine: linkedLine } : {})
  });
  if (linkedAmount && linkedLine && s.po) {
    bgLinkEventToBudget(s.po, linkedLine, linkedAmount);
  }
  shipmentsSyncToDB(s);
  shipmentsSave();
  renderShipments();
}

function toggleDoc(id, docId) {
  const s = shipments.find(x => x.id == id);
  if (!s) return;
  if (!s.docs) s.docs = [];
  // Find doc by id (new) or index (legacy)
  let doc = typeof docId === 'string'
    ? s.docs.find(d => d.id === docId)
    : s.docs[docId];
  if (!doc && typeof docId === 'string') {
    // Legacy: try partial English name match (e.g. "Invoice" in "Invoice / Счёт-фактура")
    const def = SHP_DOCS_LIST.find(d => d.id === docId);
    if (def) {
      const prefix = def.name.split(' / ')[0].toLowerCase().trim();
      doc = s.docs.find(d => !d.id && d.name && d.name.toLowerCase().startsWith(prefix));
      if (doc) {
        doc.id = docId; // fix legacy doc — assign proper id
        if (!doc.icon) doc.icon = def.icon;
      } else {
        // Create new doc entry and add to s.docs permanently
        doc = { id: docId, name: def.name, icon: def.icon, status: 'none', received: false };
        s.docs.push(doc);
      }
    }
  }
  if (!doc) return;
  // Migrate legacy boolean
  if (doc.status === undefined) doc.status = doc.received ? 'received' : 'none';
  const cur = doc.status || 'none';
  const next = (DOC_STATUS_CYCLE[cur] || DOC_STATUS_CYCLE.none).next;
  doc.status = next;
  doc.received = (next === 'received' || next === 'submitted');
  // Log event on key transitions
  const today = new Date().toLocaleDateString('ru-RU');
  if (next === 'received') {
    s.events.unshift({ date: today, icon: '✅', text: 'Получен документ: ' + doc.name, note: '' });
  } else if (next === 'submitted') {
    s.events.unshift({ date: today, icon: '🏛️', text: 'Документ передан на таможню: ' + doc.name, note: '' });
  } else if (next === 'requested') {
    s.events.unshift({ date: today, icon: '📩', text: 'Документ запрошен: ' + doc.name, note: '' });
  }
  shipmentsSyncToDB(s);
  shipmentsSave();
  renderShipments(); // accordion in card re-renders with updated doc status
}

function toggleExpand(id) {
  const s = shipments.find(x => x.id == id);
  if (!s) return;
  // Collapse all others, toggle this one
  shipments.forEach(x => { if (x.id != id) x.expanded = false; });
  s.expanded = !s.expanded;
  renderShipments(); // accordion detail rendered inside card by renderShipments
}

function renderDocPackage(s) {
  if (!s.docs) s.docs = [];

  // — Строим динамический набор по параметрам поставки —
  const docGroups = buildDocSet(s);
  const allDefs   = docGroups.flatMap(g => g.docs);

  // — Миграция/синхронизация: гарантируем наличие каждого дефа в s.docs —
  allDefs.forEach(def => {
    let doc = s.docs.find(d => d.id === def.id);
    if (!doc) {
      const prefix = def.name.split(' / ')[0].toLowerCase().trim();
      doc = s.docs.find(d => !d.id && d.name && d.name.toLowerCase().startsWith(prefix));
      if (doc) { doc.id = def.id; if (!doc.icon) doc.icon = def.icon; }
      else s.docs.push({ id: def.id, name: def.name, icon: def.icon, status: 'none', received: false, files: [] });
    }
    if (!doc.status) doc.status = doc.received ? 'received' : 'none';
    if (!doc.files) doc.files = [];
  });

  // — Build lookup —
  const docMap = {};
  s.docs.forEach(d => { if (d.id) docMap[d.id] = d; });

  // — Считаем статистику —
  const reqDefs      = allDefs.filter(d => d.required);
  const totalDocs    = allDefs.length;
  const totalReq     = reqDefs.length;
  const totalRecv    = allDefs.filter(d => { const doc = docMap[d.id]; return doc && doc.status !== 'none'; }).length;
  const totalScanned = allDefs.filter(d => { const doc = docMap[d.id]; return doc && doc.files && doc.files.length > 0; }).length;
  const reqMissingScan = reqDefs.filter(d => { const doc = docMap[d.id]; return !doc || !doc.files || doc.files.length === 0; });

  // — Сводный badge —
  const recvPct   = Math.round(totalRecv    / totalDocs    * 100);
  const scanPct   = Math.round(totalScanned / totalDocs    * 100);
  const badgeColor = totalScanned === totalReq ? '#22c55e' : reqMissingScan.length > 0 ? '#f59e0b' : '#6ee7b7';
  const badgeHtml = `
    <div style="display:flex;gap:16px;align-items:center;background:var(--surface2);border:1px solid var(--border);
                border-radius:var(--radius);padding:12px 16px;margin-bottom:14px;flex-wrap:wrap">
      <div style="flex:1;min-width:160px">
        <div style="font-size:11px;color:var(--text3);margin-bottom:4px">Получено документов</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="font-weight:800;font-size:18px;color:var(--co-accent)">${totalRecv}<span style="font-size:12px;font-weight:400;color:var(--text3)">/${totalDocs}</span></div>
          <div style="flex:1;height:5px;border-radius:3px;background:var(--surface3)">
            <div style="height:100%;border-radius:3px;background:var(--co-accent);width:${recvPct}%"></div>
          </div>
        </div>
      </div>
      <div style="flex:1;min-width:160px">
        <div style="font-size:11px;color:var(--text3);margin-bottom:4px">Сканов загружено</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="font-weight:800;font-size:18px;color:${badgeColor}">${totalScanned}<span style="font-size:12px;font-weight:400;color:var(--text3)">/${totalDocs}</span></div>
          <div style="flex:1;height:5px;border-radius:3px;background:var(--surface3)">
            <div style="height:100%;border-radius:3px;background:${badgeColor};width:${scanPct}%"></div>
          </div>
        </div>
      </div>
      ${reqMissingScan.length > 0
        ? `<div style="font-size:11px;color:#f59e0b;background:rgba(245,158,11,0.1);border-radius:6px;padding:6px 10px;line-height:1.5">
             ⚠️ Нет скана (обязательные):<br>${reqMissingScan.map(d=>`<b>${d.icon} ${d.name.split(' / ')[0]}</b>`).join(', ')}
           </div>`
        : `<div style="font-size:11px;color:#22c55e;font-weight:600">✅ Все обязательные сканы загружены</div>`}
      <div style="font-size:10px;color:var(--text3);font-style:italic">
        ${s.mode ? `${{sea:'🚢 Море',air:'✈️ Авиа',rail:'🚂 ЖД',road:'🚛 Авто',multi:'🔄 Мульти'}[s.mode]||s.mode}` : ''}
        ${s.incoterms ? ' · '+s.incoterms : ''}${s.from_country ? ' · '+s.from_country : ''}
      </div>
    </div>`;

  // — Рендер групп —
  const groupsHtml = docGroups.map(group => {
    const rowsHtml = group.docs.map(def => {
      let doc = docMap[def.id];
      if (!doc) {
        doc = { id: def.id, name: def.name, icon: def.icon, status: 'none', received: false, files: [] };
        s.docs.push(doc); docMap[def.id] = doc;
      }
      const st = DOC_STATUS_CYCLE[doc.status] || DOC_STATUS_CYCLE.none;
      const hasScans = doc.files && doc.files.length > 0;

      // Чип «скан загружен / нет скана»
      const scanBadge = hasScans
        ? `<span style="font-size:10px;background:rgba(34,197,94,0.12);color:#16a34a;border:1px solid rgba(34,197,94,0.3);
                        border-radius:10px;padding:1px 7px;font-family:'Fira Code',monospace">🗂 ${doc.files.length} скан</span>`
        : (def.required
            ? `<span style="font-size:10px;background:rgba(245,158,11,0.1);color:#d97706;border:1px solid rgba(245,158,11,0.3);
                            border-radius:10px;padding:1px 7px">⚠ нет скана</span>`
            : `<span style="font-size:10px;color:var(--text3);padding:1px 7px">без скана</span>`);

      const filesHtml = (doc.files || []).map((f, fi) =>
        `<div class="yd-file-chip" title="${f.name}">` +
        `<span>${f.name}</span>` +
        `<a href="javascript:void(0)" onclick="event.stopPropagation();ydOpenFile('${f.path.replace(/'/g,"\\'")}')">👁</a>` +
        `<button onclick="event.stopPropagation();ydRemoveFile('${s.id}','${def.id}',${fi})">✕</button>` +
        `</div>`
      ).join('');

      const uploadBtn = ydToken()
        ? `<div class="yd-upload-wrap" style="display:inline-block" onclick="event.stopPropagation()">` +
          `<label class="yd-upload-btn" title="Загрузить скан на Яндекс Диск">` +
          `📎 Скан<input type="file" accept=".pdf,.jpg,.jpeg,.png,.tiff" style="display:none" onchange="ydHandleUpload(this,'${s.id}','${def.id}')"></label>` +
          `</div>`
        : `<button class="yd-upload-btn" onclick="event.stopPropagation();navTo('admin');setTimeout(()=>{const el=document.getElementById('yd-status-bar');if(el)el.scrollIntoView({behavior:'smooth'})},400)">☁️ Диск</button>`;

      return `<div class="doc-pkg-row">
        <div style="display:flex;align-items:center;gap:6px;flex:1;cursor:pointer;min-width:0" onclick="toggleDoc('${s.id}','${def.id}')">
          <div class="doc-pkg-icon">${def.icon}</div>
          <div class="doc-pkg-name${def.required ? ' required-doc' : ''}" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${def.name}</div>
          <div class="doc-status-btn ${st.cls}" style="flex-shrink:0">${st.icon} ${st.label}</div>
          ${scanBadge}
        </div>
        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-left:6px">${filesHtml}${uploadBtn}</div>
      </div>`;
    }).join('');

    const grpRecv = group.docs.filter(d => { const doc = docMap[d.id]; return doc && doc.status !== 'none'; }).length;
    const grpScan = group.docs.filter(d => { const doc = docMap[d.id]; return doc && doc.files && doc.files.length > 0; }).length;

    return `<div class="doc-pkg-group">
      <div class="doc-group-header">
        <span>${group.label}</span>
        <span class="doc-group-progress">📄 ${grpRecv}/${group.docs.length} · 🗂 ${grpScan} сканов</span>
      </div>${rowsHtml}</div>`;
  }).join('');

  const totalFiles = (s.docs || []).reduce((a, d) => a + (d.files ? d.files.length : 0), 0);
  const pkgBtn = `<button id="yd-pkg-btn-${s.id}" class="yd-pkg-btn" onclick="downloadCustomsPackage('${s.id}')" style="margin-top:12px">` +
    `📦 Открыть пакет на Диске${totalFiles ? ' (' + totalFiles + ' файлов)' : ''}</button>`;

  return `<div class="block-title" style="margin-bottom:10px">Пакет документов</div>` +
    `<div style="font-size:10px;color:var(--text3);margin-bottom:10px;font-family:'JetBrains Mono',monospace">` +
    `Набор документов подобран по: транспорт · страна · инкотермс · Нажмите статус для переключения</div>` +
    badgeHtml + groupsHtml + pkgBtn;
}

function buildDetailHTML(s) {
  // s is already normalized (currentStage, po, events, docs set)
  const id = s.id;
  const stage = typeof s.currentStage === 'number' ? s.currentStage : -1;
  const canAdvance = stage >= 0 && stage < PIPE_STAGES.length - 1;
  const nextStageLabel = canAdvance ? PIPE_STAGES[stage + 1].label.replace('\n',' ') : '';
  const eventsHtml = !s.events || s.events.length === 0
    ? '<div style="color:var(--text3);font-size:12px;padding:8px 0">Нет событий</div>'
    : s.events.map(e => `<div class="event-row">
        <div class="event-date">${e.date||''}</div>
        <div class="event-icon">${e.icon||'●'}</div>
        <div class="event-text"><b>${e.text||''}</b>${e.note?'<div class="event-note">'+e.note+'</div>':''}${e.amount&&e.budgetLine?'<div class="event-note" style="color:var(--co-accent);font-size:11px">📊 '+bgFmt(e.amount)+' ₽ → себест.</div>':''}</div>
      </div>`).join('');
  return `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
      <div>
        <div class="block-title" style="margin-bottom:10px">Добавить событие</div>
        <div class="update-form" style="margin:0">
          <div class="field" style="margin-bottom:8px">
            <label>Событие</label>
            <input id="new-event-text-${id}" placeholder="Груз прошёл экспортную таможню..." style="width:100%">
          </div>
          <div class="field" style="margin-bottom:8px">
            <label>Примечание</label>
            <input id="new-event-note-${id}" placeholder="Номер документа, комментарий..." style="width:100%">
          </div>
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <div class="field" style="margin:0;flex:1">
              <label style="display:flex;align-items:center;gap:4px">
                <span style="color:var(--co-accent)">📊</span> Сумма ₽ → себест.
              </label>
              <input type="number" id="new-event-amount-${id}" placeholder="0" style="width:100%">
            </div>
            <div class="field" style="margin:0;flex:1.4">
              <label>Статья себестоимости</label>
              <select id="new-event-budget-${id}" style="width:100%;padding:7px 10px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px">
                <option value="">— не привязывать</option>
                <optgroup label="📦 Товар">
                  <option value="goods_invoice">Стоимость товара</option>
                  <option value="goods_addon">Доп. позиции</option>
                </optgroup>
                <optgroup label="🚢 Логистика">
                  <option value="log_freight">Фрахт</option>
                  <option value="log_origin">Сборы в порту отправления</option>
                  <option value="log_dest">Сборы в порту назначения</option>
                  <option value="log_inland">Внутренняя доставка</option>
                  <option value="log_insurance">Страхование груза</option>
                  <option value="log_other">Прочие логист. расходы</option>
                </optgroup>
                <optgroup label="🏛️ Таможня">
                  <option value="cus_duty">Таможенная пошлина</option>
                  <option value="cus_vat">НДС при ввозе</option>
                  <option value="cus_fee">Таможенный сбор</option>
                  <option value="cus_broker">Услуги брокера</option>
                  <option value="cus_cert">Сертификация</option>
                  <option value="cus_other">Прочие таможенные</option>
                </optgroup>
                <optgroup label="💳 Прочее">
                  <option value="oth_bank">Банковская комиссия</option>
                  <option value="oth_storage">Хранение</option>
                  <option value="oth_inspect">Инспекция / сюрвей</option>
                  <option value="oth_misc">Прочие расходы</option>
                </optgroup>
              </select>
            </div>
          </div>
          <button class="gen-btn" onclick="addEvent('${id}')" style="margin-top:4px;padding:8px 16px">+ Добавить</button>
          ${canAdvance ? `<button class="gen-btn secondary" onclick="advanceStage('${id}')" style="margin-top:4px;padding:8px 14px">→ ${nextStageLabel}</button>` : `<div style="color:#2e7d32;font-size:11px;margin-top:8px;font-family:'IBM Plex Mono',monospace">✓ Поставка завершена</div>`}
        </div>
      </div>
      <div>${renderDocPackage(s)}</div>
    </div>
    <div class="block-title" style="margin-bottom:8px">История событий</div>
    <div class="event-log" style="padding:0;max-height:240px;overflow-y:auto">${eventsHtml}</div>
  `;
}

function showDetail(id) {
  // id may be number (from onclick attr) or string (from DB) — use loose equality
  const s = shipments.find(x => x.id == id);
  if (!s) { console.warn('[showDetail] shipment not found for id', id, shipments.map(x=>x.id)); return; }

  // Normalize field names: DB uses snake_case, old format uses camelCase
  if (s.current_stage !== undefined && s.currentStage === undefined) s.currentStage = s.current_stage;
  if (s.shipment_number && !s.po) s.po = s.shipment_number;
  if (!s.events) s.events = [];
  if (!s.docs) s.docs = [];

  const detailEl = document.getElementById('shipment-detail');
  const contentEl = document.getElementById('detail-content');
  if (!detailEl || !contentEl) { console.warn('[showDetail] detail elements not found'); return; }

  const poLabel = s.po || '—';
  const cargoLabel = s.cargo || (s.items && s.items[0] ? s.items[0].name : '') || s.contract_id || '';
  document.getElementById('detail-title').textContent = poLabel + (cargoLabel ? ' · ' + cargoLabel : '');

  const stage = typeof s.currentStage === 'number' ? s.currentStage : -1;
  const canAdvance = stage >= 0 && stage < PIPE_STAGES.length - 1;
  const nextStageLabel = canAdvance ? PIPE_STAGES[stage + 1].label.replace('\n',' ') : '';

  try {
    contentEl.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
        <div>
          <div class="block-title" style="margin-bottom:12px">Добавить событие</div>
          <div class="update-form" style="margin:0">
            <div class="field" style="margin-bottom:10px">
              <label>Событие</label>
              <input id="new-event-text-${id}" placeholder="Например: Груз прошёл экспортную таможню" style="width:100%">
            </div>
            <div class="field" style="margin-bottom:10px">
              <label>Примечание</label>
              <input id="new-event-note-${id}" placeholder="Номер документа, комментарий..." style="width:100%">
            </div>
            <button class="gen-btn" onclick="addEvent('${id}')" style="margin-top:4px;padding:10px 20px">+ Добавить</button>
            ${canAdvance ? `
            <button class="gen-btn secondary" onclick="advanceStage('${id}')" style="margin-top:4px;padding:10px 16px">
              → Следующий этап: ${nextStageLabel}
            </button>` : `<div style="color:#2e7d32;font-family:'IBM Plex Mono',monospace;font-size:11px;margin-top:8px">✓ Поставка завершена</div>`}
          </div>
        </div>
        <div>${renderDocPackage(s)}</div>
      </div>

      <div class="block-title" style="margin-bottom:12px">История событий</div>
      <div class="event-log" style="padding:0;max-height:320px;overflow-y:auto">
        ${s.events.length === 0 ? '<div style="color:var(--text3);font-size:12px;padding:12px 0">Нет событий</div>' :
          s.events.map(e => `
            <div class="event-row">
              <div class="event-date">${e.date || ''}</div>
              <div class="event-icon">${e.icon || '●'}</div>
              <div class="event-text">
                <b>${e.text || ''}</b>
                ${e.note ? `<div class="event-note">${e.note}</div>` : ''}
              </div>
            </div>
          `).join('')
        }
      </div>
    `;
  } catch(err) {
    console.error('[showDetail] template error:', err);
    contentEl.innerHTML = '<div style="color:red;padding:12px">Ошибка отображения: ' + err.message + '</div>';
  }

  detailEl.style.display = 'block';
  try { setTimeout(() => detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80); } catch(e) {}
}

function closeDetail() {
  document.getElementById('shipment-detail').style.display = 'none';
  shipments.forEach(s => s.expanded = false);
  renderShipments();
}

function getShipmentStatus(s) {
  const stage = typeof s.currentStage === 'number' ? s.currentStage : -1;
  if (stage >= PIPE_STAGES.length - 1) return { label: 'Завершена', cls: 'completed' };
  // check overdue — support both dates.arrival (old) and dates.eta (new DB)
  const today = new Date(); today.setHours(0,0,0,0);
  const etaStr = (s.dates && (s.dates.arrival || s.dates.eta)) || '';
  const eta = etaStr ? new Date(etaStr) : null;
  if (eta && eta < today && stage < 6) return { label: 'Просрочена', cls: 'overdue' };
  if (stage === 0) return { label: 'Ожидание', cls: 'pending' };
  if (stage < 0) return { label: 'В процессе', cls: 'in-progress' };
  return { label: 'В процессе', cls: 'in-progress' };
}

function renderShipments() {
  const list = document.getElementById('shipments-list');
  const empty = document.getElementById('tracker-empty');
  const summary = document.getElementById('tracker-summary');

  // Apply company filter
  const filtered = (typeof trackerCompanyFilter !== 'undefined' && trackerCompanyFilter !== 'all')
    ? shipments.filter(s => (s.company || 'ENDV') === trackerCompanyFilter)
    : shipments;

  if (filtered.length === 0) {
    list.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (summary) summary.textContent = shipments.length > 0 ? `Показано: 0 из ${shipments.length}` : '';
    return;
  }
  if (empty) empty.style.display = 'none';

  const active = filtered.filter(s => s.currentStage < PIPE_STAGES.length - 1).length;
  if (summary) summary.textContent = `${filtered.length} поставок · ${active} активных${shipments.length !== filtered.length ? ' (фильтр)' : ''}`;

  list.innerHTML = filtered.map(s => {
    // Normalize DB snake_case → camelCase
    if (s.current_stage !== undefined && s.currentStage === undefined) s.currentStage = s.current_stage;
    if (s.shipment_number && !s.po) s.po = s.shipment_number;
    if (!s.docs) s.docs = [];
    if (!s.events) s.events = [];

    const status = getShipmentStatus(s);
    const pct = typeof s.currentStage === 'number' ? Math.round((s.currentStage / (PIPE_STAGES.length - 1)) * 100) : 0;
    const docsOk = s.docs.filter(d => d.received).length;

    // Company badge
    const co = (typeof COMPANIES !== 'undefined') ? (COMPANIES[s.company || 'ENDV'] || COMPANIES.ENDV) : null;
    const coBadge = co ? `<span style="display:inline-flex;align-items:center;padding:2px 8px;border-radius:10px;font-size:10px;font-family:'Fira Code',monospace;font-weight:700;background:${co.colorLight};color:${co.color};border:1px solid ${co.colorBorder};flex-shrink:0">${co.code}</span>` : '';

    const pipeHTML = PIPE_STAGES.map((st, i) => {
      let cls = '';
      if (i < s.currentStage) cls = 'done';
      else if (i === s.currentStage) cls = 'current';
      const dateKey = ['contract','payment','production','pickup','export','transit','arrival','customs','delivery'][i];
      const d = s.dates[dateKey] || '';
      return `<div class="pipe-step ${cls}">
        <div class="pipe-dot">${cls === 'done' ? '✓' : (cls === 'current' ? '<div class="inner-dot"></div>' : '')}</div>
        <div class="pipe-label">${st.label.replace('\n','<br>')}</div>
        ${d ? `<div class="pipe-date">${d.slice(5).replace('-','/')}</div>` : ''}
      </div>`;
    }).join('');

    return `<div class="shipment-card">
      <div class="shipment-card-header" onclick="toggleExpand('${s.id}')">
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <div class="shipment-po" onclick="event.stopPropagation();openContractByNum('${s.po}')" title="Открыть договор ${s.po}" style="cursor:pointer;text-decoration:underline dotted;text-underline-offset:3px">${s.po}</div>
          ${s.deliveryNum ? `<span style="font-family:'JetBrains Mono',monospace;font-size:10px;background:var(--co-accent-light);color:var(--co-accent);padding:2px 8px;border-radius:10px;font-weight:700">${s.deliveryNum}</span>` : ''}
          ${coBadge}
        </div>
        <div class="shipment-route"><b>${s.from}</b> → <b>${s.to}</b> · ${{sea:'🚢',air:'✈️',rail:'🚂',road:'🚛',multi:'🔄'}[s.mode]||s.mode}${
          s.logistics?.vessel   ? ` · <span title="Судно">${s.logistics.vessel}</span>` :
          s.logistics?.awb      ? ` · AWB ${s.logistics.awb}` :
          s.logistics?.waybill  ? ` · СМГС ${s.logistics.waybill}` :
          s.logistics?.cmr      ? ` · CMR ${s.logistics.cmr}` : ''
        }${s.logistics?.containers ? ` · <span title="Контейнеры" style="font-family:'Fira Code',monospace;font-size:10px">${s.logistics.containers.split(',')[0].trim()}${s.logistics.containers.split(',').length>1?' +':''}${s.logistics.containers.split(',').length>1?s.logistics.containers.split(',').length-1:''}</span>` : ''}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--text3)">📎 ${docsOk}/${s.docs.length}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--text3)">${pct}%</div>
        <div class="status-badge ${status.cls}">${status.label}</div>
        <div style="display:flex;align-items:center;gap:4px;margin-left:4px;flex-shrink:0">
          <button onclick="event.stopPropagation();editShipment('${s.id}')" title="Редактировать поставку" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:4px 6px;border-radius:4px;transition:all 0.15s;line-height:1" onmouseover="this.style.background='var(--surface2)';this.style.color='var(--co-accent)'" onmouseout="this.style.background='none';this.style.color='var(--text3)'">✏</button>
          <button onclick="event.stopPropagation();deleteShipment('${s.id}')" title="Удалить поставку" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:4px 6px;border-radius:4px;transition:all 0.15s;line-height:1" onmouseover="this.style.background='rgba(192,57,43,0.1)';this.style.color='var(--rust)'" onmouseout="this.style.background='none';this.style.color='var(--text3)'">🗑</button>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--text3);padding:4px">${s.expanded ? '▲' : '▼'}</span>
        </div>
      </div>
      <div class="pipeline">${pipeHTML}</div>
      ${s.expanded ? `<div style="padding:20px 20px 16px;border-top:1px solid var(--border)">${buildDetailHTML(s)}</div>` : ''}
    </div>`;
  }).join('');
}

// Close modal on overlay click
document.addEventListener('click', e => {
  const overlay = document.getElementById('modal-overlay');
  if (e.target === overlay) closeModal();
});



// ══════════════════════════════════════════
// CUSTOMS CHECKLIST
// ══════════════════════════════════════════

const CL_GROUPS = [
  {
    id: 'commercial',
    title: 'Коммерческие документы',
    items: [
      { id: 'c1', name: 'Контракт (договор поставки)', desc: 'Оригинал или заверенная копия. Должен содержать: стороны, предмет, условия поставки, цену, реквизиты.', tags: ['required'], countries: ['ALL'] },
      { id: 'c2', name: 'Спецификация к контракту', desc: 'Приложение с перечнем товаров, количеством, ценой за единицу, общей стоимостью.', tags: ['required'], countries: ['ALL'] },
      { id: 'c3', name: 'Коммерческий инвойс (Invoice)', desc: 'Содержит: продавец/покупатель, описание товара, кол-во, цена, условия Incoterms, валюта. Должен соответствовать сведениям в декларации.', tags: ['required'], countries: ['ALL'] },
      { id: 'c4', name: 'Упаковочный лист (Packing List)', desc: 'Перечень мест, вес брутто/нетто каждого, маркировка. Обязателен при количестве мест более 1.', tags: ['required'], countries: ['ALL'] },
      { id: 'c5', name: 'Проформа-инвойс', desc: 'Предварительный инвойс. Нужен для авансового платежа и предварительного таможенного оформления.', tags: ['conditional'], countries: ['ALL'] },
    ]
  },
  {
    id: 'transport',
    title: 'Транспортные документы',
    items: [
      { id: 't1', name: 'CMR (автомобильная накладная)', desc: 'Международная транспортная накладная для автоперевозки. Заполняется перевозчиком.', tags: ['required'], countries: ['ALL'], modes: ['road','multimodal'] },
      { id: 't2', name: 'Коносамент (Bill of Lading / B/L)', desc: 'Для морских перевозок. Является товарораспорядительным документом. Требуется оригинал или 3 оригинала.', tags: ['conditional'], countries: ['ALL'], modes: ['sea','multimodal'] },
      { id: 't3', name: 'Авиационная накладная (Air Waybill / AWB)', desc: 'Для авиаперевозок. Не является товарораспорядительным документом.', tags: ['conditional'], countries: ['ALL'], modes: ['air'] },
      { id: 't4', name: 'Железнодорожная накладная (CIM/SMGS)', desc: 'Для ж/д перевозок. SMGS — для стран СНГ и Азии, CIM — для Европы.', tags: ['conditional'], countries: ['ALL'], modes: ['rail','multimodal'] },
      { id: 't5', name: 'Экспедиторская расписка (FCR)', desc: 'Выдаётся экспедитором при приёмке груза. Подтверждает принятие товара к перевозке.', tags: ['optional'], countries: ['ALL'] },
    ]
  },
  {
    id: 'origin',
    title: 'Документы о происхождении',
    items: [
      { id: 'o1', name: 'Сертификат происхождения формы «А» (GSP)', desc: 'Даёт право на тарифные преференции. Для Индии — выдаётся Export Inspection Council или торговой палатой. Применяется режим ОСП РФ.', tags: ['required'], countries: ['IN'] },
      { id: 'o2', name: 'Сертификат происхождения формы СТ-1', desc: 'Для стран СНГ. Даёт право на льготные ставки пошлин в рамках договора о зоне свободной торговли СНГ.', tags: ['conditional'], countries: ['OTHER'] },
      { id: 'o3', name: 'Декларация о происхождении на инвойсе', desc: 'Для товаров стоимостью до 6000 EUR. Заявление поставщика на инвойсе по установленной форме.', tags: ['optional'], countries: ['ALL'] },
      { id: 'o4', name: 'Сертификат происхождения общей формы', desc: 'Выдаётся торгово-промышленной палатой страны экспорта. Используется если специальная форма не требуется.', tags: ['conditional'], countries: ['CN','TR','DE','OTHER'] },
    ]
  },
  {
    id: 'technical',
    title: 'Технические и разрешительные документы',
    items: [
      { id: 'tech1', name: 'Декларация о соответствии ТР ТС 004/2011', desc: 'Технический регламент «О безопасности низковольтного оборудования». Обязателен для кабельной продукции (ТН ВЭД 8544). Выдаётся на 1–5 лет.', tags: ['required'], tnved: ['8544'] },
      { id: 'tech2', name: 'Декларация о соответствии ТР ТС 037/2016', desc: 'Ограничение опасных веществ (RoHS). Для электрооборудования. Обязателен при наличии маркировки.', tags: ['required'], tnved: ['8544'] },
      { id: 'tech3', name: 'Сертификат соответствия ГОСТ (при наличии)', desc: 'Добровольная сертификация. Повышает доверие покупателя, может требоваться контрактом.', tags: ['optional'], tnved: ['8544'] },
      { id: 'tech4', name: 'Технические характеристики / Datasheet', desc: 'Описание продукции: напряжение, сечение, материалы, стандарты. Нужно для классификации ТН ВЭД и для органа сертификации.', tags: ['required'], countries: ['ALL'] },
      { id: 'tech5', name: 'Каталог или описание производителя', desc: 'Официальный каталог или описание с сайта производителя. Дополнительное подтверждение характеристик товара.', tags: ['optional'], countries: ['ALL'] },
    ]
  },
  {
    id: 'customs_docs',
    title: 'Таможенные документы (РФ)',
    items: [
      { id: 'cust1', name: 'Таможенная декларация на товары (ДТ)', desc: 'Основной документ таможенного оформления. Подаётся декларантом или таможенным брокером в электронном виде через СВХ или таможенный пост.', tags: ['required'], countries: ['ALL'] },
      { id: 'cust2', name: 'Паспорт сделки / Уведомление об операции', desc: 'Для контрактов свыше 3 млн руб. — уведомление банка. Для контрактов свыше 6 млн руб. — постановка на учёт в банке.', tags: ['conditional'], countries: ['ALL'] },
      { id: 'cust3', name: 'Платёжное поручение об уплате таможенных платежей', desc: 'Подтверждение оплаты ввозной таможенной пошлины, НДС 22%, таможенного сбора.', tags: ['required'], countries: ['ALL'] },
      { id: 'cust4', name: 'Свидетельство о регистрации юридического лица', desc: 'ОГРН, ИНН декларанта. Необходимо при первом оформлении или при смене декларанта.', tags: ['required'], countries: ['ALL'] },
      { id: 'cust5', name: 'Договор с таможенным брокером / представителем', desc: 'Если таможенное оформление ведёт брокер — необходим договор и доверенность.', tags: ['conditional'], countries: ['ALL'] },
      { id: 'cust6', name: 'Уведомление о прибытии (для СВХ)', desc: 'Подаётся при прибытии товара на таможенную территорию ЕАЭС. Электронная форма.', tags: ['required'], countries: ['ALL'] },
    ]
  },
  {
    id: 'payments',
    title: 'Финансовые документы',
    items: [
      { id: 'pay1', name: 'Банковские реквизиты поставщика', desc: 'Для проведения международного платежа (SWIFT). Должны совпадать с реквизитами в контракте.', tags: ['required'], countries: ['ALL'] },
      { id: 'pay2', name: 'SWIFT-подтверждение платежа', desc: 'MT103 или выписка банка с отметкой об исполнении платежа. Нужно для подтверждения условий оплаты.', tags: ['required'], countries: ['ALL'] },
      { id: 'pay3', name: 'Счёт на оплату услуг экспедитора', desc: 'Инвойс от экспедитора за организацию перевозки. Включается в таможенную стоимость (если до границы РФ).', tags: ['conditional'], countries: ['ALL'] },
      { id: 'pay4', name: 'Страховой полис / сертификат', desc: 'Если груз застрахован — страховой полис с указанием суммы страхования. Включается в таможенную стоимость при условиях CIF.', tags: ['conditional'], countries: ['ALL'] },
    ]
  },
];

let clState = {};

function initClState() {
  clState = {};
  CL_GROUPS.forEach(g => g.items.forEach(item => {
    if (!(item.id in clState)) clState[item.id] = false;
  }));
}

function filterByTnved() {
  renderChecklist();
}

function resetChecklist() {
  initClState();
  document.getElementById('cl-tnved').value = '';
  document.getElementById('cl-notes').value = '';
  renderChecklist();
}

function toggleClItem(id, event) {
  if (event) event.stopPropagation();
  clState[id] = !clState[id];
  renderChecklist();
}

function toggleClExpand(id, event) {
  event.stopPropagation();
  const el = document.getElementById('cl-item-' + id);
  if (el) el.classList.toggle('expanded');
}

function renderChecklist() {
  const tnved = document.getElementById('cl-tnved').value.trim();
  const country = document.getElementById('cl-country').value;

  let totalItems = 0, checkedItems = 0;

  const groupsHTML = CL_GROUPS.map(group => {
    const visibleItems = group.items.filter(item => {
      if (tnved && item.tnved && !item.tnved.some(t => tnved.startsWith(t))) return false;
      if (item.countries && !item.countries.includes('ALL') && !item.countries.includes(country)) return false;
      return true;
    });

    if (visibleItems.length === 0) return '';

    const groupChecked = visibleItems.filter(i => clState[i.id]).length;
    totalItems += visibleItems.length;
    checkedItems += groupChecked;

    const itemsHTML = visibleItems.map(item => {
      const checked = clState[item.id];
      const tagsHTML = item.tags.map(t => {
        const labels = { required: 'Обязательный', optional: 'Необязательный', conditional: 'По условию' };
        return `<span class="cl-tag ${t}">${labels[t] || t}</span>`;
      }).join('');

      const attachedFiles = clScans[item.id] || [];
      const attachCount = attachedFiles.length;

      return `<div class="cl-item ${checked ? 'checked' : ''}" id="cl-item-${item.id}">
        <div class="cl-checkbox" onclick="toggleClItem('${item.id}', event)">${checked ? '✓' : ''}</div>
        <div class="cl-item-body">
          <div style="display:flex;align-items:center;gap:8px" onclick="toggleClItem('${item.id}', event)">
            <div class="cl-item-name" style="flex:1">${item.name}</div>
            <span class="cl-attach-count ${attachCount > 0 ? 'visible' : ''}" id="cl-count-${item.id}">📎 ${attachCount}</span>
          </div>
          <div class="cl-item-desc" onclick="toggleClItem('${item.id}', event)">${item.desc}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
            <div class="cl-item-tags">${tagsHTML}</div>
            <label class="cl-scan-upload-btn" onclick="event.stopPropagation()">
              📎 Прикрепить скан
              <input type="file" accept=".pdf,.jpg,.jpeg,.png,.tif,.tiff" multiple style="display:none"
                onchange="attachScan('${item.id}', this.files, event)">
            </label>
            ${attachCount > 0 ? `<span style="font-family:'Fira Code',monospace;font-size:10px;color:var(--text3);cursor:pointer" onclick="toggleClExpand('${item.id}', event)">▾ показать файлы</span>` : ''}
          </div>
          <div class="cl-scan-area" id="scan-area-${item.id}">
            <div style="font-family:'Fira Code',monospace;font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Прикреплённые сканы</div>
            <div class="cl-scan-files" id="scan-files-${item.id}">
              ${attachedFiles.map((f,fi) => `
                <span class="cl-scan-file-tag has-file" onclick="previewScan('${item.id}',${fi},event)">
                  📄 ${f.name}
                  <span style="color:var(--rust);font-size:11px;font-weight:700;margin-left:4px" onclick="removeScan('${item.id}',${fi},event)">×</span>
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>`;
    }).join('');

    return `<div class="cl-group">
      <div class="cl-group-title">
        ${group.title}
        <span class="cl-group-count">${groupChecked}/${visibleItems.length}</span>
      </div>
      ${itemsHTML}
    </div>`;
  }).join('');

  document.getElementById('cl-groups').innerHTML = groupsHTML || '<div style="color:var(--text3);font-size:13px;padding:20px 0">Нет документов по выбранным фильтрам</div>';

  const pct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
  document.getElementById('cl-pct-label').textContent = `${checkedItems} / ${totalItems}`;
  document.getElementById('cl-progress-bar').style.width = pct + '%';
  document.getElementById('cl-progress-bar').style.background = pct === 100 ? '#2e7d32' : pct > 60 ? '#f57f17' : 'var(--accent)';

  // Info box
  const tnvedNum = tnved || '8544';
  const countryNames = { IN: 'Индии', CN: 'Китая', TR: 'Турции', DE: 'Германии', OTHER: 'другой страны' };
  document.getElementById('cl-info-text').innerHTML = `
    <b>ТН ВЭД ${tnvedNum}xx</b> — Провода, кабели и другие изолированные электрические проводники.<br>
    <b>Ввозная таможенная пошлина:</b> 0% (в рамках режима наибольшего благоприятствования) или льготная ставка по ОСП для Индии.<br>
    <b>НДС при ввозе:</b> 22% от таможенной стоимости + пошлина.<br>
    <b>Таможенный сбор:</b> от 775 до 30 000 руб. в зависимости от стоимости.<br>
    <b>Обязательная сертификация:</b> ТР ТС 004/2011 (низковольтное оборудование), ТР ТС 037/2016 (RoHS).<br>
    <b>Страна происхождения ${countryNames[country] || 'указанной страны'}:</b> ${country === 'IN' ? 'Применяется Общая система преференций (ОСП) — ставка 0% при наличии сертификата ф. «А».' : country === 'CN' ? 'Ставка РНБ. Возможны антидемпинговые пошлины по отдельным позициям — проверить.' : 'Стандартная ставка РНБ. Уточнить наличие соглашений об избежании двойного налогообложения.'}<br>
    <b>Процедура:</b> ИМ 40 (выпуск для внутреннего потребления). Электронное декларирование через таможенный пост.<br>
    <b>Срок выпуска:</b> 1 рабочий день при полном пакете документов (стандартный контроль).
  `;
}


document.addEventListener('DOMContentLoaded', async () => {
  initDataLayer();   // Stage 1: init new DB tables + shipments persistence
  siMigrate();       // Migrate s.items[] → DB_shipment_items (idempotent)
  checkEnvAndShowWarning();
  renderSpecTable();
  renderInvTable();
  renderFreighters();
  renderShipments();
  initClState();
  await loadAllScans();
  renderChecklist();
  loadDeadlines();
  syncRepatToDeadlines();
  spLoad();
  const sCur = document.getElementById('s-currency');
  if (sCur) sCur.addEventListener('change', renderSpecTable);
  // Auth runs last — loginSuccess handles loadActiveCompany + setActiveCompany
  initAuth();
  // Yandex Disk: load saved settings and check status
  ydInit();
});

// ════════════════════════════════════════════
// ── AUTH SYSTEM ──
// ════════════════════════════════════════════

const DEPT_LABELS = {
  ved: { label: 'ВЭД / Таможня', cls: 'dept-ved' },
  log: { label: 'Логистика',     cls: 'dept-log' },
  buh: { label: 'Бухгалтерия',   cls: 'dept-buh' },
  mgmt:{ label: 'Руководство',   cls: 'dept-mgmt'},
  admin:{ label: 'Администратор', cls: 'dept-admin'}
};

// Default users — stored/extended in localStorage
const DEFAULT_USERS = [
  { name: 'Администратор',    login: 'admin',    pass: 'ved2026',   dept: 'admin', access: ['all'], active: true },
  { name: 'Кириллюк С.Г.',   login: 'kiriluk',  pass: 'endv2026',  dept: 'ved',   access: ['all'], active: true },
  { name: 'Логист',           login: 'logist',   pass: 'log2026',   dept: 'log',   access: ['rfq','tracker','customs'], active: true },
];

let currentUser = null;

function getUsers() {
  try {
    const stored = localStorage.getItem('ved_users');
    return stored ? JSON.parse(stored) : DEFAULT_USERS;
  } catch(e) { return DEFAULT_USERS; }
}

function saveUsers(users) {
  try { localStorage.setItem('ved_users', JSON.stringify(users)); } catch(e) {}
}

function initAuth() {
  // Ensure default users are seeded
  let users = getUsers();
  if (users.length === 0) { saveUsers(DEFAULT_USERS); users = DEFAULT_USERS; }

  // Check session
  try {
    const sess = localStorage.getItem('ved_session');
    if (sess) {
      const u = JSON.parse(sess);
      const found = users.find(x => x.login === u.login && x.active !== false);
      if (found) { loginSuccess(found); return; }
    }
  } catch(e) {}

  document.getElementById('auth-screen').style.display = 'flex';
  setTimeout(() => { const el = document.getElementById('auth-login'); if(el) el.focus(); }, 50);
}

function doLogin() {
  const login = document.getElementById('auth-login').value.trim();
  const pass  = document.getElementById('auth-pass').value;
  const err   = document.getElementById('auth-err');

  if (!login || !pass) { err.textContent = 'Введите логин и пароль'; return; }

  const users = getUsers();
  const user = users.find(u => u.login === login && u.pass === pass);

  if (!user) { err.textContent = 'Неверный логин или пароль'; return; }
  if (user.active === false) { err.textContent = 'Доступ заблокирован. Обратитесь к администратору.'; return; }

  try { localStorage.setItem('ved_session', JSON.stringify({ login: user.login })); } catch(e) {}
  loginSuccess(user);
}

function loginSuccess(user) {
  currentUser = user;
  document.getElementById('auth-screen').style.display = 'none';

  const deptInfo = DEPT_LABELS[user.dept] || { label: user.dept, cls: '' };
  document.getElementById('user-badge').innerHTML =
    `${user.name} <span class="auth-dept-badge ${deptInfo.cls}">${deptInfo.label}</span>`;

  // Show admin nav if admin
  if (user.dept === 'admin' || (user.access && user.access.includes('all'))) {
    if (user.dept === 'admin') {
      document.getElementById('nav-admin-sep').style.display = '';
      document.getElementById('nav-admin-label').style.display = '';
      document.getElementById('nav-admin-item').style.display = '';
    }
  }

  // Restrict nav items based on access
  if (!user.access.includes('all')) {
    const moduleMap = {
      'contract': 'Договор', 'spec': 'Спецификация', 'invoice': 'Инвойс',
      'rfq': 'Экспедитор', 'tracker': 'Трекер', 'customs': 'Таможни'
    };
    document.querySelectorAll('.nav-item').forEach(el => {
      const txt = el.textContent.toLowerCase();
      const blocked = Object.entries(moduleMap).some(([key, label]) =>
        txt.includes(label.toLowerCase()) && !user.access.includes(key)
      );
      if (blocked) { el.style.opacity = '0.35'; el.style.pointerEvents = 'none'; el.title = 'Нет доступа'; }
    });
  }

  if (user.dept === 'admin') renderAdminTable();

  // Apply active company context (loads from localStorage, updates all UI)
  loadActiveCompany();
  setActiveCompany(activeCompany);

  // Show API key status indicator in header
  _apiKeyUpdateHeaderIndicator();

  // Load dashboard data
  setTimeout(() => dashLoad(), 100);
}

function doLogout() {
  try { localStorage.removeItem('ved_session'); } catch(e) {}
  currentUser = null;
  document.getElementById('auth-login').value = '';
  document.getElementById('auth-pass').value = '';
  document.getElementById('auth-err').textContent = '';
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('auth-login').focus();
  // Reset nav
  document.querySelectorAll('.nav-item').forEach(el => { el.style.opacity = ''; el.style.pointerEvents = ''; el.title = ''; });
  document.getElementById('nav-admin-sep').style.display = 'none';
  document.getElementById('nav-admin-label').style.display = 'none';
  document.getElementById('nav-admin-item').style.display = 'none';
}

// ── ADMIN USER MANAGEMENT ──

function renderAdminTable() {
  renderDeliveryCounters();
  const users = getUsers();
  const body = document.getElementById('admin-users-body');
  if (!body) return;
  body.innerHTML = users.map((u, i) => {
    const d = DEPT_LABELS[u.dept] || { label: u.dept, cls: '' };
    const accessLabel = u.access.includes('all') ? 'Все модули' : u.access.join(', ');
    const isCurrentUser = currentUser && u.login === currentUser.login;
    return `<tr>
      <td><b>${u.name}</b></td>
      <td style="font-family:'Fira Code',monospace;font-size:11px">${u.login}</td>
      <td><span class="auth-dept-badge ${d.cls}">${d.label}</span></td>
      <td style="font-size:11px;color:var(--text3)">${accessLabel}</td>
      <td>
        ${u.active !== false
          ? '<span style="color:var(--green);font-family:\'Fira Code\',monospace;font-size:10px">● Активен</span>'
          : '<span style="color:var(--rust);font-family:\'Fira Code\',monospace;font-size:10px">● Заблокирован</span>'}
      </td>
      <td>
        ${!isCurrentUser ? `
          <button class="admin-action-btn" onclick="toggleUserActive(${i})">${u.active !== false ? 'Заблокировать' : 'Активировать'}</button>
          <button class="admin-action-btn" onclick="resetUserPass(${i})">Сбросить пароль</button>
          <button class="admin-action-btn danger" onclick="deleteUser(${i})">Удалить</button>
        ` : '<span style="font-size:10px;color:var(--text3);font-family:\'Fira Code\',monospace">(текущий)</span>'}
      </td>
    </tr>`;
  }).join('');
}

function toggleAddUserForm() {
  const f = document.getElementById('add-user-form');
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
  document.getElementById('add-user-msg').textContent = '';
}

function addUser() {
  const name  = document.getElementById('nu-name').value.trim();
  const login = document.getElementById('nu-login').value.trim();
  const pass  = document.getElementById('nu-pass').value;
  const dept  = document.getElementById('nu-dept').value;
  const selEl = document.getElementById('nu-access');
  const access = Array.from(selEl.selectedOptions).map(o => o.value);
  const msg   = document.getElementById('add-user-msg');

  if (!name || !login || !pass) { msg.style.color = 'var(--rust)'; msg.textContent = 'Заполните все поля'; return; }

  const users = getUsers();
  if (users.find(u => u.login === login)) { msg.style.color = 'var(--rust)'; msg.textContent = 'Логин уже занят'; return; }

  users.push({ name, login, pass, dept, access, active: true });
  saveUsers(users);
  msg.style.color = 'var(--green)';
  msg.textContent = `✓ Пользователь «${name}» добавлен`;
  document.getElementById('nu-name').value = '';
  document.getElementById('nu-login').value = '';
  document.getElementById('nu-pass').value = '';
  renderAdminTable();
}

function toggleUserActive(i) {
  const users = getUsers();
  users[i].active = users[i].active === false ? true : false;
  saveUsers(users);
  renderAdminTable();
}

function resetUserPass(i) {
  const newPass = prompt('Введите новый пароль для пользователя:');
  if (!newPass) return;
  const users = getUsers();
  users[i].pass = newPass;
  saveUsers(users);
  alert('Пароль изменён');
}

function deleteUser(i) {
  if (!confirm('Удалить пользователя? Это действие нельзя отменить.')) return;
  const users = getUsers();
  users.splice(i, 1);
  saveUsers(users);
  renderAdminTable();
}

// ════════════════════════════════════════════
// ── EXCEL EXPORTS ──
// ════════════════════════════════════════════

function xlsxDownload(wb, filename) {
  XLSX.writeFile(wb, filename);
}

function styleHeader(ws, range, opts) {
  // Apply bold + fill to header rows
  const { s, e } = XLSX.utils.decode_range(range);
  for (let C = s.c; C <= e.c; C++) {
    const addr = XLSX.utils.encode_cell({ r: s.r, c: C });
    if (!ws[addr]) ws[addr] = { v: '', t: 's' };
    ws[addr].s = opts || {
      font: { bold: true, color: { rgb: 'FFFFFF' } },
      fill: { fgColor: { rgb: '1A2744' } },
      alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
    };
  }
}

// ── 1. RFQ Request Excel (заявка экспедитору) ──
function exportRfqRequestExcel() {
  if (!window._rfqData) { alert('Сначала сформируйте письмо-запрос (вкладка ① Запрос)'); return; }
  const d = window._rfqData;
  const today = new Date().toLocaleDateString('ru-RU');
  const wb = XLSX.utils.book_new();

  // ── Sheet 1: Cargo & Routing ──
  const info = [
    ['ЗАЯВКА ЭКСПЕДИТОРУ / REQUEST FOR FREIGHT QUOTATION', ''],
    ['Дата / Date', today],
    ['От / From', d.company + (d.contact ? ' · ' + d.contact : '')],
    ['E-mail', d.email || ''],
    ['Тел / Phone', d.phone || ''],
    ['', ''],
    ['ДЕТАЛИ ГРУЗА / CARGO DETAILS', ''],
    ['Описание / Description', d.cargo],
    ['Вес брутто / Gross Weight, kg', d.weight || ''],
    ['Объём / Volume, m³', d.vol || ''],
    ['Кол-во мест / Packages', d.pkgs ? d.pkgs + ' × ' + d.pkgType : d.pkgType],
    ['Декларируемая стоимость / Declared Value', d.value || ''],
    ['', ''],
    ['МАРШРУТ / ROUTING', ''],
    ['Место отправления / Origin', d.origin],
    ['Место назначения / Destination', d.dest],
    ['Вид транспорта / Mode', d.mode],
    ['Инкотермс / Incoterms', d.inco],
    ['Дата отправки (ETD)', d.etd || ''],
    ['Дата прибытия (ETA)', d.eta || ''],
    ['', ''],
    ['ЗАПРАШИВАЕМЫЕ УСЛУГИ / REQUIRED SERVICES', ''],
  ];
  d.services.forEach(s => info.push(['✓', s]));
  if (d.notes) {
    info.push(['', '']);
    info.push(['ПРИМЕЧАНИЯ / NOTES', '']);
    info.push(['', d.notes]);
  }
  info.push(['', '']);
  info.push(['ФОРМАТ ОТВЕТА / QUOTE FORMAT', '']);
  info.push(['', 'Просьба указать раздельно: фрахт, сборы в порту отправления, сборы в порту назначения, таможенное оформление, страхование, итог all-in, транзитное время, срок действия ставки.']);

  const ws1 = XLSX.utils.aoa_to_sheet(info);
  ws1['!cols'] = [{ wch: 38 }, { wch: 55 }];
  ws1['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:1} }];
  // Style title
  if (ws1['A1']) ws1['A1'].s = { font:{bold:true,sz:13,color:{rgb:'1A2744'}}, alignment:{horizontal:'center'} };
  // Style section headers
  [6,13,21].forEach(rowIdx => {
    const addr = 'A' + (rowIdx+1);
    if (ws1[addr]) ws1[addr].s = { font:{bold:true,color:{rgb:'2B7A6F'}}, fill:{fgColor:{rgb:'F0F7F5'}} };
  });
  XLSX.utils.book_append_sheet(wb, ws1, 'Заявка');

  // ── Sheet 2: Response Template ──
  const resp = [
    ['ШАБЛОН ОТВЕТА / QUOTATION RESPONSE TEMPLATE', '', '', ''],
    ['Экспедитор / Forwarder', '', '', ''],
    ['Контактное лицо / Contact', '', '', ''],
    ['Дата ответа / Quote Date', '', 'Действительно до / Valid Until', ''],
    ['', '', '', ''],
    ['Статья расходов / Cost Item', 'Валюта / Currency', 'Сумма / Amount', 'Комментарий / Note'],
    ['Фрахт / Freight', '', '', ''],
    ['Сборы в порту отпр. / Origin Charges', '', '', ''],
    ['Сборы в порту назн. / Destination Charges', '', '', ''],
    ['Таможенное оформление / Customs Clearance', '', '', ''],
    ['Страхование / Insurance', '', '', ''],
    ['Прочие расходы / Other', '', '', ''],
    ['ИТОГО ALL-IN / TOTAL', '', '', ''],
    ['', '', '', ''],
    ['Транзитное время / Transit Time (days)', '', '', ''],
    ['Особые условия / Special Conditions', '', '', ''],
  ];
  const ws2 = XLSX.utils.aoa_to_sheet(resp);
  ws2['!cols'] = [{wch:42},{wch:16},{wch:16},{wch:36}];
  ws2['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:3} }];
  if (ws2['A1']) ws2['A1'].s = { font:{bold:true,sz:12,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
  if (ws2['A6']) ws2['A6'].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  if (ws2['B6']) ws2['B6'].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  if (ws2['C6']) ws2['C6'].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  if (ws2['D6']) ws2['D6'].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  // Bold TOTAL row
  if (ws2['A13']) ws2['A13'].s = { font:{bold:true}, fill:{fgColor:{rgb:'FFF3CD'}} };
  if (ws2['B13']) ws2['B13'].s = { font:{bold:true}, fill:{fgColor:{rgb:'FFF3CD'}} };
  if (ws2['C13']) ws2['C13'].s = { font:{bold:true}, fill:{fgColor:{rgb:'FFF3CD'}} };
  XLSX.utils.book_append_sheet(wb, ws2, 'Шаблон ответа');

  const dateStr = new Date().toISOString().slice(0,10);
  xlsxDownload(wb, `RFQ_Заявка_${dateStr}.xlsx`);
}

// ── 2. RFQ Comparison Excel (сравнение экспедиторов) ──
function exportRfqCompareExcel() {
  if (!freighters || freighters.length === 0) { alert('Добавьте экспедиторов и введите ставки'); return; }
  const wb = XLSX.utils.book_new();
  const today = new Date().toLocaleDateString('ru-RU');

  // Header row
  const headers = ['Экспедитор', 'Фрахт', 'Таможня', 'Доп. услуги', 'ИТОГО', 'Транзит (дн.)', 'Надёжность (1-5)', 'Примечание'];
  const rows = [
    ['СРАВНЕНИЕ ПРЕДЛОЖЕНИЙ ЭКСПЕДИТОРОВ', '', '', '', '', '', '', ''],
    ['Дата сравнения', today, '', '', '', '', '', ''],
    ...(window._rfqData ? [
      ['Груз', window._rfqData.cargo, '', '', '', '', '', ''],
      ['Маршрут', (window._rfqData.origin || '') + ' → ' + (window._rfqData.dest || ''), '', '', '', '', '', ''],
    ] : []),
    ['', '', '', '', '', '', '', ''],
    headers,
  ];

  freighters.forEach((f, i) => {
    const total = (f.freight||0) + (f.customs||0) + (f.extra||0);
    rows.push([
      f.name || `Экспедитор ${i+1}`,
      f.freight || 0,
      f.customs  || 0,
      f.extra    || 0,
      total,
      f.transit  || '',
      f.reliability || '',
      f.note     || '',
    ]);
  });

  // Find winner
  const withTotal = freighters.map((f,i) => ({
    ...f, total: (f.freight||0)+(f.customs||0)+(f.extra||0), idx: i
  })).filter(f => f.total > 0);
  if (withTotal.length > 0) {
    const winner = withTotal.sort((a,b) => a.total - b.total)[0];
    rows.push(['', '', '', '', '', '', '', '']);
    rows.push(['✅ Рекомендован', freighters[winner.idx].name || `Экспедитор ${winner.idx+1}`,
      'ИТОГО:', winner.total, '', 'Транзит:', winner.transit || '', '']);
  }

  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:30},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:18},{wch:36}];

  // Merge title
  const titleRow = 0;
  ws['!merges'] = [{ s:{r:titleRow,c:0}, e:{r:titleRow,c:7} }];
  if (ws['A1']) ws['A1'].s = { font:{bold:true,sz:13,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };

  // Header row style — find it dynamically
  const headerRowIdx = rows.indexOf(headers);
  headers.forEach((_, ci) => {
    const addr = XLSX.utils.encode_cell({ r: headerRowIdx, c: ci });
    if (ws[addr]) ws[addr].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B7A6F'}}, alignment:{horizontal:'center'} };
  });

  // Highlight total column
  for (let ri = headerRowIdx + 1; ri < headerRowIdx + 1 + freighters.length; ri++) {
    const addr = XLSX.utils.encode_cell({ r: ri, c: 4 });
    if (ws[addr]) ws[addr].s = { font:{bold:true}, alignment:{horizontal:'right'} };
  }

  XLSX.utils.book_append_sheet(wb, ws, 'Сравнение');

  // Sheet 2: individual freighter detail
  freighters.forEach((f, i) => {
    const detail = [
      ['КАРТОЧКА ЭКСПЕДИТОРА', ''],
      ['Компания', f.name || `Экспедитор ${i+1}`],
      ['', ''],
      ['Статья', 'Сумма'],
      ['Фрахт', f.freight || 0],
      ['Таможенное оформление', f.customs || 0],
      ['Дополнительные услуги', f.extra || 0],
      ['ИТОГО', (f.freight||0)+(f.customs||0)+(f.extra||0)],
      ['', ''],
      ['Транзитное время (дн.)', f.transit || ''],
      ['Надёжность (1-5)', f.reliability || ''],
      ['Примечания', f.note || ''],
    ];
    const wsD = XLSX.utils.aoa_to_sheet(detail);
    wsD['!cols'] = [{wch:30},{wch:22}];
    wsD['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:1} }];
    if (wsD['A1']) wsD['A1'].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
    if (wsD['A8']) wsD['A8'].s = { font:{bold:true}, fill:{fgColor:{rgb:'FFF3CD'}} };
    if (wsD['B8']) wsD['B8'].s = { font:{bold:true}, fill:{fgColor:{rgb:'FFF3CD'}} };
    const sheetName = (f.name || `Экспедитор_${i+1}`).slice(0,28);
    XLSX.utils.book_append_sheet(wb, wsD, sheetName);
  });

  const dateStr = new Date().toISOString().slice(0,10);
  xlsxDownload(wb, `RFQ_Сравнение_${dateStr}.xlsx`);
}

// ── 3. Tracker Summary Excel (сводка по грузам) ──
function exportSummaryExcel() {
  if (!shipments || shipments.length === 0) { alert('Нет активных поставок для экспорта'); return; }
  const wb = XLSX.utils.book_new();
  const today = new Date().toLocaleDateString('ru-RU');

  const STAGE_LABELS = ['Заказ размещён','Производство','Готов к отгрузке','В пути','На таможне','Доставлен'];

  // ── Sheet 1: Summary ──
  const sumHeaders = [
    '№ PO / Заказ', 'Поставщик', 'Груз', 'Сумма', 'Экспедитор',
    'Откуда', 'Куда', 'Инкотермс', 'Способ', 'Текущий этап',
    'Дата оплаты', 'Производство', 'ETD', 'ETA', 'Таможня', 'Доставка на склад',
    'Документов получено'
  ];
  const coName = (COMPANIES[activeCompany]?.shortEn || 'SUPPLY CHAIN').toUpperCase();
  const summaryRows = [
    [`СВОДКА ПОСТАВОК · ${coName} · ${today}`, ...Array(sumHeaders.length - 1).fill('')],
    sumHeaders,
  ];

  shipments.forEach(s => {
    const docsReceived = s.docs ? s.docs.filter(d => d.received).length : 0;
    const docsTotal    = s.docs ? s.docs.length : 0;
    summaryRows.push([
      s.po || '',
      s.supplier || '',
      s.cargo || '',
      s.value || '',
      s.forwarder || '',
      s.from || '',
      s.to || '',
      s.inco || '',
      s.mode || '',
      STAGE_LABELS[s.currentStage] || '',
      s.dates?.payment    || '',
      s.dates?.production || '',
      s.dates?.pickup     || '',
      s.dates?.arrival    || '',
      s.dates?.customs    || '',
      s.dates?.delivery   || '',
      `${docsReceived} / ${docsTotal}`,
    ]);
  });

  const ws1 = XLSX.utils.aoa_to_sheet(summaryRows);
  ws1['!cols'] = [
    {wch:20},{wch:22},{wch:28},{wch:14},{wch:22},
    {wch:18},{wch:18},{wch:12},{wch:12},{wch:22},
    {wch:14},{wch:14},{wch:12},{wch:12},{wch:14},{wch:18},{wch:18}
  ];
  ws1['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:sumHeaders.length-1} }];
  if (ws1['A1']) ws1['A1'].s = { font:{bold:true,sz:13,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
  sumHeaders.forEach((_, ci) => {
    const addr = XLSX.utils.encode_cell({ r: 1, c: ci });
    if (ws1[addr]) ws1[addr].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B7A6F'}}, alignment:{wrapText:true, vertical:'center'} };
  });
  // Highlight completed shipments
  shipments.forEach((s, ri) => {
    if (s.currentStage === 5) {
      sumHeaders.forEach((_, ci) => {
        const addr = XLSX.utils.encode_cell({ r: ri + 2, c: ci });
        if (ws1[addr]) ws1[addr].s = { fill:{fgColor:{rgb:'EBF5EB'}} };
      });
    }
  });
  XLSX.utils.book_append_sheet(wb, ws1, 'Сводка');

  // ── Sheet 2: Documents status per shipment ──
  const docsHeaders = ['№ PO', 'Поставщик', 'Документ', 'Статус'];
  const docsRows = [
    [`СТАТУС ДОКУМЕНТОВ · ${today}`, '', '', ''],
    docsHeaders,
  ];
  shipments.forEach(s => {
    (s.docs || []).forEach(doc => {
      docsRows.push([
        s.po || '',
        s.supplier || '',
        doc.name,
        doc.received ? '✅ Получен' : '⏳ Ожидается',
      ]);
    });
    docsRows.push(['', '', '', '']); // spacer
  });
  const ws2 = XLSX.utils.aoa_to_sheet(docsRows);
  ws2['!cols'] = [{wch:20},{wch:22},{wch:42},{wch:16}];
  ws2['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:3} }];
  if (ws2['A1']) ws2['A1'].s = { font:{bold:true,sz:12,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
  docsHeaders.forEach((_, ci) => {
    const addr = XLSX.utils.encode_cell({ r: 1, c: ci });
    if (ws2[addr]) ws2[addr].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  });
  XLSX.utils.book_append_sheet(wb, ws2, 'Документы');

  // ── Sheet 3: Events log ──
  const evHeaders = ['№ PO', 'Поставщик', 'Дата', 'Событие', 'Примечание'];
  const evRows = [
    [`ЖУРНАЛ СОБЫТИЙ · ${today}`, '', '', '', ''],
    evHeaders,
  ];
  shipments.forEach(s => {
    (s.events || []).forEach(ev => {
      evRows.push([
        s.po || '',
        s.supplier || '',
        ev.date || '',
        ev.text || '',
        ev.note || '',
      ]);
    });
  });
  const ws3 = XLSX.utils.aoa_to_sheet(evRows);
  ws3['!cols'] = [{wch:20},{wch:22},{wch:14},{wch:45},{wch:35}];
  ws3['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:4} }];
  if (ws3['A1']) ws3['A1'].s = { font:{bold:true,sz:12,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
  evHeaders.forEach((_, ci) => {
    const addr = XLSX.utils.encode_cell({ r: 1, c: ci });
    if (ws3[addr]) ws3[addr].s = { font:{bold:true,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'2B4A6F'}} };
  });
  XLSX.utils.book_append_sheet(wb, ws3, 'Журнал событий');

  const dateStr = new Date().toISOString().slice(0,10);
  xlsxDownload(wb, `Поставки_Сводка_${dateStr}.xlsx`);
}

function downloadRfqTxt() {
  if (!window._rfqLetter) { alert('Сначала сформируйте письмо-запрос'); return; }
  const blob = new Blob([window._rfqLetter], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0,10);
  a.href     = url;
  a.download = `RFQ_${dateStr}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ════════════════════════════════════════════
// ── CUSTOMS SCAN ATTACHMENTS (IndexedDB) ──
// ════════════════════════════════════════════

let clScans = {}; // { itemId: [ {name, type, dataUrl}, ... ] }
let clScansDB = null;

function openScansDB() {
  return new Promise((resolve, reject) => {
    if (clScansDB) { resolve(clScansDB); return; }
    const req = indexedDB.open('ved_scans', 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('scans')) db.createObjectStore('scans', { keyPath: 'itemId' });
    };
    req.onsuccess = e => { clScansDB = e.target.result; resolve(clScansDB); };
    req.onerror   = () => reject(req.error);
  });
}

async function loadAllScans() {
  try {
    const db = await openScansDB();
    return new Promise((resolve) => {
      const tx = db.transaction('scans', 'readonly');
      const store = tx.objectStore('scans');
      const req = store.getAll();
      req.onsuccess = () => {
        clScans = {};
        (req.result || []).forEach(row => { clScans[row.itemId] = row.files; });
        resolve();
      };
      req.onerror = () => resolve();
    });
  } catch(e) { /* IndexedDB not available */ }
}

async function saveScansForItem(itemId) {
  try {
    const db = await openScansDB();
    return new Promise((resolve) => {
      const tx = db.transaction('scans', 'readwrite');
      const store = tx.objectStore('scans');
      const files = clScans[itemId] || [];
      if (files.length === 0) { store.delete(itemId); }
      else { store.put({ itemId, files }); }
      tx.oncomplete = resolve;
      tx.onerror = resolve;
    });
  } catch(e) {}
}

function attachScan(itemId, fileList, event) {
  if (event) event.stopPropagation();
  if (!fileList || fileList.length === 0) return;

  const MAX_FILES = 10;
  const MAX_SIZE  = 20 * 1024 * 1024; // 20 MB per file

  if (!clScans[itemId]) clScans[itemId] = [];

  let loaded = 0;
  const total = Math.min(fileList.length, MAX_FILES - clScans[itemId].length);

  if (total <= 0) { alert('Достигнут максимум файлов (10) для этого документа'); return; }

  Array.from(fileList).slice(0, total).forEach(file => {
    if (file.size > MAX_SIZE) { alert(`Файл «${file.name}» превышает 20 МБ`); loaded++; return; }
    const reader = new FileReader();
    reader.onload = e => {
      clScans[itemId].push({ name: file.name, type: file.type, dataUrl: e.target.result });
      loaded++;
      if (loaded >= total) {
        saveScansForItem(itemId);
        renderChecklist();
        // Re-expand the item to show files
        setTimeout(() => {
          const el = document.getElementById('cl-item-' + itemId);
          if (el) el.classList.add('expanded');
        }, 50);
      }
    };
    reader.readAsDataURL(file);
  });
}

function removeScan(itemId, fileIndex, event) {
  if (event) event.stopPropagation();
  if (!confirm('Удалить файл?')) return;
  if (clScans[itemId]) {
    clScans[itemId].splice(fileIndex, 1);
    saveScansForItem(itemId);
    renderChecklist();
  }
}

function previewScan(itemId, fileIndex, event) {
  if (event) event.stopPropagation();
  const f = (clScans[itemId] || [])[fileIndex];
  if (!f) return;

  // Open in new tab
  const w = window.open('', '_blank');
  if (f.type === 'application/pdf' || f.type.startsWith('image/')) {
    w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
      <title>${f.name}</title>
      <style>body{margin:0;background:#1a1a1a;display:flex;justify-content:center;align-items:flex-start;}
      img{max-width:100%;height:auto;}embed{width:100vw;height:100vh;}</style></head><body>`);
    if (f.type === 'application/pdf') {
      w.document.write(`<embed src="${f.dataUrl}" type="application/pdf">`);
    } else {
      w.document.write(`<img src="${f.dataUrl}" alt="${f.name}">`);
    }
    w.document.write('</body></html>');
    w.document.close();
  } else {
    // Trigger download for other types
    const a = w.document.createElement('a');
    a.href = f.dataUrl; a.download = f.name; a.click(); w.close();
  }
}

// ════════════════════════════════════════════
// ── CUSTOMS DUTY CALCULATOR ──
// ════════════════════════════════════════════

const TNVED_DB = {
  '8544':    { name: 'Провода, кабели, изолированные электрические проводники', duty: 0, vat: 22, note: 'ТР ТС 004/2011, ТР ТС 037/2016' },
  '8544 19': { name: 'Провода обмоточные прочие', duty: 0, vat: 22, note: 'Сертификат ф.А для ОСП' },
  '8544 42': { name: 'Провода электрические до 80В', duty: 0, vat: 22, note: '' },
  '8544 49': { name: 'Провода электрические прочие до 1000В', duty: 0, vat: 22, note: '' },
  '8544 60': { name: 'Проводники на напряжение более 1000В', duty: 0, vat: 22, note: '' },
  '8536':    { name: 'Аппаратура коммутации электрических цепей до 1000В', duty: 3, vat: 22, note: '' },
  '8537':    { name: 'Пульты, панели, шкафы управления', duty: 0, vat: 22, note: '' },
  '8541':    { name: 'Полупроводниковые приборы, диоды, транзисторы', duty: 0, vat: 22, note: '' },
  '8542':    { name: 'Интегральные схемы', duty: 0, vat: 22, note: '' },
  '8471':    { name: 'Машины вычислительные (компьютеры)', duty: 0, vat: 22, note: '' },
  '8501':    { name: 'Двигатели и генераторы электрические', duty: 0, vat: 22, note: '' },
  '8502':    { name: 'Электрогенерирующие агрегаты', duty: 5, vat: 22, note: '' },
  '8507':    { name: 'Аккумуляторы электрические', duty: 5, vat: 22, note: '' },
  '8517':    { name: 'Телефонные аппараты, оборудование связи', duty: 0, vat: 22, note: '' },
  '7408':    { name: 'Проволока медная', duty: 5, vat: 22, note: '' },
  '7605':    { name: 'Проволока из алюминия', duty: 5, vat: 22, note: '' },
};

const CUSTOMS_FEES = [
  { max: 200000, fee: 775 },   { max: 450000, fee: 1550 },
  { max: 1200000, fee: 3100 }, { max: 2700000, fee: 8530 },
  { max: 4200000, fee: 12000 },{ max: 5500000, fee: 15500 },
  { max: 7000000, fee: 20000 },{ max: 8000000, fee: 23000 },
  { max: 9000000, fee: 25000 },{ max: 10000000,fee: 27500 },
  { max: Infinity, fee: 30000 },
];

const OSP_COUNTRIES  = ['IN','VN','PK','BD','EG','MA','TN','NG','KE','ET','GH','TZ','UG','AO','CI'];
const EAEU_COUNTRIES = ['BY','KZ','AM','KG'];
let calcHistory = [];

function onTnvedInput(el) {
  let v = el.value.replace(/\D/g,'').slice(0,10), fmt='';
  for(let i=0;i<v.length;i++){if(i===4||i===6)fmt+=' ';fmt+=v[i];}
  el.value=fmt; calcDuty();
}

function lookupTnved(code) {
  const c=code.replace(/\s/g,'');
  const keys=[];
  if(c.length>=6)keys.push(c.slice(0,4)+' '+c.slice(4,6));
  keys.push(c.slice(0,4));
  for(const k of keys)if(TNVED_DB[k])return TNVED_DB[k];
  return null;
}

function getCustomsFee(v){for(const t of CUSTOMS_FEES)if(v<=t.max)return t.fee;return 30000;}

function calcDuty(){
  const tnved=document.getElementById('cc-tnved').value.trim();
  const country=document.getElementById('cc-country').value;
  const invVal=parseFloat(document.getElementById('cc-invoice').value)||0;
  const currency=document.getElementById('cc-currency').value;
  const rate=parseFloat(document.getElementById('cc-rate').value)||0;
  const freight=parseFloat(document.getElementById('cc-freight').value)||0;
  const insurance=parseFloat(document.getElementById('cc-insurance').value)||0;
  const other2=parseFloat(document.getElementById('cc-other').value)||0;
  const excise=parseFloat(document.getElementById('cc-excise').value)||0;
  const area=document.getElementById('cc-result-area');
  const ospNote=document.getElementById('cc-osp-note');
  const hintEl=document.getElementById('cc-tnved-hint');

  const info=lookupTnved(tnved.replace(/\s/g,''));
  if(info){
    hintEl.style.display='';
    hintEl.innerHTML='<b style="color:var(--teal)">'+tnved.replace(/\s/g,'').slice(0,4)+' xx</b> — '+info.name+(info.note?'<br><span style="color:var(--text3);font-size:10px">ℹ '+info.note+'</span>':'');
    const di=document.getElementById('cc-duty-rate');
    if(!di.dataset.manual){let dr=info.duty;if(OSP_COUNTRIES.includes(country)||EAEU_COUNTRIES.includes(country))dr=0;di.value=dr;}
    const vs=document.getElementById('cc-vat-rate');
    if(!vs.dataset.manual)vs.value=info.vat;
  } else {
    hintEl.style.display=tnved.replace(/\s/g,'').length>=4?'':'none';
    if(tnved.replace(/\s/g,'').length>=4)hintEl.innerHTML='<span style="color:var(--text3)">ТН ВЭД '+tnved+' — не найден в справочнике. Введите ставки вручную.</span>';
  }
  document.getElementById('cc-duty-rate').addEventListener('input',function(){this.dataset.manual='1';},{once:true});
  document.getElementById('cc-vat-rate').addEventListener('change',function(){this.dataset.manual='1';},{once:true});

  ospNote.style.display=OSP_COUNTRIES.includes(country)?'':'none';
  if(!invVal||!rate){
    area.innerHTML='<div style="color:var(--text3);font-family:\'Fira Code\',monospace;font-size:11px;padding:40px 0;text-align:center;border:1px dashed var(--border);border-radius:8px">'+(invVal?'Введите курс ЦБ к рублю':'Введите стоимость товара')+'</div>';
    return;
  }
  const dutyRate=parseFloat(document.getElementById('cc-duty-rate').value)||0;
  const vatRate=parseFloat(document.getElementById('cc-vat-rate').value)||22;
  const invRub=invVal*rate;
  const cusVal=invRub+freight+insurance+other2;
  const dutyAmt=cusVal*dutyRate/100;
  const cusFee=getCustomsFee(cusVal);
  const vatBase=cusVal+dutyAmt+excise;
  const vatAmt=vatBase*vatRate/100;
  const totalPay=dutyAmt+cusFee+vatAmt+excise;
  const totalLand=cusVal+totalPay;
  window._lastCalc={tnved,country,currency,invVal,rate,invRub,freight,insurance,other:other2,cusVal,dutyRate,dutyAmt,cusFee,vatRate,vatAmt,excise,totalPay,totalLand};
  const fmt=n=>Math.round(n).toLocaleString('ru-RU')+' ₽';
  const fmtP=r=>r.toFixed(1)+'%';
  const pct=(n,b)=>b>0?fmtP(n/b*100):'—';
  area.innerHTML=`
    <div class="calc-result-box">
      <div class="calc-result-title">Таможенные платежи · расчёт</div>
      <div class="calc-total-line"><span class="lbl">Таможенная стоимость (CIF)</span><span class="val">${fmt(cusVal)}</span></div>
      <div class="calc-total-line"><span class="lbl">Ввозная пошлина <span class="rate-badge">${fmtP(dutyRate)}</span></span><span class="val">${fmt(dutyAmt)}</span></div>
      ${excise>0?`<div class="calc-total-line"><span class="lbl">Акциз</span><span class="val">${fmt(excise)}</span></div>`:''}
      <div class="calc-total-line"><span class="lbl">Таможенный сбор за оформление</span><span class="val">${fmt(cusFee)}</span></div>
      <div class="calc-total-line"><span class="lbl">НДС при ввозе <span class="rate-badge">${vatRate}%</span></span><span class="val">${fmt(vatAmt)}</span></div>
      <div class="calc-total-line grand"><span class="lbl">Итого таможенных платежей</span><span class="val">${fmt(totalPay)}</span></div>
    </div>
    <div class="calc-breakdown"><table>
      <thead><tr><th>Статья</th><th>Основание</th><th style="text-align:right">Сумма, ₽</th><th style="text-align:right">%% к ТС</th></tr></thead>
      <tbody>
        <tr><td>Стоимость товара (${currency})</td><td>${invVal.toLocaleString('ru-RU')} × ${rate} ₽</td><td>${fmt(invRub)}</td><td>${pct(invRub,cusVal)}</td></tr>
        ${freight?`<tr><td>Фрахт</td><td></td><td>${fmt(freight)}</td><td>${pct(freight,cusVal)}</td></tr>`:''}
        ${insurance?`<tr><td>Страхование</td><td></td><td>${fmt(insurance)}</td><td>${pct(insurance,cusVal)}</td></tr>`:''}
        ${other2?`<tr><td>Прочие расходы</td><td></td><td>${fmt(other2)}</td><td>—</td></tr>`:''}
        <tr style="background:var(--surface2)"><td><b>Таможенная стоимость</b></td><td>CIF</td><td><b>${fmt(cusVal)}</b></td><td>100%</td></tr>
        <tr><td>Ввозная пошлина</td><td>ТС × ${fmtP(dutyRate)}</td><td>${fmt(dutyAmt)}</td><td>${pct(dutyAmt,cusVal)}</td></tr>
        ${excise>0?`<tr><td>Акциз</td><td>фиксированный</td><td>${fmt(excise)}</td><td>${pct(excise,cusVal)}</td></tr>`:''}
        <tr><td>Таможенный сбор</td><td>по шкале ФТС РФ</td><td>${fmt(cusFee)}</td><td>${pct(cusFee,cusVal)}</td></tr>
        <tr><td>НДС</td><td>(ТС + пошлина${excise?'+акциз':''}) × ${vatRate}%</td><td>${fmt(vatAmt)}</td><td>${pct(vatAmt,cusVal)}</td></tr>
        <tr class="total-row"><td><b>ИТОГО таможенных платежей</b></td><td></td><td><b>${fmt(totalPay)}</b></td><td><b>${pct(totalPay,cusVal)}</b></td></tr>
        <tr class="total-row" style="background:rgba(26,39,68,0.06)"><td><b>ИТОГО себестоимость на складе РФ</b></td><td>ТС + все платежи</td><td><b>${fmt(totalLand)}</b></td><td><b>${pct(totalLand,cusVal)}</b></td></tr>
      </tbody>
    </table></div>`;
}

function saveCalcToHistory(){
  if(!window._lastCalc){alert('Сначала выполните расчёт');return;}
  const c=window._lastCalc;
  calcHistory.unshift({date:new Date().toLocaleDateString('ru-RU'),tnved:document.getElementById('cc-tnved').value,
    country:document.getElementById('cc-country').options[document.getElementById('cc-country').selectedIndex].text,
    currency:c.currency,invVal:c.invVal,cusVal:c.cusVal,totalPay:c.totalPay,totalLand:c.totalLand,
    dutyRate:c.dutyRate,vatRate:c.vatRate,snapshot:c});
  renderCalcHistory();
}

function renderCalcHistory(){
  const el=document.getElementById('cc-history-list');
  if(calcHistory.length===0){el.innerHTML='<div style="padding:24px;text-align:center;color:var(--text3);font-size:12px;font-family:\'Fira Code\',monospace">Нет сохранённых расчётов</div>';return;}
  el.innerHTML=calcHistory.map((h,i)=>`<div class="calc-history-row">
    <span class="calc-history-date">${h.date}</span>
    <span class="calc-history-tnved">${h.tnved||'—'}</span>
    <span style="font-size:11px;color:var(--text2);min-width:120px">${h.country}</span>
    <span style="font-size:11px;color:var(--text3)">${h.invVal.toLocaleString('ru-RU')} ${h.currency}</span>
    <span class="calc-history-total">платежи: ${Math.round(h.totalPay).toLocaleString('ru-RU')} ₽</span>
    <span style="font-size:11px;color:var(--text3)">склад: ${Math.round(h.totalLand).toLocaleString('ru-RU')} ₽</span>
    <button class="admin-action-btn danger" onclick="calcHistory.splice(${i},1);renderCalcHistory()" style="margin-left:8px">×</button>
  </div>`).join('');
}

function exportCalcExcel(){
  if(calcHistory.length===0&&!window._lastCalc){alert('Нет данных для экспорта');return;}
  const wb=XLSX.utils.book_new();
  const hdr=['Дата','ТН ВЭД','Страна','Валюта','Стоимость инв.','Таможенная стоимость ₽','Ставка пошлины %','Пошлина ₽','Сбор ₽','Ставка НДС %','НДС ₽','Итого платежей ₽','Себестоимость склад ₽'];
  const rows=[['РАСЧЁТЫ ТАМОЖЕННЫХ ПЛАТЕЖЕЙ',...Array(hdr.length-1).fill('')],hdr,
    ...calcHistory.map(h=>[h.date,h.tnved,h.country,h.currency,h.invVal,Math.round(h.cusVal),h.dutyRate,Math.round(h.snapshot.dutyAmt),Math.round(h.snapshot.cusFee),h.vatRate,Math.round(h.snapshot.vatAmt),Math.round(h.totalPay),Math.round(h.totalLand)])];
  if(window._lastCalc&&(calcHistory.length===0||calcHistory[0].snapshot!==window._lastCalc)){
    const c=window._lastCalc;
    rows.push([new Date().toLocaleDateString('ru-RU'),document.getElementById('cc-tnved').value,
      document.getElementById('cc-country').options[document.getElementById('cc-country').selectedIndex].text,
      c.currency,c.invVal,Math.round(c.cusVal),c.dutyRate,Math.round(c.dutyAmt),Math.round(c.cusFee),c.vatRate,Math.round(c.vatAmt),Math.round(c.totalPay),Math.round(c.totalLand)]);
  }
  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:12},{wch:14},{wch:18},{wch:8},{wch:16},{wch:22},{wch:16},{wch:14},{wch:12},{wch:12},{wch:14},{wch:20},{wch:24}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:hdr.length-1}}];
  if(ws['A1'])ws['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws[a])ws[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'2B7A6F'}}};});
  XLSX.utils.book_append_sheet(wb,ws,'Расчёты');
  XLSX.writeFile(wb,'Таможенные_расчёты_'+new Date().toISOString().slice(0,10)+'.xlsx');
}

// ════════════════════════════════════════════
// ── DEADLINE MONITOR ──
// ════════════════════════════════════════════

let deadlines=[];
let dlFilter='all';
const DL_TYPES={
  payment:{icon:'💳',label:'Оплата'},customs:{icon:'🛃',label:'Таможня'},
  docs:{icon:'📄',label:'Документы'},shipment:{icon:'🚢',label:'Отгрузка'},
  delivery:{icon:'🏭',label:'Доставка'},cert:{icon:'📋',label:'Сертификат'},
  other:{icon:'📌',label:'Прочее'},
};

function dlDaysUntil(ds){if(!ds)return null;const d=new Date(ds+'T00:00:00'),t=new Date();t.setHours(0,0,0,0);return Math.round((d-t)/86400000);}
function dlColorClass(days,done){if(done)return'done';if(days===null)return'done';if(days<0)return'red';if(days<=3)return'orange';if(days<=7)return'yellow';return'green';}
function setDlFilter(f,btn){dlFilter=f;document.querySelectorAll('.dl-filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDeadlines();}

function toggleDlAddForm(){
  const f=document.getElementById('dl-add-form');
  f.style.display=(f.style.display==='block')?'none':'block';
  if(f.style.display==='block')document.getElementById('dl-name-inp').focus();
}

function addDeadline(){
  const name=document.getElementById('dl-name-inp').value.trim();
  const date=document.getElementById('dl-date-inp').value;
  if(!name||!date){alert('Введите название и дату');return;}
  deadlines.push({id:Date.now()+Math.random(),name,date,type:document.getElementById('dl-type-inp').value,
    po:document.getElementById('dl-po-inp').value.trim(),supplier:document.getElementById('dl-supplier-inp').value.trim(),
    note:document.getElementById('dl-note-inp').value.trim(),done:false,source:'manual'});
  deadlines.sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  ['dl-name-inp','dl-po-inp','dl-supplier-inp','dl-note-inp'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('dl-date-inp').value='';
  document.getElementById('dl-add-form').style.display='none';
  saveDeadlines();renderDeadlines();
}

function toggleDlDone(id){const dl=deadlines.find(d=>d.id===id);if(dl){dl.done=!dl.done;saveDeadlines();renderDeadlines();}}
function deleteDeadline(id){deadlines=deadlines.filter(d=>d.id!==id);saveDeadlines();renderDeadlines();}
function saveDeadlines(){try{localStorage.setItem('ved_deadlines',JSON.stringify(deadlines));}catch(e){}}
function loadDeadlines(){try{const s=localStorage.getItem('ved_deadlines');if(s)deadlines=JSON.parse(s);}catch(e){}}

function syncDeadlinesFromTracker(){
  if(!shipments||shipments.length===0){alert('Нет поставок в Трекере. Добавьте поставки в раздел 05.');return;}
  let added=0;
  const MAP=[
    {key:'payment',name:'Оплата поставщику',type:'payment'},
    {key:'production',name:'Готовность к отгрузке',type:'shipment'},
    {key:'pickup',name:'ETD · Дата отгрузки',type:'shipment'},
    {key:'arrival',name:'ETA · Прибытие',type:'delivery'},
    {key:'customs',name:'Таможенное оформление',type:'customs'},
    {key:'delivery',name:'Доставка на склад',type:'delivery'},
  ];
  shipments.forEach(s=>{
    MAP.forEach(m=>{
      const date=s.dates&&s.dates[m.key];
      if(!date)return;
      if(deadlines.some(d=>d.po===s.po&&d.type===m.type&&d.date===date&&d.source==='tracker'))return;
      deadlines.push({id:Date.now()+Math.random(),name:m.name,type:m.type,date,po:s.po,supplier:s.supplier||'',note:'',done:false,source:'tracker'});
      added++;
    });
  });
  if(added>0){deadlines.sort((a,b)=>(a.date||'').localeCompare(b.date||''));saveDeadlines();renderDeadlines();alert('Импортировано '+added+' дат из Трекера поставок');}
  else alert('Все даты из Трекера уже синхронизированы');
}

function renderDeadlines(){
  // Show deadlines for active company (repat are company-tagged; manually added show for all)
  const coDl = deadlines.filter(d => !d.company || d.company === activeCompany);
  const filtered=coDl.filter(d=>dlFilter==='all'||dlColorClass(dlDaysUntil(d.date),d.done)===dlFilter);
  const cnt={red:0,orange:0,yellow:0,green:0,done:0};
  coDl.forEach(d=>{cnt[dlColorClass(dlDaysUntil(d.date),d.done)]++;});
  document.getElementById('dl-summary').innerHTML=`
    <div class="dl-stat-box"><div class="dl-stat-num" style="color:var(--red)">${cnt.red}</div><div class="dl-stat-label">Просрочено</div></div>
    <div class="dl-stat-box"><div class="dl-stat-num" style="color:var(--rust)">${cnt.orange}</div><div class="dl-stat-label">3 дня</div></div>
    <div class="dl-stat-box"><div class="dl-stat-num" style="color:var(--gold)">${cnt.yellow}</div><div class="dl-stat-label">7 дней</div></div>
    <div class="dl-stat-box"><div class="dl-stat-num" style="color:var(--green)">${cnt.green+cnt.done}</div><div class="dl-stat-label">В норме</div></div>`;
  const grid=document.getElementById('dl-grid');
  const empty=document.getElementById('dl-empty');
  if(filtered.length===0){grid.innerHTML='';empty.style.display='';
    empty.innerHTML='<div class="dl-empty-icon">📅</div><div style="font-size:18px;font-weight:300;margin-bottom:8px">'+(coDl.length===0?'Дедлайнов пока нет':'Ничего не найдено')+'</div><div style="font-size:12px">'+(coDl.length===0?'Нажмите «+ Добавить дедлайн» или используйте «Sync с трекером»':'Выберите другой фильтр')+'</div>';
    return;}
  empty.style.display='none';
  grid.innerHTML=filtered.map(dl=>{
    const days=dlDaysUntil(dl.date);const cls=dlColorClass(days,dl.done);const t=DL_TYPES[dl.type]||DL_TYPES.other;
    const dateStr=dl.date?new Date(dl.date+'T00:00:00').toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'}):'—';
    const dNum=dl.done?'✓':(days===null?'—':Math.abs(days));
    const dLbl=dl.done?'':(days===null?'':days<0?(Math.abs(days)===1?'день просрочен':Math.abs(days)<5?'дня просрочено':'дней просрочено'):days===0?'сегодня!':days===1?'день':days<5?'дня':'дней');
    return `<div class="dl-card ${cls}">
      <div class="dl-card-top">
        <div>${dl.po||dl.supplier?`<div class="dl-po">${[dl.po,dl.supplier].filter(Boolean).join(' · ')}</div>`:''}<span class="dl-type-tag">${t.icon} ${t.label}</span></div>
        <div class="dl-days-wrap"><div class="dl-days-num ${cls}">${dNum}</div><div class="dl-days-label">${dLbl}</div></div>
      </div>
      <div class="dl-name">${dl.name}</div>
      <div class="dl-date">📅 ${dateStr}</div>
      ${dl.note?`<div style="font-size:10px;color:var(--text3);margin-top:5px;font-style:italic">${dl.note}</div>`:''}
      <div style="display:flex;gap:6px;margin-top:12px">
        <button class="admin-action-btn" onclick="toggleDlDone(${dl.id})">${dl.done?'↩ Открыть':'✓ Выполнено'}</button>
        <button class="admin-action-btn danger" onclick="deleteDeadline(${dl.id})">× Удалить</button>
      </div>
    </div>`;
  }).join('');
}

function exportDeadlinesExcel(){
  if(deadlines.length===0){alert('Нет дедлайнов для экспорта');return;}
  const wb=XLSX.utils.book_new();
  const hdr=['Название','Тип','№ PO','Поставщик','Дата','Осталось дней','Статус','Примечание','Источник'];
  const rows=[['ДЕДЛАЙН-МОНИТОР · '+new Date().toLocaleDateString('ru-RU'),...Array(hdr.length-1).fill('')],hdr,
    ...deadlines.map(d=>{const days=dlDaysUntil(d.date);const t=DL_TYPES[d.type]||DL_TYPES.other;
      const status=d.done?'Выполнено':days===null?'—':days<0?'Просрочено':days<=3?'Критично':days<=7?'Скоро':'В норме';
      return[d.name,t.icon+' '+t.label,d.po||'',d.supplier||'',d.date||'',d.done||days===null?'—':days,status,d.note||'',d.source==='tracker'?'Трекер':'Вручную'];})];
  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:35},{wch:16},{wch:18},{wch:22},{wch:14},{wch:14},{wch:18},{wch:30},{wch:12}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:hdr.length-1}}];
  if(ws['A1'])ws['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws[a])ws[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'C4943A'}}};});
  XLSX.utils.book_append_sheet(wb,ws,'Дедлайны');
  XLSX.writeFile(wb,'Дедлайны_'+new Date().toISOString().slice(0,10)+'.xlsx');
}


// ════════════════════════════════════════════
// ── SUPPLIERS / COUNTERPARTIES ──
// ════════════════════════════════════════════

let suppliers = [];
let spTabFilter = 'all';

const SP_TYPES = {
  supplier:       { icon:'🏭', label:'Поставщик',          cls:'sp-type-supplier'       },
  forwarder:      { icon:'🚢', label:'Экспедитор',          cls:'sp-type-forwarder'      },
  broker:         { icon:'🛃', label:'Тамож. брокер',       cls:'sp-type-broker'         },
  customs_broker: { icon:'🛃', label:'Таможенный брокер',   cls:'sp-type-broker'         },
  other:          { icon:'📌', label:'Прочее',              cls:'sp-type-other'          },
};

const SP_COLORS = ['#1F7A63','#1C355E','#C4943A','#B85C3A','#6F8FBF','#0B1F3A'];

function spLoad() {
  try { const s=localStorage.getItem('ved_suppliers'); if(s) suppliers=JSON.parse(s); } catch(e) {}
  // Seed default supplier if empty
  if (suppliers.length === 0) {
    suppliers = [{
      id: 1, name: 'Thermo Cables Limited', type: 'supplier', country: 'Индия', city: 'Hyderabad',
      addr: '28, Nagarjuna Hills, Punjagutta, Hyderabad-500082', contact: 'C.M. Patel',
      pos: 'Authorised Signatory', email: 'info@thermocables.com', phone: '+91(40)44292922',
      web: 'https://thermocables.com', inn: 'AAACT1234F', bank: 'HDFC Bank Ltd', swift: 'HDFCINBB',
      acc: '50200049492660', ifsc: 'HDFC0001041', currency: 'INR', rating: 5,
      leadtime: '16 недель', lead_time_days: 112,
      default_currency: 'INR', payment_terms: '30% advance, 70% before shipment',
      notes: 'Основной поставщик кабельной продукции. Надёжный партнёр с 2024 г.',
      history: [
        { date: '10.02.2026', po: 'ENDV2026-03/4', amount: '149,112 INR', note: 'Кабели 3C/7C/4C × 300м' },
      ],
      created: '2026-01-01'
    }];
    spSave();
  }
}

function spSave() {
  try { localStorage.setItem('ved_suppliers', JSON.stringify(suppliers)); } catch(e) {}
}

function spSetTab(tab, btn) {
  spTabFilter = tab;
  document.querySelectorAll('.sp-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSuppliers();
}

function spToggleAddForm(editId) {
  const form = document.getElementById('sp-add-form');
  const isOpen = form.style.display === 'block';
  if (isOpen && !editId) { form.style.display = 'none'; return; }
  document.getElementById('sp-edit-id').value = editId || '';
  document.getElementById('sp-form-title').textContent = editId ? 'Редактировать контрагента' : 'Новый контрагент';
  if (editId) {
    const s = suppliers.find(x => x.id === editId);
    if (s) {
      document.getElementById('sp-f-name').value    = s.name    || '';
      document.getElementById('sp-f-type').value    = s.type    || 'supplier';
      document.getElementById('sp-f-country').value = s.country || '';
      document.getElementById('sp-f-city').value    = s.city    || '';
      document.getElementById('sp-f-addr').value    = s.addr    || '';
      document.getElementById('sp-f-contact').value = s.contact || '';
      document.getElementById('sp-f-pos').value     = s.pos     || '';
      document.getElementById('sp-f-email').value   = s.email   || '';
      document.getElementById('sp-f-phone').value   = s.phone   || '';
      document.getElementById('sp-f-web').value     = s.web     || '';
      document.getElementById('sp-f-inn').value     = s.inn     || '';
      document.getElementById('sp-f-bank').value    = s.bank    || '';
      document.getElementById('sp-f-swift').value   = s.swift   || '';
      document.getElementById('sp-f-acc').value     = s.acc     || '';
      document.getElementById('sp-f-ifsc').value    = s.ifsc    || '';
      document.getElementById('sp-f-currency').value= s.currency|| 'USD';
      document.getElementById('sp-f-rating').value  = s.rating  || 3;
      document.getElementById('sp-f-leadtime').value          = s.leadtime       || '';
      document.getElementById('sp-f-lead-time-days').value    = s.lead_time_days || '';
      document.getElementById('sp-f-default-currency').value  = s.default_currency|| '';
      document.getElementById('sp-f-payment-terms').value     = s.payment_terms  || '';
      document.getElementById('sp-f-notes').value             = s.notes          || '';
    }
  } else {
    ['sp-f-name','sp-f-country','sp-f-city','sp-f-addr','sp-f-contact','sp-f-pos',
     'sp-f-email','sp-f-phone','sp-f-web','sp-f-inn','sp-f-bank','sp-f-swift',
     'sp-f-acc','sp-f-ifsc','sp-f-leadtime','sp-f-lead-time-days','sp-f-payment-terms','sp-f-notes'].forEach(id => { document.getElementById(id).value=''; });
    document.getElementById('sp-f-default-currency').value = '';
    document.getElementById('sp-f-rating').value = '3';
  }
  form.style.display = 'block';
  document.getElementById('sp-f-name').focus();
  form.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function spSaveRecord() {
  const name = document.getElementById('sp-f-name').value.trim();
  if (!name) { alert('Введите название'); return; }
  const editId = parseInt(document.getElementById('sp-edit-id').value) || null;
  const data = {
    name, type: document.getElementById('sp-f-type').value,
    country:  document.getElementById('sp-f-country').value.trim(),
    city:     document.getElementById('sp-f-city').value.trim(),
    addr:     document.getElementById('sp-f-addr').value.trim(),
    contact:  document.getElementById('sp-f-contact').value.trim(),
    pos:      document.getElementById('sp-f-pos').value.trim(),
    email:    document.getElementById('sp-f-email').value.trim(),
    phone:    document.getElementById('sp-f-phone').value.trim(),
    web:      document.getElementById('sp-f-web').value.trim(),
    inn:      document.getElementById('sp-f-inn').value.trim(),
    bank:     document.getElementById('sp-f-bank').value.trim(),
    swift:    document.getElementById('sp-f-swift').value.trim(),
    acc:      document.getElementById('sp-f-acc').value.trim(),
    ifsc:     document.getElementById('sp-f-ifsc').value.trim(),
    currency: document.getElementById('sp-f-currency').value,
    rating:   parseInt(document.getElementById('sp-f-rating').value) || 3,
    leadtime:         document.getElementById('sp-f-leadtime').value.trim(),
    lead_time_days:   parseInt(document.getElementById('sp-f-lead-time-days').value) || 0,
    default_currency: document.getElementById('sp-f-default-currency').value || '',
    payment_terms:    document.getElementById('sp-f-payment-terms').value.trim(),
    notes:            document.getElementById('sp-f-notes').value.trim(),
  };
  let newId = null;
  if (editId) {
    const idx = suppliers.findIndex(x => x.id === editId);
    if (idx >= 0) suppliers[idx] = { ...suppliers[idx], ...data };
    newId = editId;
  } else {
    newId = Date.now();
    suppliers.push({ id: newId, ...data, history: [], created: new Date().toISOString().slice(0,10) });
  }
  spSave();
  document.getElementById('sp-add-form').style.display = 'none';
  renderSuppliers();
  // auto-expand the saved card
  setTimeout(() => {
    const el = document.getElementById('sp-card-' + newId);
    if (el) {
      el.classList.add('expanded');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 50);
}

function spDelete(id) {
  if (!confirm('Удалить контрагента? Это действие нельзя отменить.')) return;
  suppliers = suppliers.filter(s => s.id !== id);
  spSave(); renderSuppliers();
}

function spToggleExpand(id) {
  const el = document.getElementById('sp-card-'+id);
  if (el) el.classList.toggle('expanded');
}

function spAddHistory(id) {
  const po    = prompt('Номер поставки / PO:');
  if (!po) return;
  const amount = prompt('Сумма (например: 149,112 INR):') || '';
  const note   = prompt('Примечание:') || '';
  const s = suppliers.find(x => x.id === id);
  if (!s) return;
  if (!s.history) s.history = [];
  s.history.unshift({ date: new Date().toLocaleDateString('ru-RU'), po, amount, note });
  spSave(); renderSuppliers();
  setTimeout(() => {
    const el = document.getElementById('sp-card-'+id);
    if (el) el.classList.add('expanded');
  }, 50);
}

function renderSuppliers() {
  const query = (document.getElementById('sp-search')?.value||'').toLowerCase().trim();
  let list = suppliers.filter(s => {
    if (spTabFilter !== 'all' && s.type !== spTabFilter) return false;
    if (query) {
      const hay = [s.name,s.country,s.city,s.contact,s.email,s.phone,s.notes].join(' ').toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  const container = document.getElementById('sp-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="sp-empty">
      <div style="font-size:40px;margin-bottom:12px">🏢</div>
      <div style="font-size:16px;font-weight:300;margin-bottom:8px">${suppliers.length===0?'База контрагентов пуста':'Ничего не найдено'}</div>
      <div style="font-size:12px">${suppliers.length===0?'Нажмите «+ Добавить» чтобы внести первого контрагента':'Измените поисковый запрос или фильтр'}</div>
    </div>`;
    return;
  }

  container.innerHTML = list.map(s => {
    const t = SP_TYPES[s.type] || SP_TYPES.other;
    const colorIdx = Math.abs(s.name.charCodeAt(0) + (s.name.charCodeAt(1)||0)) % SP_COLORS.length;
    const color = SP_COLORS[colorIdx];
    const initials = s.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const stars = Array.from({length:5},(_,i)=>`<span class="sp-star ${i<s.rating?'filled':''}">★</span>`).join('');
    const histCount = (s.history||[]).length;

    const histHTML = histCount > 0 ? `
      <div style="margin-top:14px">
        <div style="font-size:10px;font-family:'Fira Code',monospace;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:8px">История поставок</div>
        ${(s.history||[]).map(h=>`
          <div class="sp-history-row">
            <span style="font-family:'Fira Code',monospace;font-size:10px;color:var(--text3);min-width:80px">${h.date}</span>
            <span style="font-family:'Fira Code',monospace;font-weight:600;color:var(--teal)">${h.po}</span>
            <span style="color:var(--text2)">${h.amount}</span>
            ${h.note?`<span style="color:var(--text3);font-style:italic">${h.note}</span>`:''}
          </div>`).join('')}
      </div>` : '';

    // ── Commercial terms block ──────────────────────────────────────
    const effectiveCurrency = s.default_currency || s.currency || '';
    const hasCommercial = s.payment_terms || s.lead_time_days || s.leadtime || effectiveCurrency;
    const commercialHTML = hasCommercial ? `
      <div class="sp-commercial-block">
        <div class="sp-block-title">Коммерческие условия</div>
        <div class="sp-commercial-grid">
          ${effectiveCurrency ? `
            <div class="sp-comm-item">
              <div class="sp-comm-label">Валюта (default_currency)</div>
              <div class="sp-comm-val">
                <span class="sp-currency-badge">${effectiveCurrency}</span>
                ${s.default_currency && s.currency && s.default_currency !== s.currency
                  ? `<span style="font-size:10px;color:var(--text3);margin-left:6px">расчёты: ${s.currency}</span>`
                  : ''}
              </div>
            </div>` : ''}
          ${(s.lead_time_days || s.leadtime) ? `
            <div class="sp-comm-item">
              <div class="sp-comm-label">Срок производства (lead_time_days)</div>
              <div class="sp-comm-val">
                ${s.lead_time_days ? `<span class="sp-comm-days">${s.lead_time_days} дн.</span>` : ''}
                ${s.leadtime ? `<span style="font-size:11px;color:var(--text3);margin-left:6px">${s.leadtime}</span>` : ''}
              </div>
            </div>` : ''}
          ${s.payment_terms ? `
            <div class="sp-comm-item sp-comm-wide">
              <div class="sp-comm-label">Условия оплаты (payment_terms)</div>
              <div class="sp-comm-val sp-comm-payment">${s.payment_terms}</div>
            </div>` : ''}
        </div>
      </div>` : '';

    // ── Bank details block ───────────────────────────────────────────
    const bankHTML = (s.bank||s.swift||s.acc) ? `
      <div class="sp-bank-block">
        <div class="sp-block-title">Банковские реквизиты</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;font-size:11px">
          ${s.bank ?`<div class="sp-bank-item"><span class="sp-bank-label">Банк</span><b>${s.bank}</b></div>`:''}
          ${s.swift?`<div class="sp-bank-item"><span class="sp-bank-label">SWIFT/BIC</span><b class="sp-mono">${s.swift}</b></div>`:''}
          ${s.acc  ?`<div class="sp-bank-item"><span class="sp-bank-label">Счёт</span><b class="sp-mono">${s.acc}</b></div>`:''}
          ${s.ifsc ?`<div class="sp-bank-item"><span class="sp-bank-label">IFSC/BIK</span><b class="sp-mono">${s.ifsc}</b></div>`:''}
          ${s.inn  ?`<div class="sp-bank-item"><span class="sp-bank-label">ИНН/VAT</span><b>${s.inn}</b></div>`:''}
          ${(s.currency && !effectiveCurrency)?`<div class="sp-bank-item"><span class="sp-bank-label">Валюта</span><b>${s.currency}</b></div>`:''}
        </div>
      </div>` : '';

    return `<div class="sp-card" id="sp-card-${s.id}" style="margin-bottom:12px">
      <div class="sp-card-head" onclick="spToggleExpand(${s.id})">
        <div class="sp-avatar" style="background:${color}">${initials}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div class="sp-card-name">${s.name}</div>
            <span class="sp-type-badge ${t.cls}">${t.icon} ${t.label}</span>
          </div>
          <div class="sp-card-sub">${[s.city,s.country].filter(Boolean).join(', ')}${s.contact?' · '+s.contact:''}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="sp-rating">${stars}</div>
          ${(s.lead_time_days||s.leadtime)?`<div class="sp-leadtime-badge">
            ⏱ ${s.lead_time_days ? s.lead_time_days+' дн.' : ''}${s.lead_time_days&&s.leadtime?' · ':''}${s.leadtime||''}
          </div>`:''}
          ${(s.default_currency||s.currency)?`<div style="margin-top:3px"><span class="sp-currency-badge" style="font-size:9px;padding:1px 7px">${s.default_currency||s.currency}</span></div>`:''}
        </div>
        <div style="color:var(--text3);font-size:12px;margin-left:8px">▾</div>
      </div>
      <div class="sp-card-body">
        <div class="sp-meta-grid">
          ${s.email?`<div class="sp-meta-item"><label>Email</label><span><a href="mailto:${s.email}" style="color:var(--teal)">${s.email}</a></span></div>`:''}
          ${s.phone?`<div class="sp-meta-item"><label>Телефон</label><span>${s.phone}</span></div>`:''}
          ${s.web?`<div class="sp-meta-item"><label>Сайт</label><span><a href="${s.web}" target="_blank" style="color:var(--teal)">${s.web.replace('https://','')}</a></span></div>`:''}
          ${s.addr?`<div class="sp-meta-item"><label>Адрес</label><span>${s.addr}</span></div>`:''}
          ${s.pos?`<div class="sp-meta-item"><label>Должность</label><span>${s.pos}</span></div>`:''}
        </div>
        ${s.notes?`<div style="padding:10px 12px;background:rgba(196,148,58,0.07);border:1px solid rgba(196,148,58,0.2);border-radius:6px;font-size:12px;color:var(--text2);font-style:italic">${s.notes}</div>`:''}
        ${commercialHTML}
        ${bankHTML}
        ${histHTML}
        <div class="sp-stat-row">
          <div class="sp-stat"><div class="sp-stat-n">${histCount}</div><div class="sp-stat-l">Поставок</div></div>
          <div style="flex:1"></div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="admin-action-btn" onclick="spAddHistory(${s.id});event.stopPropagation()">+ Поставка</button>
            <button class="admin-action-btn" onclick="spToggleAddForm(${s.id});event.stopPropagation()">✎ Изменить</button>
            <button class="admin-action-btn danger" onclick="spDelete(${s.id});event.stopPropagation()">× Удалить</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function exportSuppliersExcel() {
  if (suppliers.length === 0) { alert('База контрагентов пуста'); return; }
  const wb = XLSX.utils.book_new();
  const hdr = ['Название','Тип','Страна','Город','Адрес','Контакт','Должность','Email','Телефон','Сайт',
    'ИНН/VAT','Банк','SWIFT','Счёт','IFSC/BIK','Валюта','Рейтинг','Срок пр-ва','Примечания','Кол-во поставок'];
  const _coName1 = (COMPANIES[activeCompany]?.shortEn || 'SUPPLY CHAIN').toUpperCase();
  const rows = [
    ['БАЗА КОНТРАГЕНТОВ · '+_coName1+' · '+new Date().toLocaleDateString('ru-RU'),...Array(hdr.length-1).fill('')],
    hdr,
    ...suppliers.map(s => {
      const t = SP_TYPES[s.type]||SP_TYPES.other;
      return [s.name, t.icon+' '+t.label, s.country||'', s.city||'', s.addr||'', s.contact||'',
        s.pos||'', s.email||'', s.phone||'', s.web||'', s.inn||'', s.bank||'', s.swift||'',
        s.acc||'', s.ifsc||'', s.currency||'', '★'.repeat(s.rating||0), s.leadtime||'', s.notes||'',
        (s.history||[]).length];
    })
  ];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:28},{wch:16},{wch:12},{wch:14},{wch:28},{wch:18},{wch:16},{wch:24},{wch:16},{wch:24},
    {wch:14},{wch:20},{wch:12},{wch:20},{wch:14},{wch:8},{wch:10},{wch:14},{wch:32},{wch:14}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:hdr.length-1}}];
  if(ws['A1'])ws['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws[a])ws[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1C355E'}}};});
  XLSX.utils.book_append_sheet(wb, ws, 'Контрагенты');

  // Sheet 2: history
  const histHdr = ['Контрагент','Тип','Дата','№ PO','Сумма','Примечание'];
  const histRows = [['ИСТОРИЯ ПОСТАВОК',...Array(histHdr.length-1).fill('')], histHdr];
  suppliers.forEach(s => {
    (s.history||[]).forEach(h => histRows.push([s.name, SP_TYPES[s.type]?.label||'', h.date, h.po, h.amount, h.note||'']));
  });
  const ws2 = XLSX.utils.aoa_to_sheet(histRows);
  ws2['!cols']=[{wch:28},{wch:14},{wch:12},{wch:18},{wch:18},{wch:32}];
  ws2['!merges']=[{s:{r:0,c:0},e:{r:0,c:histHdr.length-1}}];
  if(ws2['A1'])ws2['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  histHdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws2[a])ws2[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'2B7A6F'}}};});
  XLSX.utils.book_append_sheet(wb, ws2, 'История поставок');
  XLSX.writeFile(wb, 'Контрагенты_'+new Date().toISOString().slice(0,10)+'.xlsx');
}

// ════════════════════════════════════════════
// ── CURRENCY CONVERTER ──
// ════════════════════════════════════════════

// Static fallback rates (ЦБ РФ / market rates — to be updated via API or manually)
const FX_CURRENCIES = [
  { code:'USD', flag:'🇺🇸', name:'Доллар США',    fallback: 89.50  },
  { code:'EUR', flag:'🇪🇺', name:'Евро',          fallback: 96.30  },
  { code:'CNY', flag:'🇨🇳', name:'Юань',          fallback: 12.35  },
  { code:'INR', flag:'🇮🇳', name:'Инд. рупия',    fallback: 1.065  },
  { code:'TRY', flag:'🇹🇷', name:'Лира тур.',     fallback: 2.63   },
  { code:'KZT', flag:'🇰🇿', name:'Тенге',         fallback: 0.189  },
  { code:'BYN', flag:'🇧🇾', name:'Бел. рубль',    fallback: 27.40  },
  { code:'GBP', flag:'🇬🇧', name:'Фунт стерл.',   fallback: 113.50 },
];

let fxRates = {};       // { USD: 89.5, EUR: 96.3, ... } — to RUB
let fxHistory = [];     // saved snapshots
let fxLoading = false;

function fxInit() {
  // Load saved history
  try { const s=localStorage.getItem('ved_fx_history'); if(s) fxHistory=JSON.parse(s); } catch(e) {}
  try { const s=localStorage.getItem('ved_fx_rates');   if(s) fxRates=JSON.parse(s);   } catch(e) {}

  // Use fallback if no saved rates
  if (Object.keys(fxRates).length === 0) {
    FX_CURRENCIES.forEach(c => { fxRates[c.code] = c.fallback; });
  }

  fxLoadRates();
  fxRenderRateCards();
  fxRenderManualInputs();
  fxRenderHistory();
  fxConvert();
}

async function fxLoadRates() {
  if (fxLoading) return;
  fxLoading = true;
  const updateEl = document.getElementById('fx-last-update');
  if (updateEl) updateEl.textContent = '⟳ загрузка...';

  try {
    // ЦБ РФ XML API — cross-origin, try via a CORS proxy or direct
    const codes = FX_CURRENCIES.map(c=>c.code).filter(c=>c!=='RUB');
    // Using exchangerate-api (free, no key needed for basic)
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/RUB', { signal: AbortSignal.timeout(6000) });
    if (res.ok) {
      const data = await res.json();
      // data.rates gives X/RUB, we need RUB/X = 1/rate
      codes.forEach(code => {
        if (data.rates[code]) fxRates[code] = parseFloat((1 / data.rates[code]).toFixed(4));
      });
      fxRates['_source'] = 'exchangerate-api.com';
      fxRates['_updated'] = new Date().toLocaleString('ru-RU');
      try { localStorage.setItem('ved_fx_rates', JSON.stringify(fxRates)); } catch(e) {}
      if (updateEl) updateEl.textContent = 'обновлено: ' + new Date().toLocaleTimeString('ru-RU');
    } else throw new Error('HTTP '+res.status);
  } catch(e) {
    // Fallback to CBR XML
    try {
      const res2 = await fetch('https://www.cbr.ru/scripts/XML_daily.asp', { signal: AbortSignal.timeout(5000) });
      if (res2.ok) {
        const text = await res2.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        xml.querySelectorAll('Valute').forEach(v => {
          const code = v.querySelector('CharCode')?.textContent;
          const nom  = parseFloat(v.querySelector('Nominal')?.textContent?.replace(',','.') || '1');
          const val  = parseFloat(v.querySelector('Value')?.textContent?.replace(',','.') || '0');
          if (code && val) fxRates[code] = parseFloat((val / nom).toFixed(4));
        });
        fxRates['_source'] = 'ЦБ РФ';
        fxRates['_updated'] = new Date().toLocaleString('ru-RU');
        try { localStorage.setItem('ved_fx_rates', JSON.stringify(fxRates)); } catch(e) {}
        if (updateEl) updateEl.textContent = 'ЦБ РФ: ' + new Date().toLocaleTimeString('ru-RU');
      }
    } catch(e2) {
      if (updateEl) updateEl.textContent = 'офлайн — данные из кэша';
    }
  }
  fxLoading = false;
  fxRenderRateCards();
  fxRenderManualInputs();
  fxConvert();
  fxRecalcContract();
}

function fxRenderRateCards() {
  const grid = document.getElementById('fx-rate-grid');
  if (!grid) return;
  grid.innerHTML = FX_CURRENCIES.map(c => {
    const rate = fxRates[c.code] || c.fallback;
    return `<div class="fx-rate-card" onclick="fxSelectForConvert('${c.code}')">
      <div class="fx-updated">${fxRates['_source']||'кэш'}</div>
      <div class="fx-flag">${c.flag}</div>
      <div class="fx-code">${c.code}</div>
      <div class="fx-name">${c.name}</div>
      <div class="fx-rate">${rate.toLocaleString('ru-RU',{minimumFractionDigits:2,maximumFractionDigits:4})}</div>
      <div style="font-size:9px;color:var(--text3);font-family:'Fira Code',monospace;margin-top:3px">1 ${c.code} = ${rate} ₽</div>
    </div>`;
  }).join('');
}

function fxSelectForConvert(code) {
  const fromEl = document.getElementById('fx-from');
  const toEl   = document.getElementById('fx-to');
  if (fromEl && toEl) {
    if (code !== 'RUB') { fromEl.value = code; toEl.value = 'RUB'; }
    else { fromEl.value = 'RUB'; toEl.value = 'USD'; }
    fxConvert();
  }
}

function fxConvert() {
  const amount = parseFloat(document.getElementById('fx-amount')?.value) || 0;
  const from   = document.getElementById('fx-from')?.value || 'USD';
  const to     = document.getElementById('fx-to')?.value   || 'RUB';
  const resultEl  = document.getElementById('fx-result');
  const detailEl  = document.getElementById('fx-conv-detail');
  if (!resultEl) return;

  // Convert via RUB as base
  const fromRate = from === 'RUB' ? 1 : (fxRates[from] || FX_CURRENCIES.find(c=>c.code===from)?.fallback || 1);
  const toRate   = to   === 'RUB' ? 1 : (fxRates[to]   || FX_CURRENCIES.find(c=>c.code===to)?.fallback   || 1);
  const amountRub = amount * fromRate;
  const result    = to === 'RUB' ? amountRub : amountRub / toRate;

  const symbols = {USD:'$',EUR:'€',CNY:'¥',INR:'₹',RUB:'₽',TRY:'₺',KZT:'₸',BYN:'Br',GBP:'£'};
  const sym = symbols[to] || to;

  resultEl.textContent = result.toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' ' + sym;
  if (detailEl) {
    const crossRate = (fromRate / toRate).toFixed(4);
    detailEl.textContent = `Курс: 1 ${from} = ${from==='RUB'?'—':fromRate} ₽  |  1 ${to} = ${to==='RUB'?'1':toRate} ₽  |  Кросс-курс: 1 ${from} = ${crossRate} ${to}`;
  }
}

function fxRenderManualInputs() {
  const el = document.getElementById('fx-manual-inputs');
  if (!el) return;
  el.innerHTML = FX_CURRENCIES.map(c => `
    <div class="field">
      <label>${c.flag} ${c.code} / ₽</label>
      <input id="fx-m-${c.code}" type="number" step="0.0001" value="${(fxRates[c.code]||c.fallback).toFixed(4)}" placeholder="${c.fallback}">
    </div>`).join('');
  // Set today's date
  const dateEl = document.getElementById('fx-manual-date');
  if (dateEl && !dateEl.value) dateEl.value = new Date().toISOString().slice(0,10);
}

function fxSetManual() {
  const f = document.getElementById('fx-manual-form');
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
}

function fxApplyManual() {
  FX_CURRENCIES.forEach(c => {
    const val = parseFloat(document.getElementById('fx-m-'+c.code)?.value);
    if (val > 0) fxRates[c.code] = val;
  });
  const dateVal = document.getElementById('fx-manual-date')?.value;
  fxRates['_source'] = 'вручную' + (dateVal ? ' от '+dateVal : '');
  fxRates['_updated'] = new Date().toLocaleString('ru-RU');
  try { localStorage.setItem('ved_fx_rates', JSON.stringify(fxRates)); } catch(e) {}
  document.getElementById('fx-manual-form').style.display = 'none';
  const upEl = document.getElementById('fx-last-update');
  if (upEl) upEl.textContent = 'введено вручную: ' + new Date().toLocaleTimeString('ru-RU');
  fxRenderRateCards(); fxConvert(); fxRecalcContract();
}

function fxRecalcContract() {
  const amount   = parseFloat(document.getElementById('fx-contract-amount')?.value) || 0;
  const currency = document.getElementById('fx-contract-currency')?.value || 'INR';
  const manualRate = parseFloat(document.getElementById('fx-contract-rate')?.value) || 0;
  const el = document.getElementById('fx-contract-result');
  if (!el || !amount) { if(el) el.innerHTML=''; return; }

  const autoRate  = fxRates[currency] || FX_CURRENCIES.find(c=>c.code===currency)?.fallback || 1;
  const rate      = manualRate > 0 ? manualRate : autoRate;
  const amountRub = amount * rate;

  // Also calc in USD and EUR for reference
  const usdRate = fxRates['USD'] || 89.5;
  const eurRate = fxRates['EUR'] || 96.3;
  const amountUsd = amountRub / usdRate;
  const amountEur = amountRub / eurRate;

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">
      <div style="background:var(--co-accent);color:white;border-radius:8px;padding:16px 18px">
        <div style="font-size:9px;font-family:'Fira Code',monospace;opacity:0.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">RUB ₽</div>
        <div style="font-family:'Fira Code',monospace;font-size:20px;font-weight:700">${Math.round(amountRub).toLocaleString('ru-RU')}</div>
        <div style="font-size:10px;opacity:0.6;margin-top:4px">по курсу ${rate} ₽/${currency}</div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:16px 18px">
        <div style="font-size:9px;font-family:'Fira Code',monospace;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">USD $</div>
        <div style="font-family:'Fira Code',monospace;font-size:20px;font-weight:700;color:var(--navy)">${amountUsd.toLocaleString('ru-RU',{minimumFractionDigits:0,maximumFractionDigits:0})}</div>
        <div style="font-size:10px;color:var(--text3);margin-top:4px">курс ${usdRate} ₽/USD</div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:16px 18px">
        <div style="font-size:9px;font-family:'Fira Code',monospace;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">EUR €</div>
        <div style="font-family:'Fira Code',monospace;font-size:20px;font-weight:700;color:var(--navy)">${amountEur.toLocaleString('ru-RU',{minimumFractionDigits:0,maximumFractionDigits:0})}</div>
        <div style="font-size:10px;color:var(--text3);margin-top:4px">курс ${eurRate} ₽/EUR</div>
      </div>
    </div>
    ${manualRate > 0 ? `<div style="margin-top:8px;font-size:10px;color:var(--gold);font-family:'Fira Code',monospace">⚠ Используется ручной курс ${manualRate} ₽/${currency} (авто: ${autoRate})</div>` : ''}`;
}

function fxSaveSnapshot() {
  const entry = {
    date: new Date().toLocaleDateString('ru-RU'),
    USD: fxRates['USD'] || '—', EUR: fxRates['EUR'] || '—',
    CNY: fxRates['CNY'] || '—', INR: fxRates['INR'] || '—',
    source: fxRates['_source'] || 'кэш',
  };
  fxHistory.unshift(entry);
  if (fxHistory.length > 60) fxHistory = fxHistory.slice(0,60);
  try { localStorage.setItem('ved_fx_history', JSON.stringify(fxHistory)); } catch(e) {}
  fxRenderHistory();
}

function fxRenderHistory() {
  const el = document.getElementById('fx-history-body');
  if (!el) return;
  if (fxHistory.length === 0) {
    el.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--text3);font-family:\'Fira Code\',monospace;font-size:11px">Нажмите «Сохранить курс дня» чтобы зафиксировать текущие курсы</td></tr>';
    return;
  }
  el.innerHTML = fxHistory.map((h,i) => `
    <tr>
      <td style="font-family:'Fira Code',monospace;font-size:11px">${h.date}</td>
      <td style="font-family:'Fira Code',monospace;font-weight:600">${h.USD}</td>
      <td style="font-family:'Fira Code',monospace;font-weight:600">${h.EUR}</td>
      <td style="font-family:'Fira Code',monospace;font-weight:600">${h.CNY}</td>
      <td style="font-family:'Fira Code',monospace;font-weight:600">${h.INR}</td>
      <td style="font-size:10px;color:var(--text3)">${h.source}</td>
      <td><button class="admin-action-btn danger" onclick="fxHistory.splice(${i},1);fxSaveHistoryOnly();fxRenderHistory()">×</button></td>
    </tr>`).join('');
}

function fxSaveHistoryOnly() {
  try { localStorage.setItem('ved_fx_history', JSON.stringify(fxHistory)); } catch(e) {}
}

function exportCurrencyExcel() {
  if (fxHistory.length === 0) { alert('Нет сохранённых курсов. Нажмите «Сохранить курс дня».'); return; }
  const wb = XLSX.utils.book_new();
  // Sheet 1: rate history
  const hdr = ['Дата','USD/₽','EUR/₽','CNY/₽','INR/₽','Источник'];
  const _coName4 = (COMPANIES[activeCompany]?.shortEn || 'SUPPLY CHAIN').toUpperCase();
  const rows = [['ИСТОРИЯ КУРСОВ ЦБ РФ · '+_coName4,...Array(hdr.length-1).fill('')], hdr,
    ...fxHistory.map(h=>[h.date, h.USD, h.EUR, h.CNY, h.INR, h.source])];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:14},{wch:12},{wch:12},{wch:12},{wch:12},{wch:18}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:hdr.length-1}}];
  if(ws['A1'])ws['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws[a])ws[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'B85C3A'}}};});
  XLSX.utils.book_append_sheet(wb, ws, 'История курсов');

  // Sheet 2: current rates
  const curHdr = ['Валюта','Название','Курс к ₽','Обновлено'];
  const curRows = [['ТЕКУЩИЕ КУРСЫ',...Array(curHdr.length-1).fill('')], curHdr,
    ...FX_CURRENCIES.map(c => [c.code+' '+c.flag, c.name, fxRates[c.code]||c.fallback, fxRates['_updated']||'—'])];
  const ws2 = XLSX.utils.aoa_to_sheet(curRows);
  ws2['!cols']=[{wch:12},{wch:20},{wch:14},{wch:24}];
  ws2['!merges']=[{s:{r:0,c:0},e:{r:0,c:curHdr.length-1}}];
  if(ws2['A1'])ws2['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  curHdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws2[a])ws2[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'2B7A6F'}}};});
  XLSX.utils.book_append_sheet(wb, ws2, 'Текущие курсы');
  XLSX.writeFile(wb, 'Курсы_валют_'+new Date().toISOString().slice(0,10)+'.xlsx');
}


// ════════════════════════════════════════════
// ── PACKING LIST ──
// ════════════════════════════════════════════

let plRows = [];

// Default units for packing list
const PL_UNITS = ['Mtrs','Pcs','Kgs','Sets','Rolls','Coils','Drums','Cartons'];

function plInit() {
  if (plRows.length === 0) plAddRow();
  plRenderTable();
  plUpdateSummary();
  // Sync date from invoice
  const invDate = document.getElementById('i-date')?.value;
  if (invDate && !document.getElementById('pl-date')?.value) {
    document.getElementById('pl-date').value = invDate;
    document.getElementById('pl-sign-date').value = invDate;
  }
}

function plAddRow(data) {
  plRows.push({
    desc:   data?.desc   || '',
    qty:    data?.qty    || 0,
    unit:   data?.unit   || 'Mtrs',
    net:    data?.net    || 0,
    gross:  data?.gross  || 0,
    vol:    data?.vol    || 0,
    pkgs:   data?.pkgs   || 0,
  });
  plRenderTable();
  plCalcTotals();
}

function plRenderTable() {
  const tbody = document.getElementById('pl-goods-body');
  if (!tbody) return;
  tbody.innerHTML = plRows.map((r, i) => `
    <tr>
      <td style="text-align:center;color:var(--text3);font-family:'Fira Code',monospace;font-size:11px">${i+1}</td>
      <td><input value="${r.desc}" placeholder="Наименование товара..." onchange="plRows[${i}].desc=this.value" style="min-width:220px"></td>
      <td><input type="number" value="${r.qty||''}" placeholder="0" style="width:72px;text-align:right" onchange="plRows[${i}].qty=parseFloat(this.value)||0;plCalcTotals()"></td>
      <td>
        <select onchange="plRows[${i}].unit=this.value" style="padding:4px 6px;border:1px solid transparent;background:transparent;font-size:12px;width:70px;cursor:pointer">
          ${PL_UNITS.map(u=>`<option ${r.unit===u?'selected':''}>${u}</option>`).join('')}
        </select>
      </td>
      <td><input type="number" value="${r.net||''}" placeholder="0.00" step="0.01" style="width:84px;text-align:right" onchange="plRows[${i}].net=parseFloat(this.value)||0;plCalcTotals()"></td>
      <td><input type="number" value="${r.gross||''}" placeholder="0.00" step="0.01" style="width:84px;text-align:right" onchange="plRows[${i}].gross=parseFloat(this.value)||0;plCalcTotals()"></td>
      <td><input type="number" value="${r.vol||''}" placeholder="0.000" step="0.001" style="width:76px;text-align:right" onchange="plRows[${i}].vol=parseFloat(this.value)||0;plCalcTotals()"></td>
      <td><input type="number" value="${r.pkgs||''}" placeholder="0" style="width:60px;text-align:right" onchange="plRows[${i}].pkgs=parseFloat(this.value)||0;plCalcTotals()"></td>
      <td><button class="del-btn" onclick="plRows.splice(${i},1);plRenderTable();plCalcTotals()">×</button></td>
    </tr>`).join('');
}

function plCalcTotals() {
  const totQty   = plRows.reduce((s,r)=>s+(r.qty||0),0);
  const totNet   = plRows.reduce((s,r)=>s+(r.net||0),0);
  const totGross = plRows.reduce((s,r)=>s+(r.gross||0),0);
  const totVol   = plRows.reduce((s,r)=>s+(r.vol||0),0);
  const totPkgs  = plRows.reduce((s,r)=>s+(r.pkgs||0),0);

  const fmtN = n => n ? n.toLocaleString('ru-RU',{minimumFractionDigits:2,maximumFractionDigits:3}) : '—';
  const fmtI = n => n ? n.toLocaleString('ru-RU') : '—';

  const tfoot = document.getElementById('pl-goods-total');
  if (tfoot && plRows.length > 0) {
    tfoot.style.display = '';
    document.getElementById('plt-qty').textContent   = fmtI(totQty);
    document.getElementById('plt-net').textContent   = fmtN(totNet);
    document.getElementById('plt-gross').textContent = fmtN(totGross);
    document.getElementById('plt-vol').textContent   = fmtN(totVol);
    document.getElementById('plt-pkgs').textContent  = fmtI(totPkgs);
  }

  // Auto-fill totals if blank
  const netEl   = document.getElementById('pl-net-total');
  const grossEl = document.getElementById('pl-gross-total');
  const volEl   = document.getElementById('pl-vol-total');
  const pkgsEl  = document.getElementById('pl-total-pkgs');
  if (netEl   && !netEl.dataset.manual   && totNet)   netEl.value   = totNet.toFixed(2);
  if (grossEl && !grossEl.dataset.manual && totGross) grossEl.value = totGross.toFixed(2);
  if (volEl   && !volEl.dataset.manual   && totVol)   volEl.value   = totVol.toFixed(3);
  if (pkgsEl  && !pkgsEl.dataset.manual  && totPkgs)  pkgsEl.value  = totPkgs;

  // Mark manual if user edits
  [netEl, grossEl, volEl, pkgsEl].forEach(el => {
    if (el) el.addEventListener('input', function(){ this.dataset.manual='1'; }, {once:true});
  });

  plUpdateSummary();
}

function plUpdateSummary() {
  const pkgs  = document.getElementById('pl-total-pkgs')?.value  || '—';
  const net   = document.getElementById('pl-net-total')?.value   || '—';
  const gross = document.getElementById('pl-gross-total')?.value || '—';
  const vol   = document.getElementById('pl-vol-total')?.value   || '—';
  const el = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v||'—'; };
  el('pls-pkgs',  pkgs  !== '—' ? parseFloat(pkgs).toLocaleString('ru-RU')  : '—');
  el('pls-net',   net   !== '—' ? parseFloat(net).toFixed(2)   : '—');
  el('pls-gross', gross !== '—' ? parseFloat(gross).toFixed(2) : '—');
  el('pls-vol',   vol   !== '—' ? parseFloat(vol).toFixed(3)   : '—');
}

// Import positions from Invoice
function plImportFromInvoice() {
  if (!invRows || invRows.length === 0) {
    alert('Инвойс пуст. Сначала заполните товары в разделе 03 «Инвойс».'); return;
  }
  // Sync header fields
  const syncPairs = [
    ['i-num',        'pl-inv-ref'],
    ['i-date',       'pl-date'],
    ['i-date',       'pl-sign-date'],
    ['i-exporter',   'pl-shipper'],
    ['i-consignee',  'pl-consignee'],
    ['i-pol',        'pl-pol'],
    ['i-pod',        'pl-pod'],
    ['i-origin',     'pl-origin'],
    ['i-dest',       'pl-dest'],
    ['i-hs',         'pl-hs'],
  ];
  syncPairs.forEach(([from, to]) => {
    const fromEl = document.getElementById(from);
    const toEl   = document.getElementById(to);
    if (fromEl && toEl && fromEl.value) toEl.value = fromEl.value;
  });
  // Auto-number packing list
  const invNum = document.getElementById('i-num')?.value || '';
  const plNumEl = document.getElementById('pl-num');
  if (plNumEl && invNum) plNumEl.value = invNum.replace('INV','PL').replace('inv','pl') || 'PL/' + invNum;

  // Import rows (add qty and desc, leave physical params blank for user to fill)
  const existing = plRows.map(r=>r.desc.trim()).filter(Boolean);
  let added = 0;
  invRows.forEach(r => {
    if (!r.desc) return;
    if (!existing.includes(r.desc.trim())) {
      plRows.push({ desc: r.desc, qty: r.qty, unit: 'Mtrs', net: 0, gross: 0, vol: 0, pkgs: 0 });
      added++;
    }
  });

  if (added > 0) {
    plRenderTable();
    plCalcTotals();
    alert(`✅ Импортировано ${added} позиций из Инвойса.\nДобавьте вес нетто/брутто и объём для каждой позиции.`);
  } else {
    alert('Все позиции из Инвойса уже присутствуют в Упаковочном листе.');
  }
}

function generatePackingList() {
  const num        = document.getElementById('pl-num').value;
  const date       = document.getElementById('pl-date').value;
  const invRef     = document.getElementById('pl-inv-ref').value;
  const shipper    = document.getElementById('pl-shipper').value;
  const consignee  = document.getElementById('pl-consignee').value;
  const origin     = document.getElementById('pl-origin').value;
  const dest       = document.getElementById('pl-dest').value;
  const mode       = document.getElementById('pl-mode').value;
  const pol        = document.getElementById('pl-pol').value;
  const pod        = document.getElementById('pl-pod').value;
  const inco       = document.getElementById('pl-inco').value;
  const hs         = document.getElementById('pl-hs').value;
  const forwarder  = document.getElementById('pl-forwarder').value;
  const pkgType    = document.getElementById('pl-pkg-type').value;
  const totalPkgs  = document.getElementById('pl-total-pkgs').value;
  const netTotal   = document.getElementById('pl-net-total').value;
  const grossTotal = document.getElementById('pl-gross-total').value;
  const volTotal   = document.getElementById('pl-vol-total').value;
  const dims       = document.getElementById('pl-dims').value;
  const marks      = document.getElementById('pl-marks').value;
  const notes      = document.getElementById('pl-notes').value;
  const signer     = document.getElementById('pl-signer').value;
  const signPlace  = document.getElementById('pl-sign-place').value;
  const signDate   = document.getElementById('pl-sign-date').value;

  const fmtDate = d => { if(!d) return ''; const p=d.split('-'); return `${p[2]}.${p[1]}.${p[0]}`; };
  const fmtN    = n => parseFloat(n||0).toLocaleString('en-US',{minimumFractionDigits:3,maximumFractionDigits:3});
  const fmtQ    = n => parseFloat(n||0).toLocaleString('en-US');

  // Rows html
  const rowsHtml = plRows.filter(r=>r.desc).map((r,i) => `
    <tr>
      <td>${i+1}</td>
      <td>${r.desc}</td>
      <td style="text-align:right">${fmtQ(r.qty)}</td>
      <td>${r.unit}</td>
      <td style="text-align:right">${fmtN(r.net)}</td>
      <td style="text-align:right">${fmtN(r.gross)}</td>
      <td style="text-align:right">${fmtN(r.vol)}</td>
      <td style="text-align:right">${r.pkgs||''}</td>
    </tr>`).join('');

  const totNet   = plRows.reduce((s,r)=>s+(r.net||0),0);
  const totGross = plRows.reduce((s,r)=>s+(r.gross||0),0);
  const totVol   = plRows.reduce((s,r)=>s+(r.vol||0),0);
  const totPkgs  = plRows.reduce((s,r)=>s+(r.pkgs||0),0);
  const totQty   = plRows.reduce((s,r)=>s+(r.qty||0),0);

  const marksHtml = marks ? `<div style="white-space:pre-line;font-family:'Courier New',monospace;font-size:11px;padding:12px 14px;background:#f7f5f0;border:1px solid #ddd;border-left:3px solid #0B1F3A;border-radius:0 4px 4px 0;display:inline-block;min-width:180px">${marks}</div>` : '<span style="color:#aaa;font-style:italic">не указана</span>';

  const html = `
    <div class="pl-preview" id="pl-doc">
      <div class="doc-header">
        <div>
          <div class="doc-title">PACKING LIST</div>
          <div class="doc-sub">Упаковочный лист</div>
          <div style="margin-top:16px">
            <div class="info-label">PL No. / Номер</div>
            <div class="info-val" style="font-family:'Courier New',monospace;font-weight:700">${num}</div>
          </div>
          <div style="margin-top:10px">
            <div class="info-label">Date / Дата</div>
            <div class="info-val">${fmtDate(date)}</div>
          </div>
          ${invRef ? `<div style="margin-top:10px"><div class="info-label">Ref. Invoice No.</div><div class="info-val" style="font-family:'Courier New',monospace">${invRef}</div></div>` : ''}
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:#8a8a8a;margin-bottom:6px">SHIPPER / ПРОДАВЕЦ</div>
          <div style="font-size:12px;font-weight:600;color:#0B1F3A">${shipper}</div>
          <div style="margin-top:16px;font-size:11px;color:#8a8a8a;margin-bottom:6px">CONSIGNEE / ГРУЗОПОЛУЧАТЕЛЬ</div>
          <div style="font-size:12px;font-weight:600;color:#0B1F3A">${consignee}</div>
        </div>
      </div>

      <!-- Routing grid -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        <tr style="background:#f0ede6">
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">Mode of Transport</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">Port of Loading</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">Port of Discharge</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">Incoterms</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">Country of Origin</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1px">HS Code</td>
        </tr>
        <tr>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600">${mode}</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600">${pol||'—'}</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600">${pod||'—'}</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600">${inco}</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600">${origin}</td>
          <td style="padding:8px 10px;border:1px solid #ddd;font-weight:600;font-family:'Courier New',monospace">${hs}</td>
        </tr>
      </table>

      <!-- Goods table -->
      <table>
        <thead>
          <tr>
            <th style="width:30px">#</th>
            <th>Description of Goods</th>
            <th style="text-align:right">Quantity</th>
            <th style="width:50px">Unit</th>
            <th style="text-align:right">Net Wt, kg</th>
            <th style="text-align:right">Gross Wt, kg</th>
            <th style="text-align:right">Volume, m³</th>
            <th style="text-align:right">Pkgs</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
        <tfoot>
          <tr class="pl-total-row">
            <td colspan="2"><b>TOTAL</b></td>
            <td style="text-align:right"><b>${fmtQ(totQty)}</b></td>
            <td></td>
            <td style="text-align:right"><b>${fmtN(netTotal||totNet)}</b></td>
            <td style="text-align:right"><b>${fmtN(grossTotal||totGross)}</b></td>
            <td style="text-align:right"><b>${fmtN(volTotal||totVol)}</b></td>
            <td style="text-align:right"><b>${totalPkgs||totPkgs}</b></td>
          </tr>
        </tfoot>
      </table>

      <!-- Package summary -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:24px">
        <div>
          <div class="info-label" style="margin-bottom:8px">Cargo Summary / Параметры груза</div>
          <table style="width:100%;font-size:11px">
            <tr><td style="padding:4px 0;color:#666">Количество мест / No. of Packages:</td><td style="font-weight:700;font-family:'Courier New',monospace;text-align:right">${totalPkgs||totPkgs} ${pkgType}</td></tr>
            <tr><td style="padding:4px 0;color:#666">Вес нетто / Net Weight:</td><td style="font-weight:700;font-family:'Courier New',monospace;text-align:right">${fmtN(netTotal||totNet)} KGS</td></tr>
            <tr><td style="padding:4px 0;color:#666">Вес брутто / Gross Weight:</td><td style="font-weight:700;font-family:'Courier New',monospace;text-align:right">${fmtN(grossTotal||totGross)} KGS</td></tr>
            <tr><td style="padding:4px 0;color:#666">Объём / Volume:</td><td style="font-weight:700;font-family:'Courier New',monospace;text-align:right">${fmtN(volTotal||totVol)} CBM</td></tr>
            ${dims ? `<tr><td style="padding:4px 0;color:#666">Размеры места / Dimensions:</td><td style="font-weight:700;font-family:'Courier New',monospace;text-align:right">${dims} cm</td></tr>` : ''}
            ${forwarder ? `<tr><td style="padding:4px 0;color:#666">Forwarder:</td><td style="font-weight:700;text-align:right">${forwarder}</td></tr>` : ''}
          </table>
        </div>
        <div>
          <div class="info-label" style="margin-bottom:8px">Shipping Marks / Маркировка</div>
          ${marksHtml}
          ${notes ? `<div style="margin-top:12px"><div class="info-label" style="margin-bottom:6px">Special Instructions</div><div style="font-size:11px;color:#333;white-space:pre-line">${notes}</div></div>` : ''}
        </div>
      </div>

      <!-- Signature -->
      <div style="margin-top:36px;padding-top:20px;border-top:1px solid #e0dbd0;display:grid;grid-template-columns:1fr 1fr;gap:24px">
        <div>
          <div style="font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:24px">Certified by / Подписано</div>
          <div style="border-top:1px solid #0B1F3A;padding-top:8px;font-size:11px">
            <div style="font-weight:600">${signer}</div>
            <div style="color:#666;margin-top:2px">${signPlace}, ${fmtDate(signDate)}</div>
          </div>
        </div>
        <div>
          <div style="font-size:10px;color:#8a8a8a;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:24px">Company Stamp / Печать</div>
          <div style="border:1px dashed #ccc;height:60px;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:11px">Место для печати</div>
        </div>
      </div>
    </div>`;

  document.getElementById('pl-preview-area').innerHTML = html;
  document.getElementById('pl-preview-area').scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ── Excel Export ──
function plExportExcel() {
  if (plRows.filter(r=>r.desc).length === 0) { alert('Добавьте позиции товара'); return; }
  generatePackingList();

  const num     = document.getElementById('pl-num').value;
  const date    = document.getElementById('pl-date').value;
  const invRef  = document.getElementById('pl-inv-ref').value;
  const shipper = document.getElementById('pl-shipper').value;
  const cons    = document.getElementById('pl-consignee').value;
  const pol     = document.getElementById('pl-pol').value;
  const pod     = document.getElementById('pl-pod').value;
  const inco    = document.getElementById('pl-inco').value;
  const hs      = document.getElementById('pl-hs').value;
  const mode    = document.getElementById('pl-mode').value;
  const marks   = document.getElementById('pl-marks').value;
  const pkgType = document.getElementById('pl-pkg-type').value;
  const netTot  = document.getElementById('pl-net-total').value;
  const grossTot= document.getElementById('pl-gross-total').value;
  const volTot  = document.getElementById('pl-vol-total').value;
  const pkgsTot = document.getElementById('pl-total-pkgs').value;
  const dims    = document.getElementById('pl-dims').value;
  const signer  = document.getElementById('pl-signer').value;
  const fmtDate = d => { if(!d) return ''; const p=d.split('-'); return `${p[2]}.${p[1]}.${p[0]}`; };

  const wb = XLSX.utils.book_new();
  const hdr = ['#','Описание товара / Description','Кол-во / Quantity','Ед. изм.','Нетто, кг','Брутто, кг','Объём, м³','Мест / Pkgs'];

  const totNet   = plRows.reduce((s,r)=>s+(r.net||0),0);
  const totGross = plRows.reduce((s,r)=>s+(r.gross||0),0);
  const totVol   = plRows.reduce((s,r)=>s+(r.vol||0),0);
  const totPkgs  = plRows.reduce((s,r)=>s+(r.pkgs||0),0);
  const totQty   = plRows.reduce((s,r)=>s+(r.qty||0),0);

  const rows = [
    [`PACKING LIST / УПАКОВОЧНЫЙ ЛИСТ`,...Array(hdr.length-1).fill('')],
    [`PL No.: ${num}`,`Date: ${fmtDate(date)}`,`Inv. Ref.: ${invRef}`,...Array(hdr.length-3).fill('')],
    [`Shipper: ${shipper}`,...Array(hdr.length-1).fill('')],
    [`Consignee: ${cons}`,...Array(hdr.length-1).fill('')],
    [`Mode: ${mode}`,`POL: ${pol}`,`POD: ${pod}`,`Incoterms: ${inco}`,`HS: ${hs}`,...Array(hdr.length-5).fill('')],
    [],
    hdr,
    ...plRows.filter(r=>r.desc).map((r,i)=>[i+1, r.desc, r.qty, r.unit, r.net||0, r.gross||0, r.vol||0, r.pkgs||0]),
    [],
    ['ИТОГО / TOTAL','', totQty, '', parseFloat(netTot||totNet)||0, parseFloat(grossTot||totGross)||0, parseFloat(volTot||totVol)||0, parseInt(pkgsTot||totPkgs)||0],
    [],
    [`Упаковка: ${pkgType}`, dims?`Размеры: ${dims}`:'', `Подписано: ${signer}`,...Array(hdr.length-3).fill('')],
    [`Маркировка: ${marks}`,...Array(hdr.length-1).fill('')],
  ];

  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:4},{wch:42},{wch:14},{wch:10},{wch:13},{wch:13},{wch:12},{wch:10}];

  // Merge title row
  ws['!merges'] = [
    {s:{r:0,c:0},e:{r:0,c:hdr.length-1}},
    {s:{r:2,c:0},e:{r:2,c:hdr.length-1}},
    {s:{r:3,c:0},e:{r:3,c:hdr.length-1}},
  ];

  if (ws['A1']) ws['A1'].s = {font:{bold:true,sz:14,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci) => {
    const a = XLSX.utils.encode_cell({r:6,c:ci});
    if (ws[a]) ws[a].s = {font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1C355E'}},alignment:{horizontal:'center',wrapText:true}};
  });
  // Total row
  const totRow = 6 + plRows.filter(r=>r.desc).length + 2;
  hdr.forEach((_,ci) => {
    const a = XLSX.utils.encode_cell({r:totRow,c:ci});
    if (ws[a]) ws[a].s = {font:{bold:true},fill:{fgColor:{rgb:'EBF0FA'}}};
  });

  XLSX.utils.book_append_sheet(wb, ws, 'Packing List');
  XLSX.writeFile(wb, `PackingList_${num.replace(/\//g,'-')}_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// ── Word Export (uses docx skill approach via HTML blob) ──
function plExportWord() {
  generatePackingList();
  const previewEl = document.getElementById('pl-doc');
  if (!previewEl) { alert('Сначала сформируйте упаковочный лист'); return; }

  const num = document.getElementById('pl-num').value;
  const htmlContent = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <style>
      body{font-family:Arial,sans-serif;font-size:11pt;margin:2cm;}
      table{width:100%;border-collapse:collapse;margin:12pt 0;font-size:10pt;}
      th{background:#0B1F3A;color:white;padding:6pt 8pt;text-align:left;}
      td{padding:5pt 8pt;border-bottom:1pt solid #ddd;}
      tr:nth-child(even) td{background:#f9f8f5;}
      .total-row td{font-weight:bold;background:#eee;border-top:2pt solid #0B1F3A;}
      h1{color:#0B1F3A;font-size:18pt;margin-bottom:4pt;}
      .sub{color:#888;font-size:9pt;letter-spacing:2pt;text-transform:uppercase;}
      .grid{display:grid;grid-template-columns:1fr 1fr;gap:20pt;margin-bottom:16pt;}
      .lbl{font-size:8pt;text-transform:uppercase;color:#888;letter-spacing:1.5pt;margin-bottom:3pt;}
      .val{font-size:10pt;color:#111;}
      @page{margin:2cm;}
    
</style></head><body>
    ${previewEl.outerHTML}
    </body></html>`;

  const blob = new Blob([htmlContent], {type:'application/msword;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `PackingList_${num.replace(/\//g,'-')}.doc`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
}


// ════════════════════════════════════════════
// ── BUDGET CONTROL ──
// ════════════════════════════════════════════

let budgets = []; // array of budget objects keyed by po

// Cost line item template
const BG_LINES = {
  goods: [
    { id:'goods_invoice',    label:'Стоимость товара по инвойсу',  group:'goods' },
    { id:'goods_addon',      label:'Доп. согласованные позиции',   group:'goods' },
  ],
  logistics: [
    { id:'log_freight',      label:'Фрахт / Freight',              group:'logistics' },
    { id:'log_origin',       label:'Сборы в порту отправления',    group:'logistics' },
    { id:'log_dest',         label:'Сборы в порту назначения',     group:'logistics' },
    { id:'log_inland',       label:'Внутренняя доставка (финал)',  group:'logistics' },
    { id:'log_insurance',    label:'Страхование груза',            group:'logistics' },
    { id:'log_other',        label:'Прочие логистические расходы', group:'logistics' },
  ],
  customs: [
    { id:'cus_duty',         label:'Ввозная таможенная пошлина',   group:'customs' },
    { id:'cus_vat',          label:'НДС при ввозе (22%)',          group:'customs' },
    { id:'cus_fee',          label:'Таможенный сбор за оформление',group:'customs' },
    { id:'cus_broker',       label:'Услуги таможенного брокера',   group:'customs' },
    { id:'cus_cert',         label:'Сертификация / разрешения',    group:'customs' },
    { id:'cus_other',        label:'Прочие таможенные расходы',    group:'customs' },
  ],
  other: [
    { id:'oth_bank',         label:'Банковские комиссии и конвертация', group:'other' },
    { id:'oth_storage',      label:'Хранение / складские расходы', group:'other' },
    { id:'oth_inspect',      label:'Инспекция / сюрвей',           group:'other' },
    { id:'oth_misc',         label:'Прочие непредвиденные расходы',group:'other' },
  ],
};

const BG_GROUP_LABELS = {
  goods:     { title:'Стоимость товара',   color:'var(--teal)'  },
  logistics: { title:'Логистика',          color:'var(--blue)'  },
  customs:   { title:'Таможня и налоги',   color:'var(--rust)'  },
  other:     { title:'Прочие расходы',     color:'var(--gold)'  },
};

function bgLoad() {
  try { const s=localStorage.getItem('ved_budgets'); if(s) budgets=JSON.parse(s); } catch(e) {}
}

function bgSave() {
  try { localStorage.setItem('ved_budgets', JSON.stringify(budgets)); } catch(e) {}
}

function bgNewBudget() {
  const po = prompt('Введите номер поставки / PO:');
  if (!po) return;
  if (budgets.find(b=>b.po===po)) { alert('Бюджет для '+po+' уже существует'); return; }
  const supplier = prompt('Поставщик (необязательно):') || '';
  const cargo    = prompt('Описание груза (необязательно):') || '';
  bgCreateBudget(po, supplier, cargo);
}

function bgCreateBudget(po, supplier, cargo, prefill) {
  const lines = {};
  Object.values(BG_LINES).flat().forEach(l => {
    lines[l.id] = { plan: prefill?.[l.id] || 0, fact: 0, note: '' };
  });
  budgets.push({ po, supplier: supplier||'', cargo: cargo||'', lines, qty: 0, unit: '', expanded: true, created: new Date().toISOString().slice(0,10), company: activeCompany });
  bgSave();
  renderBudgets();
}

// Called from addEvent: records fact amount in the matching budget line
function bgLinkEventToBudget(po, lineId, amount) {
  if (!po || !lineId || !amount) return;
  let b = budgets.find(x => x.po === po);
  if (!b) {
    // Auto-create budget skeleton so fact can be recorded
    const s = shipments.find(x => x.po === po);
    bgCreateBudget(po, s ? s.supplier||'' : '', s ? s.cargo||'' : '', {});
    b = budgets.find(x => x.po === po);
  }
  if (!b || !b.lines[lineId]) return;
  b.lines[lineId].fact = (b.lines[lineId].fact || 0) + amount;
  bgSave();
}

function bgSyncFromTracker() {
  if (!shipments || shipments.length === 0) { alert('Нет поставок в Трекере. Добавьте поставки в раздел 05.'); return; }
  let added = 0, synced = 0;
  shipments.forEach(s => {
    if (!s.po) return;
    if (!budgets.find(b => b.po === s.po)) {
      // Parse value from tracker (could be "149,112 INR" or raw number)
      const rawVal = s.value || '';
      const numVal = parseFloat(rawVal.replace(/[^0-9.]/g,'')) || 0;
      // Rough prefill: goods = invoice value (as-is, user adjusts currency)
      bgCreateBudget(s.po, s.supplier||'', s.cargo||'', { goods_invoice: numVal });
      added++;
    }
    // Re-calculate fact values from events that have linked amounts
    const b = budgets.find(x => x.po === s.po);
    if (b && s.events && s.events.length) {
      const eventFacts = {};
      s.events.forEach(ev => {
        if (ev.amount && ev.budgetLine && b.lines[ev.budgetLine]) {
          eventFacts[ev.budgetLine] = (eventFacts[ev.budgetLine] || 0) + ev.amount;
        }
      });
      Object.keys(eventFacts).forEach(lineId => {
        if (b.lines[lineId] && b.lines[lineId].fact !== eventFacts[lineId]) {
          b.lines[lineId].fact = eventFacts[lineId];
          synced++;
        }
      });
    }
  });
  bgSave();
  renderBudgets();
  let msg = '';
  if (added > 0) msg += 'Импортировано ' + added + ' поставок из Трекера. ';
  if (synced > 0) msg += 'Обновлено ' + synced + ' строк факта из событий. ';
  if (!msg) msg = 'Все поставки актуальны — изменений нет.';
  alert(msg.trim());
}

// ════════════════════════════════════════════════════════════════
// ЯНДЕКС ДИСК — хранилище сканов документов
// ════════════════════════════════════════════════════════════════

const YD_API = 'https://cloud-api.yandex.net/v1/disk';

function ydToken()    { return localStorage.getItem('ved_yd_token') || ''; }
function ydClientId() { return localStorage.getItem('ved_yd_client_id') || ''; }
function ydFolder()   { return (localStorage.getItem('ved_yd_folder') || 'ВЭД Система').trim(); }

// ── OAuth connect ──────────────────────────────────────────────
// Яндекс использует redirect_uri = https://oauth.yandex.ru/verification_code
// После авторизации Яндекс показывает токен на своей странице — пользователь копирует его.
function ydConnect() {
  const clientId = ydClientId();
  if (!clientId) { alert('Введите Client ID приложения Яндекс OAuth и сохраните страницу.'); return; }
  const scope = encodeURIComponent('cloud_api:disk.read cloud_api:disk.write cloud_api:disk.info');
  const url = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientId}&scope=${scope}&force_confirm=yes`;
  window.open(url, '_blank', 'width=660,height=720,noopener');
  setTimeout(() => {
    const token = prompt(
      '📋 Инструкция:\n\n' +
      '1. В открывшемся окне Яндекса войдите в корпоративный аккаунт\n' +
      '2. Нажмите «Разрешить»\n' +
      '3. Яндекс покажет токен на экране — скопируйте его\n' +
      '   (или скопируйте значение access_token= из адресной строки)\n\n' +
      'Вставьте токен сюда:'
    );
    if (token && token.trim().length > 10) {
      // Strip "access_token=" prefix if user copied from URL
      const clean = token.trim().replace(/^.*access_token=/,'').split('&')[0];
      localStorage.setItem('ved_yd_token', clean);
      ydCheckStatus();
    }
  }, 1500);
}

function ydTokenInputChanged(val) {
  const clean = val.trim().replace(/^.*access_token=/,'').split('&')[0];
  if (clean.length > 10) {
    localStorage.setItem('ved_yd_token', clean);
  }
}

function ydToggleTokenVisible() {
  const el = document.getElementById('yd-token-input');
  if (el) el.type = el.type === 'password' ? 'text' : 'password';
}

function ydDisconnect() {
  if (!confirm('Отключить Яндекс Диск? Загруженные файлы останутся на Диске.')) return;
  localStorage.removeItem('ved_yd_token');
  const inp = document.getElementById('yd-token-input');
  if (inp) inp.value = '';
  ydUpdateStatusUI(false, '', '');
}

// ── Check token validity ───────────────────────────────────────
async function ydCheckStatus() {
  const token = ydToken();
  if (!token) { ydUpdateStatusUI(false, 'Нет токена', ''); return; }
  try {
    const res = await fetch(YD_API + '/', { headers: { Authorization: 'OAuth ' + token } });
    if (res.ok) {
      const data = await res.json();
      const login = data.login || data.user?.login || '';
      const used  = data.used_space ? Math.round(data.used_space / 1024 / 1024) + ' МБ' : '';
      ydUpdateStatusUI(true, 'Подключено', login + (used ? ' · ' + used + ' использовано' : ''));
    } else {
      ydUpdateStatusUI(false, 'Ошибка авторизации (код ' + res.status + ')', '');
    }
  } catch(e) {
    ydUpdateStatusUI(false, 'Ошибка сети: ' + e.message, '');
  }
}

function ydUpdateStatusUI(ok, statusText, accountText) {
  const dot  = document.getElementById('yd-dot');
  const stTx = document.getElementById('yd-status-text');
  const acTx = document.getElementById('yd-account-text');
  const disBtn = document.getElementById('yd-disconnect-btn');
  if (!dot) return;
  dot.className = 'yd-dot ' + (ok ? 'ok' : (statusText ? 'err' : 'off'));
  if (stTx) stTx.textContent = statusText;
  if (acTx) acTx.textContent = accountText;
  if (disBtn) disBtn.style.display = ok ? '' : 'none';
}

// ── Init: load saved values & check status ─────────────────────
function ydInit() {
  const cidEl  = document.getElementById('yd-client-id');
  const fldEl  = document.getElementById('yd-folder');
  const tokEl  = document.getElementById('yd-token-input');
  if (cidEl) cidEl.value = ydClientId();
  if (fldEl) fldEl.value = ydFolder();
  if (tokEl && ydToken()) tokEl.value = ydToken();
  if (ydToken()) ydCheckStatus();
}

// ── Create folder (ignore 409 = already exists) ────────────────
async function ydMkdir(path) {
  const token = ydToken();
  await fetch(`${YD_API}/resources?path=${encodeURIComponent(path)}`, {
    method: 'PUT', headers: { Authorization: 'OAuth ' + token }
  });
}

// ── Build remote path for a shipment document ──────────────────
function ydFilePath(shipment, docId, fileName) {
  const co  = shipment.company || shipment.buyerPrefix || activeCompany || 'ENDV';
  const po  = (shipment.po || shipment.id || 'unknown').replace(/[\/\\:*?"<>|]/g, '-');
  const safeDoc  = (docId || 'doc').replace(/[\/\\:*?"<>|]/g, '-');
  const safeFile = fileName.replace(/[\/\\:*?"<>|]/g, '-');
  return `disk:/${ydFolder()}/${co}/${po}/${safeDoc}_${safeFile}`;
}

// ── Upload file blob to Yandex Disk ───────────────────────────
async function ydUploadFile(shipment, docId, file) {
  const token = ydToken();
  if (!token) { alert('Яндекс Диск не подключён. Перейдите в Настройки → Яндекс Диск.'); return null; }
  const remotePath = ydFilePath(shipment, docId, file.name);
  // Ensure folder chain exists
  await ydMkdir(`disk:/${ydFolder()}`);
  const co = shipment.company || shipment.buyerPrefix || activeCompany || 'ENDV';
  const po = (shipment.po || shipment.id || 'unknown').replace(/[\/\\:*?"<>|]/g, '-');
  await ydMkdir(`disk:/${ydFolder()}/${co}`);
  await ydMkdir(`disk:/${ydFolder()}/${co}/${po}`);
  // Get upload URL
  const res = await fetch(`${YD_API}/resources/upload?path=${encodeURIComponent(remotePath)}&overwrite=true`, {
    headers: { Authorization: 'OAuth ' + token }
  });
  if (!res.ok) { const err = await res.json(); alert('Ошибка получения URL загрузки: ' + (err.message||res.status)); return null; }
  const { href } = await res.json();
  // Upload
  const upRes = await fetch(href, { method: 'PUT', body: file });
  if (!upRes.ok) { alert('Ошибка загрузки файла: ' + upRes.status); return null; }
  return { path: remotePath, name: file.name, size: file.size, date: new Date().toLocaleDateString('ru-RU') };
}

// ── Get a temporary download link ─────────────────────────────
async function ydGetLink(remotePath) {
  const token = ydToken();
  if (!token) return null;
  const res = await fetch(`${YD_API}/resources/download?path=${encodeURIComponent(remotePath)}`, {
    headers: { Authorization: 'OAuth ' + token }
  });
  if (!res.ok) return null;
  const { href } = await res.json();
  return href;
}

// ── Handle file input → upload → save to shipment doc ─────────
async function ydHandleUpload(inputEl, shipmentId, docId) {
  const file = inputEl.files[0];
  if (!file) return;
  const s = shipments.find(x => x.id == shipmentId);
  if (!s) return;
  // Show progress
  const btn = inputEl.closest('.yd-upload-wrap')?.querySelector('.yd-upload-btn');
  if (btn) { btn.textContent = '⏳ Загрузка...'; btn.disabled = true; }
  try {
    const fileInfo = await ydUploadFile(s, docId, file);
    if (!fileInfo) { if (btn) { btn.textContent = '📎 Прикрепить скан'; btn.disabled = false; } return; }
    // Save reference in doc
    if (!s.docs) s.docs = [];
    let doc = s.docs.find(d => d.id === docId);
    if (!doc) { doc = { id: docId, name: docId, status: 'none', received: false }; s.docs.push(doc); }
    if (!doc.files) doc.files = [];
    doc.files.push(fileInfo);
    // Log event
    if (!s.events) s.events = [];
    s.events.unshift({ date: new Date().toLocaleDateString('ru-RU'), icon: '📎', text: 'Скан загружен: ' + file.name, note: docId });
    shipmentsSyncToDB(s);
    shipmentsSave();
    renderShipments();
  } catch(e) {
    alert('Ошибка загрузки: ' + e.message);
    if (btn) { btn.textContent = '📎 Прикрепить скан'; btn.disabled = false; }
  }
}

// ── Remove a file from a doc ───────────────────────────────────
function ydRemoveFile(shipmentId, docId, fileIdx) {
  const s = shipments.find(x => x.id == shipmentId);
  if (!s) return;
  const doc = s.docs?.find(d => d.id === docId);
  if (!doc || !doc.files) return;
  const f = doc.files[fileIdx];
  if (!confirm('Удалить ссылку на файл «' + f.name + '»?\n(Файл на Яндекс Диске останется)')) return;
  doc.files.splice(fileIdx, 1);
  shipmentsSyncToDB(s); shipmentsSave(); renderShipments();
}

// ── Open file from Yandex Disk — via web interface ────────────
async function ydOpenFile(remotePath) {
  // Strip "disk:/" prefix and navigate directly to the file in Yandex Disk web UI
  // Yandex Disk web client can open PDFs and images in its built-in viewer
  const pathClean = remotePath.replace(/^disk:\//,'');
  const webUrl = 'https://disk.yandex.ru/client/disk/' + pathClean.split('/').map(encodeURIComponent).join('/');
  window.open(webUrl, '_blank');
}

// ── Download full customs package ─────────────────────────────
// Generates inventory TXT locally + opens Yandex Disk folder in browser
// (direct fetch to downloader.disk.yandex.ru is blocked by CORS from github.io)
async function downloadCustomsPackage(shipmentId) {
  const s = shipments.find(x => x.id == shipmentId);
  if (!s) return;
  const token = ydToken();
  if (!token) {
    navTo('admin');
    setTimeout(() => { const el = document.getElementById('yd-status-bar'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 400);
    return;
  }
  const allFiles = [];
  (s.docs || []).forEach(doc => { (doc.files || []).forEach(f => allFiles.push({ doc, file: f })); });
  if (!allFiles.length) { alert('К этой поставке ещё не прикреплено ни одного скана.'); return; }

  // 1. Generate and download inventory TXT locally
  let opisStr = `ТАМОЖЕННЫЙ ПАКЕТ ДОКУМЕНТОВ\n`;
  opisStr += `Поставка: ${s.po || s.id} — ${s.supplier || ''}\n`;
  opisStr += `Товар: ${s.cargo || ''}\n`;
  opisStr += `Сформировано: ${new Date().toLocaleDateString('ru-RU')}\n`;
  opisStr += `\n${'─'.repeat(60)}\n\n`;
  let n = 1;
  for (const { doc, file } of allFiles) {
    opisStr += `${n}. ${doc.name || doc.id} — ${file.name} (${Math.round((file.size||0)/1024)} КБ, загружен ${file.date||''})\n`;
    n++;
  }
  opisStr += `\n${'─'.repeat(60)}\n`;
  opisStr += `Итого файлов: ${allFiles.length}\n`;
  opisStr += `Папка на Яндекс Диске: ${ydFolder()}/${activeCompany}/${s.po || s.id}/\n`;

  const blob = new Blob([opisStr], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${s.po || s.id}_Опись.txt`;
  a.click();
  URL.revokeObjectURL(url);

  // 2. Open shipment folder on Yandex Disk web interface
  const folderPath = [ydFolder(), activeCompany, s.po || s.id].filter(Boolean).join('/');
  const webUrl = 'https://disk.yandex.ru/client/disk/' + folderPath.split('/').map(encodeURIComponent).join('/');
  window.open(webUrl, '_blank');
}

// ════════════════════════════════════════════════════════════════

function bgToggle(po) {
  const b = budgets.find(x=>x.po===po);
  if (b) { b.expanded = !b.expanded; renderBudgets(); }
}

// Toggle НДС к вычету (ОСНО) / в затраты (УСН)
function bgToggleVatDeductible(po) {
  const b = budgets.find(x => x.po === po);
  if (!b) return;
  b.vatDeductible = !b.vatDeductible;
  bgSave();
  renderBudgets();
}

function bgDelete(po) {
  if (!confirm('Удалить бюджет «'+po+'»? Данные нельзя восстановить.')) return;
  budgets = budgets.filter(b=>b.po!==po);
  bgSave(); renderBudgets();
}

function bgFillFromCurrency(po) {
  const b = budgets.find(x => x.po === po);
  if (!b) return;
  const safeId = po.replace(/[^a-zA-Z0-9]/g,'_');
  const curEl   = document.getElementById('bg-cur-' + safeId);
  const fcEl    = document.getElementById('bg-fc-' + safeId);
  const rateEl  = document.getElementById('bg-rate-' + safeId);
  if (!fcEl || !rateEl) return;
  const fc   = parseFloat(fcEl.value) || 0;
  const rate = parseFloat(rateEl.value) || 0;
  if (!fc || !rate) { alert('Введите сумму в валюте и курс'); return; }
  const rubAmount = Math.round(fc * rate);
  b.fcAmount = fc;
  b.rate = rate;
  b.currency = curEl ? curEl.value : 'USD';
  b.lines['goods_invoice'].plan = rubAmount;
  bgSave();
  renderBudgets();
}

function bgAutoCalcDuty(po) {
  const b = budgets.find(x => x.po === po);
  if (!b) return;
  const safeId = po.replace(/[^a-zA-Z0-9]/g,'_');
  const dutyRateEl = document.getElementById('bg-duty-rate-' + safeId);
  const vatRateEl  = document.getElementById('bg-vat-rate-' + safeId);
  const dutyRate = parseFloat(dutyRateEl?.value) || 0;
  const vatRate  = parseFloat(vatRateEl?.value) || 22;
  if (!dutyRate) { alert('Введите ставку пошлины (%)'); return; }
  // Base: sum of goods plan
  const goodsBase = (b.lines['goods_invoice']?.plan||0) + (b.lines['goods_addon']?.plan||0);
  if (!goodsBase) { alert('Сначала укажите стоимость товара в разделе «Стоимость товара»'); return; }
  const duty    = Math.round(goodsBase * dutyRate / 100);
  const vat     = Math.round((goodsBase + duty) * vatRate / 100);
  b.dutyRate = dutyRate;
  b.vatRate  = vatRate;
  b.lines['cus_duty'].plan = duty;
  b.lines['cus_vat'].plan  = vat;
  bgSave();
  renderBudgets();
}

function bgUpdateLine(po, lineId, field, value) {
  const b = budgets.find(x=>x.po===po);
  if (!b || !b.lines[lineId]) return;
  b.lines[lineId][field] = parseFloat(value)||0;
  bgSave();
  bgRefreshCard(po);
  bgUpdateKPIs();
  bgUpdateSummary();
}

function bgUpdateQty(po, field, value) {
  const b = budgets.find(x=>x.po===po);
  if (!b) return;
  if (field==='qty') b.qty = parseFloat(value)||0;
  else b.unit = value;
  bgSave();
  bgRefreshCard(po);
}

function bgCalc(b) {
  let totalPlan = 0, totalFact = 0;
  let vatPlan = 0, vatFact = 0;
  const groups = {};
  Object.keys(BG_LINES).forEach(g => {
    const gLines = BG_LINES[g];
    let gPlan=0, gFact=0;
    gLines.forEach(l => {
      const v = b.lines[l.id] || {plan:0,fact:0};
      // If ОСНО / VAT-deductible: НДС at import is recoverable → exclude from cost
      if (l.id === 'cus_vat' && b.vatDeductible) {
        vatPlan += v.plan||0; vatFact += v.fact||0;
      } else {
        gPlan += v.plan||0; gFact += v.fact||0;
      }
    });
    groups[g] = { plan:gPlan, fact:gFact };
    totalPlan += gPlan; totalFact += gFact;
  });
  const delta = totalFact - totalPlan;
  const deltaPct = totalPlan > 0 ? (delta/totalPlan*100) : 0;
  const cogs = b.qty > 0 ? totalFact / b.qty : 0;
  const cogsPlan = b.qty > 0 ? totalPlan / b.qty : 0;
  return { totalPlan, totalFact, delta, deltaPct, cogs, cogsPlan, groups, vatPlan, vatFact };
}

function bgFmt(n) {
  if (!n) return '—';
  return Math.round(n).toLocaleString('ru-RU');
}

function bgDeltaClass(delta) {
  if (!delta) return 'zero';
  return delta > 0 ? 'over' : 'under';
}

function bgDeltaSign(delta) {
  if (!delta) return '±0';
  return (delta>0?'+':'')+Math.round(delta).toLocaleString('ru-RU');
}

function bgRefreshCard(po) {
  const b = budgets.find(x=>x.po===po);
  if (!b) return;
  const c = bgCalc(b);

  // Update just the computed cells without full re-render
  const card = document.getElementById('bg-card-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  if (!card) return renderBudgets(); // fallback

  // Update group subtotals
  Object.keys(BG_LINES).forEach(g => {
    const planEl = document.getElementById(`bg-sub-plan-${po}-${g}`);
    const factEl = document.getElementById(`bg-sub-fact-${po}-${g}`);
    const deltaEl= document.getElementById(`bg-sub-delta-${po}-${g}`);
    if (planEl) planEl.textContent  = bgFmt(c.groups[g].plan);
    if (factEl) factEl.textContent  = bgFmt(c.groups[g].fact);
    if (deltaEl){
      const d = c.groups[g].fact - c.groups[g].plan;
      deltaEl.textContent = bgDeltaSign(d);
      deltaEl.className = 'bg-cell delta '+bgDeltaClass(d);
    }
  });

  // Update grand total
  const gtPlan  = document.getElementById('bg-gt-plan-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  const gtFact  = document.getElementById('bg-gt-fact-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  const gtDelta = document.getElementById('bg-gt-delta-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  const gtCogs  = document.getElementById('bg-gt-cogs-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  if (gtPlan)  gtPlan.textContent  = bgFmt(c.totalPlan) + ' ₽';
  if (gtFact)  gtFact.textContent  = bgFmt(c.totalFact) + ' ₽';
  if (gtDelta) { gtDelta.textContent = bgDeltaSign(c.delta) + ' ₽'; }
  if (gtCogs && b.qty) {
    gtCogs.textContent = 'Себест.: ' + bgFmt(c.cogs) + ' ₽/' + (b.unit||'ед.');
  }

  // Progress bar
  const factPct = c.totalPlan > 0 ? Math.min(c.totalFact/c.totalPlan*100,150) : 0;
  const barEl = document.getElementById('bg-bar-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  if (barEl) {
    barEl.style.width = Math.min(factPct,100)+'%';
    barEl.style.background = c.delta > 0.01*c.totalPlan ? 'var(--red)' : c.delta < -0.01*c.totalPlan ? 'var(--green)' : 'var(--teal)';
  }

  // Header deviation pill
  const pillEl = document.getElementById('bg-pill-'+po.replace(/[^a-zA-Z0-9]/g,'_'));
  if (pillEl) {
    const cls = bgDeltaClass(c.delta);
    pillEl.className = 'bg-deviation-pill '+cls;
    pillEl.textContent = cls==='zero' ? 'В бюджете' : cls==='over' ? '▲ +'+Math.round(c.deltaPct).toFixed(1)+'%' : '▼ '+Math.round(c.deltaPct).toFixed(1)+'%';
  }
}

function renderBudgets() {
  const list = document.getElementById('bg-list');
  const empty = document.getElementById('bg-empty');
  if (!list) return;

  const coBudgets = budgets.filter(b => (b.company || 'ENDV') === activeCompany);

  if (coBudgets.length === 0) {
    list.innerHTML = '';
    if (empty) empty.style.display = '';
    document.getElementById('bg-summary-wrap').style.display = 'none';
    bgUpdateKPIs();
    return;
  }
  if (empty) empty.style.display = 'none';
  document.getElementById('bg-summary-wrap').style.display = '';

  list.innerHTML = coBudgets.map(b => {
    const c = bgCalc(b);
    const safeId = b.po.replace(/[^a-zA-Z0-9]/g,'_');
    const cls = bgDeltaClass(c.delta);
    const factPct = c.totalPlan > 0 ? Math.min(c.totalFact/c.totalPlan*100, 150) : 0;
    const barColor = c.delta > 0.01*c.totalPlan ? 'var(--red)' : c.delta < -0.01*c.totalPlan ? 'var(--green)' : 'var(--teal)';
    const totalRef = c.totalFact || c.totalPlan;

    // ── Breakdown stacked bar ─────────────────────────────────────────
    const BG_COLORS = { goods:'#1F7A63', logistics:'#2563EB', customs:'#C0392B', other:'#B8860B' };
    const BG_LABELS = { goods:'Товар', logistics:'Логистика', customs:'Таможня', other:'Прочее' };
    const breakdownBar = totalRef > 0 ? (() => {
      const segments = Object.keys(BG_LINES).map(g => {
        const amt = c.groups[g].fact || c.groups[g].plan;
        const pct = amt / totalRef * 100;
        return { g, amt, pct, color: BG_COLORS[g], label: BG_LABELS[g] };
      }).filter(s => s.pct > 0.3);
      return `<div style="margin-bottom:20px">
        <div style="display:flex;align-items:stretch;height:32px;border-radius:8px;overflow:hidden;margin-bottom:8px">
          ${segments.map(s => `<div style="width:${s.pct}%;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,0.95);font-family:'Fira Code',monospace;font-weight:700;white-space:nowrap;overflow:hidden;transition:width 0.4s" title="${s.label}: ${bgFmt(s.amt)} ₽ · ${s.pct.toFixed(1)}%">${s.pct>=9?s.pct.toFixed(0)+'%':''}</div>`).join('')}
        </div>
        <div style="display:flex;gap:14px;flex-wrap:wrap">
          ${segments.map(s => `<div style="display:flex;align-items:center;gap:5px;font-size:11px">
            <div style="width:10px;height:10px;border-radius:2px;background:${s.color}"></div>
            <span style="color:var(--text3);font-family:'Fira Code',monospace">${s.label}</span>
            <span style="font-weight:700;font-family:'Fira Code',monospace;color:var(--text)">${s.pct.toFixed(1)}%</span>
            <span style="color:var(--text3);font-size:10px">${bgFmt(s.amt)} ₽</span>
          </div>`).join('')}
        </div>
      </div>`;
    })() : '';

    // ── Build rows per group ──────────────────────────────────────────
    const groupsHtml = Object.keys(BG_LINES).map(g => {
      const grp = BG_GROUP_LABELS[g];
      const gAmt = c.groups[g].fact || c.groups[g].plan;
      const gPct = totalRef > 0 ? (gAmt/totalRef*100).toFixed(1) : null;

      // Extra helper widget per group
      let helperHtml = '';
      if (g === 'goods') {
        const cur = b.currency || 'USD'; const rate = b.rate || '';
        helperHtml = `<div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:8px">
          <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:'Fira Code',monospace">ВАЛЮТА</div>
            <select id="bg-cur-${safeId}" style="padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px">
              ${['USD','EUR','CNY','INR','GBP'].map(c2=>`<option${cur===c2?' selected':''}>${c2}</option>`).join('')}
            </select></div>
          <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:'Fira Code',monospace">СУММА В ВАЛЮТЕ</div>
            <input type="number" id="bg-fc-${safeId}" value="${b.fcAmount||''}" placeholder="0.00" style="width:120px;padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px"></div>
          <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:'Fira Code',monospace">КУРС ₽</div>
            <input type="number" id="bg-rate-${safeId}" value="${rate}" placeholder="90.00" style="width:90px;padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px"></div>
          <button onclick="bgFillFromCurrency('${b.po}')" style="padding:6px 14px;background:var(--co-accent);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;white-space:nowrap">→ Заполнить ₽</button>
          ${b.fcAmount&&b.rate ? `<div style="font-family:'Fira Code',monospace;font-size:11px;color:var(--co-accent);padding-bottom:2px">= ${bgFmt(b.fcAmount*b.rate)} ₽</div>` : ''}
        </div>`;
      }
      if (g === 'customs') {
        const goodsVal = (b.lines['goods_invoice']?.plan||0) + (b.lines['goods_addon']?.plan||0);
        const vatToggleLabel = b.vatDeductible
          ? `<span style="color:var(--co-accent);font-weight:700">✅ ОСНО — НДС к вычету</span>`
          : `<span style="color:var(--text3)">☐ УСН / спецрежим — НДС в затраты</span>`;
        helperHtml = `<div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:8px">
          <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:'Fira Code',monospace">СТАВКА ПОШЛИНЫ %</div>
            <input type="number" id="bg-duty-rate-${safeId}" value="${b.dutyRate||''}" placeholder="10" style="width:80px;padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px"></div>
          <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:'Fira Code',monospace">СТАВКА НДС %</div>
            <input type="number" id="bg-vat-rate-${safeId}" value="${b.vatRate||22}" placeholder="22" style="width:70px;padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px"></div>
          <button onclick="bgAutoCalcDuty('${b.po}')" style="padding:6px 14px;background:var(--rust);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;white-space:nowrap">⚡ Рассчитать пошлину и НДС</button>
          ${goodsVal ? `<div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--text3);padding-bottom:2px">База: ${bgFmt(goodsVal)} ₽</div>` : ''}
          <div style="width:100%;margin-top:6px;padding-top:8px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px">
            <button onclick="bgToggleVatDeductible('${b.po}')" style="padding:5px 12px;border:1.5px solid ${b.vatDeductible?'var(--co-accent)':'var(--border)'};border-radius:6px;background:${b.vatDeductible?'rgba(31,122,99,0.08)':'transparent'};cursor:pointer;font-size:11px;font-family:'Fira Code',monospace;transition:all 0.15s">
              ${vatToggleLabel}
            </button>
            <span style="font-size:10px;color:var(--text3)">${b.vatDeductible ? 'НДС возмещается из бюджета — не включается в себестоимость' : 'НДС входит в себестоимость товара'}</span>
          </div>
        </div>`;
      }

      const linesHtml = BG_LINES[g].map(l => {
        const v = b.lines[l.id] || {plan:0,fact:0};
        const d = (v.fact||0) - (v.plan||0);
        // Special rendering for НДС row when it's deductible (ОСНО)
        if (l.id === 'cus_vat' && b.vatDeductible) {
          return `<div class="bg-row" style="background:rgba(31,122,99,0.04)">
            <div class="bg-cell label" style="opacity:0.8">${l.label}
              <span style="font-size:9px;font-weight:700;color:var(--co-accent);background:rgba(31,122,99,0.15);padding:2px 6px;border-radius:4px;margin-left:6px;font-family:'Fira Code',monospace;letter-spacing:0.5px">К ВЫЧЕТУ</span>
            </div>
            <div class="bg-cell"><input type="number" value="${v.plan||''}" placeholder="0" style="opacity:0.65"
              onchange="bgUpdateLine('${b.po}','${l.id}','plan',this.value)"></div>
            <div class="bg-cell"><input type="number" value="${v.fact||''}" placeholder="0" style="opacity:0.65"
              onchange="bgUpdateLine('${b.po}','${l.id}','fact',this.value)"></div>
            <div class="bg-cell" style="font-size:10px;color:var(--co-accent);font-weight:700;text-align:right;font-family:'Fira Code',monospace">возмещается</div>
          </div>`;
        }
        return `<div class="bg-row">
          <div class="bg-cell label">${l.label}</div>
          <div class="bg-cell"><input type="number" value="${v.plan||''}" placeholder="0"
            onchange="bgUpdateLine('${b.po}','${l.id}','plan',this.value)"></div>
          <div class="bg-cell"><input type="number" value="${v.fact||''}" placeholder="0"
            onchange="bgUpdateLine('${b.po}','${l.id}','fact',this.value)"></div>
          <div class="bg-cell delta ${bgDeltaClass(d)}">${v.plan||v.fact ? bgDeltaSign(d) : '—'}</div>
        </div>`;
      }).join('');

      // For customs group: show deductible VAT note after subtotal
      const vatNote = (g === 'customs' && b.vatDeductible && (c.vatPlan || c.vatFact))
        ? `<div style="font-size:10px;color:var(--co-accent);padding:6px 8px 2px;font-family:'Fira Code',monospace;display:flex;gap:6px;align-items:center">
            <span>↑ НДС к вычету:</span>
            ${c.vatPlan ? `<b>${bgFmt(c.vatPlan)} ₽ план</b>` : ''}
            ${c.vatFact ? `<b>${bgFmt(c.vatFact)} ₽ факт</b>` : ''}
            <span style="color:var(--text3)">— возмещается из бюджета, в себестоимость не входит</span>
           </div>`
        : '';

      return `<div class="bg-section-title" style="color:${BG_COLORS[g]}">${grp.title}${gPct ? `<span style="font-size:10px;font-weight:400;margin-left:8px;opacity:0.7">${gPct}%</span>` : ''}</div>
        ${helperHtml}
        <div class="bg-row header">
          <div class="bg-cell">Статья расходов</div>
          <div class="bg-cell right">План, ₽</div>
          <div class="bg-cell right">Факт, ₽</div>
          <div class="bg-cell right">Откл., ₽</div>
        </div>
        ${linesHtml}
        <div class="bg-row subtotal">
          <div class="bg-cell label" style="font-weight:600">Итого ${grp.title.toLowerCase()}${g==='customs'&&b.vatDeductible?' <span style="font-size:9px;font-weight:400;color:var(--text3)">(без НДС)</span>':''}</div>
          <div class="bg-cell right" id="bg-sub-plan-${b.po}-${g}">${bgFmt(c.groups[g].plan)}</div>
          <div class="bg-cell right" id="bg-sub-fact-${b.po}-${g}">${bgFmt(c.groups[g].fact)}</div>
          <div class="bg-cell delta ${bgDeltaClass(c.groups[g].fact-c.groups[g].plan)}"
               id="bg-sub-delta-${b.po}-${g}">${bgDeltaSign(c.groups[g].fact-c.groups[g].plan)}</div>
        </div>
        ${vatNote}`;
    }).join('');

    return `<div class="bg-card ${b.expanded?'expanded':''}" id="bg-card-${safeId}">
      <div class="bg-card-head" onclick="bgToggle('${b.po}')">
        <div class="bg-card-po">${b.po}</div>
        <div class="bg-card-supplier">${b.supplier}${b.cargo?' · <span style="color:var(--text3)">'+b.cargo+'</span>':''}</div>
        <div style="display:flex;align-items:center;gap:12px">
          ${c.totalPlan ? `<div style="text-align:right;font-family:'Fira Code',monospace;font-size:11px;color:var(--text3)">план: ${bgFmt(c.totalPlan)} ₽</div>` : ''}
          ${c.totalFact ? `<div style="text-align:right;font-family:'Fira Code',monospace;font-size:13px;color:var(--navy);font-weight:700">факт: ${bgFmt(c.totalFact)} ₽</div>` : ''}
          <div class="bg-deviation-pill ${cls}" id="bg-pill-${safeId}">
            ${cls==='zero'?'Нет данных':cls==='over'?'▲ +'+Math.abs(c.deltaPct).toFixed(1)+'%':'▼ '+Math.abs(c.deltaPct).toFixed(1)+'%'}
          </div>
        </div>
        <div style="color:var(--text3);font-size:12px;margin-left:8px">${b.expanded?'▲':'▼'}</div>
      </div>

      <div class="bg-card-body">
        <!-- Qty + delete row -->
        <div style="display:flex;gap:12px;align-items:flex-end;margin-bottom:16px;flex-wrap:wrap">
          <div class="field" style="margin:0;min-width:160px">
            <label>Кол-во товара (для себест. на ед.)</label>
            <input type="number" value="${b.qty||''}" placeholder="0" style="padding:8px 12px"
              onchange="bgUpdateQty('${b.po}','qty',this.value)">
          </div>
          <div class="field" style="margin:0;min-width:100px">
            <label>Единица</label>
            <input value="${b.unit||''}" placeholder="Mtrs / Pcs" style="padding:8px 12px"
              onchange="bgUpdateQty('${b.po}','unit',this.value)">
          </div>
          <div style="padding-bottom:1px;flex:1"></div>
          <button class="admin-action-btn danger" onclick="bgDelete('${b.po}');event.stopPropagation()">× Удалить бюджет</button>
        </div>

        <!-- Breakdown stacked bar -->
        <div id="bg-breakdown-${safeId}">${breakdownBar}</div>

        <!-- Progress bar (plan vs fact) -->
        ${c.totalPlan > 0 ? `<div style="margin-bottom:18px">
          <div style="display:flex;justify-content:space-between;font-size:10px;font-family:'Fira Code',monospace;color:var(--text3);margin-bottom:4px">
            <span>Исполнение плана</span>
            <span>${factPct.toFixed(1)}%</span>
          </div>
          <div class="bg-bar-track">
            <div class="bg-bar-plan" style="width:100%"></div>
            <div class="bg-bar-fact" id="bg-bar-${safeId}" style="width:${Math.min(factPct,100)}%;background:${barColor}"></div>
          </div>
        </div>` : ''}

        ${groupsHtml}

        <!-- Grand total -->
        <div class="bg-row grandtotal" style="margin-top:8px">
          <div class="bg-cell" style="font-size:14px;font-weight:700;color:white">ИТОГО СЕБЕСТОИМОСТЬ НА СКЛАДЕ</div>
          <div class="bg-cell grand-val" id="bg-gt-plan-${safeId}">${bgFmt(c.totalPlan)} ₽</div>
          <div class="bg-cell grand-val" id="bg-gt-fact-${safeId}">${bgFmt(c.totalFact)} ₽</div>
          <div class="bg-cell grand-val" id="bg-gt-delta-${safeId}">${bgDeltaSign(c.delta)} ₽</div>
        </div>
        ${b.qty ? `<div style="text-align:right;font-family:'Fira Code',monospace;font-size:11px;color:var(--text3);margin-top:8px" id="bg-gt-cogs-${safeId}">
          Себест. факт: ${bgFmt(c.cogs)} ₽/${b.unit||'ед.'} &nbsp;·&nbsp; план: ${bgFmt(c.cogsPlan)} ₽/${b.unit||'ед.'}
        </div>` : ''}
      </div>
    </div>`;
  }).join('');

  bgUpdateKPIs();
  bgUpdateSummary();
}

function bgUpdateKPIs() {
  const fmtM = n => { if(!n) return '—'; if(Math.abs(n)>=1000000) return (n/1000000).toFixed(1)+' млн'; if(Math.abs(n)>=1000) return (n/1000).toFixed(0)+' тыс'; return Math.round(n).toLocaleString('ru-RU'); };
  const coBudgets = budgets.filter(b => (b.company || 'ENDV') === activeCompany);
  const totalPlan = coBudgets.reduce((s,b)=>s+bgCalc(b).totalPlan,0);
  const totalFact = coBudgets.reduce((s,b)=>s+bgCalc(b).totalFact,0);
  const delta = totalFact - totalPlan;
  const deltaPct = totalPlan>0?(delta/totalPlan*100):0;
  const allCogs = coBudgets.filter(b=>b.qty>0).map(b=>bgCalc(b).cogs).filter(Boolean);
  const avgCogs = allCogs.length ? allCogs.reduce((s,v)=>s+v,0)/allCogs.length : 0;

  const el = id => document.getElementById(id);
  if(el('bgk-count')) el('bgk-count').textContent = coBudgets.length || '—';
  if(el('bgk-plan'))  el('bgk-plan').textContent  = fmtM(totalPlan);
  if(el('bgk-fact'))  el('bgk-fact').textContent  = fmtM(totalFact);
  if(el('bgk-cogs'))  el('bgk-cogs').textContent  = avgCogs ? fmtM(avgCogs) : '—';
  const deltaEl = el('bgk-delta');
  if (deltaEl) {
    deltaEl.textContent = delta ? (delta>0?'+':'')+fmtM(delta) : '—';
    deltaEl.style.color = delta>0 ? 'var(--red)' : delta<0 ? 'var(--green)' : 'var(--text3)';
  }
  const deltaSubEl = el('bgk-delta-pct');
  if (deltaSubEl) deltaSubEl.textContent = deltaPct ? (deltaPct>0?'+':'')+deltaPct.toFixed(1)+'% к плану' : '';
}

function bgUpdateSummary() {
  const tbody = document.getElementById('bg-summary-body');
  if (!tbody) return;
  const coBudgets = budgets.filter(b => (b.company || 'ENDV') === activeCompany);
  tbody.innerHTML = coBudgets.map(b => {
    const c = bgCalc(b);
    const d = c.delta;
    const cls = bgDeltaClass(d);
    const pct = c.totalPlan > 0 ? (c.totalFact/c.totalPlan*100).toFixed(0)+'%' : '—';
    const barW = c.totalPlan > 0 ? Math.min(c.totalFact/c.totalPlan*100,100) : 0;
    const barColor = d > 0.01*c.totalPlan ? '#D64545' : d < -0.01*c.totalPlan ? '#1F7A63' : '#1F7A63';
    return `<tr>
      <td style="font-family:'Fira Code',monospace;font-weight:600">${b.po}</td>
      <td>${b.supplier||'—'}</td>
      <td style="color:var(--text3)">${b.cargo||'—'}</td>
      <td style="text-align:right;font-family:'Fira Code',monospace">${bgFmt(c.groups.goods?.fact || (b.lines.goods_invoice?.fact||b.lines.goods_invoice?.plan||0))}</td>
      <td style="text-align:right;font-family:'Fira Code',monospace">${bgFmt(c.groups.logistics?.plan)}</td>
      <td style="text-align:right;font-family:'Fira Code',monospace">${bgFmt(c.groups.customs?.plan)}</td>
      <td style="text-align:right;font-family:'Fira Code',monospace;font-weight:600">${bgFmt(c.totalPlan)}</td>
      <td style="text-align:right;font-family:'Fira Code',monospace;font-weight:600">${bgFmt(c.totalFact)}</td>
      <td class="bg-cell delta ${cls}" style="text-align:right">${c.delta ? bgDeltaSign(c.delta) : '—'}</td>
      <td style="text-align:right">
        <div style="display:flex;align-items:center;gap:6px;justify-content:flex-end">
          <div style="width:50px;background:#eee;border-radius:3px;height:5px;overflow:hidden">
            <div style="width:${barW}%;height:100%;background:${barColor};border-radius:3px"></div>
          </div>
          <span style="font-family:'Fira Code',monospace;font-size:11px">${pct}</span>
        </div>
      </td>
    </tr>`;
  }).join('');

  // Total row
  const tPlan = budgets.reduce((s,b)=>s+bgCalc(b).totalPlan,0);
  const tFact = budgets.reduce((s,b)=>s+bgCalc(b).totalFact,0);
  const tDelta = tFact - tPlan;
  tbody.innerHTML += `<tr class="bg-total-row">
    <td colspan="6"><b>ИТОГО ПО ВСЕМ ПОСТАВКАМ</b></td>
    <td style="text-align:right;font-family:'Fira Code',monospace"><b>${bgFmt(tPlan)}</b></td>
    <td style="text-align:right;font-family:'Fira Code',monospace"><b>${bgFmt(tFact)}</b></td>
    <td class="bg-cell delta ${bgDeltaClass(tDelta)}" style="text-align:right"><b>${bgDeltaSign(tDelta)}</b></td>
    <td></td>
  </tr>`;
}

function exportBudgetExcel() {
  if (budgets.length === 0) { alert('Нет бюджетов для экспорта'); return; }
  const wb = XLSX.utils.book_new();

  // Sheet 1: Summary
  const sumHdr = ['№ PO','Поставщик','Груз','Товар план','Лог-ка план','Таможня план','Итого план ₽','Итого факт ₽','Отклонение ₽','% исп.','Себест. ₽/ед.'];
  const _coName2 = (COMPANIES[activeCompany]?.shortEn || 'SUPPLY CHAIN').toUpperCase();
  const sumRows = [
    ['СВОДНЫЙ БЮДЖЕТ ПОСТАВОК · '+_coName2+' · '+new Date().toLocaleDateString('ru-RU'),...Array(sumHdr.length-1).fill('')],
    sumHdr,
    ...budgets.map(b => {
      const c = bgCalc(b);
      const pct = c.totalPlan > 0 ? (c.totalFact/c.totalPlan*100).toFixed(1)+'%' : '—';
      return [b.po, b.supplier||'', b.cargo||'',
        Math.round(c.groups.goods?.plan)||0, Math.round(c.groups.logistics?.plan)||0, Math.round(c.groups.customs?.plan)||0,
        Math.round(c.totalPlan)||0, Math.round(c.totalFact)||0, Math.round(c.delta)||0, pct,
        b.qty && c.cogs ? Math.round(c.cogs) : '—'];
    }),
  ];
  const tPlan = budgets.reduce((s,b)=>s+bgCalc(b).totalPlan,0);
  const tFact = budgets.reduce((s,b)=>s+bgCalc(b).totalFact,0);
  sumRows.push(['ИТОГО','','','','','',Math.round(tPlan),Math.round(tFact),Math.round(tFact-tPlan),'','']);

  const ws1 = XLSX.utils.aoa_to_sheet(sumRows);
  ws1['!cols']=[{wch:18},{wch:20},{wch:24},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:8},{wch:14}];
  ws1['!merges']=[{s:{r:0,c:0},e:{r:0,c:sumHdr.length-1}}];
  if(ws1['A1'])ws1['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  sumHdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws1[a])ws1[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1F7A63'}}};});
  XLSX.utils.book_append_sheet(wb, ws1, 'Сводка');

  // Sheets per shipment
  budgets.forEach(b => {
    const c = bgCalc(b);
    const dHdr = ['Группа','Статья расходов','План, ₽','Факт, ₽','Отклонение, ₽'];
    const dRows = [
      [`БЮДЖЕТ ПОСТАВКИ: ${b.po}`,...Array(dHdr.length-1).fill('')],
      [`Поставщик: ${b.supplier||'—'}  |  Груз: ${b.cargo||'—'}`,...Array(dHdr.length-1).fill('')],
      [],
      dHdr,
    ];
    Object.keys(BG_LINES).forEach(g => {
      const grp = BG_GROUP_LABELS[g];
      BG_LINES[g].forEach(l => {
        const v = b.lines[l.id]||{plan:0,fact:0};
        dRows.push([grp.title, l.label, Math.round(v.plan)||0, Math.round(v.fact)||0, Math.round((v.fact||0)-(v.plan||0))||0]);
      });
      dRows.push([grp.title+' — ИТОГО','',Math.round(c.groups[g].plan),Math.round(c.groups[g].fact),Math.round(c.groups[g].fact-c.groups[g].plan)]);
      dRows.push([]);
    });
    dRows.push(['ИТОГО СЕБЕСТОИМОСТЬ НА СКЛАДЕ','',Math.round(c.totalPlan),Math.round(c.totalFact),Math.round(c.delta)]);
    if (b.qty) dRows.push(['Себестоимость на единицу ('+b.unit+')',b.po, Math.round(c.cogsPlan), Math.round(c.cogs), Math.round(c.cogs-c.cogsPlan)]);

    const wsD = XLSX.utils.aoa_to_sheet(dRows);
    wsD['!cols']=[{wch:22},{wch:36},{wch:14},{wch:14},{wch:14}];
    wsD['!merges']=[{s:{r:0,c:0},e:{r:0,c:dHdr.length-1}},{s:{r:1,c:0},e:{r:1,c:dHdr.length-1}}];
    if(wsD['A1'])wsD['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    dHdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:3,c:ci});if(wsD[a])wsD[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1F7A63'}}};});
    const shName = b.po.slice(0,28).replace(/[\\/?*[\]]/g,'-');
    XLSX.utils.book_append_sheet(wb, wsD, shName);
  });

  XLSX.writeFile(wb, 'Бюджет_поставок_'+new Date().toISOString().slice(0,10)+'.xlsx');
}





// ════════════════════════════════════════════
// ── EXPORT: SHIPMENTS / VED REPORT / 1С ──
// ════════════════════════════════════════════

function _xlsHeader(ws, row, cols, titleColor) {
  cols.forEach((_, ci) => {
    const a = XLSX.utils.encode_cell({ r: row, c: ci });
    if (ws[a]) ws[a].s = { font: { bold: true, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: titleColor || '1F7A63' } } };
  });
}

/* ── 1. Реестр поставок Excel ──────────────────────────────── */
function exportShipmentsExcel() {
  const all = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  if (!all.length) { alert('Нет поставок для экспорта'); return; }
  const wb = XLSX.utils.book_new();

  /* Sheet 1 — Реестр */
  const hdr = ['№ поставки','Статус','Поставщик','Контракт','Откуда','Куда','Вид транспорта',
    'Инкотермс','Валюта','Сумма','ETD','ETA','Дата раст.','Вес (кг)','Объём (м³)',
    'Этап','Дата архив.','Дата выпуска ДТ','ПТК хранить до','Примечание'];
  const stLabel = s => (SHP_STATUSES[s] || SHP_STATUSES.draft).label;
  const modeLabel = { sea:'Море', air:'Авиа', rail:'ЖД', road:'Авто', multi:'Мультимодаль' };
  const rows = [
    ['РЕЕСТР ПОСТАВОК · ' + new Date().toLocaleDateString('ru-RU'), ...Array(hdr.length - 1).fill('')],
    hdr,
    ...all.map(s => [
      s.shipment_number || '',
      stLabel(s.status),
      shpSupName(s.supplier_id),
      s.contract_id || '',
      s.from || '',
      s.to || '',
      modeLabel[s.mode] || s.mode || '',
      s.incoterms || '',
      s.currency || '',
      parseFloat(s.total_value) || 0,
      s.dates?.etd || '',
      s.dates?.eta || '',
      s.dates?.customs_done || '',
      parseFloat(s.weight_kg) || '',
      parseFloat(s.volume_m3) || '',
      s.current_stage != null ? `${s.current_stage}/8` : '',
      s.archived_at || '',
      s.ptk_date || '',
      s.ptk_retention_until || '',
      s.notes || '',
    ]),
  ];
  const ws1 = XLSX.utils.aoa_to_sheet(rows);
  ws1['!cols'] = [14,10,22,16,14,14,14,10,8,12,11,11,11,10,10,8,11,11,11,28].map(w => ({ wch: w }));
  ws1['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: hdr.length - 1 } }];
  if (ws1['A1']) ws1['A1'].s = { font: { bold: true, sz: 12, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: '0B1F3A' } }, alignment: { horizontal: 'center' } };
  _xlsHeader(ws1, 1, hdr, '1F7A63');
  XLSX.utils.book_append_sheet(wb, ws1, 'Реестр поставок');

  /* Sheet 2 — Товарный состав */
  const hdr2 = ['№ поставки','Контракт','Поставщик','Артикул','Наименование','Ед.','Кол-во','Цена','Сумма','Валюта','HS-код','Страна'];
  const rows2 = [['ТОВАРНЫЙ СОСТАВ ПОСТАВОК', ...Array(hdr2.length - 1).fill('')], hdr2];
  all.forEach(s => {
    (s.items || []).forEach(it => {
      rows2.push([
        s.shipment_number || '', s.contract_id || '', shpSupName(s.supplier_id),
        it.sku || '', it.name || '', it.unit || '', parseFloat(it.qty) || 0,
        parseFloat(it.price) || 0, Math.round((it.qty || 0) * (it.price || 0) * 100) / 100,
        s.currency || '', it.hs_code || '', it.country || '',
      ]);
    });
  });
  if (rows2.length > 2) {
    const ws2 = XLSX.utils.aoa_to_sheet(rows2);
    ws2['!cols'] = [14, 16, 20, 12, 36, 6, 8, 10, 12, 8, 10, 12].map(w => ({ wch: w }));
    ws2['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: hdr2.length - 1 } }];
    if (ws2['A1']) ws2['A1'].s = { font: { bold: true, sz: 11, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: '0B1F3A' } }, alignment: { horizontal: 'center' } };
    _xlsHeader(ws2, 1, hdr2, '1C355E');
    XLSX.utils.book_append_sheet(wb, ws2, 'Товары');
  }

  XLSX.writeFile(wb, 'Реестр_поставок_' + new Date().toISOString().slice(0, 10) + '.xlsx');
  showToast('✅ Реестр поставок экспортирован');
}

/* ── 2. Сводный ВЭД-отчёт (мульти-лист) ───────────────────── */
function exportVedReport() {
  const wb = XLSX.utils.book_new();
  const dateStr = new Date().toLocaleDateString('ru-RU');

  /* Поставки */
  const allShp = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  const hdrS = ['№ поставки','Статус','Поставщик','Контракт','Маршрут','Транспорт','Сумма','Валюта','ETD','ETA','Этап'];
  const rowsS = [['ПОСТАВКИ · ' + dateStr, ...Array(hdrS.length - 1).fill('')], hdrS,
    ...allShp.map(s => [
      s.shipment_number || '', (SHP_STATUSES[s.status] || SHP_STATUSES.draft).label,
      shpSupName(s.supplier_id), s.contract_id || '',
      [s.from, s.to].filter(Boolean).join(' → '),
      { sea:'🚢 Море', air:'✈️ Авиа', rail:'🚂 ЖД', road:'🚛 Авто', multi:'🔄 Мульти' }[s.mode] || '',
      parseFloat(s.total_value) || 0, s.currency || '',
      s.dates?.etd || '', s.dates?.eta || '',
      s.current_stage != null ? `${s.current_stage}/8` : '',
    ]),
  ];
  const wsS = XLSX.utils.aoa_to_sheet(rowsS);
  wsS['!cols'] = [14,12,22,16,22,12,12,8,11,11,8].map(w => ({ wch: w }));
  wsS['!merges'] = [{ s:{r:0,c:0}, e:{r:0,c:hdrS.length-1} }];
  if (wsS['A1']) wsS['A1'].s = { font:{bold:true,sz:12,color:{rgb:'FFFFFF'}}, fill:{fgColor:{rgb:'0B1F3A'}}, alignment:{horizontal:'center'} };
  _xlsHeader(wsS, 1, hdrS, '1F7A63');
  XLSX.utils.book_append_sheet(wb, wsS, 'Поставки');

  /* Бюджеты */
  if (typeof budgets !== 'undefined' && budgets.length) {
    const hdrB = ['№ PO','Поставщик','Груз','Кол-во','Ед.','Товар план ₽','Лог план ₽','Тамож план ₽','Итого план ₽','Итого факт ₽','Откл. ₽','% исп.','Себест. ₽/ед','НДС к вычету'];
    const rowsB = [['БЮДЖЕТЫ · ' + dateStr, ...Array(hdrB.length-1).fill('')], hdrB,
      ...budgets.map(b => {
        const c = bgCalc(b);
        return [b.po, b.supplier||'', b.cargo||'', b.qty||'', b.unit||'',
          Math.round(c.groups.goods?.plan)||0, Math.round(c.groups.logistics?.plan)||0,
          Math.round(c.groups.customs?.plan)||0, Math.round(c.totalPlan)||0,
          Math.round(c.totalFact)||0, Math.round(c.delta)||0,
          c.totalPlan>0 ? (c.totalFact/c.totalPlan*100).toFixed(1)+'%' : '—',
          b.qty && c.cogs ? Math.round(c.cogs) : '—',
          b.vatDeductible ? 'Да (ОСНО)' : 'Нет (УСН)'];
      }),
    ];
    const wsB = XLSX.utils.aoa_to_sheet(rowsB);
    wsB['!cols'] = [16,20,22,8,6,14,12,12,14,14,12,8,12,12].map(w=>({wch:w}));
    wsB['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrB.length-1}}];
    if(wsB['A1'])wsB['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    _xlsHeader(wsB, 1, hdrB, 'C4943A');
    XLSX.utils.book_append_sheet(wb, wsB, 'Бюджеты');
  }

  /* Платежи из поставок */
  const payRows = [['ПЛАТЁЖНЫЙ КАЛЕНДАРЬ · ' + dateStr]];
  const hdrP = ['№ поставки','Контракт','Поставщик','Дата платежа','Назначение','Сумма','Валюта','Статус','№ п/п'];
  payRows.push(hdrP);
  allShp.forEach(s => {
    (s.payments || []).forEach(p => {
      payRows.push([
        s.shipment_number || '', s.contract_id || '', shpSupName(s.supplier_id),
        p.date || '', p.label || '', parseFloat(p.amount) || 0, s.currency || '',
        p.status === 'paid' ? 'Оплачено' : p.status === 'pending' ? 'Ожидается' : p.status,
        p.ppNum || '',
      ]);
    });
  });
  if (payRows.length > 2) {
    const wsP = XLSX.utils.aoa_to_sheet(payRows);
    wsP['!cols'] = [14,16,20,12,28,12,8,12,12].map(w=>({wch:w}));
    wsP['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrP.length-1}}];
    if(wsP['A1'])wsP['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    _xlsHeader(wsP, 1, hdrP, '1C355E');
    XLSX.utils.book_append_sheet(wb, wsP, 'Платёж. календарь');
  }

  /* ПТК — архив */
  const archived = allShp.filter(s => s.status === 'archived' && s.ptk_retention_until);
  if (archived.length) {
    const hdrA = ['№ поставки','Контракт','Поставщик','Архивирован','Дата выпуска ДТ','Хранить до','Осталось дней'];
    const today = new Date(); today.setHours(0,0,0,0);
    const rowsA = [['АРХИВ ПТК · ' + dateStr, ...Array(hdrA.length-1).fill('')], hdrA,
      ...archived.map(s => {
        const rd = new Date(s.ptk_retention_until + 'T00:00:00');
        const diff = Math.round((rd - today) / 86400000);
        return [s.shipment_number||'', s.contract_id||'', shpSupName(s.supplier_id),
          s.archived_at||'', s.ptk_date||'', s.ptk_retention_until||'', diff];
      }),
    ];
    const wsA = XLSX.utils.aoa_to_sheet(rowsA);
    wsA['!cols'] = [14,16,20,12,14,14,12].map(w=>({wch:w}));
    wsA['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrA.length-1}}];
    if(wsA['A1'])wsA['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    _xlsHeader(wsA, 1, hdrA, '7B5C2A');
    XLSX.utils.book_append_sheet(wb, wsA, 'Архив ПТК');
  }

  /* Договоры + репатриация */
  const contracts = DB_contracts.all().filter(c => (c.company || 'ENDV') === activeCompany);
  if (contracts.length) {
    const hdrC = ['Номер договора','Поставщик','Дата','Инкотермс','Валюта','Сумма','УНК','Репатриация до','Банк уведомлён','Статус'];
    const today = new Date(); today.setHours(0,0,0,0);
    const rowsC = [['РЕЕСТР ДОГОВОРОВ · ' + dateStr, ...Array(hdrC.length-1).fill('')], hdrC,
      ...contracts.map(c => {
        let repatStatus = '—';
        if (c.repatDate) {
          const rd = new Date(c.repatDate + 'T00:00:00');
          const diff = Math.round((rd - today) / 86400000);
          repatStatus = diff < 0 ? `Просрочено (${Math.abs(diff)} дн.)` : `${diff} дн.`;
        }
        return [c.num||'', c.sellerName||'', c.date||'', c.inco||'', c.currency||'',
          c.totalAmount||'', c.unk||'', c.repatDate||'', c.bankNotifyDate||'', repatStatus];
      }),
    ];
    const wsC = XLSX.utils.aoa_to_sheet(rowsC);
    wsC['!cols'] = [18,22,11,10,8,12,20,12,12,16].map(w=>({wch:w}));
    wsC['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrC.length-1}}];
    if(wsC['A1'])wsC['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    _xlsHeader(wsC, 1, hdrC, '1F7A63');
    XLSX.utils.book_append_sheet(wb, wsC, 'Договоры');
  }

  XLSX.writeFile(wb, 'ВЭД_Отчёт_' + new Date().toISOString().slice(0, 10) + '.xlsx');
  showToast('✅ Сводный ВЭД-отчёт экспортирован');
}

/* ── 3. Выгрузка для 1С ────────────────────────────────────── */
function export1CVed() {
  const allShp = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  const delivered = allShp.filter(s => s.status === 'delivered' || s.status === 'archived');
  if (!delivered.length && !allShp.length) { alert('Нет поставок для выгрузки'); return; }
  const wb = XLSX.utils.book_new();

  /* Sheet 1: Поступление товаров — для 1С */
  const note1C = '1С: Покупки → Поступление (акты, накладные) → Товары';
  const hdrG = ['Дата','№ документа','Контрагент','ИНН контрагента','Договор','Номенклатура',
    'Артикул','Ед. изм.','Количество','Цена (без НДС)','Сумма (без НДС)',
    'НДС %','НДС сумма','Сумма (с НДС)','Счёт учёта','Счёт НДС','Страна происх.','ГТД №'];
  const rowsG = [
    ['ПОСТУПЛЕНИЕ ТОВАРОВ (импорт) — выгрузка для 1С:Предприятие · ' + new Date().toLocaleDateString('ru-RU'), ...Array(hdrG.length-1).fill('')],
    [note1C, ...Array(hdrG.length-1).fill('')],
    hdrG,
  ];
  const vatRate = 0.22;
  allShp.forEach(s => {
    const docDate = s.dates?.customs_done || s.dates?.eta || s.dates?.etd || '';
    const dtNum   = s.customs?.dt_number || '';
    const inn     = ''; // supplier INN not stored — accountant fills
    (s.items || []).forEach(it => {
      const sumNoVat = Math.round((it.qty || 0) * (it.price || 0) * 100) / 100;
      const vatSum   = Math.round(sumNoVat * vatRate * 100) / 100;
      const sumVat   = Math.round((sumNoVat + vatSum) * 100) / 100;
      rowsG.push([
        docDate,
        s.shipment_number || '',
        shpSupName(s.supplier_id),
        inn,
        s.contract_id || '',
        it.name || '',
        it.sku || '',
        it.unit || 'шт',
        parseFloat(it.qty) || 0,
        parseFloat(it.price) || 0,
        sumNoVat,
        '22%',
        vatSum,
        sumVat,
        '41.01',  // Товары на складах
        '19.05',  // НДС при импорте товаров
        it.country || '',
        dtNum,
      ]);
    });
    // Если нет строк товаров — строка-заглушка
    if (!s.items || s.items.length === 0) {
      rowsG.push([docDate, s.shipment_number||'', shpSupName(s.supplier_id), inn,
        s.contract_id||'', '(заполнить)', '', 'шт', '', parseFloat(s.total_value)||0,
        '', '22%', '', '', '41.01', '19.05', '', dtNum]);
    }
  });
  const wsG = XLSX.utils.aoa_to_sheet(rowsG);
  wsG['!cols'] = [11,14,22,13,16,36,12,6,9,12,12,6,10,12,8,8,12,16].map(w=>({wch:w}));
  wsG['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrG.length-1}},{s:{r:1,c:0},e:{r:1,c:hdrG.length-1}}];
  if(wsG['A1'])wsG['A1'].s={font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  if(wsG['A2'])wsG['A2'].s={font:{italic:true,color:{rgb:'444444'}},fill:{fgColor:{rgb:'F0F0F0'}},alignment:{horizontal:'center'}};
  _xlsHeader(wsG, 2, hdrG, '1C355E');
  XLSX.utils.book_append_sheet(wb, wsG, '1С Поступление товаров');

  /* Sheet 2: Платёжные поручения — для 1С */
  const note1CP = '1С: Казначейство → Платёжные поручения → Оплата поставщику';
  const hdrPP = ['Дата','№ п/п','Контрагент','Договор','Назначение платежа',
    'Сумма в валюте','Валюта','Курс ЦБ (заполнить)','Сумма в руб.','Статус','Счёт дт','Счёт кт'];
  const rowsPP = [
    ['ПЛАТЁЖНЫЕ ПОРУЧЕНИЯ — выгрузка для 1С:Предприятие · ' + new Date().toLocaleDateString('ru-RU'), ...Array(hdrPP.length-1).fill('')],
    [note1CP, ...Array(hdrPP.length-1).fill('')],
    hdrPP,
  ];
  allShp.forEach(s => {
    (s.payments || []).forEach(p => {
      rowsPP.push([
        p.date || '',
        p.ppNum || '(заполнить)',
        shpSupName(s.supplier_id),
        s.contract_id || '',
        `${p.label || 'Оплата по контракту'} ${s.shipment_number || ''} ${s.contract_id || ''}`.trim(),
        parseFloat(p.amount) || 0,
        s.currency || '',
        '', // курс ЦБ — заполняет бухгалтер
        '', // сумма в руб — заполняет бухгалтер
        p.status === 'paid' ? 'Исполнен' : 'Ожидается',
        '60.21', // Расчёты с иностранными поставщиками
        '52',    // Валютный счёт
      ]);
    });
  });
  if (rowsPP.length > 3) {
    const wsPP = XLSX.utils.aoa_to_sheet(rowsPP);
    wsPP['!cols'] = [11,10,22,16,38,13,8,12,12,10,8,8].map(w=>({wch:w}));
    wsPP['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrPP.length-1}},{s:{r:1,c:0},e:{r:1,c:hdrPP.length-1}}];
    if(wsPP['A1'])wsPP['A1'].s={font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
    if(wsPP['A2'])wsPP['A2'].s={font:{italic:true,color:{rgb:'444444'}},fill:{fgColor:{rgb:'F0F0F0'}},alignment:{horizontal:'center'}};
    _xlsHeader(wsPP, 2, hdrPP, 'C4943A');
    XLSX.utils.book_append_sheet(wb, wsPP, '1С Платёж. поручения');
  }

  /* Sheet 3: ГТД по импорту — для 1С */
  const note1CD = '1С: Запасы → ГТД по импорту';
  const hdrDT = ['Дата выпуска ДТ','№ ДТ','№ поставки','Контракт','Контрагент',
    'Таможенная стоимость','Валюта','Таможенная пошлина ₽','НДС при импорте ₽',
    'Тамож. сборы ₽','Итого доп. расходы ₽','Счёт дт','Счёт кт'];
  const rowsDT = [
    ['ГТД ПО ИМПОРТУ — выгрузка для 1С:Предприятие · ' + new Date().toLocaleDateString('ru-RU'), ...Array(hdrDT.length-1).fill('')],
    [note1CD, ...Array(hdrDT.length-1).fill('')],
    hdrDT,
  ];
  allShp.forEach(s => {
    const cust = s.customs || {};
    const budget = typeof budgets !== 'undefined' ? budgets.find(b => b.po === (s.contract_id||s.shipment_number)) : null;
    const duty  = budget ? Math.round(budget.lines?.cus_duty?.fact || 0) : '';
    const vat   = budget ? Math.round(budget.lines?.cus_vat?.fact  || 0) : '';
    const fees  = budget ? Math.round(budget.lines?.cus_fee?.fact  || 0) : '';
    const total = (duty && vat && fees) ? duty + vat + fees : '';
    rowsDT.push([
      s.ptk_date || s.dates?.customs_done || '',
      cust.dt_number || '(заполнить)',
      s.shipment_number || '',
      s.contract_id || '',
      shpSupName(s.supplier_id),
      parseFloat(s.total_value) || 0,
      s.currency || '',
      duty,
      vat,
      fees,
      total,
      '76.09',  // Расчёты с таможней
      '51',     // Расчётный счёт
    ]);
  });
  const wsDT = XLSX.utils.aoa_to_sheet(rowsDT);
  wsDT['!cols'] = [13,18,13,16,22,14,8,14,14,12,14,8,8].map(w=>({wch:w}));
  wsDT['!merges'] = [{s:{r:0,c:0},e:{r:0,c:hdrDT.length-1}},{s:{r:1,c:0},e:{r:1,c:hdrDT.length-1}}];
  if(wsDT['A1'])wsDT['A1'].s={font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  if(wsDT['A2'])wsDT['A2'].s={font:{italic:true,color:{rgb:'444444'}},fill:{fgColor:{rgb:'F0F0F0'}},alignment:{horizontal:'center'}};
  _xlsHeader(wsDT, 2, hdrDT, 'B85C3A');
  XLSX.utils.book_append_sheet(wb, wsDT, '1С ГТД по импорту');

  XLSX.writeFile(wb, '1С_ВЭД_выгрузка_' + new Date().toISOString().slice(0, 10) + '.xlsx');
  showToast('✅ Выгрузка для 1С сформирована (3 листа)');
}

// ════════════════════════════════════════════
// ── TEMPLATE LIBRARY ──
// ════════════════════════════════════════════

const TPL_TEMPLATES = [
  /* ─── SUPPLIER (English) ─────────────────────────────────── */
  {
    id: 'cert_origin', group: 'supplier',
    icon: '🌐', title: 'Request for Certificate of Origin',
    desc: 'Запрос сертификата происхождения товара',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}
E-mail: ${v.sellerEmail}

Re: Certificate of Origin — Contract No. ${v.contractNum} dated ${v.contractDate}
    Shipment No.: ${v.shipmentNum}

Dear ${v.sellerContact || 'Sir/Madam'},

We hereby kindly request you to provide the Certificate of Origin for the goods supplied under the above-referenced Contract and Shipment.

Shipment details:
  Description of Goods : ${v.cargo}
  Total Value           : ${v.amount} ${v.currency}
  Country of Origin     : ${v.fromCountry}
  Port of Loading       : ${v.from}
  Port of Destination   : ${v.to}
  Estimated Date of Dep.: ${v.etd}

Please ensure the Certificate of Origin is issued by the authorized Chamber of Commerce and forwarded to us together with the full set of shipping documents.

Should you have any questions, please do not hesitate to contact us.

Thank you for your cooperation.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}
${v.buyerAddr}`,
  },
  {
    id: 'cert_quality', group: 'supplier',
    icon: '🏆', title: 'Request for Quality Certificate / Test Report',
    desc: 'Запрос сертификата качества и испытаний',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}
E-mail: ${v.sellerEmail}

Re: Quality Certificate & Test Report — Contract No. ${v.contractNum}
    Shipment No.: ${v.shipmentNum}

Dear ${v.sellerContact || 'Sir/Madam'},

In connection with the upcoming customs clearance of goods under the above Contract, we kindly request you to provide the following quality documents:

  1. Quality Certificate / Certificate of Conformity
  2. Test Report (from accredited laboratory)
  3. Technical Passport / Product Datasheet

Shipment details:
  Description : ${v.cargo}
  Quantity    : [заполнить]
  Value       : ${v.amount} ${v.currency}
  Contract No.: ${v.contractNum}

Please include originals in the shipping package and send electronic copies (PDF) to our e-mail address prior to shipment.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },
  {
    id: 'marking', group: 'supplier',
    icon: '📦', title: 'Marking & Labelling Instructions',
    desc: 'Инструкция по маркировке упаковки',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}

Re: Marking and Labelling Instructions — Contract No. ${v.contractNum}
    Shipment No.: ${v.shipmentNum}

Dear ${v.sellerContact || 'Sir/Madam'},

Please ensure that ALL packages under Shipment No. ${v.shipmentNum} are marked as follows:

┌─────────────────────────────────────────┐
│  CONSIGNEE:                             │
│  ${v.buyerName.padEnd(41)}│
│  ${v.buyerAddr.substring(0,41).padEnd(41)}│
│                                         │
│  CONTRACT No.: ${v.contractNum.padEnd(26)}│
│  SHIPMENT No.: ${v.shipmentNum.padEnd(26)}│
│  COUNTRY OF ORIGIN: ${(v.fromCountry||'[заполнить]').padEnd(21)}│
│                                         │
│  GROSS WEIGHT: _______ kg               │
│  NET WEIGHT:   _______ kg               │
│  PACKAGE No.:  _______ of _______       │
└─────────────────────────────────────────┘

Additional requirements:
  • All markings must be in English
  • Fragile items: "FRAGILE — HANDLE WITH CARE"
  • Electronic goods: "THIS SIDE UP" and "KEEP DRY"
  • Each package must have a packing list attached outside (in waterproof sleeve)

Please confirm receipt of these instructions by return e-mail.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },
  {
    id: 'delay', group: 'supplier',
    icon: '⚠️', title: 'Delay Complaint / Notice of Breach',
    desc: 'Претензия за задержку поставки',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}
E-mail: ${v.sellerEmail}

NOTICE OF DELAY — Contract No. ${v.contractNum} dated ${v.contractDate}
Shipment No.: ${v.shipmentNum} | Goods: ${v.cargo}

Dear ${v.sellerContact || 'Sir/Madam'},

We refer to Contract No. ${v.contractNum} dated ${v.contractDate} and write to formally notify you of a significant delay in the delivery of goods under the above Shipment.

As per the agreed delivery schedule, the goods were expected to be shipped by ${v.etd}. As of today, ${v.today}, we have not received confirmation of shipment / the goods have not arrived at the port of destination.

This delay is causing material disruption to our operations and we hereby request your immediate response addressing the following:

  1. Current status of production / readiness for shipment
  2. Revised estimated date of departure (ETD)
  3. Detailed explanation of reasons for the delay
  4. Your proposed measures to prevent further delays

Please be advised that in accordance with Clause [X] of Contract No. ${v.contractNum}, in the event that the delay exceeds 30 (thirty) calendar days from the agreed shipment date, we reserve the right to:
  (a) claim a penalty of [X]% of the delayed shipment value per week of delay, and/or
  (b) cancel the respective Specification and demand a full refund of any advance payment made.

We expect your written response within 3 (three) business days from the date of this letter.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}
${v.buyerAddr}`,
  },
  {
    id: 'shipping_instr', group: 'supplier',
    icon: '🚢', title: 'Shipping Instructions',
    desc: 'Инструкция по отгрузке товара',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}
E-mail: ${v.sellerEmail}

Re: Shipping Instructions — Contract No. ${v.contractNum}
    Shipment No.: ${v.shipmentNum} | Goods: ${v.cargo}

Dear ${v.sellerContact || 'Sir/Madam'},

Please find below our shipping instructions for the goods to be dispatched under the above Contract:

CONSIGNEE:
  ${v.buyerName}
  ${v.buyerAddr}

NOTIFY PARTY:
  ${v.buyerName}
  Contact: ${v.buyerRep}

SHIPPING DETAILS:
  Port of Loading   : ${v.from}
  Port of Discharge : ${v.to}
  Incoterms         : ${v.incoterms}
  Mode of Transport : ${v.modeLabel}
  Required ETD      : ${v.etd}
  Contract Value    : ${v.amount} ${v.currency}

REQUIRED DOCUMENTS (please provide full originals set):
  ☐ Commercial Invoice                    — 3 originals
  ☐ Packing List                          — 3 originals
  ☐ ${v.transportDocName.padEnd(38)}— full set of originals
  ☐ Certificate of Origin                 — 1 original
  ☐ Quality Certificate / Test Report     — 1 original
  ☐ Technical Passport / Datasheet        — 1 original

Please send scanned copies of all documents to our e-mail immediately upon shipment.
Original documents to be sent by courier to the address above.

Please confirm receipt of these instructions.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },
  {
    id: 'tech_docs', group: 'supplier',
    icon: '📐', title: 'Request for Technical Documentation',
    desc: 'Запрос техдокументации для ТР ТС / таможни',
    body: (v) => `${v.city}, ${v.today}

To: ${v.sellerName}
Attn: ${v.sellerContact}
E-mail: ${v.sellerEmail}

Re: Technical Documentation Request — Contract No. ${v.contractNum}
    Goods: ${v.cargo}

Dear ${v.sellerContact || 'Sir/Madam'},

In connection with the import customs clearance and mandatory technical certification of the goods under the above Contract in the Russian Federation (Eurasian Economic Union), we kindly request you to provide the following technical documentation:

  1. Product Datasheet / Full Technical Specifications
  2. Declaration of Conformity or Certificate of Conformity (EU/international, if available)
  3. Material Safety Data Sheet (MSDS / SDS) — if applicable
  4. Test Reports from accredited laboratory
  5. User Manual / Operation Instructions (in English is sufficient)

This documentation is required for:
  • Customs clearance under the EAEU Customs Code
  • Obtaining TR CU (Technical Regulation of the Customs Union) certification
  • Classification confirmation under the EAEU HS Code

Please send all documents in PDF format to our e-mail address at your earliest convenience, and no later than ${v.etd ? v.etd + ' (ETD)' : '[дата отгрузки]'}.

Thank you for your prompt assistance.

Best regards,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },

  /* ─── CUSTOMS BROKER (Russian) ───────────────────────────── */
  {
    id: 'broker_instr', group: 'broker',
    icon: '🛃', title: 'Инструкция таможенному брокеру',
    desc: 'Поручение на таможенное оформление поставки',
    body: (v) => `${v.city}, ${v.today}

${v.brokerName || '[Название брокера]'}
Ответственному специалисту

ИНСТРУКЦИЯ НА ТАМОЖЕННОЕ ОФОРМЛЕНИЕ

Поставка    : № ${v.shipmentNum}
Контракт    : № ${v.contractNum} от ${v.contractDate}
Поставщик   : ${v.sellerName}
Груз        : ${v.cargo}

ПАРАМЕТРЫ ОФОРМЛЕНИЯ:
  Таможенная процедура : ИМ 40 (выпуск для внутреннего потребления)
  Инкотермс            : ${v.incoterms}
  Таможенная стоимость : ${v.amount} ${v.currency}
  Страна происхождения : ${v.fromCountry || '[заполнить]'}
  Порт/пункт прибытия  : ${v.to}
  Ожидаемая дата ETA   : ${v.eta}

ДОКУМЕНТЫ В РАБОТЕ:
  ☐ Инвойс № ___ от ___
  ☐ Упаковочный лист
  ☐ ${v.transportDocName}
  ☐ Сертификат происхождения
  ☐ Качественный сертификат / Техпаспорт
  ☐ Прочие: ___________

ТН ВЭД (предварительно) : ${v.hsCode || '[уточнить]'}

Особые указания:
  [заполнить при необходимости]

По всем вопросам обращаться:
  ${v.buyerRep}, тел.: _______________, e-mail: _______________

С уважением,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },
  {
    id: 'broker_calc', group: 'broker',
    icon: '🧮', title: 'Запрос расчёта таможенных платежей',
    desc: 'Предварительный расчёт пошлин и НДС',
    body: (v) => `${v.city}, ${v.today}

${v.brokerName || '[Название брокера]'}
Ответственному специалисту

ЗАПРОС ПРЕДВАРИТЕЛЬНОГО РАСЧЁТА ТАМОЖЕННЫХ ПЛАТЕЖЕЙ

Просим произвести предварительный расчёт таможенных платежей для следующей поставки:

  Поставка           : № ${v.shipmentNum}
  Контракт           : № ${v.contractNum} от ${v.contractDate}
  Поставщик          : ${v.sellerName}, ${v.fromCountry || '[страна]'}
  Описание товара    : ${v.cargo}
  ТН ВЭД (предв.)    : ${v.hsCode || '[уточнить]'}
  Инвойсная стоимость: ${v.amount} ${v.currency}
  Условия поставки   : ${v.incoterms}
  Фрахт              : _______ ${v.currency}
  Страховка          : _______ ${v.currency}
  Порт прибытия      : ${v.to}
  Ожидаемая ETA      : ${v.eta}

Просим рассчитать:
  • Таможенную пошлину (% и сумму в руб.)
  • НДС при ввозе (22%)
  • Таможенные сборы за оформление
  • Итоговую сумму таможенных платежей в рублях (по курсу ЦБ на дату расчёта)

Расчёт необходим до: [заполнить]
Ответ направить на e-mail: _______________

С уважением,

${v.buyerRep}
${v.buyerPos}
${v.buyerName}`,
  },
];

/* ── Вспомогательные данные ──────────────────────────────── */
const TPL_MODE_LABELS = { sea:'Sea (Ocean Freight)', air:'Air (Air Freight)', rail:'Rail (Railway)', road:'Road (Truck)', multi:'Multimodal' };
const TPL_TRANSPORT_DOC = { sea:'Bill of Lading (B/L)', air:'Air Waybill (AWB)', rail:'Railway Waybill (SMGS/CIM)', road:'CMR Waybill', multi:'Bill of Lading / AWB / CMR' };

/* ── Инициализация ───────────────────────────────────────── */
function tplInit() {
  ['supplier','broker'].forEach(group => {
    const el = document.getElementById(`tpl-list-${group}`);
    if (!el) return;
    el.innerHTML = TPL_TEMPLATES.filter(t => t.group === group).map(t => `
      <div class="tpl-card" id="tpl-card-${t.id}" onclick="tplSelect('${t.id}')">
        <span style="font-size:18px">${t.icon}</span>
        <div>
          <div style="font-weight:600;font-size:12px;color:var(--text)">${t.title}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${t.desc}</div>
        </div>
      </div>`).join('');
  });
}

let _tplActive = null;

function tplSelect(id) {
  _tplActive = id;
  document.querySelectorAll('.tpl-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('tpl-card-' + id);
  if (card) card.classList.add('active');

  const tpl = TPL_TEMPLATES.find(t => t.id === id);
  if (!tpl) return;

  // Populate shipment dropdown (active company only)
  const shipments = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  const shpOptions = [{ value:'', label:'— выберите поставку —' },
    ...shipments.map(s => ({ value: s.id, label: `${s.shipment_number || s.id} · ${shpSupName(s.supplier_id)} · ${s.cargo || s.contract_id || ''}` }))
  ];

  const right = document.getElementById('tpl-right');
  right.innerHTML = `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:20px">
      <div style="font-size:15px;font-weight:700;margin-bottom:4px">${tpl.icon} ${tpl.title}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:18px">${tpl.desc}</div>

      <div class="form-grid" style="margin-bottom:16px">
        <div class="field">
          <label>Поставка (автозаполнение)</label>
          <select id="tpl-sel-shipment" onchange="tplFill()">
            ${shpOptions.map(o => `<option value="${o.value}">${o.label}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Дата письма</label>
          <input id="tpl-sel-date" type="date" value="${new Date().toISOString().slice(0,10)}" oninput="tplFill()">
        </div>
        ${tpl.group === 'broker' ? `
        <div class="field span2">
          <label>Название брокера (необязательно)</label>
          <input id="tpl-broker-name" placeholder="ООО «Таможенный брокер»" oninput="tplFill()">
        </div>` : ''}
      </div>

      <div style="display:flex;gap:8px;margin-bottom:12px">
        <button class="gen-btn" onclick="tplFill()" style="margin:0;padding:7px 16px;font-size:12px">⚡ Сформировать</button>
        <button class="gen-btn secondary" onclick="tplCopy()" style="margin:0;padding:7px 16px;font-size:12px">📋 Копировать</button>
        <button class="gen-btn secondary" onclick="tplPrint()" style="margin:0;padding:7px 16px;font-size:12px">🖨 Печать</button>
        <button class="gen-btn secondary" onclick="tplExportWord()" style="margin:0;padding:7px 14px;font-size:12px">⬇ Word</button>
      </div>

      <textarea id="tpl-preview" spellcheck="false"
        style="width:100%;min-height:520px;font-family:'Courier New',monospace;font-size:12px;
               line-height:1.7;border:1px solid var(--border);border-radius:var(--radius);
               padding:16px;background:var(--surface);color:var(--text);resize:vertical;
               white-space:pre;overflow-x:auto"
        placeholder="Нажмите «⚡ Сформировать» или выберите поставку выше"></textarea>
    </div>`;
}

function tplBuildVars(shipmentId, dateStr, brokerName) {
  const s = shipmentId ? DB_shipments.find(shipmentId) : null;
  const today = dateStr
    ? new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })
    : new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

  // Supplier from Контрагенты
  let sellerName = '—', sellerContact = '—', sellerEmail = '—', sellerAddr = '';
  if (s?.supplier_id) {
    try {
      const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
      const sup = sups.find(x => String(x.id) === String(s.supplier_id));
      if (sup) {
        sellerName    = sup.name    || sup.sellerName || '—';
        sellerContact = sup.contact || '—';
        sellerEmail   = sup.email   || '—';
        sellerAddr    = sup.addr    || '';
      }
    } catch(e) {}
  }

  // Contract data
  let contractNum = '—', contractDate = '—';
  if (s?.contract_id) {
    const ct = DB_contracts.all().find(c => c.num === s.contract_id);
    if (ct) { contractNum = ct.num || '—'; contractDate = ct.date ? ct.date.split('-').reverse().join('.') : '—'; }
    else contractNum = s.contract_id;
  }

  // Buyer (active company data)
  const _co          = COMPANIES[activeCompany] || COMPANIES['ENDV'];
  const buyerName    = _co.buyerName || _co.shortName || '—';
  const buyerAddr    = _co.buyerAddr || '—';
  const buyerRep     = _co.buyerRep  || '—';
  const buyerPos     = _co.buyerPos  || 'Генеральный директор / General Director';
  const city         = 'Moscow';

  return {
    today, city,
    shipmentNum:     s?.shipment_number   || '—',
    cargo:           s?.cargo             || s?.notes || '[заполнить]',
    amount:          s?.total_value       ? fmtNum(s.total_value) : '[заполнить]',
    currency:        s?.currency          || 'USD',
    incoterms:       s?.incoterms         || '[заполнить]',
    from:            s?.from              || '[заполнить]',
    to:              s?.to                || '[заполнить]',
    fromCountry:     s?.from_country      || '[заполнить]',
    etd:             s?.dates?.etd        || '[заполнить]',
    eta:             s?.dates?.eta        || '[заполнить]',
    modeLabel:       TPL_MODE_LABELS[s?.mode] || '[заполнить]',
    transportDocName:TPL_TRANSPORT_DOC[s?.mode] || 'Bill of Lading (B/L)',
    hsCode:          s?.hs_code           || '',
    contractNum, contractDate,
    sellerName, sellerContact, sellerEmail, sellerAddr,
    buyerName, buyerAddr, buyerRep, buyerPos,
    brokerName:      brokerName || '',
  };
}

function tplFill() {
  const tpl = TPL_TEMPLATES.find(t => t.id === _tplActive);
  if (!tpl) return;
  const shipId    = document.getElementById('tpl-sel-shipment')?.value || '';
  const dateStr   = document.getElementById('tpl-sel-date')?.value || '';
  const brokerName= document.getElementById('tpl-broker-name')?.value || '';
  const vars = tplBuildVars(shipId, dateStr, brokerName);
  const text = tpl.body(vars);
  const ta = document.getElementById('tpl-preview');
  if (ta) ta.value = text;
}

function tplCopy() {
  const ta = document.getElementById('tpl-preview');
  if (!ta || !ta.value.trim()) { showToast('⚠️ Сначала сформируйте письмо'); return; }
  navigator.clipboard.writeText(ta.value)
    .then(() => showToast('✅ Текст письма скопирован в буфер обмена'))
    .catch(() => { ta.select(); document.execCommand('copy'); showToast('✅ Скопировано'); });
}

function tplPrint() {
  const ta = document.getElementById('tpl-preview');
  if (!ta || !ta.value.trim()) { showToast('⚠️ Сначала сформируйте письмо'); return; }
  const tpl = TPL_TEMPLATES.find(t => t.id === _tplActive);
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${tpl?.title||'Письмо'}</title>
    <style>body{font-family:'Courier New',monospace;font-size:12pt;line-height:1.7;padding:20mm 25mm;white-space:pre-wrap;color:#000}
    @media print{body{padding:15mm 20mm}}
    .no-print{background:#1F7A63;color:#fff;padding:10px 16px;text-align:center;margin-bottom:20px}
    .no-print button{background:#fff;color:#1F7A63;border:none;padding:6px 14px;border-radius:4px;cursor:pointer;font-size:13px;font-weight:600;margin-right:8px}
    @media print{.no-print{display:none}}</style></head><body>
    <div class="no-print"><button onclick="window.print()">🖨 Распечатать</button><button onclick="window.close()">✕ Закрыть</button></div>
    <pre>${ta.value.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre></body></html>`);
  w.document.close();
}

function tplExportWord() {
  const ta = document.getElementById('tpl-preview');
  if (!ta || !ta.value.trim()) { showToast('⚠️ Сначала сформируйте письмо'); return; }
  const tpl = TPL_TEMPLATES.find(t => t.id === _tplActive);
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="UTF-8"><title>${tpl?.title||'Письмо'}</title>
    <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
    <style>body{font-family:Courier New,monospace;font-size:11pt;line-height:1.7;margin:2cm 3cm}
    pre{white-space:pre-wrap;font-family:inherit;font-size:inherit}</style></head>
    <body><pre>${ta.value.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre></body></html>`;
  const blob = new Blob([html], { type: 'application/msword' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (tpl?.title || 'letter').replace(/[/\\:*?"<>|]/g,'-') + '_' + new Date().toISOString().slice(0,10) + '.doc';
  a.click();
  showToast('✅ Файл Word сохранён');
}

// ════════════════════════════════════════════
// ── PAYMENTS REGISTER ──
// ════════════════════════════════════════════

let payments   = [];
let pmFilter   = 'all';
let pmView     = 'list';
let pmScans    = {};

const PM_TYPES = {
  advance:  { icon:'💰', label:'Предоплата (аванс)',      color:'var(--teal)'  },
  balance:  { icon:'💳', label:'Доплата остатка',         color:'var(--navy)'  },
  freight:  { icon:'🚢', label:'Фрахт / экспедитор',     color:'var(--blue)'  },
  customs:  { icon:'🛃', label:'Таможенные платежи',      color:'var(--rust)'  },
  broker:   { icon:'📋', label:'Таможенный брокер',       color:'var(--gold)'  },
  other:    { icon:'📌', label:'Прочий платёж',           color:'var(--text3)' },
};

const PM_STATUS = {
  paid:      { label:'Оплачено',       cls:'paid'      },
  pending:   { label:'Ожидает',        cls:'pending'   },
  overdue:   { label:'Просрочено',     cls:'overdue'   },
  partial:   { label:'Частично',       cls:'partial'   },
  cancelled: { label:'Отменён',        cls:'cancelled' },
};

function pmLoad() {
  try { const s=localStorage.getItem('ved_payments'); if(s) payments=JSON.parse(s); } catch(e) {}
  try { const s=localStorage.getItem('ved_pm_scans'); if(s) pmScans=JSON.parse(s); } catch(e) {}
}

function pmSave() {
  try { localStorage.setItem('ved_payments', JSON.stringify(payments)); } catch(e) {}
  try { localStorage.setItem('ved_pm_scans', JSON.stringify(pmScans)); } catch(e) {}
}

function pmGetStatus(p) {
  if (p.status === 'paid' || p.status === 'cancelled') return p.status;
  if (p.paidAmount > 0 && p.paidAmount < p.amount) return 'partial';
  const today = new Date(); today.setHours(0,0,0,0);
  if (p.dueDate) {
    const due = new Date(p.dueDate + 'T00:00:00');
    if (due < today) return 'overdue';
  }
  return 'pending';
}

function pmDaysUntil(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((d - today) / 86400000);
}

function pmFmtAmount(amount, currency, rate) {
  const sym = {INR:'₹',USD:'$',EUR:'€',CNY:'¥',RUB:'₽'}[currency] || currency;
  const main = parseFloat(amount||0).toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2});
  let rubStr = '';
  if (currency !== 'RUB' && rate) {
    const rub = Math.round(amount * rate);
    rubStr = ' <span style="color:var(--text3);font-size:10px">= ' + rub.toLocaleString('ru-RU') + ' ₽</span>';
  }
  return main + ' ' + sym + rubStr;
}

function pmAmountRub(p) {
  if (p.currency === 'RUB') return parseFloat(p.amount)||0;
  const rate = parseFloat(p.rate)||0;
  return rate ? (parseFloat(p.amount)||0) * rate : 0;
}

function pmSetView(v, btn) {
  pmView = v;
  document.querySelectorAll('.pm-view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPayments();
}

function pmSetFilter(f, btn) {
  pmFilter = f;
  document.querySelectorAll('.pm-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPayments();
}

function pmToggleAddForm(editId) {
  const form = document.getElementById('pm-add-form');
  const isOpen = form.style.display === 'block';
  if (isOpen && !editId) { form.style.display = 'none'; return; }
  document.getElementById('pm-edit-id').value = editId || '';
  document.getElementById('pm-form-title').textContent = editId ? 'Редактировать платёж' : 'Новый платёж';
  const dl = document.getElementById('pm-po-list');
  if (dl) {
    const pos = [...new Set(payments.map(p=>p.po).concat((shipments||[]).map(s=>s.po)))].filter(Boolean);
    dl.innerHTML = pos.map(po => '<option value="' + po + '">').join('');
  }
  if (editId) {
    const p = payments.find(x => x.id === editId);
    if (p) {
      document.getElementById('pm-f-po').value       = p.po||'';
      document.getElementById('pm-f-type').value     = p.type||'advance';
      document.getElementById('pm-f-payee').value    = p.payee||'';
      document.getElementById('pm-f-amount').value   = p.amount||'';
      document.getElementById('pm-f-currency').value = p.currency||'RUB';
      document.getElementById('pm-f-due').value      = p.dueDate||'';
      document.getElementById('pm-f-terms').value    = p.terms||'';
      document.getElementById('pm-f-priority').value = p.priority||'normal';
      document.getElementById('pm-f-note').value     = p.note||'';
    }
  } else {
    ['pm-f-po','pm-f-payee','pm-f-amount','pm-f-due','pm-f-terms','pm-f-note'].forEach(id => {
      const e = document.getElementById(id); if(e) e.value = '';
    });
    document.getElementById('pm-f-type').value     = 'advance';
    document.getElementById('pm-f-currency').value = 'INR';
    document.getElementById('pm-f-priority').value = 'normal';
  }
  form.style.display = 'block';
  document.getElementById('pm-f-po').focus();
  form.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function pmSavePayment() {
  const po     = document.getElementById('pm-f-po').value.trim();
  const amount = parseFloat(document.getElementById('pm-f-amount').value)||0;
  if (!po)     { alert('Введите номер поставки'); return; }
  if (!amount) { alert('Введите сумму платежа');  return; }
  const editId = parseInt(document.getElementById('pm-edit-id').value)||null;
  const data = {
    po, amount, type: document.getElementById('pm-f-type').value,
    payee:    document.getElementById('pm-f-payee').value.trim(),
    currency: document.getElementById('pm-f-currency').value,
    dueDate:  document.getElementById('pm-f-due').value,
    terms:    document.getElementById('pm-f-terms').value.trim(),
    priority: document.getElementById('pm-f-priority').value,
    note:     document.getElementById('pm-f-note').value.trim(),
  };
  if (editId) {
    const idx = payments.findIndex(x=>x.id===editId);
    if (idx>=0) payments[idx] = {...payments[idx], ...data};
  } else {
    payments.push({ id: Date.now(), ...data, status:'pending', paidAmount:0, paidDate:'', rate:0, ppNum:'', swift:'', created: new Date().toISOString().slice(0,10), company: activeCompany });
  }
  payments.sort((a,b) => (a.dueDate||'9999').localeCompare(b.dueDate||'9999'));
  pmSave();
  document.getElementById('pm-add-form').style.display = 'none';
  renderPayments();
}

function pmDelete(id) {
  if (!confirm('Удалить платёж?')) return;
  payments = payments.filter(p=>p.id!==id);
  delete pmScans[id];
  pmSave(); renderPayments();
}

function pmToggleConfirm(id) {
  const el = document.getElementById('pm-confirm-'+id);
  if (el) el.classList.toggle('open');
}

function pmConfirmPaid(id) {
  const p = payments.find(x=>x.id===id);
  if (!p) return;
  const paidDate   = document.getElementById('pm-cd-date-'+id)?.value   || new Date().toISOString().slice(0,10);
  const paidAmount = parseFloat(document.getElementById('pm-cd-amount-'+id)?.value) || p.amount;
  const rate       = parseFloat(document.getElementById('pm-cd-rate-'+id)?.value)   || 0;
  const ppNum      = document.getElementById('pm-cd-pp-'+id)?.value   || '';
  const swift      = document.getElementById('pm-cd-swift-'+id)?.value || '';
  p.paidDate = paidDate; p.paidAmount = paidAmount; p.rate = rate;
  p.ppNum = ppNum; p.swift = swift;
  p.status = paidAmount >= p.amount * 0.99 ? 'paid' : 'partial';
  pmSave(); renderPayments();
}

function pmMarkCancelled(id) {
  const p = payments.find(x=>x.id===id);
  if (p) { p.status='cancelled'; pmSave(); renderPayments(); }
}

function pmAttachScan(id) {
  const inp = document.getElementById('pm-scan-inp-'+id);
  if (inp) inp.click();
}

function pmHandleScan(id, files) {
  if (!files||!files.length) return;
  if (!pmScans[id]) pmScans[id] = [];
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      pmScans[id].push({ name: file.name, dataUrl: e.target.result });
      pmSave();
      const el = document.getElementById('pm-scans-'+id);
      if (el) el.innerHTML = pmRenderScans(id);
    };
    reader.readAsDataURL(file);
  });
}

function pmRenderScans(id) {
  const scans = pmScans[id] || [];
  if (!scans.length) return '<span style="font-size:10px;color:var(--text3);font-family:\'Fira Code\',monospace">Нет прикреплённых файлов</span>';
  return scans.map((s,i) =>
    '<span class="pm-scan-chip" onclick="pmViewScan('+id+','+i+')" title="'+s.name+'">' +
    '📎 '+(s.name.length>20?s.name.slice(0,18)+'…':s.name)+
    '<span onclick="pmDeleteScan('+id+','+i+');event.stopPropagation()" style="margin-left:2px;opacity:0.6">×</span></span>'
  ).join('');
}

function pmViewScan(id, i) {
  const s = pmScans[id]?.[i];
  if (!s) return;
  const w = window.open('','_blank');
  if (w) {
    w.document.write('<html><head><title>'+s.name+'</title></head><body style="margin:0;background:#111"><img src="'+s.dataUrl+'" style="max-width:100%;height:auto" onerror="this.style.display=\'none\'"><embed src="'+s.dataUrl+'" style="width:100vw;height:100vh" type="application/pdf"></body></html>');
    w.document.close();
  }
}

function pmDeleteScan(id, i) {
  if (pmScans[id]) { pmScans[id].splice(i,1); pmSave(); }
  const el = document.getElementById('pm-scans-'+id);
  if (el) el.innerHTML = pmRenderScans(id);
}

function pmSyncFromTracker() {
  if (!shipments||shipments.length===0) { alert('Нет поставок в Трекере.'); return; }
  let added = 0;
  shipments.forEach(s => {
    const paymentDate = s.dates?.payment;
    if (!paymentDate) return;
    const exists = payments.some(p => p.po===s.po && p.type==='advance');
    if (!exists) {
      const rawVal = s.value||'';
      const num = parseFloat(rawVal.replace(/[^0-9.]/g,''))||0;
      payments.push({
        id: Date.now()+Math.random(), po: s.po, type:'advance',
        payee: s.supplier||'', amount: num, currency:'INR',
        dueDate: paymentDate, terms:'По договору', priority:'high',
        note:'Импортировано из Трекера', status:'pending',
        paidAmount:0, paidDate:'', rate:0, ppNum:'', swift:'',
        created: new Date().toISOString().slice(0,10),
        company: s.company || activeCompany,
      });
      added++;
    }
  });
  if (added>0) {
    payments.sort((a,b)=>(a.dueDate||'9999').localeCompare(b.dueDate||'9999'));
    pmSave(); renderPayments();
    alert('Импортировано '+added+' платежей из Трекера');
  } else alert('Все платежи из Трекера уже присутствуют в реестре');
}

function renderPayments() {
  pmUpdateKPIs();
  const content = document.getElementById('pm-content');
  if (!content) return;
  const coPayments = payments.filter(p => (p.company || 'ENDV') === activeCompany);
  let filtered = coPayments.filter(p => pmFilter==='all' || pmGetStatus(p)===pmFilter);
  if (filtered.length===0) {
    content.innerHTML = '<div style="text-align:center;padding:60px 24px;border:1px dashed var(--border);border-radius:10px;color:var(--text3)"><div style="font-size:40px;margin-bottom:12px">💳</div><div style="font-size:18px;font-weight:300;margin-bottom:8px">'+(coPayments.length===0?'Реестр платежей пуст':'Нет платежей в этой категории')+'</div><div style="font-size:12px">'+(coPayments.length===0?'Нажмите «+ Добавить платёж» или «↻ Sync с трекером»':'Выберите другой фильтр')+'</div></div>';
    return;
  }
  if (pmView==='list') pmRenderList(content, filtered);
  else pmRenderByPo(content, filtered);
}

function pmRowHtml(p) {
  const st    = pmGetStatus(p);
  const stDef = PM_STATUS[st] || PM_STATUS.pending;
  const t     = PM_TYPES[p.type] || PM_TYPES.other;
  const days  = pmDaysUntil(p.dueDate);
  const fmtD  = d => d ? new Date(d+'T00:00:00').toLocaleDateString('ru-RU',{day:'numeric',month:'short',year:'2-digit'}) : '—';
  let daysLabel = '';
  if (st !== 'paid' && st !== 'cancelled') {
    if (days===null) daysLabel = '—';
    else if (days<0)  daysLabel = '<span style="color:var(--red);font-family:\'Fira Code\',monospace;font-size:10px">просрочено '+Math.abs(days)+' дн.</span>';
    else if (days===0) daysLabel = '<span style="color:var(--rust);font-family:\'Fira Code\',monospace;font-size:10px">сегодня!</span>';
    else if (days<=3)  daysLabel = '<span style="color:var(--rust);font-family:\'Fira Code\',monospace;font-size:10px">через '+days+' дн.</span>';
    else               daysLabel = '<span style="color:var(--text3);font-family:\'Fira Code\',monospace;font-size:10px">через '+days+' дн.</span>';
  }
  const scans = pmScans[p.id]||[];
  const scanChips = scans.length ? '<span style="font-family:\'Fira Code\',monospace;font-size:10px;color:var(--blue)">📎 '+scans.length+'</span>' : '';
  return '<tr class="'+(st==='overdue'?'pm-overdue-row':st==='paid'?'pm-paid-row':'')+'">' +
    '<td><div style="display:flex;align-items:center;gap:8px"><div class="pm-type-icon" style="background:rgba(43,122,111,0.08)">'+t.icon+'</div><div><div style="font-size:11px;font-weight:600;color:var(--navy)">'+t.label+'</div><div style="font-size:10px;color:var(--text3)">'+( p.terms||'')+'</div></div></div></td>'+
    '<td style="font-family:\'Fira Code\',monospace;font-weight:700;color:var(--co-accent);cursor:pointer;text-decoration:underline dotted;text-underline-offset:3px" onclick="openContractByNum(this.dataset.po)" data-po="'+p.po+'">'+p.po+'</td>'+
    '<td style="font-size:11px">'+(p.payee||'—')+'</td>'+
    '<td style="font-family:\'Fira Code\',monospace;font-weight:600;text-align:right">'+pmFmtAmount(p.amount,p.currency,p.rate)+(p.paidAmount&&p.paidAmount<p.amount?'<div style="font-size:9px;color:var(--gold)">уплач: '+pmFmtAmount(p.paidAmount,p.currency,p.rate)+'</div>':'')+'</td>'+
    '<td style="text-align:center">'+fmtD(p.dueDate)+'<br>'+daysLabel+'</td>'+
    '<td style="text-align:center"><div class="pm-status-badge '+stDef.cls+'">'+stDef.label+'</div></td>'+
    '<td style="text-align:center">'+(p.paidDate?'<div style="font-size:10px;font-family:\'Fira Code\',monospace">'+fmtD(p.paidDate)+'</div>':'')+(p.ppNum?'<div style="font-size:9px;color:var(--text3)">п/п '+p.ppNum+'</div>':'')+(p.swift?'<div style="font-size:9px;color:var(--blue)">MT103 ✓</div>':'')+scanChips+'</td>'+
    '<td>'+
      '<div style="display:flex;gap:4px;flex-wrap:wrap">'+
        (st!=='paid'&&st!=='cancelled'?'<button class="admin-action-btn" onclick="pmToggleConfirm('+p.id+')" style="font-size:10px">✓ Оплатить</button>':'')+
        '<button class="admin-action-btn" onclick="pmToggleAddForm('+p.id+')" style="font-size:10px">✎</button>'+
        '<button class="admin-action-btn danger" onclick="pmDelete('+p.id+')" style="font-size:10px">×</button>'+
      '</div>'+
      '<div class="pm-confirm-panel" id="pm-confirm-'+p.id+'">'+
        '<div style="font-size:10px;font-family:\'Fira Code\',monospace;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:10px">Подтверждение оплаты</div>'+
        '<div class="form-grid cols-3" style="margin-bottom:10px">'+
          '<div class="field" style="margin:0"><label>Дата оплаты</label><input type="date" id="pm-cd-date-'+p.id+'" value="'+(p.paidDate||new Date().toISOString().slice(0,10))+'" style="padding:6px 10px"></div>'+
          '<div class="field" style="margin:0"><label>Сумма ('+p.currency+')</label><input type="number" id="pm-cd-amount-'+p.id+'" value="'+(p.paidAmount||p.amount)+'" style="padding:6px 10px;font-family:\'Fira Code\',monospace"></div>'+
          '<div class="field" style="margin:0"><label>Курс к ₽</label><input type="number" id="pm-cd-rate-'+p.id+'" value="'+(p.rate||'')+'" placeholder="авто" step="0.0001" style="padding:6px 10px;font-family:\'Fira Code\',monospace"></div>'+
          '<div class="field" style="margin:0"><label>№ платёжного поручения</label><input id="pm-cd-pp-'+p.id+'" value="'+(p.ppNum||'')+'" placeholder="п/п №123" style="padding:6px 10px"></div>'+
          '<div class="field" style="margin:0"><label>SWIFT MT103 / Ref</label><input id="pm-cd-swift-'+p.id+'" value="'+(p.swift||'')+'" placeholder="SWIFT reference" style="padding:6px 10px;font-family:\'Fira Code\',monospace"></div>'+
          '<div class="field" style="margin:0"><label>Скан п/п</label>'+
            '<div><input type="file" class="pm-attach-input" id="pm-scan-inp-'+p.id+'" accept=".pdf,.jpg,.jpeg,.png" multiple onchange="pmHandleScan('+p.id+',this.files)">'+
            '<button class="admin-action-btn" onclick="pmAttachScan('+p.id+')" style="font-size:11px">📎 Прикрепить</button></div></div>'+
        '</div>'+
        '<div class="pm-scan-list" id="pm-scans-'+p.id+'">'+pmRenderScans(p.id)+'</div>'+
        '<div style="display:flex;gap:8px;margin-top:10px">'+
          '<button class="gen-btn" onclick="pmConfirmPaid('+p.id+')" style="margin-top:0;padding:7px 16px">✓ Подтвердить</button>'+
          '<button class="gen-btn secondary" onclick="pmMarkCancelled('+p.id+')" style="margin-top:0;padding:7px 14px;font-size:11px">Отменить</button>'+
          '<button class="gen-btn secondary" onclick="pmToggleConfirm('+p.id+')" style="margin-top:0;padding:7px 14px;font-size:11px">Закрыть</button>'+
        '</div>'+
      '</div>'+
    '</td></tr>';
}

function pmRenderList(container, list) {
  const tPlanRub = list.reduce((s,p)=>s+pmAmountRub(p),0);
  const tPaidRub = list.reduce((s,p)=>s+(p.currency==='RUB'?p.paidAmount||0:(p.paidAmount||0)*(p.rate||0)),0);
  container.innerHTML =
    '<div class="pm-table-wrap"><table class="pm-table">'+
    '<thead><tr>'+
      '<th style="min-width:160px">Тип платежа</th>'+
      '<th style="min-width:130px">№ PO</th>'+
      '<th style="min-width:140px">Получатель</th>'+
      '<th style="text-align:right;min-width:140px">Сумма</th>'+
      '<th style="text-align:center;min-width:110px">Срок / Осталось</th>'+
      '<th style="text-align:center;min-width:100px">Статус</th>'+
      '<th style="text-align:center;min-width:120px">Подтверждение</th>'+
      '<th style="min-width:180px">Действия</th>'+
    '</tr></thead>'+
    '<tbody>'+list.map(pmRowHtml).join('')+'</tbody>'+
    '<tfoot><tr class="pm-total-row">'+
      '<td colspan="3"><b>ИТОГО ('+list.length+' платежей)</b></td>'+
      '<td style="text-align:right;font-family:\'Fira Code\',monospace">'+
        (tPlanRub?'<b>'+Math.round(tPlanRub).toLocaleString('ru-RU')+' ₽</b>':'—')+
        (tPaidRub?'<div style="font-size:10px;color:var(--green)">уплач: '+Math.round(tPaidRub).toLocaleString('ru-RU')+' ₽</div>':'')+'</td>'+
      '<td colspan="4"></td>'+
    '</tr></tfoot>'+
    '</table></div>';
}

function pmRenderByPo(container, list) {
  const byPo = {};
  list.forEach(p => { if(!byPo[p.po]) byPo[p.po]=[]; byPo[p.po].push(p); });
  container.innerHTML = Object.keys(byPo).map(po => {
    const group = byPo[po];
    const totalAmt = group.reduce((s,p)=>s+pmAmountRub(p),0);
    const paidAmt  = group.reduce((s,p)=>s+(p.currency==='RUB'?p.paidAmount||0:(p.paidAmount||0)*(p.rate||0)),0);
    const hasOverdue = group.some(p=>pmGetStatus(p)==='overdue');
    const hasPending = group.some(p=>['pending','partial'].includes(pmGetStatus(p)));
    const pct = totalAmt>0 ? Math.round(paidAmt/totalAmt*100) : 0;
    const barColor = hasOverdue?'var(--red)':hasPending?'var(--gold)':'var(--green)';
    const pillCls  = hasOverdue?'overdue':hasPending?'pending':'paid';
    const pillTxt  = hasOverdue?'Просрочено':hasPending?'Ожидает':'Оплачено';
    const tmp = document.createElement('div'); pmRenderList(tmp, group);
    return '<div class="bg-card" style="margin-bottom:14px">'+
      '<div class="pm-group-head">'+
        '<div class="pm-group-po" onclick="openContractByNum(\''+po+'\')" title="Открыть договор" style="cursor:pointer;text-decoration:underline dotted;text-underline-offset:3px">'+po+'</div>'+
        '<div style="font-size:11px;color:var(--text3);flex:1">'+(group[0]?.payee||'')+'</div>'+
        '<div style="min-width:130px">'+
          '<div style="display:flex;justify-content:space-between;font-size:10px;font-family:\'Fira Code\',monospace;color:var(--text3);margin-bottom:3px">'+
            '<span>'+Math.round(paidAmt).toLocaleString('ru-RU')+' / '+Math.round(totalAmt).toLocaleString('ru-RU')+' ₽</span>'+
            '<span>'+pct+'%</span></div>'+
          '<div style="background:var(--border2);border-radius:3px;height:5px;overflow:hidden">'+
            '<div style="width:'+pct+'%;height:100%;background:'+barColor+';border-radius:3px"></div>'+
          '</div></div>'+
        '<div class="pm-status-badge '+pillCls+'" style="margin-left:10px">'+pillTxt+'</div>'+
      '</div>'+
      tmp.innerHTML+
    '</div>';
  }).join('');
}

function pmUpdateKPIs() {
  const today=new Date(); today.setHours(0,0,0,0);
  const in7=new Date(today); in7.setDate(in7.getDate()+7);
  let paidSum=0,paidCount=0,pendingSum=0,pendingCount=0,overdueSum=0,overdueCount=0,upcomingSum=0,upcomingCount=0;
  const coPayments = payments.filter(p => (p.company || 'ENDV') === activeCompany);
  coPayments.forEach(p => {
    const st=pmGetStatus(p); const rub=pmAmountRub(p);
    if (st==='paid'){paidSum+=rub;paidCount++;}
    else if(st==='overdue'){overdueSum+=rub;overdueCount++;}
    else if(st==='pending'||st==='partial'){
      pendingSum+=rub;pendingCount++;
      if(p.dueDate){const due=new Date(p.dueDate+'T00:00:00');if(due<=in7){upcomingSum+=rub;upcomingCount++;}}
    }
  });
  const fmtM=n=>{if(!n)return'—';if(n>=1e6)return(n/1e6).toFixed(1)+' млн';if(n>=1e3)return(n/1e3).toFixed(0)+' тыс';return Math.round(n).toLocaleString('ru-RU');};
  const el=id=>document.getElementById(id);
  if(el('pmk-total'))       el('pmk-total').textContent=coPayments.length||'—';
  if(el('pmk-paid'))        el('pmk-paid').textContent=fmtM(paidSum);
  if(el('pmk-paid-cnt'))    el('pmk-paid-cnt').textContent=paidCount?paidCount+' платежей':'';
  if(el('pmk-pending'))     el('pmk-pending').textContent=fmtM(pendingSum);
  if(el('pmk-pending-cnt')) el('pmk-pending-cnt').textContent=pendingCount?pendingCount+' платежей':'';
  if(el('pmk-overdue'))     el('pmk-overdue').textContent=fmtM(overdueSum);
  if(el('pmk-overdue-cnt')) el('pmk-overdue-cnt').textContent=overdueCount?overdueCount+' платежей':'';
  if(el('pmk-upcoming'))    el('pmk-upcoming').textContent=fmtM(upcomingSum);
  if(el('pmk-upcoming-sub'))el('pmk-upcoming-sub').textContent=upcomingCount?upcomingCount+' платежей':'';
}

function exportPaymentsExcel() {
  if (payments.length===0){alert('Реестр платежей пуст');return;}
  const wb=XLSX.utils.book_new();
  const fmtD=d=>d?new Date(d+'T00:00:00').toLocaleDateString('ru-RU'):'—';
  const hdr=['№ PO','Тип платежа','Получатель','Валюта','Сумма','Курс к ₽','Сумма ₽','Плановая дата','Статус','Дата оплаты','Уплачено','Уплачено ₽','№ п/п','SWIFT Ref','Примечание'];
  const _coName3 = (COMPANIES[activeCompany]?.shortEn || 'SUPPLY CHAIN').toUpperCase();
  const rows=[
    ['РЕЕСТР ПЛАТЕЖЕЙ · '+_coName3+' · '+new Date().toLocaleDateString('ru-RU'),...Array(hdr.length-1).fill('')],
    hdr,
    ...payments.map(p=>{
      const st=pmGetStatus(p);const t=PM_TYPES[p.type]||PM_TYPES.other;
      const rubAmt=pmAmountRub(p);const paidRub=p.currency==='RUB'?p.paidAmount||0:(p.paidAmount||0)*(p.rate||0);
      return[p.po,t.icon+' '+t.label,p.payee||'',p.currency,p.amount||0,p.rate||'',Math.round(rubAmt)||'',
        fmtD(p.dueDate),PM_STATUS[st]?.label||st,fmtD(p.paidDate),p.paidAmount||'',Math.round(paidRub)||'',p.ppNum||'',p.swift||'',p.note||''];
    }),
  ];
  const tPlan=payments.reduce((s,p)=>s+pmAmountRub(p),0);
  const tPaid=payments.reduce((s,p)=>s+(p.currency==='RUB'?p.paidAmount||0:(p.paidAmount||0)*(p.rate||0)),0);
  rows.push(['ИТОГО','','','','','',Math.round(tPlan),'','','','',Math.round(tPaid),'','','']);
  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:18},{wch:22},{wch:20},{wch:6},{wch:12},{wch:10},{wch:12},{wch:14},{wch:14},{wch:14},{wch:12},{wch:12},{wch:14},{wch:16},{wch:24}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:hdr.length-1}}];
  if(ws['A1'])ws['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0B1F3A'}},alignment:{horizontal:'center'}};
  hdr.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws[a])ws[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1C355E'}}};});
  XLSX.utils.book_append_sheet(wb,ws,'Реестр платежей');
  const overdueList=payments.filter(p=>pmGetStatus(p)==='overdue');
  if(overdueList.length>0){
    const oh=['№ PO','Тип','Получатель','Сумма','Валюта','Плановая дата','Просрочено дней'];
    const or=[['ПРОСРОЧЕННЫЕ ПЛАТЕЖИ',...Array(oh.length-1).fill('')],oh,
      ...overdueList.map(p=>[p.po,(PM_TYPES[p.type]||PM_TYPES.other).label,p.payee||'',p.amount||0,p.currency,fmtD(p.dueDate),Math.abs(pmDaysUntil(p.dueDate)||0)])];
    const ws2=XLSX.utils.aoa_to_sheet(or);
    ws2['!cols']=[{wch:18},{wch:22},{wch:20},{wch:12},{wch:8},{wch:14},{wch:16}];
    ws2['!merges']=[{s:{r:0,c:0},e:{r:0,c:oh.length-1}}];
    if(ws2['A1'])ws2['A1'].s={font:{bold:true,sz:12,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'C0392B'}},alignment:{horizontal:'center'}};
    oh.forEach((_,ci)=>{const a=XLSX.utils.encode_cell({r:1,c:ci});if(ws2[a])ws2[a].s={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'E74C3C'}}};});
    XLSX.utils.book_append_sheet(wb,ws2,'Просроченные');
  }
  XLSX.writeFile(wb,'Реестр_платежей_'+new Date().toISOString().slice(0,10)+'.xlsx');
}


// ════════════════════════════════════════════
// ── INVOICE PDF IMPORT (Claude API) ──
// ════════════════════════════════════════════

function invHandleDrop(event) {
  event.preventDefault();
  document.getElementById('inv-import-box').style.background = 'rgba(43,122,111,0.03)';
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    invShowStatus('error', '⚠ Пожалуйста, загрузите файл в формате PDF');
    return;
  }
  invImportPdf(file);
}

async function invImportPdf(file) {
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) {
    invShowStatus('error', '⚠ Файл слишком большой (максимум 20 МБ)');
    return;
  }

  invShowStatus('loading', '<span class="inv-spinner"></span>Загрузка PDF и анализ данных через Claude AI...');
  document.getElementById('inv-import-preview').style.display = 'none';

  try {
    // Convert PDF to base64
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = () => reject(new Error('Ошибка чтения файла'));
      reader.readAsDataURL(file);
    });

    invShowStatus('loading', '<span class="inv-spinner"></span>Claude анализирует инвойс... обычно занимает 10–20 секунд');

    const systemPrompt = `Ты — эксперт по анализу коммерческих инвойсов (счетов-фактур) для внешнеторговых операций.
Проанализируй PDF-инвойс и извлеки все данные в строгом JSON формате.
Верни ТОЛЬКО валидный JSON без каких-либо пояснений, markdown-блоков или другого текста.

Формат ответа:
{
  "invoiceNumber": "номер инвойса",
  "invoiceDate": "YYYY-MM-DD или пустая строка если не найдено",
  "jobNumber": "TCL job no или другой внутренний номер поставщика",
  "exporter": "полное название и адрес экспортёра/продавца одной строкой",
  "consignee": "полное название и адрес грузополучателя/покупателя одной строкой",
  "portOfLoading": "порт погрузки",
  "portOfDischarge": "порт назначения",
  "countryOfOrigin": "страна происхождения",
  "countryOfDestination": "страна назначения",
  "hsCode": "код ТН ВЭД / HS code",
  "preCarriage": "способ предварительной перевозки (например: BY ROAD)",
  "incoterms": "условия поставки (FOB, CIF и т.д.)",
  "currency": "валюта (INR, USD, EUR, CNY)",
  "items": [
    {
      "description": "полное описание товара",
      "quantity": числовое_значение,
      "unit": "единица измерения (Mtrs, Pcs, Kgs и т.д.)",
      "unitPrice": числовое_значение_цены_за_единицу,
      "amount": числовое_значение_суммы
    }
  ],
  "totalAmount": числовое_значение_итоговой_суммы,
  "bankName": "название банка продавца",
  "swift": "SWIFT/BIC код банка",
  "accountNumber": "номер счёта",
  "ifsc": "IFSC код (для индийских банков)",
  "notes": "любые важные примечания или условия из инвойса",
  "confidence": "high/medium/low — уверенность в качестве распознавания"
}

Если какое-то поле не найдено — оставь пустую строку "" или 0 для числовых полей.
Даты конвертируй в формат YYYY-MM-DD.
Суммы — только числа без символов валюты и пробелов.`;

    const response = await claudeFetch({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{
          role: 'user',
          content: [{
            type: 'document',
            source: { type: 'base64', media_type: 'application/pdf', data: base64 }
          }, {
            type: 'text',
            text: 'Извлеки все данные из этого инвойса и верни строго в формате JSON как описано в инструкции.'
          }]
        }]
      });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(`API ошибка ${response.status}: ${errData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.content?.map(b => b.text || '').join('').trim();

    // Parse JSON — strip markdown fences if present
    let extracted;
    try {
      const clean = rawText.replace(/^```[a-z]*\n?/,'').replace(/\n?```$/,'').trim();
      extracted = JSON.parse(clean);
    } catch(e) {
      throw new Error('Не удалось разобрать ответ Claude. Попробуйте другой PDF.');
    }

    invShowStatus('success', `✅ Данные успешно извлечены из «${file.name}»${extracted.confidence === 'low' ? ' · <span style="color:var(--gold)">⚠ низкая уверенность — проверьте данные</span>' : ''}`);
    invShowPreview(extracted, file.name);

  } catch(e) {
    console.error('Invoice import error:', e);
    invShowStatus('error', `⚠ Ошибка: ${e.message}`);
  }
}

function invShowStatus(type, html) {
  const el = document.getElementById('inv-import-status');
  el.style.display = '';
  const colors = {
    loading: { bg: 'rgba(43,122,111,0.08)', border: 'rgba(43,122,111,0.2)', color: 'var(--teal)' },
    success: { bg: 'rgba(31,122,99,0.08)',  border: 'rgba(31,122,99,0.2)',  color: 'var(--green)' },
    error:   { bg: 'rgba(192,57,43,0.08)',  border: 'rgba(192,57,43,0.2)',  color: 'var(--red)'   },
  };
  const c = colors[type] || colors.loading;
  el.style.cssText = `display:block;margin-top:14px;padding:11px 16px;border-radius:6px;font-size:12px;background:${c.bg};border:1px solid ${c.border};color:${c.color}`;
  el.innerHTML = html;
}

function invShowPreview(data, filename) {
  const previewEl = document.getElementById('inv-import-preview');
  previewEl.style.display = '';

  const fmtNum = n => n ? parseFloat(n).toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2}) : '—';
  const fmtVal = v => v || '<span style="color:var(--text3);font-style:italic">не найдено</span>';

  const fields = [
    ['Номер инвойса',        data.invoiceNumber],
    ['Дата',                 data.invoiceDate],
    ['Job Number',           data.jobNumber],
    ['Экспортёр',            data.exporter],
    ['Грузополучатель',      data.consignee],
    ['Порт погрузки',        data.portOfLoading],
    ['Порт назначения',      data.portOfDischarge],
    ['Страна происхождения', data.countryOfOrigin],
    ['Страна назначения',    data.countryOfDestination],
    ['HS Code',              data.hsCode],
    ['Инкотермс',            data.incoterms],
    ['Валюта',               data.currency],
    ['Банк',                 data.bankName],
    ['SWIFT',                data.swift],
    ['Счёт',                 data.accountNumber],
    ['IFSC',                 data.ifsc],
  ].filter(([,v]) => v);

  const itemsHtml = data.items?.length ? `
    <div style="margin-top:14px">
      <div style="font-size:10px;font-family:'Fira Code',monospace;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:8px">Товарные позиции (${data.items.length})</div>
      <table class="inv-extracted-table">
        <thead><tr><th>#</th><th>Описание</th><th style="text-align:right">Кол-во</th><th>Ед.</th><th style="text-align:right">Цена</th><th style="text-align:right">Сумма</th></tr></thead>
        <tbody>
          ${data.items.map((it,i) => `<tr>
            <td style="color:var(--text3);font-family:'Fira Code',monospace">${i+1}</td>
            <td>${it.description||'—'}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${it.quantity||0}</td>
            <td style="color:var(--text3)">${it.unit||''}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${fmtNum(it.unitPrice)}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace;font-weight:600">${fmtNum(it.amount)}</td>
          </tr>`).join('')}
          <tr style="background:rgba(43,122,111,0.06);font-weight:700">
            <td colspan="5" style="text-align:right;color:var(--text3);font-size:10px;font-family:'Fira Code',monospace;letter-spacing:1px">ИТОГО</td>
            <td style="text-align:right;font-family:'Fira Code',monospace;color:var(--teal)">${fmtNum(data.totalAmount)} ${data.currency||''}</td>
          </tr>
        </tbody>
      </table>
    </div>` : '';

  previewEl.innerHTML = `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:16px 18px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--navy)">Извлечённые данные · ${filename}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:2px">Проверьте данные перед применением</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="gen-btn" onclick="invApplyExtracted(${JSON.stringify(data).replace(/"/g,'&quot;')})" style="margin-top:0;padding:9px 18px;background:var(--teal);color:white;border-color:var(--teal)">
            ✓ Применить в форму
          </button>
          <button class="gen-btn secondary" onclick="document.getElementById('inv-import-preview').style.display='none'" style="margin-top:0;padding:9px 18px">
            Отмена
          </button>
        </div>
      </div>
      <div style="columns:2;column-gap:24px">
        ${fields.map(([key,val]) => `
          <div class="inv-import-field" style="break-inside:avoid">
            <div class="inv-import-key">${key}</div>
            <div class="inv-import-val">${fmtVal(val)}</div>
          </div>`).join('')}
      </div>
      ${itemsHtml}
      ${data.notes ? `<div style="margin-top:12px;padding:10px 12px;background:rgba(196,148,58,0.07);border:1px solid rgba(196,148,58,0.2);border-radius:6px;font-size:11px;color:var(--text2)"><b>Примечания:</b> ${data.notes}</div>` : ''}
    </div>`;
}

function invApplyExtracted(dataStr) {
  // dataStr comes from JSON.stringify passed via onclick attribute — already parsed by browser
  const data = typeof dataStr === 'string' ? JSON.parse(dataStr) : dataStr;

  // Fill header fields
  const setVal = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };

  setVal('i-num',         data.invoiceNumber);
  setVal('i-job',         data.jobNumber);
  setVal('i-exporter',    data.exporter);
  setVal('i-consignee',   data.consignee);
  setVal('i-pol',         data.portOfLoading);
  setVal('i-pod',         data.portOfDischarge);
  setVal('i-origin',      data.countryOfOrigin);
  setVal('i-dest',        data.countryOfDestination);
  setVal('i-hs',          data.hsCode);
  setVal('i-precarriage', data.preCarriage);

  // Date
  if (data.invoiceDate) {
    const dateEl = document.getElementById('i-date');
    if (dateEl) {
      // Already YYYY-MM-DD from Claude
      if (/^\d{4}-\d{2}-\d{2}$/.test(data.invoiceDate)) {
        dateEl.value = data.invoiceDate;
      }
    }
  }

  // Apply currency from invoice
  if (data.currency) {
    const curEl = document.getElementById('i-currency');
    if (curEl) {
      const opt = Array.from(curEl.options).find(o => o.value === data.currency);
      if (opt) curEl.value = data.currency;
    }
  }

  // Fill invoice rows (with unit from extracted data)
  if (data.items?.length) {
    invRows.length = 0;
    // Detect default unit from first item
    const firstUnit = data.items[0]?.unit || 'Pcs';
    const unitEl = document.getElementById('i-default-unit');
    if (unitEl) {
      const opt = Array.from(unitEl.options).find(o => o.value === firstUnit);
      if (opt) unitEl.value = firstUnit;
    }
    data.items.forEach(it => {
      invRows.push({
        desc:  it.description || '',
        qty:   parseFloat(it.quantity)  || 0,
        price: parseFloat(it.unitPrice) || 0,
        unit:  it.unit || firstUnit,
      });
    });
    renderInvTable();
  }

  // Close preview
  document.getElementById('inv-import-preview').style.display = 'none';
  invShowStatus('success', `✅ Данные применены — ${data.items?.length || 0} позиций загружено. Проверьте и при необходимости скорректируйте форму.`);

  // Scroll to form
  document.getElementById('i-num')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ════════════════════════════════════════════
// ── PACKING LIST PDF IMPORT (Claude AI) ──
// ════════════════════════════════════════════

function plHandleDrop(event) {
  event.preventDefault();
  document.getElementById('pl-import-box').style.background = 'rgba(43,122,111,0.03)';
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    plShowStatus('error', '⚠ Пожалуйста, загрузите файл в формате PDF');
    return;
  }
  plImportPdf(file);
}

async function plImportPdf(file) {
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) {
    plShowStatus('error', '⚠ Файл слишком большой (максимум 20 МБ)');
    return;
  }

  plShowStatus('loading', '<span class="inv-spinner"></span>Загрузка PDF и анализ данных через Claude AI...');
  document.getElementById('pl-import-preview').style.display = 'none';

  try {
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = () => reject(new Error('Ошибка чтения файла'));
      reader.readAsDataURL(file);
    });

    plShowStatus('loading', '<span class="inv-spinner"></span>Claude анализирует упаковочный лист... обычно 10–20 секунд');

    const systemPrompt = `Ты — эксперт по анализу упаковочных листов (Packing List) для внешнеторговых операций.
Проанализируй PDF и извлеки все данные в строгом JSON формате.
Верни ТОЛЬКО валидный JSON без пояснений, markdown-блоков или другого текста.

Формат ответа:
{
  "plNumber": "номер упаковочного листа",
  "plDate": "YYYY-MM-DD или пустая строка",
  "invoiceRef": "номер инвойса на который ссылается PL",
  "shipper": "полное название и адрес отправителя/продавца одной строкой",
  "consignee": "полное название и адрес грузополучателя/покупателя одной строкой",
  "countryOfOrigin": "страна происхождения",
  "countryOfDestination": "страна назначения",
  "portOfLoading": "порт/пункт погрузки",
  "portOfDischarge": "порт/пункт назначения",
  "incoterms": "условия поставки (FOB, CIF, EXW и т.д.)",
  "hsCode": "код ТН ВЭД / HS code",
  "shippingMode": "способ доставки (Sea, Air, Road, Rail)",
  "forwarder": "название экспедитора если есть",
  "totalPackages": числовое_значение_мест,
  "packageType": "тип упаковки (Cartons, Pallets, Drums, Rolls и т.д.)",
  "totalNetWeight": числовое_значение_нетто_кг,
  "totalGrossWeight": числовое_значение_брутто_кг,
  "totalVolume": числовое_значение_объём_м3,
  "dimensions": "габариты ящиков например 120x80x90",
  "shippingMarks": "маркировка грузовых мест как в документе",
  "specialInstructions": "особые инструкции или примечания",
  "signedBy": "имя и должность подписанта",
  "signPlace": "место подписания",
  "signDate": "YYYY-MM-DD дата подписания или пустая строка",
  "items": [
    {
      "description": "полное описание товара",
      "quantity": числовое_значение,
      "unit": "единица измерения (Mtrs, Pcs, Kgs, Sets, Rolls, Cartons и т.д.)",
      "netWeight": числовое_значение_нетто_кг,
      "grossWeight": числовое_значение_брутто_кг,
      "volume": числовое_значение_объём_м3,
      "packages": числовое_значение_мест
    }
  ],
  "confidence": "high/medium/low"
}

Если поле не найдено — пустая строка или 0 для числовых. Даты → YYYY-MM-DD. Веса/объёмы — только числа.`;

    const response = await claudeFetch({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: [{
          type: 'document',
          source: { type: 'base64', media_type: 'application/pdf', data: base64 }
        }, {
          type: 'text',
          text: 'Извлеки все данные из этого упаковочного листа и верни строго в формате JSON.'
        }]
      }]
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(`API ошибка ${response.status}: ${errData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.content?.map(b => b.text || '').join('').trim();

    let extracted;
    try {
      const clean = rawText.replace(/^```[a-z]*\n?/,'').replace(/\n?```$/,'').trim();
      extracted = JSON.parse(clean);
    } catch(e) {
      throw new Error('Не удалось разобрать ответ Claude. Попробуйте другой PDF.');
    }

    plShowStatus('success', `✅ Данные успешно извлечены из «${file.name}»${extracted.confidence === 'low' ? ' · <span style="color:var(--gold)">⚠ низкая уверенность — проверьте данные</span>' : ''}`);
    plShowPreview(extracted, file.name);

  } catch(e) {
    console.error('PL import error:', e);
    plShowStatus('error', `⚠ Ошибка: ${e.message}`);
  }
}

function plShowStatus(type, html) {
  const el = document.getElementById('pl-import-status');
  const colors = {
    loading: { bg: 'rgba(43,122,111,0.08)', border: 'rgba(43,122,111,0.2)', color: 'var(--teal)' },
    success: { bg: 'rgba(31,122,99,0.08)',  border: 'rgba(31,122,99,0.2)',  color: 'var(--green)' },
    error:   { bg: 'rgba(192,57,43,0.08)',  border: 'rgba(192,57,43,0.2)',  color: 'var(--red)'   },
  };
  const c = colors[type] || colors.loading;
  el.style.cssText = `display:block;margin-top:-10px;margin-bottom:14px;padding:11px 16px;border-radius:6px;font-size:12px;background:${c.bg};border:1px solid ${c.border};color:${c.color}`;
  el.innerHTML = html;
}

function plShowPreview(data, filename) {
  const previewEl = document.getElementById('pl-import-preview');
  previewEl.style.display = '';

  const fmtN = n => n ? parseFloat(n).toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:3}) : '—';
  const fmtVal = v => v || '<span style="color:var(--text3);font-style:italic">не найдено</span>';

  const fields = [
    ['№ Упаковочного листа', data.plNumber],
    ['Дата',                 data.plDate],
    ['Инвойс №',             data.invoiceRef],
    ['Отправитель',          data.shipper],
    ['Получатель',           data.consignee],
    ['Порт погрузки',        data.portOfLoading],
    ['Порт назначения',      data.portOfDischarge],
    ['Страна происхождения', data.countryOfOrigin],
    ['Страна назначения',    data.countryOfDestination],
    ['Инкотермс',            data.incoterms],
    ['HS Code',              data.hsCode],
    ['Способ доставки',      data.shippingMode],
    ['Мест всего',           data.totalPackages ? String(data.totalPackages) : ''],
    ['Тип упаковки',         data.packageType],
    ['Нетто, кг',            data.totalNetWeight ? fmtN(data.totalNetWeight) : ''],
    ['Брутто, кг',           data.totalGrossWeight ? fmtN(data.totalGrossWeight) : ''],
    ['Объём, м³',            data.totalVolume ? fmtN(data.totalVolume) : ''],
  ].filter(([,v]) => v);

  const itemsHtml = data.items?.length ? `
    <div style="margin-top:14px">
      <div style="font-size:10px;font-family:'Fira Code',monospace;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:8px">Товарные позиции (${data.items.length})</div>
      <table class="inv-extracted-table">
        <thead><tr><th>#</th><th>Описание</th><th style="text-align:right">Кол-во</th><th>Ед.</th><th style="text-align:right">Нетто</th><th style="text-align:right">Брутто</th><th style="text-align:right">Мест</th></tr></thead>
        <tbody>
          ${data.items.map((it,i) => `<tr>
            <td style="color:var(--text3);font-family:'Fira Code',monospace">${i+1}</td>
            <td>${it.description||'—'}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${it.quantity||0}</td>
            <td style="color:var(--text3)">${it.unit||''}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${fmtN(it.netWeight)}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${fmtN(it.grossWeight)}</td>
            <td style="text-align:right;font-family:'Fira Code',monospace">${it.packages||'—'}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : '';

  // Serialize data for onclick (escape quotes)
  const dataJson = JSON.stringify(data).replace(/"/g,'&quot;');

  previewEl.innerHTML = `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:16px 18px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--navy)">Извлечённые данные · ${filename}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:2px">Проверьте данные перед применением</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="gen-btn" onclick="plApplyExtracted(&quot;${dataJson}&quot;)" style="margin-top:0;padding:9px 18px;background:var(--teal);color:white;border-color:var(--teal)">
            ✓ Применить в форму
          </button>
          <button class="gen-btn secondary" onclick="document.getElementById('pl-import-preview').style.display='none'" style="margin-top:0;padding:9px 18px">
            Отмена
          </button>
        </div>
      </div>
      <div style="columns:2;column-gap:24px">
        ${fields.map(([key,val]) => `
          <div class="inv-import-field" style="break-inside:avoid">
            <div class="inv-import-key">${key}</div>
            <div class="inv-import-val">${fmtVal(val)}</div>
          </div>`).join('')}
      </div>
      ${itemsHtml}
      ${data.shippingMarks ? `<div style="margin-top:12px;padding:10px 12px;background:rgba(43,122,111,0.06);border:1px solid rgba(43,122,111,0.15);border-radius:6px;font-size:11px;font-family:'Fira Code',monospace;white-space:pre-wrap;color:var(--text2)"><b>Маркировка:</b>\n${data.shippingMarks}</div>` : ''}
      ${data.specialInstructions ? `<div style="margin-top:8px;padding:10px 12px;background:rgba(196,148,58,0.07);border:1px solid rgba(196,148,58,0.2);border-radius:6px;font-size:11px;color:var(--text2)"><b>Примечания:</b> ${data.specialInstructions}</div>` : ''}
    </div>`;
}

function plApplyExtracted(dataStr) {
  const data = typeof dataStr === 'string' ? JSON.parse(dataStr) : dataStr;
  const sv = (id, val) => { const el = document.getElementById(id); if (el && val !== undefined && val !== '' && val !== 0) el.value = val; };

  sv('pl-num',       data.plNumber);
  sv('pl-inv-ref',   data.invoiceRef);
  sv('pl-shipper',   data.shipper);
  sv('pl-origin',    data.countryOfOrigin);
  sv('pl-consignee', data.consignee);
  sv('pl-dest',      data.countryOfDestination);
  sv('pl-pol',       data.portOfLoading);
  sv('pl-pod',       data.portOfDischarge);
  sv('pl-hs',        data.hsCode);
  sv('pl-forwarder', data.forwarder);
  sv('pl-dims',      data.dimensions);
  sv('pl-marks',     data.shippingMarks);
  sv('pl-notes',     data.specialInstructions);
  sv('pl-signer',    data.signedBy);
  sv('pl-sign-place',data.signPlace);

  if (data.plDate && /^\d{4}-\d{2}-\d{2}$/.test(data.plDate)) sv('pl-date', data.plDate);
  if (data.signDate && /^\d{4}-\d{2}-\d{2}$/.test(data.signDate)) sv('pl-sign-date', data.signDate);

  // Totals
  if (data.totalPackages) { const el = document.getElementById('pl-total-pkgs'); if (el) { el.value = data.totalPackages; el.dataset.manual = '1'; } }
  if (data.totalNetWeight) { const el = document.getElementById('pl-net-total'); if (el) { el.value = parseFloat(data.totalNetWeight).toFixed(2); el.dataset.manual = '1'; } }
  if (data.totalGrossWeight) { const el = document.getElementById('pl-gross-total'); if (el) { el.value = parseFloat(data.totalGrossWeight).toFixed(2); el.dataset.manual = '1'; } }
  if (data.totalVolume) { const el = document.getElementById('pl-vol-total'); if (el) { el.value = parseFloat(data.totalVolume).toFixed(3); el.dataset.manual = '1'; } }

  // Incoterms select
  if (data.incoterms) {
    const incoEl = document.getElementById('pl-inco');
    if (incoEl) {
      const opt = Array.from(incoEl.options).find(o => o.value.startsWith(data.incoterms.toUpperCase().split(' ')[0]));
      if (opt) incoEl.value = opt.value;
    }
  }

  // Package type select
  if (data.packageType) {
    const pkgEl = document.getElementById('pl-pkg-type');
    if (pkgEl) {
      const opt = Array.from(pkgEl.options).find(o => o.value.toLowerCase().includes(data.packageType.toLowerCase().slice(0,4)));
      if (opt) pkgEl.value = opt.value;
    }
  }

  // Shipping mode select
  if (data.shippingMode) {
    const modeEl = document.getElementById('pl-mode');
    if (modeEl) {
      const mode = data.shippingMode.toLowerCase();
      const opt = Array.from(modeEl.options).find(o =>
        o.value.toLowerCase().includes(mode) || mode.includes(o.value.toLowerCase().split(' ')[0])
      );
      if (opt) modeEl.value = opt.value;
    }
  }

  // Fill items
  if (data.items?.length) {
    plRows.length = 0;
    data.items.forEach(it => {
      plRows.push({
        desc:  it.description || '',
        qty:   parseFloat(it.quantity)   || 0,
        unit:  it.unit || 'Pcs',
        net:   parseFloat(it.netWeight)  || 0,
        gross: parseFloat(it.grossWeight)|| 0,
        vol:   parseFloat(it.volume)     || 0,
        pkgs:  parseFloat(it.packages)   || 0,
      });
    });
    plRenderTable();
    plCalcTotals();
  }

  document.getElementById('pl-import-preview').style.display = 'none';
  plShowStatus('success', `✅ Данные применены — ${data.items?.length || 0} позиций загружено. Проверьте форму.`);
  document.getElementById('pl-num')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ════════════════════════════════════════════
// ── MULTI-COMPANY SUPPORT ──
// ════════════════════════════════════════════

const COMPANIES = {
  ENDV: {
    id: 'ENDV',
    shortName: 'ООО «Ендейвер»',
    shortEn: 'Endeavour LLC',
    fullName: 'Общество с ограниченной ответственностью «Ендейвер»',
    code: 'ENDV',
    color: '#1F7A63',
    colorLight: 'rgba(31,122,99,0.10)',
    colorBorder: 'rgba(31,122,99,0.30)',
    // Buyer fields for contract/invoice
    buyerName: 'ООО «Ендейвер» / Endeavour LLC',
    buyerAddr: '117335, г. Москва, ул. Вавилова, д. 79, корп. 1, эт. 2, пом. 6, ком. 1-11 / 79/1 Vavilova Street, 117335 Moscow, Russia',
    buyerRep: 'Кирилюк Сергей Георгиевич / Sergey G. Kiriluk',
    buyerPos: 'Генеральный директор / General Director',
    buyerInn: '7728764357',
    buyerKpp: '773601001',
    buyerOgrn: '1117746130347',
    buyerOkpo: '90549853',
    buyerPhone: '+7 499 134 1200',
    buyerEmail: 'info@endv.su',
    buyerBank: 'АО «Альфа-Банк», г. Москва / JSC Alfa-Bank, Moscow',
    buyerBik: '044525593',
    buyerAcc: 'RUR: 40702810002300007544 | USD: 40702840702300002217 | EUR: 40702978602300001756 | CNY: 40702156101300001260',
    buyerSwift: 'ALFARUMM',
    buyerCorr: '30101810200000000593',
    buyerBankAddr: '119261, г. Москва, Ленинский проспект, д. 78 / Leninsky Prospect 78, Moscow',
    consigneeEn: 'ENDEAVOUR LLC, 79/1 Vavilova Street, Office 6-3, 117335 Moscow, Russia',
    docPrefix: 'ENDV',
    rfqCompany: 'ENDEAVOUR',
    logoType: 'img', // base64 img
  },
  PBS: {
    id: 'PBS',
    shortName: 'ООО «Петробалт Сервис»',
    shortEn: 'Petrobalt Service LLC',
    fullName: 'Общество с ограниченной ответственностью «ПЕТРОБАЛТ СЕРВИС»',
    code: 'PBS',
    color: '#D64545',
    colorLight: 'rgba(214,69,69,0.10)',
    colorBorder: 'rgba(214,69,69,0.30)',
    buyerName: 'ООО «Петробалт Сервис» / Petrobalt Service LLC',
    buyerAddr: '238315, Российская Федерация, Калининградская область, мун. округ Зеленоградский, территория Индустриальный парк Храброво, ул. Инноваций, зд. 1 / Khrabrovo Industrial Park, Ulitsa Innovaciy zd.1, Zelenogradsk area, Kaliningrad region, 238315, Russia',
    buyerRep: 'Кирилюк Сергей Георгиевич / Sergey G. Kiriluk',
    buyerPos: 'Генеральный директор / General Director',
    buyerInn: '3918015359',
    buyerKpp: '391801001',
    buyerOgrn: '1203900013679',
    buyerOkpo: '46249207',
    buyerPhone: '+7 401 220 11 05',
    buyerEmail: 'info@petrobalt.com.ru',
    buyerBank: 'АО «Альфа-Банк» / JSC Alfa-Bank',
    buyerBik: '044525593',
    buyerAcc: 'RUR: 40702810401400015273',
    buyerSwift: 'ALFARUMM',
    buyerCorr: '30101810200000000593',
    buyerBankAddr: '119261, г. Москва, Ленинский проспект, д. 78 / Leninsky Prospect 78, Moscow',
    consigneeEn: 'PETROBALT SERVICE LLC, Khrabrovo Industrial Park, Ulitsa Innovaciy zd.1, 238315 Kaliningrad region, Russia',
    docPrefix: 'PBS',
    rfqCompany: 'PETROBALT SERVICE',
    logoType: 'svg',
  }
};

let activeCompany = 'ENDV'; // default

function getCompany(id) {
  return COMPANIES[id || activeCompany];
}

function setActiveCompany(id) {
  if (!COMPANIES[id]) return;
  activeCompany = id;
  try { localStorage.setItem('ved_active_company', id); } catch(e) {}

  const co = COMPANIES[id];

  // 1. Update CSS variables on :root for accent color throughout app
  const root = document.documentElement;
  root.style.setProperty('--co-accent',        co.color);
  root.style.setProperty('--co-accent-light',  co.colorLight);
  root.style.setProperty('--co-accent-border', co.colorBorder);
  // sidebar active bg follows company accent
  root.style.setProperty('--nav-active-bg',    co.colorLight);

  // 2. Update header switcher buttons — ENDV=green, PBS=red
  Object.values(COMPANIES).forEach(c => {
    const btn = document.getElementById('hdr-btn-' + c.id);
    if (!btn) return;
    const isActive = c.id === id;
    const activeBg = c.id === 'ENDV' ? '#1F7A63' : '#D64545';
    btn.style.background  = isActive ? activeBg : 'transparent';
    btn.style.color       = isActive ? '#FFFFFF' : '#6B7280';
    btn.style.fontWeight  = isActive ? '600' : '500';
    btn.style.boxShadow   = isActive
      ? (c.id === 'ENDV' ? '0 1px 4px rgba(31,122,99,0.30)' : '0 1px 4px rgba(214,69,69,0.30)')
      : 'none';
  });

  // 3. Update company-tab elements in document forms
  renderCompanyTabs();

  // 4. Fill form fields with company data
  applyCompanyToForms(id);

  // 5. Reload data in any currently-visible module so it shows only active company's data
  const sectionVisible = id => {
    const el = document.getElementById(id);
    return el && el.style.display !== 'none' && !el.hidden;
  };
  if (sectionVisible('section-shipments'))  { shpLoad(); }
  if (sectionVisible('section-contracts'))  { ctRenderList(); }
  if (sectionVisible('section-budget'))     { renderBudgets(); bgUpdateSummary(); }
  if (sectionVisible('section-payments'))   { renderPayments(); }
  if (sectionVisible('section-deadlines'))  { renderDeadlines(); }
}

function loadActiveCompany() {
  try {
    const saved = localStorage.getItem('ved_active_company');
    if (saved && COMPANIES[saved]) activeCompany = saved;
  } catch(e) {}
}

function renderCompanyTabs() {
  // Update all .company-tab elements already in DOM
  document.querySelectorAll('.company-tab[data-company]').forEach(tab => {
    const id = tab.dataset.company;
    const co = COMPANIES[id];
    if (!co) return;
    const isActive = id === activeCompany;
    tab.style.borderBottom = isActive ? `3px solid ${co.color}` : '3px solid transparent';
    tab.style.color        = isActive ? co.color : 'var(--text3)';
    tab.style.fontWeight   = isActive ? '700' : '400';
    const dot = tab.querySelector('.company-tab-dot');
    if (dot) dot.style.background = isActive ? co.color : 'var(--border)';
  });
}

function applyCompanyToForms(id) {
  const co = COMPANIES[id];
  if (!co) return;

  const sv = (elId, val) => { const el = document.getElementById(elId); if (el && val !== undefined) el.value = val; };

  // Contract buyer fields
  sv('c-buyer-name',     co.buyerName);
  sv('c-buyer-addr',     co.buyerAddr);
  sv('c-buyer-rep',      co.buyerRep);
  sv('c-buyer-pos',      co.buyerPos);
  sv('c-buyer-inn',      co.buyerInn + ' / КПП ' + co.buyerKpp);
  sv('c-buyer-ogrn',     co.buyerOgrn);
  sv('c-buyer-bank',     co.buyerBank);
  sv('c-buyer-bik',      co.buyerBik);
  sv('c-buyer-acc',      co.buyerAcc);
  sv('c-buyer-swift',    co.buyerSwift);
  sv('c-buyer-corr',     co.buyerCorr);
  sv('c-buyer-bankaddr', co.buyerBankAddr);

  // Contract number prefix
  const cnumEl = document.getElementById('c-num');
  if (cnumEl) cnumEl.value = cnumEl.value.replace(/^(ENDV|PBS)/, co.docPrefix);

  // Spec contract number
  const snumEl = document.getElementById('s-contract-num');
  if (snumEl) snumEl.value = snumEl.value.replace(/^(ENDV|PBS)/, co.docPrefix);

  // Invoice / packing list consignee
  sv('i-consignee',   co.consigneeEn);
  sv('pl-consignee',  co.consigneeEn);

  // RFQ company name
  sv('rfq-from-company', co.rfqCompany);

  // PO placeholder in tracker modal
  const poEl = document.getElementById('m-po');
  if (poEl) poEl.placeholder = `${co.docPrefix}2026-XX/X`;
}

// Inject company tabs HTML into a target element
function renderCompanyTabsInto(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div style="display:flex;gap:0;border-bottom:2px solid var(--border);margin-bottom:20px" id="company-tabs-${containerId}">
      ${Object.values(COMPANIES).map(co => `
        <div class="company-tab" data-company="${co.id}"
          onclick="setActiveCompany('${co.id}')"
          style="display:flex;align-items:center;gap:8px;padding:10px 22px;cursor:pointer;transition:all 0.2s;border-bottom:3px solid transparent;margin-bottom:-2px;user-select:none">
          <span class="company-tab-dot" style="width:8px;height:8px;border-radius:50%;background:var(--border);flex-shrink:0;transition:background 0.2s"></span>
          <span style="font-size:12px;font-family:'Mulish',sans-serif;transition:color 0.2s">${co.shortName}</span>
          <span style="font-size:10px;font-family:'Fira Code',monospace;font-weight:700;padding:2px 7px;border-radius:20px;background:${co.colorLight};color:${co.color};border:1px solid ${co.colorBorder}">${co.code}</span>
        </div>`).join('')}
    </div>`;
  renderCompanyTabs();
}

// Company badge for shipment cards in tracker
function companyBadgeHtml(companyId) {
  const co = COMPANIES[companyId] || COMPANIES.ENDV;
  return `<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;font-size:10px;font-family:'Fira Code',monospace;font-weight:700;background:${co.colorLight};color:${co.color};border:1px solid ${co.colorBorder};flex-shrink:0">${co.code}</span>`;
}



// ── TRACKER COMPANY FILTER ──
let trackerCompanyFilter = 'all';

function trackerSetCompanyFilter(filter, btn) {
  trackerCompanyFilter = filter;
  document.querySelectorAll('.tracker-co-tab').forEach(t => {
    const isActive = t.dataset.filter === filter;
    const id = t.dataset.filter;
    const co = COMPANIES[id];
    t.style.color = isActive ? (co ? co.color : 'var(--navy)') : 'var(--text3)';
    t.style.fontWeight = isActive ? '600' : '400';
    t.style.borderBottom = isActive ? `3px solid ${co ? co.color : 'var(--navy)'}` : '3px solid transparent';
  });
  renderShipments();
}






/* ═══════════════════════════════════════════════
   CONTRACT / SPEC — SAVE TO LOCALSTORAGE
═══════════════════════════════════════════════ */
function contractSaveToStorage() {
  try {
    const d = getContractData();
    const saved = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
    const idx = saved.findIndex(x => x.num === d.num);
    // Assign delivery num if not already set for this contract
    let delivNum = '';
    // Приоритет: 1) уже есть в ved_contracts → сохраняем как есть
    //            2) уже заполнено в форме (загружено из DB_contracts) → берём его
    //            3) генерируем новый номер
    const formDelivNum = (document.getElementById('c-delivery-num')?.value || '').trim();
    const validFormNum = formDelivNum && !formDelivNum.includes('предпросмотр');
    if (idx >= 0 && saved[idx].deliveryNum) {
      delivNum = saved[idx].deliveryNum; // keep existing
    } else if (validFormNum) {
      delivNum = formDelivNum; // уже назначен — из DB_contracts при загрузке
    } else {
      delivNum = generateDeliveryNum(d.company || d.buyerPrefix || activeCompany, new Date(d.date || Date.now()).getFullYear());
    }
    const entry = { ...d, deliveryNum: delivNum, savedAt: new Date().toISOString() };
    if (idx >= 0) saved[idx] = entry; else saved.push(entry);
    // Show in form
    const dnEl = document.getElementById('c-delivery-num');
    if (dnEl) { dnEl.value = delivNum; }
    const dhEl = document.getElementById('c-delivery-hint');
    if (dhEl) { dhEl.textContent = 'Поставка зарегистрирована · ' + new Date().toLocaleDateString('ru'); }
    localStorage.setItem('ved_contracts', JSON.stringify(saved));
    const area = document.getElementById('preview-area') || document.querySelector('.preview-area');
    if (area) {
      const tip = document.createElement('div');
      tip.style.cssText = 'position:absolute;top:14px;left:14px;background:rgba(31,122,99,0.1);border:1px solid rgba(31,122,99,0.3);color:var(--green);font-size:11px;padding:4px 12px;border-radius:20px;font-family:"JetBrains Mono",monospace;z-index:10';
      tip.textContent = '✓ Договор сохранён для автозаполнения';
      area.style.position = 'relative';
      area.appendChild(tip);
      setTimeout(() => tip.remove(), 3000);
    }
  } catch(e) { console.warn('Contract save error:', e); }
}

function specSaveToStorage() {
  try {
    const num = document.getElementById('s-contract-num')?.value || '';
    const specNum = document.getElementById('s-num')?.value || '';
    if (!num) return;
    const saved = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
    const idx = saved.findIndex(x => x.num === num);
    const specRows = [];
    document.querySelectorAll('#spec-table-body tr').forEach(tr => {
      const cells = tr.querySelectorAll('input');
      if (cells.length >= 4 && cells[0]?.value) {
        specRows.push({ desc: cells[0]?.value||'', hs: cells[1]?.value||'', qty: cells[2]?.value||'', unit: cells[3]?.value||'', price: cells[4]?.value||'' });
      }
    });
    if (idx >= 0) { saved[idx].specRows = specRows; saved[idx].specNum = specNum; }
    else saved.push({ num, specNum, specRows, savedAt: new Date().toISOString() });
    localStorage.setItem('ved_contracts', JSON.stringify(saved));
  } catch(e) { console.warn('Spec save error:', e); }
}

function contractFindByNum(num) {
  if (!num || num.length < 4) return null;
  try {
    const saved = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
    return saved.find(x => x.num && x.num.trim().toLowerCase() === num.trim().toLowerCase()) || null;
  } catch(e) { return null; }
}

/* ═══════════════════════════════════════════════
   AUTOFILL BY CONTRACT NUMBER
═══════════════════════════════════════════════ */
function contractAutoFill(num, context) {
  const ct = contractFindByNum(num);
  if (context === 'tracker') {
    const hint = document.getElementById('m-autofill-hint');
    if (!hint) return;
    if (!ct) {
      hint.style.display = num.length > 3 ? 'block' : 'none';
      hint.style.color = 'var(--text3)';
      hint.textContent = num.length > 3 ? '⚠ Договор не найден — заполните вручную' : '';
      return;
    }
    const sup = document.getElementById('m-supplier');
    if (sup && !sup.value) sup.value = ct.sellerName || '';
    const inco = document.getElementById('m-inco');
    if (inco && ct.inco) { const v = ct.inco.split(' ')[0]; const o = Array.from(inco.options).find(x=>x.value===v); if(o) inco.value=v; }
    hint.style.display = 'block';
    hint.style.color = 'var(--co-accent)';
    hint.textContent = `✓ Договор найден: ${ct.sellerName||''} · ${ct.currency||''} · ${ct.inco||''}`;
  }
  if (context === 'payments') {
    const hint = document.getElementById('pm-autofill-hint');
    if (!hint) return;
    if (!ct) {
      hint.style.display = num.length > 3 ? 'block' : 'none';
      hint.style.color = 'var(--text3)';
      hint.textContent = num.length > 3 ? '⚠ Договор не найден — заполните вручную' : '';
      return;
    }
    const cur = document.getElementById('pm-f-currency');
    if (cur && ct.currency) { const v = ct.currency.trim().split(/\s/)[0]; const o = Array.from(cur.options).find(x=>x.value===v); if(o) cur.value=v; }
    const desc = document.getElementById('pm-f-desc');
    if (desc && !desc.value && ct.sellerName) desc.value = ct.sellerName;
    hint.style.display = 'block';
    hint.style.color = 'var(--co-accent)';
    hint.textContent = `✓ Договор найден: ${ct.sellerName||''} · ${ct.currency||''} · ${ct.inco||''}`;
  }
}

/* ═══════════════════════════════════════════════
   CONTRACT PDF IMPORT
═══════════════════════════════════════════════ */
function ctHandleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer?.files?.[0];
  if (file && file.type === 'application/pdf') ctImportPdf(file);
}

async function ctImportPdf(file) {
  if (!file) return;
  const statusEl = document.getElementById('ct-import-status');
  const previewEl = document.getElementById('ct-import-preview');
  const box = document.getElementById('ct-import-box');
  statusEl.style.display = 'block';
  statusEl.innerHTML = '<span style="color:var(--co-accent)">⏳ Анализирую договор...</span>';
  previewEl.style.display = 'none';
  box.style.opacity = '0.5';
  try {
    const b64 = await new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result.split(',')[1]);
      r.onerror = () => rej(new Error('Read failed'));
      r.readAsDataURL(file);
    });
    const resp = await claudeFetch({
        model: 'claude-sonnet-4-6', max_tokens: 2000,
        messages: [{ role: 'user', content: [
          { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: b64 } },
          { type: 'text', text: 'Extract supply contract data. Return ONLY valid JSON with keys: num, date (YYYY-MM-DD), sellerName, sellerAddr, sellerRep, sellerPos, sellerBank, sellerSwift, sellerAcc, sellerIfsc, buyerName, buyerAddr, buyerRep, buyerPos, buyerInn, buyerOgrn, buyerBank, buyerBik, buyerAcc, buyerSwift, buyerCorr, buyerBankAddr, inco (one of: EXW/FCA/FOB/FOT/DAP), payment, currency (3-letter code), deliveryAddr, leadtime, warranty. Use empty string for missing fields. No other text.' }
        ]}]
      });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('').replace(/```json|```/g,'').trim();
    window._ctExtracted = JSON.parse(text);
    ctShowPreview(window._ctExtracted);
    statusEl.innerHTML = '<span style="color:var(--green)">✓ Данные извлечены — проверьте и примените</span>';
  } catch(e) {
    let msg = e.message;
    if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('Load failed')) {
      msg = 'Нет доступа к API. Если файл открыт локально — запустите: <code>python3 -m http.server 8080</code> и откройте через localhost. Или используйте текстовый режим ↓';
      document.getElementById('ct-paste-box').style.display = 'block';
    }
    statusEl.innerHTML = `<span style="color:var(--red)">⚠ ${msg}</span>`;
  }
  box.style.opacity = '1';
}

function ctShowPreview(d) {
  const rows = [['Номер договора',d.num],['Дата',d.date],['Продавец',d.sellerName],['Покупатель',d.buyerName],['Инкотермс',d.inco],['Валюта',d.currency],['Условия оплаты',d.payment],['Банк продавца',d.sellerBank]].filter(([,v])=>v);
  document.getElementById('ct-preview-table').innerHTML = `<table style="width:100%;font-size:12px;border-collapse:collapse">${rows.map(([k,v])=>`<tr><td style="padding:4px 10px 4px 0;color:var(--text3);font-family:'JetBrains Mono',monospace;font-size:10px;white-space:nowrap;width:160px">${k}</td><td style="padding:4px 0;color:var(--text);font-weight:500">${v}</td></tr>`).join('')}</table>`;
  document.getElementById('ct-import-preview').style.display = 'block';
}

function ctApplyExtracted() {
  const d = window._ctExtracted;
  if (!d) return;
  const map = { 'c-num':d.num,'c-date':d.date,'c-seller-name':d.sellerName,'c-seller-addr':d.sellerAddr,'c-seller-rep':d.sellerRep,'c-seller-pos':d.sellerPos,'c-seller-bank':d.sellerBank,'c-seller-swift':d.sellerSwift,'c-seller-acc':d.sellerAcc,'c-seller-ifsc':d.sellerIfsc,'c-buyer-name':d.buyerName,'c-buyer-addr':d.buyerAddr,'c-buyer-rep':d.buyerRep,'c-buyer-pos':d.buyerPos,'c-buyer-inn':d.buyerInn,'c-buyer-ogrn':d.buyerOgrn,'c-buyer-bank':d.buyerBank,'c-buyer-bik':d.buyerBik,'c-buyer-acc':d.buyerAcc,'c-buyer-swift':d.buyerSwift,'c-buyer-corr':d.buyerCorr,'c-buyer-bankaddr':d.buyerBankAddr,'c-payment':d.payment,'c-delivery-addr':d.deliveryAddr,'c-leadtime':d.leadtime,'c-warranty':d.warranty };
  Object.entries(map).forEach(([id,val])=>{ const el=document.getElementById(id); if(el&&val) el.value=val; });
  if (d.inco) { const el=document.getElementById('c-inco'); if(el){ const v=d.inco.split(' ')[0].toUpperCase(); const o=Array.from(el.options).find(x=>x.value===v); if(o) el.value=v; } }
  if (d.currency) { const el=document.getElementById('c-currency'); if(el){ const o=Array.from(el.options).find(x=>x.value===d.currency); if(o) el.value=d.currency; else{ el.value='OTHER'; toggleOtherCurrency('c-currency-other',el); const inp=document.getElementById('c-currency-other'); if(inp) inp.value=d.currency; } } }
  document.getElementById('ct-import-preview').style.display='none';
  document.getElementById('ct-import-status').innerHTML='<span style="color:var(--green)">✓ Поля заполнены из PDF</span>';
  contractSaveToStorage();
}

/* ═══════════════════════════════════════════════
   TOGGLE OTHER CURRENCY
═══════════════════════════════════════════════ */
function toggleOtherCurrency(inputId, selectEl) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  inp.style.display = selectEl.value === 'OTHER' ? 'block' : 'none';
  if (selectEl.value === 'OTHER') inp.focus();
}

/* ═══════════════════════════════════════════════
   INVOICE — SPEC ROWS AUTO-PREVIEW
═══════════════════════════════════════════════ */
function invCheckSpecRows(contractNum) {
  if (!contractNum || contractNum.length < 4) return;
  const ct = contractFindByNum(contractNum);
  if (!ct || !ct.specRows || !ct.specRows.length) return;
  const hasRows = invRows && invRows.some(r => r.desc);
  if (hasRows) return;
  const banner = document.getElementById('inv-spec-banner');
  if (!banner) return;
  banner.style.display = 'block';
  banner.innerHTML = `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap"><div><span style="font-weight:600;color:var(--co-accent)">📋 Найдена спецификация:</span> <span style="font-size:12px;color:var(--text2)">${ct.specRows.length} поз. из договора ${ct.num}</span></div><div style="display:flex;gap:8px"><button class="gen-btn" onclick="invApplySpecRows()" style="margin:0;padding:6px 14px;font-size:11px">Подставить позиции</button><button class="gen-btn secondary" onclick="document.getElementById('inv-spec-banner').style.display='none'" style="margin:0;padding:6px 14px;font-size:11px">Пропустить</button></div></div>`;
  window._pendingSpecRows = ct.specRows;
}

function invApplySpecRows() {
  const rows = window._pendingSpecRows;
  if (!rows || !rows.length) return;
  invRows = rows.map(r => ({ desc: r.desc||'', qty: parseFloat(r.qty)||1, unit: r.unit||'шт', price: parseFloat(r.price)||0 }));
  renderInvTable();
  document.getElementById('inv-spec-banner').style.display='none';
}

/* ═══════════════════════════════════════════════
   API KEY MANAGEMENT
═══════════════════════════════════════════════ */
/* ── API key: read from localStorage, fallback to cookie ── */
function _apiKeyCookieName() { return 'ved_ak'; }

function _apiKeyReadCookie() {
  try {
    const m = document.cookie.match('(?:^|; )' + _apiKeyCookieName() + '=([^;]*)');
    return m ? decodeURIComponent(m[1]) : '';
  } catch(e) { return ''; }
}

function _apiKeyWriteCookie(val) {
  try {
    const exp = new Date(); exp.setFullYear(exp.getFullYear() + 1);
    document.cookie = _apiKeyCookieName() + '=' + encodeURIComponent(val)
      + '; expires=' + exp.toUTCString() + '; path=/; SameSite=Lax';
  } catch(e) {}
}

function _apiKeyDeleteCookie() {
  try {
    document.cookie = _apiKeyCookieName() + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax';
  } catch(e) {}
}

function getApiKey() {
  // Primary: localStorage. Fallback: cookie (survives browser cache clears)
  const ls = localStorage.getItem('ved_anthropic_key') || '';
  if (ls) return ls;
  const ck = _apiKeyReadCookie();
  if (ck) {
    // Restore to localStorage from cookie
    try { localStorage.setItem('ved_anthropic_key', ck); } catch(e) {}
  }
  return ck;
}

function _apiKeyUpdateHeaderIndicator() {
  const el = document.getElementById('hdr-api-indicator');
  if (!el) return;
  const has = !!getApiKey();
  el.title    = has ? 'API ключ Claude: задан ✓' : 'API ключ Claude: не задан — нажмите ⚙';
  el.style.color      = has ? 'var(--green)' : 'var(--red)';
  el.textContent = has ? '🔑' : '🔑';
  el.style.opacity = has ? '0.7' : '1';
  el.style.filter  = has ? 'none' : 'drop-shadow(0 0 3px rgba(214,69,69,0.6))';
}

/* ── Бэкап данных: экспорт/импорт всех ved_* ключей localStorage ── */
function vedExportBackup() {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && (k.indexOf('ved_') === 0 || k.indexOf('_si_') === 0 ||
              k.indexOf('_cat_') === 0 || k.indexOf('_cdt_') === 0 ||
              k.indexOf('_api_') === 0)) {
      data[k] = localStorage.getItem(k);
    }
  }
  const payload = { _ved_backup: true, version: 1, exported_at: new Date().toISOString(), keys: Object.keys(data).length, data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ved-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const st = document.getElementById('ved-backup-status');
  if (st) st.innerHTML = `<span style="color:var(--green)">✓ Выгружено ${payload.keys} разделов данных</span>`;
}

function vedImportBackup(file) {
  if (!file) return;
  const st = document.getElementById('ved-backup-status');
  const reader = new FileReader();
  reader.onload = function () {
    let payload;
    try { payload = JSON.parse(reader.result); }
    catch (e) { if (st) st.innerHTML = '<span style="color:var(--red)">⚠ Не удалось прочитать файл (не JSON)</span>'; return; }
    if (!payload || !payload._ved_backup || !payload.data) {
      if (st) st.innerHTML = '<span style="color:var(--red)">⚠ Это не файл бэкапа ВЭД-системы</span>'; return;
    }
    const cnt = Object.keys(payload.data).length;
    if (!confirm(`Восстановить ${cnt} разделов из бэкапа от ${(payload.exported_at||'').slice(0,10)}?\n\nТЕКУЩИЕ данные в этом браузере будут ЗАМЕНЕНЫ. Рекомендуем сначала скачать свой бэкап.`)) return;
    try {
      Object.keys(payload.data).forEach(k => localStorage.setItem(k, payload.data[k]));
      if (st) st.innerHTML = `<span style="color:var(--green)">✓ Восстановлено ${cnt} разделов. Перезагрузка…</span>`;
      setTimeout(() => location.reload(), 800);
    } catch (e) {
      if (st) st.innerHTML = '<span style="color:var(--red)">⚠ Ошибка записи: ' + e.message + '</span>';
    }
  };
  reader.onerror = function () { if (st) st.innerHTML = '<span style="color:var(--red)">⚠ Ошибка чтения файла</span>'; };
  reader.readAsText(file);
}

function showApiKeyModal() {
  const modal = document.getElementById('apikey-modal');
  const inp = document.getElementById('apikey-input');
  const saved = getApiKey();
  if (inp) inp.value = saved ? saved.slice(0,8) + '••••••••••••••••••••' : '';
  modal.style.display = 'flex';
  const st = document.getElementById('apikey-status');
  if (st) st.innerHTML = saved
    ? '<span style="color:var(--green)">✓ Ключ сохранён (localStorage + cookie)</span>'
    : '<span style="color:var(--text3)">Ключ не задан</span>';
  _apiKeyUpdateHeaderIndicator();
}

function saveApiKey() {
  const inp = document.getElementById('apikey-input');
  const val = inp?.value?.trim() || '';
  if (!val || val.includes('•')) {
    document.getElementById('apikey-status').innerHTML = '<span style="color:var(--red)">Введите новый ключ</span>';
    return;
  }
  // Save to BOTH localStorage AND cookie (1 year)
  try { localStorage.setItem('ved_anthropic_key', val); } catch(e) {}
  _apiKeyWriteCookie(val);
  document.getElementById('apikey-status').innerHTML = '<span style="color:var(--green)">✓ Ключ сохранён (localStorage + cookie)</span>';
  inp.value = val.slice(0,8) + '••••••••••••••••••••';
  _apiKeyUpdateHeaderIndicator();
}

function clearApiKey() {
  localStorage.removeItem('ved_anthropic_key');
  _apiKeyDeleteCookie();
  document.getElementById('apikey-input').value = '';
  document.getElementById('apikey-status').innerHTML = '<span style="color:var(--text3)">Ключ удалён</span>';
  _apiKeyUpdateHeaderIndicator();
}

async function testApiKey() {
  const key = getApiKey();
  const st = document.getElementById('apikey-status');
  if (!key) { st.innerHTML = '<span style="color:var(--red)">Сначала введите и сохраните ключ</span>'; return; }
  st.innerHTML = '<span style="color:var(--text3)">⏳ Проверка...</span>';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'ping' }]
      })
    });
    if (r.ok) {
      st.innerHTML = '<span style="color:var(--green)">✓ Ключ работает!</span>';
    } else {
      const e = await r.json().catch(()=>({}));
      st.innerHTML = `<span style="color:var(--red)">⚠ Ошибка ${r.status}: ${e.error?.message||r.statusText}</span>`;
    }
  } catch(e) {
    st.innerHTML = `<span style="color:var(--red)">⚠ ${e.message}</span>`;
  }
}

function claudeFetch(body) {
  const key = getApiKey();
  if (!key) {
    throw new Error('API ключ не задан. Нажмите ⚙ API в шапке и введите ключ Anthropic.');
  }
  // Direct Anthropic API call — supported from browsers with this header
  return fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });
}


/* ═══════════════════════════════════════════════
   ENVIRONMENT CHECK + TEXT FALLBACK
═══════════════════════════════════════════════ */
function checkEnvAndShowWarning() {
  if (location.protocol !== 'file:') return;
  // Small unobtrusive indicator in bottom-right — no full banner
  const tip = document.createElement('div');
  tip.style.cssText = 'position:fixed;bottom:10px;right:10px;background:var(--surface);border:1px solid var(--border);color:var(--text3);padding:4px 10px;border-radius:20px;font-size:10px;font-family:"JetBrains Mono",monospace;z-index:9000;cursor:pointer;opacity:0.7';
  tip.title = 'Файл открыт через file://. Для работы PDF-импорта: python3 -m http.server 8080';
  tip.textContent = 'file://';
  tip.onclick = () => tip.remove();
  document.body.appendChild(tip);
}

function toggleCtPasteMode() {
  const box = document.getElementById('ct-paste-box');
  if (!box) return;
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
  if (box.style.display === 'block') {
    document.getElementById('ct-paste-text')?.focus();
  }
}

async function ctImportFromText() {
  const text = document.getElementById('ct-paste-text')?.value?.trim();
  if (!text || text.length < 50) {
    document.getElementById('ct-import-status').style.display = 'block';
    document.getElementById('ct-import-status').innerHTML = '<span style="color:var(--red)">⚠ Вставьте текст договора (минимум 50 символов)</span>';
    return;
  }
  const statusEl = document.getElementById('ct-import-status');
  const previewEl = document.getElementById('ct-import-preview');
  statusEl.style.display = 'block';
  statusEl.innerHTML = '<span style="color:var(--co-accent)">⏳ Claude анализирует текст договора...</span>';
  previewEl.style.display = 'none';
  try {
    const resp = await claudeFetch({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content:
        'Extract supply contract data from this text. Return ONLY valid JSON with keys: num, date (YYYY-MM-DD), sellerName, sellerAddr, sellerRep, sellerPos, sellerBank, sellerSwift, sellerAcc, sellerIfsc, buyerName, buyerAddr, buyerRep, buyerPos, buyerInn, buyerOgrn, buyerBank, buyerBik, buyerAcc, buyerSwift, buyerCorr, buyerBankAddr, inco (one of: EXW/FCA/FOB/FOT/DAP), payment, currency (3-letter code), deliveryAddr, leadtime, warranty. Use empty string for missing fields. No other text.\n\nCONTRACT TEXT:\n' + text.slice(0, 12000)
      }]
    });
    if (!resp.ok) {
      const e = await resp.json().catch(()=>({}));
      throw new Error(`API ${resp.status}: ${e.error?.message || resp.statusText}`);
    }
    const data = await resp.json();
    const raw = (data.content||[]).map(b=>b.text||'').join('').replace(/```json|```/g,'').trim();
    window._ctExtracted = JSON.parse(raw);
    ctShowPreview(window._ctExtracted);
    statusEl.innerHTML = '<span style="color:var(--green)">✓ Реквизиты извлечены — проверьте и примените</span>';
    document.getElementById('ct-paste-box').style.display = 'none';
  } catch(e) {
    let msg = e.message;
    if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
      msg = 'Нет доступа к API. Откройте файл через http://localhost:8080 (см. предупреждение в правом нижнем углу)';
    }
    statusEl.innerHTML = `<span style="color:var(--red)">⚠ ${msg}</span>`;
  }
}

// Also improve ctImportPdf error message

/* ═══════════════════════════════════════════════
   CONTRACT LINK — navigate & highlight
═══════════════════════════════════════════════ */
function openContractByNum(num) {
  if (!num) return;
  // Navigate to contract section
  showSection('contract');
  // Highlight the contract number field
  setTimeout(() => {
    const numField = document.getElementById('c-num');
    if (!numField) return;
    // If field already has this contract — just scroll and flash
    if (numField.value === num) {
      numField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      numField.style.transition = 'background 0.3s';
      numField.style.background = 'rgba(31,122,99,0.15)';
      setTimeout(() => { numField.style.background = ''; }, 1500);
      return;
    }
    // Check if this contract is in storage
    const ct = contractFindByNum(num);
    if (ct) {
      // Autofill the contract form from saved data
      const map = {
        'c-num': ct.num, 'c-date': ct.date,
        'c-seller-name': ct.sellerName, 'c-seller-addr': ct.sellerAddr,
        'c-seller-rep': ct.sellerRep, 'c-seller-pos': ct.sellerPos,
        'c-seller-bank': ct.sellerBank, 'c-seller-swift': ct.sellerSwift,
        'c-seller-acc': ct.sellerAcc, 'c-seller-ifsc': ct.sellerIfsc,
        'c-buyer-name': ct.buyerName, 'c-buyer-addr': ct.buyerAddr,
        'c-buyer-rep': ct.buyerRep, 'c-buyer-pos': ct.buyerPos,
        'c-buyer-inn': ct.buyerInn, 'c-buyer-ogrn': ct.buyerOgrn,
        'c-buyer-bank': ct.buyerBank, 'c-buyer-bik': ct.buyerBik,
        'c-buyer-acc': ct.buyerAcc, 'c-buyer-swift': ct.buyerSwift,
        'c-buyer-corr': ct.buyerCorr, 'c-buyer-bankaddr': ct.buyerBankAddr,
        'c-payment': ct.payment, 'c-delivery-addr': ct.deliveryAddr,
        'c-leadtime': ct.leadtime, 'c-warranty': ct.warranty,
      };
      Object.entries(map).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el && val) el.value = val;
      });
      if (ct.inco) {
        const incoEl = document.getElementById('c-inco');
        if (incoEl) { const o = Array.from(incoEl.options).find(x => x.value === ct.inco.split(' ')[0]); if (o) incoEl.value = o.value; }
      }
      if (ct.currency) {
        const curEl = document.getElementById('c-currency');
        if (curEl) { const o = Array.from(curEl.options).find(x => x.value === ct.currency); if (o) curEl.value = ct.currency; }
      }
      // Flash highlight
      numField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      numField.style.transition = 'background 0.3s';
      numField.style.background = 'rgba(31,122,99,0.15)';
      setTimeout(() => { numField.style.background = ''; }, 1500);
      // Show toast
      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;top:70px;right:20px;background:var(--co-accent);color:#fff;padding:10px 18px;border-radius:8px;font-size:12px;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2)';
      toast.textContent = '✓ Договор ' + num + ' загружен';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    } else {
      // Contract not in storage — just navigate and set the number
      numField.value = num;
      numField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      numField.style.transition = 'background 0.3s';
      numField.style.background = 'rgba(192,57,43,0.08)';
      setTimeout(() => { numField.style.background = ''; }, 1500);
      // Show hint
      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;top:70px;right:20px;background:var(--surface);border:1px solid var(--border);color:var(--text2);padding:10px 18px;border-radius:8px;font-size:12px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.15)';
      toast.innerHTML = '⚠ Договор <b>' + num + '</b> не найден в базе.<br><span style="font-size:11px;color:var(--text3)">Сформируйте договор — он сохранится автоматически.</span>';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    }
  }, 200);
}

/* ═══════════════════════════════════════════════
   РЕЕСТР ПОСТАВОК — DASHBOARD
═══════════════════════════════════════════════ */
let regFilter = 'all';

function setRegTab(filter, btn) {
  regFilter = filter;
  document.querySelectorAll('.reg-tab').forEach(t => {
    t.classList.remove('active');
    t.style.color = 'var(--text3)';
    t.style.borderBottomColor = 'transparent';
  });
  btn.classList.add('active');
  btn.style.color = 'var(--co-accent)';
  btn.style.borderBottomColor = 'var(--co-accent)';
  renderRegistry();
}

function toggleModuleGrid(el) {
  const wrap = document.getElementById('module-grid-wrap');
  const lbl  = document.getElementById('module-grid-toggle');
  const open = wrap.style.display === 'none';
  wrap.style.display = open ? 'block' : 'none';
  lbl.textContent = open ? '▴ свернуть модули' : '▾ все модули';
}

function renderRegistry() {
  const listEl  = document.getElementById('reg-list');
  const emptyEl = document.getElementById('reg-empty');
  const kpiEl   = document.getElementById('reg-kpi');
  const cntEl   = document.getElementById('reg-count');
  if (!listEl) return;

  // ── Build unified shipment list from tracker ──
  const allShips = (shipments || []).slice();

  // Also add contracts from localStorage that have NO shipment
  const contractsRaw = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
  const trackerPOs   = new Set(allShips.map(s => s.po));
  contractsRaw.forEach(ct => {
    if (ct.num && !trackerPOs.has(ct.num)) {
      allShips.push({
        id: 'ct_' + ct.num,
        po: ct.num,
        company: ct.buyerName && ct.buyerName.includes('Петробалт') ? 'PBS' : 'ENDV',
        supplier: ct.sellerName || '',
        cargo: '',
        value: '',
        from: ct.sellerAddr ? ct.sellerAddr.split(',').pop().trim() : '',
        to: ct.deliveryAddr || '',
        mode: '',
        inco: ct.inco || '',
        currentStage: 0,
        dates: {},
        _fromContract: true,
        _ct: ct,
      });
    }
  });

  // Filter by company
  const filtered = regFilter === 'all'
    ? allShips
    : allShips.filter(s => (s.company || 'ENDV') === regFilter);

  // ── KPI ──
  const today = new Date(); today.setHours(0,0,0,0);
  const totalPMs = (payments || []);

  const kpiPlanning = filtered.filter(s => (s.currentStage || 0) === 0).length;
  const kpiActive   = filtered.filter(s => s.currentStage > 0 && s.currentStage < PIPE_STAGES.length - 1).length;
  const kpiDone     = filtered.filter(s => s.currentStage >= PIPE_STAGES.length - 1).length;

  // total contract value in RUB equivalent (just sum numeric values from tracker)
  let totalVal = 0;
  filtered.forEach(s => {
    const v = parseFloat((s.value || '').toString().replace(/[^0-9.]/g,''));
    if (!isNaN(v)) totalVal += v;
  });

  // Overdue deadlines for filtered POs
  const filteredPOs = new Set(filtered.map(s => s.po));
  const overdueCount = (deadlines || []).filter(d => {
    if (!filteredPOs.has(d.po) && d.po) return false;
    if (d.done) return false;
    return new Date(d.date) < today;
  }).length;

  if (kpiEl) kpiEl.innerHTML = [
    { num: filtered.length, label: 'Всего поставок', color: 'var(--text)' },
    { num: kpiPlanning,     label: 'Планирование',   color: 'var(--text3)' },
    { num: kpiActive,       label: 'Активных',        color: 'var(--co-accent)' },
    { num: kpiDone,         label: 'Завершено',        color: 'var(--green)' },
    { num: overdueCount,    label: 'Просрочено',       color: overdueCount > 0 ? 'var(--red)' : 'var(--text3)' },
  ].map(k => `
    <div class="reg-kpi-box">
      <div class="reg-kpi-num" style="color:${k.color}">${k.num}</div>
      <div class="reg-kpi-label">${k.label}</div>
    </div>`).join('');

  if (cntEl) cntEl.textContent = filtered.length
    ? filtered.length + ' поставок'
    : '';

  if (!filtered.length) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';

  // ── Column headers ──
  listEl.innerHTML = `
    <div style="display:grid;grid-template-columns:200px 1fr 180px 170px 160px;gap:16px;padding:0 20px 8px;font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px">
      <div>Договор / Поставщик</div>
      <div>Этап поставки</div>
      <div>Сумма / Оплата</div>
      <div>Ближайший дедлайн</div>
      <div>Маршрут</div>
    </div>` +
    filtered.map(s => regBuildCard(s, totalPMs, deadlines || [])).join('');
}

function regBuildCard(s, allPayments, allDeadlines) {
  const co = COMPANIES && COMPANIES[s.company || 'ENDV'];
  const coColor = co ? co.color : 'var(--co-accent)';
  const isDone  = s.currentStage >= PIPE_STAGES.length - 1;

  // ── Pipeline mini-bar ──
  const totalStages = PIPE_STAGES.length;
  const cur = s.currentStage || 0;
  let pipeHTML = '<div class="reg-pipeline">';
  PIPE_STAGES.forEach((st, i) => {
    const done   = i < cur;
    const active = i === cur;
    pipeHTML += `<div class="reg-pip-step ${done?'done':''} ${active?'active':''}" title="${st.label.replace('\n',' ')}"></div>`;
    if (i < totalStages - 1) pipeHTML += `<div class="reg-pip-line ${done?'done':''}"></div>`;
  });
  pipeHTML += '</div>';
  const stageLabel = PIPE_STAGES[cur]
    ? PIPE_STAGES[cur].icon + ' ' + PIPE_STAGES[cur].label.replace('\n', ' ')
    : '';

  // ── Payments ──
  const shiPays = allPayments.filter(p => p.po === s.po);
  let paidAmt = 0, totalAmt = 0;
  shiPays.forEach(p => {
    const amt = parseFloat(p.amount) || 0;
    const paid = parseFloat(p.paidAmount) || 0;
    const rate = parseFloat(p.rate) || 1;
    if (p.currency === 'RUB') { totalAmt += amt; paidAmt += paid; }
    else { totalAmt += amt * rate; paidAmt += paid * rate; }
  });
  // Fallback: use shipment value
  const rawVal = parseFloat((s.value||'').toString().replace(/[^0-9.]/g,'')) || 0;
  const displayAmt = totalAmt > 0 ? totalAmt : rawVal;
  const pct = displayAmt > 0 ? Math.min(100, Math.round(paidAmt / displayAmt * 100)) : 0;
  const currency = shiPays[0]?.currency || (s.value ? s.value.toString().replace(/[0-9., ]/g,'').trim() || '' : '');

  const amtStr = displayAmt > 0
    ? displayAmt.toLocaleString('ru-RU', {maximumFractionDigits:0}) + (currency ? ' ' + currency : '')
    : (s.value || '—');

  // ── Nearest deadline ──
  const today = new Date(); today.setHours(0,0,0,0);
  const shiDls = allDeadlines
    .filter(d => d.po === s.po && !d.done && d.date)
    .sort((a,b) => a.date.localeCompare(b.date));

  // Also check tracker dates
  const trackerDates = [];
  if (s.dates) {
    Object.entries(s.dates).forEach(([k,v]) => {
      if (v) trackerDates.push({ name: k, date: v });
    });
  }
  const allDates = [
    ...shiDls.map(d => ({ name: d.name, date: d.date })),
    ...trackerDates,
  ].filter(d => d.date >= today.toISOString().slice(0,10))
   .sort((a,b) => a.date.localeCompare(b.date));

  let dlHTML = '<div class="reg-deadline muted">—</div>';
  if (allDates.length) {
    const nearest = allDates[0];
    const diff = Math.round((new Date(nearest.date) - today) / 86400000);
    const cls = diff < 0 ? 'red' : diff <= 3 ? 'orange' : diff <= 7 ? 'orange' : 'green';
    const diffStr = diff < 0 ? `${Math.abs(diff)}д просрочено` : diff === 0 ? 'сегодня' : `через ${diff}д`;
    dlHTML = `<div class="reg-deadline ${cls}">${diffStr}</div>
              <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${nearest.name}</div>
              <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">${nearest.date.slice(5).replace('-','/')}</div>`;
  }

  // ── Route ──
  const route = s.from && s.to
    ? `<div style="font-size:12px;color:var(--text2);font-weight:500">${s.from}</div>
       <div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">↓ ${s.mode || ''}</div>
       <div style="font-size:12px;color:var(--text2);font-weight:500">${s.to}</div>`
    : '<div style="color:var(--text3);font-size:11px">—</div>';

  const compCls = (s.company === 'PBS') ? 'company-PBS' : '';
  const doneCls = isDone ? 'status-done' : '';

  return `<div class="reg-card ${compCls} ${doneCls}" onclick="openContractByNum('${s.po}')" style="border-left-color:${coColor}">
    <div>
      <div class="reg-po">${s.po || '—'}</div>
      <div class="reg-supplier">${s.supplier || '—'}</div>
      <div class="reg-route">${s.inco || ''} ${s.cargo ? '· ' + s.cargo.slice(0,30) : ''}</div>
    </div>
    <div>
      ${pipeHTML}
      <div class="reg-stage-label">${stageLabel}</div>
    </div>
    <div>
      <div class="reg-amount">${amtStr}</div>
      ${displayAmt > 0 ? `
        <div class="reg-paid-bar-wrap"><div class="reg-paid-bar" style="width:${pct}%"></div></div>
        <div class="reg-paid-label">${pct}% оплачено</div>` : ''}
    </div>
    <div>${dlHTML}</div>
    <div>${route}</div>
  </div>`;
}

// Hook: re-render registry when navigating to dashboard

function specContractHint(num) {
  const hint = document.getElementById('s-contract-hint');
  if (!hint) return;
  if (!num || num.length < 4) { hint.textContent = ''; return; }
  const ct = contractFindByNum(num);
  if (ct) {
    hint.style.color = 'var(--co-accent)';
    hint.textContent = '✓ Договор найден: ' + (ct.sellerName || '') + (ct.currency ? ' · ' + ct.currency : '');
  } else {
    hint.style.color = 'var(--text3)';
    hint.textContent = '⚠ Договор не найден в базе';
  }
}

/* ═══════════════════════════════════════════════
   SPEC — PROFORMA IMPORT (PDF/IMG/XLSX/DOCX/TEXT)
═══════════════════════════════════════════════ */
let _spExtracted = null;

function toggleSpPasteMode() {
  const box = document.getElementById('sp-paste-box');
  if (!box) return;
  const show = box.style.display === 'none';
  box.style.display = show ? 'block' : 'none';
  if (show) document.getElementById('sp-paste-text')?.focus();
}

function spImportDrop(e) {
  e.preventDefault();
  document.getElementById('sp-import-box')?.classList.remove('dragover');
  const file = e.dataTransfer?.files?.[0];
  if (file) spImportFile(file);
}

async function spImportFile(file) {
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  spSetStatus('loading', '⏳ Читаю файл...');

  try {
    if (['xlsx','xls'].includes(ext)) {
      await spImportExcel(file);
    } else if (['doc','docx'].includes(ext)) {
      await spImportWord(file);
    } else if (['jpg','jpeg','png','webp'].includes(ext)) {
      await spImportImage(file);
    } else if (ext === 'pdf') {
      await spImportPdf(file);
    } else {
      spSetStatus('error', '⚠ Неподдерживаемый формат. Используйте PDF, Excel, Word или изображение.');
    }
  } catch(e) {
    let msg = e.message;
    if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('Load failed')) {
      msg = 'Нет доступа к API. Откройте файл через http://localhost:8080 или используйте кнопку «Вставить текст».';
    }
    spSetStatus('error', '⚠ ' + msg);
  }
}

// ── EXCEL ──────────────────────────────────────
async function spImportExcel(file) {
  spSetStatus('loading', '⏳ Читаю Excel...');
  const buf = await file.arrayBuffer();
  const wb  = XLSX.read(buf, { type: 'array' });
  const ws  = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

  // Convert raw rows to text for Claude to parse
  const text = rows.map(r => r.join('\t')).join('\n').slice(0, 12000);
  spSetStatus('loading', '⏳ Claude анализирует таблицу...');
  await spImportFromText(text, 'excel');
}

// ── WORD ───────────────────────────────────────
async function spImportWord(file) {
  spSetStatus('loading', '⏳ Читаю Word документ...');
  const mammoth = await import('https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js').catch(() => null);
  if (!mammoth) {
    // Fallback: read as ArrayBuffer and send to Claude as document
    spSetStatus('loading', '⏳ Обрабатываю Word...');
  }
  const buf = await file.arrayBuffer();
  // Use mammoth if available, otherwise try direct text extraction
  let text = '';
  try {
    const result = await mammoth.extractRawText({ arrayBuffer: buf });
    text = result.value.slice(0, 12000);
  } catch(e) {
    // Send as base64 to Claude
    const b64 = btoa(String.fromCharCode(...new Uint8Array(buf.slice(0, 512000))));
    spSetStatus('loading', '⏳ Claude читает документ...');
    await spImportPdfB64(b64, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    return;
  }
  spSetStatus('loading', '⏳ Claude анализирует документ...');
  await spImportFromText(text, 'word');
}

// ── IMAGE (scan/photo) ──────────────────────────
async function spImportImage(file) {
  spSetStatus('loading', '⏳ Читаю изображение...');
  const b64 = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('Ошибка чтения файла'));
    r.readAsDataURL(file);
  });
  const mediaType = file.type || 'image/jpeg';
  spSetStatus('loading', '⏳ Claude распознаёт скан...');

  const resp = await claudeFetch({
    model: 'claude-sonnet-4-20250514', max_tokens: 2500,
    messages: [{ role: 'user', content: [
      { type: 'image', source: { type: 'base64', media_type: mediaType, data: b64 } },
      { type: 'text', text: SP_EXTRACT_PROMPT }
    ]}]
  });
  await spHandleApiResponse(resp);
}

// ── PDF ────────────────────────────────────────
async function spImportPdf(file) {
  spSetStatus('loading', '⏳ Читаю PDF...');
  const b64 = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('Ошибка чтения файла'));
    r.readAsDataURL(file);
  });
  spSetStatus('loading', '⏳ Claude анализирует проформу...');
  await spImportPdfB64(b64, 'application/pdf');
}

async function spImportPdfB64(b64, mediaType) {
  const resp = await claudeFetch({
    model: 'claude-sonnet-4-20250514', max_tokens: 2500,
    messages: [{ role: 'user', content: [
      { type: 'document', source: { type: 'base64', media_type: mediaType, data: b64 } },
      { type: 'text', text: SP_EXTRACT_PROMPT }
    ]}]
  });
  await spHandleApiResponse(resp);
}

// ── TEXT fallback ──────────────────────────────
async function spImportFromText(text, source) {
  if (!text || text.length < 20) {
    spSetStatus('error', '⚠ Недостаточно текста для анализа');
    return;
  }
  const key = localStorage.getItem('ved_anthropic_key') || '';
  if (!key) {
    spSetStatus('error', '⚠ API ключ не задан. Нажмите ⚙ API в шапке.');
    return;
  }
  spSetStatus('loading', '⏳ Claude анализирует проформу...');
  const resp = await claudeFetch({
    model: 'claude-sonnet-4-20250514', max_tokens: 2500,
    messages: [{ role: 'user', content: SP_EXTRACT_PROMPT + '\n\nДОКУМЕНТ:\n' + text.slice(0, 12000) }]
  });
  await spHandleApiResponse(resp);
}

const SP_EXTRACT_PROMPT = `Ты — эксперт по внешнеторговым документам. Из этой проформы-инвойса (или коммерческого предложения) извлеки данные и верни ТОЛЬКО валидный JSON без пояснений и markdown:
{
  "items": [
    { "desc": "описание товара на английском как в документе", "descRu": "описание на русском (переведи если нужно)", "unit": "ед.изм (Mtrs/Pcs/Kgs/Sets/м/шт/кг)", "qty": число, "price": цена_за_единицу_число, "hs": "HS код если есть иначе пустая строка" }
  ],
  "sellerName": "название компании продавца",
  "sellerAddr": "адрес продавца",
  "sellerBank": "банк продавца",
  "sellerSwift": "SWIFT/BIC",
  "sellerAcc": "номер счёта",
  "sellerIfsc": "IFSC если есть",
  "sellerRep": "контактное лицо",
  "inco": "инкотермс (только EXW/FCA/FOB/FOT/DAP)",
  "currency": "код валюты (USD/EUR/CNY/INR/RUB)",
  "totalAmount": итоговая_сумма_число,
  "notes": "важные условия, сроки изготовления, гарантия"
}
Суммы — только числа без символов. Если поле не найдено — пустая строка или 0. Верни ТОЛЬКО JSON.`;

async function spHandleApiResponse(resp) {
  if (!resp.ok) {
    const e = await resp.json().catch(() => ({}));
    throw new Error('API ' + resp.status + ': ' + (e.error?.message || resp.statusText));
  }
  const data = await resp.json();
  const raw = (data.content || []).map(b => b.text || '').join('').replace(/```json|```/g, '').trim();
  _spExtracted = JSON.parse(raw);
  spShowPreview(_spExtracted);
  spSetStatus('success', '✅ Данные извлечены — проверьте и нажмите «Применить»');
}

function spSetStatus(type, msg) {
  const el = document.getElementById('sp-import-status');
  if (!el) return;
  el.style.display = 'block';
  const colors = { loading: 'var(--co-accent)', success: 'var(--green)', error: 'var(--red)' };
  el.innerHTML = '<span style="color:' + (colors[type]||'var(--text2)') + '">' + msg + '</span>';
}

const SP_UNITS = ['Pcs','Kgs','Mtrs','Sets','Rolls','Coils','Drums','Cartons','L','T','m²','Box'];

function spShowPreview(d) {
  const el = document.getElementById('sp-preview-content');
  if (!el || !d) return;

  // Items table — editable fields so user can correct before applying
  let html = '';
  if (d.items && d.items.length) {
    html += '<div style="font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Товарные позиции (' + d.items.length + ') — <span style="color:var(--co-accent);font-weight:500">редактируйте прямо здесь перед применением</span></div>';
    html += '<table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:14px">';
    html += '<thead><tr style="background:var(--surface3,var(--border2))">';
    html += '<th style="padding:5px 8px;text-align:left;color:var(--text3)">Описание</th>';
    html += '<th style="padding:5px 8px;text-align:right;color:var(--text3);width:70px">Кол-во</th>';
    html += '<th style="padding:5px 8px;text-align:left;color:var(--text3);width:80px">Ед. изм.</th>';
    html += '<th style="padding:5px 8px;text-align:right;color:var(--text3);width:90px">Цена</th>';
    html += '<th style="padding:5px 8px;text-align:right;color:var(--text3);width:90px">Сумма</th>';
    html += '<th style="padding:5px 8px;text-align:left;color:var(--text3);width:80px">HS</th>';
    html += '</tr></thead><tbody id="sp-preview-tbody">';
    d.items.forEach((it, i) => {
      const amt = (it.qty||0) * (it.price||0);
      const bg = i % 2 === 0 ? '' : 'background:var(--surface2)';
      const unitOpts = SP_UNITS.map(u => `<option${u===(it.unit||'Pcs')?' selected':''}>${u}</option>`).join('');
      html += `<tr style="${bg}" data-sp-idx="${i}">`;
      html += `<td style="padding:4px 8px">${it.desc||''}`
            + (it.descRu && it.descRu !== it.desc ? `<br><span style="color:var(--text3);font-size:10px">${it.descRu}</span>` : '')
            + '</td>';
      html += `<td style="padding:4px 6px"><input type="number" data-sp-qty="${i}" value="${it.qty||0}" min="0" step="any"
                style="width:64px;padding:3px 5px;border:1px solid var(--border);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;background:var(--surface)"
                oninput="spPreviewRecalcRow(${i})"></td>`;
      html += `<td style="padding:4px 6px"><select data-sp-unit="${i}"
                style="padding:3px 5px;border:1px solid var(--border);border-radius:4px;font-size:11px;background:var(--surface);color:var(--text)">
                ${unitOpts}</select></td>`;
      html += `<td style="padding:4px 6px"><input type="number" data-sp-price="${i}" value="${it.price||0}" min="0" step="any"
                style="width:80px;padding:3px 5px;border:1px solid var(--border);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;background:var(--surface)"
                oninput="spPreviewRecalcRow(${i})"></td>`;
      html += `<td style="padding:4px 6px;text-align:right;font-family:'JetBrains Mono',monospace;font-weight:600" id="sp-prev-amt-${i}">${fmtNum(amt)}</td>`;
      html += `<td style="padding:4px 6px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text3)">${it.hs||'—'}</td>`;
      html += '</tr>';
    });
    html += '</tbody></table>';
  }

  // Supplier & terms
  const fields = [
    ['Продавец', d.sellerName], ['Адрес', d.sellerAddr], ['Банк', d.sellerBank],
    ['SWIFT', d.sellerSwift], ['Счёт', d.sellerAcc], ['IFSC', d.sellerIfsc],
    ['Контакт', d.sellerRep], ['Инкотермс', d.inco], ['Валюта', d.currency],
    ['Итого', d.totalAmount ? fmtNum(d.totalAmount) + ' ' + (d.currency||'') : ''],
    ['Примечания', d.notes]
  ].filter(([,v]) => v);

  if (fields.length) {
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px">';
    fields.forEach(([k,v]) => {
      html += '<div style="font-size:11px;display:flex;gap:6px;padding:3px 0;border-bottom:1px solid var(--border2)">';
      html += '<span style="color:var(--text3);white-space:nowrap;min-width:80px">' + k + '</span>';
      html += '<span style="color:var(--text);font-weight:500">' + v + '</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  el.innerHTML = html;
  document.getElementById('sp-import-preview').style.display = 'block';
}

// Recalculate row total when qty or price changes in preview
function spPreviewRecalcRow(i) {
  const qty   = parseFloat(document.querySelector(`[data-sp-qty="${i}"]`)?.value)   || 0;
  const price = parseFloat(document.querySelector(`[data-sp-price="${i}"]`)?.value) || 0;
  const el    = document.getElementById(`sp-prev-amt-${i}`);
  if (el) el.textContent = fmtNum(qty * price);
}

// Read edited values from preview table back into _spExtracted before applying
function _spSyncPreviewEdits() {
  if (!_spExtracted || !_spExtracted.items) return;
  _spExtracted.items.forEach((it, i) => {
    const qtyEl   = document.querySelector(`[data-sp-qty="${i}"]`);
    const unitEl  = document.querySelector(`[data-sp-unit="${i}"]`);
    const priceEl = document.querySelector(`[data-sp-price="${i}"]`);
    if (qtyEl)   it.qty   = parseFloat(qtyEl.value)   || 0;
    if (unitEl)  it.unit  = unitEl.value;
    if (priceEl) it.price = parseFloat(priceEl.value) || 0;
  });
}

function spApplyExtracted() {
  const d = _spExtracted;
  if (!d) return;
  _spSyncPreviewEdits();
  _spApplyItems(d);
  _spApplySupplier(d);
  document.getElementById('sp-import-preview').style.display = 'none';
  spSetStatus('success', '✅ Спецификация заполнена из проформы');
}

function spApplyItemsOnly() {
  if (!_spExtracted) return;
  _spSyncPreviewEdits();
  _spApplyItems(_spExtracted);
  document.getElementById('sp-import-preview').style.display = 'none';
  spSetStatus('success', '✅ Товарные позиции добавлены');
}

function _spApplyItems(d) {
  if (!d.items || !d.items.length) return;
  // specRows is const — mutate in place (splice + push), не переприсваивать
  specRows.splice(0, specRows.length);
  d.items.forEach(it => specRows.push({
    desc:   it.desc   || '',
    descRu: it.descRu || '',
    unit:   it.unit   || 'Pcs',
    qty:    parseFloat(it.qty)   || 0,
    price:  parseFloat(it.price) || 0,
  }));
  // Set currency if found
  if (d.currency) {
    const cur = document.getElementById('s-currency');
    if (cur) { const o = Array.from(cur.options).find(x => x.value === d.currency); if (o) cur.value = d.currency; }
  }
  // Set inco if found
  if (d.inco) {
    const inco = document.getElementById('s-inco');
    if (inco) { const v = d.inco.split(' ')[0].toUpperCase(); const o = Array.from(inco.options).find(x => x.value === v); if (o) inco.value = v; }
  }
  renderSpecTable();
}

function _spApplySupplier(d) {
  // Fill contract seller fields if spec has a linked contract
  const map = {
    'c-seller-name': d.sellerName, 'c-seller-addr': d.sellerAddr,
    'c-seller-rep':  d.sellerRep,  'c-seller-bank': d.sellerBank,
    'c-seller-swift':d.sellerSwift,'c-seller-acc':  d.sellerAcc,
    'c-seller-ifsc': d.sellerIfsc,
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el && val) el.value = val;
  });
}

/* ═══════════════════════════════════════════════════════════
   DELIVERY NUMBER SYSTEM
   Format: ENDV-2026-007  (prefix-year-seq, 3-digit zero-pad)
   Counters stored in localStorage key: ved_delivery_counters
   { "ENDV_2026": 4, "PBS_2026": 0, "ENDV_2025": 12, ... }
   Counter value = last assigned number (next = counter + 1)
   Seed defaults: ENDV_2026=4, PBS_2026=0 (configurable in Admin)
═══════════════════════════════════════════════════════════ */

const DELIVERY_COUNTER_KEY = 'ved_delivery_counters';

const DELIVERY_COUNTER_DEFAULTS = {
  ENDV_2026: 4,   // 4 поставки до внедрения → следующая ENDV-2026-005
  PBS_2026:  0,
  ENDV_2025: 0,
  ENDV_2024: 0,
  ENDV_2023: 0,
  ENDV_2022: 0,
  ENDV_2021: 0,
  PBS_2025:  0,
  PBS_2024:  0,
};

function getDeliveryCounters() {
  try {
    const stored = localStorage.getItem(DELIVERY_COUNTER_KEY);
    return stored ? JSON.parse(stored) : { ...DELIVERY_COUNTER_DEFAULTS };
  } catch(e) { return { ...DELIVERY_COUNTER_DEFAULTS }; }
}

function saveDeliveryCounters(counters) {
  try { localStorage.setItem(DELIVERY_COUNTER_KEY, JSON.stringify(counters)); } catch(e) {}
}

// Generate next delivery number and increment counter
function generateDeliveryNum(prefix, year) {
  const key = prefix + '_' + year;
  const counters = getDeliveryCounters();
  // Also check existing contracts to ensure no collision
  const contracts = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
  const pattern = new RegExp('^' + prefix + '-' + year + '-(\\d+)$');
  let maxFromContracts = 0;
  contracts.forEach(ct => {
    if (ct.deliveryNum) {
      const m = ct.deliveryNum.match(pattern);
      if (m) maxFromContracts = Math.max(maxFromContracts, parseInt(m[1]));
    }
  });
  const current = Math.max(counters[key] || 0, maxFromContracts);
  const next = current + 1;
  counters[key] = next;
  saveDeliveryCounters(counters);
  return prefix + '-' + year + '-' + String(next).padStart(3, '0');
}

// Peek next num without incrementing (for display)
function peekDeliveryNum(prefix, year) {
  const key = prefix + '_' + year;
  const counters = getDeliveryCounters();
  const contracts = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
  const pattern = new RegExp('^' + prefix + '-' + year + '-(\\d+)$');
  let maxFromContracts = 0;
  contracts.forEach(ct => {
    if (ct.deliveryNum) {
      const m = ct.deliveryNum.match(pattern);
      if (m) maxFromContracts = Math.max(maxFromContracts, parseInt(m[1]));
    }
  });
  const current = Math.max(counters[key] || 0, maxFromContracts);
  return prefix + '-' + year + '-' + String(current + 1).padStart(3, '0');
}

// Button: ↻ regenerate (only if contract not yet saved, or reassign)
function regenerateDeliveryNum() {
  const numEl = document.getElementById('c-delivery-num');
  const hintEl = document.getElementById('c-delivery-hint');
  const year = new Date(document.getElementById('c-date')?.value || Date.now()).getFullYear();
  const prefix = activeCompany || 'ENDV';
  const preview = peekDeliveryNum(prefix, year);
  if (numEl) numEl.value = preview + ' (предпросмотр)';
  if (hintEl) hintEl.textContent = 'Будет назначен при сохранении договора';
}

/* ── ADMIN: Counters panel ── */

function renderDeliveryCounters() {
  const container = document.getElementById('delivery-counters-list');
  if (!container) return;
  const counters = getDeliveryCounters();
  const year = new Date().getFullYear();

  // Build sorted list: current year first, then descending
  const entries = Object.entries(counters).sort(([a],[b]) => {
    const [ap, ay] = a.split('_'); const [bp, by] = b.split('_');
    if (by !== ay) return parseInt(by) - parseInt(ay);
    return ap.localeCompare(bp);
  });

  container.innerHTML = entries.map(([key, val]) => {
    const [prefix, yr] = key.split('_');
    const isCurrent = parseInt(yr) === year;
    const nextNum = prefix + '-' + yr + '-' + String(val + 1).padStart(3, '0');
    return `<div style="background:var(--surface2);border:1px solid ${isCurrent ? 'var(--co-accent-border)' : 'var(--border)'};border-radius:var(--radius);padding:12px 14px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:${isCurrent ? 'var(--co-accent)' : 'var(--text2)'}">${prefix}</span>
        <span style="font-size:11px;color:var(--text3)">${yr}</span>
        ${isCurrent ? '<span style="font-size:9px;background:var(--co-accent-light);color:var(--co-accent);padding:1px 7px;border-radius:10px">текущий год</span>' : ''}
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="flex:1">
          <div style="font-size:10px;color:var(--text3);margin-bottom:3px">Последний назначен / стартовый сдвиг</div>
          <input type="number" min="0" max="999" value="${val}"
            style="width:80px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;text-align:center;border:1px solid var(--border);border-radius:var(--radius-sm);padding:4px 8px;background:var(--surface)"
            onchange="updateCounter('${key}', parseInt(this.value)||0)">
        </div>
        <div style="text-align:right">
          <div style="font-size:9px;color:var(--text3)">следующий</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--co-accent)">${nextNum}</div>
        </div>
        <button onclick="deleteCounterRow('${key}')" title="Удалить" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:14px;padding:4px" onmouseover="this.style.color='var(--rust)'" onmouseout="this.style.color='var(--text3)'">×</button>
      </div>
    </div>`;
  }).join('');
}

function updateCounter(key, val) {
  const counters = getDeliveryCounters();
  counters[key] = Math.max(0, val);
  saveDeliveryCounters(counters);
  renderDeliveryCounters();
}

function deleteCounterRow(key) {
  if (!confirm('Удалить счётчик ' + key + '?')) return;
  const counters = getDeliveryCounters();
  delete counters[key];
  saveDeliveryCounters(counters);
  renderDeliveryCounters();
}

function addCounterRow() {
  const prefix = prompt('Префикс компании (ENDV / PBS):');
  if (!prefix) return;
  const year = prompt('Год:', new Date().getFullYear());
  if (!year) return;
  const start = prompt('Стартовый сдвиг (кол-во поставок до системы, 0 если нет):', '0');
  const key = prefix.toUpperCase() + '_' + year;
  const counters = getDeliveryCounters();
  counters[key] = parseInt(start) || 0;
  saveDeliveryCounters(counters);
  renderDeliveryCounters();
}


/* ╔══════════════════════════════════════════════════════════════════╗
   ║  VED DATA LAYER — Stage 1: Schema & CRUD                        ║
   ║  New tables: departments, products, purchase_requests,           ║
   ║              rfq_requests, rfq_supplier_quotes, shipments(persist)║
   ║  Convention:                                                     ║
   ║    - Keys:  ved_{table}                                          ║
   ║    - ID:    Date.now() + 3-char random suffix → unique string    ║
   ║    - FK:    {table}_id field referencing id of related record    ║
   ║    - Timestamps: created_at, updated_at  (ISO string)            ║
   ║  Existing tables NOT touched:                                    ║
   ║    ved_contracts, ved_suppliers, ved_payments, ved_users,        ║
   ║    ved_budgets, ved_deadlines, ved_fx_history, ved_fx_rates      ║
   ╚══════════════════════════════════════════════════════════════════╝ */

/* ── UTILS ─────────────────────────────────────────────────────────── */

function vedId() {
  // Unique ID: timestamp + 3-char random → e.g. "1741234567890abc"
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}

function vedNow() { return new Date().toISOString(); }

// Generic table CRUD backed by localStorage
function vedTable(key) {
  return {
    _key: 'ved_' + key,

    all() {
      try { const s = localStorage.getItem(this._key); return s ? JSON.parse(s) : []; }
      catch(e) { return []; }
    },

    save(rows) {
      try { localStorage.setItem(this._key, JSON.stringify(rows)); return true; }
      catch(e) { console.warn('vedTable.save error', this._key, e); return false; }
    },

    find(id) { return this.all().find(r => r.id === id) || null; },

    where(predicate) { return this.all().filter(predicate); },

    // Find by single field value
    findBy(field, value) { return this.all().find(r => r[field] === value) || null; },

    insert(data) {
      const rows = this.all();
      const now = vedNow();
      const row = { id: vedId(), created_at: now, updated_at: now, ...data };
      rows.push(row);
      this.save(rows);
      return row;
    },

    update(id, patch) {
      const rows = this.all();
      const idx = rows.findIndex(r => r.id === id);
      if (idx < 0) return null;
      rows[idx] = { ...rows[idx], ...patch, updated_at: vedNow() };
      this.save(rows);
      return rows[idx];
    },

    upsert(matchField, matchValue, data) {
      const rows = this.all();
      const idx = rows.findIndex(r => r[matchField] === matchValue);
      const now = vedNow();
      if (idx >= 0) {
        rows[idx] = { ...rows[idx], ...data, updated_at: now };
        this.save(rows);
        return rows[idx];
      } else {
        return this.insert(data);
      }
    },

    delete(id) {
      const rows = this.all();
      const idx = rows.findIndex(r => r.id === id);
      if (idx < 0) return false;
      rows.splice(idx, 1);
      this.save(rows);
      return true;
    },

    count() { return this.all().length; },

    // Join: enrich each row with related record fields
    withRelated(foreignKey, relatedTable, as) {
      const rel = vedTable(relatedTable);
      return this.all().map(row => ({
        ...row,
        [as]: rel.find(row[foreignKey]) || null
      }));
    },
  };
}

/* ── TABLE INSTANCES ───────────────────────────────────────────────── */

/*
 * departments — подразделения компаний
 * Schema:
 *   id, created_at, updated_at,
 *   code         {string}  'VED'|'FIN'|'LOG'|'TECH'|'ADMIN'
 *   name         {string}  'ВЭД-отдел'
 *   company_id   {string}  FK → COMPANIES key ('ENDV'|'PBS')
 *   head_user_id {string}  FK → ved_users[].login (existing users table uses login as key)
 *   description  {string}
 */
const DB_departments = vedTable('departments');

/*
 * products — товарный справочник
 * Schema:
 *   id, created_at, updated_at,
 *   sku          {string}  внутренний артикул, уникальный
 *   name_en      {string}  название на EN (как в спецификации)
 *   name_ru      {string}  название на RU
 *   hs_code      {string}  ТН ВЭД 10 знаков
 *   unit         {string}  'Mtrs'|'Pcs'|'Kgs'|'Sets'
 *   supplier_id  {number}  FK → ved_suppliers[].id
 *   last_price   {number}  последняя закупочная цена
 *   last_currency{string}  'USD'|'EUR'|'CNY'|'INR'
 *   notes        {string}
 *   active       {bool}    true = в ассортименте
 */
const DB_products = vedTable('products');

/*
 * purchase_requests — заявки на закупку (PR)
 * Schema:
 *   id, created_at, updated_at,
 *   num              {string}  'PR-2026-001' (auto via prNextNum())
 *   status           {string}  'draft'|'pending'|'approved'|'ordered'|'delivered'|'cancelled'
 *   company_id       {string}  FK → COMPANIES
 *   department_id    {string}  FK → DB_departments.id
 *   requested_by     {string}  FK → ved_users[].login
 *   approved_by      {string}  FK → ved_users[].login (null until approved)
 *   approved_at      {string}  ISO date
 *   items            {array}   [{
 *                                 product_id, name_en, name_ru, hs_code, unit,
 *                                 qty_requested, qty_approved,
 *                                 estimated_price, currency
 *                               }]
 *   contract_num     {string}  FK → ved_contracts[].num (после заключения)
 *   delivery_num     {string}  FK → deliveryNum (после отгрузки)
 *   shipment_id      {string}  FK → DB_shipments.id
 *   deadline         {string}  ISO date — нужна не позднее
 *   priority         {string}  'low'|'normal'|'high'|'urgent'
 *   notes            {string}
 */
const DB_purchase_requests = vedTable('purchase_requests');

/*
 * rfq_requests — запросы котировок (RFQ)
 * Schema:
 *   id, created_at, updated_at,
 *   num              {string}  'RFQ-2026-001' (auto)
 *   pr_id            {string}  FK → DB_purchase_requests.id (может быть null — standalone RFQ)
 *   status           {string}  'draft'|'sent'|'received'|'analysed'|'closed'
 *   company_id       {string}  FK → COMPANIES
 *   supplier_ids     {array}   [FK → ved_suppliers[].id, ...] — кому отправлен
 *   items            {array}   [{name_en, name_ru, hs_code, unit, qty, notes}]
 *   deadline_response{string}  ISO date — дедлайн ответа поставщиков
 *   sent_at          {string}  ISO date
 *   notes            {string}
 */
const DB_rfq_requests = vedTable('rfq_requests');

/*
 * rfq_supplier_quotes — ответы поставщиков на RFQ
 * Schema:
 *   id, created_at, updated_at,
 *   rfq_id           {string}  FK → DB_rfq_requests.id
 *   supplier_id      {number}  FK → ved_suppliers[].id
 *   status           {string}  'pending'|'received'|'declined'|'expired'
 *   items            {array}   [{
 *                                 name_en, unit,
 *                                 unit_price, currency,
 *                                 lead_time_days, min_qty, notes
 *                               }]
 *   total_amount     {number}
 *   currency         {string}
 *   inco             {string}  'EXW'|'FOB'|'FCA'|'DAP'
 *   validity_days    {number}  срок действия котировки
 *   payment_terms    {string}  '30% advance, 70% before shipment'
 *   notes            {string}
 *   selected         {bool}    выбранная котировка для этого RFQ
 *   selected_at      {string}  ISO date
 *   selected_by      {string}  FK → ved_users[].login
 */
const DB_rfq_quotes = vedTable('rfq_quotes');

/*
 * shipments — расширяем существующую in-memory таблицу персистентностью
 * Существующий JS массив `shipments` теперь синхронизируется с ved_shipments.
 * Добавленные FK-поля (не ломают старый код):
 *   delivery_num  {string}  уже есть
 *   pr_id         {string}  FK → DB_purchase_requests.id
 *   rfq_id        {string}  FK → DB_rfq_requests.id
 *   quote_id      {string}  FK → DB_rfq_quotes.id
 */
const DB_shipments = vedTable('shipments');

/*
 * ── DOCUMENT TABLES (Этап 9) ────────────────────────────────────────
 * Персистентное хранение генерируемых документов с привязкой к поставке.
 * Поле shipment_id (FK → DB_shipments) добавлено во все 4 таблицы.
 * Старые записи (shipment_id = '') продолжают работать.
 */
const DB_invoices           = vedTable('invoices');
const DB_packing_lists      = vedTable('packing_lists');
const DB_logistics_requests = vedTable('logistics_requests');
const DB_customs_calcs      = vedTable('customs_calcs');

/*
 * shipments_tracking — хронология логистических событий поставки (Этап 10)
 * Поля: shipment_id, status, location, event_date, comment
 * Связь: FK → DB_shipments (один shipment → много событий)
 */
const DB_shipments_tracking = vedTable('shipments_tracking');

/*
 * ── ФИНАНСЫ ПОСТАВКИ (Этап 11) ──────────────────────────────────────
 * shipment_budget — сводный бюджет поставки (план и факт по 4 группам)
 * Поля: shipment_id, product_cost, logistics_cost, customs_cost,
 *       other_costs, total_cost (plan) + *_fact суффиксы для факта
 * payments расширяется полем shipment_id (FK → DB_shipments)
 */
const DB_shipment_budget = vedTable('shipment_budget');

const DB_contracts             = vedTable('contracts_registry');
const DB_specs_registry        = vedTable('specs_registry');

const DB_customs_declarations      = vedTable('customs_declarations');
const DB_customs_declaration_items = vedTable('customs_declaration_items');
const DB_customs_payments_dt       = vedTable('customs_payments_dt');
const DB_customs_documents_dt      = vedTable('customs_documents_dt');

/* ── SHIPMENT ITEMS (центральная таблица товаров) ───────────────── */
const DB_shipment_items    = vedTable('shipment_items');

/* ── DOCUMENT LINK TABLES (связи документ ↔ товар поставки) ────── */
const DB_si_invoice_items  = vedTable('si_invoice_items');
const DB_si_packing_items  = vedTable('si_packing_items');
const DB_si_spec_items     = vedTable('si_spec_items');
const DB_si_customs_items  = vedTable('si_customs_items');

/* ── AUTO-NUMBER GENERATORS ────────────────────────────────────────── */

function _nextSeqNum(table_instance, prefix, year) {
  // Find max sequence number for prefix-year pattern
  const yr = year || new Date().getFullYear();
  const pat = new RegExp('^' + prefix + '-' + yr + '-(\\d+)$');
  let max = 0;
  table_instance.all().forEach(r => {
    const m = (r.num || '').match(pat);
    if (m) max = Math.max(max, parseInt(m[1]));
  });
  return prefix + '-' + yr + '-' + String(max + 1).padStart(3, '0');
}

function prNextNum(year)  { return _nextSeqNum(DB_purchase_requests, 'PR', year); }
function rfqNextNum(year) { return _nextSeqNum(DB_rfq_requests, 'RFQ', year); }

/* ── SEED DEFAULT DEPARTMENTS ──────────────────────────────────────── */

function seedDepartments() {
  if (DB_departments.count() > 0) return; // already seeded
  const defaults = [
    { code: 'VED',   name: 'ВЭД-отдел',          company_id: 'ENDV', description: 'Внешнеэкономическая деятельность' },
    { code: 'FIN',   name: 'Финансовый отдел',    company_id: 'ENDV', description: 'Финансы и бухгалтерия' },
    { code: 'LOG',   name: 'Логистика',            company_id: 'ENDV', description: 'Логистика и склад' },
    { code: 'TECH',  name: 'Технический отдел',   company_id: 'ENDV', description: 'Технические специалисты' },
    { code: 'VED',   name: 'ВЭД-отдел',          company_id: 'PBS',  description: 'ВЭД Петробалт Сервис' },
    { code: 'FIN',   name: 'Финансовый отдел',    company_id: 'PBS',  description: 'Финансы PBS' },
  ];
  defaults.forEach(d => DB_departments.insert(d));
}

/* ── SHIPMENTS PERSISTENCE BRIDGE ─────────────────────────────────── */
// Syncs the existing in-memory `shipments` array with ved_shipments

function shipmentsLoad() {
  // Load from DB if available, otherwise keep in-memory array as-is
  const stored = DB_shipments.all();
  if (stored.length > 0) {
    // Merge: DB is source of truth, but keep in-memory for backward compat
    window._shipmentsLoaded = true;
    return stored;
  }
  return null;
}

function shipmentsSave() {
  // Persist current in-memory shipments array to DB_shipments
  try {
    localStorage.setItem('ved_shipments', JSON.stringify(shipments));
  } catch(e) { console.warn('shipmentsSave error', e); }
}

function shipmentsSyncToDB(shipment) {
  // Upsert single shipment into DB by id
  const existing = DB_shipments.find(String(shipment.id));
  if (existing) {
    DB_shipments.update(String(shipment.id), { ...shipment, id: String(shipment.id) });
  } else {
    const row = { ...shipment, id: String(shipment.id), created_at: vedNow(), updated_at: vedNow() };
    const rows = DB_shipments.all();
    rows.push(row);
    DB_shipments.save(rows);
  }
}

/* ── FK RESOLUTION HELPERS ─────────────────────────────────────────── */

// Resolve FK → department name
function deptName(dept_id) {
  const d = DB_departments.find(dept_id);
  return d ? d.name : '—';
}

// Resolve FK → product
function productById(product_id) {
  return DB_products.find(product_id);
}

// Resolve FK → supplier (from existing ved_suppliers)
function supplierById(supplier_id) {
  try {
    const s = localStorage.getItem('ved_suppliers');
    const list = s ? JSON.parse(s) : [];
    return list.find(x => String(x.id) === String(supplier_id)) || null;
  } catch(e) { return null; }
}

// Resolve FK → purchase_request
function prById(pr_id) {
  return DB_purchase_requests.find(pr_id);
}

// Resolve FK → rfq_request
function rfqById(rfq_id) {
  return DB_rfq_requests.find(rfq_id);
}

// Resolve FK → contract (existing ved_contracts)
function contractByNum(num) {
  return contractFindByNum(num); // existing function
}

/* ── DATA INTEGRITY HELPERS ────────────────────────────────────────── */

// Validate FK exists before insert/update
function fkExists(table_instance, id) {
  return id ? table_instance.find(id) !== null : true; // null FK is allowed
}

// Get all PRs linked to a contract
function prsByContractNum(contractNum) {
  return DB_purchase_requests.where(r => r.contract_num === contractNum);
}

// Get all RFQs for a PR
function rfqsByPrId(pr_id) {
  return DB_rfq_requests.where(r => r.pr_id === pr_id);
}

// Get all quotes for an RFQ
function quotesByRfqId(rfq_id) {
  return DB_rfq_quotes.where(r => r.rfq_id === rfq_id);
}

// Get selected quote for an RFQ
function selectedQuote(rfq_id) {
  return DB_rfq_quotes.where(r => r.rfq_id === rfq_id && r.selected === true)[0] || null;
}

/* ── INIT ──────────────────────────────────────────────────────────── */

function initDataLayer() {
  seedDepartments();
  // Load persisted shipments (backward compat — don't overwrite if in-memory already has data)
  const persisted = shipmentsLoad();
  if (persisted && persisted.length > 0 && shipments.length === 0) {
    shipments.push(...persisted);
  }
  // Seed demo purchase requests if empty
  if (DB_purchase_requests.count() === 0) {
    const depts = DB_departments.all();
    const endvDepts = depts.filter(d => d.company_id === 'ENDV');
    const vedDeptId  = endvDepts.find(d => d.code === 'VED')?.id  || '';
    const techDeptId = endvDepts.find(d => d.code === 'TECH')?.id || '';
    const logDeptId  = endvDepts.find(d => d.code === 'LOG')?.id  || '';

    const seedPRs = [
      {
        num: 'PR-2026-001', status: 'approved', priority: 'high',
        company_id: 'ENDV', department_id: vedDeptId, requested_by: 'kiriluk',
        approved_by: 'admin', approved_at: '2026-01-15T10:00:00.000Z',
        deadline: '2026-04-01',
        contract_num: '',
        notes: 'Закупка кабельной продукции для проекта ТЭЦ-22. Срочная потребность.',
        items: [
          { name_en: 'Armoured Cable 3Cx0.5SQ', name_ru: 'Кабель бронированный 3×0,5мм²', hs_code: '8544199000', unit: 'Mtrs', qty_requested: 5000, qty_approved: 5000, estimated_price: 142, currency: 'INR' },
          { name_en: 'Armoured Cable 4Cx1.5SQ', name_ru: 'Кабель бронированный 4×1,5мм²', hs_code: '8544199000', unit: 'Mtrs', qty_requested: 2000, qty_approved: 2000, estimated_price: 198, currency: 'INR' },
        ],
      },
      {
        num: 'PR-2026-002', status: 'submitted', priority: 'normal',
        company_id: 'ENDV', department_id: techDeptId, requested_by: 'kiriluk',
        deadline: '2026-05-15',
        notes: 'Запасные части для системы автоматизации котельного оборудования.',
        items: [
          { name_en: 'Pressure Transmitter 4-20mA', name_ru: 'Датчик давления 4-20мА', hs_code: '9026109000', unit: 'Pcs', qty_requested: 12, estimated_price: 320, currency: 'USD' },
          { name_en: 'Thermocouple Type K', name_ru: 'Термопара тип K', hs_code: '9025199000', unit: 'Pcs', qty_requested: 24, estimated_price: 85, currency: 'USD' },
        ],
      },
      {
        num: 'PR-2026-003', status: 'draft', priority: 'low',
        company_id: 'ENDV', department_id: logDeptId, requested_by: 'logist',
        deadline: '2026-06-30',
        notes: 'Упаковочные материалы и стеллажи для склада.',
        items: [
          { name_en: 'Wooden Pallets Euro', name_ru: 'Поддоны деревянные евро', hs_code: '4415200000', unit: 'Pcs', qty_requested: 100, estimated_price: 850, currency: 'RUB' },
        ],
      },
      {
        num: 'PR-2026-004', status: 'rfq_created', priority: 'urgent',
        company_id: 'ENDV', department_id: vedDeptId, requested_by: 'kiriluk',
        approved_by: 'admin', approved_at: '2026-02-01T09:30:00.000Z',
        deadline: '2026-03-20',
        notes: 'Срочная потребность! Оборудование для пусконаладочных работ на объекте заказчика.',
        items: [
          { name_en: 'Junction Box IP65 300x400', name_ru: 'Клеммная коробка IP65 300×400', hs_code: '8537109100', unit: 'Pcs', qty_requested: 8, estimated_price: 4200, currency: 'INR' },
          { name_en: 'Cable Gland M25', name_ru: 'Кабельный ввод M25', hs_code: '8547900000', unit: 'Pcs', qty_requested: 120, estimated_price: 180, currency: 'INR' },
          { name_en: 'Din Rail Terminal Block', name_ru: 'Клеммник на DIN-рейку', hs_code: '8536901000', unit: 'Pcs', qty_requested: 500, estimated_price: 45, currency: 'INR' },
        ],
      },
      {
        num: 'PR-2026-005', status: 'rejected', priority: 'normal',
        company_id: 'PBS', department_id: '', requested_by: 'admin',
        deadline: '2026-04-10',
        notes: 'Отклонено — превышение бюджета квартала. Перенести на Q3 2026.',
        items: [
          { name_en: 'Industrial Fan Coil Unit', name_ru: 'Фанкойл промышленный', hs_code: '8415829000', unit: 'Pcs', qty_requested: 4, estimated_price: 1200, currency: 'EUR' },
        ],
      },
    ];
    seedPRs.forEach(pr => DB_purchase_requests.insert(pr));
  }

  console.info(
    '[VED DataLayer] Ready.',
    '| departments:', DB_departments.count(),
    '| products:', DB_products.count(),
    '| PRs:', DB_purchase_requests.count(),
    '| RFQs:', DB_rfq_requests.count(),
    '| Quotes:', DB_rfq_quotes.count(),
    '| Shipments(DB):', DB_shipments.count()
  );
}

/* ── SCHEMA EXPORT (for debugging / future use) ────────────────────── */
const VED_SCHEMA = {
  version: '1.0.0',
  tables: {
    departments:       { key: 'ved_departments',       pk: 'id', fk: { company_id: 'COMPANIES', head_user_id: 'ved_users' } },
    products:          { key: 'ved_products',          pk: 'id', fk: { supplier_id: 'ved_suppliers' } },
    purchase_requests: { key: 'ved_purchase_requests', pk: 'id', fk: { company_id: 'COMPANIES', department_id: 'ved_departments', requested_by: 'ved_users', approved_by: 'ved_users', contract_num: 'ved_contracts', shipment_id: 'ved_shipments' } },
    rfq_requests:      { key: 'ved_rfq_requests',      pk: 'id', fk: { pr_id: 'ved_purchase_requests', company_id: 'COMPANIES' } },
    rfq_quotes:        { key: 'ved_rfq_quotes',        pk: 'id', fk: { rfq_id: 'ved_rfq_requests', supplier_id: 'ved_suppliers' } },
    shipments:         { key: 'ved_shipments',         pk: 'id', fk: { pr_id: 'ved_purchase_requests', rfq_id: 'ved_rfq_requests', quote_id: 'ved_rfq_quotes' } },
  },
  // Existing tables (read-only from this layer)
  existing: ['ved_contracts', 'ved_suppliers', 'ved_payments', 'ved_users', 'ved_budgets', 'ved_deadlines'],
};

/* ╔══════════════════════════════════════════════════════════
   ║  PURCHASE REQUESTS MODULE
   ╚══════════════════════════════════════════════════════════ */

const PR_STATUS_LABELS = {
  draft:       'Черновик',
  submitted:   'На согласовании',
  approved:    'Утверждено',
  rejected:    'Отклонено',
  rfq_created: 'RFQ создан',
  ordered:     'Заказано',
  delivered:   'Доставлено',
  cancelled:   'Отменено',
};

const PR_PRIORITY_LABELS = { low:'Низкий', normal:'Обычный', high:'Высокий', urgent:'Срочный' };

// Module state
let _prFilter    = { status: 'all', user: '', company: '' };
let _prSort      = { field: 'created_at', dir: 'desc' };
let _prPage      = 1;
const PR_PAGE_SZ = 20;
let _prItems     = []; // items in create/edit form

/* ── BADGE / PRIORITY HELPERS ────────────────────────────── */

function prBadge(status) {
  const label = PR_STATUS_LABELS[status] || status;
  return `<span class="pr-badge ${status}">${label}</span>`;
}

function prPriorityDot(priority) {
  return `<span class="pr-priority ${priority}" title="${PR_PRIORITY_LABELS[priority]||priority}"></span>`;
}

function prFmtDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleDateString('ru-RU', {day:'2-digit',month:'2-digit',year:'numeric'}); }
  catch(e) { return iso; }
}

function prDaysLeft(iso) {
  if (!iso) return '';
  const diff = Math.ceil((new Date(iso) - new Date()) / 86400000);
  if (diff < 0)  return `<span style="color:var(--rust);font-size:10px">просрочено ${Math.abs(diff)}д</span>`;
  if (diff <= 3) return `<span style="color:var(--amber);font-size:10px">${diff}д</span>`;
  return `<span style="font-size:10px;color:var(--text3)">${diff}д</span>`;
}

/* ── FILTER / SORT ────────────────────────────────────────── */

function prSetFilter(type, val, el) {
  _prFilter[type] = val;
  _prPage = 1;
  // Update active chip
  document.querySelectorAll(`.pr-filter-chip[data-filter="${type}"]`).forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  prLoad();
}

function prSort(field) {
  if (_prSort.field === field) _prSort.dir = _prSort.dir === 'asc' ? 'desc' : 'asc';
  else { _prSort.field = field; _prSort.dir = 'asc'; }
  const info = document.getElementById('pr-sort-info');
  if (info) info.textContent = `Сортировка: ${field} (${_prSort.dir === 'asc' ? '↑' : '↓'})`;
  prLoad();
}

/* ── MAIN LOAD / RENDER ──────────────────────────────────── */

function prLoad() {
  // Populate user filter dropdown
  prPopulateUserFilter();

  let rows = DB_purchase_requests.all();

  // Apply filters
  const statusF  = _prFilter.status || 'all';
  const userF    = (document.getElementById('pr-filter-user')?.value  || '').trim();
  const companyF = (document.getElementById('pr-filter-company')?.value || '').trim();
  const search   = (document.getElementById('pr-search')?.value || '').toLowerCase().trim();

  if (statusF !== 'all') rows = rows.filter(r => r.status === statusF);
  if (userF)    rows = rows.filter(r => r.requested_by === userF);
  if (companyF) rows = rows.filter(r => r.company_id === companyF);
  if (search)   rows = rows.filter(r =>
    (r.num||'').toLowerCase().includes(search) ||
    (r.notes||'').toLowerCase().includes(search) ||
    (r.items||[]).some(it => (it.name_en||'').toLowerCase().includes(search) || (it.name_ru||'').toLowerCase().includes(search))
  );

  // Sort
  rows = rows.sort((a,b) => {
    let av = a[_prSort.field] || '', bv = b[_prSort.field] || '';
    if (_prSort.field === 'priority') {
      const order = { urgent:0, high:1, normal:2, low:3 };
      av = order[av] ?? 9; bv = order[bv] ?? 9;
    }
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return _prSort.dir === 'asc' ? cmp : -cmp;
  });

  // Update KPIs
  prUpdateKPIs();

  // Pagination
  const total = rows.length;
  const pages = Math.max(1, Math.ceil(total / PR_PAGE_SZ));
  if (_prPage > pages) _prPage = pages;
  const pageRows = rows.slice((_prPage-1)*PR_PAGE_SZ, _prPage*PR_PAGE_SZ);

  // Render table
  const tbody = document.getElementById('pr-table-body');
  if (!tbody) return;

  if (pageRows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10"><div class="pr-empty">
      <div style="font-size:28px;margin-bottom:10px;opacity:0.3">📋</div>
      ${search || statusF !== 'all' || userF ? 'Ничего не найдено по фильтру' : 'Нет заявок. Создайте первую заявку.'}
    </div></td></tr>`;
    prRenderPagination(0, 0, 0);
    return;
  }

  tbody.innerHTML = pageRows.map(r => {
    const dept = DB_departments.find(r.department_id);
    const firstItem = (r.items||[])[0] || {};
    const itemsCount = (r.items||[]).length;
    const totalQty = (r.items||[]).reduce((s,it) => s + (parseFloat(it.qty_requested)||0), 0);
    const hasEstPrice = (r.items||[]).some(it => it.estimated_price > 0);
    const totalPrice = (r.items||[]).reduce((s,it) => s + ((parseFloat(it.qty_requested)||0) * (parseFloat(it.estimated_price)||0)), 0);
    const currency = (r.items||[])[0]?.currency || '';

    return `<tr onclick="prOpenDetail('${r.id}')">
      <td class="pr-td-num">${r.num || '—'}</td>
      <td class="pr-td-date">${prFmtDate(r.created_at)}</td>
      <td class="pr-td-desc">
        <div class="pr-desc-main">${firstItem.name_en || firstItem.name_ru || r.notes?.slice(0,50) || '—'}</div>
        <div class="pr-desc-sub">${itemsCount > 1 ? `+${itemsCount-1} позиций` : firstItem.name_ru || ''}</div>
      </td>
      <td style="text-align:center">${prPriorityDot(r.priority||'normal')}</td>
      <td>
        <div style="font-size:12px;font-family:'JetBrains Mono',monospace">${totalQty > 0 ? totalQty : '—'}</div>
        ${hasEstPrice ? `<div style="font-size:10px;color:var(--text3)">${fmtNum(totalPrice)} ${currency}</div>` : ''}
      </td>
      <td class="pr-td-date">${prFmtDate(r.deadline)} ${prDaysLeft(r.deadline)}</td>
      <td style="font-size:12px">${r.requested_by || '—'}</td>
      <td style="font-size:11px;color:var(--text3)">${dept ? dept.name : (r.department_id ? r.department_id : '—')}</td>
      <td>${prBadge(r.status||'draft')}</td>
      <td onclick="event.stopPropagation()" style="white-space:nowrap">
        <button onclick="prOpenEdit('${r.id}')" title="Редактировать" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:3px 6px" onmouseover="this.style.color='var(--co-accent)'" onmouseout="this.style.color='var(--text3)'">✏</button>
        <button onclick="prDelete('${r.id}')" title="Удалить" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:3px 6px" onmouseover="this.style.color='var(--rust)'" onmouseout="this.style.color='var(--text3)'">×</button>
      </td>
    </tr>`;
  }).join('');

  prRenderPagination(total, _prPage, pages);
}

function prRenderPagination(total, page, pages) {
  const el = document.getElementById('pr-pagination');
  if (!el) return;
  if (total === 0) { el.innerHTML = ''; return; }
  const start = (page-1)*PR_PAGE_SZ + 1;
  const end   = Math.min(page*PR_PAGE_SZ, total);
  el.innerHTML = `
    <span>${start}–${end} из ${total}</span>
    <button onclick="_prPage=Math.max(1,_prPage-1);prLoad()" ${page<=1?'disabled':''} style="padding:3px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);cursor:pointer">←</button>
    <span>${page} / ${pages}</span>
    <button onclick="_prPage=Math.min(${pages},_prPage+1);prLoad()" ${page>=pages?'disabled':''} style="padding:3px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);cursor:pointer">→</button>
  `;
}

function prUpdateKPIs() {
  const all = DB_purchase_requests.all();
  const set = (id, val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
  set('pr-kpi-total',     all.length);
  set('pr-kpi-draft',     all.filter(r=>r.status==='draft').length);
  set('pr-kpi-submitted', all.filter(r=>r.status==='submitted').length);
  set('pr-kpi-approved',  all.filter(r=>r.status==='approved').length);
  set('pr-kpi-rfq',       all.filter(r=>r.status==='rfq_created').length);
}

function prPopulateUserFilter() {
  const sel = document.getElementById('pr-filter-user');
  if (!sel || sel.dataset.populated) return;
  try {
    const users = JSON.parse(localStorage.getItem('ved_users') || '[]');
    const current = sel.value;
    sel.innerHTML = '<option value="">Все инициаторы</option>' +
      users.map(u => `<option value="${u.login}">${u.name}</option>`).join('');
    sel.value = current;
    sel.dataset.populated = '1';
  } catch(e) {}
}

/* ── CREATE / EDIT MODAL ─────────────────────────────────── */

function prOpenCreate() {
  _prItems = [{ name_en:'', name_ru:'', hs_code:'', unit:'Pcs', qty_requested:1, estimated_price:0, currency:'USD' }];
  const today = new Date().toISOString().slice(0,10);

  const numEl = document.getElementById('pr-f-num');
  if (numEl) numEl.value = prNextNum();
  const dateEl = document.getElementById('pr-f-date');
  if (dateEl) dateEl.value = today;
  const editId = document.getElementById('pr-edit-id');
  if (editId) editId.value = '';

  // Pre-select active company
  const compEl = document.getElementById('pr-f-company');
  if (compEl) compEl.value = activeCompany || 'ENDV';

  // Pre-select current user
  const userEl = document.getElementById('pr-f-user');
  if (userEl && currentUser) {
    prPopulateModalUsers();
    userEl.value = currentUser.login;
  }

  prPopulateDepts();
  prRenderItemsTable();
  _prClearForm();

  const title = document.getElementById('pr-modal-title');
  if (title) title.innerHTML = '<span style="color:var(--co-accent)">📋</span> Новая заявка на закупку';
  const submitBtn = document.getElementById('pr-btn-submit');
  if (submitBtn) submitBtn.style.display = '';

  document.getElementById('pr-modal-bg').classList.add('open');
}

function prOpenEdit(id) {
  const r = DB_purchase_requests.find(id);
  if (!r) return;

  document.getElementById('pr-edit-id').value = id;
  document.getElementById('pr-f-num').value    = r.num || '';
  document.getElementById('pr-f-date').value   = (r.created_at||'').slice(0,10);
  document.getElementById('pr-f-priority').value = r.priority || 'normal';
  document.getElementById('pr-f-status').value   = r.status   || 'draft';
  document.getElementById('pr-f-deadline').value = r.deadline || '';
  document.getElementById('pr-f-notes').value    = r.notes    || '';
  document.getElementById('pr-f-contract').value = r.contract_num || '';

  const compEl = document.getElementById('pr-f-company');
  if (compEl) { compEl.value = r.company_id || activeCompany || 'ENDV'; }

  prPopulateDepts(r.company_id);
  const deptEl = document.getElementById('pr-f-dept');
  if (deptEl) deptEl.value = r.department_id || '';

  prPopulateModalUsers();
  const userEl = document.getElementById('pr-f-user');
  if (userEl) userEl.value = r.requested_by || '';

  _prItems = JSON.parse(JSON.stringify(r.items || []));
  prRenderItemsTable();

  const title = document.getElementById('pr-modal-title');
  if (title) title.innerHTML = `<span style="color:var(--co-accent)">✏</span> Редактировать заявку ${r.num||''}`;
  const submitBtn = document.getElementById('pr-btn-submit');
  if (submitBtn) submitBtn.style.display = r.status === 'draft' ? '' : 'none';

  document.getElementById('pr-modal-bg').classList.add('open');
}

function _prClearForm() {
  ['pr-f-priority','pr-f-status','pr-f-deadline','pr-f-notes','pr-f-contract'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { if (el.tagName==='SELECT') el.selectedIndex=0; else el.value=''; }
  });
}

function prCloseModal() {
  document.getElementById('pr-modal-bg').classList.remove('open');
  _prItems = [];
}

function prPopulateDepts(companyId) {
  const sel = document.getElementById('pr-f-dept');
  if (!sel) return;
  const cid = companyId || document.getElementById('pr-f-company')?.value || activeCompany;
  const depts = DB_departments.where(d => d.company_id === cid);
  sel.innerHTML = '<option value="">— выберите отдел —</option>' +
    depts.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
}

function prPopulateModalUsers() {
  const sel = document.getElementById('pr-f-user');
  if (!sel || sel.dataset.filled) return;
  try {
    const users = JSON.parse(localStorage.getItem('ved_users') || '[]');
    sel.innerHTML = '<option value="">— выберите пользователя —</option>' +
      users.map(u => `<option value="${u.login}">${u.name}</option>`).join('');
    sel.dataset.filled = '1';
  } catch(e) {}
}

/* ── ITEMS TABLE IN MODAL ────────────────────────────────── */

function prRenderItemsTable() {
  const tbody = document.getElementById('pr-items-body');
  if (!tbody) return;
  if (_prItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="padding:16px;text-align:center;color:var(--text3);font-size:11px">Добавьте хотя бы одну позицию</td></tr>`;
    return;
  }
  tbody.innerHTML = _prItems.map((it, i) => `
    <tr>
      <td style="color:var(--text3);font-size:11px;text-align:center">${i+1}</td>
      <td><input value="${it.name_en||''}" oninput="_prItems[${i}].name_en=this.value" placeholder="Cable 3C x 0.5mm²"></td>
      <td><input value="${it.name_ru||''}" oninput="_prItems[${i}].name_ru=this.value" placeholder="Кабель бронированный"></td>
      <td><input value="${it.hs_code||''}" oninput="_prItems[${i}].hs_code=this.value" placeholder="8544199000" style="font-family:'JetBrains Mono',monospace;font-size:11px"></td>
      <td>
        <select oninput="_prItems[${i}].unit=this.value" style="width:100%">
          ${['Pcs','Mtrs','Kgs','Sets','m²','L','T'].map(u => `<option value="${u}" ${it.unit===u?'selected':''}>${u}</option>`).join('')}
        </select>
      </td>
      <td><input type="number" min="0" value="${it.qty_requested||0}" oninput="_prItems[${i}].qty_requested=parseFloat(this.value)||0" style="text-align:right"></td>
      <td><input type="number" min="0" step="0.01" value="${it.estimated_price||0}" oninput="_prItems[${i}].estimated_price=parseFloat(this.value)||0" style="text-align:right"></td>
      <td>
        <select oninput="_prItems[${i}].currency=this.value" style="width:100%">
          ${['USD','EUR','CNY','INR','RUB'].map(cu => `<option value="${cu}" ${it.currency===cu?'selected':''}>${cu}</option>`).join('')}
        </select>
      </td>
      <td><button class="del-btn" onclick="_prItems.splice(${i},1);prRenderItemsTable()">×</button></td>
    </tr>
  `).join('');
}

function prAddItem() {
  _prItems.push({ name_en:'', name_ru:'', hs_code:'', unit:'Pcs', qty_requested:1, estimated_price:0, currency: (_prItems[0]?.currency || 'USD') });
  prRenderItemsTable();
  // Scroll to new row
  const tbody = document.getElementById('pr-items-body');
  if (tbody) tbody.lastElementChild?.scrollIntoView({behavior:'smooth', block:'nearest'});
}

/* ── SAVE ────────────────────────────────────────────────── */

function _prCollectFormData(status) {
  const num         = document.getElementById('pr-f-num')?.value?.trim();
  const company_id  = document.getElementById('pr-f-company')?.value || activeCompany;
  const dept_id     = document.getElementById('pr-f-dept')?.value || '';
  const user        = document.getElementById('pr-f-user')?.value || (currentUser?.login||'');
  const priority    = document.getElementById('pr-f-priority')?.value || 'normal';
  const st          = status || document.getElementById('pr-f-status')?.value || 'draft';
  const deadline    = document.getElementById('pr-f-deadline')?.value || '';
  const notes       = document.getElementById('pr-f-notes')?.value?.trim() || '';
  const contract_num= document.getElementById('pr-f-contract')?.value?.trim() || '';

  if (!num) { alert('Укажите номер заявки'); return null; }
  if (_prItems.length === 0) { alert('Добавьте хотя бы одну позицию'); return null; }

  return {
    num, company_id,
    department_id: dept_id,
    requested_by:  user,
    priority, status: st, deadline, notes, contract_num,
    items: JSON.parse(JSON.stringify(_prItems)),
  };
}

function prSave(forceStatus) {
  const data = _prCollectFormData(forceStatus);
  if (!data) return;

  const editId = document.getElementById('pr-edit-id')?.value;
  if (editId) {
    DB_purchase_requests.update(editId, data);
  } else {
    DB_purchase_requests.insert(data);
  }

  prCloseModal();
  prLoad();
  showToast('✅ Заявка сохранена');
}

function prSaveAndSubmit() {
  const data = _prCollectFormData('submitted');
  if (!data) return;
  const editId = document.getElementById('pr-edit-id')?.value;
  if (editId) {
    DB_purchase_requests.update(editId, data);
  } else {
    DB_purchase_requests.insert(data);
  }
  prCloseModal();
  prLoad();
  showToast('📤 Заявка отправлена на согласование');
}

/* ── DELETE ──────────────────────────────────────────────── */

function prDelete(id) {
  const r = DB_purchase_requests.find(id);
  if (!r) return;
  if (!confirm(`Удалить заявку ${r.num}?`)) return;
  DB_purchase_requests.delete(id);
  prLoad();
  showToast('🗑 Заявка удалена');
}

/* ── DETAIL CARD ─────────────────────────────────────────── */

function prOpenDetail(id) {
  const r = DB_purchase_requests.find(id);
  if (!r) return;
  const dept = DB_departments.find(r.department_id);
  const items = r.items || [];

  const itemsHTML = items.length ? `
    <table class="pr-items-table" style="margin-top:8px">
      <thead><tr>
        <th>#</th><th>Описание EN</th><th>Описание RU</th>
        <th>ТН ВЭД</th><th>Ед.</th><th>Кол-во</th><th>Цена</th><th>Сумма</th>
      </tr></thead>
      <tbody>
        ${items.map((it,i) => {
          const amt = (it.qty_requested||0) * (it.estimated_price||0);
          return `<tr>
            <td style="color:var(--text3)">${i+1}</td>
            <td style="font-weight:500">${it.name_en||'—'}</td>
            <td style="color:var(--text3)">${it.name_ru||'—'}</td>
            <td style="font-family:'JetBrains Mono',monospace;font-size:10px">${it.hs_code||'—'}</td>
            <td>${it.unit||''}</td>
            <td style="text-align:right;font-family:'JetBrains Mono',monospace">${it.qty_requested||0}</td>
            <td style="text-align:right;font-family:'JetBrains Mono',monospace">${fmtNum(it.estimated_price||0)} ${it.currency||''}</td>
            <td style="text-align:right;font-family:'JetBrains Mono',monospace;font-weight:600">${fmtNum(amt)} ${it.currency||''}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>` : '<div style="color:var(--text3);font-size:12px;padding:12px 0">Позиции не указаны</div>';

  const totalAmt = items.reduce((s,it) => s + ((it.qty_requested||0)*(it.estimated_price||0)), 0);
  const currency = items[0]?.currency || '';

  document.getElementById('pr-detail-content').innerHTML = `
    <div class="pr-modal-title">
      <span style="color:var(--co-accent)">📋</span>
      ${r.num||'—'} &nbsp;·&nbsp; ${prBadge(r.status||'draft')}
    </div>

    <div class="pr-detail-grid">
      <div class="pr-detail-field"><label>Дата создания</label><span>${prFmtDate(r.created_at)}</span></div>
      <div class="pr-detail-field"><label>Компания</label><span>${r.company_id||'—'}</span></div>
      <div class="pr-detail-field"><label>Инициатор</label><span>${r.requested_by||'—'}</span></div>
      <div class="pr-detail-field"><label>Отдел</label><span>${dept?.name||'—'}</span></div>
      <div class="pr-detail-field"><label>Приоритет</label><span>${prPriorityDot(r.priority||'normal')} ${PR_PRIORITY_LABELS[r.priority]||r.priority||'—'}</span></div>
      <div class="pr-detail-field"><label>Нужна до</label><span>${prFmtDate(r.deadline)} ${prDaysLeft(r.deadline)}</span></div>
      ${r.contract_num ? `<div class="pr-detail-field"><label>Договор</label><span><a href="#" onclick="openContractByNum('${r.contract_num}');prCloseDetail()" style="color:var(--co-accent)">${r.contract_num}</a></span></div>` : ''}
      ${r.approved_by ? `<div class="pr-detail-field"><label>Согласовал</label><span>${r.approved_by} · ${prFmtDate(r.approved_at)}</span></div>` : ''}
    </div>

    ${r.notes ? `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px;font-size:13px;color:var(--text2);margin-bottom:18px">${r.notes}</div>` : ''}

    <div class="block-title" style="margin-bottom:10px">Позиции заявки · ${items.length} позиций · итого ${fmtNum(totalAmt)} ${currency}</div>
    ${itemsHTML}

    <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">
      <button class="gen-btn" onclick="prCloseDetail();prOpenEdit('${r.id}')" style="margin:0;padding:8px 18px;font-size:12px">✏ Редактировать</button>
      ${r.status === 'draft' ? `<button class="gen-btn secondary" onclick="prQuickStatus('${r.id}','submitted');prCloseDetail()" style="margin:0;padding:8px 18px;font-size:12px">📤 Отправить</button>` : ''}
      ${r.status === 'submitted' ? `
        <button class="gen-btn" onclick="prQuickStatus('${r.id}','approved');prCloseDetail()" style="margin:0;padding:8px 18px;font-size:12px;background:var(--green)">✅ Утвердить</button>
        <button class="gen-btn secondary" onclick="prQuickStatus('${r.id}','rejected');prCloseDetail()" style="margin:0;padding:8px 18px;font-size:12px;color:var(--rust)">❌ Отклонить</button>
      ` : ''}
      ${r.status === 'approved' ? `<button class="gen-btn secondary" onclick="prCreateRFQ('${r.id}')" style="margin:0;padding:8px 18px;font-size:12px;color:#9333ea;border-color:#9333ea">🔀 Создать RFQ</button>` : ''}
      ${r.status === 'rfq_created' ? `<button class="gen-btn secondary" onclick="prCloseDetail();showSection('rfq-supplier')" style="margin:0;padding:8px 18px;font-size:12px;color:#9333ea">↗ Открыть RFQ</button>` : ''}
      <button class="gen-btn secondary" onclick="prExportExcel('${r.id}')" style="margin:0;padding:8px 18px;font-size:12px;color:var(--green,#16a34a);border-color:var(--green,#16a34a)" title="Скачать список позиций в Excel">📊 Excel</button>
      <button class="gen-btn secondary" onclick="prExportPDF('${r.id}')" style="margin:0;padding:8px 18px;font-size:12px;color:var(--rust,#b91c1c);border-color:var(--rust,#b91c1c)" title="Распечатать / сохранить как PDF">📄 PDF</button>
      <button class="gen-btn secondary" onclick="prCloseDetail()" style="margin:0;padding:8px 18px;font-size:12px;margin-left:auto">Закрыть</button>
    </div>
  `;

  document.getElementById('pr-detail-bg').classList.add('open');
}

function prCloseDetail() {
  document.getElementById('pr-detail-bg').classList.remove('open');
}

/* ── PDF IMPORT FOR PR ───────────────────────────────────── */
function prHandleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer?.files?.[0];
  if (file && file.type === 'application/pdf') prImportPdf(file);
}

function prShowImportStatus(type, html) {
  const el = document.getElementById('pr-import-status');
  if (!el) return;
  el.style.display = 'block';
  const colors = { loading:'var(--text2)', success:'var(--green,#16a34a)', error:'var(--rust,#b91c1c)' };
  el.style.color = colors[type] || 'var(--text2)';
  el.innerHTML = html;
}

async function prImportPdf(file) {
  if (!file) return;
  if (file.size > 30 * 1024 * 1024) {
    prShowImportStatus('error', '⚠ Файл слишком большой (максимум 30 МБ)');
    return;
  }

  if (!getApiKey()) {
    prShowImportStatus('error', '⚠ Не задан API ключ Anthropic. Нажмите <b>⚙ API</b> в шапке и введите ключ.');
    return;
  }

  // ── Send PDF to Railway backend (polling approach — avoids CDN timeout) ──
  const BACKEND = 'https://ved-backend-production.up.railway.app/api/v1/claude';
  prShowImportStatus('loading', '⏳ Отправляю PDF на сервер...');
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', getApiKey());

    // POST: starts background job, returns job_id immediately (<2s)
    const startResp = await fetch(`${BACKEND}/import-pdf`, { method: 'POST', body: formData });
    const startData = await startResp.json();
    if (!startResp.ok) throw new Error(startData.error || `Ошибка сервера ${startResp.status}`);

    const jobId = startData.job_id;
    if (!jobId) throw new Error('Сервер не вернул job_id');

    // Poll every 4 seconds until done (Claude takes 30-90s for scanned PDFs)
    let elapsed = 0;
    const maxWait = 180; // 3 minutes max
    let result = null;

    while (elapsed < maxWait) {
      await new Promise(r => setTimeout(r, 4000));
      elapsed += 4;

      prShowImportStatus('loading', `⏳ Claude анализирует документ... (${elapsed}с)`);

      const pollResp = await fetch(`${BACKEND}/import-pdf/${jobId}`);
      if (!pollResp.ok) continue; // 404 = job not ready yet, keep polling
      const pollData = await pollResp.json();

      if (pollData.status === 'done') { result = pollData.result; break; }
      if (pollData.status === 'error') throw new Error(pollData.error || 'Ошибка на сервере');
      // status === 'processing' → continue polling
    }

    if (!result) throw new Error('Превышено время ожидания (3 мин). Попробуйте снова.');

    const items = result.items || [];
    if (items.length === 0) throw new Error('Позиции не найдены в документе.');

    _prItems = items.map(it => ({
      name_en: it.name_en || '', name_ru: it.name_ru || '', hs_code: it.hs_code || '',
      unit: it.unit || 'Pcs', qty_requested: Number(it.qty) || 1,
      estimated_price: Number(it.price) || 0, currency: result.currency || 'CNY',
    }));
    prRenderItemsTable();

    const notesField = document.getElementById('pr-f-notes');
    if (notesField && !notesField.value && result.notes) notesField.value = result.notes;

    const confWarn = result.confidence === 'low'
      ? ' · <span style="color:var(--gold,#d97706)">⚠ низкая уверенность — проверьте данные</span>' : '';
    prShowImportStatus('success',
      `✅ Извлечено ${items.length} позиций из «${file.name}»${result.supplier ? ' · поставщик: <b>' + result.supplier + '</b>' : ''}${confWarn}`
    );
    return;
  } catch(e) {
    console.error('PR import error:', e);
    prShowImportStatus('error', `❌ ${e.message}`);
    return;
  }

  // (legacy code below — not reached)
  prShowImportStatus('loading', '⏳ Читаю PDF...');

  try {
    const arrayBuffer = await file.arrayBuffer();

    if (typeof pdfjsLib === 'undefined') throw new Error('PDF.js не загружен, обновите страницу');
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    // Try text extraction first
    let pdfText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      pdfText += content.items.map(s => s.str).join(' ') + '\n';
    }

    const systemPrompt = `Ты — специализированный OCR-ассистент для извлечения товарных позиций из коммерческих документов (инвойсов, счётов, прайс-листов) в сфере нефтегазового, промышленного и строительного оборудования.

КРИТИЧЕСКИ ВАЖНО — ПРАВИЛА ТОЧНОГО ЧТЕНИЯ ТЕКСТА:
1. КОПИРУЙ текст ДОСЛОВНО, символ за символом — не перефразируй, не исправляй, не угадывай.
2. Если слово нечёткое — напиши его так как видишь, НЕ заменяй похожим словом из своих знаний.
3. Примеры частых ошибок которых нужно ИЗБЕГАТЬ:
   - «Корзиночный захват» — НЕ писать «Коррозионный захват»
   - «Фиксирующее кольцо» — НЕ писать «фиксированное» или сокращать
   - «УНД», «УДЗ», «НД», «НКТ», «ОК», «ШМУ» — это технические аббревиатуры, копируй точно
   - Числа с запятой «206,37» — НЕ округлять и НЕ изменять
4. Размерные характеристики (мм, диаметры, диапазоны типа «149,23 мм – 190 мм») включай ПОЛНОСТЬЮ.
5. Артикулы и модели (LT-T206, MZ195*1 44-6 5/8 REG и т.д.) — копируй точно со всеми символами.

СТРУКТУРА ДОКУМЕНТА:
- Документ может содержать иерархию: основные позиции (1, 2, 3…) и субпозиции (1.1, 1.2, 2.1…)
- Включай ВСЕ строки таблицы — и заголовки категорий, и все субпозиции без исключения
- Если строка является заголовком категории без цены — включи её с qty=0 и price=0

ЯЗЫК:
- Документ может быть на русском, английском, китайском или смешанный
- Поле name_ru: если текст УЖЕ на русском — скопируй ДОСЛОВНО, не переводи заново
- Поле name_en: если текст на русском — дай точный технический перевод на английский

Верни ТОЛЬКО валидный JSON без пояснений и markdown-блоков.

Формат ответа:
{
  "supplier": "название поставщика точно как в документе",
  "invoiceNumber": "номер документа",
  "currency": "валюта (USD, EUR, CNY, RUB и т.д.)",
  "notes": "условия поставки и оплаты если есть",
  "items": [
    {
      "name_en": "точное описание товара на английском",
      "name_ru": "точное описание товара на русском — копировать дословно из документа",
      "hs_code": "код ТН ВЭД / HS code если есть, иначе пустая строка",
      "unit": "единица измерения (Pcs, шт, м, кг и т.д.)",
      "qty": числовое_количество,
      "price": числовое_значение_цены_за_единицу
    }
  ],
  "confidence": "high если текст чёткий / medium если местами нечёткий / low если изображение плохого качества"
}
Если поле не найдено — пустая строка или 0 для чисел.`;

    let messageContent;

    if (pdfText.trim().length > 100) {
      // Text PDF — send extracted text
      prShowImportStatus('loading', '⏳ Текст извлечён, Claude анализирует...');
      messageContent = `Извлеки все товарные позиции из этого документа и верни строго в JSON формате.\n\nТЕКСТ ДОКУМЕНТА:\n${pdfText.slice(0, 15000)}`;
    } else {
      // Scanned PDF — process pages in two batches to stay under Railway payload limit
      prShowImportStatus('loading', '⏳ Скан обнаружен, обрабатываю постранично...');

      const totalPages = Math.min(pdf.numPages, 4);
      const allItems = [];
      let extractedMeta = { supplier: '', currency: 'CNY', notes: '', confidence: 'high' };

      // Helper: render one page to base64 JPEG
      const renderPage = async (pageNum) => {
        const pg = await pdf.getPage(pageNum);
        const vp = pg.getViewport({ scale: 1.2 }); // higher scale = readable text
        const cv = document.createElement('canvas');
        cv.width = vp.width; cv.height = vp.height;
        await pg.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
        return cv.toDataURL('image/jpeg', 0.7).split(',')[1]; // 70% quality — clear enough to read
      };

      // Process one page at a time (Railway payload limit ~25KB per request)
      for (let batch = 0; batch < totalPages; batch += 1) {
        const p = batch + 1;
        prShowImportStatus('loading', `⏳ Страница ${p}/${totalPages}: конвертирую...`);
        const jpegData = await renderPage(p);
        prShowImportStatus('loading', `⏳ Страница ${p}/${totalPages}: Claude читает...`);

        const batchContent = [
          { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: jpegData } },
          { type: 'text', text: 'Извлеки ВСЕ товарные позиции с этой страницы и верни строго в JSON формате. Включи все субпозиции (1.1, 1.2 и т.д.). Не пропускай ни одну строку таблицы.' }
        ];

        const batchResp = await fetch('https://ved-backend-production.up.railway.app/api/v1/claude/proxy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: getApiKey(),
            model: 'claude-haiku-4-5-20251001', // faster model for vision — avoids Railway 60s timeout
            max_tokens: 4000,
            system: systemPrompt,
            messages: [{ role: 'user', content: batchContent }]
          })
        });
        if (!batchResp.ok) {
          const e = await batchResp.json().catch(() => ({}));
          throw new Error(`API ошибка ${batchResp.status}: ${e.error?.message || batchResp.statusText}`);
        }
        const batchData = await batchResp.json();
        const rawBatch = batchData.content?.map(b => b.text || '').join('').trim();
        try {
          const cleanBatch = rawBatch.replace(/^```[a-z]*\n?/,'').replace(/\n?```$/,'').trim();
          const parsedBatch = JSON.parse(cleanBatch);
          if (parsedBatch.items?.length) allItems.push(...parsedBatch.items);
          if (parsedBatch.supplier) extractedMeta.supplier = parsedBatch.supplier;
          if (parsedBatch.currency) extractedMeta.currency = parsedBatch.currency;
          if (parsedBatch.notes && !extractedMeta.notes) extractedMeta.notes = parsedBatch.notes;
          if (parsedBatch.confidence === 'low') extractedMeta.confidence = 'low';
        } catch(e) { /* skip failed batch */ }
      }

      if (allItems.length === 0) throw new Error('Позиции не найдены в документе.');
      _prItems = allItems.map(it => ({
        name_en: it.name_en || '', name_ru: it.name_ru || '', hs_code: it.hs_code || '',
        unit: it.unit || 'Pcs', qty_requested: Number(it.qty) || 1,
        estimated_price: Number(it.price) || 0, currency: extractedMeta.currency || 'CNY',
      }));
      prRenderItemsTable();
      const nf = document.getElementById('pr-f-notes');
      if (nf && !nf.value && extractedMeta.notes) nf.value = extractedMeta.notes;
      const cw = extractedMeta.confidence === 'low'
        ? ' · <span style="color:var(--gold,#d97706)">⚠ низкая уверенность — проверьте данные</span>' : '';
      prShowImportStatus('success',
        `✅ Извлечено ${allItems.length} позиций из «${file.name}»${extractedMeta.supplier ? ' · поставщик: <b>' + extractedMeta.supplier + '</b>' : ''}${cw}`
      );
      return;
    }

    const response = await fetch('https://ved-backend-production.up.railway.app/api/v1/claude/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: getApiKey(),
        model: 'claude-sonnet-4-6',
        max_tokens: 3000,
        system: systemPrompt,
        messages: [{ role: 'user', content: messageContent }]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(`API ошибка ${response.status}: ${errData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.content?.map(b => b.text || '').join('').trim();

    let extracted;
    try {
      const clean = rawText.replace(/^```[a-z]*\n?/,'').replace(/\n?```$/,'').trim();
      extracted = JSON.parse(clean);
    } catch(e) {
      throw new Error('Не удалось разобрать ответ. Попробуйте другой файл.');
    }

    const items = extracted.items || [];
    if (items.length === 0) throw new Error('Позиции не найдены в документе.');

    // Fill items into the PR form
    _prItems = items.map(it => ({
      name_en: it.name_en || '',
      name_ru: it.name_ru || '',
      hs_code: it.hs_code || '',
      unit: it.unit || 'Pcs',
      qty_requested: Number(it.qty) || 1,
      estimated_price: Number(it.price) || 0,
      currency: extracted.currency || 'USD',
    }));
    prRenderItemsTable();

    // Fill notes if empty
    const notesField = document.getElementById('pr-f-notes');
    if (notesField && !notesField.value && extracted.notes) {
      notesField.value = extracted.notes;
    }

    const confWarn = extracted.confidence === 'low'
      ? ' · <span style="color:var(--gold,#d97706)">⚠ низкая уверенность — проверьте данные</span>' : '';
    prShowImportStatus('success',
      `✅ Извлечено ${items.length} позиций из «${file.name}»${extracted.supplier ? ' · поставщик: <b>' + extracted.supplier + '</b>' : ''}${confWarn}`
    );

  } catch(e) {
    console.error('PR import error:', e);
    prShowImportStatus('error', `❌ ${e.message}`);
  }
}

/* ── EXPORT PR → EXCEL ──────────────────────────────────── */
function prExportExcel(id) {
  const r = DB_purchase_requests.find(id);
  if (!r) return;
  const dept = DB_departments.find(r.department_id);
  const items = r.items || [];

  const wb = XLSX.utils.book_new();
  const PR_STATUS_LABELS = { draft:'Черновик', submitted:'На утверждении', approved:'Утверждена', rejected:'Отклонена', rfq_created:'RFQ создан' };

  // Header info rows
  const info = [
    ['ЗАЯВКА НА ЗАКУПКУ', '', '', '', '', '', '', ''],
    ['Номер:', r.num||'—', '', 'Статус:', PR_STATUS_LABELS[r.status]||r.status||'—', '', '', ''],
    ['Компания:', r.company_id||'—', '', 'Дата:', r.created_at ? new Date(r.created_at).toLocaleDateString('ru-RU') : '—', '', '', ''],
    ['Инициатор:', r.requested_by||'—', '', 'Отдел:', dept?.name||'—', '', '', ''],
    ['Нужна до:', r.deadline ? new Date(r.deadline).toLocaleDateString('ru-RU') : '—', '', 'Приоритет:', r.priority||'normal', '', '', ''],
    [],
    ['#', 'Описание (EN)', 'Описание (RU)', 'ТН ВЭД', 'Ед. изм.', 'Кол-во', 'Цена', 'Сумма'],
  ];

  const dataRows = items.map((it, i) => {
    const amt = (it.qty_requested||0) * (it.estimated_price||0);
    return [i+1, it.name_en||'', it.name_ru||'', it.hs_code||'', it.unit||'', it.qty_requested||0, it.estimated_price||0, amt];
  });

  const totalAmt = items.reduce((s,it) => s + ((it.qty_requested||0)*(it.estimated_price||0)), 0);
  const currency = items[0]?.currency || '';
  const totalRow = ['', '', '', '', '', '', 'ИТОГО:', totalAmt + (currency ? ' ' + currency : '')];

  const aoa = [...info, ...dataRows, [], totalRow];
  if (r.notes) aoa.push([], ['Примечание:', r.notes]);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{wch:4},{wch:28},{wch:24},{wch:14},{wch:8},{wch:8},{wch:14},{wch:16}];
  ws['!merges'] = [{s:{r:0,c:0}, e:{r:0,c:7}}]; // title merge

  XLSX.utils.book_append_sheet(wb, ws, 'Заявка');
  XLSX.writeFile(wb, `PR_${r.num||r.id}_${new Date().toISOString().slice(0,10)}.xlsx`);
}

/* ── EXPORT PR → PDF (print) ────────────────────────────── */
function prExportPDF(id) {
  const r = DB_purchase_requests.find(id);
  if (!r) return;
  const dept = DB_departments.find(r.department_id);
  const items = r.items || [];
  const PR_STATUS_LABELS = { draft:'Черновик', submitted:'На утверждении', approved:'Утверждена', rejected:'Отклонена', rfq_created:'RFQ создан' };
  const totalAmt = items.reduce((s,it) => s + ((it.qty_requested||0)*(it.estimated_price||0)), 0);
  const currency = items[0]?.currency || '';

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Заявка ${r.num||''}</title>
  <style>
    body{font-family:Arial,sans-serif;font-size:12px;color:#111;margin:32px}
    h2{font-size:16px;margin:0 0 16px}
    .meta{display:grid;grid-template-columns:1fr 1fr;gap:6px 24px;margin-bottom:20px;font-size:12px}
    .meta b{color:#555;font-weight:normal}
    table{width:100%;border-collapse:collapse;margin-top:8px;font-size:11px}
    th{background:#f0f0f0;padding:6px 8px;text-align:left;border:1px solid #ccc;font-size:11px}
    td{padding:6px 8px;border:1px solid #ddd}
    tr:nth-child(even) td{background:#fafafa}
    .total{text-align:right;font-weight:700;font-size:13px;margin-top:10px}
    .notes{margin-top:16px;padding:10px;background:#fffbeb;border:1px solid #f0d060;border-radius:4px;font-size:11px}
    @media print{body{margin:16px}}
  </style></head><body>
  <h2>📋 Заявка на закупку · ${r.num||'—'} · ${PR_STATUS_LABELS[r.status]||r.status||''}</h2>
  <div class="meta">
    <div><b>Компания:</b> ${r.company_id||'—'}</div>
    <div><b>Дата:</b> ${r.created_at ? new Date(r.created_at).toLocaleDateString('ru-RU') : '—'}</div>
    <div><b>Инициатор:</b> ${r.requested_by||'—'}</div>
    <div><b>Отдел:</b> ${dept?.name||'—'}</div>
    <div><b>Нужна до:</b> ${r.deadline ? new Date(r.deadline).toLocaleDateString('ru-RU') : '—'}</div>
    <div><b>Приоритет:</b> ${r.priority||'normal'}</div>
  </div>
  <table>
    <thead><tr><th>#</th><th>Описание (EN)</th><th>Описание (RU)</th><th>ТН ВЭД</th><th>Ед.</th><th>Кол-во</th><th>Цена</th><th>Сумма</th></tr></thead>
    <tbody>
      ${items.map((it,i)=>{
        const amt=(it.qty_requested||0)*(it.estimated_price||0);
        return `<tr><td>${i+1}</td><td>${it.name_en||'—'}</td><td>${it.name_ru||'—'}</td><td>${it.hs_code||'—'}</td><td>${it.unit||''}</td><td style="text-align:right">${it.qty_requested||0}</td><td style="text-align:right">${(it.estimated_price||0).toLocaleString('ru-RU')} ${it.currency||''}</td><td style="text-align:right;font-weight:600">${amt.toLocaleString('ru-RU')} ${it.currency||''}</td></tr>`;
      }).join('')}
    </tbody>
  </table>
  <div class="total">Итого: ${totalAmt.toLocaleString('ru-RU')} ${currency}</div>
  ${r.notes ? `<div class="notes"><b>Примечание:</b> ${r.notes}</div>` : ''}
  <script>window.onload=function(){window.print();}<\/script>
  </body></html>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  win.document.write(html);
  win.document.close();
}

function prQuickStatus(id, status) {
  const patch = { status };
  if (status === 'approved' && currentUser) {
    patch.approved_by = currentUser.login;
    patch.approved_at = vedNow();
  }
  DB_purchase_requests.update(id, patch);
  prLoad();
  const labels = { submitted:'отправлена', approved:'утверждена', rejected:'отклонена', rfq_created:'RFQ создан' };
  showToast(`✅ Заявка ${labels[status]||status}`);
}

/* ── CONTRACT HINT ───────────────────────────────────────── */

function prContractHint(num) {
  const hint = document.getElementById('pr-f-contract-hint');
  if (!hint) return;
  if (!num || num.length < 4) { hint.textContent = ''; return; }
  const ct = contractFindByNum(num);
  hint.style.color = ct ? 'var(--co-accent)' : 'var(--text3)';
  hint.textContent = ct
    ? `✓ ${ct.sellerName || ''} · ${ct.currency || ''}`
    : '⚠ Договор не найден в базе';
}

/* ── TOAST (uses existing if present, else own) ──────────── */

function showToast(msg) {
  // Use existing toast mechanism or create simple one
  let t = document.getElementById('ved-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'ved-toast';
    t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--text);color:#fff;padding:10px 22px;border-radius:24px;font-size:13px;z-index:9999;pointer-events:none;transition:opacity 0.3s;white-space:nowrap';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2800);
}

/* ╔══════════════════════════════════════════════════════════
   ║  RFQ SUPPLIER MODULE  (section-rfq-supplier)
   ╚══════════════════════════════════════════════════════════ */

const RFQS_STATUS_LABELS = {
  draft:    'Черновик',
  sent:     'Отправлено',
  received: 'Ответы получены',
  analysed: 'На анализе',
  closed:   'Закрыто',
};

let _rfqsFilter   = 'all';
let _rfqsItems    = [];   // items in create modal
let _rfqsSupIds   = [];   // selected supplier ids in create modal

/* ── BADGE ──────────────────────────────────────────────── */

function rfqsBadge(status) {
  return `<span class="rfqs-badge ${status}">${RFQS_STATUS_LABELS[status]||status}</span>`;
}

/* ── LOAD / RENDER LIST ─────────────────────────────────── */

function rfqsLoad() {
  rfqsUpdateKPIs();

  let rows = DB_rfq_requests.all();
  const search = (document.getElementById('rfqs-search')?.value || '').toLowerCase().trim();

  if (_rfqsFilter !== 'all') rows = rows.filter(r => r.status === _rfqsFilter);
  if (search) rows = rows.filter(r =>
    (r.num||'').toLowerCase().includes(search) ||
    (r.items||[]).some(it => (it.name_en||'').toLowerCase().includes(search) || (it.name_ru||'').toLowerCase().includes(search))
  );

  rows = rows.sort((a,b) => (b.created_at||'').localeCompare(a.created_at||''));

  const tbody = document.getElementById('rfqs-table-body');
  if (!tbody) return;

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10"><div class="pr-empty">
      <div style="font-size:28px;margin-bottom:10px;opacity:0.3">🔀</div>
      ${search || _rfqsFilter !== 'all' ? 'Ничего не найдено' : 'RFQ не созданы. Создайте первый запрос.'}
    </div></td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map(r => {
    const firstItem = (r.items||[])[0] || {};
    const itemsCount = (r.items||[]).length;
    const totalQty = (r.items||[]).reduce((s,it) => s + (parseFloat(it.qty)||0), 0);
    const supCount = (r.supplier_ids||[]).length;
    const pr = r.pr_id ? DB_purchase_requests.find(r.pr_id) : null;
    const deadlineDiff = r.deadline_response
      ? Math.ceil((new Date(r.deadline_response) - new Date()) / 86400000) : null;
    const deadlineStr = r.deadline_response
      ? `${prFmtDate(r.deadline_response)} ${deadlineDiff !== null
          ? deadlineDiff < 0
            ? `<span style="color:var(--rust);font-size:10px">просрочено</span>`
            : deadlineDiff <= 3
              ? `<span style="color:#ea580c;font-size:10px">${deadlineDiff}д</span>`
              : `<span style="font-size:10px;color:var(--text3)">${deadlineDiff}д</span>`
          : ''}` : '—';

    return `<tr onclick="rfqsOpenDetail('${r.id}')">
      <td class="rfqs-td-num">${r.num||'—'}</td>
      <td style="color:var(--text3);font-size:11px;white-space:nowrap">${prFmtDate(r.created_at)}</td>
      <td>
        ${pr ? `<a href="#" onclick="event.stopPropagation();prOpenDetail('${pr.id}')" style="color:var(--co-accent);font-family:'JetBrains Mono',monospace;font-size:11px">${pr.num}</a>` : '<span style="color:var(--text3);font-size:11px">—</span>'}
      </td>
      <td>
        <div style="font-weight:500;font-size:12px">${firstItem.name_en||firstItem.name_ru||'—'}</div>
        ${itemsCount > 1 ? `<div style="font-size:10px;color:var(--text3)">+${itemsCount-1} позиций</div>` : ''}
      </td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12px">${totalQty > 0 ? totalQty : '—'}</td>
      <td>
        ${supCount > 0
          ? `<span style="font-size:12px">${supCount} постав${supCount===1?'щик':'щика'}</span>`
          : '<span style="color:var(--text3);font-size:11px">не выбраны</span>'}
      </td>
      <td style="font-size:11px">${deadlineStr}</td>
      <td style="font-size:11px;color:var(--text3)">${r.company_id||'—'}</td>
      <td>${rfqsBadge(r.status||'draft')}</td>
      <td onclick="event.stopPropagation()" style="white-space:nowrap">
        <button onclick="rfqsOpenEdit('${r.id}')" title="Редактировать" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:3px 5px" onmouseover="this.style.color='var(--co-accent)'" onmouseout="this.style.color='var(--text3)'">✏</button>
        <button onclick="rfqsDelete('${r.id}')" title="Удалить" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:3px 5px" onmouseover="this.style.color='var(--rust)'" onmouseout="this.style.color='var(--text3)'">×</button>
      </td>
    </tr>`;
  }).join('');
}

function rfqsUpdateKPIs() {
  const all = DB_rfq_requests.all();
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('rfqs-kpi-total',    all.length);
  set('rfqs-kpi-draft',    all.filter(r=>r.status==='draft').length);
  set('rfqs-kpi-sent',     all.filter(r=>r.status==='sent').length);
  set('rfqs-kpi-received', all.filter(r=>r.status==='received').length);
  set('rfqs-kpi-closed',   all.filter(r=>r.status==='closed').length);
}

function rfqsSetFilter(val, el) {
  _rfqsFilter = val;
  document.querySelectorAll('[data-filter="rfqs-status"]').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  rfqsLoad();
}

/* ── CREATE MODAL ───────────────────────────────────────── */

function rfqsOpenCreate(prId) {
  _rfqsItems = [];
  _rfqsSupIds = [];

  document.getElementById('rfqs-f-num').value = rfqNextNum();
  document.getElementById('rfqs-f-company').value = activeCompany || 'ENDV';
  document.getElementById('rfqs-f-status').value = 'draft';
  document.getElementById('rfqs-f-notes').value = '';
  document.getElementById('rfqs-pr-id').value = prId || '';

  // Set default deadline = 14 days from now
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 14);
  document.getElementById('rfqs-f-deadline').value = deadline.toISOString().slice(0, 10);

  // If launched from a PR — populate items from PR + show banner
  if (prId) {
    const pr = DB_purchase_requests.find(prId);
    if (pr) {
      // Copy items from PR, adding editable notes field
      _rfqsItems = (pr.items||[]).map(it => ({
        name_en:  it.name_en  || '',
        name_ru:  it.name_ru  || '',
        hs_code:  it.hs_code  || '',
        unit:     it.unit     || 'Pcs',
        qty:      it.qty_requested || 0,
        notes:    '',
      }));
      document.getElementById('rfqs-f-company').value = pr.company_id || activeCompany || 'ENDV';
      document.getElementById('rfqs-create-title').textContent = `Создать RFQ из заявки ${pr.num}`;
      const banner = document.getElementById('rfqs-pr-banner');
      const bannerText = document.getElementById('rfqs-pr-banner-text');
      if (banner) banner.style.display = '';
      if (bannerText) bannerText.textContent = `${pr.num} · ${pr.items?.length||0} позиций · ${PR_PRIORITY_LABELS[pr.priority]||pr.priority||''}`;
    }
  } else {
    _rfqsItems = [{ name_en:'', name_ru:'', hs_code:'', unit:'Pcs', qty:1, notes:'' }];
    document.getElementById('rfqs-create-title').textContent = 'Новый запрос поставщикам';
    const banner = document.getElementById('rfqs-pr-banner');
    if (banner) banner.style.display = 'none';
  }

  rfqsRenderItemsBody();
  rfqsRenderSupplierGrid();
  document.getElementById('rfqs-create-bg').classList.add('open');
}

function rfqsCloseCreate() {
  document.getElementById('rfqs-create-bg').classList.remove('open');
  _rfqsItems = [];
  _rfqsSupIds = [];
}

/* ── ITEMS IN MODAL ─────────────────────────────────────── */

function rfqsRenderItemsBody() {
  const tbody = document.getElementById('rfqs-items-body');
  if (!tbody) return;
  if (_rfqsItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="padding:12px;text-align:center;color:var(--text3);font-size:11px">Нет позиций</td></tr>`;
    return;
  }
  tbody.innerHTML = _rfqsItems.map((it, i) => `
    <tr>
      <td style="color:var(--text3);font-size:11px;width:30px">${i+1}</td>
      <td><input value="${it.name_en||''}" oninput="_rfqsItems[${i}].name_en=this.value"
            style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 7px;font-size:11px;background:var(--surface);color:var(--text)"></td>
      <td><input value="${it.name_ru||''}" oninput="_rfqsItems[${i}].name_ru=this.value"
            style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 7px;font-size:11px;background:var(--surface);color:var(--text)"></td>
      <td><input value="${it.hs_code||''}" oninput="_rfqsItems[${i}].hs_code=this.value"
            style="width:90px;border:1px solid var(--border);border-radius:4px;padding:4px 6px;font-size:10px;font-family:'JetBrains Mono',monospace;background:var(--surface);color:var(--text)"></td>
      <td>
        <select oninput="_rfqsItems[${i}].unit=this.value" style="width:60px;border:1px solid var(--border);border-radius:4px;padding:3px;font-size:11px;background:var(--surface);color:var(--text)">
          ${['Pcs','Mtrs','Kgs','Sets','m²','L','T'].map(u=>`<option value="${u}" ${it.unit===u?'selected':''}>${u}</option>`).join('')}
        </select>
      </td>
      <td><input type="number" value="${it.qty||0}" oninput="_rfqsItems[${i}].qty=parseFloat(this.value)||0"
            style="width:70px;border:1px solid var(--border);border-radius:4px;padding:4px 6px;font-size:11px;text-align:right;background:var(--surface);color:var(--text)"></td>
      <td><input value="${it.notes||''}" oninput="_rfqsItems[${i}].notes=this.value" placeholder="Доп. требования"
            style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 7px;font-size:11px;background:var(--surface);color:var(--text)"></td>
    </tr>
  `).join('');
}

/* ── SUPPLIER GRID ──────────────────────────────────────── */

function rfqsRenderSupplierGrid() {
  _rfqsSupIds = [];
  rfqsSupPopulateSelect();
  rfqsUpdateSupHint();
}

function rfqsUpdateSupHint() {
  const hint = document.getElementById('rfqs-sup-hint');
  if (!hint) return;
  const n = _rfqsSupIds.length;
  hint.textContent = n === 0
    ? '⚠ Выберите хотя бы одного поставщика'
    : `✓ Выбрано: ${n} постав${n===1?'щик':n<5?'щика':'щиков'}`;
  hint.style.color = n === 0 ? 'var(--rust)' : 'var(--co-accent)';
}

/* ── SUPPLIER DROPDOWN (custom multiselect) ─────────────── */
let _rfqsSupAllData = []; // cache of all suppliers

function rfqsSupPopulateSelect() {
  try {
    const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
    _rfqsSupAllData = sups.filter(s => s.type === 'supplier' || !s.type);
  } catch(e) { _rfqsSupAllData = []; }
  rfqsSupRenderOptions(_rfqsSupAllData);
  rfqsSupUpdateLabel();
}

function rfqsSupRenderOptions(list) {
  const container = document.getElementById('rfqs-sup-options');
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = '<div style="padding:10px 12px;font-size:13px;color:var(--text3)">Поставщики не найдены</div>';
    return;
  }
  container.innerHTML = list.map(s => {
    const meta = [s.country, s.city].filter(Boolean).join(', ');
    const selected = _rfqsSupIds.includes(String(s.id));
    const bg = selected ? 'background:var(--co-accent,#2563eb);color:#fff;' : '';
    const metaColor = selected ? 'color:rgba(255,255,255,0.75)' : 'color:var(--text3)';
    return `<div onclick="rfqsSupItemClick('${s.id}')"
               style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;cursor:pointer;font-size:13px;${bg}border-bottom:1px solid var(--border,#e5e7eb)"
               onmouseover="if(!this.classList.contains('sup-sel'))this.style.background='var(--hover,rgba(0,0,0,0.04))'"
               onmouseout="if(!this.classList.contains('sup-sel'))this.style.background=''"
               ${selected ? 'class="sup-sel"' : ''}>
      <span>${s.name}${meta ? `<span style="font-size:11px;margin-left:6px;${metaColor}">— ${meta}</span>` : ''}</span>
      ${selected ? '<span style="font-size:12px">✓</span>' : ''}
    </div>`;
  }).join('');
}

function rfqsSupItemClick(sid) {
  sid = String(sid);
  if (_rfqsSupIds.includes(sid)) {
    _rfqsSupIds = _rfqsSupIds.filter(x => x !== sid);
  } else {
    _rfqsSupIds.push(sid);
  }
  rfqsSupRenderOptions(
    (() => {
      const q = (document.getElementById('rfqs-sup-search')?.value || '').toLowerCase();
      return q ? _rfqsSupAllData.filter(s =>
        (s.name||'').toLowerCase().includes(q) ||
        (s.country||'').toLowerCase().includes(q) ||
        (s.city||'').toLowerCase().includes(q)
      ) : _rfqsSupAllData;
    })()
  );
  rfqsSupUpdateLabel();
  rfqsUpdateSupHint();
}

function rfqsSupUpdateLabel() {
  const label = document.getElementById('rfqs-sup-label');
  if (!label) return;
  if (_rfqsSupIds.length === 0) {
    label.textContent = 'Выберите поставщиков...';
    label.style.color = 'var(--text3)';
  } else {
    const names = _rfqsSupIds.map(id => {
      const s = _rfqsSupAllData.find(x => String(x.id) === id);
      return s ? s.name : id;
    });
    label.textContent = names.join(', ');
    label.style.color = 'var(--text)';
  }
}

function rfqsSupFilter() {
  const q = (document.getElementById('rfqs-sup-search')?.value || '').toLowerCase();
  const filtered = q ? _rfqsSupAllData.filter(s =>
    (s.name || '').toLowerCase().includes(q) ||
    (s.country || '').toLowerCase().includes(q) ||
    (s.city || '').toLowerCase().includes(q)
  ) : _rfqsSupAllData;
  rfqsSupRenderOptions(filtered);
}

function rfqsSupToggleDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('rfqs-sup-dropdown');
  if (!dd) return;
  const isOpen = dd.style.display !== 'none';
  if (isOpen) {
    dd.style.display = 'none';
  } else {
    dd.style.display = 'block';
    const search = document.getElementById('rfqs-sup-search');
    if (search) { search.value = ''; search.focus(); }
    rfqsSupRenderOptions(_rfqsSupAllData);
  }
}

function rfqsSupCloseDropdown() {
  const dd = document.getElementById('rfqs-sup-dropdown');
  if (dd) dd.style.display = 'none';
}

// close when clicking outside
document.addEventListener('click', function(e) {
  const wrapper = document.getElementById('rfqs-sup-wrapper');
  if (wrapper && !wrapper.contains(e.target)) rfqsSupCloseDropdown();
});

function rfqsSupOnChange() { rfqsSupUpdateLabel(); rfqsUpdateSupHint(); }

function rfqsToggleSup(id) {
  const sid = String(id);
  if (_rfqsSupIds.includes(sid)) {
    _rfqsSupIds = _rfqsSupIds.filter(x => x !== sid);
  } else {
    _rfqsSupIds.push(sid);
  }
  rfqsSupRenderOptions(_rfqsSupAllData);
  rfqsSupUpdateLabel();
  rfqsUpdateSupHint();
}

/* ── SAVE RFQ ───────────────────────────────────────────── */

function _rfqsCollect(status) {
  const num      = document.getElementById('rfqs-f-num')?.value?.trim();
  const company  = document.getElementById('rfqs-f-company')?.value || activeCompany;
  const deadline = document.getElementById('rfqs-f-deadline')?.value || '';
  const notes    = document.getElementById('rfqs-f-notes')?.value?.trim() || '';
  const st       = status || document.getElementById('rfqs-f-status')?.value || 'draft';
  const prId     = document.getElementById('rfqs-pr-id')?.value || '';

  if (!num) { alert('Укажите номер RFQ'); return null; }
  if (_rfqsItems.length === 0) { alert('Добавьте позиции'); return null; }
  if (st === 'sent' && _rfqsSupIds.length === 0) {
    alert('Для отправки выберите хотя бы одного поставщика'); return null;
  }

  return {
    num, company_id: company,
    pr_id:            prId || null,
    status:           st,
    supplier_ids:     [..._rfqsSupIds],
    items:            JSON.parse(JSON.stringify(_rfqsItems)),
    deadline_response: deadline,
    notes,
  };
}

function rfqsSave(forceStatus) {
  const data = _rfqsCollect(forceStatus);
  if (!data) return;

  // Create RFQ record
  const rfq = DB_rfq_requests.insert(data);

  // If came from a PR — update PR status to rfq_created and link rfq_id
  if (data.pr_id) {
    DB_purchase_requests.update(data.pr_id, {
      status: 'rfq_created',
      rfq_id: rfq.id,
    });
  }

  // Create pending quote placeholders for each selected supplier
  _rfqsSupIds.forEach(supId => {
    DB_rfq_quotes.insert({
      rfq_id:      rfq.id,
      supplier_id: supId,
      status:      'pending',
      items:       data.items.map(it => ({ ...it, unit_price:0, currency:'USD', lead_time_days:0 })),
      total_amount: 0,
      selected:    false,
      is_selected: false,
    });
  });

  rfqsCloseCreate();
  rfqsLoad();
  if (typeof prLoad === 'function') prLoad(); // refresh PR list if visible
  showToast('✅ RFQ сохранён');
}

function rfqsSaveAndSend() {
  rfqsSave('sent');
  if (!document.getElementById('rfqs-create-bg').classList.contains('open')) {
    showToast('📤 RFQ отправлен поставщикам');
  }
}

/* ── ENTRY POINT FROM PR CARD ───────────────────────────── */

function prCreateRFQ(prId) {
  // Close PR detail modal and open RFQ create
  prCloseDetail();
  rfqsOpenCreate(prId);
}

/* ── EDIT ───────────────────────────────────────────────── */

function rfqsOpenEdit(id) {
  const r = DB_rfq_requests.find(id);
  if (!r) return;

  document.getElementById('rfqs-f-num').value      = r.num || '';
  document.getElementById('rfqs-f-company').value  = r.company_id || activeCompany;
  document.getElementById('rfqs-f-deadline').value = r.deadline_response || '';
  document.getElementById('rfqs-f-status').value   = r.status || 'draft';
  document.getElementById('rfqs-f-notes').value    = r.notes || '';
  document.getElementById('rfqs-pr-id').value      = r.pr_id || '';
  document.getElementById('rfqs-create-title').textContent = `Редактировать ${r.num}`;

  _rfqsItems  = JSON.parse(JSON.stringify(r.items || []));
  _rfqsSupIds = [...(r.supplier_ids || [])].map(String);

  const banner = document.getElementById('rfqs-pr-banner');
  if (r.pr_id) {
    const pr = DB_purchase_requests.find(r.pr_id);
    if (pr && banner) {
      banner.style.display = '';
      document.getElementById('rfqs-pr-banner-text').textContent = `${pr.num} · ${pr.items?.length||0} позиций`;
    }
  } else if (banner) {
    banner.style.display = 'none';
  }

  rfqsRenderItemsBody();
  rfqsRenderSupplierGrid();
  document.getElementById('rfqs-create-bg').classList.add('open');
}

/* ── DELETE ─────────────────────────────────────────────── */

function rfqsDelete(id) {
  const r = DB_rfq_requests.find(id);
  if (!r) return;
  if (!confirm(`Удалить RFQ ${r.num}?`)) return;
  // Also delete linked quotes
  DB_rfq_quotes.where(q => q.rfq_id === id).forEach(q => DB_rfq_quotes.delete(q.id));
  DB_rfq_requests.delete(id);
  rfqsLoad();
  showToast('🗑 RFQ удалён');
}

/* ── DETAIL ─────────────────────────────────────────────── */

function rfqsOpenDetail(id) {
  const r = DB_rfq_requests.find(id);
  if (!r) return;
  const pr     = r.pr_id ? DB_purchase_requests.find(r.pr_id) : null;
  const items  = r.items || [];
  const quotes = DB_rfq_quotes.where(q => q.rfq_id === id);
  const receivedQuotes = quotes.filter(q => q.status === 'received');
  const winner = quotes.find(q => q.selected) || null;

  /* ── Requested items table ─────────────────────────── */
  const itemsHTML = `
    <div style="border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-top:8px">
      <table class="rfqs-qtable" style="font-size:12px">
        <thead><tr>
          <th style="width:28px">#</th>
          <th>Наименование EN</th><th>Наименование RU</th>
          <th style="width:90px">ТН ВЭД</th>
          <th class="r" style="width:80px">Кол-во</th>
          <th style="width:50px">Ед.</th>
          <th>Примечание</th>
        </tr></thead>
        <tbody>
          ${items.map((it,i) => `<tr>
            <td style="color:var(--text3)">${i+1}</td>
            <td style="font-weight:500">${it.name_en||'—'}</td>
            <td style="color:var(--text2)">${it.name_ru||'—'}</td>
            <td style="font-family:'JetBrains Mono',monospace;font-size:10px">${it.hs_code||'—'}</td>
            <td class="r">${it.qty||0}</td>
            <td style="color:var(--text3)">${it.unit||''}</td>
            <td style="font-size:11px;color:var(--text3)">${it.notes||''}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;

  /* ── Winner banner ──────────────────────────────────── */
  const winnerBanner = winner ? (() => {
    const ws = supplierById(winner.supplier_id);
    const pct = receivedQuotes.length > 1
      ? (() => {
          const totals = receivedQuotes.map(q => _rfqsQuoteTotal(q));
          const min = Math.min(...totals);
          const wt  = _rfqsQuoteTotal(winner);
          return min > 0 ? Math.round((wt / min - 1) * 100) : 0;
        })()
      : 0;
    return `<div class="rfqs-winner-banner">
      <span style="font-size:22px">🏆</span>
      <div>
        <div style="font-weight:700;font-size:13px;color:var(--text)">Выбранный поставщик: ${ws?.name||'—'}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px">
          Сумма: <strong style="color:#16a34a">${fmtNum(_rfqsQuoteTotal(winner))} ${winner.currency||''}</strong>
          · Срок: ${winner.lead_time_days||'—'} дн.
          · ${winner.inco||'—'} · ${winner.payment_terms||'—'}
          ${pct > 0 ? `<span style="color:var(--rust);margin-left:6px">+${pct}% к мин.</span>` : ''}
        </div>
      </div>
    </div>`;
  })() : '';

  /* ── Quote cards with per-item price tables ─────────── */
  const allTotals = receivedQuotes.map(q => _rfqsQuoteTotal(q)).filter(t => t > 0);
  const minTotal  = allTotals.length ? Math.min(...allTotals) : 0;
  const maxTotal  = allTotals.length ? Math.max(...allTotals) : 0;

  const quoteCardsHTML = quotes.map(q => {
    const sup = supplierById(q.supplier_id);
    const supName = sup?.name || `Поставщик #${q.supplier_id}`;
    const total = _rfqsQuoteTotal(q);
    const isWinner  = q.selected;
    const statusLabels = { pending:'Ожидается', received:'Получено', declined:'Отклонено', expired:'Истекло' };

    // Price class for total
    let sumClass = 'mid';
    if (total > 0 && allTotals.length > 1) {
      if (total === minTotal) sumClass = 'best';
      else if (total === maxTotal) sumClass = 'worst';
    }

    // Per-item price rows
    const qItems = q.items || [];
    const itemRowsHTML = qItems.length
      ? qItems.map((qi,i) => {
          const rfqItem  = items[i] || {};
          const lineAmt  = (parseFloat(qi.unit_price)||0) * (parseFloat(qi.qty || rfqItem.qty)||0);
          return `<tr>
            <td style="color:var(--text3);font-size:11px">${i+1}</td>
            <td style="font-weight:500;font-size:12px">${qi.name_en||rfqItem.name_en||'—'}</td>
            <td class="r">${qi.qty||rfqItem.qty||0} ${qi.unit||rfqItem.unit||''}</td>
            <td class="r" style="font-weight:600">${fmtNum(qi.unit_price||0)}</td>
            <td class="r" style="color:var(--text3)">${q.currency||''}</td>
            <td class="r" style="font-weight:600">${fmtNum(lineAmt)}</td>
            <td class="r" style="color:var(--text3);font-size:11px">${qi.lead_time_days||q.lead_time_days||'—'}</td>
            <td class="r" style="color:var(--text3);font-size:11px">${qi.min_qty||'—'}</td>
          </tr>`;
        }).join('')
      : `<tr><td colspan="8" style="padding:12px;text-align:center;color:var(--text3);font-size:11px">
           Цены не внесены — <a href="#" onclick="rfqsOpenQForm('${id}','${q.id}')" style="color:#9333ea">заполнить</a>
         </td></tr>`;

    return `<div class="rfqs-qcard ${isWinner ? 'winner' : ''}">
      <div class="rfqs-qcard-head">
        <div class="rfqs-qcard-head-left">
          <span class="rfqs-quote-badge ${q.status||'pending'}">${statusLabels[q.status]||q.status}</span>
          <span style="font-weight:700;font-size:13px">${supName}</span>
          ${sup?.country ? `<span style="font-size:11px;color:var(--text3)">${sup.country}${sup.city?', '+sup.city:''}</span>` : ''}
          ${isWinner ? `<span style="font-size:10px;background:#f0fdf4;color:#16a34a;padding:2px 8px;border-radius:10px;font-weight:700">✓ ВЫБРАН</span>` : ''}
        </div>
        <div class="rfqs-qcard-head-right">
          ${total > 0 ? `<span class="rfqs-qsum ${sumClass}">${fmtNum(total)} ${q.currency||''}</span>` : ''}
          <button onclick="rfqsOpenQForm('${id}','${q.id}')"
            style="padding:4px 10px;font-size:11px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;color:var(--text2)"
            onmouseover="this.style.borderColor='#9333ea';this.style.color='#9333ea'"
            onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">
            ✏ ${qItems.length ? 'Изменить' : 'Внести цены'}
          </button>
          ${q.status === 'pending'
            ? `<button onclick="rfqsMarkQuoteReceived('${q.id}','${id}')"
                style="padding:4px 10px;font-size:11px;background:var(--co-accent);color:white;border:none;border-radius:var(--radius-sm);cursor:pointer">
                ✓ Получен
               </button>`
            : ''}
          ${q.status === 'received' && !isWinner
            ? `<button onclick="rfqsSelectQuote('${q.id}','${id}')"
                style="padding:4px 10px;font-size:11px;background:#f0fdf4;color:#16a34a;border:1px solid #86efac;border-radius:var(--radius-sm);cursor:pointer">
                🏆 Выбрать
               </button>`
            : ''}
          <button onclick="rfqsDeleteQuote('${q.id}','${id}')"
            style="padding:4px 8px;font-size:12px;background:none;border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;color:var(--text3)"
            onmouseover="this.style.color='var(--rust)';this.style.borderColor='var(--rust)'"
            onmouseout="this.style.color='var(--text3)';this.style.borderColor='var(--border)'">×</button>
        </div>
      </div>
      <div class="rfqs-qcard-body">
        <table class="rfqs-qtable">
          <thead><tr>
            <th style="width:28px">#</th>
            <th>Наименование</th>
            <th class="r" style="width:70px">Кол-во</th>
            <th class="r" style="width:90px">Цена/ед.</th>
            <th style="width:45px">Вал.</th>
            <th class="r" style="width:90px">Сумма</th>
            <th class="r" style="width:70px">Срок,дн.</th>
            <th class="r" style="width:60px">Мин.кол.</th>
          </tr></thead>
          <tbody>${itemRowsHTML}</tbody>
          ${total > 0 ? `<tfoot><tr class="total-row">
            <td colspan="5" style="padding:8px 12px;font-size:10px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3)">ИТОГО</td>
            <td class="r" style="padding:8px 12px;font-size:14px;font-weight:800;color:${sumClass==='best'?'#16a34a':sumClass==='worst'?'var(--rust)':'var(--text)'}">${fmtNum(total)} ${q.currency||''}</td>
            <td colspan="2"></td>
          </tr></tfoot>` : ''}
        </table>
        ${q.status !== 'pending' ? `
        <div class="rfqs-terms">
          <div class="rfqs-terms-item"><div class="rfqs-terms-label">Базис</div><div class="rfqs-terms-val">${q.inco||'—'}</div></div>
          <div class="rfqs-terms-item"><div class="rfqs-terms-label">Срок поставки</div><div class="rfqs-terms-val">${q.lead_time_days ? q.lead_time_days+' дн.' : '—'}</div></div>
          <div class="rfqs-terms-item"><div class="rfqs-terms-label">Условия оплаты</div><div class="rfqs-terms-val">${q.payment_terms||'—'}</div></div>
          <div class="rfqs-terms-item"><div class="rfqs-terms-label">Действует</div><div class="rfqs-terms-val">${q.validity_days ? q.validity_days+' дн.' : '—'}</div></div>
          ${q.comment ? `<div class="rfqs-terms-item" style="flex:1"><div class="rfqs-terms-label">Комментарий</div><div class="rfqs-terms-val" style="font-weight:400;color:var(--text2)">${q.comment}</div></div>` : ''}
        </div>` : ''}
      </div>
    </div>`;
  }).join('');

  /* ── Comparison table (≥1 received quote) ─────────── */
  const compTableHTML = receivedQuotes.length >= 1 ? (() => {

    /* ── Score algorithm (lower = better, 0–100) ─────── */
    function _score(q) {
      // Weighted: price 50%, lead_time 30%, payment_advance 20%
      const t = _rfqsQuoteTotal(q);
      const allT = receivedQuotes.map(_rfqsQuoteTotal).filter(x=>x>0);
      const minT = allT.length ? Math.min(...allT) : 0;
      const maxT = allT.length ? Math.max(...allT) : 1;
      const priceScore  = maxT > minT ? 100 * (1 - (t - minT) / (maxT - minT)) : 100;

      const allL = receivedQuotes.map(q=>q.lead_time_days||999).filter(x=>x<999);
      const minL = allL.length ? Math.min(...allL) : 1;
      const maxL = allL.length ? Math.max(...allL) : 1;
      const l = q.lead_time_days || 999;
      const leadScore = maxL > minL ? 100 * (1 - (l - minL) / (maxL - minL)) : 100;

      const advancePct = (() => {
        const m = (q.payment_terms||'').match(/(\d+)\s*%?\s*(?:advance|prepay|аванс|предопл)/i);
        return m ? parseInt(m[1]) : 50;
      })();
      const payScore = 100 - advancePct;

      return Math.round(priceScore * 0.5 + leadScore * 0.3 + payScore * 0.2);
    }

    const scores   = receivedQuotes.map(_score);
    const maxScore = Math.max(...scores);
    const allTotals2 = receivedQuotes.map(_rfqsQuoteTotal).filter(t=>t>0);
    const minTotal2  = allTotals2.length ? Math.min(...allTotals2) : 0;

    /* ── Column headers with supplier info + Select btn ─ */
    const supHeaders = receivedQuotes.map((q, qi) => {
      const sup   = supplierById(q.supplier_id);
      const isW   = q.is_selected || q.selected;
      const score = scores[qi];
      const isBestScore = score === maxScore && receivedQuotes.length > 1;
      return `<th class="sup-col ${isW ? 'winner-col' : ''}" style="min-width:160px">
        <div class="rfqs-comp-sup-header">
          <div class="rfqs-comp-sup-name">
            ${isW ? '🏆 ' : ''}${sup?.name || `#${q.supplier_id}`}
          </div>
          <div class="rfqs-comp-sup-meta">
            ${sup?.country || ''}${sup?.city ? ' · ' + sup.city : ''}
          </div>
          <button class="rfqs-comp-select-btn ${isW ? 'selected' : ''}"
            ${isW ? 'disabled' : `onclick="rfqsSelectQuote('${q.id}','${id}')"`}>
            ${isW ? '✓ Выбран' : 'Выбрать поставщика'}
          </button>
        </div>
      </th>`;
    }).join('');

    /* ── Per-item price rows ─────────────────────────── */
    const itemRows = items.map((it, itemIdx) => {
      const prices = receivedQuotes.map(q => parseFloat(q.items?.[itemIdx]?.unit_price || 0));
      const validP = prices.filter(p => p > 0);
      const minP   = validP.length ? Math.min(...validP) : 0;
      const maxP   = validP.length ? Math.max(...validP) : 0;

      const cells = receivedQuotes.map((q, qi) => {
        const p   = prices[qi];
        const isW = q.is_selected || q.selected;
        let cls   = '';
        if (p > 0 && validP.length > 1) {
          cls = p === minP ? 'best-price' : p === maxP ? 'worst-price' : '';
        }
        const lineAmt = p * (it.qty || 0);
        return `<td class="sup-val ${isW ? 'winner-col' : ''} ${cls}">
          ${p > 0
            ? `<div style="font-weight:700">${fmtNum(p)} <span style="font-size:10px;font-weight:400">${q.currency||''}</span></div>
               <div style="font-size:10px;color:var(--text3)">${fmtNum(lineAmt)} всего</div>`
            : '<span style="color:var(--text3)">—</span>'}
        </td>`;
      }).join('');

      return `<tr>
        <td class="item-label" style="font-size:12px">${it.name_en || it.name_ru || `Позиция ${itemIdx+1}`}</td>
        <td style="font-size:11px;color:var(--text3);text-align:right;white-space:nowrap">${it.qty||0} ${it.unit||''}</td>
        ${cells}
      </tr>`;
    }).join('');

    /* ── Condition rows ──────────────────────────────── */
    function condRow(label, fn, hlFn) {
      return `<tr>
        <td class="item-label">${label}</td><td></td>
        ${receivedQuotes.map(q => {
          const isW = q.is_selected || q.selected;
          const val = fn(q);
          const hl  = hlFn ? hlFn(q, receivedQuotes) : '';
          return `<td class="sup-val ${isW?'winner-col':''}" style="${hl}">${val}</td>`;
        }).join('')}
      </tr>`;
    }

    // Lead time — highlight min green
    const allLeads = receivedQuotes.map(q=>q.lead_time_days||0).filter(x=>x>0);
    const minLead  = allLeads.length ? Math.min(...allLeads) : 0;
    const maxLead  = allLeads.length ? Math.max(...allLeads) : 0;

    const leadRow = condRow('Срок производства / поставки (дней)',
      q => q.lead_time_days ? `<strong>${q.lead_time_days}</strong> дн.` : '—',
      (q) => {
        const l = q.lead_time_days || 0;
        if (!l || allLeads.length < 2) return '';
        return l === minLead ? 'color:#16a34a;font-weight:700' : l === maxLead ? 'color:var(--rust)' : '';
      }
    );

    const incoRow = condRow('Базис поставки (Incoterms)',
      q => q.inco
        ? `<span style="font-family:'JetBrains Mono',monospace;font-weight:700">${q.inco}</span>`
        : '—',
      null
    );

    const payRow = condRow('Условия оплаты',
      q => q.payment_terms || '—',
      null
    );

    const validityRow = condRow('Срок действия предложения',
      q => q.validity_days ? `${q.validity_days} дн.` : '—',
      null
    );

    /* ── Totals row ──────────────────────────────────── */
    const totalsRow = receivedQuotes.map(q => {
      const t   = _rfqsQuoteTotal(q);
      const isW = q.is_selected || q.selected;
      let cls = '';
      if (t > 0 && allTotals2.filter(x=>x>0).length > 1) {
        cls = t === minTotal2 ? 'best-price' : '';
      }
      const savings = (t > 0 && minTotal2 > 0 && t !== minTotal2)
        ? Math.round((t / minTotal2 - 1) * 100) : 0;
      return `<td class="sup-val ${isW?'winner-col':''} ${cls}"
        style="font-size:15px;font-weight:800;padding:12px">
        ${t > 0 ? `${fmtNum(t)} ${q.currency||''}` : '—'}
        ${savings > 0 ? `<div><span class="rfqs-savings-badge over">+${savings}%</span></div>` : ''}
        ${t > 0 && t === minTotal2 && allTotals2.filter(x=>x>0).length > 1
          ? `<div><span class="rfqs-savings-badge zero">мин. цена</span></div>` : ''}
      </td>`;
    }).join('');

    /* ── Score row ───────────────────────────────────── */
    const scoreRow = receivedQuotes.length > 1 ? `
      <tr style="border-top:2px solid var(--border)">
        <td class="item-label" style="font-size:11px">
          Итоговый балл
          <div style="font-size:9px;color:var(--text3);font-weight:400;margin-top:2px">цена 50% · срок 30% · оплата 20%</div>
        </td>
        <td></td>
        ${receivedQuotes.map((q,qi) => {
          const isW  = q.is_selected || q.selected;
          const sc   = scores[qi];
          const cls  = sc === maxScore ? 'score-best' : sc < 40 ? 'score-worst' : 'score-ok';
          return `<td class="rfqs-score-cell ${cls} ${isW?'winner-col':''}">
            ${sc}<span style="font-size:10px;font-weight:400">/100</span>
          </td>`;
        }).join('')}
      </tr>` : '';

    return `
    <div class="rfqs-comp-standalone">
      <div class="rfqs-comp-standalone-header">
        <div class="rfqs-comp-standalone-title">
          <span style="font-size:16px">⚖️</span>
          Сравнительная таблица предложений
        </div>
        <div class="rfqs-comp-standalone-meta">
          ${receivedQuotes.length} предложени${receivedQuotes.length===1?'е':receivedQuotes.length<5?'я':'й'} получено
          ${minTotal2 > 0 ? ` · мин. ${fmtNum(minTotal2)} ${receivedQuotes[0]?.currency||''}` : ''}
        </div>
      </div>
      <div style="overflow-x:auto">
        <table class="rfqs-comp-table" style="min-width:${400 + receivedQuotes.length * 170}px">
          <thead><tr>
            <th style="min-width:180px">Позиция</th>
            <th style="text-align:right;width:90px;white-space:nowrap">Кол-во</th>
            ${supHeaders}
          </tr></thead>
          <tbody>
            <tr class="section-header">
              <td colspan="${2 + receivedQuotes.length}">💰 Цены по позициям</td>
            </tr>
            ${itemRows}
            <tr class="section-header">
              <td colspan="${2 + receivedQuotes.length}">📋 Условия поставки</td>
            </tr>
            ${leadRow}${incoRow}${payRow}${validityRow}
            ${scoreRow}
          </tbody>
          <tfoot><tr>
            <td colspan="2" style="font-size:10px;text-transform:uppercase;letter-spacing:0.5px;
                color:var(--text3);font-family:'JetBrains Mono',monospace;padding:12px">
              ИТОГО
            </td>
            ${totalsRow}
          </tr></tfoot>
        </table>
      </div>
    </div>`;
  })() : '';

  /* ── Render everything into detail modal ────────────── */
  const pendingCount  = quotes.filter(q => q.status === 'pending').length;
  const receivedCount = receivedQuotes.length;

  document.getElementById('rfqs-detail-content').innerHTML = `
    <div class="pr-modal-title" style="border-color:#9333ea">
      <span style="color:#9333ea">🔀</span>
      ${r.num||'—'} &nbsp;·&nbsp; ${rfqsBadge(r.status||'draft')}
      ${pr ? `<span style="font-size:12px;font-weight:400;color:var(--text3);margin-left:8px">
        ← PR: <a href="#" onclick="rfqsCloseDetail();prOpenDetail('${pr.id}')" style="color:var(--co-accent)">${pr.num}</a>
      </span>` : ''}
    </div>

    <!-- Meta strip -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px 20px;margin-bottom:16px">
      <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">Дата создания</div>
           <div style="font-size:13px;font-weight:500">${prFmtDate(r.created_at)}</div></div>
      <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">Дедлайн ответа</div>
           <div style="font-size:13px;font-weight:500">${prFmtDate(r.deadline_response)||'—'}</div></div>
      <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">Поставщики</div>
           <div style="font-size:13px;font-weight:500">${quotes.length} запрошено · <span style="color:#16a34a">${receivedCount} ответ${receivedCount===1?'':receivedCount<5?'а':'ов'}</span></div></div>
      <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">Компания</div>
           <div style="font-size:13px;font-weight:500">${r.company_id||'—'}</div></div>
    </div>

    ${r.notes ? `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px;font-size:12px;color:var(--text2);margin-bottom:16px">${r.notes}</div>` : ''}

    <!-- Winner banner -->
    ${winnerBanner}

    <!-- Items requested -->
    <div class="block-title" style="margin-bottom:6px">Запрошенные позиции · ${items.length} шт.</div>
    ${itemsHTML}

    <!-- Quote cards -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin:20px 0 10px">
      <div class="block-title" style="margin:0">Предложения поставщиков
        <span style="font-size:10px;color:var(--text3);font-weight:400;margin-left:8px">${receivedCount} получено · ${pendingCount} ожидается</span>
      </div>
      <button class="rfqs-add-quote-btn" style="width:auto;padding:6px 14px;margin:0"
              onclick="rfqsOpenQFormNew('${id}')">+ Добавить предложение</button>
    </div>

    ${quotes.length === 0
      ? `<button class="rfqs-add-quote-btn" onclick="rfqsOpenQFormNew('${id}')">
           <span style="font-size:18px;display:block;margin-bottom:6px;opacity:0.4">💬</span>
           Нажмите чтобы добавить первое предложение поставщика
         </button>`
      : quoteCardsHTML
    }

    <!-- Comparison table -->
    ${compTableHTML}

    <!-- Actions -->
    <div style="display:flex;gap:10px;margin-top:24px;flex-wrap:wrap;border-top:1px solid var(--border);padding-top:16px">
      <button class="gen-btn" onclick="rfqsCloseDetail();rfqsOpenEdit('${id}')"
              style="margin:0;padding:8px 18px;font-size:12px">✏ Редактировать RFQ</button>
      ${r.status === 'draft'
        ? `<button class="gen-btn secondary" onclick="rfqsQuickStatus('${id}','sent');rfqsCloseDetail()"
                   style="margin:0;padding:8px 18px;font-size:12px;color:#9333ea">📤 Отправить</button>` : ''}
      ${r.status === 'sent' || (r.status === 'received' && receivedCount > 0)
        ? `<button class="gen-btn secondary" onclick="rfqsQuickStatus('${id}','analysed');rfqsCloseDetail()"
                   style="margin:0;padding:8px 18px;font-size:12px;color:#ea580c">🔍 На анализ</button>` : ''}
      ${r.status === 'analysed'
        ? `<button class="gen-btn" onclick="rfqsQuickStatus('${id}','closed');rfqsCloseDetail()"
                   style="margin:0;padding:8px 18px;font-size:12px;background:var(--green)">✅ Закрыть RFQ</button>` : ''}
      <button class="gen-btn secondary" onclick="rfqsCloseDetail()"
              style="margin:0;padding:8px 18px;font-size:12px;margin-left:auto">Закрыть</button>
    </div>
  `;

  document.getElementById('rfqs-detail-bg').classList.add('open');
}

/* ── QUOTE TOTAL HELPER ─────────────────────────────────── */
function _rfqsQuoteTotal(q) {
  if (!q) return 0;
  if (q.items && q.items.length) {
    return q.items.reduce((sum, it) => {
      return sum + (parseFloat(it.unit_price)||0) * (parseFloat(it.qty)||0);
    }, 0);
  }
  return parseFloat(q.total_amount) || 0;
}



function rfqsCloseDetail() {
  document.getElementById('rfqs-detail-bg').classList.remove('open');
}

function rfqsQuickStatus(id, status) {
  DB_rfq_requests.update(id, { status });
  rfqsLoad();
  const labels = { sent:'отправлен', received:'получены ответы', analysed:'на анализе', closed:'закрыт' };
  showToast(`✅ RFQ ${labels[status]||status}`);
}

function rfqsMarkQuoteReceived(quoteId, rfqId) {
  DB_rfq_quotes.update(quoteId, { status: 'received' });
  // If all quotes received → auto-update RFQ status
  const all = DB_rfq_quotes.where(q => q.rfq_id === rfqId);
  const allReceived = all.length > 0 && all.every(q => q.status === 'received' || q.status === 'declined');
  if (allReceived) {
    DB_rfq_requests.update(rfqId, { status: 'received' });
    showToast('✅ Все ответы получены — статус RFQ обновлён');
  } else {
    showToast('✅ Ответ поставщика отмечен');
  }
  rfqsOpenDetail(rfqId); // re-render detail
  rfqsLoad();
}

function rfqsSelectQuote(quoteId, rfqId) {
  // Update is_selected (task schema) + selected (internal alias) for all quotes of this RFQ
  DB_rfq_quotes.where(q => q.rfq_id === rfqId).forEach(q => {
    const isThis = q.id === quoteId;
    DB_rfq_quotes.update(q.id, {
      is_selected: isThis,   // canonical field per Etap 5 task
      selected:    isThis,   // alias used in rendering
      selected_at: isThis ? vedNow() : null,
      selected_by: isThis && currentUser ? currentUser.login : null,
    });
  });
  // Auto-advance RFQ status to 'analysed' if still at received
  const rfq = DB_rfq_requests.find(rfqId);
  if (rfq && rfq.status === 'received') {
    DB_rfq_requests.update(rfqId, { status: 'analysed' });
  }
  const sup = supplierById(DB_rfq_quotes.find(quoteId)?.supplier_id);
  showToast(`🏆 Выбран поставщик: ${sup?.name || '—'}`);
  rfqsOpenDetail(rfqId);
  rfqsLoad();
  if (typeof prLoad === 'function') prLoad();
}



/* ── QUOTE FORM (add/edit) ──────────────────────────────── */

let _rfqsQFormItems = [];   // [{name_en, unit, qty, unit_price, currency, lead_time_days, min_qty}]
let _rfqsQFormRfqId = '';
let _rfqsQFormQuoteId = '';

function rfqsOpenQFormNew(rfqId) {
  // New quote for an rfq — pick a supplier not yet in the list
  const r = DB_rfq_requests.find(rfqId);
  if (!r) return;
  _rfqsQFormRfqId   = rfqId;
  _rfqsQFormQuoteId = '';

  // Pre-fill items from rfq items
  _rfqsQFormItems = (r.items||[]).map(it => ({
    name_en:       it.name_en || '',
    unit:          it.unit    || 'Pcs',
    qty:           it.qty     || 0,
    unit_price:    0,
    currency:      'USD',
    lead_time_days: 0,
    min_qty:       0,
  }));

  // Populate supplier dropdown (exclude already-added)
  _rfqsQFormPopulateSupplier(rfqId, null);

  document.getElementById('rfqs-qf-quote-id').value = '';
  document.getElementById('rfqs-qf-rfq-id').value   = rfqId;
  document.getElementById('rfqs-qf-status').value   = 'received';
  document.getElementById('rfqs-qf-inco').value     = 'EXW';
  document.getElementById('rfqs-qf-currency').value = 'USD';
  document.getElementById('rfqs-qf-lead').value     = '';
  document.getElementById('rfqs-qf-validity').value = '30';
  document.getElementById('rfqs-qf-payment').value  = '';
  document.getElementById('rfqs-qf-comment').value  = '';
  document.getElementById('rfqs-qform-title').textContent = 'Добавить предложение поставщика';

  _rfqsQFormRenderItems();
  document.getElementById('rfqs-qform-bg').classList.add('open');
}

function rfqsOpenQForm(rfqId, quoteId) {
  const q = DB_rfq_quotes.find(quoteId);
  if (!q) { rfqsOpenQFormNew(rfqId); return; }

  _rfqsQFormRfqId   = rfqId;
  _rfqsQFormQuoteId = quoteId;

  // Load items from quote (or rfq if empty)
  const r = DB_rfq_requests.find(rfqId);
  if (q.items && q.items.length) {
    _rfqsQFormItems = JSON.parse(JSON.stringify(q.items));
  } else {
    _rfqsQFormItems = (r?.items||[]).map(it => ({
      name_en: it.name_en||'', unit: it.unit||'Pcs',
      qty: it.qty||0, unit_price:0, currency:'USD',
      lead_time_days:0, min_qty:0,
    }));
  }

  // Fill header fields
  _rfqsQFormPopulateSupplier(rfqId, q.supplier_id);
  const sel = document.getElementById('rfqs-qf-supplier');
  if (sel) sel.value = String(q.supplier_id||'');

  document.getElementById('rfqs-qf-quote-id').value = quoteId;
  document.getElementById('rfqs-qf-rfq-id').value   = rfqId;
  document.getElementById('rfqs-qf-status').value   = q.status   || 'received';
  document.getElementById('rfqs-qf-inco').value     = q.inco     || 'EXW';
  document.getElementById('rfqs-qf-currency').value = q.currency || 'USD';
  document.getElementById('rfqs-qf-lead').value     = q.lead_time_days || '';
  document.getElementById('rfqs-qf-validity').value = q.validity_days  || 30;
  document.getElementById('rfqs-qf-payment').value  = q.payment_terms  || '';
  document.getElementById('rfqs-qf-comment').value  = q.comment        || '';
  document.getElementById('rfqs-qform-title').textContent = `Предложение: ${supplierById(q.supplier_id)?.name||q.supplier_id}`;

  _rfqsQFormRenderItems();
  document.getElementById('rfqs-qform-bg').classList.add('open');
}

function rfqsCloseQForm() {
  document.getElementById('rfqs-qform-bg').classList.remove('open');
  _rfqsQFormItems   = [];
  _rfqsQFormRfqId   = '';
  _rfqsQFormQuoteId = '';
}

function _rfqsQFormPopulateSupplier(rfqId, currentSupId) {
  const sel = document.getElementById('rfqs-qf-supplier');
  if (!sel) return;
  try {
    const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
    sel.innerHTML = '<option value="">— выберите поставщика —</option>' +
      sups.map(s => `<option value="${s.id}" ${String(s.id)===String(currentSupId)?'selected':''}>${s.name}${s.country?' ('+s.country+')':''}</option>`).join('');
  } catch(e) {}
}

function _rfqsQFormRenderItems() {
  const tbody = document.getElementById('rfqs-qf-items-body');
  if (!tbody) return;

  // Sync currency from header
  const cur = document.getElementById('rfqs-qf-currency')?.value || 'USD';

  tbody.innerHTML = _rfqsQFormItems.map((it, i) => `
    <tr>
      <td style="color:var(--text3);font-size:11px;text-align:center">${i+1}</td>
      <td style="font-weight:500;font-size:12px">${it.name_en||`Позиция ${i+1}`}</td>
      <td style="font-size:11px;color:var(--text3)">${it.unit||'Pcs'}</td>
      <td style="text-align:right;font-family:'JetBrains Mono',monospace">${it.qty||0}</td>
      <td>
        <input type="number" min="0" step="0.01"
               value="${it.unit_price||''}"
               placeholder="0.00"
               oninput="_rfqsQFormItems[${i}].unit_price=parseFloat(this.value)||0;_rfqsQFormRecalcTotal()"
               style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 7px;font-size:12px;text-align:right;background:var(--surface);color:var(--text)">
      </td>
      <td id="rfqs-qf-line-${i}" style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:var(--co-accent);padding:0 10px">
        ${(it.unit_price||0) > 0 ? fmtNum((it.unit_price||0)*(it.qty||0)) : '—'}
      </td>
      <td>
        <input type="number" min="0"
               value="${it.lead_time_days||''}"
               placeholder="90"
               oninput="_rfqsQFormItems[${i}].lead_time_days=parseInt(this.value)||0"
               style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 6px;font-size:11px;text-align:right;background:var(--surface);color:var(--text)">
      </td>
      <td>
        <input type="number" min="0"
               value="${it.min_qty||''}"
               placeholder="1"
               oninput="_rfqsQFormItems[${i}].min_qty=parseInt(this.value)||0"
               style="width:100%;border:1px solid var(--border);border-radius:4px;padding:4px 6px;font-size:11px;text-align:right;background:var(--surface);color:var(--text)">
      </td>
    </tr>`).join('');

  _rfqsQFormRecalcTotal();
}

function _rfqsQFormRecalcTotal() {
  let total = 0;
  _rfqsQFormItems.forEach((it, i) => {
    const line = (it.unit_price||0) * (it.qty||0);
    total += line;
    const el = document.getElementById(`rfqs-qf-line-${i}`);
    if (el) el.textContent = line > 0 ? fmtNum(line) : '—';
  });
  const el = document.getElementById('rfqs-qf-total-display');
  const cur = document.getElementById('rfqs-qf-currency')?.value || '';
  if (el) el.textContent = `${fmtNum(total)} ${cur}`;
}

/* Auto-sync currency change → recalc */
document.addEventListener('DOMContentLoaded', () => {
  const curSel = document.getElementById('rfqs-qf-currency');
  if (curSel) curSel.addEventListener('change', () => {
    _rfqsQFormItems.forEach(it => { it.currency = curSel.value; });
    _rfqsQFormRecalcTotal();
  });
});

/* ── SAVE QUOTE ─────────────────────────────────────────── */

function rfqsQFormSave() {
  const supId    = document.getElementById('rfqs-qf-supplier')?.value;
  const status   = document.getElementById('rfqs-qf-status')?.value || 'received';
  const inco     = document.getElementById('rfqs-qf-inco')?.value || 'EXW';
  const currency = document.getElementById('rfqs-qf-currency')?.value || 'USD';
  const leadDays = parseInt(document.getElementById('rfqs-qf-lead')?.value) || 0;
  const validity = parseInt(document.getElementById('rfqs-qf-validity')?.value) || 0;
  const payment  = document.getElementById('rfqs-qf-payment')?.value?.trim() || '';
  const comment  = document.getElementById('rfqs-qf-comment')?.value?.trim() || '';
  const rfqId    = _rfqsQFormRfqId;
  const quoteId  = _rfqsQFormQuoteId;

  if (!supId) { alert('Выберите поставщика'); return; }
  if (!rfqId) { alert('Нет ссылки на RFQ'); return; }

  // Attach currency to each item
  const items = _rfqsQFormItems.map(it => ({ ...it, currency }));
  const total = items.reduce((s,it) => s + (it.unit_price||0)*(it.qty||0), 0);

  const data = {
    rfq_id:       rfqId,
    supplier_id:  supId,
    status,
    inco,
    currency,
    lead_time_days: leadDays,
    validity_days:  validity,
    payment_terms:  payment,
    comment,
    items,
    total_amount: total,
    is_selected:  (DB_rfq_quotes.find(quoteId)?.is_selected) || false,
  };

  if (quoteId) {
    DB_rfq_quotes.update(quoteId, data);
    showToast('✅ Предложение обновлено');
  } else {
    DB_rfq_quotes.insert(data);
    showToast('✅ Предложение добавлено');
  }

  // Auto-update supplier_ids on rfq if new supplier
  const rfq = DB_rfq_requests.find(rfqId);
  if (rfq && !rfq.supplier_ids?.includes(String(supId))) {
    const ids = [...(rfq.supplier_ids||[]), String(supId)];
    DB_rfq_requests.update(rfqId, { supplier_ids: ids });
  }

  // Auto-status: if all received → set rfq status to 'received'
  const allQ = DB_rfq_quotes.where(q => q.rfq_id === rfqId);
  if (allQ.length > 0 && allQ.every(q => q.status === 'received' || q.status === 'declined')) {
    DB_rfq_requests.update(rfqId, { status: 'received' });
  }

  rfqsCloseQForm();
  rfqsLoad();
  rfqsOpenDetail(rfqId); // re-render detail modal
}

/* ── DELETE QUOTE ───────────────────────────────────────── */
function rfqsDeleteQuote(quoteId, rfqId) {
  if (!confirm('Удалить предложение поставщика?')) return;
  DB_rfq_quotes.delete(quoteId);
  rfqsOpenDetail(rfqId);
  rfqsLoad();
  showToast('🗑 Предложение удалено');
}



/* ╔══════════════════════════════════════════════════════════════════
   ║  CATALOG MODULE  —  section-catalog  (Этап 7)
   ╚══════════════════════════════════════════════════════════════════ */

/* ── State ──────────────────────────────────────────────────────── */
let _catFilter   = 'all';
let _catView     = 'grid';    // 'grid' | 'table'
let _catSortFld  = 'name';
let _catSortAsc  = true;
let _catPickerCb = null;      // callback(product) when picker used from Spec/Invoice

/* ── Seed demo data ─────────────────────────────────────────────── */
function catSeed() {
  if (localStorage.getItem('_cat_seeded_v1')) return;
  localStorage.setItem('_cat_seeded_v1', '1');
  if (DB_products.count() > 0) return;
  const sup1 = (() => {
    try { const s = JSON.parse(localStorage.getItem('ved_suppliers')||'[]'); return s[0]?.id||null; } catch(e){ return null; }
  })();
  [
    { sku:'TCL-3C050-300',  name:'3C X 0.50SQ.MM ARMOURED CABLE',
      name_ru:'3-жильный бронированный кабель 0.50мм²',
      description:'3 core × 0.50 sq.mm armoured copper conductor cable, PVC insulated. IEC 60502-1.',
      hs_code:'8544.49.9100', country_of_origin:'India',
      unit:'Mtrs', weight:0.095, volume:0.0001, weight_gross:0.105,
      default_supplier_id: sup1, price:135.63, currency:'INR', notes:'' },
    { sku:'TCL-7C050-300',  name:'7C X 0.50SQ.MM ARMOURED CABLE',
      name_ru:'7-жильный бронированный кабель 0.50мм²',
      description:'7 core × 0.50 sq.mm armoured cable. IEC 60502-1 compliant.',
      hs_code:'8544.49.9100', country_of_origin:'India',
      unit:'Mtrs', weight:0.18, volume:0.00018, weight_gross:0.2,
      default_supplier_id: sup1, price:206.35, currency:'INR', notes:'' },
    { sku:'TCL-4C050-300',  name:'4C X 0.50SQ.MM ARMOURED CABLE',
      name_ru:'4-жильный бронированный кабель 0.50мм²',
      description:'4 core × 0.50 sq.mm armoured cable. Steel wire armour.',
      hs_code:'8544.49.9100', country_of_origin:'India',
      unit:'Mtrs', weight:0.12, volume:0.00012, weight_gross:0.13,
      default_supplier_id: sup1, price:155.06, currency:'INR', notes:'' },
    { sku:'TCL-2C150-150',  name:'2C X 1.50SQ.MM UNARMOURED CABLE',
      name_ru:'2-жильный неброн. кабель 1.50мм²',
      description:'2 core × 1.50 sq.mm unarmoured flexible cable. IEC 60227.',
      hs_code:'8544.42.9000', country_of_origin:'India',
      unit:'Mtrs', weight:0.065, volume:0.00008, weight_gross:0.075,
      default_supplier_id: sup1, price:88.00, currency:'INR', notes:'' },
    { sku:'TCL-CTRL-24P',   name:'24 PAIR CONTROL CABLE 0.5SQ',
      name_ru:'24-парный контрольный кабель 0.5мм²',
      description:'24 pair × 0.50 sq.mm screened control cable. Collective screen Al-foil + drain.',
      hs_code:'8544.49.9100', country_of_origin:'India',
      unit:'Mtrs', weight:0.52, volume:0.00052, weight_gross:0.58,
      default_supplier_id: sup1, price:410.00, currency:'INR', notes:'Экранированный кабель' },
  ].forEach(p => DB_products.insert(p));
}

/* ── KPIs ───────────────────────────────────────────────────────── */
function catUpdateKPIs() {
  const all = DB_products.all();
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('cat-kpi-total',     all.length);
  set('cat-kpi-suppliers', new Set(all.map(p=>p.default_supplier_id).filter(Boolean)).size);
  set('cat-kpi-countries', new Set(all.map(p=>p.country_of_origin).filter(Boolean)).size);
  set('cat-kpi-hs-codes',  new Set(all.map(p=>p.hs_code).filter(Boolean)).size);
  set('cat-kpi-no-supplier', all.filter(p=>!p.default_supplier_id).length);
}

/* ── Load / Filter / Render ─────────────────────────────────────── */
function catLoad() {
  catSeed();
  catUpdateKPIs();

  const q = (document.getElementById('cat-search')?.value||'').toLowerCase().trim();

  let rows = DB_products.all();

  if (_catFilter === 'has_supplier') rows = rows.filter(p => p.default_supplier_id);
  if (_catFilter === 'no_supplier')  rows = rows.filter(p => !p.default_supplier_id);
  if (_catFilter === 'has_hs')       rows = rows.filter(p => p.hs_code);

  if (q) rows = rows.filter(p =>
    [p.sku,p.name,p.name_ru,p.description,p.hs_code,p.country_of_origin,p.notes]
      .join(' ').toLowerCase().includes(q)
  );

  rows = rows.slice().sort((a,b) => {
    const va = (a[_catSortFld]||'').toString().toLowerCase();
    const vb = (b[_catSortFld]||'').toString().toLowerCase();
    return _catSortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
  });

  const wrap = document.getElementById('cat-list-wrap');
  if (!wrap) return;

  if (rows.length === 0) {
    wrap.innerHTML = `<div class="cat-empty">
      <div style="font-size:36px;opacity:.3;margin-bottom:12px">📦</div>
      <div style="font-weight:600;margin-bottom:4px">${
        DB_products.count()===0 ? 'Каталог пуст' : 'Ничего не найдено'
      }</div>
      <div style="font-size:12px">${
        DB_products.count()===0
          ? 'Нажмите «+ Новый товар» чтобы добавить первую позицию'
          : 'Измените поисковый запрос или фильтр'
      }</div>
    </div>`;
    return;
  }

  if (_catView === 'grid') {
    wrap.innerHTML = `<div class="cat-grid">${rows.map(catCardHTML).join('')}</div>`;
  } else {
    wrap.innerHTML = catTableHTML(rows);
  }
}

function catSetFilter(f, el) {
  _catFilter = f;
  document.querySelectorAll('[data-cat-filter]').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');
  catLoad();
}

function catSetView(v, el) {
  _catView = v;
  document.querySelectorAll('.cat-view-btn').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');
  catLoad();
}

function catSort(field) {
  if (_catSortFld === field) _catSortAsc = !_catSortAsc;
  else { _catSortFld = field; _catSortAsc = true; }
  catLoad();
}

/* ── Card HTML ──────────────────────────────────────────────────── */
function catCardHTML(p) {
  const sup = p.default_supplier_id ? supplierById(p.default_supplier_id) : null;
  const tags = [
    p.hs_code            ? `<span class="cat-tag hs">ТН ВЭД ${p.hs_code}</span>` : '',
    p.country_of_origin  ? `<span class="cat-tag coo">🌍 ${p.country_of_origin}</span>` : '',
    p.weight             ? `<span class="cat-tag wt">⚖ ${p.weight} кг/${p.unit||'ед.'}</span>` : '',
  ].filter(Boolean).join('');

  return `<div class="cat-card" onclick="catOpenDetail('${p.id}')">
    <div class="cat-card-header">
      <div class="cat-card-icon">📦</div>
      <div style="min-width:0">
        <div class="cat-card-sku">${p.sku||'—'}</div>
        <div class="cat-card-name">${p.name||'—'}</div>
        ${p.name_ru ? `<div style="font-size:11px;color:var(--text3);margin-top:2px">${p.name_ru}</div>` : ''}
      </div>
    </div>
    <div class="cat-card-body">
      ${p.description ? `<div class="cat-card-desc">${p.description}</div>` : ''}
      <div class="cat-card-tags">${tags}</div>
    </div>
    <div class="cat-card-footer">
      <div class="cat-card-supplier">
        ${sup
          ? `<span style="font-size:14px">🏭</span> ${sup.name}`
          : '<span style="color:var(--text3);font-size:11px">— без поставщика —</span>'}
      </div>
      ${p.price ? `<span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--co-accent)">${fmtNum(p.price)} ${p.currency||''}</span>` : ''}
    </div>
  </div>`;
}

/* ── Table HTML ─────────────────────────────────────────────────── */
function catTableHTML(rows) {
  const sortIcon = (f) => _catSortFld===f ? (_catSortAsc?'↑':'↓') : '';
  const th = (f, label, extra='') =>
    `<th class="${_catSortFld===f?'sorted':''}" onclick="catSort('${f}')" ${extra}>${label} ${sortIcon(f)}</th>`;

  const bodyRows = rows.map(p => {
    const sup = p.default_supplier_id ? supplierById(p.default_supplier_id) : null;
    return `<tr onclick="catOpenDetail('${p.id}')">
      <td class="sku-col">${p.sku||'—'}</td>
      <td style="font-weight:600">${p.name||'—'}</td>
      <td class="hs-col">${p.hs_code||'—'}</td>
      <td style="font-size:11px;color:var(--text3)">${p.country_of_origin||'—'}</td>
      <td style="font-size:11px;color:var(--text3)">${p.unit||'—'}</td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right">${p.weight||''}</td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right">${p.volume||''}</td>
      <td style="font-size:11px">${sup ? sup.name : '<span style="color:var(--text3)">—</span>'}</td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;font-weight:700;color:var(--co-accent)">${p.price ? fmtNum(p.price)+' '+(p.currency||'') : ''}</td>
    </tr>`;
  }).join('');

  return `<div class="cat-table-wrap">
    <table class="cat-table">
      <thead><tr>
        ${th('sku',   'SKU')}
        ${th('name',  'Наименование', 'style="min-width:200px"')}
        ${th('hs_code','ТН ВЭД')}
        ${th('country_of_origin','Страна')}
        <th>Ед.</th>
        ${th('weight','Масса, кг')}
        ${th('volume','Объём, м³')}
        <th>Поставщик</th>
        <th>Цена</th>
      </tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>
  </div>`;
}

/* ── DETAIL MODAL ───────────────────────────────────────────────── */
function catOpenDetail(id) {
  const p = DB_products.find(id);
  if (!p) return;
  const sup = p.default_supplier_id ? supplierById(p.default_supplier_id) : null;

  // Find PRs that reference this product (by name/sku)
  const relPRs = DB_purchase_requests.where(pr =>
    (pr.items||[]).some(it =>
      (it.name_en||'').toLowerCase().includes((p.name||'').toLowerCase().slice(0,10)) ||
      (it.name_en||'').toUpperCase() === (p.sku||'')
    )
  ).slice(0,5);

  const metaItems = [
    { label:'SKU',                value: p.sku||'—',                  cls:'mono accent' },
    { label:'ТН ВЭД (hs_code)',   value: p.hs_code||'—',              cls:'mono' },
    { label:'Страна происхождения',value: p.country_of_origin||'—',   cls:'green' },
    { label:'Единица измерения',  value: p.unit||'—',                  cls:'' },
    { label:'Масса нетто, кг',    value: p.weight ? p.weight+' кг' : '—', cls:'mono' },
    { label:'Масса брутто, кг',   value: p.weight_gross ? p.weight_gross+' кг' : '—', cls:'mono' },
    { label:'Объём, м³',          value: p.volume ? p.volume+' м³' : '—',  cls:'mono' },
    { label:'Цена (типовая)',      value: p.price ? fmtNum(p.price)+' '+(p.currency||'') : '—', cls:'mono accent' },
  ].map(m => `<div class="cat-meta-item">
    <div class="cat-meta-label">${m.label}</div>
    <div class="cat-meta-value ${m.cls}">${m.value}</div>
  </div>`).join('');

  const relPRsHTML = relPRs.length ? `
    <div class="block-title" style="margin:20px 0 8px">Связанные заявки PR</div>
    ${relPRs.map(pr => `<div class="cat-usage-row">
      <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:var(--co-accent);min-width:110px">${pr.num||'—'}</span>
      <span style="font-size:11px;color:var(--text3)">${pr.items?.length||0} позиций</span>
      <span class="rfqs-badge ${pr.status||'draft'}" style="margin-left:auto">${pr.status||'—'}</span>
    </div>`).join('')}` : '';

  document.getElementById('cat-detail-content').innerHTML = `
    <div class="cat-detail-sku">${p.sku||'—'}</div>
    <div class="cat-detail-name">${p.name||'—'}</div>
    ${p.name_ru ? `<div style="font-size:13px;color:var(--text3);margin-top:-10px;margin-bottom:16px">${p.name_ru}</div>` : ''}

    <div class="cat-meta-grid">${metaItems}</div>

    ${p.description ? `
      <div class="block-title" style="margin-bottom:8px">Описание / Технические характеристики</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);
                  padding:14px 16px;font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:16px">
        ${p.description}
      </div>` : ''}

    <div class="block-title" style="margin-bottom:8px">Поставщик по умолчанию (default_supplier_id)</div>
    <div style="border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:16px;
                display:flex;align-items:center;gap:12px">
      ${sup ? `
        <span style="font-size:22px">🏭</span>
        <div>
          <div style="font-weight:700;font-size:14px">${sup.name}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">
            ${[sup.country, sup.city].filter(Boolean).join(', ')}
            ${sup.default_currency ? ' · '+sup.default_currency : ''}
            ${sup.lead_time_days   ? ' · '+sup.lead_time_days+' дн.' : ''}
          </div>
          ${sup.payment_terms ? `<div style="font-size:11px;color:var(--text3);margin-top:2px;font-family:'JetBrains Mono',monospace">${sup.payment_terms}</div>` : ''}
        </div>
        <button onclick="catCloseDetail();showSection('suppliers')"
          style="margin-left:auto;padding:5px 12px;font-size:11px;background:var(--surface2);
                 border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;color:var(--text2)">
          ↗ В базу
        </button>` :
        '<span style="color:var(--text3);font-size:12px">Поставщик не назначен</span>'}
    </div>

    ${p.notes ? `
      <div style="background:rgba(196,148,58,0.07);border:1px solid rgba(196,148,58,0.2);
                  border-radius:var(--radius);padding:12px 14px;font-size:12px;
                  color:var(--text2);font-style:italic;margin-bottom:16px">${p.notes}</div>` : ''}

    ${relPRsHTML}

    <div style="display:flex;gap:10px;margin-top:24px;flex-wrap:wrap;
                border-top:1px solid var(--border);padding-top:16px">
      <button class="gen-btn" onclick="catCloseDetail();catOpenForm('${p.id}')"
              style="margin:0;padding:8px 18px;font-size:12px">✏ Редактировать</button>
      <button class="gen-btn secondary" onclick="catUseInSpec('${p.id}')"
              style="margin:0;padding:8px 18px;font-size:12px;color:var(--teal)">
        📄 В спецификацию
      </button>
      <button class="gen-btn secondary" onclick="catUseInInvoice('${p.id}')"
              style="margin:0;padding:8px 18px;font-size:12px;color:var(--teal)">
        🧾 В инвойс
      </button>
      <button class="gen-btn secondary"
              onclick="if(confirm('Удалить ${(p.name||'').replace(/'/g,'')}?'))catDelete('${p.id}')"
              style="margin:0;padding:8px 18px;font-size:12px;color:var(--rust)">
        🗑 Удалить
      </button>
      <button class="gen-btn secondary" onclick="catCloseDetail()"
              style="margin:0;padding:8px 18px;font-size:12px;margin-left:auto">Закрыть</button>
    </div>
  `;
  document.getElementById('cat-detail-bg').classList.add('open');
}

function catCloseDetail() {
  document.getElementById('cat-detail-bg').classList.remove('open');
}

/* ── FORM MODAL ─────────────────────────────────────────────────── */
function catOpenForm(id) {
  const p = id ? DB_products.find(id) : null;
  document.getElementById('cat-f-id').value       = p?.id || '';
  document.getElementById('cat-form-title-text').textContent = p ? `Редактировать: ${p.sku||p.name}` : 'Новый товар';
  document.getElementById('cat-f-sku').value       = p?.sku            || '';
  document.getElementById('cat-f-name').value      = p?.name           || '';
  document.getElementById('cat-f-name-ru').value   = p?.name_ru        || '';
  document.getElementById('cat-f-desc').value      = p?.description    || '';
  document.getElementById('cat-f-hs').value        = p?.hs_code        || '';
  document.getElementById('cat-f-coo').value       = p?.country_of_origin || '';
  document.getElementById('cat-f-unit').value      = p?.unit           || 'Pcs';
  document.getElementById('cat-f-weight').value    = p?.weight         || '';
  document.getElementById('cat-f-volume').value    = p?.volume         || '';
  document.getElementById('cat-f-weight-gross').value = p?.weight_gross || '';
  document.getElementById('cat-f-price').value     = p?.price          || '';
  document.getElementById('cat-f-currency').value  = p?.currency       || 'USD';
  document.getElementById('cat-f-notes').value     = p?.notes          || '';

  // Populate supplier dropdown
  const sel = document.getElementById('cat-f-supplier');
  if (sel) {
    try {
      const sups = JSON.parse(localStorage.getItem('ved_suppliers')||'[]');
      sel.innerHTML = '<option value="">— без поставщика —</option>' +
        sups.filter(s => s.type==='supplier'||!s.type||s.type==='customs_broker')
          .map(s => `<option value="${s.id}" ${String(s.id)===String(p?.default_supplier_id)?'selected':''}>${s.name}</option>`)
          .join('');
    } catch(e) {}
  }

  document.getElementById('cat-form-bg').classList.add('open');
  document.getElementById('cat-f-name').focus();
}

function catCloseForm() {
  document.getElementById('cat-form-bg').classList.remove('open');
}

/* ════════════════════════════════════════════════════════════════════
   MASTER DATA — найти-или-создать (Фаза 1)
   Точка входа сценария — проформа-инвойс — наполняет мастер-данные:
   ТОВАРЫ (каталог) и КОНТРАГЕНТОВ (поставщиков), с историей цен.

   • Товар: личность = внутренний артикул P-NNNNN (генерит система, поле sku).
            Артикулы поставщиков — внешние ссылки (product.supplier_skus[])
            для сопоставления входящих проформ.
   • Поставщик: матч по названию компании.
   Один физический товар от разных поставщиков = ОДНА карточка каталога
   (с несколькими supplier_skus и общей price_history) — это и даёт сравнение цен.
════════════════════════════════════════════════════════════════════ */

// Внутренний артикул: сквозной счётчик P-00001, P-00002…
function catGenArticle() {
  let max = 0;
  DB_products.all().forEach(p => {
    const m = /^P-0*(\d+)$/.exec(String(p.sku || ''));
    if (m) { const n = parseInt(m[1], 10); if (n > max) max = n; }
  });
  return 'P-' + String(max + 1).padStart(5, '0');
}

// Нормализация названия для нечёткого сравнения (товары и контрагенты)
function mdNormName(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[.,"'`()\-]/g, ' ')
    .replace(/\b(ltd|limited|llc|inc|co|corp|company|gmbh|pvt|private|ооо|оао|зао|пао|ао)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Привязать артикул поставщика к карточке товара (без дублей)
function _mdLinkSupplierSku(product, supplierId, supSku) {
  if (!supSku || supplierId == null || supplierId === '') return;
  const list = product.supplier_skus || [];
  const exists = list.some(x =>
    String(x.supplier_id) === String(supplierId) &&
    String(x.sku).toLowerCase() === String(supSku).toLowerCase());
  if (!exists) {
    list.push({ supplier_id: String(supplierId), sku: String(supSku) });
    DB_products.update(product.id, { supplier_skus: list });
  }
}

/* Найти-или-создать ТОВАР.
   item: { sku (артикул поставщика), name, name_ru, description, hs_code,
           country, unit, weight, volume, weight_gross, price, currency }
   Каскад: артикул поставщика → название (нечётко) → создать новый.
   Возвращает { product, isNew, matchedBy }. */
function findOrCreateProduct(item, supplierId) {
  item = item || {};
  const supSku = String(item.sku || '').trim();
  const all = DB_products.all();

  // 1) по артикулу поставщика (в рамках этого поставщика)
  if (supSku) {
    const bySupSku = all.find(p =>
      (p.supplier_skus || []).some(x =>
        String(x.sku).trim().toLowerCase() === supSku.toLowerCase() &&
        (supplierId == null || supplierId === '' || String(x.supplier_id) === String(supplierId))));
    if (bySupSku) return { product: bySupSku, isNew: false, matchedBy: 'supplier_sku' };
  }

  // 2) по названию (нечётко, глобально — объединяет товар от разных поставщиков)
  const norm = mdNormName(item.name);
  if (norm) {
    const byName = all.find(p => mdNormName(p.name) === norm);
    if (byName) {
      _mdLinkSupplierSku(byName, supplierId, supSku);
      return { product: byName, isNew: false, matchedBy: 'name' };
    }
  }

  // 3) новый товар — система присваивает внутренний артикул
  const product = DB_products.insert({
    sku:               catGenArticle(),
    name:              item.name || '',
    name_ru:           item.name_ru || '',
    description:       item.description || '',
    hs_code:           item.hs_code || '',
    country_of_origin: item.country || item.country_of_origin || '',
    unit:              item.unit || 'Pcs',
    weight:            parseFloat(item.weight) || 0,
    volume:            parseFloat(item.volume) || 0,
    weight_gross:      parseFloat(item.weight_gross) || 0,
    default_supplier_id: (supplierId != null && supplierId !== '') ? String(supplierId) : null,
    price:             parseFloat(item.price) || 0,
    currency:          item.currency || 'USD',
    notes:             '',
    supplier_skus:     (supSku && supplierId != null && supplierId !== '')
                         ? [{ supplier_id: String(supplierId), sku: supSku }] : [],
    price_history:     [],
  });
  return { product, isNew: true, matchedBy: 'created' };
}

/* Добавить точку цены в историю товара.
   point: { supplierId, price, currency, date, source (напр. № проформы) } */
function productAddPricePoint(productId, point) {
  point = point || {};
  const p = DB_products.find(productId);
  if (!p) return null;
  const hist = p.price_history || [];
  const entry = {
    supplier_id: (point.supplierId != null) ? String(point.supplierId) : '',
    price:       parseFloat(point.price) || 0,
    currency:    point.currency || p.currency || 'USD',
    date:        point.date || new Date().toISOString().slice(0, 10),
    source:      point.source || '',
  };
  hist.push(entry);
  DB_products.update(productId, { price_history: hist, price: entry.price, currency: entry.currency });
  return entry;
}

/* Найти-или-создать ПОСТАВЩИКА (матч по названию компании).
   Использует существующее хранилище ved_suppliers (глобальный массив + spSave).
   Возвращает { supplier, isNew }. */
function findOrCreateSupplier(data) {
  data = data || {};
  if (typeof suppliers === 'undefined') return { supplier: null, isNew: false };
  if (typeof spLoad === 'function' && !suppliers.length) { try { spLoad(); } catch(e) {} }

  const norm = mdNormName(data.name);
  if (!norm) return { supplier: null, isNew: false };

  const existing = suppliers.find(s => mdNormName(s.name) === norm);
  if (existing) return { supplier: existing, isNew: false };

  const sup = {
    id:       Date.now(),
    name:     data.name || '',
    type:     data.type || 'supplier',
    country:  data.country || '',
    city:     data.city || '',
    addr:     data.addr || '',
    contact:  data.contact || '',
    pos:      data.pos || '',
    email:    data.email || '',
    phone:    data.phone || '',
    web:      data.web || '',
    inn:      data.inn || '',
    bank:     data.bank || '', swift: data.swift || '', acc: data.acc || '', ifsc: data.ifsc || '',
    currency: data.currency || 'USD',
    rating:   data.rating || 3,
    leadtime: data.leadtime || '', lead_time_days: data.lead_time_days || 0,
    default_currency: data.default_currency || data.currency || '',
    payment_terms:    data.payment_terms || '',
    notes:    data.notes || '',
    history:  [],
    created:  new Date().toISOString().slice(0, 10),
  };
  suppliers.push(sup);
  if (typeof spSave === 'function') spSave();
  return { supplier: sup, isNew: true };
}

/* Чистые матчеры (без создания) — для экрана-ревизии импорта проформы.
   Возвращают совпадение или null, ничего не записывая. */
function mdMatchSupplier(name) {
  if (typeof suppliers === 'undefined') return null;
  if (typeof spLoad === 'function' && !suppliers.length) { try { spLoad(); } catch(e) {} }
  const norm = mdNormName(name);
  if (!norm) return null;
  return suppliers.find(s => mdNormName(s.name) === norm) || null;
}
function mdMatchProduct(item, supplierId) {
  item = item || {};
  const supSku = String(item.sku || '').trim();
  const all = DB_products.all();
  if (supSku) {
    const bySupSku = all.find(p =>
      (p.supplier_skus || []).some(x =>
        String(x.sku).trim().toLowerCase() === supSku.toLowerCase() &&
        (supplierId == null || supplierId === '' || String(x.supplier_id) === String(supplierId))));
    if (bySupSku) return { product: bySupSku, matchedBy: 'supplier_sku' };
  }
  const norm = mdNormName(item.name);
  if (norm) {
    const byName = all.find(p => mdNormName(p.name) === norm);
    if (byName) return { product: byName, matchedBy: 'name' };
  }
  return null;
}

function catSave() {
  const name = document.getElementById('cat-f-name').value.trim();
  let   sku  = document.getElementById('cat-f-sku').value.trim();
  if (!name) { alert('Укажите название товара'); return; }
  if (!sku)  sku = catGenArticle();   // система присваивает внутренний артикул, если не задан

  const id = document.getElementById('cat-f-id').value;
  const data = {
    sku,
    name,
    name_ru:           document.getElementById('cat-f-name-ru').value.trim(),
    description:       document.getElementById('cat-f-desc').value.trim(),
    hs_code:           document.getElementById('cat-f-hs').value.trim(),
    country_of_origin: document.getElementById('cat-f-coo').value.trim(),
    unit:              document.getElementById('cat-f-unit').value,
    weight:            parseFloat(document.getElementById('cat-f-weight').value) || 0,
    volume:            parseFloat(document.getElementById('cat-f-volume').value) || 0,
    weight_gross:      parseFloat(document.getElementById('cat-f-weight-gross').value) || 0,
    default_supplier_id: document.getElementById('cat-f-supplier').value || null,
    price:             parseFloat(document.getElementById('cat-f-price').value) || 0,
    currency:          document.getElementById('cat-f-currency').value,
    notes:             document.getElementById('cat-f-notes').value.trim(),
  };

  if (id) { DB_products.update(id, data); showToast('✅ Товар обновлён'); }
  else    { DB_products.insert(data);     showToast('✅ Товар добавлен'); }

  catCloseForm();
  catLoad();
}

function catDelete(id) {
  DB_products.delete(id);
  catCloseDetail();
  catLoad();
  showToast('🗑 Товар удалён');
}

/* ── INTEGRATION: add to Spec / Invoice ────────────────────────── */
function catUseInSpec(id) {
  const p = DB_products.find(id);
  if (!p) return;
  catCloseDetail();
  showSection('spec');
  specRows.push({
    desc:   p.name || '',
    descRu: p.name_ru || '',
    unit:   p.unit || 'Pcs',
    qty:    0,
    price:  p.price || 0,
    hs_code: p.hs_code || '',
    sku:    p.sku || '',
  });
  if (typeof renderSpecTable === 'function') renderSpecTable();
  showToast(`📄 ${p.sku} добавлен в спецификацию`);
}

function catUseInInvoice(id) {
  const p = DB_products.find(id);
  if (!p) return;
  catCloseDetail();
  showSection('invoice');
  invRows.push({
    desc:  p.name || '',
    unit:  p.unit || 'Pcs',
    qty:   0,
    price: p.price || 0,
    sku:   p.sku || '',
  });
  if (typeof renderInvTable === 'function') renderInvTable();
  showToast(`🧾 ${p.sku} добавлен в инвойс`);
}

/* ── PICKER (called from Spec / Invoice "Из каталога" button) ─── */
function catOpenPicker(callback, hintText) {
  _catPickerCb = callback;
  const hint = document.getElementById('cat-picker-hint');
  if (hint) hint.textContent = hintText || 'Кликните по товару чтобы добавить в документ';
  document.getElementById('cat-picker-search').value = '';
  catPickerRender();
  document.getElementById('cat-picker-bg').classList.add('open');
}

function catClosePicker() {
  document.getElementById('cat-picker-bg').classList.remove('open');
  _catPickerCb = null;
}

function catPickerRender() {
  const q = (document.getElementById('cat-picker-search')?.value||'').toLowerCase().trim();
  let rows = DB_products.all();
  if (q) rows = rows.filter(p =>
    [p.sku,p.name,p.name_ru,p.hs_code].join(' ').toLowerCase().includes(q)
  );
  rows = rows.sort((a,b) => (a.name||'').localeCompare(b.name||''));

  const list = document.getElementById('cat-picker-list');
  if (!list) return;

  if (rows.length === 0) {
    list.innerHTML = `<div class="cat-empty" style="padding:24px">Ничего не найдено</div>`;
    return;
  }

  list.innerHTML = rows.map(p => {
    const sup = p.default_supplier_id ? supplierById(p.default_supplier_id) : null;
    return `<div class="cat-picker-row" onclick="catPickerSelect('${p.id}')">
      <div class="cat-picker-sku">${p.sku||'—'}</div>
      <div>
        <div class="cat-picker-name">${p.name||'—'}</div>
        <div class="cat-picker-meta">
          ${p.hs_code ? `ТН ВЭД: ${p.hs_code}` : ''}
          ${p.country_of_origin ? ` · ${p.country_of_origin}` : ''}
          ${sup ? ` · ${sup.name}` : ''}
        </div>
      </div>
      <div style="margin-left:auto;text-align:right">
        ${p.price ? `<div style="font-family:'JetBrains Mono',monospace;font-weight:700;color:var(--co-accent)">${fmtNum(p.price)} ${p.currency||''}</div>` : ''}
        <div style="font-size:10px;color:var(--text3)">${p.unit||''}</div>
      </div>
    </div>`;
  }).join('');
}

function catPickerSelect(id) {
  const p = DB_products.find(id);
  if (!p) return;
  catClosePicker();
  if (typeof _catPickerCb === 'function') _catPickerCb(p);
}

/* ── CALL catSeed FROM initDataLayer ────────────────────────────── */
// Patch: will be called on DOMContentLoaded after initDataLayer
document.addEventListener('DOMContentLoaded', () => {
  // catSeed will run lazily on first catLoad()
});


/* ╔═══════════════════════════════════════════════════════════════════
   ║  MODULE 16 — ПОСТАВКИ  (Этап 8)
   ║  Central shipment object linking supplier / contract / docs /
   ║  logistics / customs / payments
   ╚═══════════════════════════════════════════════════════════════════ */

/* ── State ──────────────────────────────────────────────────────── */
let _shpFilter  = 'all';
let _shpSort    = { f:'created_at', asc:false };
let _shpCurrent = null;   // id of open detail card
let _shpTabActive = 'goods';

/* ── Status labels / badges ─────────────────────────────────────── */
const SHP_STATUSES = {
  draft:      { label:'Черновик',  icon:'📝', cls:'draft'      },
  active:     { label:'Активная',  icon:'🔵', cls:'active'     },
  in_transit: { label:'В пути',    icon:'🚢', cls:'in_transit' },
  customs:    { label:'Таможня',   icon:'🛃', cls:'customs'    },
  delivered:  { label:'Доставлено',icon:'✅', cls:'delivered'  },
  cancelled:  { label:'Отменена',  icon:'❌', cls:'cancelled'  },
  archived:   { label:'Архив',     icon:'📁', cls:'cancelled'  },
};

// ── Полный справочник всех возможных документов ────────────────
const SHP_ALL_DOCS = {
  // Коммерческие
  invoice:      { name: 'Invoice / Инвойс',                     icon: '🧾' },
  packing:      { name: 'Packing List / Упаковочный лист',       icon: '📦' },
  proforma:     { name: 'Proforma / Проформа-инвойс',            icon: '📋' },
  // Транспортные
  bl:           { name: 'Bill of Lading / Коносамент (B/L)',     icon: '🚢' },
  cmr:          { name: 'CMR / Автотранспортная накладная',      icon: '🚛' },
  awb:          { name: 'Air Waybill (AWB)',                     icon: '✈️' },
  railway:      { name: 'Ж/Д накладная (СМГС/CIM)',              icon: '🚂' },
  freight_inv:  { name: 'Freight Invoice / Счёт экспедитора',    icon: '💰' },
  // Происхождение
  cert_origin:  { name: 'Certificate of Origin / Серт. происх.', icon: '🌐' },
  cert_origin_a:{ name: 'Серт. происхождения Form A (GSP)',       icon: '🌐' },
  // Качество
  cert_quality: { name: 'Quality Certificate / Серт. качества',  icon: '🏆' },
  cert_tech:    { name: 'Technical Passport / Техпаспорт',        icon: '📄' },
  datasheet:    { name: 'Datasheet / Техническое описание',       icon: '📐' },
  cert_trts:    { name: 'Сертификат ТР ТС / Декларация ТР ТС',   icon: '🛡️' },
  cert_fumig:   { name: 'Фитосанитарный / Фумигация',            icon: '🌿' },
  // Таможенные
  dt:           { name: 'Таможенная декларация (ДТ)',             icon: '🏛️' },
  payment_cust: { name: 'Платёжное поручение за таможню',         icon: '🏦' },
  ins_cert:     { name: 'Insurance Certificate / Страховка',      icon: '🛡️' },
};

// ── Динамический набор документов по параметрам поставки ───────
function buildDocSet(s) {
  const mode    = s.mode || 'sea';
  const country = (s.from_country || s.from || '').toUpperCase();
  const inco    = (s.incoterms || '').toUpperCase();

  // Транспортный документ — зависит от вида транспорта
  const transportDoc = {
    sea:   [{ id:'bl',      required: true  }, { id:'freight_inv', required: false }],
    air:   [{ id:'awb',     required: true  }, { id:'freight_inv', required: false }],
    rail:  [{ id:'railway', required: true  }, { id:'freight_inv', required: false }],
    road:  [{ id:'cmr',     required: true  }, { id:'freight_inv', required: false }],
    multi: [{ id:'bl',      required: true  }, { id:'cmr', required: false }, { id:'awb', required: false }, { id:'freight_inv', required: false }],
  }[mode] || [{ id:'bl', required: true }];

  // Сертификат происхождения: Form A для Индии/Китая/стран СНГ
  const isGspCountry = /INDIA|ИНДИЯ|IN|CHINA|КИТАЙ|CN|BD|PK|VN|TH|ID/.test(country);
  const originDoc = isGspCountry
    ? { id: 'cert_origin_a', required: true }
    : { id: 'cert_origin',   required: true };

  // Страховка — нужна при CIF/CIP
  const needsInsurance = /CIF|CIP/.test(inco);

  const groups = [
    {
      id: 'commercial', label: 'Коммерческие документы', docs: [
        { id: 'invoice',  required: true  },
        { id: 'packing',  required: true  },
        { id: 'proforma', required: false },
        ...(needsInsurance ? [{ id: 'ins_cert', required: true }] : []),
      ]
    },
    {
      id: 'transport', label: 'Транспортные документы', docs: transportDoc
    },
    {
      id: 'origin', label: 'Документы о происхождении', docs: [originDoc]
    },
    {
      id: 'quality', label: 'Качество и сертификаты', docs: [
        { id: 'cert_quality', required: false },
        { id: 'cert_tech',    required: false },
        { id: 'datasheet',    required: false },
        { id: 'cert_trts',    required: false },
        { id: 'cert_fumig',   required: false },
      ]
    },
    {
      id: 'customs_pkg', label: 'Таможенные документы', docs: [
        { id: 'dt',           required: true  },
        { id: 'payment_cust', required: true  },
      ]
    },
  ];

  // Обогащаем каждый doc-объект именем и иконкой из справочника
  return groups.map(g => ({
    ...g,
    docs: g.docs.map(d => ({ ...SHP_ALL_DOCS[d.id], ...d })).filter(d => d.name)
  }));
}

// Для обратной совместимости — статический список (используется в старом чек-листе)
const SHP_DOC_GROUPS = buildDocSet({ mode: 'sea', from_country: '' });
const SHP_DOCS_LIST  = SHP_DOC_GROUPS.flatMap(g => g.docs);

const DOC_STATUS_CYCLE = {
  none:      { label: 'Не получен', icon: '⬜', cls: 'st-none',      next: 'requested' },
  requested: { label: 'Запрошен',   icon: '📩', cls: 'st-requested', next: 'received'  },
  received:  { label: 'Получен',    icon: '✅', cls: 'st-received',  next: 'submitted' },
  submitted: { label: 'На таможне', icon: '🏛️', cls: 'st-submitted', next: 'none'      },
};

/* ── Seed demo data ─────────────────────────────────────────────── */
function shpSeed() {
  if (localStorage.getItem('ved_shipments_seed_done')) return;
  if (DB_shipments.count() > 0) { localStorage.setItem('ved_shipments_seed_done','1'); return; }
  try {
    const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
    const sup1 = sups[0] || null;
    const cts  = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
    const ct1  = cts[0] || null;

    const demo = [
      {
        shipment_number: 'ENDV2026-001',
        company: 'ENDV',
        supplier_id: String(sup1?.id || ''),
        contract_id:  ct1?.num || 'ENDV2026-01/TCL',
        incoterms:    'CFR',
        total_value:  99500,
        currency:     'USD',
        status:       'in_transit',
        mode:         'sea',
        from:         'Nhava Sheva (INNSA)',
        to:           'Санкт-Петербург (RULEL)',
        forwarder_id: '',
        broker_id:    '',
        current_stage: 5,
        dates: {
          payment:    '2026-01-15',
          production: '2026-02-20',
          etd:        '2026-03-01',
          eta:        '2026-04-10',
          customs:    '',
          delivery:   '',
        },
        items: [
          { sku:'TCL-3C050-300', name:'3C X 0.50SQ.MM ARMOURED CABLE', unit:'Mtrs', qty:300, price:135.63, hs_code:'8544.49.9100', country:'India' },
          { sku:'TCL-7C050-300', name:'7C X 0.50SQ.MM ARMOURED CABLE', unit:'Mtrs', qty:300, price:206.35, hs_code:'8544.49.9100', country:'India' },
          { sku:'TCL-4C050-300', name:'4C X 0.50SQ.MM ARMOURED CABLE', unit:'Mtrs', qty:300, price:155.06, hs_code:'8544.49.9100', country:'India' },
        ],
        docs: SHP_DOCS_LIST.map((d, i) => ({ id: d.id, name: d.name, icon: d.icon, status: i < 4 ? 'received' : 'none', received: i < 4 })),
        customs_data: {
          declaration_num: '',
          customs_value_rub: 0,
          duty_rate: 5,
          duty_amount: 0,
          vat_amount: 0,
          customs_fees: 0,
          broker_fee: 0,
          notes: '',
        },
        payments: [
          { id: 'p1', type:'advance', amount:29850, currency:'USD', due:'2026-01-15', paid:'2026-01-14', status:'paid', note:'30% аванс' },
          { id: 'p2', type:'balance', amount:69650, currency:'USD', due:'2026-03-01', paid:'',           status:'pending', note:'70% перед отгрузкой' },
        ],
        events: [
          { date:'14.01.2026', icon:'💳', text:'Авансовый платёж 29 850 USD' },
          { date:'20.02.2026', icon:'🏭', text:'Товар готов к отгрузке' },
          { date:'01.03.2026', icon:'🚢', text:'Погрузка на судно, ETD подтверждён' },
        ],
        notes: 'Основная поставка кабельной продукции Q1 2026',
        created_at: '2026-01-10',
      },
      {
        shipment_number: 'ENDV2026-002',
        company: 'ENDV',
        supplier_id: String(sup1?.id || ''),
        contract_id:  'ENDV2026-02/TCL',
        incoterms:    'CIF',
        total_value:  45200,
        currency:     'USD',
        status:       'active',
        mode:         'sea',
        from:         'Nhava Sheva',
        to:           'Санкт-Петербург',
        forwarder_id: '',
        broker_id:    '',
        current_stage: 1,
        dates: { payment:'2026-03-10', production:'2026-05-15', etd:'2026-06-01', eta:'2026-07-15', customs:'', delivery:'' },
        items: [
          { sku:'TCL-CTRL-24P', name:'24 PAIR CONTROL CABLE 0.5SQ', unit:'Mtrs', qty:100, price:410.00, hs_code:'8544.49.9100', country:'India' },
          { sku:'TCL-2C150-150', name:'2C X 1.50SQ.MM UNARMOURED CABLE', unit:'Mtrs', qty:150, price:88.00, hs_code:'8544.42.9000', country:'India' },
        ],
        docs: SHP_DOCS_LIST.map((d, i) => ({ id: d.id, name: d.name, icon: d.icon, status: i < 2 ? 'received' : 'none', received: i < 2 })),
        customs_data: { declaration_num:'', customs_value_rub:0, duty_rate:5, duty_amount:0, vat_amount:0, customs_fees:0, broker_fee:0, notes:'' },
        payments: [
          { id:'p3', type:'advance', amount:13560, currency:'USD', due:'2026-03-10', paid:'', status:'pending', note:'30% аванс' },
          { id:'p4', type:'balance', amount:31640, currency:'USD', due:'2026-06-01', paid:'', status:'pending', note:'70% перед отгрузкой' },
        ],
        events: [
          { date:'08.03.2026', icon:'📄', text:'Контракт подписан' },
        ],
        notes: 'Поставка Q2 2026 — контрольные кабели',
        created_at: '2026-03-08',
      },
    ];

    demo.forEach(d => DB_shipments.insert(d));
    localStorage.setItem('ved_shipments_seed_done', '1');
  } catch(e) { console.warn('shpSeed error:', e); }
}

/* ── KPIs ───────────────────────────────────────────────────────── */
function shpUpdateKPIs() {
  const all = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

  const live = all.filter(s => s.status !== 'archived');
  set('shp-kpi-total',    live.length);
  set('shp-kpi-active',   live.filter(s => s.status === 'active').length);
  set('shp-kpi-transit',  live.filter(s => s.status === 'in_transit').length);
  set('shp-kpi-customs',  live.filter(s => s.status === 'customs').length);
  set('shp-kpi-delivered',live.filter(s => s.status === 'delivered').length);

  // Total USD value (live only — archived excluded)
  const total = live.reduce((s, x) => s + (parseFloat(x.total_value) || 0), 0);
  set('shp-kpi-value', total >= 1000000
    ? (total/1000000).toFixed(1) + 'M'
    : total >= 1000 ? (total/1000).toFixed(0) + 'K'
    : fmtNum(total));
}

/* ── Load / Filter / Render list ────────────────────────────────── */
function shpLoad() {
  siMigrate();
  shpSeed();
  shpUpdateKPIs();

  const q = (document.getElementById('shp-search')?.value || '').toLowerCase().trim();
  let rows = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);

  if (_shpFilter === 'archived') {
    rows = rows.filter(s => s.status === 'archived');
  } else if (_shpFilter !== 'all') {
    rows = rows.filter(s => s.status === _shpFilter);
  } else {
    // "all" excludes archived — use 📁 Архив chip to see them
    rows = rows.filter(s => s.status !== 'archived');
  }
  if (q) rows = rows.filter(s =>
    [s.shipment_number, s.contract_id, s.notes,
     shpSupName(s.supplier_id), s.from, s.to]
      .join(' ').toLowerCase().includes(q)
  );

  rows = rows.sort((a, b) => {
    const va = String(a[_shpSort.f] || '');
    const vb = String(b[_shpSort.f] || '');
    return _shpSort.asc ? va.localeCompare(vb) : vb.localeCompare(va);
  });

  const wrap = document.getElementById('shp-list-wrap');
  if (!wrap) return;

  if (rows.length === 0) {
    wrap.innerHTML = `<div class="shp-empty">
      <div style="font-size:40px;opacity:.25;margin-bottom:12px">🚢</div>
      <div style="font-weight:600;font-size:14px;margin-bottom:4px">${
        DB_shipments.count() === 0 ? 'Поставок ещё нет' : 'Ничего не найдено'
      }</div>
      <div style="font-size:12px">${
        DB_shipments.count() === 0
          ? 'Нажмите «+ Новая поставка» чтобы создать первую'
          : 'Измените поисковый запрос или фильтр'
      }</div>
    </div>`;
    return;
  }

  wrap.innerHTML = `<div class="shp-table-wrap"><table class="shp-table">
    <thead><tr>
      <th onclick="shpSort('shipment_number')" style="min-width:130px">Номер ↕</th>
      <th onclick="shpSort('status')" style="min-width:110px">Статус ↕</th>
      <th>Поставщик</th>
      <th onclick="shpSort('contract_id')">Контракт ↕</th>
      <th>Маршрут</th>
      <th>Прогресс</th>
      <th onclick="shpSort('total_value')" style="text-align:right">Сумма ↕</th>
      <th onclick="shpSort('dates.eta')" style="min-width:90px">ETA ↕</th>
      <th style="min-width:80px"></th>
    </tr></thead>
    <tbody>${rows.map(shpRowHTML).join('')}</tbody>
  </table></div>`;
}

function shpRowHTML(s) {
  const st   = SHP_STATUSES[s.status] || SHP_STATUSES.draft;
  const prog = shpProgress(s);
  const sup  = shpSupName(s.supplier_id);
  const eta  = s.dates?.eta ? s.dates.eta.slice(0, 10) : '—';
  const val  = s.total_value ? fmtNum(s.total_value) + ' ' + (s.currency || '') : '—';

  return `<tr onclick="shpOpenDetail('${s.id}')">
    <td class="shp-num-col">${s.shipment_number || '—'}</td>
    <td><span class="shp-badge ${st.cls}">${st.icon} ${st.label}</span></td>
    <td style="font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${sup}</td>
    <td style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3)">${s.contract_id || '—'}</td>
    <td style="font-size:11px;color:var(--text2)">${[s.from, s.to].filter(Boolean).join(' → ') || '—'}</td>
    <td>
      <div style="display:flex;gap:2px;align-items:center">
        ${Array.from({length:9},(_,i)=>`<div style="width:14px;height:6px;border-radius:2px;background:${
          i < parseInt(s.current_stage||0) ? 'var(--co-accent)' :
          i === parseInt(s.current_stage||0) ? '#facc15' : 'var(--surface3)'
        }"></div>`).join('')}
      </div>
      <div style="font-size:9px;color:var(--text3);margin-top:2px;font-family:'JetBrains Mono',monospace">
        ${SHP_PIPE_STAGES[parseInt(s.current_stage||0)]?.label || ''}
      </div>
    </td>
    <td style="text-align:right;font-family:'JetBrains Mono',monospace;font-weight:700;
               color:var(--co-accent);font-size:12px">${val}</td>
    <td style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3)">${eta}</td>
    <td onclick="event.stopPropagation()" style="white-space:nowrap">
      <button class="admin-action-btn" onclick="shpOpenDetail('${s.id}')">👁</button>
      <button class="admin-action-btn" onclick="shpOpenForm('${s.id}')">✎</button>
      <button class="admin-action-btn danger" onclick="shpDelete('${s.id}')">×</button>
    </td>
  </tr>`;
}

function shpProgress(s) {
  const stage = parseInt(s.current_stage) || 0;
  return Math.round((stage / (PIPE_STAGES.length - 1)) * 100);
}

function shpSupName(id) {
  if (!id) return '—';
  try {
    const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
    return sups.find(x => String(x.id) === String(id))?.name || '—';
  } catch(e) { return '—'; }
}

function shpSetFilter(f, el) {
  _shpFilter = f;
  document.querySelectorAll('[data-shp-f]').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');
  shpLoad();
}

function shpSort(field) {
  if (_shpSort.f === field) _shpSort.asc = !_shpSort.asc;
  else { _shpSort.f = field; _shpSort.asc = true; }
  shpLoad();
}

/* ── DETAIL MODAL ───────────────────────────────────────────────── */
function shpOpenDetail(id) {
  const s = DB_shipments.find(id);
  if (!s) return;
  _shpCurrent = id;

  // Header
  const st  = SHP_STATUSES[s.status] || SHP_STATUSES.draft;
  const sup = shpSupName(s.supplier_id);
  document.getElementById('shpd-num').textContent   = s.shipment_number || '—';
  document.getElementById('shpd-title').textContent = sup + (s.contract_id ? ' · ' + s.contract_id : '');

  const rfqLink = s.rfq_id ? DB_rfq_requests.find(s.rfq_id) : null;
  const prLink  = rfqLink?.purchase_request_id ? DB_purchase_requests.find(rfqLink.purchase_request_id) : null;

  // PTK retention pill for archived shipments
  let ptkPill = '';
  if (s.status === 'archived' && s.ptk_retention_until) {
    const today = new Date(); today.setHours(0,0,0,0);
    const rd = new Date(s.ptk_retention_until + 'T00:00:00');
    const diff = Math.round((rd - today) / 86400000);
    const dStr = s.ptk_retention_until.split('-').reverse().join('.');
    const color = diff < 0 ? '#ef4444' : diff < 90 ? '#f59e0b' : '#6ee7b7';
    ptkPill = `<div class="shp-head-pill" style="border-color:${color};color:${color}">🗂 ПТК до ${dStr}${diff>=0?` (${diff} дн.)`:'(истёк)'}</div>`;
  }

  document.getElementById('shpd-meta').innerHTML = `
    ${prLink ? `<div class="shp-head-pill" style="cursor:pointer" onclick="showSection('purchase');setTimeout(()=>prOpenDetail('${prLink.id}'),200)">📋 ${prLink.request_number||'Заявка'}</div>` : ''}
    ${rfqLink ? `<div class="shp-head-pill">💬 RFQ ${rfqLink.rfq_number||''}</div>` : ''}
    <div class="shp-head-pill"><span class="shp-badge ${st.cls}">${st.icon} ${st.label}</span></div>
    <div class="shp-head-pill">📦 <b>${s.incoterms || '—'}</b></div>
    <div class="shp-head-pill">💵 <b>${s.total_value ? fmtNum(s.total_value)+' '+(s.currency||'') : '—'}</b></div>
    ${s.dates?.eta ? `<div class="shp-head-pill">📅 ETA <b>${s.dates.eta}</b></div>` : ''}
    ${s.mode ? `<div class="shp-head-pill">${{sea:'🚢',air:'✈',rail:'🚂',road:'🚛',multi:'🔄'}[s.mode]||'🚢'} <b>${s.from||''} → ${s.to||''}</b></div>` : ''}
    ${ptkPill}
  `;

  // Archive button visibility
  const archBtn = document.getElementById('shp-archive-btn');
  if (archBtn) archBtn.style.display = (s.status === 'delivered' || s.status === 'archived') ? '' : 'none';

  // Pipeline — compact colored progress bar in modal header
  const stage = parseInt(s.current_stage) || 0;
  const pipeSegs = PIPE_STAGES.map((p, i) => {
    const done   = i < stage;
    const active = i === stage;
    const bg = done ? 'var(--co-accent)' : active ? '#facc15' : 'rgba(255,255,255,.18)';
    const h  = active ? '8px' : '5px';
    return `<div style="flex:1;height:${h};border-radius:3px;background:${bg};
                        align-self:flex-end;transition:all .3s"
                 title="${p.icon} ${p.label.replace('\\n',' ')}"></div>`;
  }).join('');
  document.getElementById('shpd-pipeline').innerHTML =
    `<div style="display:flex;gap:2px;width:100%;margin-bottom:5px">${pipeSegs}</div>` +
    `<div style="display:flex;justify-content:space-between;font-size:9px;` +
    `color:rgba(255,255,255,.6);font-family:'JetBrains Mono',monospace">` +
    `<span>${PIPE_STAGES[0].icon}</span>` +
    `<span style="color:${stage<8?'#facc15':'#86efac'};font-weight:700;font-size:10px">` +
    `${PIPE_STAGES[stage].icon} ${PIPE_STAGES[stage].label.replace('\\n',' ')}</span>` +
    `<span>${PIPE_STAGES[8].icon}</span>` +
    `</div>`;

  // Advance button
  const advBtn = document.getElementById('shp-advance-btn');
  if (advBtn) {
    advBtn.style.display = stage >= PIPE_STAGES.length - 1 ? 'none' : '';
    advBtn.textContent   = stage < PIPE_STAGES.length - 1
      ? `▶ ${PIPE_STAGES[stage + 1]?.icon || ''} ${PIPE_STAGES[stage + 1]?.label?.replace('\\n',' ') || 'Следующий этап'}`
      : 'Завершена';
  }

  // Reset tabs, render active
  document.querySelectorAll('.shp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.shp-tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelector('[data-shp-tab="goods"]')?.classList.add('active');
  document.getElementById('shp-pane-goods')?.classList.add('active');
  _shpTabActive = 'goods';
  shpRenderTab('goods', s);

  document.getElementById('shp-detail-bg').classList.add('open');
}

function shpCloseDetail() {
  document.getElementById('shp-detail-bg').classList.remove('open');
  _shpCurrent = null;
}

function shpSetTab(tab, el) {
  _shpTabActive = tab;
  document.querySelectorAll('.shp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.shp-tab-pane').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('shp-pane-' + tab)?.classList.add('active');
  const s = _shpCurrent ? DB_shipments.find(_shpCurrent) : null;
  if (s) shpRenderTab(tab, s);
}

function shpRenderTab(tab, s) {
  if (tab === 'goods')        shpRenderGoods(s);
  if (tab === 'docs')         shpRenderDocs(s);
  if (tab === 'logistics')    shpRenderLogistics(s);
  if (tab === 'customs')      shpRenderCustoms(s);
  if (tab === 'payments')     shpRenderPayments(s);
  if (tab === 'tracking')     shpRenderTracking(s);
  if (tab === 'finance')      shpRenderFinance(s);
  if (tab === 'declarations') shpRenderDeclarations(s);
}

/* ── TAB: GOODS ──────────────────────────────────────────────────── */
function shpRenderGoods(s) {
  siMigrate();
  const items = siGetByShipment(s.id);
  const el = document.getElementById('shpd-goods-content');
  if (!el) return;

  if (items.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text3);
                                border:1px dashed var(--border);border-radius:var(--radius-lg)">
      <div style="font-size:36px;opacity:.3;margin-bottom:10px">📦</div>
      <div style="font-weight:600;font-size:13px;margin-bottom:6px">Товары не добавлены</div>
      <div style="font-size:12px;margin-bottom:16px">Добавьте товары из каталога или вручную.<br>
        Документы (инвойс, спецификация, упаковочный лист) будут использовать эти данные.</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="admin-action-btn" onclick="siAddFromCatalog('${s.id}')">📦 Из каталога</button>
        <button class="admin-action-btn" onclick="siAddManual('${s.id}')">+ Добавить вручную</button>
      </div>
    </div>`;
    return;
  }

  const total    = items.reduce((sum, it) => sum + (parseFloat(it.total_price)||0), 0);
  const currency = s.currency || 'USD';

  el.innerHTML = `
    <div style="margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div style="font-size:12px;color:var(--text3);font-family:'JetBrains Mono',monospace">
        📦 ${items.length} позиций · ИТОГО:
        <b style="color:var(--co-accent)">${fmtNum(total)} ${currency}</b>
      </div>
      <div style="font-size:11px;color:var(--text3)">
        ℹ Эти товары используются во всех документах поставки
      </div>
    </div>
    <div style="overflow-x:auto">
    <table class="shp-items-table">
      <thead><tr>
        <th>#</th>
        <th>SKU / Артикул</th>
        <th style="min-width:200px">Наименование / Модель</th>
        <th>ТН ВЭД</th>
        <th>Страна</th>
        <th>Ед.</th>
        <th class="r">Кол-во</th>
        <th class="r">Цена, ${currency}</th>
        <th class="r">Сумма, ${currency}</th>
        <th>Вес нетто</th>
        <th></th>
      </tr></thead>
      <tbody>
        ${items.map((it, i) => {
          const avInv = siAvailableQty(it.id, 'invoice');
          const avPL  = siAvailableQty(it.id, 'packing_list');
          return `<tr>
            <td style="color:var(--text3);font-size:11px">${i+1}</td>
            <td style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--co-accent)">${it.supplier_sku||'—'}</td>
            <td>
              <div style="font-weight:600;font-size:12.5px">${it.description||'—'}</div>
              ${it.model ? `<div style="font-size:10.5px;color:var(--text3)">${it.model}</div>` : ''}
            </td>
            <td style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text3)">${it.hs_code||'—'}</td>
            <td style="font-size:11px;color:var(--text3)">${it.country_of_origin||'—'}</td>
            <td style="font-size:11px">${it.unit||'—'}</td>
            <td class="r" style="font-weight:700">${fmtNum(it.quantity||0)}</td>
            <td class="r" style="font-family:'JetBrains Mono',monospace">${fmtNum(it.unit_price||0)}</td>
            <td class="r" style="font-weight:800;color:var(--co-accent)">${fmtNum(it.total_price||0)}</td>
            <td style="font-size:11px;color:var(--text3)">${it.net_weight ? fmtNum(it.net_weight)+' кг' : '—'}</td>
            <td style="white-space:nowrap">
              <button class="admin-action-btn" title="Редактировать"
                      onclick="siEditItem('${it.id}','${s.id}')">✎</button>
              <button class="admin-action-btn" title="Удалить"
                      style="color:var(--red)"
                      onclick="siDeleteItem('${it.id}','${s.id}')">×</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
      <tfoot><tr>
        <td colspan="8" style="text-align:right;color:var(--text3);font-size:11px;padding:8px 10px">ИТОГО по поставке:</td>
        <td style="font-family:'JetBrains Mono',monospace;font-weight:900;color:var(--co-accent);padding:8px 10px;font-size:14px">${fmtNum(total)} ${currency}</td>
        <td colspan="2"></td>
      </tr></tfoot>
    </table>
    </div>`;
}

function shpAddItem() {
  const name  = prompt('Наименование товара:');
  if (!name) return;
  const sku   = prompt('SKU (можно пустой):') || '';
  const qty   = parseFloat(prompt('Количество:') || '0') || 0;
  const price = parseFloat(prompt('Цена за ед.:') || '0') || 0;
  const unit  = prompt('Единица (Pcs/Mtrs/Kgs):') || 'Pcs';
  shpPushItem({ sku, name, unit, qty, price, hs_code:'', country:'' });
}

function shpAddItemFromCatalog(p) {
  shpPushItem({ sku: p.sku||'', name: p.name||'', unit: p.unit||'Pcs', qty: 0, price: p.price||0, hs_code: p.hs_code||'', country: p.country_of_origin||'' });
}

function shpPushItem(item) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const items = s.items || [];
  items.push(item);
  DB_shipments.update(_shpCurrent, { items });
  shpRenderGoods(DB_shipments.find(_shpCurrent));
  showToast(`📦 Добавлено: ${item.name}`);
}

function shpRemoveItem(idx) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const items = (s.items || []);
  items.splice(idx, 1);
  DB_shipments.update(_shpCurrent, { items });
  shpRenderGoods(DB_shipments.find(_shpCurrent));
}

/* ── TAB: DOCS ───────────────────────────────────────────────────── */
function _shpRenderDocs_base(s) {
  const docs = s.docs || SHP_DOCS_LIST.map(d => ({ id: d.id, name: d.name, icon: d.icon, status: 'none', received: false }));
  const el   = document.getElementById('shpd-docs-content');
  if (!el) return;

  const recv = docs.filter(d => d.received).length;

  // PTK retention block
  let ptkBlock = '';
  if (s.ptk_date || s.ptk_retention_until) {
    const today = new Date(); today.setHours(0,0,0,0);
    const rd = s.ptk_retention_until ? new Date(s.ptk_retention_until + 'T00:00:00') : null;
    const diff = rd ? Math.round((rd - today) / 86400000) : null;
    const dStr = s.ptk_retention_until ? s.ptk_retention_until.split('-').reverse().join('.') : '—';
    const barColor = diff === null ? 'var(--text3)' : diff < 0 ? '#ef4444' : diff < 365 ? '#f59e0b' : '#22c55e';
    const statusText = diff === null ? '—' : diff < 0 ? `Срок истёк ${Math.abs(diff)} дн. назад` : `Осталось ${diff} дн.`;
    ptkBlock = `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <div style="font-size:18px">🗂</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:13px">Пакет таможенных документов (ПТК)</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">ст. 98 ТК ЕАЭС · Срок хранения 5 лет с даты выпуска ДТ</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text3)">Дата выпуска ДТ</div>
          <div style="font-weight:700;font-family:'Fira Code',monospace;font-size:13px">${s.ptk_date ? s.ptk_date.split('-').reverse().join('.') : '—'}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text3)">Хранить до</div>
          <div style="font-weight:700;font-family:'Fira Code',monospace;font-size:13px;color:${barColor}">${dStr}</div>
          <div style="font-size:10px;color:${barColor}">${statusText}</div>
        </div>
      </div>
      ${diff !== null ? `
      <div style="margin-top:10px;height:4px;border-radius:2px;background:var(--surface3);overflow:hidden">
        <div style="height:100%;border-radius:2px;background:${barColor};width:${Math.min(100,Math.max(0,Math.round((1 - diff/(365*5))*100)))}%"></div>
      </div>` : ''}
    </div>`;
  } else if (s.status === 'archived') {
    ptkBlock = `<div style="background:var(--surface2);border:1px dashed var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:16px;font-size:12px;color:var(--text3)">
      🗂 Срок хранения ПТК не задан. <a href="#" onclick="shpArchiveCurrent();return false" style="color:var(--co-accent)">Указать дату ДТ →</a>
    </div>`;
  }

  el.innerHTML = `
    ${ptkBlock}
    <div style="margin-bottom:12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:12px;color:var(--text3)">Получено документов:</div>
      <div style="font-weight:800;font-size:14px;color:${recv===docs.length?'#15803d':'var(--co-accent)'}">${recv} / ${docs.length}</div>
      <div class="shp-progress-bar" style="flex:1;height:6px">
        <div class="shp-progress-fill" style="width:${Math.round(recv/docs.length*100)}%"></div>
      </div>
    </div>
    ${docs.map((d, i) => `<div class="shp-doc-row">
      <div class="shp-doc-check ${d.received?'ok':'miss'}">${d.received?'✓':'!'}</div>
      <div style="flex:1;font-weight:${d.received?500:600};color:${d.received?'var(--text2)':'var(--text)'}">${d.name}</div>
      <button class="admin-action-btn ${d.received?'':'active'}" style="${d.received?'':'background:var(--co-accent-light);border-color:var(--co-accent);color:var(--co-accent)'}"
              onclick="shpToggleDocItem(${i})">${d.received?'✓ Получен':'○ Ожидается'}</button>
    </div>`).join('')}`;
}

function shpToggleDocItem(idx) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const docs = s.docs || SHP_DOCS_LIST.map(d => ({ id: d.id, name: d.name, icon: d.icon, status: 'none', received: false }));
  if (docs[idx]) docs[idx].received = !docs[idx].received;
  DB_shipments.update(_shpCurrent, { docs });
  shpRenderDocs(DB_shipments.find(_shpCurrent));
}

function shpToggleDoc() {
  const name = prompt('Название документа:');
  if (!name) return;
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const docs = s.docs || [];
  docs.push({ name, received: false });
  DB_shipments.update(_shpCurrent, { docs });
  shpRenderDocs(DB_shipments.find(_shpCurrent));
}

/* ── TAB: LOGISTICS ─────────────────────────────────────────────── */
function shpRenderLogistics(s) {
  const el = document.getElementById('shpd-logistics-content');
  if (!el) return;

  const modeIcons  = { sea:'🚢', air:'✈️', rail:'🚂', road:'🚛', multi:'🔄' };
  const modeLabels = { sea:'Морской', air:'Авиа', rail:'Железнодорожный', road:'Автомобильный', multi:'Мультимодальный' };
  const fwdName = s.forwarder_id ? shpSupName(s.forwarder_id) : '—';
  const brkName = s.broker_id    ? shpSupName(s.broker_id)    : '—';
  const lg = s.logistics || {};
  const mode = s.mode || 'sea';

  // ── Helper: input field ──────────────────────────────────────────
  const inp = (id, val, ph='', type='text', extra='') =>
    `<input id="shplg-${id}" type="${type}" value="${val||''}" placeholder="${ph}" ${extra}
      style="width:100%;padding:6px 10px;border:1px solid var(--border);border-radius:6px;
             background:var(--surface);color:var(--text);font-size:12px;font-family:'Fira Code',monospace">`;
  const field = (label, inputHtml, span='') =>
    `<div class="field${span?' '+span:''}" style="display:flex;flex-direction:column;gap:4px">
      <label style="font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:var(--text3);font-family:'Fira Code',monospace">${label}</label>
      ${inputHtml}
    </div>`;

  // ── Summary info cells (read-only top section) ───────────────────
  const cells = [
    { label:'Вид транспорта',        value: mode ? `${modeIcons[mode]||''} ${modeLabels[mode]||mode}` : '—' },
    { label:'Базис (Incoterms)',     value: s.incoterms || '—', cls:'mono accent' },
    { label:'Откуда',               value: s.from || '—' },
    { label:'Куда',                 value: s.to   || '—' },
    { label:'ETD',                  value: s.dates?.etd || '—', cls:'mono green' },
    { label:'ETA',                  value: s.dates?.eta || '—', cls:'mono green' },
    { label:'Экспедитор',           value: fwdName },
    { label:'Таможенный брокер',    value: brkName },
  ];

  // ── Transport-specific fields ────────────────────────────────────
  const showSea   = mode === 'sea'  || mode === 'multi';
  const showAir   = mode === 'air'  || mode === 'multi';
  const showRail  = mode === 'rail' || mode === 'multi';
  const showRoad  = mode === 'road' || mode === 'multi';

  const seaBlock = showSea ? `
    <div style="margin-bottom:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#2563EB;font-family:'Fira Code',monospace">🚢 Морская перевозка</div>
    <div class="form-grid cols-3" style="margin-bottom:12px">
      ${field('Номер букинга (Booking #)',   inp('booking',  lg.booking,  'HLCU1234567'))}
      ${field('Судоходная линия',            inp('line',     lg.line,     'Hapag-Lloyd / COSCO...'))}
      ${field('Судно (Vessel)',              inp('vessel',   lg.vessel,   'MSC ANNA'))}
      ${field('Номер рейса (Voyage)',        inp('voyage',   lg.voyage,   'AE-1 / 032W'))}
      ${field('Свободное время (free days)', inp('free_days',lg.free_days,'14','number','min="0" max="60"'))}
      ${field('Порт транзита (если есть)',   inp('transit_port', lg.transit_port, 'Colombo / Singapore...'))}
      ${field('Контейнеры (через запятую)', `<textarea id="shplg-containers" rows="2" placeholder="TCKU1234567, MSCU7654321"
        style="width:100%;padding:6px 10px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);font-size:12px;font-family:'Fira Code',monospace;resize:vertical">${lg.containers||''}</textarea>`, 'span3')}
    </div>` : '';

  const airBlock = showAir ? `
    <div style="margin-bottom:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#7C3AED;font-family:'Fira Code',monospace">✈️ Авиаперевозка</div>
    <div class="form-grid cols-3" style="margin-bottom:12px">
      ${field('Номер AWB',             inp('awb',      lg.awb,      '176-12345678'))}
      ${field('Авиакомпания',          inp('airline',  lg.airline,  'Emirates / Aeroflot...'))}
      ${field('Номер рейса',           inp('flight',   lg.flight,   'EK-631'))}
    </div>` : '';

  const railBlock = showRail ? `
    <div style="margin-bottom:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#B45309;font-family:'Fira Code',monospace">🚂 Железнодорожная перевозка</div>
    <div class="form-grid cols-3" style="margin-bottom:12px">
      ${field('Накладная СМГС / CIM',   inp('waybill',  lg.waybill,  'СМГС 12345'))}
      ${field('Номер поезда',           inp('train',    lg.train,    '1234/1235'))}
      ${field('Вагоны (через запятую)', inp('wagons',   lg.wagons,   '12345678, 87654321'))}
    </div>` : '';

  const roadBlock = showRoad ? `
    <div style="margin-bottom:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#065F46;font-family:'Fira Code',monospace">🚛 Автомобильная перевозка</div>
    <div class="form-grid cols-3" style="margin-bottom:12px">
      ${field('Номер CMR',                inp('cmr',    lg.cmr,    'CMR-2026-001'))}
      ${field('Перевозчик',              inp('carrier', lg.carrier, 'ООО Транслогик'))}
      ${field('Тягач / Прицеп',          inp('truck',  lg.truck,  'А123ВС178 / АА4567'))}
      ${field('Водитель (ФИО)',           inp('driver', lg.driver, 'Иванов Иван Иванович'))}
    </div>` : '';

  el.innerHTML = `
    <!-- Summary info -->
    <div class="shp-logistics-grid" style="margin-bottom:20px">
      ${cells.map(c => `<div class="shp-lg-cell">
        <div class="shp-lg-label">${c.label}</div>
        <div class="shp-lg-val ${c.cls||''}">${c.value}</div>
      </div>`).join('')}
    </div>

    <!-- Transport-specific tracking fields -->
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:16px 18px;margin-bottom:16px">
      <div style="font-weight:700;font-size:13px;margin-bottom:14px">🗂 Детали перевозки</div>
      ${seaBlock}${airBlock}${railBlock}${roadBlock}
      <button onclick="shpSaveLogistics()" style="padding:7px 20px;background:var(--co-accent);color:white;border:none;border-radius:7px;cursor:pointer;font-size:12px;font-weight:700;margin-top:4px">
        💾 Сохранить детали перевозки
      </button>
    </div>

    <!-- Event history -->
    ${(s.events||[]).length ? `
    <div>
      <div class="block-title" style="margin-bottom:8px">📋 История событий</div>
      ${[...(s.events||[])].reverse().map(e => `<div class="shp-event-row">
        <div class="shp-event-icon">${e.icon||'•'}</div>
        <div style="flex:1">
          <div style="font-weight:600">${e.text||''}</div>
          ${e.note ? `<div style="font-size:11px;color:var(--text3)">${e.note}</div>` : ''}
        </div>
        <div class="shp-event-date">${e.date||''}</div>
      </div>`).join('')}
    </div>` : ''}`;
}

function shpSaveLogistics() {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const g = id => document.getElementById('shplg-' + id);
  const v = id => g(id)?.value?.trim() || '';
  s.logistics = {
    // Sea
    booking:      v('booking'),
    line:         v('line'),
    vessel:       v('vessel'),
    voyage:       v('voyage'),
    free_days:    parseInt(v('free_days')) || 14,
    transit_port: v('transit_port'),
    containers:   v('containers'),
    // Air
    awb:          v('awb'),
    airline:      v('airline'),
    flight:       v('flight'),
    // Rail
    waybill:      v('waybill'),
    train:        v('train'),
    wagons:       v('wagons'),
    // Road
    cmr:          v('cmr'),
    carrier:      v('carrier'),
    truck:        v('truck'),
    driver:       v('driver'),
  };
  shipmentsSyncToDB(s);
  shipmentsSave();
  showToast('✅ Детали перевозки сохранены');
}

/* ── TAB: CUSTOMS ───────────────────────────────────────────────── */
function shpRenderCustoms(s) {
  const el = document.getElementById('shpd-customs-content');
  if (!el) return;
  const cd = s.customs_data || {};

  el.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div style="font-weight:700;font-size:14px">🛃 Таможенное оформление</div>
      <button class="admin-action-btn" onclick="shpSaveCustoms()">💾 Сохранить</button>
    </div>
    <div class="form-grid cols-3" style="margin-bottom:0">
      <div class="field">
        <label>Номер ДТ</label>
        <input id="shpc-decl-num" value="${cd.declaration_num||''}" placeholder="10210010/010326/...">
      </div>
      <div class="field">
        <label>Таможенная стоимость, руб.</label>
        <input id="shpc-cv-rub" type="number" value="${cd.customs_value_rub||0}">
      </div>
      <div class="field">
        <label>Ставка пошлины, %</label>
        <input id="shpc-duty-rate" type="number" value="${cd.duty_rate||5}" step="0.1">
      </div>
      <div class="field">
        <label>Сумма пошлины, руб.</label>
        <input id="shpc-duty-amt" type="number" value="${cd.duty_amount||0}">
      </div>
      <div class="field">
        <label>НДС при ввозе, руб.</label>
        <input id="shpc-vat-amt" type="number" value="${cd.vat_amount||0}">
      </div>
      <div class="field">
        <label>Таможенные сборы, руб.</label>
        <input id="shpc-fees" type="number" value="${cd.customs_fees||0}">
      </div>
      <div class="field">
        <label>Вознаграждение брокера, руб.</label>
        <input id="shpc-broker-fee" type="number" value="${cd.broker_fee||0}">
      </div>
      <div class="field span2">
        <label>Примечания</label>
        <input id="shpc-notes" value="${cd.notes||''}" placeholder="Особые условия, статьи...">
      </div>
    </div>
    ${(cd.duty_amount || cd.vat_amount || cd.customs_fees) ? `
      <div style="margin-top:16px;padding:14px 16px;background:var(--surface2);border:1.5px solid var(--border);
                  border-radius:var(--radius);font-family:'JetBrains Mono',monospace;font-size:12px">
        <div style="font-weight:700;margin-bottom:8px;font-family:'Plus Jakarta Sans',sans-serif">💰 Итого таможенные расходы</div>
        ${[
          ['Пошлина', cd.duty_amount],
          ['НДС', cd.vat_amount],
          ['Сборы', cd.customs_fees],
          ['Брокер', cd.broker_fee],
        ].filter(r => r[1]).map(r =>
          `<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)">
            <span style="color:var(--text3)">${r[0]}</span>
            <span style="font-weight:700">${fmtNum(r[1])} ₽</span>
          </div>`
        ).join('')}
        <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:14px;font-weight:800;color:var(--co-accent)">
          <span>ИТОГО</span>
          <span>${fmtNum((cd.duty_amount||0)+(cd.vat_amount||0)+(cd.customs_fees||0)+(cd.broker_fee||0))} ₽</span>
        </div>
      </div>` : '<div style="color:var(--text3);font-size:12px;padding:12px 0">Данные таможенного оформления ещё не внесены</div>'}`;
}

function shpSaveCustoms() {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const cd = {
    declaration_num:   document.getElementById('shpc-decl-num')?.value || '',
    customs_value_rub: parseFloat(document.getElementById('shpc-cv-rub')?.value) || 0,
    duty_rate:         parseFloat(document.getElementById('shpc-duty-rate')?.value) || 5,
    duty_amount:       parseFloat(document.getElementById('shpc-duty-amt')?.value) || 0,
    vat_amount:        parseFloat(document.getElementById('shpc-vat-amt')?.value) || 0,
    customs_fees:      parseFloat(document.getElementById('shpc-fees')?.value) || 0,
    broker_fee:        parseFloat(document.getElementById('shpc-broker-fee')?.value) || 0,
    notes:             document.getElementById('shpc-notes')?.value || '',
  };
  DB_shipments.update(_shpCurrent, { customs_data: cd });
  shpRenderCustoms(DB_shipments.find(_shpCurrent));
  showToast('✅ Таможенные данные сохранены');
}

/* ── TAB: PAYMENTS ──────────────────────────────────────────────── */
// ── Payment schedule templates ───────────────────────────────────
const PAY_TEMPLATES = [
  { id:'',              label:'— выберите схему оплаты —' },
  { id:'pre100',        label:'100% предоплата (аванс)' },
  { id:'adv30_doc70',   label:'30% аванс + 70% по документам' },
  { id:'adv50_doc50',   label:'50% аванс + 50% по документам' },
  { id:'adv30_doc50_del20', label:'30% аванс + 50% по B/L + 20% по прибытии' },
  { id:'net30',         label:'100% NET 30 дней с даты B/L' },
  { id:'net60',         label:'100% NET 60 дней с даты B/L' },
  { id:'net90',         label:'100% NET 90 дней с даты B/L' },
  { id:'lc',            label:'Аккредитив (L/C)' },
];

function shpRenderPayments(s) {
  const el = document.getElementById('shpd-payments-content');
  if (!el) return;
  const pmts   = s.payments || [];
  const cur    = s.currency || 'USD';
  const total  = s.total_value || 0;
  const etd    = s.dates?.etd || '';
  const eta    = s.dates?.eta || '';

  const paid    = pmts.filter(p => p.status==='paid').reduce((a,p)=>a+(p.amount||0),0);
  const pending = pmts.filter(p => p.status!=='paid').reduce((a,p)=>a+(p.amount||0),0);
  const pct     = (paid+pending)>0 ? Math.round(paid/(paid+pending)*100) : 0;

  // Days helper
  const daysUntil = dateStr => {
    if (!dateStr) return null;
    const d = new Date(dateStr+'T00:00:00'), t = new Date(); t.setHours(0,0,0,0);
    return Math.round((d-t)/86400000);
  };
  const fmtD = d => d ? new Date(d+'T00:00:00').toLocaleDateString('ru-RU',{day:'numeric',month:'short'}) : '—';
  const pmtStatus = p => {
    if (p.status==='paid') return { cls:'#15803d', icon:'✅', label:'Оплачен' };
    const d = daysUntil(p.due);
    if (d===null) return { cls:'var(--text3)', icon:'⏳', label:'Ожидается' };
    if (d<0)  return { cls:'#dc2626', icon:'🔴', label:'Просрочен' };
    if (d<=7) return { cls:'#ea580c', icon:'🟡', label:`${d} дн.` };
    return      { cls:'var(--co-accent)', icon:'⏳', label:`${d} дн.` };
  };

  // ── Timeline ──────────────────────────────────────────────────
  const sorted = [...pmts].sort((a,b)=>(a.due||'9').localeCompare(b.due||'9'));
  const timelineHtml = sorted.length>0 && sorted.some(p=>p.due) ? (() => {
    const dates = sorted.filter(p=>p.due).map(p=>p.due);
    const minD = new Date(dates[0]+'T00:00:00');
    const maxD = new Date(dates[dates.length-1]+'T00:00:00');
    const range = Math.max((maxD-minD)/86400000, 30);
    const today = new Date(); today.setHours(0,0,0,0);
    const todayPct = Math.max(0,Math.min(100,((today-minD)/86400000/range)*100));
    return `<div style="margin:16px 0;padding:16px;background:var(--surface2);border:1px solid var(--border);border-radius:10px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:12px;font-family:'Fira Code',monospace">📅 Таймлайн платежей</div>
      <div style="position:relative;height:6px;background:var(--border);border-radius:3px;margin:20px 8px 28px">
        <div style="position:absolute;top:-5px;left:${todayPct}%;transform:translateX(-50%);width:16px;height:16px;background:var(--co-accent);border-radius:50%;border:2px solid white;z-index:2" title="Сегодня"></div>
        <div style="position:absolute;top:12px;left:${todayPct}%;transform:translateX(-50%);font-size:9px;color:var(--co-accent);font-family:'Fira Code',monospace;white-space:nowrap">сегодня</div>
        ${sorted.filter(p=>p.due).map(p=>{
          const pPct = Math.max(0,Math.min(100,((new Date(p.due+'T00:00:00')-minD)/86400000/range)*100));
          const st = pmtStatus(p);
          const col = p.status==='paid'?'#15803d':daysUntil(p.due)<0?'#dc2626':daysUntil(p.due)<=7?'#ea580c':'var(--co-accent)';
          return `<div style="position:absolute;top:-7px;left:${pPct}%;transform:translateX(-50%)" title="${p.note||''}: ${fmtD(p.due)}">
            <div style="width:20px;height:20px;border-radius:50%;background:${col};display:flex;align-items:center;justify-content:center;font-size:9px;color:white;font-weight:700;border:2px solid white;cursor:default">
              ${p.pct||'?'}%
            </div>
            <div style="position:absolute;top:24px;left:50%;transform:translateX(-50%);font-size:9px;color:var(--text3);white-space:nowrap;font-family:'Fira Code',monospace">${fmtD(p.due)}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  })() : '';

  // ── Payment cards ─────────────────────────────────────────────
  const cardsHtml = pmts.length===0
    ? '<div style="color:var(--text3);font-size:12px;padding:16px 0;text-align:center">Нет запланированных платежей</div>'
    : pmts.map((p,i)=>{
        const st = pmtStatus(p);
        const d  = daysUntil(p.due);
        return `<div style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--surface);border:1.5px solid ${p.status==='paid'?'rgba(21,128,61,0.25)':d!==null&&d<0?'rgba(220,38,38,0.25)':d!==null&&d<=7?'rgba(234,88,12,0.2)':'var(--border)'};border-radius:10px;margin-bottom:8px;transition:all 0.15s">
          <div style="width:42px;height:42px;border-radius:50%;background:${p.status==='paid'?'#f0fdf4':d!==null&&d<0?'#fef2f2':d!==null&&d<=7?'#fff7ed':'var(--surface2)'};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${st.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:12.5px;margin-bottom:2px">${p.note||'Платёж'}</div>
            <div style="font-size:10px;color:var(--text3);font-family:'Fira Code',monospace">
              Срок: <b>${fmtD(p.due)}</b>${p.status==='paid'&&p.paid?' · Оплачен: '+fmtD(p.paid):''}
              ${p.status!=='paid'&&d!==null?` · <span style="color:${st.cls};font-weight:700">${d<0?'просрочен '+Math.abs(d)+' дн.':d===0?'сегодня!':'через '+d+' дн.'}</span>`:''}
            </div>
            ${p.ppNum?`<div style="font-size:10px;color:var(--text3)">п/п ${p.ppNum}</div>`:''}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-family:'Fira Code',monospace;font-weight:800;font-size:14px;color:${st.cls}">${fmtNum(p.amount||0)} ${p.currency||cur}</div>
            ${p.pct?`<div style="font-size:10px;color:var(--text3)">${p.pct}% от суммы</div>`:''}
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="admin-action-btn" onclick="shpTogglePaid(${i})" style="${p.status==='paid'?'':'background:var(--co-accent-light);border-color:var(--co-accent);color:var(--co-accent);font-size:10px'}">
              ${p.status==='paid'?'↩':'✓ Оплачен'}
            </button>
            ${p.status==='paid'?`<input placeholder="№ п/п" value="${p.ppNum||''}" onchange="shpSetPpNum(${i},this.value)" style="width:90px;padding:3px 6px;font-size:10px;border:1px solid var(--border);border-radius:4px;font-family:'Fira Code',monospace;background:var(--surface)">`:'' }
            <button class="admin-action-btn danger" onclick="shpRemovePayment(${i})" style="font-size:10px">×</button>
          </div>
        </div>`;
      }).join('');

  el.innerHTML = `
    <!-- KPIs -->
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div style="flex:1;min-width:110px;padding:10px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:8px">
        <div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Оплачено</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;font-size:15px;color:#15803d">${fmtNum(paid)} ${cur}</div>
      </div>
      <div style="flex:1;min-width:110px;padding:10px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:8px">
        <div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">К оплате</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;font-size:15px;color:var(--co-accent)">${fmtNum(pending)} ${cur}</div>
      </div>
      <div style="flex:2;min-width:160px;padding:10px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:8px">
        <div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Прогресс оплаты</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="flex:1;height:8px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${pct===100?'#15803d':'var(--co-accent)'};border-radius:4px;transition:width 0.4s"></div>
          </div>
          <span style="font-family:'Fira Code',monospace;font-weight:800;font-size:14px">${pct}%</span>
        </div>
      </div>
    </div>

    <!-- Schedule generator -->
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;color:var(--text3);font-family:'Fira Code',monospace">📅 Схема оплаты по контракту</div>
      <div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap">
        <div style="flex:1;min-width:200px">
          <div style="font-size:10px;color:var(--text3);margin-bottom:4px">Условия оплаты</div>
          <select id="shp-pay-template" style="width:100%;padding:7px 10px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--text);font-size:12px">
            ${PAY_TEMPLATES.map(t=>`<option value="${t.id}">${t.label}</option>`).join('')}
          </select>
        </div>
        <div>
          <div style="font-size:10px;color:var(--text3);margin-bottom:4px">Сумма контракта</div>
          <div style="font-family:'Fira Code',monospace;font-weight:700;font-size:13px;padding:7px 12px;background:var(--surface);border:1px solid var(--border);border-radius:7px;color:var(--co-accent)">
            ${total?fmtNum(total)+' '+cur:'не указана'}
          </div>
        </div>
        <div>
          <div style="font-size:10px;color:var(--text3);margin-bottom:4px">ETD (дата B/L)</div>
          <div style="font-family:'Fira Code',monospace;font-size:12px;padding:7px 12px;background:var(--surface);border:1px solid var(--border);border-radius:7px;color:${etd?'var(--text)':'var(--text3)'}">
            ${etd||'не задана'}
          </div>
        </div>
        <button onclick="shpGeneratePaymentSchedule()" style="padding:8px 18px;background:var(--co-accent);color:white;border:none;border-radius:7px;cursor:pointer;font-size:12px;font-weight:700;white-space:nowrap">
          ⚡ Создать график
        </button>
        <button onclick="shpAddPaymentManual()" style="padding:8px 14px;background:transparent;color:var(--co-accent);border:1.5px solid var(--co-accent);border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;white-space:nowrap">
          + Вручную
        </button>
      </div>
      ${etd?'':total?'<div style="font-size:10px;color:var(--rust);margin-top:8px">⚠️ Укажите ETD в карточке поставки для корректного расчёта дат по документам</div>':'<div style="font-size:10px;color:var(--rust);margin-top:8px">⚠️ Укажите сумму контракта и ETD в карточке поставки</div>'}
    </div>

    <!-- Timeline -->
    ${timelineHtml}

    <!-- Payment cards -->
    ${cardsHtml}`;
}

// ── Generate payment schedule from template ───────────────────────
function shpGeneratePaymentSchedule() {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const template = document.getElementById('shp-pay-template')?.value;
  if (!template) { showToast('⚠️ Выберите схему оплаты'); return; }
  const total = s.total_value || 0;
  const cur   = s.currency   || 'USD';
  const etd   = s.dates?.etd || '';
  const today = new Date().toISOString().slice(0,10);
  if (!total) { showToast('⚠️ Укажите сумму контракта в карточке поставки'); return; }

  const addDays = (base, n) => {
    if (!base) return '';
    const d = new Date(base+'T00:00:00'); d.setDate(d.getDate()+n);
    return d.toISOString().slice(0,10);
  };
  const mkPmt = (note, pct, base, offsetDays) => ({
    id: 'pg'+Date.now()+Math.random().toString(36).slice(2,5),
    note, pct, amount: Math.round(total*pct/100*100)/100,
    currency: cur, due: addDays(base, offsetDays),
    status:'pending', paid:'', ppNum:'', generated:true
  });

  const TPLS = {
    pre100:         () => [mkPmt('100% предоплата',                   100, today, 0)],
    adv30_doc70:    () => [mkPmt('30% — аванс при подписании',          30, today, 0),
                           mkPmt('70% — по документам (B/L)',           70, etd||today, etd?5:30)],
    adv50_doc50:    () => [mkPmt('50% — аванс при подписании',          50, today, 0),
                           mkPmt('50% — по документам (B/L)',           50, etd||today, etd?5:30)],
    adv30_doc50_del20:()=>[mkPmt('30% — аванс при подписании',          30, today, 0),
                           mkPmt('50% — по документам (B/L)',           50, etd||today, etd?5:30),
                           mkPmt('20% — по прибытии товара',            20, s.dates?.eta||etd||today, 5)],
    net30:          () => [mkPmt('100% — NET 30 дней с даты B/L',      100, etd||today, 30)],
    net60:          () => [mkPmt('100% — NET 60 дней с даты B/L',      100, etd||today, 60)],
    net90:          () => [mkPmt('100% — NET 90 дней с даты B/L',      100, etd||today, 90)],
    lc:             () => [{...mkPmt('Открытие аккредитива (L/C)',       0, today, 0), amount:0, note:'Открытие аккредитива (L/C) — резервирование средств'},
                           mkPmt('Оплата по аккредитиву (по документам)',100, etd||today, etd?5:30)],
  };

  const gen = TPLS[template];
  if (!gen) return;
  const pmts = (s.payments||[]).filter(p=>!p.generated);
  const newPmts = [...pmts, ...gen()];
  DB_shipments.update(_shpCurrent, { payments: newPmts });
  shpRenderPayments(DB_shipments.find(_shpCurrent));
  showToast(`📅 График платежей создан`);
}

function shpAddPaymentManual() {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const note   = prompt('Название платежа:');       if (!note) return;
  const amount = parseFloat(prompt('Сумма:')||'0'); if (!amount) return;
  const due    = prompt('Дата срока (ГГГГ-ММ-ДД):') || '';
  const pmts   = s.payments || [];
  pmts.push({ id:'pm'+Date.now(), note, amount, currency:s.currency||'USD', due, status:'pending', paid:'', ppNum:'', pct:0 });
  DB_shipments.update(_shpCurrent, { payments: pmts });
  shpRenderPayments(DB_shipments.find(_shpCurrent));
}

function shpSetPpNum(idx, val) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const pmts = s.payments || [];
  if (pmts[idx]) { pmts[idx].ppNum = val; DB_shipments.update(_shpCurrent, { payments: pmts }); }
}

function shpTogglePaid(idx) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const pmts = s.payments || [];
  if (pmts[idx]) {
    pmts[idx].status = pmts[idx].status === 'paid' ? 'pending' : 'paid';
    if (pmts[idx].status === 'paid') pmts[idx].paid = new Date().toISOString().slice(0,10);
    else pmts[idx].paid = '';
  }
  DB_shipments.update(_shpCurrent, { payments: pmts });
  shpRenderPayments(DB_shipments.find(_shpCurrent));
}

function shpAddPayment() {
  const note   = prompt('Название платежа (напр. "30% аванс"):');
  if (!note) return;
  const amount = parseFloat(prompt('Сумма:') || '0') || 0;
  const due    = prompt('Дата оплаты (ГГГГ-ММ-ДД):') || '';
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const pmts = s.payments || [];
  pmts.push({ id: 'p' + Date.now(), type:'payment', amount, currency: s.currency||'USD', due, paid:'', status:'pending', note });
  DB_shipments.update(_shpCurrent, { payments: pmts });
  shpRenderPayments(DB_shipments.find(_shpCurrent));
  showToast('💳 Платёж добавлен');
}

function shpRemovePayment(idx) {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const pmts = s.payments || [];
  pmts.splice(idx, 1);
  DB_shipments.update(_shpCurrent, { payments: pmts });
  shpRenderPayments(DB_shipments.find(_shpCurrent));
}

/* ── ADVANCE STAGE ──────────────────────────────────────────────── */
function shpAdvanceStage() {
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;
  const stage = parseInt(s.current_stage) || 0;
  if (stage >= PIPE_STAGES.length - 1) return;
  const newStage = stage + 1;
  const newStatus = newStage >= PIPE_STAGES.length - 1 ? 'delivered'
    : newStage >= 7 ? 'customs'
    : newStage >= 5 ? 'in_transit'
    : 'active';

  const ev = {
    date: new Date().toLocaleDateString('ru-RU'),
    icon: PIPE_STAGES[newStage].icon,
    text: PIPE_STAGES[newStage].label.replace('\\n', ' '),
  };

  const events = [...(s.events || []), ev];
  DB_shipments.update(_shpCurrent, {
    current_stage: newStage,
    status: newStatus,
    events,
  });
  shpOpenDetail(_shpCurrent);   // re-render
  shpUpdateKPIs();
  showToast(`${PIPE_STAGES[newStage].icon} ${PIPE_STAGES[newStage].label.replace('\\n', ' ')}`);
}

/* ── FORM MODAL ─────────────────────────────────────────────────── */
function shpOpenForm(id) {
  const s = id ? DB_shipments.find(id) : null;

  document.getElementById('shp-f-id').value           = s?.id || '';
  document.getElementById('shp-form-title-txt').textContent = s
    ? `Редактировать: ${s.shipment_number}` : 'Новая поставка';

  document.getElementById('shp-f-num').value       = s?.shipment_number || shpGenNumber();
  document.getElementById('shp-f-company').value   = s?.company         || activeCompany || 'ENDV';
  document.getElementById('shp-f-status').value    = s?.status          || 'draft';
  document.getElementById('shp-f-inco').value      = s?.incoterms       || '';
  document.getElementById('shp-f-value').value     = s?.total_value     || '';
  document.getElementById('shp-f-currency').value  = s?.currency        || 'USD';
  document.getElementById('shp-f-mode').value         = s?.mode            || 'sea';
  document.getElementById('shp-f-from-country').value = s?.from_country   || '';
  document.getElementById('shp-f-from').value         = s?.from            || '';
  document.getElementById('shp-f-to').value           = s?.to              || '';
  document.getElementById('shp-f-stage').value     = String(s?.current_stage ?? 0);
  document.getElementById('shp-f-contract').value  = s?.contract_id     || '';
  document.getElementById('shp-f-notes').value     = s?.notes           || '';

  // Dates
  const d = s?.dates || {};
  ['payment','production','etd','eta','customs','delivery'].forEach(k => {
    const el = document.getElementById('shp-f-d-' + k);
    if (el) el.value = d[k] || '';
  });

  // Populate supplier dropdown
  const selSup = document.getElementById('shp-f-supplier');
  const selFwd = document.getElementById('shp-f-forwarder');
  const selBrk = document.getElementById('shp-f-broker');
  try {
    const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
    const suppOpts = '<option value="">— не выбран —</option>' +
      sups.filter(x => !x.type || x.type === 'supplier')
          .map(x => `<option value="${x.id}" ${String(x.id)===String(s?.supplier_id)?'selected':''}>${x.name}</option>`).join('');
    const fwdOpts = '<option value="">— не выбран —</option>' +
      sups.filter(x => x.type === 'forwarder')
          .map(x => `<option value="${x.id}" ${String(x.id)===String(s?.forwarder_id)?'selected':''}>${x.name}</option>`).join('');
    const brkOpts = '<option value="">— не выбран —</option>' +
      sups.filter(x => x.type === 'broker' || x.type === 'customs_broker')
          .map(x => `<option value="${x.id}" ${String(x.id)===String(s?.broker_id)?'selected':''}>${x.name}</option>`).join('');
    if (selSup) selSup.innerHTML = suppOpts;
    if (selFwd) selFwd.innerHTML = fwdOpts;
    if (selBrk) selBrk.innerHTML = brkOpts;
  } catch(e) {}

  // Populate contracts datalist
  try {
    const cts = JSON.parse(localStorage.getItem('ved_contracts') || '[]');
    const dl  = document.getElementById('shp-contracts-list');
    if (dl) dl.innerHTML = cts.map(ct => `<option value="${ct.num}">`).join('');
  } catch(e) {}

  document.getElementById('shp-form-bg').classList.add('open');
  document.getElementById('shp-f-num').focus();
}

function shpCloseForm() {
  document.getElementById('shp-form-bg').classList.remove('open');
}

function shpSave() {
  const num = document.getElementById('shp-f-num').value.trim();
  if (!num) { alert('Укажите номер поставки'); return; }

  const id = document.getElementById('shp-f-id').value;
  const data = {
    shipment_number: num,
    company:     document.getElementById('shp-f-company').value,
    status:      document.getElementById('shp-f-status').value,
    supplier_id: document.getElementById('shp-f-supplier').value || '',
    contract_id: document.getElementById('shp-f-contract').value.trim(),
    incoterms:   document.getElementById('shp-f-inco').value,
    total_value: parseFloat(document.getElementById('shp-f-value').value) || 0,
    currency:    document.getElementById('shp-f-currency').value,
    mode:         document.getElementById('shp-f-mode').value,
    from_country: document.getElementById('shp-f-from-country').value,
    from:         document.getElementById('shp-f-from').value.trim(),
    to:           document.getElementById('shp-f-to').value.trim(),
    forwarder_id:document.getElementById('shp-f-forwarder').value || '',
    broker_id:   document.getElementById('shp-f-broker').value    || '',
    current_stage: parseInt(document.getElementById('shp-f-stage').value) || 0,
    notes:       document.getElementById('shp-f-notes').value.trim(),
    dates: {
      payment:    document.getElementById('shp-f-d-payment').value,
      production: document.getElementById('shp-f-d-production').value,
      etd:        document.getElementById('shp-f-d-etd').value,
      eta:        document.getElementById('shp-f-d-eta').value,
      customs:    document.getElementById('shp-f-d-customs').value,
      delivery:   document.getElementById('shp-f-d-delivery').value,
    },
  };

  if (id) {
    DB_shipments.update(id, data);
    showToast('✅ Поставка обновлена');
  } else {
    DB_shipments.insert({ ...data, items:[], docs: SHP_DOCS_LIST.map(d=>({id:d.id, name:d.name, icon:d.icon, status:'none', received:false})), customs_data:{}, payments:[], events:[{date:new Date().toLocaleDateString('ru-RU'), icon:'📄', text:'Поставка создана в системе', note:num}] });
    showToast('✅ Поставка создана');
  }

  shpCloseForm();
  shpLoad();
  if (_shpCurrent) shpOpenDetail(_shpCurrent);
}

function shpGenNumber() {
  const co  = activeCompany || 'ENDV';
  const yr  = new Date().getFullYear();
  // Count only shipments belonging to this company to avoid cross-company gaps
  const all = DB_shipments.all().filter(s => (s.company || 'ENDV') === co);
  const cnt = all.filter(s => (s.shipment_number||'').startsWith(co+yr)).length + 1;
  return `${co}${yr}-${String(cnt).padStart(3,'0')}`;
}

function shpDelete(id) {
  DB_shipments.delete(id);
  shpLoad();
  showToast('🗑 Поставка удалена');
}

function shpEditCurrent() {
  if (_shpCurrent) shpOpenForm(_shpCurrent);
}

function shpDeleteCurrent() {
  if (!_shpCurrent) return;
  if (!confirm('Удалить поставку безвозвратно? Для сохранения истории используйте «В архив».')) return;
  DB_shipments.delete(_shpCurrent);
  shpCloseDetail();
  shpLoad();
  showToast('🗑 Поставка удалена');
}

function shpArchiveCurrent() {
  if (!_shpCurrent) return;
  const s = DB_shipments.find(_shpCurrent);
  if (!s) return;

  if (s.status === 'archived') {
    // Unarchive
    s.status = 'delivered';
    delete s.archived_at;
    shipmentsSyncToDB(s);
    shipmentsSave();
    shpOpenDetail(_shpCurrent);
    shpLoad();
    showToast('↩ Поставка восстановлена из архива');
    return;
  }

  // — Шлюз: проверяем наличие сканов обязательных документов —
  const docGroups = buildDocSet(s);
  const reqDefs   = docGroups.flatMap(g => g.docs).filter(d => d.required);
  const missingScan = reqDefs.filter(def => {
    const doc = (s.docs || []).find(d => d.id === def.id);
    return !doc || !doc.files || doc.files.length === 0;
  });
  if (missingScan.length > 0) {
    const names = missingScan.map(d => `• ${d.icon} ${d.name.split(' / ')[0]}`).join('\n');
    const proceed = confirm(
      `⚠️ Не загружены сканы обязательных документов:\n${names}\n\nАрхивировать без сканов?\n(Рекомендуется сначала загрузить все сканы)`
    );
    if (!proceed) return;
  }

  // Ask for DT date (дата выпуска ТД)
  const dtDateStr = prompt(
    'Укажите дату выпуска таможенной декларации (ДТ):\n(формат: ГГГГ-ММ-ДД, например ' + new Date().toISOString().slice(0,10) + ')\n\nСрок хранения ПТК = 5 лет с даты выпуска ДТ (ст. 98 ТК ЕАЭС)',
    s.ptk_date || s.dates?.customs_done || new Date().toISOString().slice(0, 10)
  );
  if (dtDateStr === null) return; // cancelled

  const dtDate = dtDateStr.trim() || new Date().toISOString().slice(0, 10);
  const retentionDate = new Date(dtDate + 'T00:00:00');
  retentionDate.setFullYear(retentionDate.getFullYear() + 5);
  const retentionStr = retentionDate.toISOString().slice(0, 10);

  s.status              = 'archived';
  s.archived_at         = new Date().toISOString().slice(0, 10);
  s.ptk_date            = dtDate;
  s.ptk_retention_until = retentionStr;

  shipmentsSyncToDB(s);
  shipmentsSave();
  shpOpenDetail(_shpCurrent);
  shpLoad();
  showToast(`📁 Поставка архивирована · ПТК хранить до ${retentionStr.split('-').reverse().join('.')}`);
}


/* ╔═══════════════════════════════════════════════════════════════════════
   ║  ЭТАП 9 — DOCUMENT ↔ SHIPMENT LINKAGE
   ║  Связь документов (Invoice, PackingList, LogisticsRFQ, CustomsCalc)
   ║  с центральным объектом Поставка (DB_shipments).
   ║  Поле shipment_id добавлено во все 4 таблицы.
   ║  Старые записи (shipment_id = '') продолжают работать без изменений.
   ╚═══════════════════════════════════════════════════════════════════════ */

/* ── Shared helper: show shipment banner in a section ───────────────── */
function _docSetShipmentBanner(barId, textId, hiddenId, shipId) {
  const bar  = document.getElementById(barId);
  const txt  = document.getElementById(textId);
  const hid  = document.getElementById(hiddenId);
  if (!bar || !txt || !hid) return;

  if (!shipId) {
    bar.style.display = 'none';
    hid.value = '';
    return;
  }

  hid.value = String(shipId);
  const s   = DB_shipments.find(String(shipId));
  if (s) {
    txt.textContent = `${s.shipment_number} · ${s.contract_id || ''} · ${s.incoterms || ''} · ${s.total_value ? fmtNum(s.total_value)+' '+(s.currency||'') : ''}`.replace(/· ·/g,'·').replace(/·\s*$/,'').trim();
    bar.style.display = 'flex';
  } else {
    bar.style.display = 'none';
    hid.value = '';
  }
}

/* ── Shared: build shipment selector modal (reusable) ────────────────── */
function _openShipmentPicker(callback) {
  const ships = DB_shipments.all().filter(s => s.status !== 'cancelled' && (s.company || 'ENDV') === activeCompany);
  if (ships.length === 0) {
    alert('Нет активных поставок. Создайте поставку в разделе «Поставки» (пункт 16).');
    return;
  }

  // Build a simple overlay picker
  let overlay = document.getElementById('_shp-picker-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = '_shp-picker-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(10,14,23,.75);z-index:3000;display:flex;align-items:center;justify-content:center';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);
                width:600px;max-width:96vw;max-height:80vh;display:flex;flex-direction:column;
                box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden">
      <div style="padding:16px 22px;border-bottom:1px solid var(--border);background:var(--surface2);
                  display:flex;align-items:center;gap:12px">
        <span style="font-size:18px">🚢</span>
        <div>
          <div style="font-weight:800;font-size:14px">Выберите поставку</div>
          <div style="font-size:11px;color:var(--text3)">Документ будет связан с выбранной поставкой</div>
        </div>
        <button onclick="document.getElementById('_shp-picker-overlay').remove()"
                style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--text3);font-size:18px">✕</button>
      </div>
      <div style="overflow-y:auto;flex:1">
        ${ships.map(s => {
          const st = (typeof SHP_STATUSES !== 'undefined' ? SHP_STATUSES[s.status] : null) || { icon:'🔵', label:s.status };
          return `<div onclick="_shpPickerSelect('${s.id}')" style="padding:12px 22px;border-bottom:1px solid var(--border);
                      cursor:pointer;transition:background .1s;display:flex;gap:12px;align-items:center"
                  onmouseover="this.style.background='var(--co-accent-light)'"
                  onmouseout="this.style.background=''">
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;font-family:'JetBrains Mono',monospace;font-size:12px;
                          color:var(--co-accent)">${s.shipment_number || '—'}</div>
              <div style="font-size:12px;color:var(--text2);margin-top:2px">
                ${s.contract_id ? s.contract_id+' · ' : ''}${s.incoterms || ''}
                ${s.total_value ? ' · '+fmtNum(s.total_value)+' '+(s.currency||'') : ''}
              </div>
            </div>
            <span style="font-size:11px;padding:2px 8px;border-radius:10px;white-space:nowrap;
                         background:var(--surface2);color:var(--text3)">${st.icon} ${st.label}</span>
          </div>`;
        }).join('')}
        <div onclick="_shpPickerSelect('')" style="padding:12px 22px;border-top:2px solid var(--border);
             cursor:pointer;font-size:12px;color:var(--text3);text-align:center"
             onmouseover="this.style.background='var(--surface2)'"
             onmouseout="this.style.background=''">
          ✕ Без поставки (сохранить без привязки)
        </div>
      </div>
    </div>`;

  window._shpPickerCallback = callback;
  overlay.style.display = 'flex';
}

function _shpPickerSelect(id) {
  const overlay = document.getElementById('_shp-picker-overlay');
  if (overlay) overlay.remove();
  if (typeof window._shpPickerCallback === 'function') {
    window._shpPickerCallback(id || '');
  }
}

/* ══════════════════════════════════════════════════════════════════
   INVOICE  (section-invoice)
══════════════════════════════════════════════════════════════════ */

function invLinkShipment() {
  _openShipmentPicker(id => {
    document.getElementById('inv-shipment-id').value = id;
    _docSetShipmentBanner('inv-shipment-bar', 'inv-shipment-bar-text', 'inv-shipment-id', id);
  });
}

function invUnlinkShipment() {
  _docSetShipmentBanner('inv-shipment-bar', 'inv-shipment-bar-text', 'inv-shipment-id', '');
}

function invSaveToDb() {
  const num  = document.getElementById('i-num')?.value.trim();
  const date = document.getElementById('i-date')?.value;
  if (!num) { alert('Сначала заполните номер инвойса и нажмите «Сформировать»'); return; }

  const shipId = document.getElementById('inv-shipment-id')?.value || '';

  // Check if already saved (by num)
  const existing = DB_invoices.where(x => x.num === num);

  const data = {
    num,
    date,
    shipment_id:  shipId,
    exporter:     document.getElementById('i-exporter')?.value  || '',
    consignee:    document.getElementById('i-consignee')?.value || '',
    pol:          document.getElementById('i-pol')?.value       || '',
    pod:          document.getElementById('i-pod')?.value       || '',
    origin:       document.getElementById('i-origin')?.value    || '',
    dest:         document.getElementById('i-dest')?.value      || '',
    hs_code:      document.getElementById('i-hs')?.value        || '',
    rows:         (typeof invRows !== 'undefined') ? JSON.parse(JSON.stringify(invRows)) : [],
    total:        (typeof invRows !== 'undefined')
                    ? invRows.reduce((s,r) => s+(r.qty||0)*(r.price||0), 0) : 0,
    saved_at:     new Date().toISOString(),
  };

  if (existing.length > 0) {
    DB_invoices.update(existing[0].id, data);
    showToast('✅ Инвойс обновлён');
  } else {
    DB_invoices.insert(data);
    showToast('✅ Инвойс сохранён в системе');
  }

  // If linked to shipment — add to shipment docs log
  if (shipId) _docLogToShipment(shipId, 'invoice', `Инвойс ${num}`);
}

/* ── Autofill invoice from shipment ────────────────────────────── */
function invFillFromShipment(shipId) {
  const s = DB_shipments.find(String(shipId));
  if (!s) return;

  document.getElementById('inv-shipment-id').value = String(shipId);
  _docSetShipmentBanner('inv-shipment-bar', 'inv-shipment-bar-text', 'inv-shipment-id', shipId);

  // Pre-fill key fields from shipment
  if (s.contract_id) {
    const numEl = document.getElementById('i-num');
    if (numEl && !numEl.value) numEl.value = s.contract_id + '/INV-01';
  }
  if (s.from) { const el = document.getElementById('i-pol'); if (el && !el.value) el.value = s.from; }
  if (s.to)   { const el = document.getElementById('i-pod'); if (el && !el.value) el.value = s.to; }

  // Fill rows from shipment items if invRows is empty
  if (typeof invRows !== 'undefined' && !invRows.some(r => r.desc)) {
    const items = s.items || [];
    items.forEach(it => {
      invRows.push({ desc: it.name || '', unit: it.unit || 'Pcs', qty: it.qty || 0, price: it.price || 0 });
    });
    if (typeof renderInvTable === 'function') renderInvTable();
  }

  showToast(`🚢 Инвойс связан с поставкой ${s.shipment_number}`);
}

/* ══════════════════════════════════════════════════════════════════
   PACKING LIST  (section-packing)
══════════════════════════════════════════════════════════════════ */

function plLinkShipment() {
  _openShipmentPicker(id => {
    document.getElementById('pl-shipment-id').value = id;
    _docSetShipmentBanner('pl-shipment-bar', 'pl-shipment-bar-text', 'pl-shipment-id', id);
  });
}

function plUnlinkShipment() {
  _docSetShipmentBanner('pl-shipment-bar', 'pl-shipment-bar-text', 'pl-shipment-id', '');
}

function plSaveToDb() {
  const num  = document.getElementById('pl-num')?.value.trim();
  const date = document.getElementById('pl-date')?.value;
  if (!num) { alert('Сначала заполните номер упаковочного листа'); return; }

  const shipId = document.getElementById('pl-shipment-id')?.value || '';
  const existing = DB_packing_lists.where(x => x.num === num);

  const data = {
    num, date,
    shipment_id: shipId,
    inv_ref:     document.getElementById('pl-inv-ref')?.value  || '',
    shipper:     document.getElementById('pl-shipper')?.value  || '',
    consignee:   document.getElementById('pl-consignee')?.value|| '',
    pol:         document.getElementById('pl-pol')?.value      || '',
    pod:         document.getElementById('pl-pod')?.value      || '',
    inco:        document.getElementById('pl-inco')?.value     || '',
    mode:        document.getElementById('pl-mode')?.value     || '',
    hs_code:     document.getElementById('pl-hs')?.value       || '',
    rows:        (typeof plRows !== 'undefined') ? JSON.parse(JSON.stringify(plRows)) : [],
    saved_at:    new Date().toISOString(),
  };

  if (existing.length > 0) {
    DB_packing_lists.update(existing[0].id, data);
    showToast('✅ Упаковочный лист обновлён');
  } else {
    DB_packing_lists.insert(data);
    showToast('✅ Упаковочный лист сохранён');
  }

  if (shipId) _docLogToShipment(shipId, 'packing_list', `Упаковочный лист ${num}`);
}

function plFillFromShipment(shipId) {
  const s = DB_shipments.find(String(shipId));
  if (!s) return;

  document.getElementById('pl-shipment-id').value = String(shipId);
  _docSetShipmentBanner('pl-shipment-bar', 'pl-shipment-bar-text', 'pl-shipment-id', shipId);

  if (s.from) { const el = document.getElementById('pl-pol'); if (el && !el.value) el.value = s.from; }
  if (s.to)   { const el = document.getElementById('pl-pod'); if (el && !el.value) el.value = s.to; }
  if (s.incoterms){ const el = document.getElementById('pl-inco'); if (el && !el.value) el.value = s.incoterms; }
  if (s.mode)     { const el = document.getElementById('pl-mode'); if (el && !el.value) el.value = s.mode; }

  if (s.contract_id) {
    const numEl = document.getElementById('pl-num');
    if (numEl && !numEl.value) numEl.value = s.contract_id + '/PL-01';
  }

  // Fill rows from shipment items if empty
  if (typeof plRows !== 'undefined' && plRows.length === 0) {
    (s.items || []).forEach(it => {
      plRows.push({ desc: it.name||'', hs: it.hs_code||'', qty: it.qty||0, unit:'Pcs', net: it.weight||0, gross: (it.weight||0)*1.1, vol: it.volume||0, pkgs: 1, pkg_type:'Carton', marks:'' });
    });
    if (typeof plRenderTable === 'function') plRenderTable();
  }

  showToast(`🚢 Упаковочный лист связан с поставкой ${s.shipment_number}`);
}

/* ══════════════════════════════════════════════════════════════════
   LOGISTICS REQUEST / RFQ-FREIGHT  (section-rfq)
══════════════════════════════════════════════════════════════════ */

function rfqFreightLinkShipment() {
  _openShipmentPicker(id => {
    document.getElementById('rfq-shipment-id').value = id;
    _docSetShipmentBanner('rfq-shipment-bar', 'rfq-shipment-bar-text', 'rfq-shipment-id', id);
  });
}

function rfqFreightUnlinkShipment() {
  _docSetShipmentBanner('rfq-shipment-bar', 'rfq-shipment-bar-text', 'rfq-shipment-id', '');
}

function rfqFreightSaveToDb() {
  const cargo  = document.getElementById('rfq-cargo')?.value.trim();
  if (!cargo) { alert('Укажите груз / название товара'); return; }

  const shipId  = document.getElementById('rfq-shipment-id')?.value || '';
  const docDate = new Date().toISOString().slice(0,10);
  const docNum  = 'RFQ-' + docDate.replace(/-/g,'') + '-' + String(Date.now()).slice(-4);

  const data = {
    num:         docNum,
    date:        docDate,
    shipment_id: shipId,
    cargo,
    weight:      document.getElementById('rfq-weight')?.value  || '',
    volume:      document.getElementById('rfq-vol')?.value     || '',
    pkgs:        document.getElementById('rfq-pkgs')?.value    || '',
    origin:      document.getElementById('rfq-origin')?.value  || '',
    dest:        document.getElementById('rfq-dest')?.value    || '',
    inco:        document.getElementById('rfq-inco')?.value    || '',
    mode:        document.getElementById('rfq-mode')?.value    || '',
    etd:         document.getElementById('rfq-etd')?.value     || '',
    eta:         document.getElementById('rfq-eta')?.value     || '',
    value:       document.getElementById('rfq-value')?.value   || '',
    notes:       document.getElementById('rfq-notes')?.value   || '',
    from_company:document.getElementById('rfq-from-company')?.value || '',
    saved_at:    new Date().toISOString(),
  };

  DB_logistics_requests.insert(data);
  showToast(`✅ Запрос экспедитору сохранён${shipId ? ' и привязан к поставке' : ''}`);

  if (shipId) _docLogToShipment(shipId, 'logistics_request', `Запрос экспедитору ${docNum}`);
}

function rfqFreightFillFromShipment(shipId) {
  const s = DB_shipments.find(String(shipId));
  if (!s) return;

  document.getElementById('rfq-shipment-id').value = String(shipId);
  _docSetShipmentBanner('rfq-shipment-bar', 'rfq-shipment-bar-text', 'rfq-shipment-id', shipId);

  if (s.from) { const el = document.getElementById('rfq-origin'); if (el && !el.value) el.value = s.from; }
  if (s.to)   { const el = document.getElementById('rfq-dest');   if (el && !el.value) el.value = s.to; }
  if (s.incoterms) { const el = document.getElementById('rfq-inco'); if (el && !el.value) el.value = s.incoterms; }
  if (s.mode)      { const el = document.getElementById('rfq-mode'); if (el && !el.value) el.value = s.mode; }
  if (s.dates?.etd){ const el = document.getElementById('rfq-etd');  if (el && !el.value) el.value = s.dates.etd; }
  if (s.dates?.eta){ const el = document.getElementById('rfq-eta');  if (el && !el.value) el.value = s.dates.eta; }

  // Fill cargo from shipment items
  const cargoEl = document.getElementById('rfq-cargo');
  if (cargoEl && !cargoEl.value && s.items?.length) {
    cargoEl.value = s.items.map(it => `${it.name} (${it.qty} ${it.unit})`).join('; ');
  }

  showToast(`🚢 Запрос экспедитору связан с поставкой ${s.shipment_number}`);
}

/* ══════════════════════════════════════════════════════════════════
   CUSTOMS CALC  (section-calc)
══════════════════════════════════════════════════════════════════ */

function calcLinkShipment() {
  _openShipmentPicker(id => {
    document.getElementById('calc-shipment-id').value = id;
    _docSetShipmentBanner('calc-shipment-bar', 'calc-shipment-bar-text', 'calc-shipment-id', id);
  });
}

function calcUnlinkShipment() {
  _docSetShipmentBanner('calc-shipment-bar', 'calc-shipment-bar-text', 'calc-shipment-id', '');
}

function calcSaveToDb() {
  const tnved = document.getElementById('cc-tnved')?.value.trim();
  if (!tnved) { alert('Введите код ТН ВЭД перед сохранением'); return; }

  const shipId = document.getElementById('calc-shipment-id')?.value || '';

  // Try to collect result values from calc results area
  const getResultVal = (id) => {
    const el = document.getElementById(id);
    return el ? (el.textContent || el.value || '').trim() : '';
  };

  const data = {
    date:        new Date().toISOString().slice(0,10),
    shipment_id: shipId,
    tnved,
    country:     document.getElementById('cc-country')?.value      || '',
    customs_val: document.getElementById('cc-customs-val')?.value  || '',
    currency:    document.getElementById('cc-currency')?.value     || 'USD',
    weight:      document.getElementById('cc-weight')?.value       || '',
    // Result fields from calc output
    duty_rate:   getResultVal('cc-result-duty-rate'),
    duty_amount: getResultVal('cc-result-duty'),
    vat_amount:  getResultVal('cc-result-vat'),
    fees:        getResultVal('cc-result-fees'),
    total:       getResultVal('cc-result-total'),
    saved_at:    new Date().toISOString(),
  };

  const existing = shipId
    ? DB_customs_calcs.where(x => x.shipment_id === String(shipId) && x.tnved === tnved)
    : [];

  if (existing.length > 0) {
    DB_customs_calcs.update(existing[0].id, data);
    showToast('✅ Расчёт таможни обновлён');
  } else {
    DB_customs_calcs.insert(data);
    showToast('✅ Расчёт таможни сохранён');
  }

  if (shipId) {
    _docLogToShipment(shipId, 'customs_calc', `Расчёт таможни ТН ВЭД ${tnved}`);
    // Also update shipment customs_data with calc results
    const s = DB_shipments.find(String(shipId));
    if (s) {
      const cd = s.customs_data || {};
      if (!cd.declaration_num) cd.tnved = tnved;
      DB_shipments.update(String(shipId), { customs_data: { ...cd,
        duty_rate: parseFloat(data.duty_rate) || cd.duty_rate,
        duty_amount: parseFloat(data.duty_amount) || cd.duty_amount,
        vat_amount:  parseFloat(data.vat_amount)  || cd.vat_amount,
        customs_fees:parseFloat(data.fees)         || cd.customs_fees,
      }});
    }
  }
}

function calcFillFromShipment(shipId) {
  const s = DB_shipments.find(String(shipId));
  if (!s) return;

  document.getElementById('calc-shipment-id').value = String(shipId);
  _docSetShipmentBanner('calc-shipment-bar', 'calc-shipment-bar-text', 'calc-shipment-id', shipId);

  // Fill ТН ВЭД from first item
  if (s.items?.[0]?.hs_code) {
    const el = document.getElementById('cc-tnved');
    if (el && !el.value) el.value = s.items[0].hs_code.replace(/[^0-9]/g, '').slice(0,10);
  }
  if (s.currency) {
    const el = document.getElementById('cc-currency');
    if (el) el.value = s.currency;
  }
  if (s.total_value) {
    const el = document.getElementById('cc-customs-val');
    if (el && !el.value) el.value = s.total_value;
  }

  showToast(`🚢 Расчёт таможни связан с поставкой ${s.shipment_number}`);
}

/* ── Internal: add event to shipment log when doc is saved ──────── */
function _docLogToShipment(shipId, docType, docLabel) {
  const s = DB_shipments.find(String(shipId));
  if (!s) return;

  const docIcons = {
    invoice:          '📄',
    packing_list:     '📦',
    logistics_request:'🚢',
    customs_calc:     '🛃',
  };

  const events  = [...(s.events || [])];
  const already = events.some(e => e.doc_type === docType && e.doc_label === docLabel);
  if (already) return;   // don't double-log

  events.push({
    date:      new Date().toLocaleDateString('ru-RU'),
    icon:      docIcons[docType] || '📋',
    text:      `Документ сохранён: ${docLabel}`,
    doc_type:  docType,
    doc_label: docLabel,
  });
  DB_shipments.update(String(shipId), { events });
}

/* ═══════════════════════════════════════════════════════════════════
   SHIPMENT DETAIL — enhanced DOCS TAB with linked documents
═══════════════════════════════════════════════════════════════════ */

/* Override shpRenderDocs to add linked documents section.
   NB: base checklist lives in _shpRenderDocs_base (renamed original).
   Не захватываем shpRenderDocs в переменную — из-за хойстинга function-объявлений
   это указывало бы на саму себя и давало бесконечную рекурсию. */
function shpRenderDocs(s) {
  _shpRenderDocs_base(s);   // render original checklist

  const sid  = String(s.id);
  const el   = document.getElementById('shpd-docs-content');
  if (!el) return;

  // Find all saved docs linked to this shipment
  const invs  = DB_invoices.where(x => x.shipment_id === sid);
  const pls   = DB_packing_lists.where(x => x.shipment_id === sid);
  const lrs   = DB_logistics_requests.where(x => x.shipment_id === sid);
  const ccs   = DB_customs_calcs.where(x => x.shipment_id === sid);

  const hasLinked = invs.length + pls.length + lrs.length + ccs.length > 0;

  const linkedHTML = `
    <div style="margin-top:22px;border-top:2px solid var(--border);padding-top:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="font-weight:800;font-size:13px">📎 Сохранённые документы (${invs.length+pls.length+lrs.length+ccs.length})</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="admin-action-btn" onclick="shpCreateDocFrom('invoice','${sid}')">+ Инвойс</button>
          <button class="admin-action-btn" onclick="shpCreateDocFrom('packing','${sid}')">+ Упаковочный лист</button>
          <button class="admin-action-btn" onclick="shpCreateDocFrom('rfq','${sid}')">+ Запрос экспедитору</button>
          <button class="admin-action-btn" onclick="shpCreateDocFrom('calc','${sid}')">+ Расчёт таможни</button>
        </div>
      </div>

      ${!hasLinked ? `<div style="color:var(--text3);font-size:12px;padding:8px 0">
        Нет сохранённых документов. Откройте нужный раздел, заполните и нажмите «💾 Сохранить в систему».
        Или используйте кнопки выше для создания документа с автозаполнением из этой поставки.
      </div>` : ''}

      ${invs.map(d => _shpDocRow('📄', `Инвойс ${d.num}`, d.date, d.total ? fmtNum(d.total) : '', 'invoice', d.id, sid)).join('')}
      ${pls.map(d  => _shpDocRow('📦', `Упаковочный лист ${d.num}`, d.date, '', 'packing_list', d.id, sid)).join('')}
      ${lrs.map(d  => _shpDocRow('🚢', `Запрос экспедитору ${d.num}`, d.date, d.origin ? d.origin+'→'+d.dest : '', 'logistics_request', d.id, sid)).join('')}
      ${ccs.map(d  => _shpDocRow('🛃', `Расчёт таможни ${d.tnved}`, d.date, d.total || '', 'customs_calc', d.id, sid)).join('')}
    </div>`;

  el.innerHTML += linkedHTML;
}

function _shpDocRow(icon, label, date, meta, type, docId, shipId) {
  return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;
                      border-bottom:1px solid var(--border)">
    <span style="font-size:16px">${icon}</span>
    <div style="flex:1">
      <div style="font-weight:600;font-size:12.5px">${label}</div>
      <div style="font-size:11px;color:var(--text3)">${date || ''}${meta?' · '+meta:''}</div>
    </div>
    <button class="admin-action-btn danger" onclick="shpUnlinkDoc('${type}','${docId}','${shipId}')"
            title="Удалить привязку">×</button>
  </div>`;
}

/* Open a section pre-filled with shipment data ──────────────────── */
function shpCreateDocFrom(docType, shipId) {
  shpCloseDetail();

  if (docType === 'invoice') {
    showSection('invoice');
    setTimeout(() => invFillFromShipment(shipId), 100);
  } else if (docType === 'packing') {
    showSection('packing');
    setTimeout(() => plFillFromShipment(shipId), 100);
  } else if (docType === 'rfq') {
    showSection('rfq');
    setTimeout(() => rfqFreightFillFromShipment(shipId), 100);
  } else if (docType === 'calc') {
    showSection('calc');
    setTimeout(() => calcFillFromShipment(shipId), 100);
  }
}

/* Unlink a document from shipment ──────────────────────────────── */
function shpUnlinkDoc(type, docId, shipId) {
  if (!confirm('Удалить привязку документа к поставке?')) return;
  const tables = {
    invoice: DB_invoices, packing_list: DB_packing_lists,
    logistics_request: DB_logistics_requests, customs_calc: DB_customs_calcs,
  };
  const tbl = tables[type];
  if (tbl) tbl.update(docId, { shipment_id: '' });
  // Re-render docs tab
  const s = DB_shipments.find(shipId);
  if (s) shpRenderDocs(s);
  showToast('🔗 Привязка удалена');
}

/* ── Backward compat: add "Привязать к поставке" buttons ───────── */
/* Called once after DOM ready to inject link buttons in each section header */
function _docLinkButtonsInit() {
  const sections = [
    { sec:'invoice', fn:'invLinkShipment',        label:'🚢 Привязать к поставке' },
    { sec:'packing', fn:'plLinkShipment',          label:'🚢 Привязать к поставке' },
    { sec:'rfq',     fn:'rfqFreightLinkShipment',  label:'🚢 Привязать к поставке' },
    { sec:'calc',    fn:'calcLinkShipment',         label:'🚢 Привязать к поставке' },
  ];

  sections.forEach(({ sec, fn, label }) => {
    const titleEl = document.querySelector(`#section-${sec} .section-title`);
    if (!titleEl) return;
    // Add button only once
    if (titleEl.nextElementSibling?.classList?.contains('doc-link-btn-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'doc-link-btn-wrap';
    wrap.style.cssText = 'margin-bottom:12px';
    wrap.innerHTML = `<button onclick="${fn}()" style="font-size:11.5px;padding:5px 14px;
      border:1.5px solid var(--co-accent-border);background:var(--co-accent-light);
      color:var(--co-accent);border-radius:var(--radius-sm);cursor:pointer;font-weight:600;
      font-family:'Plus Jakarta Sans',sans-serif">${label}</button>`;
    titleEl.insertAdjacentElement('afterend', wrap);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(_docLinkButtonsInit, 300);
});


/* ╔═══════════════════════════════════════════════════════════════════
   ║  ЭТАП 10 — SHIPMENTS TRACKING (shipments_tracking table)
   ║  Таблица: DB_shipments_tracking
   ║  Поля: shipment_id, status, location, event_date, comment
   ║  Вкладка «📍 Отслеживание» в карточке поставки
   ╚═══════════════════════════════════════════════════════════════════ */

/* ── Tracking status dictionary ────────────────────────────────── */
const TRK_STATUSES = {
  departed:   { label: 'Отправлено',       icon: '🚀', cls: 'trk-s-departed',   dot: 'info'      },
  in_transit: { label: 'В пути',           icon: '🚢', cls: 'trk-s-in_transit', dot: 'latest'    },
  at_port:    { label: 'В порту',          icon: '⚓', cls: 'trk-s-at_port',    dot: 'warning'   },
  arrived:    { label: 'Прибыло',          icon: '✅', cls: 'trk-s-arrived',    dot: 'milestone' },
  customs:    { label: 'На таможне',       icon: '🛃', cls: 'trk-s-customs',    dot: 'warning'   },
  delivered:  { label: 'Доставлено',       icon: '🏠', cls: 'trk-s-delivered',  dot: 'milestone' },
  delayed:    { label: 'Задержка',         icon: '⚠️', cls: 'trk-s-delayed',    dot: 'warning'   },
  on_hold:    { label: 'На удержании',     icon: '⏸', cls: 'trk-s-on_hold',    dot: 'info'      },
  other:      { label: 'Прочее',           icon: '📝', cls: 'trk-s-other',      dot: ''          },
};

/* ── Seed demo tracking events for existing demo shipments ──────── */
function trkSeed() {
  if (localStorage.getItem('_trk_seeded_v1')) return;
  localStorage.setItem('_trk_seeded_v1', '1');
  if (DB_shipments_tracking.count() > 0) return;
  try {
    // Find demo shipment ENDV2026-001
    const ships = DB_shipments.all();
    const s1 = ships.find(s => s.shipment_number === 'ENDV2026-001');
    const s2 = ships.find(s => s.shipment_number === 'ENDV2026-002');

    if (s1) {
      [
        { shipment_id: String(s1.id), status: 'departed',   location: 'Nhava Sheva, India',         event_date: '2026-03-01', comment: 'Погрузка на судно завершена. Коносамент получен. Vessel: MSC MAYA, Voyage: 618E.' },
        { shipment_id: String(s1.id), status: 'at_port',    location: 'Port Said, Egypt',            event_date: '2026-03-09', comment: 'Прохождение Суэцкого канала. Транзит без задержек.' },
        { shipment_id: String(s1.id), status: 'in_transit', location: 'Средиземное море',            event_date: '2026-03-14', comment: 'Судно в Средиземном море. Расчётное прибытие в Санкт-Петербург 10 апреля.' },
      ].forEach(ev => DB_shipments_tracking.insert(ev));
    }
    if (s2) {
      [
        { shipment_id: String(s2.id), status: 'other', location: 'Mumbai, India', event_date: '2026-03-08', comment: 'Контракт подписан. Производственный заказ размещён у поставщика.' },
      ].forEach(ev => DB_shipments_tracking.insert(ev));
    }
  } catch (e) { console.warn('trkSeed error:', e); }
}

/* ── Main render ─────────────────────────────────────────────────── */
function shpRenderTracking(s) {
  trkSeed();

  const el = document.getElementById('shpd-tracking-content');
  if (!el) return;

  const sid    = String(s.id);
  const events = DB_shipments_tracking
    .where(x => x.shipment_id === sid)
    .sort((a, b) => (b.event_date || '').localeCompare(a.event_date || ''));

  // ── Route summary strip ──────────────────────────────────────────
  const routeHTML = (s.from || s.to) ? `
    <div class="trk-map-strip">
      <span style="font-size:20px">🗺</span>
      <div>
        <div style="font-weight:700;font-size:12px;color:var(--text2)">
          ${s.from || '—'} → ${s.to || '—'}
        </div>
        <div style="font-size:11px;margin-top:1px">
          ${s.incoterms ? `<b>${s.incoterms}</b> · ` : ''}
          ${{sea:'🚢 Морской',air:'✈ Авиа',rail:'🚂 ЖД',road:'🚛 Авто',multi:'🔄 Мульти'}[s.mode]||''}
          ${s.dates?.etd ? ` · ETD: <b>${s.dates.etd}</b>` : ''}
          ${s.dates?.eta ? ` · ETA: <b>${s.dates.eta}</b>` : ''}
        </div>
      </div>
    </div>` : '';

  // ── KPI row ──────────────────────────────────────────────────────
  const latestEvt = events[0];
  const daysElapsed = latestEvt?.event_date
    ? Math.round((Date.now() - new Date(latestEvt.event_date)) / 86400000)
    : null;

  const kpiHTML = `
    <div style="display:flex;gap:12px;margin-bottom:18px;flex-wrap:wrap">
      ${[
        { lbl:'Событий всего',   val: events.length },
        { lbl:'Последнее',       val: latestEvt ? (TRK_STATUSES[latestEvt.status]?.label || latestEvt.status) : '—' },
        { lbl:'Дней с события',  val: daysElapsed !== null ? daysElapsed+'д' : '—' },
        { lbl:'Местоположение',  val: latestEvt?.location || '—' },
      ].map(k => `
        <div style="flex:1;min-width:110px;padding:10px 14px;
                    background:var(--surface2);border:1px solid var(--border);
                    border-radius:var(--radius)">
          <div style="font-size:9px;text-transform:uppercase;letter-spacing:.5px;
                      color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">${k.lbl}</div>
          <div style="font-weight:800;font-size:13px;color:var(--text);
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${k.val}</div>
        </div>`).join('')}
    </div>`;

  // ── Timeline ─────────────────────────────────────────────────────
  const timelineHTML = events.length === 0
    ? `<div class="trk-empty">
        <div style="font-size:36px;opacity:.25;margin-bottom:10px">📍</div>
        <div style="font-weight:600;font-size:13px;margin-bottom:4px">Событий ещё нет</div>
        <div>Добавьте первое событие — прибытие в порт, отправку и т.д.</div>
      </div>`
    : `<div class="trk-timeline">
        ${events.map((ev, idx) => trkEventHTML(ev, idx === 0)).join('')}
      </div>`;

  // ── Add-event form ───────────────────────────────────────────────
  const formHTML = `
    <div class="trk-add-panel">
      <div class="trk-add-title">➕ Добавить событие</div>
      <div class="form-grid cols-2" style="margin-bottom:12px">
        <div class="field">
          <label>Дата события <span style="color:var(--rust)">*</span></label>
          <input type="date" id="trk-f-date" value="${new Date().toISOString().slice(0,10)}">
        </div>
        <div class="field">
          <label>Статус <span style="color:var(--rust)">*</span></label>
          <select id="trk-f-status">
            ${Object.entries(TRK_STATUSES).map(([k,v]) =>
              `<option value="${k}">${v.icon} ${v.label}</option>`
            ).join('')}
          </select>
        </div>
        <div class="field span2">
          <label>Местоположение</label>
          <input id="trk-f-location" placeholder="Порт / город / страна / координаты" list="trk-locations-list">
          <datalist id="trk-locations-list">
            <option value="Nhava Sheva, India">
            <option value="Port Said, Egypt">
            <option value="Суэцкий канал">
            <option value="Средиземное море">
            <option value="Гибралтар">
            <option value="Балтийское море">
            <option value="Санкт-Петербург, Россия">
            <option value="Москва, Россия">
            ${s.from ? `<option value="${s.from}">` : ''}
            ${s.to   ? `<option value="${s.to}">` : ''}
          </datalist>
        </div>
        <div class="field span2">
          <label>Комментарий</label>
          <textarea id="trk-f-comment" rows="2" style="width:100%;resize:vertical"
            placeholder="Детали события: номер рейса, коносамент, задержка и причина..."></textarea>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="gen-btn" onclick="trkAddEvent('${sid}')"
                style="margin:0;padding:8px 20px;font-size:12px">💾 Добавить</button>
        <button class="admin-action-btn" onclick="trkImportFromShipment('${sid}')">
          🔄 Импорт из истории поставки
        </button>
      </div>
    </div>`;

  el.innerHTML = routeHTML + kpiHTML + timelineHTML + formHTML;
}

/* ── Render single timeline event ────────────────────────────────── */
function trkEventHTML(ev, isLatest) {
  const st  = TRK_STATUSES[ev.status] || TRK_STATUSES.other;
  const dotCls = isLatest ? 'latest' : (st.dot || '');
  const dateStr = ev.event_date
    ? new Date(ev.event_date + 'T00:00:00').toLocaleDateString('ru-RU', { day:'2-digit', month:'short', year:'numeric' })
    : '—';

  return `<div class="trk-event" id="trk-ev-${ev.id}">
    <div class="trk-dot ${dotCls}">${isLatest ? '●' : st.icon}</div>
    <div class="trk-event-head">
      <span class="trk-event-status ${st.cls}">${st.icon} ${st.label}</span>
      ${ev.location ? `<span class="trk-event-loc">📍 ${ev.location}</span>` : ''}
      <span class="trk-event-date">${dateStr}</span>
    </div>
    ${ev.comment ? `<div class="trk-event-comment">${ev.comment}</div>` : ''}
    <div style="margin-top:6px;display:flex;gap:6px">
      <button class="admin-action-btn" onclick="trkEditEvent('${ev.id}','${ev.shipment_id}')"
              style="font-size:10px;padding:2px 8px">✎ Изменить</button>
      <button class="admin-action-btn danger" onclick="trkDeleteEvent('${ev.id}','${ev.shipment_id}')"
              style="font-size:10px;padding:2px 8px">× Удалить</button>
    </div>
  </div>`;
}

/* ── Add event ───────────────────────────────────────────────────── */
function trkAddEvent(shipId) {
  const date    = document.getElementById('trk-f-date')?.value;
  const status  = document.getElementById('trk-f-status')?.value;
  const loc     = document.getElementById('trk-f-location')?.value.trim();
  const comment = document.getElementById('trk-f-comment')?.value.trim();

  if (!date)   { alert('Укажите дату события'); return; }
  if (!status) { alert('Выберите статус'); return; }

  DB_shipments_tracking.insert({
    shipment_id: String(shipId),
    status,
    location:    loc,
    event_date:  date,
    comment,
    created_at:  new Date().toISOString(),
  });

  // Also log to shipment events
  const st = TRK_STATUSES[status] || TRK_STATUSES.other;
  const s  = DB_shipments.find(String(shipId));
  if (s) {
    const events = [...(s.events || []), {
      date:  new Date(date + 'T00:00:00').toLocaleDateString('ru-RU'),
      icon:  st.icon,
      text:  `${st.label}${loc ? ': ' + loc : ''}`,
      note:  comment || '',
    }];
    // Auto-advance shipment status based on tracking event
    const statusMap = {
      departed:   { status: 'active',     stage: 3 },
      at_port:    { status: 'in_transit', stage: 4 },
      in_transit: { status: 'in_transit', stage: 5 },
      arrived:    { status: 'in_transit', stage: 6 },
      customs:    { status: 'customs',    stage: 7 },
      delivered:  { status: 'delivered',  stage: 8 },
    };
    const advance = statusMap[status];
    const update  = { events };
    if (advance) {
      const curStage = parseInt(s.current_stage) || 0;
      if (advance.stage > curStage) {
        update.current_stage = advance.stage;
        update.status        = advance.status;
      }
    }
    DB_shipments.update(String(shipId), update);
  }

  // Clear comment, keep date/status for rapid entry
  const commentEl = document.getElementById('trk-f-comment');
  const locEl     = document.getElementById('trk-f-location');
  if (commentEl) commentEl.value = '';
  if (locEl)     locEl.value     = '';

  // Re-render the tab
  const fresh = DB_shipments.find(String(shipId));
  if (fresh) {
    shpRenderTracking(fresh);
    // Also refresh pipeline in header
    const stage    = parseInt(fresh.current_stage) || 0;
    const pipeline = document.getElementById('shpd-pipeline');
    if (pipeline) {
      pipeline.innerHTML = PIPE_STAGES.map((p, i) => {
        const done   = i < stage;
        const active = i === stage;
        return `<div class="shp-pipe-step">
          <div class="shp-pipe-dot ${done?'done':active?'active':''}">${done ? '✓' : p.icon}</div>
          <div class="shp-pipe-label ${done?'done':active?'active':''}">${p.label.replace('\\n','\n')}</div>
        </div>`;
      }).join('');
    }
    // Refresh status badge in meta
    const metaEl = document.getElementById('shpd-meta');
    if (metaEl && typeof SHP_STATUSES !== 'undefined') {
      const stBadge = metaEl.querySelector('.shp-badge');
      if (stBadge) {
        const newSt = SHP_STATUSES[fresh.status] || SHP_STATUSES.draft;
        stBadge.className = `shp-badge ${newSt.cls}`;
        stBadge.textContent = `${newSt.icon} ${newSt.label}`;
      }
    }
  }

  showToast(`📍 ${st.icon} Событие добавлено`);
}

/* ── Edit event (inline prompt, simple) ─────────────────────────── */
function trkEditEvent(evId, shipId) {
  const ev = DB_shipments_tracking.find(evId);
  if (!ev) return;  // guard

  const newComment = prompt('Комментарий:', ev?.comment || '');
  if (newComment === null) return;
  const newLoc = prompt('Местоположение:', ev?.location || '');
  if (newLoc === null) return;

  DB_shipments_tracking.update(evId, { comment: newComment, location: newLoc });
  const s = DB_shipments.find(String(shipId));
  if (s) shpRenderTracking(s);
  showToast('✅ Событие обновлено');
}

/* ── Delete event ────────────────────────────────────────────────── */
function trkDeleteEvent(evId, shipId) {
  if (!confirm('Удалить это событие?')) return;
  DB_shipments_tracking.delete(evId);
  const s = DB_shipments.find(String(shipId));
  if (s) shpRenderTracking(s);
  showToast('🗑 Событие удалено');
  // Refresh list
  shpLoad();
}

/* ── Import legacy events from shipment.events[] into tracking table */
function trkImportFromShipment(shipId) {
  const s = DB_shipments.find(String(shipId));
  if (!s || !s.events?.length) {
    showToast('Нет событий для импорта');
    return;
  }
  // Don't import if tracking already has events for this shipment
  const existing = DB_shipments_tracking.where(x => x.shipment_id === String(shipId));
  if (existing.length > 0) {
    if (!confirm(`Уже есть ${existing.length} событий. Добавить ещё из истории поставки?`)) return;
  }

  const pipeMap = {
    '📄': 'other',      '💳': 'departed',   '🏭': 'other',
    '🚛': 'departed',   '🇮🇳': 'at_port',   '🚢': 'in_transit',
    '⚓': 'arrived',    '🛃': 'customs',    '🏠': 'delivered',
  };

  let count = 0;
  s.events.forEach(ev => {
    // Convert ru date dd.mm.yyyy to yyyy-mm-dd
    let isoDate = '';
    const m = (ev.date || '').match(/(\d{2})\.(\d{2})\.(\d{4})/);
    if (m) isoDate = `${m[3]}-${m[2]}-${m[1]}`;
    else isoDate = new Date().toISOString().slice(0,10);

    const status = pipeMap[ev.icon] || 'other';
    DB_shipments_tracking.insert({
      shipment_id: String(shipId),
      status,
      location:    '',
      event_date:  isoDate,
      comment:     ev.text + (ev.note ? ' · ' + ev.note : ''),
      created_at:  new Date().toISOString(),
    });
    count++;
  });

  shpRenderTracking(DB_shipments.find(String(shipId)));
  showToast(`📍 Импортировано ${count} событий`);
}

/* ── Export tracking events to CSV ──────────────────────────────── */
function trkExportCSV(shipId) {
  const events = DB_shipments_tracking
    .where(x => x.shipment_id === String(shipId))
    .sort((a, b) => (a.event_date || '').localeCompare(b.event_date || ''));

  if (!events.length) { showToast('Нет данных для экспорта'); return; }

  const header = ['Дата', 'Статус', 'Местоположение', 'Комментарий'];
  const rows   = events.map(ev => [
    ev.event_date || '',
    (TRK_STATUSES[ev.status]?.label || ev.status || ''),
    ev.location || '',
    (ev.comment || '').replace(/"/g, '""'),
  ]);

  const csv = [header, ...rows]
    .map(r => r.map(f => `"${f}"`).join(','))
    .join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `tracking_${shipId}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 CSV скачан');
}


/* ╔═══════════════════════════════════════════════════════════════════
   ║  ЭТАП 11 — ФИНАНСОВАЯ ЧАСТЬ ПОСТАВКИ
   ║  • DB_shipment_budget : plan/fact по 4 группам + total
   ║  • payments[].shipment_id : связь реестра платежей с поставкой
   ║  • shpRenderFinance() : вкладка «💰 Финансы» в карточке поставки
   ║  • Backward compat: старые payments (shipment_id='') не сломаны
   ╚═══════════════════════════════════════════════════════════════════ */

/* ── Budget group config (4 группы из задания) ──────────────────── */
const FIN_GROUPS = [
  {
    key: 'product',   label: 'Товар',      icon: '📦',
    color: 'var(--teal)',   bg: '#f0fdfa',
    lines: [
      { id: 'goods_invoice', label: 'Стоимость товара по инвойсу' },
      { id: 'goods_addon',   label: 'Доп. согласованные позиции'  },
    ],
  },
  {
    key: 'logistics', label: 'Логистика',  icon: '🚢',
    color: 'var(--blue)',   bg: '#eff6ff',
    lines: [
      { id: 'log_freight',   label: 'Фрахт / Freight'              },
      { id: 'log_origin',    label: 'Сборы в порту отправления'    },
      { id: 'log_dest',      label: 'Сборы в порту назначения'     },
      { id: 'log_inland',    label: 'Внутренняя доставка'          },
      { id: 'log_insurance', label: 'Страхование груза'            },
      { id: 'log_other',     label: 'Прочие логист. расходы'       },
    ],
  },
  {
    key: 'customs',   label: 'Таможня',    icon: '🛃',
    color: 'var(--rust)',   bg: '#fff7ed',
    lines: [
      { id: 'cus_duty',   label: 'Ввозная пошлина'              },
      { id: 'cus_vat',    label: 'НДС при ввозе (22%)'          },
      { id: 'cus_fee',    label: 'Таможенный сбор'              },
      { id: 'cus_broker', label: 'Услуги брокера'               },
      { id: 'cus_cert',   label: 'Сертификация / разрешения'    },
      { id: 'cus_other',  label: 'Прочие таможенные расходы'    },
    ],
  },
  {
    key: 'other',     label: 'Прочее',     icon: '📌',
    color: 'var(--gold)',   bg: '#fefce8',
    lines: [
      { id: 'oth_bank',    label: 'Банковские комиссии'         },
      { id: 'oth_storage', label: 'Хранение / склад'            },
      { id: 'oth_inspect', label: 'Инспекция / сюрвей'          },
      { id: 'oth_misc',    label: 'Прочие непредвиденные'       },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────────────── */

/** Get or create budget record for a shipment */
function finGetOrCreateBudget(shipId) {
  const existing = DB_shipment_budget.where(x => x.shipment_id === String(shipId));
  if (existing.length > 0) return existing[0];

  // Auto-seed from shipment data where possible
  const s = DB_shipments.find(String(shipId));
  const seed = { shipment_id: String(shipId) };

  FIN_GROUPS.forEach(g => {
    g.lines.forEach(l => {
      seed[l.id + '_plan'] = 0;
      seed[l.id + '_fact'] = 0;
    });
  });

  // Pre-fill product cost from shipment total_value (if USD/INR)
  if (s?.total_value) {
    seed['goods_invoice_plan'] = parseFloat(s.total_value) || 0;
  }
  // Pre-fill customs from shipment customs_data if set
  if (s?.customs_data) {
    const cd = s.customs_data;
    if (cd.duty_amount)   seed['cus_duty_plan']   = cd.duty_amount;
    if (cd.vat_amount)    seed['cus_vat_plan']     = cd.vat_amount;
    if (cd.customs_fees)  seed['cus_fee_plan']     = cd.customs_fees;
    if (cd.broker_fee)    seed['cus_broker_plan']  = cd.broker_fee;
  }

  DB_shipment_budget.insert(seed);
  return DB_shipment_budget.where(x => x.shipment_id === String(shipId))[0];
}

/** Sum a group's plan or fact from budget record */
function finGroupSum(bgt, group, suffix) {
  return (group.lines || []).reduce((sum, l) => {
    return sum + (parseFloat(bgt[l.id + '_' + suffix]) || 0);
  }, 0);
}

/** Total plan or fact across all groups */
function finTotalSum(bgt, suffix) {
  return FIN_GROUPS.reduce((sum, g) => sum + finGroupSum(bgt, g, suffix), 0);
}

/** Payments from the global registry linked to this shipment */
function finGetLinkedPayments(shipId) {
  pmLoad();  // ensure payments array is fresh
  return (typeof payments !== 'undefined' ? payments : [])
    .filter(p => p.shipment_id === String(shipId) || p.po === shipId);
}

/** Currency symbol */
function finCurrSym(cur) {
  return { USD:'$', EUR:'€', INR:'₹', CNY:'¥', RUB:'₽', GBP:'£', TRY:'₺' }[cur] || cur || '';
}

/* ── Seed demo budgets for demo shipments ────────────────────────── */
function finSeedBudgets() {
  if (localStorage.getItem('_fin_budgets_seeded_v1')) return;
  localStorage.setItem('_fin_budgets_seeded_v1', '1');
  if (DB_shipment_budget.count() > 0) return;
  try {
    const s1 = DB_shipments.all().find(s => s.shipment_number === 'ENDV2026-001');
    if (!s1) return;
    const sid = String(s1.id);
    DB_shipment_budget.insert({
      shipment_id:         sid,
      // product
      goods_invoice_plan:  99500,   goods_invoice_fact: 99500,
      goods_addon_plan:    0,       goods_addon_fact:   0,
      // logistics
      log_freight_plan:    8400,    log_freight_fact:   8640,
      log_origin_plan:     320,     log_origin_fact:    290,
      log_dest_plan:       480,     log_dest_fact:      0,
      log_inland_plan:     650,     log_inland_fact:    0,
      log_insurance_plan:  210,     log_insurance_fact: 210,
      log_other_plan:      0,       log_other_fact:     0,
      // customs
      cus_duty_plan:       430600,  cus_duty_fact:      0,
      cus_vat_plan:        1028600, cus_vat_fact:       0,
      cus_fee_plan:        22500,   cus_fee_fact:       0,
      cus_broker_plan:     55000,   cus_broker_fact:    0,
      cus_cert_plan:       18000,   cus_cert_fact:      0,
      cus_other_plan:      0,       cus_other_fact:     0,
      // other
      oth_bank_plan:       3200,    oth_bank_fact:      3100,
      oth_storage_plan:    0,       oth_storage_fact:   0,
      oth_inspect_plan:    12000,   oth_inspect_fact:   12000,
      oth_misc_plan:       0,       oth_misc_fact:      0,
    });
  } catch(e) { console.warn('finSeedBudgets:', e); }
}

/* ── Seed demo payments linked to demo shipment ──────────────────── */
function finSeedPayments() {
  try {
    const s1 = DB_shipments.all().find(s => s.shipment_number === 'ENDV2026-001');
    if (!s1) return;
    pmLoad();
    const sid = String(s1.id);
    // Only add if no payment is yet linked
    if (payments.some(p => p.shipment_id === sid)) return;
    payments.push({
      id: 90001, po: s1.contract_id || 'ENDV2026-001',
      shipment_id: sid, company: 'ENDV',
      amount: 29850,  type: 'advance', payee: 'Thermo Cables Ltd',
      currency: 'USD', dueDate: '2026-01-15', terms: '30% аванс',
      priority: 'high', note: '30% prepayment per contract clause 4.1',
      status: 'paid', paidAmount: 29850, paidDate: '2026-01-14',
      rate: 88.5, ppNum: 'ПП-00041', swift: '', created: '2026-01-10',
    });
    payments.push({
      id: 90002, po: s1.contract_id || 'ENDV2026-001',
      shipment_id: sid, company: 'ENDV',
      amount: 69650,  type: 'balance', payee: 'Thermo Cables Ltd',
      currency: 'USD', dueDate: '2026-03-01', terms: '70% перед отгрузкой',
      priority: 'high', note: '70% balance before shipment',
      status: 'pending', paidAmount: 0, paidDate: '',
      rate: 0, ppNum: '', swift: '', created: '2026-01-10',
    });
    payments.push({
      id: 90003, po: s1.contract_id || 'ENDV2026-001',
      shipment_id: sid, company: 'ENDV',
      amount: 8640,   type: 'freight', payee: 'Русмарин Логистика',
      currency: 'USD', dueDate: '2026-03-05', terms: '100% перед выдачей коносамента',
      priority: 'medium', note: 'Оплата фрахта MSC MAYA',
      status: 'paid', paidAmount: 8640, paidDate: '2026-03-02',
      rate: 90.1, ppNum: 'ПП-00089', swift: '', created: '2026-02-20',
    });
    pmSave();
  } catch(e) { console.warn('finSeedPayments:', e); }
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN RENDER
═══════════════════════════════════════════════════════════════════ */
function shpRenderFinance(s) {
  finSeedBudgets();
  finSeedPayments();

  const el = document.getElementById('shpd-finance-content');
  if (!el) return;

  const sid = String(s.id);
  const bgt = finGetOrCreateBudget(sid);
  const pmts = finGetLinkedPayments(sid);
  const cur  = s.currency || 'USD';
  const sym  = finCurrSym(cur);

  // ── A. Budget overview cards ──────────────────────────────────────
  const groupCards = FIN_GROUPS.map(g => {
    const plan = finGroupSum(bgt, g, 'plan');
    const fact = finGroupSum(bgt, g, 'fact');
    const pct  = plan > 0 ? Math.min(Math.round(fact / plan * 100), 150) : 0;
    const delta = fact - plan;
    const deltaClass = delta > 0 ? 'over' : delta < 0 ? 'under' : 'exact';
    const barColor = delta > 0 ? '#dc2626' : g.color;

    return `<div class="fin-budget-card ${g.key}">
      <div class="fin-bc-label">${g.icon} ${g.label}</div>
      <div class="fin-bc-plan">${fmtNum(plan)}</div>
      <div class="fin-bc-fact ${deltaClass}">
        факт ${fmtNum(fact)}
        ${delta !== 0 ? `<span class="fin-delta ${deltaClass === 'over' ? 'pos' : 'neg'}">${delta > 0 ? '+' : ''}${fmtNum(delta)}</span>` : ''}
      </div>
      <div class="fin-bc-bar">
        <div class="fin-bc-bar-fill" style="width:${pct}%;background:${barColor}"></div>
      </div>
    </div>`;
  }).join('');

  // Total card
  const totalPlan = finTotalSum(bgt, 'plan');
  const totalFact = finTotalSum(bgt, 'fact');
  const totalDelta = totalFact - totalPlan;

  const totalCard = `<div class="fin-budget-card total" style="border-color:var(--co-accent);background:var(--co-accent-light)">
    <div class="fin-bc-label">📊 ИТОГО</div>
    <div class="fin-bc-plan" style="color:var(--co-accent);font-size:18px">${fmtNum(totalPlan)}</div>
    <div class="fin-bc-fact ${totalDelta > 0 ? 'over' : totalDelta < 0 ? 'under' : 'exact'}">
      факт ${fmtNum(totalFact)}
      ${totalDelta !== 0 ? `<span class="fin-delta ${totalDelta > 0 ? 'pos' : 'neg'}">${totalDelta > 0 ? '+' : ''}${fmtNum(totalDelta)}</span>` : ''}
    </div>
    <div class="fin-bc-bar">
      <div class="fin-bc-bar-fill" style="width:${totalPlan > 0 ? Math.min(Math.round(totalFact/totalPlan*100),150) : 0}%;background:var(--co-accent)"></div>
    </div>
  </div>`;

  // ── B. Waterfall bar ─────────────────────────────────────────────
  const waterfallHTML = totalPlan > 0 ? (() => {
    const segments = FIN_GROUPS.map(g => {
      const plan = finGroupSum(bgt, g, 'plan');
      const pct  = Math.round(plan / totalPlan * 100);
      if (pct < 1) return '';
      return `<div class="fin-wf-segment" style="flex:${pct};background:${g.color}">${pct > 8 ? g.icon + ' ' + pct + '%' : ''}</div>`;
    }).join('');
    return `<div>
      <div class="fin-waterfall">${segments}</div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:10.5px;color:var(--text3);margin-top:4px">
        ${FIN_GROUPS.map(g => `<span style="display:flex;align-items:center;gap:4px">
          <span style="width:8px;height:8px;border-radius:50%;display:inline-block;background:${g.color}"></span>
          ${g.icon} ${g.label}
        </span>`).join('')}
      </div>
    </div>`;
  })() : '';

  // ── C. Budget editor table (collapsible by group) ─────────────────
  const editorHTML = `
    <div class="fin-section-title">✏️ Редактор бюджета
      <button class="admin-action-btn" onclick="finSaveBudget('${sid}')"
              style="font-size:11px;padding:4px 12px;margin-left:auto">💾 Сохранить</button>
      <button class="admin-action-btn" onclick="finAutoFillBudget('${sid}')"
              style="font-size:11px;padding:4px 12px">🔄 Авто-заполнение</button>
    </div>
    <table class="fin-budget-tbl" id="fin-budget-tbl-${sid}">
      <thead><tr>
        <th style="min-width:200px">Статья</th>
        <th class="r" style="min-width:130px">План, ${cur}</th>
        <th class="r" style="min-width:130px">Факт, ${cur}</th>
        <th class="r" style="min-width:100px">Δ отклонение</th>
      </tr></thead>
      <tbody>
        ${FIN_GROUPS.map(g => {
          const gPlan = finGroupSum(bgt, g, 'plan');
          const gFact = finGroupSum(bgt, g, 'fact');
          const gDelta = gFact - gPlan;
          return `
            <tr class="fin-group-header">
              <td colspan="4">${g.icon} ${g.label.toUpperCase()}
                <span style="font-weight:400;color:var(--text3);font-size:10px;margin-left:8px">план ${fmtNum(gPlan)} · факт ${fmtNum(gFact)}</span>
              </td>
            </tr>
            ${g.lines.map(l => {
              const plan = parseFloat(bgt[l.id + '_plan']) || 0;
              const fact = parseFloat(bgt[l.id + '_fact']) || 0;
              const delta = fact - plan;
              const deltaHTML = delta === 0 ? '<span class="fin-delta zer">0</span>'
                : `<span class="fin-delta ${delta > 0 ? 'pos' : 'neg'}">${delta > 0 ? '+' : ''}${fmtNum(delta)}</span>`;
              return `<tr>
                <td style="padding-left:22px;color:var(--text2)">${l.label}</td>
                <td class="r">
                  <input type="number" id="fin-${l.id}-plan" value="${plan}"
                         min="0" step="0.01" onchange="finRecalcPreview('${sid}')">
                </td>
                <td class="r">
                  <input type="number" id="fin-${l.id}-fact" value="${fact}"
                         min="0" step="0.01" onchange="finRecalcPreview('${sid}')">
                </td>
                <td class="r">${deltaHTML}</td>
              </tr>`;
            }).join('')}`;
        }).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td style="font-size:13px">ИТОГО</td>
          <td class="r" style="font-family:'JetBrains Mono',monospace;color:var(--co-accent)" id="fin-total-plan-${sid}">${fmtNum(totalPlan)}</td>
          <td class="r" style="font-family:'JetBrains Mono',monospace;color:var(--co-accent)" id="fin-total-fact-${sid}">${fmtNum(totalFact)}</td>
          <td class="r">${totalDelta === 0 ? '<span class="fin-delta zer">0</span>'
            : `<span class="fin-delta ${totalDelta > 0 ? 'pos' : 'neg'}">${totalDelta > 0 ? '+' : ''}${fmtNum(totalDelta)}</span>`}</td>
        </tr>
      </tfoot>
    </table>`;

  // ── D. Linked payments from global registry ──────────────────────
  const paidAmt  = pmts.filter(p => p.status === 'paid').reduce((s, p) => s + (p.amount || 0), 0);
  const pendAmt  = pmts.filter(p => p.status !== 'paid').reduce((s, p) => s + (p.amount || 0), 0);
  const paidPct  = pmts.length ? Math.round(paidAmt / (paidAmt + pendAmt) * 100) : 0;

  const paymentsHTML = `
    <div class="fin-section-title">💳 Платежи (${pmts.length})
      <button class="admin-action-btn" onclick="finLinkPaymentPicker('${sid}')"
              style="font-size:11px;padding:4px 12px;margin-left:auto">+ Привязать платёж</button>
      <button class="admin-action-btn" onclick="finCreatePayment('${sid}','${s.shipment_number}')"
              style="font-size:11px;padding:4px 12px">+ Новый платёж</button>
    </div>

    ${pmts.length > 0 ? `
    <div style="display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap">
      ${[
        { lbl:'Оплачено', val: fmtNum(paidAmt)+' '+cur, c:'#15803d' },
        { lbl:'К оплате',  val: fmtNum(pendAmt)+' '+cur, c:'var(--co-accent)' },
        { lbl:'Выплачено', val: paidPct+'%',             c:'var(--text)' },
      ].map(k => `<div style="flex:1;min-width:110px;padding:10px 14px;
                              background:var(--surface2);border:1px solid var(--border);
                              border-radius:var(--radius)">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:.5px;
                    color:var(--text3);font-family:'JetBrains Mono',monospace;margin-bottom:3px">${k.lbl}</div>
        <div style="font-weight:800;font-size:15px;color:${k.c};
                    font-family:'JetBrains Mono',monospace">${k.val}</div>
      </div>`).join('')}
    </div>
    <div style="margin-bottom:16px">
      <div class="shp-progress-bar" style="height:6px">
        <div class="shp-progress-fill" style="width:${paidPct}%;${paidPct===100?'background:#15803d':''}"></div>
      </div>
    </div>
    ${pmts.map(p => finPayRow(p, cur)).join('')}
    ` : `<div style="color:var(--text3);font-size:12px;padding:8px 0">
      Нет привязанных платежей из реестра.<br>
      Используйте кнопку «+ Привязать платёж» или перейдите в <b>Реестр платежей</b>
      и укажите номер поставки <b>${s.shipment_number}</b> в поле «№ PO / Поставка».
    </div>`}`;

  el.innerHTML = `
    <div class="fin-budget-grid">${groupCards}${totalCard}</div>
    ${waterfallHTML}
    ${editorHTML}
    ${paymentsHTML}`;
}

/* ── Single payment row in finance tab ──────────────────────────── */
function finPayRow(p, shipCur) {
  const pType = (typeof PM_TYPES !== 'undefined' && PM_TYPES[p.type]) || { icon: '📌', label: p.type || 'Платёж', color: 'var(--text3)' };
  const isPaid = p.status === 'paid';
  const cur    = p.currency || shipCur || 'USD';

  return `<div class="fin-pay-row">
    <div style="font-size:18px;flex-shrink:0">${pType.icon}</div>
    <div style="flex:1;min-width:0">
      <div style="font-weight:700;font-size:12.5px">${p.note || pType.label}</div>
      <div style="font-size:11px;color:var(--text3);display:flex;gap:10px;flex-wrap:wrap;margin-top:2px">
        <span>Срок: <b>${p.dueDate || '—'}</b></span>
        ${isPaid ? `<span style="color:#15803d">✅ Оплачен: <b>${p.paidDate}</b></span>` : ''}
        ${p.ppNum  ? `<span>ПП: <b>${p.ppNum}</b></span>` : ''}
        ${p.payee  ? `<span>Получатель: <b>${p.payee}</b></span>` : ''}
      </div>
    </div>
    <div style="text-align:right;flex-shrink:0">
      <div style="font-family:'JetBrains Mono',monospace;font-weight:800;font-size:13px;
                  color:${isPaid ? '#15803d' : 'var(--co-accent)'}">${fmtNum(p.amount || 0)} ${cur}</div>
      ${isPaid && p.rate > 0
        ? `<div style="font-size:10px;color:var(--text3);font-family:'JetBrains Mono',monospace">${fmtNum((p.amount||0)*p.rate)} ₽ × ${p.rate}</div>` : ''}
      <span class="fin-pay-type" style="background:${isPaid ? '#f0fdf4' : '#fff7ed'};
            color:${isPaid ? '#15803d' : '#ea580c'}">${isPaid ? '✅ Оплачен' : '⏳ Ожидается'}</span>
    </div>
    <button class="admin-action-btn danger" onclick="finUnlinkPayment(${p.id},'${p.shipment_id}')"
            title="Отвязать от поставки" style="flex-shrink:0">×</button>
  </div>`;
}

/* ── Save budget ─────────────────────────────────────────────────── */
function finSaveBudget(shipId) {
  const bgt = finGetOrCreateBudget(shipId);
  const update = {};

  FIN_GROUPS.forEach(g => {
    g.lines.forEach(l => {
      const planEl = document.getElementById(`fin-${l.id}-plan`);
      const factEl = document.getElementById(`fin-${l.id}-fact`);
      update[l.id + '_plan'] = parseFloat(planEl?.value) || 0;
      update[l.id + '_fact'] = parseFloat(factEl?.value) || 0;
    });
  });

  DB_shipment_budget.update(bgt.id, update);
  showToast('💾 Бюджет поставки сохранён');

  // Refresh KPI totals in the DOM without full re-render
  const fresh = DB_shipment_budget.where(x => x.shipment_id === String(shipId))[0];
  if (fresh) {
    const tp = finTotalSum(fresh, 'plan');
    const tf = finTotalSum(fresh, 'fact');
    const tpEl = document.getElementById(`fin-total-plan-${shipId}`);
    const tfEl = document.getElementById(`fin-total-fact-${shipId}`);
    if (tpEl) tpEl.textContent = fmtNum(tp);
    if (tfEl) tfEl.textContent = fmtNum(tf);
  }
}

/* ── Live recalc totals while editing ───────────────────────────── */
function finRecalcPreview(shipId) {
  let tp = 0, tf = 0;
  FIN_GROUPS.forEach(g => g.lines.forEach(l => {
    tp += parseFloat(document.getElementById(`fin-${l.id}-plan`)?.value) || 0;
    tf += parseFloat(document.getElementById(`fin-${l.id}-fact`)?.value) || 0;
  }));
  const tpEl = document.getElementById(`fin-total-plan-${shipId}`);
  const tfEl = document.getElementById(`fin-total-fact-${shipId}`);
  if (tpEl) tpEl.textContent = fmtNum(tp);
  if (tfEl) tfEl.textContent = fmtNum(tf);
}

/* ── Auto-fill budget from linked sources ────────────────────────── */
function finAutoFillBudget(shipId) {
  const s   = DB_shipments.find(String(shipId));
  const bgt = finGetOrCreateBudget(shipId);
  if (!s) return;

  const upd = {};
  // 1. Product cost from shipment items total
  if (s.items?.length) {
    const itemsTotal = s.items.reduce((sum, it) => sum + (it.qty||0)*(it.price||0), 0);
    if (itemsTotal > 0) upd['goods_invoice_plan'] = itemsTotal;
  } else if (s.total_value) {
    upd['goods_invoice_plan'] = parseFloat(s.total_value) || 0;
  }

  // 2. Customs data
  const cd = s.customs_data || {};
  if (cd.duty_amount)   upd['cus_duty_plan']   = cd.duty_amount;
  if (cd.vat_amount)    upd['cus_vat_plan']     = cd.vat_amount;
  if (cd.customs_fees)  upd['cus_fee_plan']     = cd.customs_fees;
  if (cd.broker_fee)    upd['cus_broker_plan']  = cd.broker_fee;

  // 3. Freight from logistics requests
  const lrs = DB_logistics_requests.where(x => x.shipment_id === String(shipId));
  if (lrs.length > 0 && lrs[0].value) {
    upd['log_freight_plan'] = parseFloat(lrs[0].value) || 0;
  }

  // 4. Payment facts
  pmLoad();
  const pmts = (typeof payments !== 'undefined' ? payments : [])
    .filter(p => p.shipment_id === String(shipId) && p.status === 'paid');
  pmts.forEach(p => {
    const amt = (p.paidAmount || p.amount || 0);
    if (p.type === 'advance' || p.type === 'balance') {
      upd['goods_invoice_fact'] = (upd['goods_invoice_fact'] || 0) + amt;
    } else if (p.type === 'freight') {
      upd['log_freight_fact']   = (upd['log_freight_fact']   || 0) + amt;
    } else if (p.type === 'customs') {
      upd['cus_duty_fact']      = (upd['cus_duty_fact']      || 0) + amt;
    } else if (p.type === 'broker') {
      upd['cus_broker_fact']    = (upd['cus_broker_fact']    || 0) + amt;
    }
  });

  DB_shipment_budget.update(bgt.id, upd);
  showToast('🔄 Бюджет обновлён из данных поставки');

  // Re-render the tab with updated data
  const fresh = DB_shipments.find(String(shipId));
  if (fresh) shpRenderFinance(fresh);
}

/* ── Payments linkage ────────────────────────────────────────────── */

/** Open picker to link an existing payment to this shipment */
function finLinkPaymentPicker(shipId) {
  pmLoad();
  const unlinked = (typeof payments !== 'undefined' ? payments : [])
    .filter(p => !p.shipment_id || p.shipment_id === '');

  if (unlinked.length === 0) {
    alert('Все платежи уже привязаны к поставкам, или реестр пуст.\nДобавьте платёж через «+ Новый платёж» или в разделе «Реестр платежей».');
    return;
  }

  let overlay = document.getElementById('_fin-pay-picker');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = '_fin-pay-picker';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(10,14,23,.77);z-index:3100;display:flex;align-items:center;justify-content:center';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);
                width:680px;max-width:96vw;max-height:80vh;display:flex;flex-direction:column;
                box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden">
      <div style="padding:16px 22px;border-bottom:1px solid var(--border);background:var(--surface2);
                  display:flex;align-items:center;gap:12px">
        <span style="font-size:20px">💳</span>
        <div>
          <div style="font-weight:800;font-size:14px">Привязать платёж к поставке</div>
          <div style="font-size:11px;color:var(--text3)">Выберите платёж из реестра</div>
        </div>
        <button onclick="document.getElementById('_fin-pay-picker').remove()"
                style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--text3);font-size:18px">✕</button>
      </div>
      <div style="overflow-y:auto;flex:1">
        ${unlinked.map(p => {
          const pt = (typeof PM_TYPES !== 'undefined' && PM_TYPES[p.type]) || { icon:'📌', label: p.type };
          const isPaid = p.status === 'paid';
          return `<div onclick="_finPickerLink(${p.id},'${shipId}')"
                  style="padding:10px 22px;border-bottom:1px solid var(--border);cursor:pointer;
                         display:flex;gap:10px;align-items:center"
                  onmouseover="this.style.background='var(--co-accent-light)'"
                  onmouseout="this.style.background=''">
            <span style="font-size:18px">${pt.icon}</span>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;font-size:12px">${p.note||pt.label}</div>
              <div style="font-size:11px;color:var(--text3)">
                ${p.payee||'—'} · ${p.dueDate||'—'}${p.po ? ' · PO: '+p.po : ''}
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-family:'JetBrains Mono',monospace;font-weight:800;
                          font-size:12px;color:${isPaid?'#15803d':'var(--co-accent)'}">
                ${fmtNum(p.amount||0)} ${p.currency||'USD'}
              </div>
              <span style="font-size:9px;padding:1px 6px;border-radius:8px;
                           background:${isPaid?'#f0fdf4':'#fff7ed'};
                           color:${isPaid?'#15803d':'#ea580c'}">${isPaid?'✅ Оплачен':'⏳ Ожидается'}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  overlay.style.display = 'flex';
}

function _finPickerLink(payId, shipId) {
  const idx = payments.findIndex(p => p.id === payId);
  if (idx >= 0) {
    payments[idx].shipment_id = String(shipId);
    pmSave();
  }
  document.getElementById('_fin-pay-picker')?.remove();
  const s = DB_shipments.find(String(shipId));
  if (s) shpRenderFinance(s);
  showToast('💳 Платёж привязан к поставке');
}

function finUnlinkPayment(payId, shipId) {
  if (!confirm('Отвязать платёж от поставки?')) return;
  const idx = payments.findIndex(p => p.id === payId || p.id === Number(payId));
  if (idx >= 0) { payments[idx].shipment_id = ''; pmSave(); }
  const s = DB_shipments.find(String(shipId));
  if (s) shpRenderFinance(s);
  showToast('🔗 Привязка платежа удалена');
}

/** Navigate to Payment Registry pre-filled with shipment number */
function finCreatePayment(shipId, shipNum) {
  showSection('payments');
  setTimeout(() => {
    pmLoad();
    const poEl = document.getElementById('pm-f-po');
    if (poEl) { poEl.value = shipNum; }
    const formEl = document.getElementById('pm-add-form');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    // Store pending shipment_id to auto-link when payment is saved
    window._pendingPaymentShipmentId = String(shipId);
    showToast(`💳 Введите данные платежа для поставки ${shipNum}`);
  }, 150);
}

/* ── Patch pmSave to auto-link when _pendingPaymentShipmentId is set */
const _pmSave_orig = pmSave;
function pmSave() {
  _pmSave_orig();
  // Auto-link newly created payment to pending shipment if set
  if (window._pendingPaymentShipmentId) {
    const last = payments[payments.length - 1];
    if (last && !last.shipment_id) {
      last.shipment_id = window._pendingPaymentShipmentId;
      window._pendingPaymentShipmentId = null;
      _pmSave_orig();
    }
  }
}

/* ── Dashboard: expose finance summary for shipment list ─────────── */
function finGetBudgetSummary(shipId) {
  const existing = DB_shipment_budget.where(x => x.shipment_id === String(shipId));
  if (!existing.length) return null;
  const bgt = existing[0];
  return {
    plan:  finTotalSum(bgt, 'plan'),
    fact:  finTotalSum(bgt, 'fact'),
    goods: finGroupSum(bgt, FIN_GROUPS[0], 'plan'),
  };
}


/* ╔═══════════════════════════════════════════════════════════════════
   ║  ЭТАП 12 — ANALYTICS DASHBOARD
   ║  Дашборд аналитики поставок: 6 KPI + 9 графиков
   ║  Все графики — чистый SVG, без внешних зависимостей.
   ║  Данные: DB_shipments, DB_shipment_budget, payments[],
   ║           DB_suppliers, DB_shipments_tracking
   ╚═══════════════════════════════════════════════════════════════════ */

/* ── State ───────────────────────────────────────────────────────── */
let _anlCompany = 'all';
let _anlStatus  = 'all';

/* ── Colour palette (matches system CSS vars numerically) ────────── */
const ANL_PALETTE = [
  '#1F7A63', '#1C355E', '#6F8FBF', '#C4943A',
  '#B85C3A', '#4A7FA5', '#2A9D85', '#8A6BBF',
  '#C4783A', '#5A8A6A', '#9A5A5A', '#5A6A9A',
];

const ANL_STATUS_COLORS = {
  draft:      '#9ca3af', active:     '#1C355E',
  in_transit: '#6F8FBF', customs:    '#C4943A',
  delivered:  '#1F7A63', cancelled:  '#D64545',
};
const ANL_MODE_COLORS = {
  sea:   '#1C355E', air:  '#C4943A', rail: '#6F8FBF',
  road:  '#1F7A63', multi:'#4A7FA5',
};
const ANL_MODE_LABELS = {
  sea:'🚢 Морской', air:'✈ Авиа', rail:'🚂 ЖД',
  road:'🚛 Авто',   multi:'🔄 Мульти',
};

/* ── Entry point ─────────────────────────────────────────────────── */
function anlLoad() {
  const year = document.getElementById('anl-year-filter')?.value || '';
  anlPopulateYears();
  const ships = anlGetFiltered(year);
  anlRenderKPIs(ships, year);
  anlRenderStatusDonut(ships);
  anlRenderModeDonut(ships);
  anlRenderIncoBar(ships);
  anlRenderCostBars(ships);
  anlRenderSupplierBars(ships);
  anlRenderMonthlyBars(ships);
  anlRenderTimeline(ships);
  anlRenderPaymentsBar(ships);
  anlRenderProductsBar(ships);
}

/* ── Filter helpers ──────────────────────────────────────────────── */
function anlSetCompany(v, el) {
  _anlCompany = v;
  document.querySelectorAll('.anl-chip').forEach(b => {
    if (['all','ENDV','PBS'].includes(b.textContent.replace(/[^A-Z]/g,'').trim() || b.textContent.trim()) &&
        b.onclick?.toString().includes('anlSetCompany')) b.classList.remove('active');
  });
  el.classList.add('active');
  anlLoad();
}
function anlSetStatus(v, el) {
  _anlStatus = v;
  ['all','active','in_transit','delivered'].forEach(s => {
    document.getElementById('anl-chip-status-' + s)?.classList.remove('active');
  });
  el.classList.add('active');
  anlLoad();
}

function anlGetFiltered(year) {
  let ships = DB_shipments.all();
  if (_anlCompany !== 'all') ships = ships.filter(s => s.company === _anlCompany);
  if (_anlStatus  !== 'all') ships = ships.filter(s => s.status  === _anlStatus);
  if (year) {
    ships = ships.filter(s => {
      const d = s.dates?.etd || s.dates?.eta || s.created_at || '';
      return d.startsWith(year);
    });
  }
  return ships;
}

function anlPopulateYears() {
  const sel = document.getElementById('anl-year-filter');
  if (!sel || sel.options.length > 1) return;
  const years = new Set(DB_shipments.all().map(s => {
    const d = s.dates?.etd || s.dates?.eta || s.created_at || '';
    return d.slice(0, 4);
  }).filter(Boolean));
  [...years].sort().reverse().forEach(y => {
    const opt = document.createElement('option');
    opt.value = y; opt.textContent = y;
    sel.appendChild(opt);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   KPI STRIP — 6 карточек
═══════════════════════════════════════════════════════════════════ */
function anlRenderKPIs(ships, year) {
  const n = ships.length;

  // Avg delivery days (ETD → ETA for delivered or in_transit with both dates)
  const deliveryDays = ships.map(s => {
    const etd = s.dates?.etd; const eta = s.dates?.eta;
    if (!etd || !eta) return null;
    const diff = Math.round((new Date(eta) - new Date(etd)) / 86400000);
    return diff > 0 ? diff : null;
  }).filter(d => d !== null);
  const avgDays = deliveryDays.length
    ? Math.round(deliveryDays.reduce((a, b) => a + b, 0) / deliveryDays.length)
    : null;

  // Total contract value (sum of total_value in original currency — treat as USD equivalent)
  const totalVal = ships.reduce((sum, s) => sum + (parseFloat(s.total_value) || 0), 0);

  // Total logistics cost from budgets
  let totalLogistics = 0, totalCustoms = 0, totalBudgetPlan = 0;
  ships.forEach(s => {
    const bgt = DB_shipment_budget.where(x => x.shipment_id === String(s.id))[0];
    if (!bgt) return;
    const lg = ['log_freight','log_origin','log_dest','log_inland','log_insurance','log_other']
      .reduce((sum, k) => sum + (parseFloat(bgt[k + '_plan']) || 0), 0);
    const cu = ['cus_duty','cus_vat','cus_fee','cus_broker','cus_cert','cus_other']
      .reduce((sum, k) => sum + (parseFloat(bgt[k + '_plan']) || 0), 0);
    totalLogistics += lg;
    totalCustoms   += cu;
    totalBudgetPlan += (parseFloat(bgt['goods_invoice_plan'])||0)
      + (parseFloat(bgt['goods_addon_plan'])||0) + lg + cu
      + ['oth_bank','oth_storage','oth_inspect','oth_misc']
          .reduce((s, k) => s + (parseFloat(bgt[k+'_plan'])||0), 0);
  });

  // Paid percentage
  pmLoad();
  const shipIds = new Set(ships.map(s => String(s.id)));
  const linked  = (typeof payments !== 'undefined' ? payments : [])
    .filter(p => shipIds.has(p.shipment_id));
  const paidAmt = linked.filter(p => p.status === 'paid').reduce((s, p) => s + (p.amount||0), 0);
  const totalAmt = linked.reduce((s, p) => s + (p.amount||0), 0);
  const paidPct  = totalAmt > 0 ? Math.round(paidAmt / totalAmt * 100) : null;

  const _v = id => document.getElementById(id);
  if (_v('anlk-total'))      _v('anlk-total').textContent      = n;
  if (_v('anlk-total-sub'))  _v('anlk-total-sub').textContent  =
    ships.filter(s => s.status === 'delivered').length + ' доставлено · ' +
    ships.filter(s => s.status === 'in_transit').length + ' в пути';

  if (_v('anlk-days'))       _v('anlk-days').textContent       = avgDays !== null ? avgDays + ' д' : '—';
  if (_v('anlk-days-sub'))   _v('anlk-days-sub').textContent   =
    deliveryDays.length ? 'по ' + deliveryDays.length + ' поставкам' : 'нет данных ETD/ETA';

  if (_v('anlk-value'))      _v('anlk-value').textContent      = anlFmtK(totalVal) + ' $';
  if (_v('anlk-value-sub'))  _v('anlk-value-sub').textContent  = 'в валюте договора';

  if (_v('anlk-logistics'))  _v('anlk-logistics').textContent  = anlFmtK(totalLogistics);
  if (_v('anlk-logistics-sub')) _v('anlk-logistics-sub').textContent =
    totalBudgetPlan > 0
      ? Math.round(totalLogistics / totalBudgetPlan * 100) + '% от бюджета'
      : 'из бюджетов поставок';

  if (_v('anlk-customs'))    _v('anlk-customs').textContent    = anlFmtK(totalCustoms);
  if (_v('anlk-customs-sub')) _v('anlk-customs-sub').textContent =
    totalBudgetPlan > 0
      ? Math.round(totalCustoms / totalBudgetPlan * 100) + '% от бюджета'
      : 'из бюджетов поставок';

  if (_v('anlk-paid-pct'))   _v('anlk-paid-pct').textContent   = paidPct !== null ? paidPct + '%' : '—';
  if (_v('anlk-paid-sub'))   _v('anlk-paid-sub').textContent   =
    linked.length ? anlFmtK(paidAmt) + ' из ' + anlFmtK(totalAmt) + ' $' : 'нет платежей';
}

/* ── Format number to k/M ────────────────────────────────────────── */
function anlFmtK(n) {
  if (n >= 1e6)  return (n/1e6).toFixed(1).replace('.0','') + 'M';
  if (n >= 1e3)  return (n/1e3).toFixed(1).replace('.0','') + 'K';
  return Math.round(n).toLocaleString('ru-RU');
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 1 — Status donut
═══════════════════════════════════════════════════════════════════ */
function anlRenderStatusDonut(ships) {
  const counts = {};
  ships.forEach(s => { counts[s.status] = (counts[s.status]||0) + 1; });
  const statusOrder = ['active','in_transit','customs','delivered','draft','cancelled'];
  const data = statusOrder
    .filter(k => counts[k])
    .map(k => ({
      key: k,
      label: (SHP_STATUSES[k]?.icon || '') + ' ' + (SHP_STATUSES[k]?.label || k),
      value: counts[k],
      color: ANL_STATUS_COLORS[k] || '#9ca3af',
    }));

  _anlDonut('anl-donut-svg', 'anl-donut-legend', data, ships.length);
  const sub = document.getElementById('anl-status-sub');
  if (sub) sub.textContent = ships.length + ' поставок';
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 2 — Mode donut
═══════════════════════════════════════════════════════════════════ */
function anlRenderModeDonut(ships) {
  const counts = {};
  ships.forEach(s => { const m = s.mode||'other'; counts[m] = (counts[m]||0) + 1; });
  const data = Object.entries(counts).map(([k, v]) => ({
    key: k,
    label: ANL_MODE_LABELS[k] || ('🔷 ' + k),
    value: v,
    color: ANL_MODE_COLORS[k] || '#9ca3af',
  })).sort((a, b) => b.value - a.value);

  _anlDonut('anl-mode-svg', 'anl-mode-legend', data, ships.length);
  const sub = document.getElementById('anl-mode-sub');
  if (sub) sub.textContent = Object.keys(counts).length + ' видов';
}

/* ── Generic donut renderer ──────────────────────────────────────── */
function _anlDonut(svgId, legendId, data, total) {
  const svg    = document.getElementById(svgId);
  const legend = document.getElementById(legendId);
  if (!svg || !legend) return;

  const cx = 65, cy = 65, R = 52, r = 34;
  const total2 = data.reduce((s, d) => s + d.value, 0) || 1;
  let angle = -Math.PI / 2;
  let paths = '';

  data.forEach(d => {
    const sweep = (d.value / total2) * 2 * Math.PI;
    if (sweep < 0.01) return;
    const x1 = cx + R * Math.cos(angle);
    const y1 = cy + R * Math.sin(angle);
    angle += sweep;
    const x2 = cx + R * Math.cos(angle);
    const y2 = cy + R * Math.sin(angle);
    const xi1 = cx + r * Math.cos(angle);
    const yi1 = cy + r * Math.sin(angle);
    const xi2 = cx + r * Math.cos(angle - sweep);
    const yi2 = cy + r * Math.sin(angle - sweep);
    const large = sweep > Math.PI ? 1 : 0;
    paths += `<path d="M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2}
              L ${xi1} ${yi1} A ${r} ${r} 0 ${large} 0 ${xi2} ${yi2} Z"
              fill="${d.color}" opacity=".9">
              <title>${d.label}: ${d.value}</title></path>`;
  });

  // Center label
  paths += `<text x="${cx}" y="${cy - 6}" text-anchor="middle"
              font-size="18" font-weight="900" fill="var(--text)"
              font-family="'JetBrains Mono',monospace">${total}</text>
            <text x="${cx}" y="${cy + 12}" text-anchor="middle"
              font-size="9" fill="var(--text3)"
              font-family="'JetBrains Mono',monospace">всего</text>`;

  svg.innerHTML = paths;

  legend.innerHTML = data.map(d => {
    const pct = Math.round(d.value / total2 * 100);
    return `<div class="anl-legend-row">
      <div class="anl-legend-dot" style="background:${d.color}"></div>
      <div style="flex:1;font-size:11px">${d.label}</div>
      <div class="anl-legend-pct">${d.value} · ${pct}%</div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 3 — Incoterms vertical bar
═══════════════════════════════════════════════════════════════════ */
function anlRenderIncoBar(ships) {
  const el = document.getElementById('anl-inco-chart');
  if (!el) return;
  const counts = {};
  ships.forEach(s => { const k = s.incoterms||'—'; counts[k] = (counts[k]||0) + 1; });
  const data = Object.entries(counts).sort((a,b) => b[1]-a[1]);
  if (!data.length) { el.innerHTML = '<div class="anl-empty">Нет данных</div>'; return; }
  el.innerHTML = _anlVertBar(data.map(([k,v],i) => ({
    label: k, value: v, color: ANL_PALETTE[i % ANL_PALETTE.length]
  })), 'поставок');
  document.getElementById('anl-inco-sub').textContent = data.length + ' базисов';
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 4 — Cost structure bars (goods / logistics / customs / other)
═══════════════════════════════════════════════════════════════════ */
function anlRenderCostBars(ships) {
  const el = document.getElementById('anl-cost-chart');
  if (!el) return;

  const groups = { product: 0, logistics: 0, customs: 0, other: 0 };
  const groupsFact = { product: 0, logistics: 0, customs: 0, other: 0 };
  const lineMap = {
    product:   ['goods_invoice','goods_addon'],
    logistics: ['log_freight','log_origin','log_dest','log_inland','log_insurance','log_other'],
    customs:   ['cus_duty','cus_vat','cus_fee','cus_broker','cus_cert','cus_other'],
    other:     ['oth_bank','oth_storage','oth_inspect','oth_misc'],
  };
  const groupColors = { product:'#1F7A63', logistics:'#1C355E', customs:'#D64545', other:'#C4943A' };
  const groupLabels = { product:'📦 Товар', logistics:'🚢 Логистика', customs:'🛃 Таможня', other:'📌 Прочее' };

  ships.forEach(s => {
    const bgt = DB_shipment_budget.where(x => x.shipment_id === String(s.id))[0];
    if (!bgt) return;
    Object.entries(lineMap).forEach(([g, lines]) => {
      lines.forEach(l => {
        groups[g]     += parseFloat(bgt[l+'_plan']) || 0;
        groupsFact[g] += parseFloat(bgt[l+'_fact']) || 0;
      });
    });
  });

  const maxVal = Math.max(...Object.values(groups), ...Object.values(groupsFact), 1);
  const W = 280, H = 120, BAR_W = 24, GAP = 44, PAD_L = 12, PAD_B = 24;

  const keys = Object.keys(groups);
  let bars = '';
  keys.forEach((k, i) => {
    const x     = PAD_L + i * (BAR_W * 2 + GAP);
    const hPlan = Math.round((groups[k] / maxVal) * H);
    const hFact = Math.round((groupsFact[k] / maxVal) * H);
    const yPlan = H - hPlan + 4;
    const yFact = H - hFact + 4;

    bars += `<g class="anl-bar-group">
      <rect class="anl-bar-rect" x="${x}" y="${yPlan}" width="${BAR_W}" height="${hPlan}"
            fill="${groupColors[k]}" opacity=".85" rx="2">
        <title>${groupLabels[k]} план: ${anlFmtK(groups[k])}</title>
      </rect>
      <rect class="anl-bar-rect" x="${x + BAR_W + 3}" y="${yFact}" width="${BAR_W}" height="${hFact}"
            fill="${groupColors[k]}" opacity=".4" rx="2"
            stroke="${groupColors[k]}" stroke-width="1.5" stroke-dasharray="3 2">
        <title>${groupLabels[k]} факт: ${anlFmtK(groupsFact[k])}</title>
      </rect>
      <text class="anl-bar-label" x="${x + BAR_W}" y="${H + PAD_B - 6}"
            text-anchor="middle" font-size="8">${k === 'product' ? '📦' : k === 'logistics' ? '🚢' : k === 'customs' ? '🛃' : '📌'}</text>
      <text class="anl-bar-val" x="${x}" y="${Math.min(yPlan - 3, H)}" font-size="8"
            text-anchor="middle">${anlFmtK(groups[k])}</text>
    </g>`;
  });

  const svgW = PAD_L + keys.length * (BAR_W * 2 + GAP) + 8;
  el.innerHTML = `
    <svg class="anl-svg" width="${svgW}" height="${H + PAD_B + 8}" viewBox="0 0 ${svgW} ${H + PAD_B + 8}">
      <line class="anl-axis-line" x1="${PAD_L - 4}" y1="${H + 4}" x2="${svgW}" y2="${H + 4}"/>
      ${bars}
    </svg>
    <div style="display:flex;gap:16px;margin-top:6px;font-size:10.5px;color:var(--text3)">
      <span style="display:flex;align-items:center;gap:4px">
        <span style="width:10px;height:10px;background:#888;border-radius:2px;display:inline-block;opacity:.85"></span> план
      </span>
      <span style="display:flex;align-items:center;gap:4px">
        <span style="width:10px;height:10px;background:#888;border-radius:2px;display:inline-block;opacity:.4;border:1.5px dashed #888"></span> факт
      </span>
    </div>`;
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 5 — Supplier distribution horizontal bars
═══════════════════════════════════════════════════════════════════ */
function anlRenderSupplierBars(ships) {
  const el = document.getElementById('anl-supplier-chart');
  if (!el) return;

  const supMap = {};
  ships.forEach(s => {
    const name = s.supplier_id
      ? (shpSupName(s.supplier_id) || 'Поставщик ' + s.supplier_id.slice(-4))
      : '— Без поставщика';
    if (!supMap[name]) supMap[name] = { count: 0, value: 0, modes: {} };
    supMap[name].count++;
    supMap[name].value += parseFloat(s.total_value) || 0;
    const m = s.mode || 'other';
    supMap[name].modes[m] = (supMap[name].modes[m]||0) + 1;
  });

  const data = Object.entries(supMap)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 12);

  const sub = document.getElementById('anl-sup-sub');
  if (sub) sub.textContent = data.length + ' поставщиков';

  if (!data.length) {
    el.innerHTML = '<div class="anl-empty">Нет данных о поставщиках</div>';
    return;
  }

  const maxCount = Math.max(...data.map(([, v]) => v.count));

  el.innerHTML = data.map(([name, v], i) => {
    const pct   = Math.round(v.count / (ships.length || 1) * 100);
    const barPct = Math.round(v.count / maxCount * 100);
    const color = ANL_PALETTE[i % ANL_PALETTE.length];
    const topMode = Object.entries(v.modes).sort((a,b)=>b[1]-a[1])[0];
    const modeLabel = topMode ? (ANL_MODE_LABELS[topMode[0]] || topMode[0]) : '';

    return `<div class="anl-hbar-row">
      <div class="anl-hbar-label" title="${name}">${name}</div>
      <div class="anl-hbar-track">
        <div class="anl-hbar-fill" style="width:${barPct}%;background:${color}">
          ${barPct > 20 ? v.count + ' пост.' : ''}
        </div>
      </div>
      <div class="anl-hbar-meta">${v.count} · ${pct}%</div>
      <div style="width:130px;font-size:10.5px;color:var(--text3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
        ${anlFmtK(v.value)} $
        ${modeLabel ? '· ' + modeLabel : ''}
      </div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 6 — Monthly dynamics bar chart
═══════════════════════════════════════════════════════════════════ */
function anlRenderMonthlyBars(ships) {
  const el = document.getElementById('anl-monthly-chart');
  if (!el) return;

  const monthly = {};
  ships.forEach(s => {
    const d = s.dates?.etd || s.dates?.eta || s.created_at || '';
    if (!d) return;
    const ym = d.slice(0, 7); // YYYY-MM
    if (!monthly[ym]) monthly[ym] = { count: 0, value: 0, delivered: 0 };
    monthly[ym].count++;
    monthly[ym].value += parseFloat(s.total_value) || 0;
    if (s.status === 'delivered') monthly[ym].delivered++;
  });

  const labels = Object.keys(monthly).sort();
  const sub    = document.getElementById('anl-monthly-sub');
  if (sub) sub.textContent = labels.length + ' мес.';

  if (!labels.length) {
    el.innerHTML = '<div class="anl-empty">Нет данных по периодам</div>';
    return;
  }

  const maxCount = Math.max(...labels.map(k => monthly[k].count), 1);
  const BAR_W = 40, GAP = 14, H = 100, PAD_B = 36, PAD_L = 8;
  const svgW = PAD_L + labels.length * (BAR_W + GAP) + GAP;

  let bars = '';
  const gridLines = [0.25, 0.5, 0.75, 1].map(p => {
    const y = H + 4 - Math.round(p * H);
    return `<line class="anl-grid-line" x1="${PAD_L}" y1="${y}" x2="${svgW}" y2="${y}"/>
            <text class="anl-bar-label" x="0" y="${y + 3}" font-size="7">${Math.round(p * maxCount)}</text>`;
  }).join('');

  labels.forEach((ym, i) => {
    const d     = monthly[ym];
    const x     = PAD_L + i * (BAR_W + GAP) + GAP / 2;
    const h     = Math.round((d.count / maxCount) * H);
    const hDel  = Math.round((d.delivered / maxCount) * H);
    const y     = H + 4 - h;
    const yDel  = H + 4 - hDel;
    const mon   = new Date(ym + '-01').toLocaleDateString('ru-RU', { month: 'short', year: '2-digit' });

    bars += `<g class="anl-bar-group">
      <rect class="anl-bar-rect" x="${x}" y="${y}" width="${BAR_W}" height="${h}"
            fill="var(--co-accent)" opacity=".25" rx="3">
        <title>${ym}: ${d.count} поставок, ${anlFmtK(d.value)} $</title>
      </rect>
      <rect class="anl-bar-rect" x="${x}" y="${yDel}" width="${BAR_W}" height="${hDel}"
            fill="var(--co-accent)" opacity=".9" rx="3">
        <title>Доставлено: ${d.delivered}</title>
      </rect>
      <text class="anl-bar-val" x="${x + BAR_W/2}" y="${y - 3}"
            text-anchor="middle" font-size="9">${d.count}</text>
      <text class="anl-bar-label" x="${x + BAR_W/2}" y="${H + PAD_B - 18}"
            text-anchor="middle" font-size="8"
            transform="rotate(-35, ${x + BAR_W/2}, ${H + PAD_B - 18})">${mon}</text>
    </g>`;
  });

  el.innerHTML = `<div style="overflow-x:auto">
    <svg class="anl-svg" width="${Math.max(svgW,400)}" height="${H + PAD_B + 10}"
         viewBox="0 0 ${Math.max(svgW,400)} ${H + PAD_B + 10}" style="min-width:${svgW}px">
      ${gridLines}
      <line class="anl-axis-line" x1="${PAD_L}" y1="${H+4}" x2="${svgW}" y2="${H+4}"/>
      ${bars}
    </svg>
  </div>
  <div style="display:flex;gap:16px;margin-top:6px;font-size:10.5px;color:var(--text3)">
    <span style="display:flex;align-items:center;gap:4px">
      <span style="width:10px;height:10px;background:var(--co-accent);opacity:.9;border-radius:2px;display:inline-block"></span> Доставлено
    </span>
    <span style="display:flex;align-items:center;gap:4px">
      <span style="width:10px;height:10px;background:var(--co-accent);opacity:.25;border-radius:2px;display:inline-block"></span> Всего
    </span>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 7 — Delivery timeline (ETD → ETA per shipment)
═══════════════════════════════════════════════════════════════════ */
function anlRenderTimeline(ships) {
  const el  = document.getElementById('anl-timeline-chart');
  const sub = document.getElementById('anl-tl-sub');
  if (!el) return;

  const rows = ships
    .filter(s => s.dates?.etd && s.dates?.eta)
    .sort((a, b) => (a.dates.etd || '').localeCompare(b.dates.etd || ''))
    .slice(0, 15); // max 15 rows

  if (sub) sub.textContent = rows.length + ' поставок с датами';

  if (!rows.length) {
    el.innerHTML = '<div class="anl-empty">Нет поставок с датами ETD/ETA</div>';
    return;
  }

  const allDates = rows.flatMap(s => [s.dates.etd, s.dates.eta]);
  const minDate  = new Date(allDates.reduce((a, b) => a < b ? a : b));
  const maxDate  = new Date(allDates.reduce((a, b) => a > b ? a : b));
  const span     = Math.max((maxDate - minDate) / 86400000, 1);
  const today    = new Date();
  const todayPct = Math.min(Math.max((today - minDate) / (maxDate - minDate) * 100, 0), 100);

  const statusColors = ANL_STATUS_COLORS;

  el.innerHTML = `
    <div style="position:relative">
      ${rows.map((s, i) => {
        const etd = new Date(s.dates.etd);
        const eta = new Date(s.dates.eta);
        const left = Math.round((etd - minDate) / (maxDate - minDate) * 100);
        const width= Math.max(Math.round((eta  - etd) / (maxDate - minDate) * 100), 2);
        const days = Math.round((eta - etd) / 86400000);
        const color = statusColors[s.status] || '#9ca3af';
        return `<div class="anl-timeline-row">
          <div class="anl-tl-num">${i + 1}</div>
          <div class="anl-tl-name" title="${s.shipment_number}">${s.shipment_number}</div>
          <div class="anl-tl-track">
            <div class="anl-tl-bar" style="left:${left}%;width:${width}%;background:${color}">
              ${width > 12 ? days + 'д' : ''}
            </div>
          </div>
          <div class="anl-tl-days">${days} дн.</div>
        </div>`;
      }).join('')}
      <!-- Today marker -->
      <div style="position:absolute;right:48px;top:0;bottom:0;pointer-events:none">
        <div style="position:absolute;left:calc(${todayPct}% - 1px);top:0;bottom:0;
                    width:2px;background:var(--rust);opacity:.6;border-radius:1px">
          <div style="position:absolute;top:-4px;left:-14px;font-size:8px;
                      color:var(--rust);font-weight:800;white-space:nowrap">▼ сегодня</div>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9.5px;
                color:var(--text3);font-family:'JetBrains Mono',monospace;
                margin-top:4px;padding:0 174px 0 32px">
      <span>${minDate.toLocaleDateString('ru-RU',{month:'short',year:'2-digit'})}</span>
      <span>${maxDate.toLocaleDateString('ru-RU',{month:'short',year:'2-digit'})}</span>
    </div>`;
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 8 — Payments by type vertical bars
═══════════════════════════════════════════════════════════════════ */
function anlRenderPaymentsBar(ships) {
  const el  = document.getElementById('anl-payments-chart');
  const sub = document.getElementById('anl-pay-sub');
  if (!el) return;

  pmLoad();
  const shipIds = new Set(ships.map(s => String(s.id)));
  const linked  = (typeof payments !== 'undefined' ? payments : [])
    .filter(p => shipIds.has(p.shipment_id));

  if (!linked.length) {
    el.innerHTML = '<div class="anl-empty">Нет привязанных платежей</div>';
    return;
  }

  const byType = {};
  linked.forEach(p => {
    const t = p.type || 'other';
    if (!byType[t]) byType[t] = { total: 0, paid: 0, count: 0 };
    byType[t].total += p.amount || 0;
    byType[t].paid  += p.status === 'paid' ? (p.amount||0) : 0;
    byType[t].count++;
  });

  const data = Object.entries(byType).sort((a,b) => b[1].total - a[1].total);
  if (sub) sub.textContent = linked.length + ' платежей · ' + anlFmtK(linked.reduce((s,p)=>s+(p.amount||0),0)) + ' $';

  el.innerHTML = _anlVertBar(data.map(([k, v], i) => ({
    label: (PM_TYPES[k]?.icon||'') + ' ' + (PM_TYPES[k]?.label||k).slice(0,10),
    value: v.total,
    sub:   'оплач. ' + anlFmtK(v.paid),
    color: ANL_PALETTE[i % ANL_PALETTE.length],
  })), '$');
}

/* ═══════════════════════════════════════════════════════════════════
   CHART 9 — Top products by total qty
═══════════════════════════════════════════════════════════════════ */
function anlRenderProductsBar(ships) {
  const el  = document.getElementById('anl-products-chart');
  const sub = document.getElementById('anl-prod-sub');
  if (!el) return;

  // Use shipment_items (central source) for analytics
  const shipIds = new Set(ships.map(s => String(s.id)));
  const siItems = DB_shipment_items.all().filter(i => shipIds.has(i.shipment_id));
  const prodMap = {};
  siItems.forEach(it => {
    const k = it.supplier_sku || it.description || '—';
    if (!prodMap[k]) prodMap[k] = { name: it.description || k, qty: 0, value: 0 };
    prodMap[k].qty   += parseFloat(it.quantity)   || 0;
    prodMap[k].value += parseFloat(it.total_price) || 0;
  });
  // Fallback to s.items[] if no shipment_items yet
  if (!siItems.length) {
    ships.forEach(s => {
      (s.items || []).forEach(it => {
        const k = it.sku || it.name || '—';
        if (!prodMap[k]) prodMap[k] = { name: it.name || k, qty: 0, value: 0 };
        prodMap[k].qty   += parseFloat(it.qty)   || 0;
        prodMap[k].value += (parseFloat(it.qty)||0) * (parseFloat(it.price)||0);
      });
    });
  }

  const data = Object.values(prodMap).sort((a,b)=>b.qty-a.qty).slice(0,8);
  if (sub) sub.textContent = Object.keys(prodMap).length + ' SKU';

  if (!data.length) {
    el.innerHTML = '<div class="anl-empty">Нет данных о товарах</div>';
    return;
  }

  el.innerHTML = _anlVertBar(data.map((d, i) => ({
    label: (d.name || '').slice(0, 16),
    value: d.qty,
    sub:   anlFmtK(d.value) + ' $',
    color: ANL_PALETTE[i % ANL_PALETTE.length],
  })), 'ед.');
}

/* ── Generic vertical bar SVG renderer ───────────────────────────── */
function _anlVertBar(data, unit) {
  if (!data.length) return '<div class="anl-empty">Нет данных</div>';
  const maxV  = Math.max(...data.map(d => d.value), 1);
  const BAR_W = Math.max(28, Math.min(52, Math.floor(220 / data.length)));
  const GAP   = Math.max(8, Math.floor(BAR_W * 0.4));
  const H = 110, PAD_B = 44, PAD_L = 8;
  const svgW = PAD_L + data.length * (BAR_W + GAP) + GAP;

  const gridLines = [0.5, 1].map(p => {
    const y = H + 2 - Math.round(p * H);
    return `<line class="anl-grid-line" x1="${PAD_L}" y1="${y}" x2="${svgW}" y2="${y}"/>`;
  }).join('');

  let bars = '';
  data.forEach((d, i) => {
    const x = PAD_L + i * (BAR_W + GAP) + GAP / 2;
    const h = Math.max(Math.round((d.value / maxV) * H), d.value > 0 ? 3 : 0);
    const y = H + 2 - h;
    bars += `<g class="anl-bar-group">
      <rect class="anl-bar-rect" x="${x}" y="${y}" width="${BAR_W}" height="${h}"
            fill="${d.color}" opacity=".85" rx="3">
        <title>${d.label}: ${d.value} ${unit}${d.sub ? '\n' + d.sub : ''}</title>
      </rect>
      <text class="anl-bar-val" x="${x + BAR_W/2}" y="${Math.max(y - 3, 8)}"
            text-anchor="middle" font-size="8.5">${anlFmtK(d.value)}</text>
      ${d.sub ? `<text class="anl-bar-label" x="${x + BAR_W/2}" y="${H + PAD_B - 20}"
            text-anchor="middle" font-size="7.5">${d.sub}</text>` : ''}
      <text class="anl-bar-label" x="${x + BAR_W/2}" y="${H + PAD_B - 6}"
            text-anchor="middle" font-size="8"
            transform="rotate(-30, ${x + BAR_W/2}, ${H + PAD_B - 6})">${d.label}</text>
    </g>`;
  });

  return `<svg class="anl-svg" width="${svgW}" height="${H + PAD_B + 4}"
          viewBox="0 0 ${svgW} ${H + PAD_B + 4}">
    ${gridLines}
    <line class="anl-axis-line" x1="${PAD_L}" y1="${H+2}" x2="${svgW}" y2="${H+2}"/>
    ${bars}
  </svg>`;
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT — CSV
═══════════════════════════════════════════════════════════════════ */
function anlExportCSV() {
  const year  = document.getElementById('anl-year-filter')?.value || '';
  const ships = anlGetFiltered(year);

  if (!ships.length) { showToast('Нет данных для экспорта'); return; }

  pmLoad();
  const header = [
    '№ Поставки','Компания','Статус','Поставщик','Транспорт','Базис',
    'Откуда','Куда','ETD','ETA','Срок (дн.)','Сумма контракта',
    'Валюта','Стоимость логистики (план)','Таможня (план)','Оплачено',
  ];

  const rows = ships.map(s => {
    const name = s.supplier_id
      ? (typeof shpSupName === 'function' ? shpSupName(s.supplier_id) : s.supplier_id)
      : '';
    const bgt  = DB_shipment_budget.where(x => x.shipment_id === String(s.id))[0];
    const lg = bgt ? ['log_freight','log_origin','log_dest','log_inland','log_insurance','log_other']
      .reduce((sum, k) => sum + (parseFloat(bgt[k+'_plan'])||0), 0) : 0;
    const cu = bgt ? ['cus_duty','cus_vat','cus_fee','cus_broker','cus_cert','cus_other']
      .reduce((sum, k) => sum + (parseFloat(bgt[k+'_plan'])||0), 0) : 0;
    const shipPmts = (typeof payments !== 'undefined' ? payments : [])
      .filter(p => p.shipment_id === String(s.id) && p.status === 'paid');
    const paid = shipPmts.reduce((sum, p) => sum + (p.amount||0), 0);
    const days = s.dates?.etd && s.dates?.eta
      ? Math.round((new Date(s.dates.eta) - new Date(s.dates.etd)) / 86400000)
      : '';
    return [
      s.shipment_number||'', s.company||'',
      (SHP_STATUSES[s.status]?.label||s.status||''),
      name, s.mode||'', s.incoterms||'', s.from||'', s.to||'',
      s.dates?.etd||'', s.dates?.eta||'', days,
      s.total_value||'', s.currency||'', lg||'', cu||'', paid||'',
    ];
  });

  const csv = [header, ...rows]
    .map(r => r.map(f => '"' + String(f).replace(/"/g,'""') + '"').join(','))
    .join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `analytics_shipments_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 CSV-экспорт скачан');
}


/* ╔═══════════════════════════════════════════════════════════════════════
   ║  РЕЕСТР ТАМОЖЕННЫХ ДЕКЛАРАЦИЙ  §18
   ║
   ║  Таблицы (vedTable):
   ║    DB_customs_declarations      — основная запись ДТ
   ║    DB_customs_declaration_items — товарные позиции (FK: declaration_id)
   ║    DB_customs_payments_dt       — таможенные платежи (FK: declaration_id)
   ║    DB_customs_documents_dt      — документы пакета ДТ (FK: declaration_id)
   ║
   ║  Все 4 таблицы связаны с DB_shipments через shipment_id на записи ДТ.
   ║  Существующие модули «Чек-лист таможни» и «Калькулятор» НЕ затронуты.
   ╚══════════════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────────
   СПРАВОЧНИКИ
───────────────────────────────────────────────────────────────────── */

const CDT_STATUSES = {
  draft:     { label: 'Черновик',      icon: '📝', cls: 'draft'     },
  filed:     { label: 'Подано',        icon: '📋', cls: 'filed'     },
  examining: { label: 'На проверке',   icon: '🔍', cls: 'examining' },
  released:  { label: 'Выпущено',      icon: '✅', cls: 'released'  },
  rejected:  { label: 'Отказано',      icon: '❌', cls: 'rejected'  },
  corrected: { label: 'Корректировка', icon: '🔄', cls: 'corrected' },
};

const CDT_PAY_TYPES = {
  duty:    { icon: '💰', label: 'Таможенная пошлина'   },
  vat:     { icon: '🧾', label: 'НДС при ввозе'        },
  fee:     { icon: '📋', label: 'Таможенный сбор'      },
  excise:  { icon: '🏷',  label: 'Акциз'               },
  penalty: { icon: '⚠️', label: 'Штраф / пени'        },
  other:   { icon: '📌', label: 'Иной платёж'          },
};

const CDT_DOC_TEMPLATES = [
  'Invoice / Счёт-фактура',
  'Packing List / Упаковочный лист',
  'Bill of Lading / Коносамент',
  'Certificate of Origin / Сертификат происхождения',
  'Insurance Certificate / Страховой сертификат',
  'Quality Certificate / Сертификат качества',
  'Technical Passport / Технический паспорт',
  'Freight Invoice / Счёт экспедитора',
  'Contract / Договор поставки',
  'Specification / Спецификация',
  'Разрешительный документ / Permit',
];

/* ─────────────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────────────── */

let _cdtSortField = 'file_date';
let _cdtSortAsc   = false;
let _cdtCurrent   = null;   // id of open declaration in detail modal

/* ─────────────────────────────────────────────────────────────────────
   SEED DEMO DATA  (один раз, для ENDV2026-001)
───────────────────────────────────────────────────────────────────── */

function cdtSeed() {
  if (localStorage.getItem('_cdt_seeded_v1')) return;
  localStorage.setItem('_cdt_seeded_v1', '1');
  if (DB_customs_declarations.count() > 0) return;

  const s1 = DB_shipments.all().find(s => s.shipment_number === 'ENDV2026-001');
  if (!s1) return;

  const sid = String(s1.id);

  // 1. Declaration
  const decl = DB_customs_declarations.insert({
    shipment_id:        sid,
    dt_number:          '10216100/150326/0123456',
    status:             'released',
    file_date:          '2026-03-15',
    release_date:       '2026-03-18',
    customs_post:       'Балтийский таможенный пост № 3',
    post_code:          '10216100',
    declarant:          'ООО «БалтикБрокер»',
    hs_code:            '8544499100',
    customs_value_rub:  8_893_675,
    customs_value_usd:  99_500,
    rate:               89.38,
    total_duties:       444_684,
    total_vat:          1_072_231,
    total_fees:         22_500,
    notes:              'CFR Санкт-Петербург. Арматурный кабель, страна происхождения Индия.',
  });

  const did = decl.id;

  // 2. Items (3 товарные позиции из поставки)
  const itemsData = [
    { line_num:1, hs_code:'8544499100', description:'3C X 0.50SQ.MM ARMOURED CABLE',
      country:'IN', qty:300, unit:'м', unit_price_usd:135.63, customs_value_rub:3_637_341,
      duty_rate:5, duty_amount:181_867, vat_rate:22, vat_amount:863_695 },
    { line_num:2, hs_code:'8544499100', description:'7C X 0.50SQ.MM ARMOURED CABLE',
      country:'IN', qty:300, unit:'м', unit_price_usd:206.35, customs_value_rub:5_531_808,
      duty_rate:5, duty_amount:276_590, vat_amount:0, vat_rate:22 },
    { line_num:3, hs_code:'8544499100', description:'4C X 0.50SQ.MM ARMOURED CABLE',
      country:'IN', qty:300, unit:'м', unit_price_usd:155.06, customs_value_rub:4_152_596,
      duty_rate:5, duty_amount:207_630, vat_rate:22, vat_amount:990_580 },
  ];
  itemsData.forEach(it =>
    DB_customs_declaration_items.insert({ declaration_id: did, ...it })
  );

  // 3. Payments
  const paymentsData = [
    { declaration_id: did, pay_type:'duty',  amount_rub: 444_684, status:'paid',
      pay_date:'2026-03-14', note:'Авансовый платёж', pp_num:'ПП-00091' },
    { declaration_id: did, pay_type:'vat',   amount_rub:1_072_231, status:'paid',
      pay_date:'2026-03-14', note:'НДС при ввозе 22%', pp_num:'ПП-00092' },
    { declaration_id: did, pay_type:'fee',   amount_rub:  22_500, status:'paid',
      pay_date:'2026-03-14', note:'Таможенный сбор за оформление', pp_num:'ПП-00093' },
  ];
  paymentsData.forEach(p =>
    DB_customs_payments_dt.insert(p)
  );

  // 4. Documents
  CDT_DOC_TEMPLATES.slice(0, 8).forEach((name, i) =>
    DB_customs_documents_dt.insert({
      declaration_id: did, name, received: i < 5, note: '',
    })
  );
}

/* ─────────────────────────────────────────────────────────────────────
   REGISTRY PAGE  (main render)
───────────────────────────────────────────────────────────────────── */

function cdtLoad() {
  cdtSeed();
  cdtRenderKPIs();
  cdtRenderTable();
}

function cdtRenderKPIs() {
  const all = DB_customs_declarations.all();
  const totalDuties = all.reduce((s, d) => s + (parseFloat(d.total_duties) || 0), 0);
  const totalVAT    = all.reduce((s, d) => s + (parseFloat(d.total_vat)    || 0), 0);

  // paid: sum customs_payments_dt where status=paid
  const paidRows = DB_customs_payments_dt.all().filter(p => p.status === 'paid');
  const totalPaid = paidRows.reduce((s, p) => s + (parseFloat(p.amount_rub) || 0), 0);

  const set = id => v => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  set('cdtk-total')(all.length);
  set('cdtk-filed')(all.filter(d => d.status === 'filed' || d.status === 'examining').length);
  set('cdtk-released')(all.filter(d => d.status === 'released').length);
  set('cdtk-duties')(fmtNum(totalDuties));
  set('cdtk-vat')(fmtNum(totalVAT));
  set('cdtk-paid')(fmtNum(totalPaid));
}

function cdtRenderTable() {
  const tbody  = document.getElementById('cdt-tbody');
  const empty  = document.getElementById('cdt-empty');
  if (!tbody) return;

  const search = (document.getElementById('cdt-search')?.value || '').toLowerCase();
  const stFlt  = document.getElementById('cdt-status-filter')?.value || '';

  let rows = DB_customs_declarations.all();

  // Filter
  if (stFlt)   rows = rows.filter(d => d.status === stFlt);
  if (search)  rows = rows.filter(d =>
    (d.dt_number   || '').toLowerCase().includes(search) ||
    (d.declarant   || '').toLowerCase().includes(search) ||
    (d.customs_post|| '').toLowerCase().includes(search) ||
    cdtShipNum(d.shipment_id).toLowerCase().includes(search)
  );

  // Sort
  rows.sort((a, b) => {
    let va = a[_cdtSortField] || '';
    let vb = b[_cdtSortField] || '';
    if (typeof va === 'number' || !isNaN(parseFloat(va))) {
      va = parseFloat(va) || 0; vb = parseFloat(vb) || 0;
    }
    return _cdtSortAsc ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
  });

  if (!rows.length) {
    tbody.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  tbody.innerHTML = rows.map(d => {
    const st  = CDT_STATUSES[d.status] || CDT_STATUSES.draft;
    const shipNum = cdtShipNum(d.shipment_id);
    return `<tr onclick="cdtOpenDetail('${d.id}')">
      <td><b style="font-family:'JetBrains Mono',monospace">${d.dt_number || '—'}</b></td>
      <td>${d.file_date ? fmtDate(d.file_date) : '—'}</td>
      <td>
        ${shipNum !== '—'
          ? `<span style="font-family:'JetBrains Mono',monospace;color:var(--co-accent);
                          font-weight:700;cursor:pointer"
                   onclick="event.stopPropagation();cdtGoToShipment('${d.shipment_id}')"
            >${shipNum}</span>`
          : '<span style="color:var(--text3)">—</span>'}
      </td>
      <td style="font-size:11.5px;color:var(--text2)">${d.customs_post || '—'}</td>
      <td style="text-align:right;font-family:'JetBrains Mono',monospace">
        ${fmtNum(d.customs_value_rub || 0)}</td>
      <td style="text-align:right;font-family:'JetBrains Mono',monospace;color:var(--rust)">
        ${fmtNum(d.total_duties || 0)}</td>
      <td style="text-align:right;font-family:'JetBrains Mono',monospace;color:var(--blue)">
        ${fmtNum(d.total_vat || 0)}</td>
      <td><span class="cdt-badge ${st.cls}">${st.icon} ${st.label}</span></td>
      <td style="font-size:11.5px">${d.release_date ? fmtDate(d.release_date) : '—'}</td>
      <td onclick="event.stopPropagation()">
        <button class="admin-action-btn" style="font-size:10px;padding:3px 9px"
                onclick="cdtOpenForm('${d.id}')">✎</button>
        <button class="admin-action-btn" style="font-size:10px;padding:3px 9px;color:var(--red)"
                onclick="cdtDelete('${d.id}')">🗑</button>
      </td>
    </tr>`;
  }).join('');
}

function cdtSort(field) {
  if (_cdtSortField === field) _cdtSortAsc = !_cdtSortAsc;
  else { _cdtSortField = field; _cdtSortAsc = false; }
  cdtRenderTable();
}

/* ─────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────── */

function cdtShipNum(shipId) {
  if (!shipId) return '—';
  const s = DB_shipments.find(String(shipId));
  return s?.shipment_number || String(shipId).slice(-6);
}

function cdtFmtRub(n) {
  return fmtNum(n) + ' ₽';
}

function cdtBadge(status) {
  const st = CDT_STATUSES[status] || CDT_STATUSES.draft;
  return `<span class="cdt-badge ${st.cls}">${st.icon} ${st.label}</span>`;
}

function cdtGoToShipment(shipId) {
  if (!shipId) return;
  showSection('shipments');
  setTimeout(() => shpOpenDetail(String(shipId)), 200);
}

/* ─────────────────────────────────────────────────────────────────────
   DETAIL MODAL
───────────────────────────────────────────────────────────────────── */

function cdtOpenDetail(id) {
  const d = DB_customs_declarations.find(id);
  if (!d) return;
  _cdtCurrent = id;

  // Header
  const st = CDT_STATUSES[d.status] || CDT_STATUSES.draft;
  const el = id => document.getElementById(id);

  el('cdt-d-dtnum').textContent = d.dt_number || 'б/н';

  const shipNum = cdtShipNum(d.shipment_id);
  el('cdt-d-meta').innerHTML = [
    cdtBadge(d.status),
    d.file_date    ? `<span class="cdt-head-pill">📅 Подано: ${fmtDate(d.file_date)}</span>` : '',
    d.release_date ? `<span class="cdt-head-pill">✅ Выпущено: ${fmtDate(d.release_date)}</span>` : '',
    d.customs_post ? `<span class="cdt-head-pill">🏛 ${d.customs_post}</span>` : '',
    shipNum !== '—' ? `<span class="cdt-head-pill" style="cursor:pointer;color:var(--co-accent)"
        onclick="cdtGoToShipment('${d.shipment_id}')">🚢 ${shipNum}</span>` : '',
  ].filter(Boolean).join('');

  // Reset tabs
  document.querySelectorAll('.cdt-tab').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll('.cdt-tab-pane').forEach((p, i) => p.classList.toggle('active', i === 0));

  cdtRenderPaneInfo(d);

  el('cdt-detail-bg').classList.add('open');
}

function cdtCloseDetail() {
  document.getElementById('cdt-detail-bg')?.classList.remove('open');
  _cdtCurrent = null;
}

function cdtSetTab(tab, btn) {
  document.querySelectorAll('.cdt-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.cdt-tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cdt-pane-' + tab)?.classList.add('active');

  if (!_cdtCurrent) return;
  const d = DB_customs_declarations.find(_cdtCurrent);
  if (!d) return;

  if (tab === 'info')      cdtRenderPaneInfo(d);
  if (tab === 'items')     cdtRenderPaneItems(d);
  if (tab === 'payments')  cdtRenderPanePayments(d);
  if (tab === 'documents') cdtRenderPaneDocuments(d);
}

/* ── Pane: Info ─────────────────────────────────────────────────── */
function cdtRenderPaneInfo(d) {
  const el = document.getElementById('cdt-pane-info');
  if (!el) return;

  const totalPayments = DB_customs_payments_dt
    .where(p => p.declaration_id === d.id)
    .reduce((s, p) => s + (parseFloat(p.amount_rub) || 0), 0);
  const paidPayments = DB_customs_payments_dt
    .where(p => p.declaration_id === d.id && p.status === 'paid')
    .reduce((s, p) => s + (parseFloat(p.amount_rub) || 0), 0);
  const itemsCount = DB_customs_declaration_items.where(i => i.declaration_id === d.id).length;

  const cells = [
    { lbl: '№ ДТ',                 val: d.dt_number || '—',      accent: true },
    { lbl: 'Статус',               val: cdtBadge(d.status),      raw: true    },
    { lbl: 'Дата подачи',          val: d.file_date ? fmtDate(d.file_date) : '—' },
    { lbl: 'Дата выпуска',         val: d.release_date ? fmtDate(d.release_date) : '—', green: true },
    { lbl: 'Таможенный пост',      val: d.customs_post    || '—' },
    { lbl: 'Код поста',            val: d.post_code       || '—' },
    { lbl: 'Декларант / Брокер',   val: d.declarant       || '—' },
    { lbl: 'Поставка',             val: cdtShipNum(d.shipment_id), accent: true },
    { lbl: 'Код ТН ВЭД',           val: d.hs_code         || '—' },
    { lbl: 'Там. стоимость, ₽',    val: cdtFmtRub(d.customs_value_rub), accent: true },
    { lbl: 'Там. стоимость, USD',  val: (d.customs_value_usd ? fmtNum(d.customs_value_usd) + ' $' : '—') },
    { lbl: 'Курс ЦБ',              val: d.rate ? d.rate + ' ₽/$' : '—' },
  ];

  const paySummary = [
    { lbl: 'Пошлина',      val: cdtFmtRub(d.total_duties), color: 'var(--rust)' },
    { lbl: 'НДС',          val: cdtFmtRub(d.total_vat),    color: 'var(--blue)' },
    { lbl: 'Там. сборы',   val: cdtFmtRub(d.total_fees),   color: 'var(--gold)' },
    { lbl: 'Итого начислено', val: cdtFmtRub((parseFloat(d.total_duties)||0)+(parseFloat(d.total_vat)||0)+(parseFloat(d.total_fees)||0)), color: 'var(--text)', bold: true },
    { lbl: 'Уплачено',     val: cdtFmtRub(paidPayments),   color: 'var(--green)' },
  ];

  el.innerHTML = `
    <div class="cdt-info-grid">
      ${cells.map(cell => `
        <div class="cdt-info-cell">
          <div class="cdt-info-lbl">${cell.lbl}</div>
          <div class="cdt-info-val${cell.accent?' accent':cell.green?' green':''}">
            ${cell.raw ? cell.val : cdtEscape(String(cell.val))}
          </div>
        </div>`).join('')}
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin-bottom:20px">
      ${paySummary.map(p => `
        <div style="background:var(--surface2);border:1px solid var(--border);
                    border-radius:var(--radius-sm);padding:12px 16px">
          <div class="cdt-info-lbl">${p.lbl}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:14px;
                      font-weight:${p.bold?'900':'700'};color:${p.color};margin-top:3px">
            ${p.val}
          </div>
        </div>`).join('')}
    </div>

    ${d.notes ? `
      <div style="background:var(--surface2);border:1px solid var(--border);
                  border-radius:var(--radius-sm);padding:14px 18px;margin-bottom:16px">
        <div class="cdt-info-lbl" style="margin-bottom:6px">Примечания</div>
        <div style="font-size:12.5px;color:var(--text2);line-height:1.6">${cdtEscape(d.notes)}</div>
      </div>` : ''}

    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="admin-action-btn" onclick="cdtOpenForm('${d.id}')">✎ Редактировать ДТ</button>
      ${d.shipment_id
        ? `<button class="admin-action-btn" onclick="cdtGoToShipment('${d.shipment_id}')">🚢 Открыть поставку</button>`
        : ''}
      <button class="admin-action-btn" onclick="cdtSetTab('items',document.querySelectorAll('.cdt-tab')[1])">
        📦 Товары (${itemsCount})
      </button>
      <button class="admin-action-btn" onclick="cdtSetTab('payments',document.querySelectorAll('.cdt-tab')[2])">
        💳 Платежи
      </button>
    </div>`;
}

/* ── Pane: Items ────────────────────────────────────────────────── */
function cdtRenderPaneItems(d) {
  const el = document.getElementById('cdt-pane-items');
  if (!el) return;

  const items = DB_customs_declaration_items.where(i => i.declaration_id === d.id)
    .sort((a, b) => (a.line_num || 0) - (b.line_num || 0));

  const totalCustomsVal = items.reduce((s, i) => s + (parseFloat(i.customs_value_rub) || 0), 0);
  const totalDuty       = items.reduce((s, i) => s + (parseFloat(i.duty_amount)       || 0), 0);
  const totalVAT        = items.reduce((s, i) => s + (parseFloat(i.vat_amount)        || 0), 0);

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:800;font-size:13px">📦 Товарные позиции (${items.length})</div>
      <button class="admin-action-btn" onclick="cdtAddItem('${d.id}')">+ Добавить позицию</button>
    </div>

    ${items.length ? `
    <div class="cdt-table-wrap">
      <table class="cdt-items-table">
        <thead>
          <tr>
            <th style="width:32px">№</th>
            <th>Код ТН ВЭД</th>
            <th>Наименование товара</th>
            <th>Страна</th>
            <th class="r">Кол-во</th>
            <th>Ед.</th>
            <th class="r">Цена, $</th>
            <th class="r">Там. стоимость, ₽</th>
            <th class="r">Ставка %</th>
            <th class="r">Пошлина, ₽</th>
            <th class="r">НДС, ₽</th>
            <th style="width:48px"></th>
          </tr>
        </thead>
        <tbody>
          ${items.map(it => `
            <tr>
              <td style="color:var(--text3);font-family:'JetBrains Mono',monospace">${it.line_num || '—'}</td>
              <td style="font-family:'JetBrains Mono',monospace;font-weight:700">${it.hs_code || '—'}</td>
              <td style="font-size:11.5px;max-width:180px">${cdtEscape(it.description || '—')}</td>
              <td style="font-family:'JetBrains Mono',monospace">${it.country || '—'}</td>
              <td class="r">${fmtNum(it.qty || 0)}</td>
              <td>${it.unit || '—'}</td>
              <td class="r">${it.unit_price_usd ? fmtNum(it.unit_price_usd) : '—'}</td>
              <td class="r" style="color:var(--co-accent)">${fmtNum(it.customs_value_rub || 0)}</td>
              <td class="r">${it.duty_rate ? it.duty_rate + '%' : '—'}</td>
              <td class="r" style="color:var(--rust)">${fmtNum(it.duty_amount || 0)}</td>
              <td class="r" style="color:var(--blue)">${fmtNum(it.vat_amount  || 0)}</td>
              <td>
                <button class="admin-action-btn" style="font-size:10px;padding:2px 7px"
                        onclick="cdtEditItem('${it.id}','${d.id}')">✎</button>
                <button class="admin-action-btn" style="font-size:10px;padding:2px 7px;color:var(--red)"
                        onclick="cdtDeleteItem('${it.id}','${d.id}')">×</button>
              </td>
            </tr>`).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7">ИТОГО</td>
            <td class="r" style="color:var(--co-accent)">${fmtNum(totalCustomsVal)}</td>
            <td></td>
            <td class="r" style="color:var(--rust)">${fmtNum(totalDuty)}</td>
            <td class="r" style="color:var(--blue)">${fmtNum(totalVAT)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>` : `
    <div style="text-align:center;padding:40px;color:var(--text3);
                border:1px dashed var(--border);border-radius:var(--radius-lg)">
      <div style="font-size:32px;margin-bottom:8px;opacity:.3">📦</div>
      <div>Товарные позиции не добавлены</div>
    </div>`}`;
}

/* ── Pane: Payments ─────────────────────────────────────────────── */
function cdtRenderPanePayments(d) {
  const el = document.getElementById('cdt-pane-payments');
  if (!el) return;

  const pmts  = DB_customs_payments_dt.where(p => p.declaration_id === d.id)
    .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  const paid  = pmts.filter(p => p.status === 'paid').reduce((s, p) => s + (parseFloat(p.amount_rub)||0), 0);
  const total = pmts.reduce((s, p) => s + (parseFloat(p.amount_rub)||0), 0);
  const pct   = total > 0 ? Math.min(Math.round(paid / total * 100), 100) : 0;

  const charged = (parseFloat(d.total_duties)||0)+(parseFloat(d.total_vat)||0)+(parseFloat(d.total_fees)||0);

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:800;font-size:13px">💳 Таможенные платежи (${pmts.length})</div>
      <button class="admin-action-btn" onclick="cdtAddPayment('${d.id}')">+ Добавить платёж</button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">
      ${[
        { lbl:'Начислено', val: cdtFmtRub(charged), c: 'var(--text)' },
        { lbl:'Уплачено',  val: cdtFmtRub(paid),    c: 'var(--green)' },
        { lbl:'Оплата',    val: pct + '%',           c: pct===100 ? 'var(--green)' : 'var(--co-accent)' },
      ].map(k => `
        <div style="background:var(--surface2);border:1px solid var(--border);
                    border-radius:var(--radius-sm);padding:12px 16px">
          <div class="cdt-info-lbl">${k.lbl}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:15px;
                      font-weight:800;color:${k.c};margin-top:3px">${k.val}</div>
        </div>`).join('')}
    </div>

    <div style="height:5px;background:var(--surface3);border-radius:3px;margin-bottom:20px;overflow:hidden">
      <div style="height:100%;width:${pct}%;background:var(--green);border-radius:3px;transition:width .4s ease"></div>
    </div>

    ${pmts.map(p => {
      const pt = CDT_PAY_TYPES[p.pay_type] || CDT_PAY_TYPES.other;
      const isPaid = p.status === 'paid';
      return `
        <div class="cdt-pay-card">
          <div class="cdt-pay-icon">${pt.icon}</div>
          <div style="flex:1;min-width:0">
            <div class="cdt-pay-type">${pt.label}</div>
            <div class="cdt-pay-amount">${cdtFmtRub(p.amount_rub || 0)}</div>
            <div style="font-size:10.5px;color:var(--text3);margin-top:2px;display:flex;gap:12px;flex-wrap:wrap">
              ${p.pay_date ? `<span>📅 ${fmtDate(p.pay_date)}</span>` : ''}
              ${p.pp_num   ? `<span>ПП: <b>${cdtEscape(p.pp_num)}</b></span>` : ''}
              ${p.note     ? `<span>${cdtEscape(p.note)}</span>` : ''}
            </div>
          </div>
          <span class="cdt-pay-status ${isPaid ? 'paid' : 'pending'}">${isPaid ? '✅ Оплачен' : '⏳ Ожидается'}</span>
          <div style="display:flex;gap:4px;flex-shrink:0">
            <button class="admin-action-btn" style="font-size:10px;padding:3px 8px"
                    onclick="cdtEditPayment('${p.id}','${d.id}')">✎</button>
            <button class="admin-action-btn" style="font-size:10px;padding:3px 8px;color:var(--red)"
                    onclick="cdtDeletePayment('${p.id}','${d.id}')">×</button>
          </div>
        </div>`;
    }).join('')}

    ${!pmts.length ? `
      <div style="text-align:center;padding:40px;color:var(--text3);
                  border:1px dashed var(--border);border-radius:var(--radius-lg)">
        <div style="font-size:32px;margin-bottom:8px;opacity:.3">💳</div>
        <div>Платежи не добавлены</div>
      </div>` : ''}`;
}

/* ── Pane: Documents ────────────────────────────────────────────── */
function cdtRenderPaneDocuments(d) {
  const el = document.getElementById('cdt-pane-documents');
  if (!el) return;

  const docs = DB_customs_documents_dt.where(doc => doc.declaration_id === d.id)
    .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
  const received = docs.filter(doc => doc.received).length;

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:800;font-size:13px">📎 Документы (${received}/${docs.length} получено)</div>
      <div style="display:flex;gap:8px">
        <button class="admin-action-btn" onclick="cdtAddDocFromTemplate('${d.id}')">+ Из шаблона</button>
        <button class="admin-action-btn" onclick="cdtAddDoc('${d.id}')">+ Новый</button>
      </div>
    </div>

    <div style="height:5px;background:var(--surface3);border-radius:3px;margin-bottom:20px;overflow:hidden">
      <div style="height:100%;width:${docs.length ? Math.round(received/docs.length*100) : 0}%;
                  background:var(--green);border-radius:3px;transition:width .4s ease"></div>
    </div>

    ${docs.map(doc => `
      <div class="cdt-doc-row">
        <span class="cdt-doc-check" onclick="cdtToggleDoc('${doc.id}','${d.id}')"
              title="${doc.received ? 'Снять отметку' : 'Отметить получен'}">
          ${doc.received ? '✅' : '⬜'}
        </span>
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:12.5px;${doc.received ? '' : 'color:var(--text3)'}">${cdtEscape(doc.name || '—')}</div>
          ${doc.note ? `<div style="font-size:11px;color:var(--text3)">${cdtEscape(doc.note)}</div>` : ''}
        </div>
        <button class="admin-action-btn" style="font-size:10px;padding:3px 8px;color:var(--red)"
                onclick="cdtDeleteDoc('${doc.id}','${d.id}')">×</button>
      </div>`).join('')}

    ${!docs.length ? `
      <div style="text-align:center;padding:40px;color:var(--text3);
                  border:1px dashed var(--border);border-radius:var(--radius-lg)">
        <div style="font-size:32px;margin-bottom:8px;opacity:.3">📎</div>
        <div>Документы не добавлены</div>
      </div>` : ''}`;
}

/* ─────────────────────────────────────────────────────────────────────
   FORM MODAL  (create / edit declaration)
───────────────────────────────────────────────────────────────────── */

function cdtOpenForm(id) {
  const isEdit = !!id;
  const d = isEdit ? DB_customs_declarations.find(id) : null;

  // Populate shipment dropdown
  const sel = document.getElementById('cdt-f-shipment-id');
  if (sel) {
    const ships = DB_shipments.all().sort((a, b) =>
      (a.shipment_number || '').localeCompare(b.shipment_number || ''));
    sel.innerHTML = '<option value="">— без поставки —</option>' +
      ships.map(s =>
        `<option value="${s.id}" ${d?.shipment_id === String(s.id) ? 'selected' : ''}>
           ${s.shipment_number}${s.supplier_id ? ' · ' + shpSupName(s.supplier_id) : ''}
         </option>`).join('');
  }

  const set = (eid, v) => { const el = document.getElementById(eid); if (el) el.value = v ?? ''; };

  set('cdt-f-id',                isEdit ? d.id : '');
  set('cdt-f-dt-number',         d?.dt_number        || '');
  set('cdt-f-status',            d?.status           || 'draft');
  set('cdt-f-shipment-id',       d?.shipment_id      || '');
  set('cdt-f-file-date',         d?.file_date        || '');
  set('cdt-f-release-date',      d?.release_date     || '');
  set('cdt-f-customs-post',      d?.customs_post     || '');
  set('cdt-f-declarant',         d?.declarant        || '');
  set('cdt-f-post-code',         d?.post_code        || '');
  set('cdt-f-customs-value-rub', d?.customs_value_rub|| '');
  set('cdt-f-customs-value-usd', d?.customs_value_usd|| '');
  set('cdt-f-rate',              d?.rate             || '');
  set('cdt-f-total-duties',      d?.total_duties     || '');
  set('cdt-f-total-vat',         d?.total_vat        || '');
  set('cdt-f-total-fees',        d?.total_fees       || '');
  set('cdt-f-hs-code',           d?.hs_code          || '');
  set('cdt-f-notes',             d?.notes            || '');

  const title = document.getElementById('cdt-form-title-text');
  if (title) title.textContent = isEdit ? 'Редактировать декларацию' : 'Новая декларация';

  document.getElementById('cdt-form-bg')?.classList.add('open');
}

function cdtCloseForm() {
  document.getElementById('cdt-form-bg')?.classList.remove('open');
}

/* ════════════════════════════════════════════════════════════════
   CDT PDF IMPORT — считывание ДТ через Claude API
════════════════════════════════════════════════════════════════ */

let _cdtExtracted = null; // stores last extracted DT data for apply button

function cdtHandleDrop(event) {
  event.preventDefault();
  const box = document.getElementById('cdt-import-box');
  if (box) { box.style.borderColor = 'var(--border)'; box.style.background = 'var(--surface2)'; }
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    cdtShowStatus('error', '⚠ Пожалуйста, загрузите файл в формате PDF');
    return;
  }
  cdtImportPdf(file);
}

async function cdtImportPdf(file) {
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) {
    cdtShowStatus('error', '⚠ Файл слишком большой (максимум 20 МБ)');
    return;
  }

  cdtShowStatus('loading', '<span class="inv-spinner"></span>Загрузка PDF и анализ граф ДТ через Claude AI...');
  document.getElementById('cdt-import-preview').style.display = 'none';

  try {
    // Convert PDF to base64
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload  = () => resolve(reader.result.split(',')[1]);
      reader.onerror = () => reject(new Error('Ошибка чтения файла'));
      reader.readAsDataURL(file);
    });

    cdtShowStatus('loading', '<span class="inv-spinner"></span>Claude анализирует ДТ по графам... обычно 15–25 секунд');

    const systemPrompt = `Ты — эксперт по таможенному оформлению в России и анализу Деклараций на Товары (ДТ).
Проанализируй PDF декларации и извлеки данные строго по графам.

Верни ТОЛЬКО валидный JSON без пояснений, markdown или другого текста.

Формат ответа:
{
  "dt_number": "регистрационный номер ДТ из графы A (формат: 10216100/150326/0123456)",
  "file_date": "дата подачи в формате YYYY-MM-DD (из графы A или штампа таможни)",
  "release_date": "дата выпуска в формате YYYY-MM-DD (из штампа 'Выпуск разрешён' или графы C)",
  "customs_post": "наименование таможенного поста (из графы A, например: Балтийская таможня, пост №3)",
  "post_code": "код таможенного поста (первые 8 цифр регистрационного номера, например: 10216100)",
  "declarant": "декларант или таможенный брокер из графы 14 или 54",
  "customs_value_rub": числовое_значение_таможенной_стоимости_в_рублях_из_графы_12_или_45,
  "customs_value_usd": числовое_значение_таможенной_стоимости_в_долларах_из_графы_22,
  "rate": числовое_значение_курса_рубля_к_доллару_из_графы_23,
  "total_duties": числовое_значение_пошлины_из_графы_47_код_2010_или_итого_пошлин,
  "total_vat": числовое_значение_НДС_из_графы_47_код_5010_или_итого_НДС,
  "total_fees": числовое_значение_таможенных_сборов_из_графы_47_код_1010_или_1011,
  "hs_code": "основной код ТН ВЭД из графы 33 (10 знаков)",
  "incoterms": "условия поставки из графы 20",
  "country_origin": "страна происхождения из графы 34",
  "country_send": "страна отправления из графы 15",
  "goods_desc": "краткое описание товара из графы 31",
  "status": "определи статус: draft/filed/examining/released/rejected по содержанию документа",
  "notes": "любые важные примечания: особые условия, отказы, корректировки",
  "confidence": "high/medium/low — уверенность в качестве распознавания"
}

Если поле не найдено — верни "" или 0.
Суммы — только числа без символов и пробелов.`;

    const response = await claudeFetch({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: [{
          type: 'document',
          source: { type: 'base64', media_type: 'application/pdf', data: base64 }
        }, {
          type: 'text',
          text: 'Извлеки данные из всех граф этой Декларации на Товары (ДТ) и верни строго в JSON-формате.'
        }]
      }]
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(`API ошибка ${response.status}: ${errData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const rawText = data.content?.map(b => b.text || '').join('').trim();

    let extracted;
    try {
      const clean = rawText.replace(/^```[a-z]*\n?/, '').replace(/\n?```$/, '').trim();
      extracted = JSON.parse(clean);
    } catch(e) {
      throw new Error('Не удалось разобрать ответ Claude. Попробуйте другой PDF.');
    }

    const confLabel = extracted.confidence === 'low'
      ? ' · <span style="color:var(--gold)">⚠ низкая уверенность — проверьте данные</span>'
      : '';
    cdtShowStatus('success', `✅ Данные успешно извлечены из «${file.name}»${confLabel}`);
    cdtShowPreview(extracted, file.name);

  } catch(e) {
    console.error('CDT PDF import error:', e);
    if (e.message.includes('API ключ') || e.message.includes('api key') || e.message.includes('401')) {
      cdtShowStatus('error', '⚠ Не настроен API ключ Claude. Нажмите ⚙ в шапке и введите ключ.');
    } else {
      cdtShowStatus('error', `⚠ Ошибка: ${e.message}`);
    }
  }
}

function cdtShowStatus(type, html) {
  const el = document.getElementById('cdt-import-status');
  if (!el) return;
  el.style.display = 'block';
  const styles = {
    loading: { bg:'rgba(31,122,99,0.07)',  border:'rgba(31,122,99,0.18)',  color:'var(--teal)' },
    success: { bg:'rgba(31,122,99,0.07)',  border:'rgba(31,122,99,0.20)',  color:'var(--green)' },
    error:   { bg:'rgba(214,69,69,0.07)',  border:'rgba(214,69,69,0.20)',  color:'var(--red)' },
  };
  const s = styles[type] || styles.loading;
  el.style.background  = s.bg;
  el.style.border      = `1px solid ${s.border}`;
  el.style.color       = s.color;
  el.innerHTML         = html;
}

function cdtShowPreview(data, filename) {
  const el = document.getElementById('cdt-import-preview');
  if (!el) return;

  _cdtExtracted = data; // store for apply button

  const fmt = (v) => v ? `<strong>${String(v).replace(/</g,'&lt;')}</strong>` : '<span style="color:var(--text3)">—</span>';
  const fmtNum = (v, suffix) => (v && Number(v) !== 0)
    ? `<strong>${Number(v).toLocaleString('ru-RU', {minimumFractionDigits:2,maximumFractionDigits:2})}</strong>${suffix ? ' ' + suffix : ''}`
    : '<span style="color:var(--text3)">—</span>';

  const rows = [
    ['Номер ДТ',            fmt(data.dt_number)],
    ['Дата подачи',         fmt(data.file_date)],
    ['Дата выпуска',        fmt(data.release_date)],
    ['Таможенный пост',     fmt(data.customs_post)],
    ['Код поста',           fmt(data.post_code)],
    ['Декларант / Брокер',  fmt(data.declarant)],
    ['Там. стоимость, ₽',   fmtNum(data.customs_value_rub, '₽')],
    ['Там. стоимость, USD',  fmtNum(data.customs_value_usd, '$')],
    ['Курс ЦБ',             fmt(data.rate)],
    ['Пошлина, ₽',          fmtNum(data.total_duties, '₽')],
    ['НДС, ₽',              fmtNum(data.total_vat, '₽')],
    ['Сборы, ₽',            fmtNum(data.total_fees, '₽')],
    ['Код ТН ВЭД',          fmt(data.hs_code)],
    ['Описание товара',     fmt(data.goods_desc)],
  ].filter(([, v]) => !v.includes('—'));

  el.style.display = 'block';
  el.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden">
      <div style="padding:10px 14px;background:var(--surface2);border-bottom:1px solid var(--border);
                  display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:12px;font-weight:600;color:var(--text)">📋 Распознанные данные ДТ</span>
        <span style="font-size:11px;color:var(--text4)">${filename}</span>
      </div>
      <div style="padding:10px 14px">
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          ${rows.map(([label, val]) => `
            <tr>
              <td style="padding:4px 8px 4px 0;color:var(--text3);white-space:nowrap;vertical-align:top;width:44%">${label}</td>
              <td style="padding:4px 0;color:var(--text)">${val}</td>
            </tr>`).join('')}
        </table>
      </div>
      <div style="padding:10px 14px;background:var(--surface2);border-top:1px solid var(--border);
                  display:flex;gap:8px;justify-content:flex-end">
        <button class="gen-btn secondary" style="margin:0;padding:6px 16px;font-size:12px"
                onclick="document.getElementById('cdt-import-preview').style.display='none'">
          Отмена
        </button>
        <button class="gen-btn" style="margin:0;padding:6px 16px;font-size:12px"
                onclick="cdtApplyExtracted()">
          ✅ Применить данные
        </button>
      </div>
    </div>`;
}

function cdtApplyExtracted() {
  const data = _cdtExtracted;
  if (!data) return;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined && val !== null && val !== '' && val !== 0) el.value = val;
  };

  setVal('cdt-f-dt-number',         data.dt_number);
  setVal('cdt-f-file-date',         data.file_date);
  setVal('cdt-f-release-date',      data.release_date);
  setVal('cdt-f-customs-post',      data.customs_post);
  setVal('cdt-f-post-code',         data.post_code || (data.dt_number ? data.dt_number.split('/')[0] : ''));
  setVal('cdt-f-declarant',         data.declarant);
  setVal('cdt-f-customs-value-rub', data.customs_value_rub || '');
  setVal('cdt-f-customs-value-usd', data.customs_value_usd || '');
  setVal('cdt-f-rate',              data.rate || '');
  setVal('cdt-f-total-duties',      data.total_duties || '');
  setVal('cdt-f-total-vat',         data.total_vat || '');
  setVal('cdt-f-total-fees',        data.total_fees || '');
  setVal('cdt-f-hs-code',           data.hs_code);

  // Notes: combine original notes with goods description
  const noteParts = [];
  if (data.goods_desc)  noteParts.push('Товар: ' + data.goods_desc);
  if (data.incoterms)   noteParts.push('Условия: ' + data.incoterms);
  if (data.country_origin) noteParts.push('Страна происхождения: ' + data.country_origin);
  if (data.notes)       noteParts.push(data.notes);
  if (noteParts.length) setVal('cdt-f-notes', noteParts.join('\n'));

  // Status — map Claude's status guess
  if (data.status) {
    const statusEl = document.getElementById('cdt-f-status');
    const validStatuses = ['draft','filed','examining','released','rejected','corrected'];
    if (statusEl && validStatuses.includes(data.status)) statusEl.value = data.status;
  }

  document.getElementById('cdt-import-preview').style.display = 'none';
  cdtShowStatus('success',
    `✅ Данные применены — проверьте и при необходимости скорректируйте форму`);

  // Scroll to first field
  document.getElementById('cdt-f-dt-number')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cdtSave() {
  const get = id => document.getElementById(id)?.value?.trim() || '';

  const dtNum = get('cdt-f-dt-number');
  if (!dtNum) { showToast('⚠ Введите номер ДТ'); return; }

  const data = {
    dt_number:         dtNum,
    status:            get('cdt-f-status')            || 'draft',
    shipment_id:       get('cdt-f-shipment-id')       || '',
    file_date:         get('cdt-f-file-date')         || '',
    release_date:      get('cdt-f-release-date')      || '',
    customs_post:      get('cdt-f-customs-post')      || '',
    declarant:         get('cdt-f-declarant')         || '',
    post_code:         get('cdt-f-post-code')         || '',
    customs_value_rub: parseFloat(get('cdt-f-customs-value-rub')) || 0,
    customs_value_usd: parseFloat(get('cdt-f-customs-value-usd')) || 0,
    rate:              parseFloat(get('cdt-f-rate'))              || 0,
    total_duties:      parseFloat(get('cdt-f-total-duties'))      || 0,
    total_vat:         parseFloat(get('cdt-f-total-vat'))         || 0,
    total_fees:        parseFloat(get('cdt-f-total-fees'))        || 0,
    hs_code:           get('cdt-f-hs-code')           || '',
    notes:             get('cdt-f-notes')             || '',
  };

  const id = get('cdt-f-id');
  if (id) {
    DB_customs_declarations.update(id, data);
    showToast('💾 Декларация обновлена');
    // Refresh detail if open
    if (_cdtCurrent === id) {
      const fresh = DB_customs_declarations.find(id);
      if (fresh) {
        document.getElementById('cdt-d-dtnum').textContent = fresh.dt_number || 'б/н';
        cdtRenderPaneInfo(fresh);
      }
    }
  } else {
    const row = DB_customs_declarations.insert(data);
    // If linked to a shipment, log event
    if (data.shipment_id) {
      _cdtLogToShipment(data.shipment_id, row.id, data.dt_number);
    }
    showToast('✅ Декларация создана');
  }

  cdtCloseForm();
  cdtLoad();
}

/* ─────────────────────────────────────────────────────────────────────
   DELETE
───────────────────────────────────────────────────────────────────── */

function cdtDelete(id) {
  const d = DB_customs_declarations.find(id);
  if (!d) return;
  if (!confirm(`Удалить декларацию ${d.dt_number || id}?\n\nВсе связанные товары, платежи и документы будут также удалены.`)) return;
  _cdtDeleteCascade(id);
  showToast('🗑 Декларация удалена');
  cdtLoad();
}

function cdtDeleteCurrent() {
  if (_cdtCurrent) {
    cdtDelete(_cdtCurrent);
    cdtCloseDetail();
  }
}
function cdtEditCurrent() {
  if (_cdtCurrent) cdtOpenForm(_cdtCurrent);
}

function _cdtDeleteCascade(declId) {
  // Delete all child records
  DB_customs_declaration_items.where(i => i.declaration_id === declId)
    .forEach(i => {
      const rows = DB_customs_declaration_items.all().filter(r => r.id !== i.id);
      DB_customs_declaration_items.save(rows);
    });
  DB_customs_payments_dt.where(p => p.declaration_id === declId)
    .forEach(p => {
      const rows = DB_customs_payments_dt.all().filter(r => r.id !== p.id);
      DB_customs_payments_dt.save(rows);
    });
  DB_customs_documents_dt.where(doc => doc.declaration_id === declId)
    .forEach(doc => {
      const rows = DB_customs_documents_dt.all().filter(r => r.id !== doc.id);
      DB_customs_documents_dt.save(rows);
    });
  // Delete declaration itself
  const rows = DB_customs_declarations.all().filter(r => r.id !== declId);
  DB_customs_declarations.save(rows);
}

/* ─────────────────────────────────────────────────────────────────────
   ITEMS CRUD  (inline prompt-based for simplicity)
───────────────────────────────────────────────────────────────────── */

function cdtAddItem(declId) {
  const hsCode   = prompt('Код ТН ВЭД:',          '8544499100') || '';
  const desc     = prompt('Наименование товара:',  '') || '';
  const qty      = parseFloat(prompt('Количество:', '1') || '0');
  const unit     = prompt('Единица измерения:', 'шт') || 'шт';
  const priceUsd = parseFloat(prompt('Цена за ед. (USD):', '0') || '0');
  const cvRub    = parseFloat(prompt('Там. стоимость (₽):', '0') || '0');
  const dutyRate = parseFloat(prompt('Ставка пошлины (%):', '5') || '0');
  const dutyAmt  = parseFloat(prompt('Сумма пошлины (₽):', String(Math.round(cvRub * dutyRate / 100))) || '0');
  const vatAmt   = parseFloat(prompt('НДС (₽):', String(Math.round((cvRub + dutyAmt) * 0.22))) || '0');

  const items = DB_customs_declaration_items.where(i => i.declaration_id === declId);
  DB_customs_declaration_items.insert({
    declaration_id:    declId,
    line_num:          items.length + 1,
    hs_code:           hsCode,
    description:       desc,
    country:           prompt('Страна происхождения (ISO):', 'CN') || '',
    qty, unit,
    unit_price_usd:    priceUsd,
    customs_value_rub: cvRub,
    duty_rate:         dutyRate,
    duty_amount:       dutyAmt,
    vat_rate:          22,
    vat_amount:        vatAmt,
  });

  // Refresh totals on declaration
  cdtRecalcDeclarationTotals(declId);
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneItems(fresh);
  showToast('📦 Позиция добавлена');
}

function cdtEditItem(itemId, declId) {
  const it = DB_customs_declaration_items.find(itemId);
  if (!it) return;
  const hs    = prompt('Код ТН ВЭД:',          it.hs_code     || '');
  if (hs === null) return;
  const desc  = prompt('Наименование:',        it.description || '') || '';
  const qty   = parseFloat(prompt('Количество:', String(it.qty || 1)) || '1');
  const cv    = parseFloat(prompt('Там. стоимость (₽):', String(it.customs_value_rub || 0)) || '0');
  const duty  = parseFloat(prompt('Сумма пошлины (₽):', String(it.duty_amount || 0)) || '0');
  const vat   = parseFloat(prompt('НДС (₽):', String(it.vat_amount || 0)) || '0');
  DB_customs_declaration_items.update(itemId, {
    hs_code: hs, description: desc, qty, customs_value_rub: cv,
    duty_amount: duty, vat_amount: vat,
  });
  cdtRecalcDeclarationTotals(declId);
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneItems(fresh);
  showToast('📦 Позиция обновлена');
}

function cdtDeleteItem(itemId, declId) {
  if (!confirm('Удалить позицию?')) return;
  const rows = DB_customs_declaration_items.all().filter(r => r.id !== itemId);
  DB_customs_declaration_items.save(rows);
  cdtRecalcDeclarationTotals(declId);
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneItems(fresh);
  showToast('Позиция удалена');
}

/** Recalculate and persist total_duties / total_vat on declaration from items */
function cdtRecalcDeclarationTotals(declId) {
  const items = DB_customs_declaration_items.where(i => i.declaration_id === declId);
  const totalDuty = items.reduce((s, i) => s + (parseFloat(i.duty_amount) || 0), 0);
  const totalVAT  = items.reduce((s, i) => s + (parseFloat(i.vat_amount)  || 0), 0);
  const totalCV   = items.reduce((s, i) => s + (parseFloat(i.customs_value_rub) || 0), 0);
  DB_customs_declarations.update(declId, {
    total_duties:      totalDuty,
    total_vat:         totalVAT,
    customs_value_rub: totalCV,
  });
}

/* ─────────────────────────────────────────────────────────────────────
   PAYMENTS CRUD
───────────────────────────────────────────────────────────────────── */

function cdtAddPayment(declId) {
  const typeOpts = Object.entries(CDT_PAY_TYPES).map(([k,v]) => `${k}: ${v.label}`).join('\n');
  const payType  = prompt(`Тип платежа:\n${typeOpts}`, 'duty') || 'duty';
  if (!CDT_PAY_TYPES[payType]) { showToast('⚠ Неверный тип платежа'); return; }
  const amount = parseFloat(prompt('Сумма (₽):', '0') || '0');
  const status = (prompt('Статус (paid / pending):', 'paid') || 'pending').toLowerCase() === 'paid' ? 'paid' : 'pending';
  const date   = prompt('Дата оплаты (ГГГГ-ММ-ДД):', new Date().toISOString().slice(0,10)) || '';
  const pp     = prompt('№ платёжного поручения:', '') || '';
  const note   = prompt('Примечание:', CDT_PAY_TYPES[payType].label) || '';

  DB_customs_payments_dt.insert({
    declaration_id: declId, pay_type: payType,
    amount_rub: amount, status, pay_date: date, pp_num: pp, note,
  });
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPanePayments(fresh);
  cdtRenderKPIs();
  showToast('💳 Платёж добавлен');
}

function cdtEditPayment(payId, declId) {
  const p = DB_customs_payments_dt.find(payId);
  if (!p) return;
  const amount = parseFloat(prompt('Сумма (₽):', String(p.amount_rub || 0)) || '0');
  const status = (prompt('Статус (paid / pending):', p.status || 'pending') || 'pending').toLowerCase() === 'paid' ? 'paid' : 'pending';
  const date   = prompt('Дата оплаты:', p.pay_date || '') || '';
  const pp     = prompt('№ ПП:', p.pp_num || '') || '';
  const note   = prompt('Примечание:', p.note || '') || '';
  DB_customs_payments_dt.update(payId, { amount_rub: amount, status, pay_date: date, pp_num: pp, note });
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPanePayments(fresh);
  cdtRenderKPIs();
  showToast('💳 Платёж обновлён');
}

function cdtDeletePayment(payId, declId) {
  if (!confirm('Удалить платёж?')) return;
  const rows = DB_customs_payments_dt.all().filter(r => r.id !== payId);
  DB_customs_payments_dt.save(rows);
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPanePayments(fresh);
  cdtRenderKPIs();
  showToast('Платёж удалён');
}

/* ─────────────────────────────────────────────────────────────────────
   DOCUMENTS CRUD
───────────────────────────────────────────────────────────────────── */

function cdtAddDocFromTemplate(declId) {
  const existing = new Set(
    DB_customs_documents_dt.where(d => d.declaration_id === declId).map(d => d.name)
  );
  const available = CDT_DOC_TEMPLATES.filter(n => !existing.has(n));
  if (!available.length) { showToast('Все шаблонные документы уже добавлены'); return; }

  const opts = available.map((n, i) => `${i + 1}. ${n}`).join('\n');
  const num  = parseInt(prompt(`Выберите документ (1–${available.length}):\n${opts}`) || '0');
  if (!num || num < 1 || num > available.length) return;

  DB_customs_documents_dt.insert({
    declaration_id: declId, name: available[num - 1], received: false, note: '',
  });
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneDocuments(fresh);
  showToast('📎 Документ добавлен');
}

function cdtAddDoc(declId) {
  const name = prompt('Название документа:') || '';
  if (!name.trim()) return;
  const note = prompt('Примечание (необязательно):', '') || '';
  DB_customs_documents_dt.insert({ declaration_id: declId, name: name.trim(), received: false, note });
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneDocuments(fresh);
  showToast('📎 Документ добавлен');
}

function cdtToggleDoc(docId, declId) {
  const doc = DB_customs_documents_dt.find(docId);
  if (!doc) return;
  DB_customs_documents_dt.update(docId, { received: !doc.received });
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneDocuments(fresh);
}

function cdtDeleteDoc(docId, declId) {
  if (!confirm('Удалить документ?')) return;
  const rows = DB_customs_documents_dt.all().filter(r => r.id !== docId);
  DB_customs_documents_dt.save(rows);
  const fresh = DB_customs_declarations.find(declId);
  if (fresh) cdtRenderPaneDocuments(fresh);
  showToast('Документ удалён');
}

/* ─────────────────────────────────────────────────────────────────────
   SHIPMENT CARD TAB  "🛃 Декларации"
───────────────────────────────────────────────────────────────────── */

function shpRenderDeclarations(s) {
  cdtSeed();
  const el = document.getElementById('shpd-declarations-content');
  if (!el) return;

  const decls = DB_customs_declarations.where(d => d.shipment_id === String(s.id));

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;
                margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:800;font-size:13px">🛃 Таможенные декларации (${decls.length})</div>
      <div style="display:flex;gap:8px">
        <button class="admin-action-btn" onclick="cdtCreateFromShipment('${s.id}')">
          + Новая ДТ
        </button>
        <button class="admin-action-btn" onclick="showSection('customs-declarations')">
          📋 Реестр ДТ →
        </button>
      </div>
    </div>

    ${decls.length ? decls.map(d => {
      const st = CDT_STATUSES[d.status] || CDT_STATUSES.draft;
      const items = DB_customs_declaration_items.where(i => i.declaration_id === d.id);
      const pmts  = DB_customs_payments_dt.where(p => p.declaration_id === d.id);
      const paid  = pmts.filter(p => p.status === 'paid').reduce((s, p) => s + (parseFloat(p.amount_rub)||0), 0);
      const docs  = DB_customs_documents_dt.where(doc => doc.declaration_id === d.id);
      const docsOk= docs.filter(doc => doc.received).length;

      return `
        <div class="cdt-mini-row" onclick="cdtOpenDetail('${d.id}')">
          <div style="font-size:22px;flex-shrink:0">${st.icon}</div>
          <div style="flex:1;min-width:0">
            <div class="cdt-mini-dt">${d.dt_number || 'б/н'}</div>
            <div class="cdt-mini-meta">
              ${d.customs_post ? d.customs_post + ' · ' : ''}
              ${d.file_date ? fmtDate(d.file_date) : ''}
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;font-size:10.5px;color:var(--text3)">
              <span>📦 ${items.length} поз.</span>
              <span>💳 ${pmts.length} плат. · уплачено ${fmtNum(paid)} ₽</span>
              <span>📎 ${docsOk}/${docs.length} доп.</span>
            </div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            ${cdtBadge(d.status)}
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;
                        font-weight:800;color:var(--rust);margin-top:6px">
              ${fmtNum((parseFloat(d.total_duties)||0)+(parseFloat(d.total_vat)||0)+(parseFloat(d.total_fees)||0))} ₽
            </div>
          </div>
        </div>`;
    }).join('') : `
      <div style="text-align:center;padding:48px 20px;color:var(--text3);
                  border:1px dashed var(--border);border-radius:var(--radius-lg)">
        <div style="font-size:36px;margin-bottom:10px;opacity:.3">🛃</div>
        <div style="font-weight:600;margin-bottom:6px">Деклараций нет</div>
        <div style="font-size:12px;margin-bottom:16px">
          Создайте декларацию или свяжите существующую в реестре ДТ
        </div>
        <button class="admin-action-btn" onclick="cdtCreateFromShipment('${s.id}')">
          + Создать ДТ для этой поставки
        </button>
      </div>`}`;
}

/** Open new declaration form pre-filled with this shipment */
function cdtCreateFromShipment(shipId) {
  // Close shipment detail, go to registry, open form
  showSection('customs-declarations');
  setTimeout(() => {
    cdtOpenForm(null);
    const sel = document.getElementById('cdt-f-shipment-id');
    if (sel) sel.value = String(shipId);
    // Auto-fill file date
    const fd = document.getElementById('cdt-f-file-date');
    if (fd) fd.value = new Date().toISOString().slice(0,10);
  }, 150);
}

/** Log ДТ creation event to shipment.events */
function _cdtLogToShipment(shipId, declId, dtNum) {
  try {
    const s = DB_shipments.find(String(shipId));
    if (!s) return;
    const events = s.events || [];
    events.push({
      date: new Date().toISOString().slice(0,10),
      text: `📋 Создана декларация ${dtNum || declId}`,
    });
    DB_shipments.update(String(shipId), { events });
  } catch(e) { /* silent */ }
}

/* ─────────────────────────────────────────────────────────────────────
   UTILITY
───────────────────────────────────────────────────────────────────── */

function cdtEscape(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}



/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD  — Система управления поставками (shipments-centric)
═══════════════════════════════════════════════════════════════════ */

const SHP_PIPE_STAGES = [
  { key: 'contract',   label: 'Контракт', cls: 's0' },
  { key: 'payment',    label: 'Оплата',   cls: 's1' },
  { key: 'production', label: 'Произв.',  cls: 's2' },
  { key: 'pickup',     label: 'Вывоз',    cls: 's3' },
  { key: 'export',     label: 'Экспорт',  cls: 's4' },
  { key: 'transit',    label: 'В пути',   cls: 's5' },
  { key: 'arrival',    label: 'Прибытие', cls: 's6' },
  { key: 'customs',    label: 'Таможня',  cls: 's7' },
  { key: 'delivery',   label: 'Выдача',   cls: 's8' },
];

function dashLoad() {
  dashRenderKPIs();
  dashRenderPipeline();
  dashRenderActiveShipments();
  dashRenderPendingPR();
}

function dashRenderKPIs() {
  const ships = DB_shipments.all().filter(s => (s.company || 'ENDV') === activeCompany);
  const active = ships.filter(s => !['delivered','cancelled'].includes(s.status));
  const totalVal = active.reduce((s, sh) => s + (parseFloat(sh.total_value) || 0), 0);
  const allPRs = DB_purchase_requests.all();
  const pendingPRs = allPRs.filter(p => ['submitted','approved'].includes(p.status));
  const declsAll = DB_customs_declarations.all();
  const sups = JSON.parse(localStorage.getItem('ved_suppliers') || '[]');
  const activeSups = new Set(active.map(s => s.supplier_id).filter(Boolean)).size;

  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('dkpi-shipments',     active.length);
  set('dkpi-shipments-sub', `всего ${ships.length}`);
  set('dkpi-purchase',      pendingPRs.length);
  set('dkpi-purchase-sub',  `всего ${allPRs.length}`);
  set('dkpi-value',         anlFmtK(totalVal));
  set('dkpi-value-sub',     `всего ${ships.length} поставок`);
  set('dkpi-customs',       declsAll.length);
  set('dkpi-customs-sub',   `${declsAll.filter(d => d.status === 'released').length} выпущено`);
  set('dkpi-suppliers',     activeSups || sups.filter(s => s.type === 'supplier').length);

  // Hero subtitle
  const today = new Date().toLocaleDateString('ru-RU', {day:'numeric', month:'long', year:'numeric'});
  const inTransit = ships.filter(s => s.status === 'in_transit').length;
  set('dash-hero-sub', `${today} · ${active.length} активных поставок · ${inTransit} в пути`);
}

function dashRenderPipeline() {
  const pipeEl   = document.getElementById('dash-pipe');
  const legendEl = document.getElementById('dash-pipe-legend');
  if (!pipeEl) return;

  const ships = DB_shipments.all().filter(s => !['delivered','cancelled'].includes(s.status) && (s.company || 'ENDV') === activeCompany);
  const counts = {};
  SHP_PIPE_STAGES.forEach((st, i) => counts[i] = 0);

  ships.forEach(s => {
    const stg = parseInt(s.current_stage) || 0;
    if (counts[stg] !== undefined) counts[stg]++;
  });

  const total = ships.length || 1;

  pipeEl.innerHTML = SHP_PIPE_STAGES.map((st, i) => {
    const n = counts[i] || 0;
    const pct = Math.max(n > 0 ? 6 : 2, Math.round(n / total * 100));
    return `<div class="dash-pipe-step ${n > 0 ? st.cls : 'empty'}" style="flex:${pct}"
                 title="${st.label}: ${n}">${n > 0 ? n : ''}</div>`;
  }).join('');

  legendEl.innerHTML = SHP_PIPE_STAGES.map((st, i) => {
    const n = counts[i] || 0;
    if (!n) return '';
    return `<span style="font-size:10px;display:flex;align-items:center;gap:4px;
                          font-family:'JetBrains Mono',monospace;color:var(--text3)">
      <span style="width:8px;height:8px;border-radius:2px;background:${dashPipeColor(st.cls)};flex-shrink:0"></span>
      ${st.label} (${n})
    </span>`;
  }).filter(Boolean).join('');
}

function dashPipeColor(cls) {
  const map = {s0:'#6b7280',s1:'#2563eb',s2:'#7c3aed',s3:'#0891b2',
               s4:'#d97706',s5:'#dc2626',s6:'#16a34a',s7:'#15803d',s8:'#14532d'};
  return map[cls] || '#9ca3af';
}

function dashRenderActiveShipments() {
  const el = document.getElementById('dash-active-shipments');
  if (!el) return;

  const ships = DB_shipments.all()
    .filter(s => !['delivered','cancelled'].includes(s.status) && (s.company || 'ENDV') === activeCompany)
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
    .slice(0, 7);

  if (!ships.length) {
    el.innerHTML = `<div style="text-align:center;padding:32px 16px;color:var(--text3)">
      <div style="font-size:32px;margin-bottom:8px;opacity:.3">🚢</div>
      <div style="font-size:12.5px;margin-bottom:12px">Нет активных поставок</div>
      <button class="gen-btn" style="margin:0;padding:7px 18px;font-size:12px"
              onclick="showSection('shipments');setTimeout(()=>shpOpenForm(null),200)">+ Создать поставку</button>
    </div>`;
    return;
  }

  el.innerHTML = ships.map(s => {
    const stMap = SHP_STATUSES || {};
    const stObj = stMap[s.status] || {label: s.status, color: '#6b7280', bg: '#f3f4f6'};
    const sup = shpSupName(s.supplier_id);
    const stg = SHP_PIPE_STAGES[parseInt(s.current_stage) || 0];
    return `<div class="dash-shp-row" onclick="showSection('shipments');setTimeout(()=>shpOpenDetail('${s.id}'),200)">
      <div class="dash-shp-num">${s.shipment_number || '—'}</div>
      <div class="dash-shp-sup">${sup}</div>
      <span class="dash-shp-stage" style="background:${stObj.bg || '#f3f4f6'};color:${stObj.color || '#374151'}">
        ${stObj.label || s.status}
      </span>
      <div class="dash-shp-val">${s.total_value ? anlFmtK(s.total_value) + ' ' + (s.currency || '') : '—'}</div>
    </div>`;
  }).join('');
}

function dashRenderPendingPR() {
  const el = document.getElementById('dash-pending-pr');
  if (!el) return;

  const prStatusLabels = {
    draft:       { label:'Черновик',   color:'#6b7280', bg:'#f3f4f6' },
    submitted:   { label:'Подана',     color:'#2563eb', bg:'#eff6ff' },
    approved:    { label:'Одобрена',   color:'#16a34a', bg:'#f0fdf4' },
    rejected:    { label:'Отклонена',  color:'#dc2626', bg:'#fef2f2' },
    rfq_created: { label:'RFQ создан', color:'#7c3aed', bg:'#fdf4ff' },
  };

  const prs = DB_purchase_requests.all()
    .filter(p => ['submitted','approved','draft'].includes(p.status))
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
    .slice(0, 5);

  if (!prs.length) {
    el.innerHTML = `<div style="text-align:center;padding:20px 16px;color:var(--text3);font-size:12px">
      Нет заявок на согласовании
    </div>`;
    return;
  }

  el.innerHTML = prs.map(pr => {
    const st = prStatusLabels[pr.status] || prStatusLabels.draft;
    return `<div class="dash-shp-row" onclick="showSection('purchase');setTimeout(()=>prOpenDetail('${pr.id}'),200)">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);min-width:90px">
        ${pr.request_number || '—'}
      </div>
      <div class="dash-shp-sup">${pr.product_description ? pr.product_description.slice(0,35) : '—'}</div>
      <span class="dash-shp-stage" style="background:${st.bg};color:${st.color}">${st.label}</span>
    </div>`;
  }).join('');
}



/* ╔═══════════════════════════════════════════════════════════════════════
   ║  SHIPMENT ITEMS  — центральная таблица товаров поставки
   ║
   ║  Архитектура:
   ║    Каталог (DB_products)
   ║        ↓
   ║    Поставка (DB_shipments)
   ║        ↓
   ║    DB_shipment_items  ← ЦЕНТРАЛЬНАЯ ТАБЛИЦА
   ║        ↓
   ║    invoice_items / packing_list_items / spec_items / customs_decl_items
   ║
   ║  Товар вводится ОДИН РАЗ в поставке, все документы ссылаются на него.
   ╚══════════════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────────
   SEED — перенос items[] из существующих поставок в DB_shipment_items
   Запускается один раз при первой загрузке.
───────────────────────────────────────────────────────────────────── */
function siMigrate() {
  // Идемпотентно и устойчиво к порядку запуска: глобальный one-time флаг убран,
  // т.к. он блокировал перенос товаров у поставок, засиданных ПОСЛЕ первого запуска.
  // Признак «уже мигрировано» хранится на самой поставке (_items_migrated),
  // поэтому удалённые через новый UI позиции не воскресают при повторном вызове.
  const ships = DB_shipments.all();
  ships.forEach(s => {
    if (s._items_migrated) return;            // эта поставка уже перенесена
    if (!s.items || !s.items.length) {        // нечего переносить — помечаем, чтобы не проверять снова
      DB_shipments.update(String(s.id), { _items_migrated: true });
      return;
    }
    // Подстраховка: если строки уже есть (миграция шла раньше без флага) — не дублируем
    const existing = DB_shipment_items.where(i => i.shipment_id === String(s.id));
    if (existing.length) {
      DB_shipments.update(String(s.id), { _items_migrated: true });
      return;
    }

    s.items.forEach(it => {
      DB_shipment_items.insert({
        shipment_id:      String(s.id),
        product_id:       it.product_id || '',
        supplier_sku:     it.sku || '',
        model:            it.model || '',
        description:      it.name || it.description || '',
        quantity:         parseFloat(it.qty) || 0,
        unit:             it.unit || 'Pcs',
        unit_price:       parseFloat(it.price) || 0,
        total_price:      (parseFloat(it.qty)||0) * (parseFloat(it.price)||0),
        currency:         s.currency || 'USD',
        hs_code:          it.hs_code || '',
        country_of_origin:it.country || '',
        net_weight:       parseFloat(it.net_weight || it.net || 0) || 0,
        gross_weight:     parseFloat(it.gross_weight || it.gross || 0) || 0,
        package_type:     it.package_type || '',
        notes:            it.notes || '',
      });
    });
    DB_shipments.update(String(s.id), { _items_migrated: true });  // помечаем поставку как перенесённую
  });
}

/* ─────────────────────────────────────────────────────────────────────
   SHIPMENT ITEMS  — CRUD
───────────────────────────────────────────────────────────────────── */

/** Return all items for a shipment, sorted by creation order */
function siGetByShipment(shipId) {
  return DB_shipment_items
    .where(i => i.shipment_id === String(shipId))
    .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
}

/** Recalculate total_price for a row and update shipments.total_value */
function siRecalc(itemId) {
  const it = DB_shipment_items.find(itemId);
  if (!it) return;
  const total = (parseFloat(it.quantity) || 0) * (parseFloat(it.unit_price) || 0);
  DB_shipment_items.update(itemId, { total_price: total });
  siUpdateShipmentTotal(it.shipment_id);
}

/** Sum all items → update shipments.total_value */
function siUpdateShipmentTotal(shipId) {
  const items = siGetByShipment(shipId);
  const total = items.reduce((s, i) => s + (parseFloat(i.total_price) || 0), 0);
  DB_shipments.update(String(shipId), { total_value: total });
}

/** Used quantity of a shipment_item across all linked invoice/pl/spec/customs items */
function siUsedQty(itemId, docType) {
  // docType: 'invoice' | 'packing_list' | 'spec' | 'customs'
  const tableMap = {
    invoice:      DB_si_invoice_items,
    packing_list: DB_si_packing_items,
    spec:         DB_si_spec_items,
    customs:      DB_si_customs_items,
  };
  const tbl = tableMap[docType];
  if (!tbl) return 0;
  return tbl
    .where(r => r.shipment_item_id === String(itemId))
    .reduce((s, r) => s + (parseFloat(r.quantity) || 0), 0);
}

/** Available quantity = item.quantity - used in given docType */
function siAvailableQty(itemId, docType) {
  const it = DB_shipment_items.find(itemId);
  if (!it) return 0;
  const used = siUsedQty(itemId, docType);
  return Math.max(0, (parseFloat(it.quantity) || 0) - used);
}

/* ─────────────────────────────────────────────────────────────────────
   GOODS TAB IN SHIPMENT CARD  — full replacement of shpRenderGoods
   and related CRUD functions
───────────────────────────────────────────────────────────────────── */

function shpRenderGoods(s) {
  siMigrate();
  const items = siGetByShipment(s.id);
  const el = document.getElementById('shpd-goods-content');
  if (!el) return;

  const total   = items.reduce((sum, it) => sum + (parseFloat(it.total_price) || 0), 0);
  const cur     = s.currency || 'USD';

  if (!items.length) {
    el.innerHTML = `
      <div style="text-align:center;padding:40px 24px;color:var(--text3);
                  border:2px dashed var(--border);border-radius:var(--radius-lg);margin-bottom:16px">
        <div style="font-size:40px;margin-bottom:10px;opacity:.25">📦</div>
        <div style="font-weight:700;font-size:14px;margin-bottom:6px">Товары поставки не добавлены</div>
        <div style="font-size:12px;margin-bottom:18px;color:var(--text3)">
          Добавьте товары — они будут доступны в инвойсе, спецификации, packing list и декларации
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="gen-btn" style="margin:0;padding:8px 20px;font-size:12.5px"
                  onclick="siAddFromCatalog('${s.id}')">📦 Из каталога</button>
          <button class="gen-btn secondary" style="margin:0;padding:8px 20px;font-size:12.5px"
                  onclick="siAddManual('${s.id}')">+ Вручную</button>
        </div>
      </div>`;
    return;
  }

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;
                margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:800;font-size:13px">
        📦 Товары поставки
        <span style="font-size:11px;font-weight:400;color:var(--text3);
                     font-family:'JetBrains Mono',monospace;margin-left:8px">
          ${items.length} позиций · ${fmtNum(total)} ${cur}
        </span>
      </div>
      <div style="display:flex;gap:8px">
        <button class="admin-action-btn" onclick="siAddFromCatalog('${s.id}')">📦 Из каталога</button>
        <button class="admin-action-btn" onclick="siAddManual('${s.id}')">+ Вручную</button>
      </div>
    </div>

    <div style="overflow-x:auto">
      <table class="shp-items-table" style="min-width:720px">
        <thead><tr>
          <th style="width:28px">#</th>
          <th>SKU</th>
          <th style="min-width:180px">Наименование / Модель</th>
          <th>ТН ВЭД</th>
          <th>Страна</th>
          <th class="r">Кол-во</th>
          <th>Ед.</th>
          <th class="r">Цена</th>
          <th class="r">Сумма</th>
          <th style="width:72px"></th>
        </tr></thead>
        <tbody>
          ${items.map((it, i) => `
            <tr id="si-row-${it.id}">
              <td style="color:var(--text3);font-size:11px">${i+1}</td>
              <td style="font-family:'JetBrains Mono',monospace;font-size:10px;
                         color:var(--co-accent)">${it.supplier_sku || '—'}</td>
              <td>
                <div style="font-weight:600;font-size:12.5px">${it.description || '—'}</div>
                ${it.model ? `<div style="font-size:10.5px;color:var(--text3)">${it.model}</div>` : ''}
              </td>
              <td style="font-family:'JetBrains Mono',monospace;font-size:10px;
                         color:var(--text3)">${it.hs_code || '—'}</td>
              <td style="font-size:11px;color:var(--text2)">${it.country_of_origin || '—'}</td>
              <td class="r">
                <input type="number" value="${it.quantity}" min="0" step="0.001"
                       style="width:72px;text-align:right;padding:3px 6px;
                              border:1px solid var(--border);border-radius:var(--radius-sm);
                              font-family:'JetBrains Mono',monospace;font-size:12px;
                              background:var(--surface);color:var(--text)"
                       onchange="siUpdateField('${it.id}','quantity',parseFloat(this.value)||0,'${s.id}')"
                       oninput="this.style.borderColor='var(--co-accent)'">
              </td>
              <td style="font-size:11px">${it.unit || '—'}</td>
              <td class="r">
                <input type="number" value="${it.unit_price}" min="0" step="0.01"
                       style="width:88px;text-align:right;padding:3px 6px;
                              border:1px solid var(--border);border-radius:var(--radius-sm);
                              font-family:'JetBrains Mono',monospace;font-size:12px;
                              background:var(--surface);color:var(--text)"
                       onchange="siUpdateField('${it.id}','unit_price',parseFloat(this.value)||0,'${s.id}')"
                       oninput="this.style.borderColor='var(--co-accent)'">
              </td>
              <td class="r" style="font-family:'JetBrains Mono',monospace;font-weight:700;
                                   color:var(--co-accent)" id="si-total-${it.id}">
                ${fmtNum(parseFloat(it.total_price)||0)}
              </td>
              <td>
                <button class="admin-action-btn" style="font-size:10px;padding:3px 8px"
                        onclick="siEditItem('${it.id}','${s.id}')">✎</button>
                <button class="admin-action-btn" style="font-size:10px;padding:3px 8px;color:var(--red)"
                        onclick="siDeleteItem('${it.id}','${s.id}')">×</button>
              </td>
            </tr>`).join('')}
        </tbody>
        <tfoot><tr>
          <td colspan="8" style="text-align:right;font-size:11px;color:var(--text3);
                                  font-family:'JetBrains Mono',monospace;padding:8px 10px">
            ИТОГО ПОСТАВКА:
          </td>
          <td style="font-family:'JetBrains Mono',monospace;font-weight:900;
                     color:var(--co-accent);font-size:13px;padding:8px 10px" id="si-grand-total">
            ${fmtNum(total)} ${cur}
          </td>
          <td></td>
        </tr></tfoot>
      </table>
    </div>

    <div style="margin-top:12px;padding:10px 14px;background:var(--surface2);
                border-radius:var(--radius-sm);font-size:11.5px;color:var(--text3)">
      💡 Изменение количества или цены автоматически пересчитывает стоимость поставки.
      Эти товары доступны при создании инвойса, спецификации, упаковочного листа и декларации.
    </div>`;
}

/* ─────────────────────────────────────────────────────────────────────
   Inline field update with live recalc
───────────────────────────────────────────────────────────────────── */
function siUpdateField(itemId, field, value, shipId) {
  DB_shipment_items.update(itemId, { [field]: value });
  siRecalc(itemId);

  // Update UI inline
  const it = DB_shipment_items.find(itemId);
  if (it) {
    const totalCell = document.getElementById(`si-total-${itemId}`);
    if (totalCell) totalCell.textContent = fmtNum(parseFloat(it.total_price) || 0);
    const grandTotal = document.getElementById('si-grand-total');
    if (grandTotal) {
      const s = DB_shipments.find(String(shipId));
      const items = siGetByShipment(shipId);
      const tot = items.reduce((sum, i) => sum + (parseFloat(i.total_price)||0), 0);
      grandTotal.textContent = `${fmtNum(tot)} ${s?.currency || ''}`;
    }
  }
}

/* ─────────────────────────────────────────────────────────────────────
   Add item from catalog picker
───────────────────────────────────────────────────────────────────── */
function siAddFromCatalog(shipId) {
  catOpenPicker(p => {
    const s = DB_shipments.find(String(shipId));
    DB_shipment_items.insert({
      shipment_id:       String(shipId),
      product_id:        String(p.id || ''),
      supplier_sku:      p.sku || '',
      model:             p.model || '',
      description:       p.name || '',
      quantity:          0,
      unit:              p.unit || 'Pcs',
      unit_price:        parseFloat(p.price) || 0,
      total_price:       0,
      currency:          s?.currency || 'USD',
      hs_code:           p.hs_code || p.base_hs_code || '',
      country_of_origin: p.country_of_origin || p.country || '',
      net_weight:        0,
      gross_weight:      0,
      package_type:      '',
      notes:             '',
    });
    const fresh = DB_shipments.find(String(shipId));
    if (fresh) shpRenderGoods(fresh);
    showToast(`📦 ${p.name} добавлен в поставку`);
  }, 'Выберите товар для поставки');
}

/* ─────────────────────────────────────────────────────────────────────
   Add item manually (modal form)
───────────────────────────────────────────────────────────────────── */
function siAddManual(shipId) {
  _siEditingId   = null;
  _siEditShipId  = String(shipId);
  const s = DB_shipments.find(String(shipId));
  document.getElementById('si-form-title').textContent = 'Новый товар поставки';
  const f = id => document.getElementById(id);
  f('si-f-id').value          = '';
  f('si-f-sku').value         = '';
  f('si-f-model').value       = '';
  f('si-f-desc').value        = '';
  f('si-f-qty').value         = '';
  f('si-f-unit').value        = 'Pcs';
  f('si-f-price').value       = '';
  f('si-f-currency').value    = s?.currency || 'USD';
  f('si-f-hs').value          = '';
  f('si-f-country').value     = '';
  f('si-f-net').value         = '';
  f('si-f-gross').value       = '';
  f('si-f-pkg').value         = '';
  f('si-f-notes').value       = '';
  document.getElementById('si-form-bg').classList.add('open');
  setTimeout(() => document.getElementById('si-f-desc')?.focus(), 100);
}

function siEditItem(itemId, shipId) {
  const it = DB_shipment_items.find(itemId);
  if (!it) return;
  _siEditingId  = itemId;
  _siEditShipId = String(shipId);
  document.getElementById('si-form-title').textContent = 'Редактировать товар';
  const f = id => document.getElementById(id);
  f('si-f-id').value       = itemId;
  f('si-f-sku').value      = it.supplier_sku || '';
  f('si-f-model').value    = it.model        || '';
  f('si-f-desc').value     = it.description  || '';
  f('si-f-qty').value      = it.quantity     || '';
  f('si-f-unit').value     = it.unit         || 'Pcs';
  f('si-f-price').value    = it.unit_price   || '';
  f('si-f-currency').value = it.currency     || 'USD';
  f('si-f-hs').value       = it.hs_code      || '';
  f('si-f-country').value  = it.country_of_origin || '';
  f('si-f-net').value      = it.net_weight   || '';
  f('si-f-gross').value    = it.gross_weight || '';
  f('si-f-pkg').value      = it.package_type || '';
  f('si-f-notes').value    = it.notes        || '';
  document.getElementById('si-form-bg').classList.add('open');
}

let _siEditingId  = null;
let _siEditShipId = null;

function siSaveForm() {
  const get = id => document.getElementById(id)?.value?.trim() || '';
  const desc = get('si-f-desc');
  if (!desc) { showToast('⚠ Укажите наименование товара'); return; }

  const qty    = parseFloat(get('si-f-qty'))   || 0;
  const price  = parseFloat(get('si-f-price')) || 0;

  const data = {
    shipment_id:       _siEditShipId,
    supplier_sku:      get('si-f-sku'),
    model:             get('si-f-model'),
    description:       desc,
    quantity:          qty,
    unit:              get('si-f-unit') || 'Pcs',
    unit_price:        price,
    total_price:       qty * price,
    currency:          get('si-f-currency') || 'USD',
    hs_code:           get('si-f-hs'),
    country_of_origin: get('si-f-country'),
    net_weight:        parseFloat(get('si-f-net'))   || 0,
    gross_weight:      parseFloat(get('si-f-gross')) || 0,
    package_type:      get('si-f-pkg'),
    notes:             get('si-f-notes'),
  };

  const id = get('si-f-id');
  if (id) {
    DB_shipment_items.update(id, data);
    showToast('✅ Товар обновлён');
  } else {
    DB_shipment_items.insert({ ...data, product_id: '' });
    showToast('✅ Товар добавлен');
  }

  siUpdateShipmentTotal(_siEditShipId);
  siCloseForm();
  const fresh = DB_shipments.find(_siEditShipId);
  if (fresh) shpRenderGoods(fresh);
  // Update KPIs
  if (typeof shpUpdateKPIs === 'function') shpUpdateKPIs();
}

function siCloseForm() {
  document.getElementById('si-form-bg')?.classList.remove('open');
}

function siDeleteItem(itemId, shipId) {
  const it = DB_shipment_items.find(itemId);
  if (!confirm(`Удалить товар "${it?.description || itemId}"?\nВсе связанные записи в документах будут удалены.`)) return;

  // Remove linked doc items
  [DB_si_invoice_items, DB_si_packing_items, DB_si_spec_items, DB_si_customs_items].forEach(tbl => {
    const rows = tbl.all().filter(r => r.shipment_item_id !== String(itemId));
    tbl.save(rows);
  });

  // Remove the item
  const rows = DB_shipment_items.all().filter(r => r.id !== itemId);
  DB_shipment_items.save(rows);

  siUpdateShipmentTotal(shipId);
  const fresh = DB_shipments.find(String(shipId));
  if (fresh) shpRenderGoods(fresh);
  showToast('Товар удалён');
}

/* ─────────────────────────────────────────────────────────────────────
   PICKER MODAL — выбор товаров поставки для документов
   Used by invoice, spec, packing list, customs declaration
───────────────────────────────────────────────────────────────────── */

let _siPickerShipId  = null;
let _siPickerDocType = null;  // 'invoice' | 'packing_list' | 'spec' | 'customs'
let _siPickerDocId   = null;
let _siPickerCb      = null;

/**
 * Open the shipment-items picker for a document.
 * @param {string} shipId  - shipment ID
 * @param {string} docType - 'invoice' | 'packing_list' | 'spec' | 'customs'
 * @param {string} docId   - document ID (or null for new)
 * @param {function} cb    - callback(selectedItems) with [{shipment_item_id, quantity}]
 */
function siOpenPicker(shipId, docType, docId, cb) {
  _siPickerShipId  = String(shipId);
  _siPickerDocType = docType;
  _siPickerDocId   = docId;
  _siPickerCb      = cb;

  siMigrate();
  const items = siGetByShipment(shipId);
  const el    = document.getElementById('si-picker-list');
  const title = document.getElementById('si-picker-title');

  const docLabels = {
    invoice:      '🧾 Инвойс',
    packing_list: '📦 Упаковочный лист',
    spec:         '📐 Спецификация',
    customs:      '🛃 Таможенная декларация',
  };
  if (title) title.textContent = `Товары поставки → ${docLabels[docType] || 'Документ'}`;

  if (!el) return;
  if (!items.length) {
    el.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text3)">
      <div style="font-size:32px;margin-bottom:8px">📭</div>
      <div>В поставке нет товаров. Сначала добавьте товары во вкладке «Товары» поставки.</div>
    </div>`;
    document.getElementById('si-picker-bg').classList.add('open');
    return;
  }

  el.innerHTML = items.map(it => {
    const used  = siUsedQty(it.id, docType);
    const avail = Math.max(0, (parseFloat(it.quantity)||0) - used);
    return `
      <div class="si-picker-row" id="si-pick-${it.id}">
        <label style="display:flex;align-items:flex-start;gap:12px;cursor:pointer;
                      padding:10px 14px;border-radius:var(--radius-sm);transition:background .1s"
               onmouseover="this.style.background='var(--co-accent-light)'"
               onmouseout="this.style.background=''">
          <input type="checkbox" value="${it.id}" class="si-pick-chk"
                 style="margin-top:3px;accent-color:var(--co-accent);cursor:pointer"
                 ${avail <= 0 ? 'disabled' : ''}
                 onchange="siPickerToggle('${it.id}',this.checked)">
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:12.5px">${it.description || '—'}</div>
            <div style="font-size:10.5px;color:var(--text3);margin-top:2px;
                        font-family:'JetBrains Mono',monospace">
              ${it.supplier_sku ? `SKU: ${it.supplier_sku} · ` : ''}
              ${it.hs_code ? `ТН ВЭД: ${it.hs_code} · ` : ''}
              ${it.country_of_origin || ''}
            </div>
            <div style="font-size:11px;color:var(--text2);margin-top:3px">
              Всего: <b>${fmtNum(it.quantity)} ${it.unit}</b>
              · Использовано: <b>${fmtNum(used)}</b>
              · <span style="color:${avail>0?'var(--green)':'var(--red)'}">
                Доступно: <b>${fmtNum(avail)}</b>
                </span>
              · ${fmtNum(it.unit_price)} ${it.currency}
            </div>
          </div>
          <div style="flex-shrink:0;text-align:right">
            <div style="font-family:'JetBrains Mono',monospace;font-weight:800;
                        color:var(--co-accent);font-size:13px">${fmtNum(it.total_price || 0)}</div>
            <div style="font-size:9.5px;color:var(--text3)">${it.currency}</div>
          </div>
        </label>
        <div class="si-pick-qty-row" id="si-qty-${it.id}" style="display:none;
             padding:0 14px 10px;border-top:1px solid var(--border)">
          <label style="font-size:11.5px;color:var(--text2);display:flex;align-items:center;gap:10px">
            Количество для документа:
            <input type="number" id="si-pick-qty-${it.id}"
                   value="${avail}" min="0.001" max="${avail}" step="0.001"
                   style="width:100px;padding:4px 8px;border:1px solid var(--border);
                          border-radius:var(--radius-sm);font-family:'JetBrains Mono',monospace;
                          font-size:12px;background:var(--surface);color:var(--text)">
            <span style="color:var(--text3)">${it.unit} (макс: ${fmtNum(avail)})</span>
          </label>
        </div>
      </div>`;
  }).join('');

  document.getElementById('si-picker-bg').classList.add('open');
}

function siPickerToggle(itemId, checked) {
  const row = document.getElementById(`si-qty-${itemId}`);
  if (row) row.style.display = checked ? 'block' : 'none';
}

function siPickerConfirm() {
  const selected = [];
  document.querySelectorAll('.si-pick-chk:checked').forEach(chk => {
    const itemId = chk.value;
    const qtyEl  = document.getElementById(`si-pick-qty-${itemId}`);
    const qty    = parseFloat(qtyEl?.value) || 0;
    if (qty <= 0) {
      showToast('⚠ Укажите количество > 0 для всех выбранных товаров');
      return;
    }
    const it = DB_shipment_items.find(itemId);
    if (!it) return;
    selected.push({
      shipment_item_id: itemId,
      quantity:         qty,
      description:      it.description,
      supplier_sku:     it.supplier_sku,
      unit:             it.unit,
      unit_price:       it.unit_price,
      currency:         it.currency,
      hs_code:          it.hs_code,
      country_of_origin:it.country_of_origin,
      net_weight:       it.net_weight,
      gross_weight:     it.gross_weight,
    });
  });

  if (!selected.length) {
    showToast('⚠ Выберите хотя бы один товар');
    return;
  }

  // Save to link table
  const tableMap = {
    invoice:      DB_si_invoice_items,
    packing_list: DB_si_packing_items,
    spec:         DB_si_spec_items,
    customs:      DB_si_customs_items,
  };
  const tbl = tableMap[_siPickerDocType];
  if (tbl && _siPickerDocId) {
    selected.forEach(sel => {
      // Check if link already exists, update qty if so
      const existing = tbl.where(r =>
        r.document_id === String(_siPickerDocId) &&
        r.shipment_item_id === String(sel.shipment_item_id)
      );
      if (existing.length) {
        tbl.update(existing[0].id, { quantity: sel.quantity });
      } else {
        tbl.insert({ document_id: String(_siPickerDocId), shipment_item_id: sel.shipment_item_id, quantity: sel.quantity });
      }
    });
  }

  siClosePicker();
  if (_siPickerCb) _siPickerCb(selected);
}

function siClosePicker() {
  document.getElementById('si-picker-bg')?.classList.remove('open');
}

/* ─────────────────────────────────────────────────────────────────────
   INVOICE INTEGRATION — prefill invRows from shipment_items
───────────────────────────────────────────────────────────────────── */
function siLoadIntoInvoice(shipId) {
  const items = siGetByShipment(shipId);
  if (!items.length) { showToast('⚠ В поставке нет товаров'); return; }
  const s = DB_shipments.find(String(shipId));
  invRows.length = 0;
  items.forEach(it => {
    invRows.push({
      desc:  it.description + (it.model ? ' ' + it.model : ''),
      qty:   it.quantity,
      price: it.unit_price,
      unit:  it.unit,
    });
  });
  renderInvTable();
  // Show source banner
  const banner = document.getElementById('inv-si-banner');
  if (banner && s) {
    banner.style.display = 'flex';
    banner.innerHTML = `<span class="icon">🚢</span>
      <span class="text">Товары загружены из поставки <b>${s.shipment_number||shipId}</b> · ${items.length} позиций</span>
      <span class="link" onclick="showSection('shipments');setTimeout(()=>shpOpenDetail('${shipId}'),200)">Открыть поставку →</span>`;
  }
  showToast(`✅ Загружено ${items.length} товаров из поставки`);
}

/* ─────────────────────────────────────────────────────────────────────
   SPEC INTEGRATION — prefill specRows from shipment_items
───────────────────────────────────────────────────────────────────── */
function siLoadIntoSpec(shipId) {
  const items = siGetByShipment(shipId);
  if (!items.length) { showToast('\u26a0 \u0412 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0435 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432'); return; }
  const s = DB_shipments.find(String(shipId));
  specRows.length = 0;
  items.forEach(it => {
    specRows.push({
      desc:    it.description + (it.model ? ' / ' + it.model : ''),
      descRu:  it.description,
      unit:    it.unit,
      qty:     it.quantity,
      price:   it.unit_price,
      hs_code: it.hs_code,
    });
  });
  renderSpecTable();
  const banner = document.getElementById('spec-si-banner');
  if (banner && s) {
    banner.style.display = 'flex';
    banner.innerHTML = '<span class="icon">\ud83d\udea2</span>' +
      '<span class="text">\u0422\u043e\u0432\u0430\u0440\u044b \u0438\u0437 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 <b>' + (s.shipment_number||shipId) + '</b> \u00b7 ' + items.length + ' \u043f\u043e\u0437\u0438\u0446\u0438\u0439</span>' +
      '<span class="link" onclick="showSection(\'shipments\');setTimeout(()=>shpOpenDetail(\'' + shipId + '\'),200)">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u2192</span>';
  }
  showToast('\u2705 \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e ' + items.length + ' \u0442\u043e\u0432\u0430\u0440\u043e\u0432');
}

/* ─────────────────────────────────────────────────────────────────────
   PACKING LIST INTEGRATION — prefill plRows from shipment_items
───────────────────────────────────────────────────────────────────── */
function siLoadIntoPL(shipId) {
  const items = siGetByShipment(shipId);
  if (!items.length) { showToast('⚠ В поставке нет товаров'); return; }
  plRows.length = 0;
  items.forEach(it => {
    plAddRow({
      desc:  it.description,
      qty:   it.quantity,
      unit:  it.unit,
      net:   it.net_weight   || 0,
      gross: it.gross_weight || 0,
      vol:   0,
      pkgs:  0,
    });
  });
  showToast(`✅ Загружено ${items.length} товаров из поставки`);
}

/* ─────────────────────────────────────────────────────────────────────
   CUSTOMS DECLARATION INTEGRATION — prefill items from shipment
───────────────────────────────────────────────────────────────────── */
function siLoadIntoCustoms(declId, shipId) {
  const items = siGetByShipment(shipId);
  if (!items.length) { showToast('⚠ В поставке нет товаров'); return; }

  // Delete existing items for this declaration
  const existing = DB_customs_declaration_items.where(i => i.declaration_id === String(declId));
  existing.forEach(i => {
    const rows = DB_customs_declaration_items.all().filter(r => r.id !== i.id);
    DB_customs_declaration_items.save(rows);
  });

  items.forEach((it, idx) => {
    const duty = (parseFloat(it.unit_price) * parseFloat(it.quantity) * 89.38 * 0.05) || 0;
    const cv   = parseFloat(it.unit_price) * parseFloat(it.quantity) * 89.38 || 0;
    DB_customs_declaration_items.insert({
      declaration_id:    String(declId),
      shipment_item_id:  String(it.id),
      line_num:          idx + 1,
      hs_code:           it.hs_code || '',
      description:       it.description || '',
      country:           it.country_of_origin || '',
      qty:               it.quantity,
      unit:              it.unit,
      unit_price_usd:    it.unit_price,
      customs_value_rub: cv,
      duty_rate:         5,
      duty_amount:       duty,
      vat_rate:          22,
      vat_amount:        (cv + duty) * 0.22,
    });
  });

  cdtRecalcDeclarationTotals(String(declId));
  showToast(`✅ Загружено ${items.length} товаров из поставки`);
  const d = DB_customs_declarations.find(String(declId));
  if (d) cdtRenderPaneItems(d);
}

/* ─────────────────────────────────────────────────────────────────────
   ANALYTICS helpers using shipment_items
───────────────────────────────────────────────────────────────────── */
function siGetAllForAnalytics(companyFilter) {
  const ships = DB_shipments.all().filter(s =>
    !companyFilter || companyFilter === 'all' || s.company === companyFilter
  );
  const shipIds = new Set(ships.map(s => String(s.id)));
  return DB_shipment_items.all().filter(i => shipIds.has(i.shipment_id));
}

/** Top N items by total_price */
function siTopByValue(n, companyFilter) {
  const items = siGetAllForAnalytics(companyFilter);
  const map = {};
  items.forEach(it => {
    const key = it.description || it.supplier_sku || it.id;
    if (!map[key]) map[key] = { description: key, qty: 0, value: 0, hs_code: it.hs_code || '' };
    map[key].qty   += parseFloat(it.quantity)    || 0;
    map[key].value += parseFloat(it.total_price) || 0;
  });
  return Object.values(map).sort((a, b) => b.value - a.value).slice(0, n || 10);
}

/** Grouped by HS code */
function siByHsCode(companyFilter) {
  const items = siGetAllForAnalytics(companyFilter);
  const map = {};
  items.forEach(it => {
    const hs = it.hs_code || 'Без кода';
    if (!map[hs]) map[hs] = { hs_code: hs, qty: 0, value: 0, count: 0 };
    map[hs].qty   += parseFloat(it.quantity)    || 0;
    map[hs].value += parseFloat(it.total_price) || 0;
    map[hs].count++;
  });
  return Object.values(map).sort((a, b) => b.value - a.value);
}



/* ─────────────────────────────────────────────────────────────────
   siPickShipmentForDoc — choose a shipment then load items into
   the currently-open document (invoice / spec / packing_list)
───────────────────────────────────────────────────────────────── */
function siPickShipmentForDoc(docType) {
  const ships = DB_shipments.all().filter(s =>
    (s.company || 'ENDV') === activeCompany && siGetByShipment(s.id).length > 0
  );

  if (!ships.length) {
    showToast('⚠ Нет поставок с товарами. Сначала добавьте товары в карточке поставки.');
    return;
  }

  // Build quick modal overlay
  const existing = document.getElementById('_si_ship_picker_modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = '_si_ship_picker_modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(10,14,23,.78);z-index:3500;' +
    'display:flex;align-items:center;justify-content:center';

  const docLabels = {
    invoice:      '🧾 Инвойс',
    spec:         '📐 Спецификация',
    packing_list: '📦 Упаковочный лист',
    customs:      '🛃 Декларация',
  };

  modal.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);
                border-radius:var(--radius-lg);width:580px;max-width:96vw;
                max-height:80vh;overflow-y:auto;padding:28px 32px;
                box-shadow:0 24px 64px rgba(0,0,0,.45)">
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">
        🚢 Загрузить товары из поставки
      </div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:20px">
        → ${docLabels[docType] || docType} · товары из shipment_items
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${ships.map(s => {
          const items = siGetByShipment(s.id);
          const total = items.reduce((sum, i) => sum + (parseFloat(i.total_price)||0), 0);
          return `<div onclick="siDoLoadForDoc('${s.id}','${docType}',this)"
                       style="padding:12px 16px;border:1.5px solid var(--border);
                              border-radius:var(--radius);cursor:pointer;
                              transition:border-color .15s,background .15s"
                       onmouseover="this.style.borderColor='var(--co-accent)';this.style.background='var(--co-accent-light)'"
                       onmouseout="this.style.borderColor='var(--border)';this.style.background=''">
            <div style="font-family:'JetBrains Mono',monospace;font-weight:800;
                        color:var(--co-accent);font-size:12px">${s.shipment_number || s.id}</div>
            <div style="font-size:11.5px;color:var(--text2);margin-top:3px">
              ${shpSupName(s.supplier_id)} · ${items.length} поз. ·
              <b>${fmtNum(total)} ${s.currency || 'USD'}</b>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="margin-top:18px;text-align:right">
        <button class="gen-btn secondary" onclick="document.getElementById('_si_ship_picker_modal').remove()"
                style="margin:0;padding:8px 20px;font-size:12px">Отмена</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
}

function siDoLoadForDoc(shipId, docType, el) {
  // Close the picker modal
  const modal = document.getElementById('_si_ship_picker_modal');
  if (modal) modal.remove();

  if (docType === 'invoice') {
    siLoadIntoInvoice(shipId);
  } else if (docType === 'spec') {
    siLoadIntoSpec(shipId);
  } else if (docType === 'packing_list') {
    siLoadIntoPL(shipId);
  } else if (docType === 'customs') {
    showToast('⚠ Для таможенных деклараций используйте вкладку «Декларации» в карточке поставки');
  }
}

/* ════════════════════════════════════════════════════════════════════
   PROFORMA IMPORT (pfi) — точка входа сценария поставки (Фаза 2)
   PDF проформы → Claude → экран-ревизия (поставщик новый/существующий,
   товары совпали/новые) → подтверждение → создаётся поставка со связями,
   мастер-данные пишутся через findOrCreate* (Фаза 1).
════════════════════════════════════════════════════════════════════ */
let _pfiData = null;          // последний распарсенный JSON

function pfiEnsureDom() {
  if (document.getElementById('pfi-bg')) return;
  const el = document.createElement('div');
  el.id = 'pfi-bg';
  el.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(15,24,40,0.55);z-index:1200;align-items:flex-start;justify-content:center;overflow:auto;padding:32px 16px';
  el.innerHTML = `
    <div style="background:var(--surface);border-radius:var(--radius-lg);max-width:920px;width:100%;box-shadow:var(--shadow3);position:relative">
      <div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">
        <div style="font-size:18px;font-weight:800">📄 Поставка из проформы-инвойса</div>
        <div style="flex:1"></div>
        <button onclick="pfiClose()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--text3)">✕</button>
      </div>
      <div style="padding:24px">
        <!-- Upload zone -->
        <div id="pfi-upload">
          <div id="pfi-drop" style="border:2px dashed var(--border);border-radius:var(--radius);padding:36px;text-align:center;cursor:pointer;transition:.15s">
            <div style="font-size:34px;margin-bottom:8px">📄⬆</div>
            <div style="font-weight:700;font-size:14px;margin-bottom:4px">Перетащите PDF проформы или нажмите для выбора</div>
            <div style="font-size:12px;color:var(--text3)">Claude извлечёт поставщика и товары. Затем вы проверите и подтвердите.</div>
            <input id="pfi-file" type="file" accept="application/pdf" style="display:none">
          </div>
          <div id="pfi-status" style="display:none"></div>
        </div>
        <!-- Review -->
        <div id="pfi-review" style="display:none"></div>
      </div>
    </div>`;
  document.body.appendChild(el);

  const drop = el.querySelector('#pfi-drop');
  const input = el.querySelector('#pfi-file');
  drop.onclick = () => input.click();
  input.onchange = e => { if (e.target.files[0]) pfiHandleFile(e.target.files[0]); };
  drop.ondragover = e => { e.preventDefault(); drop.style.borderColor = 'var(--co-accent)'; drop.style.background = 'var(--co-accent-light)'; };
  drop.ondragleave = () => { drop.style.borderColor = 'var(--border)'; drop.style.background = ''; };
  drop.ondrop = e => { e.preventDefault(); drop.style.borderColor = 'var(--border)'; drop.style.background = ''; if (e.dataTransfer.files[0]) pfiHandleFile(e.dataTransfer.files[0]); };
  el.onclick = e => { if (e.target === el) pfiClose(); };
}

function pfiOpen() {
  pfiEnsureDom();
  _pfiData = null;
  document.getElementById('pfi-upload').style.display = '';
  document.getElementById('pfi-status').style.display = 'none';
  document.getElementById('pfi-review').style.display = 'none';
  document.getElementById('pfi-review').innerHTML = '';
  document.getElementById('pfi-file').value = '';
  document.getElementById('pfi-bg').style.display = 'flex';
}
function pfiClose() { const b = document.getElementById('pfi-bg'); if (b) b.style.display = 'none'; }

function pfiStatus(type, html) {
  const el = document.getElementById('pfi-status');
  const c = { loading:['rgba(43,122,111,0.08)','var(--teal)'], success:['rgba(31,122,99,0.08)','var(--green)'], error:['rgba(192,57,43,0.08)','var(--red)'] }[type] || ['rgba(0,0,0,0.04)','var(--text2)'];
  el.style.cssText = `display:block;margin-top:14px;padding:11px 16px;border-radius:6px;font-size:12px;background:${c[0]};color:${c[1]}`;
  el.innerHTML = html;
}

async function pfiHandleFile(file) {
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) { pfiStatus('error', '⚠ Файл слишком большой (максимум 20 МБ)'); return; }
  pfiStatus('loading', 'Загрузка PDF и анализ через Claude AI…');
  try {
    const base64 = await new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result.split(',')[1]);
      r.onerror = () => rej(new Error('Ошибка чтения файла'));
      r.readAsDataURL(file);
    });
    pfiStatus('loading', 'Claude анализирует проформу… обычно 10–20 секунд');
    const systemPrompt = `Ты — эксперт по анализу проформа-инвойсов (proforma invoice) для внешнеторговых поставок.
Проанализируй PDF и верни ТОЛЬКО валидный JSON без пояснений и markdown.
Формат:
{
  "proformaNumber": "номер проформы",
  "proformaDate": "YYYY-MM-DD или \\"\\"",
  "supplier": { "name":"название компании-продавца", "country":"", "city":"", "address":"", "contact":"контактное лицо", "email":"", "phone":"", "web":"", "bank":"", "swift":"", "account":"" },
  "incoterms": "FOB/CIF/CFR и т.д.",
  "currency": "USD/EUR/CNY/INR",
  "portOfLoading": "", "portOfDischarge": "", "countryOfOrigin": "",
  "items": [ { "supplierSku":"артикул поставщика если есть", "description":"описание товара", "hsCode":"ТН ВЭД", "quantity":0, "unit":"Mtrs/Pcs/Kgs", "unitPrice":0, "amount":0, "country":"страна происхождения" } ],
  "totalAmount": 0,
  "paymentTerms": "условия оплаты",
  "notes": "",
  "confidence": "high/medium/low"
}
Не найдено — пустая строка "" или 0. Даты в YYYY-MM-DD. Суммы — числа без символов.`;
    const response = await claudeFetch({
      model: 'claude-sonnet-4-6', max_tokens: 3000, system: systemPrompt,
      messages: [{ role:'user', content:[
        { type:'document', source:{ type:'base64', media_type:'application/pdf', data:base64 } },
        { type:'text', text:'Извлеки данные проформы строго в JSON по инструкции.' }
      ]}]
    });
    if (!response.ok) { const e = await response.json().catch(()=>({})); throw new Error(`API ${response.status}: ${e.error?.message||response.statusText}`); }
    const data = await response.json();
    const raw = data.content?.map(b => b.text||'').join('').trim();
    let extracted;
    try { extracted = JSON.parse(raw.replace(/^```[a-z]*\n?/,'').replace(/\n?```$/,'').trim()); }
    catch(e) { throw new Error('Не удалось разобрать ответ Claude. Попробуйте другой PDF.'); }
    pfiRenderReview(extracted);
  } catch(e) {
    console.error('Proforma import error:', e);
    pfiStatus('error', `⚠ Ошибка: ${e.message}`);
  }
}

function pfiRenderReview(data) {
  _pfiData = data || {};
  const sup = data.supplier || {};
  const supMatch = mdMatchSupplier(sup.name);
  const supBadge = supMatch
    ? `<span style="background:rgba(31,122,99,0.12);color:var(--green);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">✅ существующий контрагент</span>`
    : `<span style="background:rgba(196,148,58,0.15);color:var(--gold);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🆕 новый контрагент</span>`;

  const items = data.items || [];
  const supId = supMatch ? supMatch.id : null;
  const rowsHtml = items.map((it, i) => {
    const m = mdMatchProduct({ sku: it.supplierSku, name: it.description }, supId);
    const badge = m
      ? `<span title="${m.matchedBy==='supplier_sku'?'по артикулу поставщика':'по названию'}" style="color:var(--green);font-size:11px;font-weight:700;white-space:nowrap">✅ ${m.product.sku}</span>`
      : `<span style="color:var(--gold);font-size:11px;font-weight:700;white-space:nowrap">🆕 новый</span>`;
    return `<tr data-pfi-row="${i}" style="border-bottom:1px solid var(--border)">
      <td style="padding:6px 4px">${badge}</td>
      <td style="padding:6px 4px"><input class="pfi-i-sku" value="${(it.supplierSku||'').replace(/"/g,'&quot;')}" style="width:90px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px"></td>
      <td style="padding:6px 4px"><input class="pfi-i-desc" value="${(it.description||'').replace(/"/g,'&quot;')}" style="width:100%;min-width:160px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px"></td>
      <td style="padding:6px 4px"><input class="pfi-i-hs" value="${(it.hsCode||'').replace(/"/g,'&quot;')}" style="width:90px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px"></td>
      <td style="padding:6px 4px"><input class="pfi-i-qty" type="number" value="${it.quantity||0}" style="width:64px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px;text-align:right"></td>
      <td style="padding:6px 4px"><input class="pfi-i-unit" value="${(it.unit||'Pcs').replace(/"/g,'&quot;')}" style="width:52px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px"></td>
      <td style="padding:6px 4px"><input class="pfi-i-price" type="number" step="0.01" value="${it.unitPrice||0}" style="width:80px;font-size:11px;padding:4px 6px;border:1px solid var(--border);border-radius:4px;text-align:right"></td>
    </tr>`;
  }).join('');

  const newCount = items.filter((it) => !mdMatchProduct({ sku: it.supplierSku, name: it.description }, supId)).length;
  const matchCount = items.length - newCount;

  document.getElementById('pfi-upload').style.display = 'none';
  const rev = document.getElementById('pfi-review');
  rev.style.display = '';
  rev.innerHTML = `
    ${data.confidence==='low' ? `<div style="background:rgba(196,148,58,0.12);color:var(--gold);padding:8px 14px;border-radius:6px;font-size:12px;margin-bottom:16px">⚠ Низкая уверенность распознавания — внимательно проверьте поля.</div>` : ''}
    <!-- Supplier -->
    <div style="margin-bottom:18px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="font-weight:800;font-size:13px">🏭 Поставщик</div>${supBadge}
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:10px">
        <input id="pfi-s-name" value="${(sup.name||'').replace(/"/g,'&quot;')}" placeholder="Название компании" style="font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px;font-weight:600">
        <input id="pfi-s-country" value="${(sup.country||'').replace(/"/g,'&quot;')}" placeholder="Страна" style="font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px">
        <input id="pfi-s-email" value="${(sup.email||'').replace(/"/g,'&quot;')}" placeholder="Email" style="font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px">
      </div>
    </div>
    <!-- Goods -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <div style="font-weight:800;font-size:13px">📦 Товары (${items.length})</div>
      <span style="font-size:11px;color:var(--text3)">${matchCount} в каталоге · ${newCount} новых → создадутся с артикулом P-…</span>
    </div>
    <div style="overflow-x:auto;border:1px solid var(--border);border-radius:8px">
      <table style="width:100%;border-collapse:collapse;font-size:11px">
        <thead><tr style="background:var(--surface2);text-align:left">
          <th style="padding:8px 4px">Матч</th><th style="padding:8px 4px">Арт. пост.</th><th style="padding:8px 4px">Описание</th><th style="padding:8px 4px">ТН ВЭД</th><th style="padding:8px 4px">Кол-во</th><th style="padding:8px 4px">Ед.</th><th style="padding:8px 4px">Цена</th>
        </tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <!-- Meta -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px">
      <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px">№ проформы</div><input id="pfi-m-num" value="${(data.proformaNumber||'').replace(/"/g,'&quot;')}" style="width:100%;font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px"></div>
      <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px">Incoterms</div><input id="pfi-m-inco" value="${(data.incoterms||'').replace(/"/g,'&quot;')}" style="width:100%;font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px"></div>
      <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px">Валюта</div><input id="pfi-m-cur" value="${(data.currency||'USD').replace(/"/g,'&quot;')}" style="width:100%;font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px"></div>
      <div><div style="font-size:10px;color:var(--text3);margin-bottom:3px">Порт назначения</div><input id="pfi-m-to" value="${(data.portOfDischarge||'').replace(/"/g,'&quot;')}" style="width:100%;font-size:12px;padding:7px 10px;border:1px solid var(--border);border-radius:6px"></div>
    </div>
    <!-- Actions -->
    <div style="display:flex;gap:10px;margin-top:22px;justify-content:flex-end">
      <button onclick="pfiOpen()" style="padding:9px 18px;background:transparent;border:1px solid var(--border);border-radius:7px;cursor:pointer;font-size:12px">↺ Другой файл</button>
      <button onclick="pfiConfirm()" style="padding:9px 22px;background:var(--co-accent);color:white;border:none;border-radius:7px;cursor:pointer;font-size:12px;font-weight:700">✓ Создать поставку</button>
    </div>`;
}

function pfiConfirm() {
  if (!_pfiData) return;
  const co = activeCompany || 'ENDV';
  const currency = (document.getElementById('pfi-m-cur').value || 'USD').trim();
  const num = document.getElementById('pfi-m-num').value.trim();

  // 1) Поставщик — найти-или-создать
  const supRes = findOrCreateSupplier({
    name:    document.getElementById('pfi-s-name').value.trim(),
    country: document.getElementById('pfi-s-country').value.trim(),
    email:   document.getElementById('pfi-s-email').value.trim(),
    contact: (_pfiData.supplier||{}).contact || '',
    phone:   (_pfiData.supplier||{}).phone || '',
    addr:    (_pfiData.supplier||{}).address || '',
    web:     (_pfiData.supplier||{}).web || '',
    bank:    (_pfiData.supplier||{}).bank || '',
    swift:   (_pfiData.supplier||{}).swift || '',
    acc:     (_pfiData.supplier||{}).account || '',
    currency,
  });
  const supId = supRes.supplier ? String(supRes.supplier.id) : '';

  // 2) Создать поставку
  const ship = DB_shipments.insert({
    shipment_number: shpGenNumber(),
    company: co,
    status: 'draft',
    supplier_id: supId,
    contract_id: '',
    incoterms: (document.getElementById('pfi-m-inco').value||'').trim(),
    total_value: 0,
    currency,
    mode: 'sea',
    from: '', to: (document.getElementById('pfi-m-to').value||'').trim(),
    forwarder_id: '', broker_id: '', current_stage: 1,
    notes: num ? ('Создано из проформы ' + num) : 'Создано из проформы',
    dates: { payment:'', production:'', etd:'', eta:'', customs:'', delivery:'' },
    items: [],
    docs: (typeof SHP_DOCS_LIST!=='undefined'?SHP_DOCS_LIST:[]).map(d=>({id:d.id,name:d.name,icon:d.icon,status:d.id==='proforma'?'received':'none',received:d.id==='proforma'})),
    customs_data: {}, payments: [],
    events: [{date:new Date().toLocaleDateString('ru-RU'), icon:'📄', text:'Поставка создана из проформы', note:num||''}],
    _items_migrated: true,   // позиции пишем напрямую в shipment_items, siMigrate не трогает
  });

  // 3) Товары — найти-или-создать + позиции поставки + история цен
  const rows = document.querySelectorAll('#pfi-review tr[data-pfi-row]');
  let total = 0;
  rows.forEach(tr => {
    const sku   = tr.querySelector('.pfi-i-sku').value.trim();
    const desc  = tr.querySelector('.pfi-i-desc').value.trim();
    const hs    = tr.querySelector('.pfi-i-hs').value.trim();
    const qty   = parseFloat(tr.querySelector('.pfi-i-qty').value) || 0;
    const unit  = tr.querySelector('.pfi-i-unit').value.trim() || 'Pcs';
    const price = parseFloat(tr.querySelector('.pfi-i-price').value) || 0;
    if (!desc && !sku) return;

    const pr = findOrCreateProduct({ sku, name: desc, hs_code: hs, unit, price, currency }, supId);
    productAddPricePoint(pr.product.id, { supplierId: supId, price, currency, source: num });

    const line = qty * price; total += line;
    DB_shipment_items.insert({
      shipment_id: String(ship.id),
      product_id: String(pr.product.id),
      supplier_sku: sku,
      model: '',
      description: desc,
      quantity: qty,
      unit,
      unit_price: price,
      total_price: line,
      currency,
      hs_code: hs,
      country_of_origin: pr.product.country_of_origin || '',
      net_weight: 0, gross_weight: 0, package_type: '', notes: '',
    });
  });
  DB_shipments.update(ship.id, { total_value: total });

  // 4) Закрыть, открыть карточку, подсказать следующий шаг (Фаза 3 lite)
  pfiClose();
  if (typeof showSection === 'function') showSection('shipments');
  if (typeof shpLoad === 'function') shpLoad();
  if (typeof shpOpenDetail === 'function') shpOpenDetail(ship.id);
  const hint = supRes.isNew
    ? '🆕 Новый поставщик — оформите договор + спецификацию'
    : '✅ Поставщик в базе — оформите договор';
  if (typeof showToast === 'function') showToast('✅ Поставка создана. ' + hint);
}

