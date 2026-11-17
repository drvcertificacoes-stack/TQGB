import {
  C as e,
  T as t,
  b as n,
  c as r,
  i,
  m as a,
  n as o,
  w as s,
  y as c,
} from "./site-I5uQJoek.js";
import { t as l } from "./arrow-En1g7yj6.js";
function u() {
  let [u] = i(),
    d = u.split(`/`).filter(Boolean).at(-1) || `diagnostico`,
    f = r.find((e) => e.slug === d) || r[0],
    p = f.icon;
  return c.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      c.jsx(s, {
        title: `${f.title} para Sistemas de Gestão`,
        description: `${f.text} ${f.description}`,
        path: `/auditoria/${f.slug}`,
        keywords: [
          f.title,
          `auditoria ISO`,
          `sistemas de gestão`,
          `auditoria em empresas`,
        ],
      }),
      c.jsx(t, {}),
      c.jsxs(`main`, {
        id: `conteudo`,
        tabIndex: -1,
        className: `flex flex-1 flex-col min-w-0`,
        children: [
          c.jsx(`section`, {
            className: `industrial-hero page-hero-offset`,
            children: c.jsxs(`div`, {
              className: `container grid gap-10 py-20 text-white md:py-28 lg:grid-cols-[1fr_380px] lg:items-center`,
              children: [
                c.jsxs(`div`, {
                  children: [
                    c.jsxs(`a`, {
                      id: `link-audit-detail-back`,
                      href: `/auditoria`,
                      "data-event": `click_audit_detail_back`,
                      "data-category": `navigation`,
                      "data-action": `click`,
                      "data-label": `Audit Detail Back`,
                      className: `mb-8 inline-flex items-center gap-2 text-sm font-black uppercase text-lime-100`,
                      children: [
                        c.jsx(l, { size: 18 }),
                        ` Voltar para auditorias`,
                      ],
                    }),
                    c.jsx(`div`, {
                      className: `mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#031109]/86 text-[#C9FFD8] shadow-[0_16px_38px_rgba(0,0,0,.24)]`,
                      children: c.jsx(p, { size: 34 }),
                    }),
                    c.jsx(`p`, {
                      className: `mb-3 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                      children: `Tipo de auditoria`,
                    }),
                    c.jsx(`h1`, {
                      className: `mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl`,
                      children: f.title,
                    }),
                    c.jsx(`p`, {
                      className: `max-w-3xl text-lg leading-relaxed text-white/90`,
                      children: f.text,
                    }),
                    c.jsx(`p`, {
                      className: `mt-4 max-w-3xl text-base leading-relaxed text-slate-300`,
                      children: f.description,
                    }),
                    c.jsx(a, {
                      asChild: !0,
                      className: `btn-primary h-12 rounded-md px-6 font-black uppercase text-white`,
                      children: c.jsx(`a`, {
                        id: `btn-audit-detail-proposal-${f.slug}`,
                        href: `#cotacao`,
                        "data-event": `click_audit_detail_proposal`,
                        "data-category": `cta`,
                        "data-action": `click`,
                        "data-label": `Audit Detail Proposal ${f.title}`,
                        className: `mt-8 inline-block`,
                        children: `Solicitar proposta`,
                      }),
                    }),
                  ],
                }),
                c.jsxs(`div`, {
                  className: `rounded-2xl border border-white/10 bg-[#102E18]/92 p-6 text-white shadow-2xl backdrop-blur`,
                  children: [
                    c.jsx(`p`, {
                      className: `mb-4 text-sm font-black uppercase tracking-widest text-[#C9FFD8]`,
                      children: `Entregáveis`,
                    }),
                    c.jsx(`div`, {
                      className: `space-y-3`,
                      children: f.outputs.map((e) =>
                        c.jsxs(
                          `div`,
                          {
                            className: `flex items-start gap-3`,
                            children: [
                              c.jsx(o, {
                                className: `mt-0.5 shrink-0 text-[#1F8A4C]`,
                                size: 20,
                              }),
                              c.jsx(`p`, {
                                className: `font-semibold text-slate-300`,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          c.jsx(`section`, {
            id: `cotacao`,
            className: `section-pad bg-[#031109]`,
            children: c.jsxs(`div`, {
              className: `container grid gap-10 lg:grid-cols-[1fr_430px] lg:items-start`,
              children: [
                c.jsxs(`div`, {
                  children: [
                    c.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Quando aplicar`,
                    }),
                    c.jsxs(`h2`, {
                      className: `section-title mt-3`,
                      children: [`Indicações para `, f.title],
                    }),
                    c.jsx(`div`, {
                      className: `mt-8 grid gap-4 sm:grid-cols-3`,
                      children: f.bestFor.map((e) =>
                        c.jsxs(
                          `div`,
                          {
                            className: `rounded-2xl border border-white/10 bg-[#102E18] p-5 shadow-[0_20px_44px_rgba(0,0,0,.22)]`,
                            children: [
                              c.jsx(o, { className: `mb-4 text-[#C9FFD8]` }),
                              c.jsx(`p`, {
                                className: `font-semibold leading-relaxed text-slate-300`,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    c.jsxs(`div`, {
                      className: `mt-10 rounded-2xl border border-[#68FF94]/18 bg-[#0B2512] p-6`,
                      children: [
                        c.jsx(`p`, {
                          className: `text-sm font-black uppercase tracking-[0.18em] text-[#C9FFD8]`,
                          children: `Condução técnica`,
                        }),
                        c.jsx(`p`, {
                          className: `mt-3 leading-relaxed text-slate-300`,
                          children: `A auditoria é planejada conforme escopo, critérios, normas aplicáveis e maturidade do Sistema de Gestão, com foco em evidências objetivas e recomendações práticas para tomada de decisão.`,
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx(e, {
                  title: `Cotação de auditoria`,
                  context: f.title,
                  serviceScope: `auditoria`,
                }),
              ],
            }),
          }),
        ],
      }),
      c.jsx(n, {}),
    ],
  });
}
export { u as default };
