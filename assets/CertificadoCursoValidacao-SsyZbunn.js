import {
  D as e,
  E as t,
  O as n,
  T as r,
  b as i,
  h as a,
  m as o,
  r as s,
  v as c,
  w as l,
  y as u,
} from "./site-I5uQJoek.js";
import { t as d } from "./qr-f-we9UFx.js";
function f() {
  let e = Math.floor(Math.random() * 8) + 2,
    t = Math.floor(Math.random() * 8) + 2;
  return { first: e, second: t, answer: e + t };
}
function p({ courseName: p, path: m }) {
  let [h, g] = s.useState({ first: 4, second: 5, answer: 9 }),
    [_, v] = s.useState(``),
    [y, b] = s.useState(!1),
    [x, S] = s.useState(``),
    C = s.useMemo(
      () => [
        { label: `Curso`, value: p },
        { label: `Status`, value: `Certificado validado` },
        { label: `Modalidade`, value: `Online` },
        { label: `Emitente`, value: `Total Quality Group Brasil` },
      ],
      [p],
    );
  return (
    s.useEffect(() => {
      g(f());
    }, []),
    u.jsxs(`div`, {
      className: `min-h-screen flex flex-col bg-[#031109]`,
      children: [
        u.jsx(l, {
          title: `Validação de Certificado - ${p}`,
          description: `Página de validação por QR Code para certificado de ${p} emitido pela Total Quality Group Brasil.`,
          path: m,
          keywords: [
            `validação de certificado`,
            p,
            `QR Code certificado`,
            `Total Quality Group Brasil`,
          ],
        }),
        u.jsx(r, {}),
        u.jsxs(`main`, {
          className: `flex-1`,
          children: [
            u.jsx(`section`, {
              className: `industrial-hero page-hero-offset`,
              children: u.jsxs(`div`, {
                className: `container grid gap-10 py-20 text-white md:py-28 lg:grid-cols-[1fr_440px] lg:items-center`,
                children: [
                  u.jsxs(`div`, {
                    children: [
                      u.jsx(`p`, {
                        className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                        children: `Validação por QR Code`,
                      }),
                      u.jsxs(`h1`, {
                        className: `mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl`,
                        children: [`Certificado de `, p],
                      }),
                      u.jsx(`p`, {
                        className: `max-w-2xl text-lg leading-relaxed text-white/90`,
                        children: `Confirme a autenticidade do certificado emitido pela Total Quality Group Brasil. Para segurança da consulta, conclua a validação abaixo.`,
                      }),
                    ],
                  }),
                  u.jsx(`div`, {
                    className: `rounded-2xl border border-white/10 bg-[#0B2512]/88 p-5 shadow-[0_24px_70px_rgba(0,0,0,.32)] backdrop-blur md:p-6`,
                    children: y
                      ? u.jsxs(`div`, {
                          children: [
                            u.jsxs(`div`, {
                              className: `mb-5 flex items-center gap-3`,
                              children: [
                                u.jsx(`span`, {
                                  className: `flex h-12 w-12 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-[#C9FFD8] shadow-[0_0_24px_rgba(104,255,148,0.12)]`,
                                  children: u.jsx(a, { size: 28 }),
                                }),
                                u.jsxs(`div`, {
                                  children: [
                                    u.jsx(`h2`, {
                                      className: `text-xl font-black text-white`,
                                      children: `Certificado validado`,
                                    }),
                                    u.jsx(`p`, {
                                      className: `text-sm text-slate-400`,
                                      children: `Confirmação emitida com sucesso.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs(`div`, {
                              className: `rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-4`,
                              children: [
                                u.jsx(`p`, {
                                  className: `text-xs font-black uppercase tracking-[0.18em] text-emerald-200`,
                                  children: `Curso`,
                                }),
                                u.jsx(`p`, {
                                  className: `mt-2 text-2xl font-black text-white`,
                                  children: p,
                                }),
                                u.jsx(`p`, {
                                  className: `mt-3 text-sm leading-relaxed text-slate-300`,
                                  children: `Este certificado foi reconhecido como válido conforme página oficial de validação por QR Code da Total Quality Group Brasil.`,
                                }),
                              ],
                            }),
                            u.jsx(`div`, {
                              className: `mt-4 grid gap-3`,
                              children: C.map((e) =>
                                u.jsxs(
                                  `div`,
                                  {
                                    className: `rounded-xl border border-white/10 bg-black/20 px-4 py-3`,
                                    children: [
                                      u.jsx(`p`, {
                                        className: `text-[11px] font-black uppercase tracking-[0.16em] text-emerald-300`,
                                        children: e.label,
                                      }),
                                      u.jsx(`p`, {
                                        className: `mt-1 text-sm font-bold text-white`,
                                        children: e.value,
                                      }),
                                    ],
                                  },
                                  e.label,
                                ),
                              ),
                            }),
                            u.jsxs(`div`, {
                              className: `mt-4 rounded-xl border border-white/10 bg-black/20 p-4`,
                              children: [
                                u.jsxs(`div`, {
                                  className: `mb-3 flex items-center gap-2`,
                                  children: [
                                    u.jsx(n, {
                                      className: `text-emerald-200`,
                                      size: 20,
                                    }),
                                    u.jsx(`h3`, {
                                      className: `font-black text-white`,
                                      children: `Informações da empresa`,
                                    }),
                                  ],
                                }),
                                u.jsxs(`div`, {
                                  className: `space-y-2 text-sm leading-relaxed text-slate-300`,
                                  children: [
                                    u.jsxs(`p`, {
                                      children: [
                                        u.jsx(`strong`, {
                                          className: `text-white`,
                                          children: `Razão social:`,
                                        }),
                                        ` R SILVA SANTA ANA CONSULTORIA E TREINAMENTOS LTDA`,
                                      ],
                                    }),
                                    u.jsxs(`p`, {
                                      children: [
                                        u.jsx(`strong`, {
                                          className: `text-white`,
                                          children: `Marca:`,
                                        }),
                                        ` Total Quality Group Brasil`,
                                      ],
                                    }),
                                    u.jsxs(`p`, {
                                      children: [
                                        u.jsx(`strong`, {
                                          className: `text-white`,
                                          children: `Contato:`,
                                        }),
                                        ` comercial@totalqualitygroup.com.br`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : u.jsxs(`form`, {
                          id: `form-certificate-validation-${m
                            .replace(/[^a-z0-9]+/gi, `-`)
                            .replace(/^-|-$/g, ``)
                            .toLowerCase()}`,
                          "data-event": `submit_certificate_validation_form`,
                          "data-category": `form`,
                          "data-action": `submit`,
                          "data-label": `Certificate Validation ${p}`,
                          onSubmit: (e) => {
                            (e.preventDefault(),
                              Number(_.trim()) === h.answer
                                ? (S(``), b(!0))
                                : (b(!1),
                                  S(
                                    `Captcha incorreto. Confira o resultado e tente novamente.`,
                                  )));
                          },
                          children: [
                            u.jsxs(`div`, {
                              className: `mb-5 flex items-center gap-3`,
                              children: [
                                u.jsx(`span`, {
                                  className: `flex h-12 w-12 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-[#C9FFD8] shadow-[0_0_24px_rgba(104,255,148,0.12)]`,
                                  children: u.jsx(d, { size: 28 }),
                                }),
                                u.jsxs(`div`, {
                                  children: [
                                    u.jsx(`h2`, {
                                      className: `text-xl font-black text-white`,
                                      children: `Validar certificado`,
                                    }),
                                    u.jsx(`p`, {
                                      className: `text-sm text-slate-400`,
                                      children: `Confirmação de segurança antes da consulta.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsx(`div`, {
                              className: `rounded-xl border border-emerald-300/15 bg-[#031109]/76 p-4`,
                              children: u.jsxs(`div`, {
                                className: `flex items-center justify-between gap-3`,
                                children: [
                                  u.jsxs(`div`, {
                                    children: [
                                      u.jsx(`p`, {
                                        className: `text-xs font-black uppercase tracking-wide text-slate-300`,
                                        children: `Captcha`,
                                      }),
                                      u.jsxs(`p`, {
                                        className: `mt-1 text-2xl font-black text-white`,
                                        children: [
                                          h.first,
                                          ` + `,
                                          h.second,
                                          ` = ?`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  u.jsx(`button`, {
                                    id: `btn-refresh-captcha-${m
                                      .replace(/[^a-z0-9]+/gi, `-`)
                                      .replace(/^-|-$/g, ``)
                                      .toLowerCase()}`,
                                    type: `button`,
                                    "data-event": `refresh_certificate_captcha`,
                                    "data-category": `form`,
                                    "data-action": `click`,
                                    "data-label": `Refresh Captcha ${p}`,
                                    onClick: () => {
                                      (g(f()), v(``), S(``), b(!1));
                                    },
                                    "aria-label": `Gerar novo captcha`,
                                    className: `flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-emerald-100 transition hover:border-emerald-300/40 hover:bg-emerald-300/10`,
                                    children: u.jsx(t, { size: 18 }),
                                  }),
                                ],
                              }),
                            }),
                            u.jsxs(`label`, {
                              className: `mt-4 grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300`,
                              children: [
                                `Resultado`,
                                u.jsx(`input`, {
                                  required: !0,
                                  value: _,
                                  onChange: (e) => v(e.target.value),
                                  inputMode: `numeric`,
                                  placeholder: `Digite o resultado`,
                                  className: `min-h-12 rounded-[8px] border border-white/10 bg-[#031109]/76 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#68FF94]`,
                                }),
                              ],
                            }),
                            x &&
                              u.jsx(`p`, {
                                className: `mt-3 rounded-[8px] border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-100`,
                                children: x,
                              }),
                            u.jsxs(o, {
                              id: `btn-submit-certificate-validation-${m
                                .replace(/[^a-z0-9]+/gi, `-`)
                                .replace(/^-|-$/g, ``)
                                .toLowerCase()}`,
                              type: `submit`,
                              "data-event": `submit_certificate_validation_button`,
                              "data-category": `form`,
                              "data-action": `submit`,
                              "data-label": `Submit Certificate Validation ${p}`,
                              className: `mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#2F7D32] font-black uppercase text-white shadow-[0_10px_28px_rgba(47,125,50,0.28)] hover:bg-[#256B2C]`,
                              children: [
                                u.jsx(c, { size: 18 }),
                                `Validar certificado`,
                              ],
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
            u.jsx(`section`, {
              className: `section-pad bg-[#031109]`,
              children: u.jsx(`div`, {
                className: `container`,
                children:
                  !y &&
                  u.jsxs(`div`, {
                    className: `mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center md:p-8`,
                    children: [
                      u.jsx(e, {
                        className: `mx-auto mb-4 text-emerald-200`,
                        size: 38,
                      }),
                      u.jsx(`h2`, {
                        className: `text-2xl font-black text-white`,
                        children: `Validação protegida`,
                      }),
                      u.jsxs(`p`, {
                        className: `mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-400`,
                        children: [
                          `Resolva o Captcha acima para exibir a confirmação oficial do certificado de `,
                          p,
                          `.`,
                        ],
                      }),
                    ],
                  }),
              }),
            }),
          ],
          id: `conteudo`,
          tabIndex: -1,
        }),
        u.jsx(i, {}),
      ],
    })
  );
}
function m() {
  return u.jsx(p, {
    courseName: `Auditor Líder`,
    path: `/certificados/auditor-lider`,
  });
}
function h() {
  return u.jsx(p, {
    courseName: `Auditor Interno`,
    path: `/certificados/auditor-interno`,
  });
}
export { h as CertificadoAuditorInterno, m as CertificadoAuditorLider };
