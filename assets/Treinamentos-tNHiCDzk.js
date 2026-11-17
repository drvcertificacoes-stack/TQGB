import {
  C as e,
  S as t,
  T as n,
  b as r,
  h as i,
  m as a,
  n as o,
  w as s,
  y as c,
} from "./site-I5uQJoek.js";
import { t as l } from "./qr-f-we9UFx.js";
function u() {
  return c.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      c.jsx(s, {
        title: `Treinamentos SGI - Auditor Interno e Auditor Líder`,
        description: `Treinamentos em Sistemas de Gestão Integrada: Auditor Interno SGI e Auditor Líder SGI com foco em ISO 9001, ISO 14001, ISO 45001 e ISO 19011.`,
        path: `/treinamentos`,
        keywords: [
          `treinamento SGI`,
          `Auditor Interno SGI`,
          `Auditor Líder SGI`,
          `ISO 19011`,
          `treinamento auditor ISO`,
        ],
      }),
      c.jsx(n, {}),
      c.jsxs(`main`, {
        id: `conteudo`,
        tabIndex: -1,
        className: `flex flex-1 flex-col min-w-0`,
        children: [
          c.jsx(`section`, {
            className: `industrial-hero page-hero-offset`,
            children: c.jsxs(`div`, {
              className: `container py-20 text-white md:py-28`,
              children: [
                c.jsx(`p`, {
                  className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                  children: `Treinamentos`,
                }),
                c.jsx(`h1`, {
                  className: `mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl`,
                  children: `Treinamentos em Sistemas de Gestão Integrada`,
                }),
                c.jsx(`p`, {
                  className: `max-w-2xl text-lg leading-relaxed text-white/90`,
                  children: `Formação prática para Auditor Interno SGI e Auditor Líder SGI, com foco em ISO 9001, ISO 14001, ISO 45001 e diretrizes da ISO 19011.`,
                }),
                c.jsx(a, {
                  asChild: !0,
                  className: `btn-primary h-10 rounded-md px-4 text-xs font-black uppercase text-white sm:h-12 sm:px-6 sm:text-sm`,
                  children: c.jsx(`a`, {
                    id: `btn-treinamentos-hero-quote`,
                    href: `#cotacao`,
                    "data-event": `click_treinamentos_hero_quote`,
                    "data-category": `cta`,
                    "data-action": `click`,
                    "data-label": `Treinamentos Hero Quote`,
                    className: `mt-7 inline-block md:mt-8`,
                    children: `Solicitar cotação`,
                  }),
                }),
              ],
            }),
          }),
          c.jsx(`section`, {
            className: `section-pad bg-[#031109]`,
            children: c.jsxs(`div`, {
              className: `container`,
              children: [
                c.jsxs(`div`, {
                  className: `mx-auto mb-12 max-w-3xl text-center`,
                  children: [
                    c.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Cursos disponíveis`,
                    }),
                    c.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Capacitação para auditorias internas e liderança`,
                    }),
                    c.jsx(`p`, {
                      className: `mt-4 text-lg leading-relaxed text-slate-400`,
                      children: `Conteúdo técnico com aplicação prática para planejar, conduzir, registrar e acompanhar auditorias em Sistemas de Gestão Integrada.`,
                    }),
                  ],
                }),
                c.jsx(`div`, {
                  className: `grid gap-6 lg:grid-cols-2`,
                  children: t.map((e) => {
                    let t = e.icon;
                    return c.jsxs(
                      `a`,
                      {
                        id: `card-treinamento-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`,
                        href: `#cotacao`,
                        "data-event": `click_treinamento_card_quote`,
                        "data-category": `card`,
                        "data-action": `click`,
                        "data-label": `Treinamento Card ${e.title}`,
                        className: `glass-effect flex min-h-full flex-col rounded-2xl p-7 card-hover`,
                        children: [
                          c.jsx(`div`, {
                            className: `mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F8A4C]/12 text-[#C9FFD8]`,
                            children: c.jsx(t, { size: 32 }),
                          }),
                          c.jsx(`h3`, {
                            className: `mb-3 text-2xl font-black text-white`,
                            children: e.title,
                          }),
                          c.jsx(`p`, {
                            className: `text-slate-300`,
                            children: e.text,
                          }),
                          c.jsx(`p`, {
                            className: `mt-3 text-sm leading-relaxed text-slate-400`,
                            children: e.description,
                          }),
                          c.jsx(`div`, {
                            className: `mt-5 flex flex-wrap gap-2`,
                            children: e.standards.map((e) =>
                              c.jsx(
                                `span`,
                                {
                                  className: `rounded-full border border-[#68FF94]/20 bg-[#68FF94]/8 px-3 py-1 text-xs font-black text-[#C9FFD8]`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                          c.jsx(`div`, {
                            className: `mt-6 grid gap-3`,
                            children: e.outcomes.map((e) =>
                              c.jsxs(
                                `span`,
                                {
                                  className: `flex items-start gap-2 text-sm font-semibold text-slate-300`,
                                  children: [
                                    c.jsx(o, {
                                      className: `mt-0.5 shrink-0 text-[#1F8A4C]`,
                                      size: 17,
                                    }),
                                    e,
                                  ],
                                },
                                e,
                              ),
                            ),
                          }),
                          c.jsx(`span`, {
                            className: `mt-6 inline-flex w-fit rounded-full bg-[#2F7D32] px-4 py-2 text-xs font-black uppercase text-white sm:px-5 sm:text-sm`,
                            children: `Solicitar cotação`,
                          }),
                        ],
                      },
                      e.title,
                    );
                  }),
                }),
              ],
            }),
          }),
          c.jsx(`section`, {
            className: `bg-[#031109] px-4 pb-6`,
            children: c.jsx(`div`, {
              className: `container`,
              children: c.jsx(`div`, {
                className: `rounded-3xl border border-[#68FF94]/18 bg-gradient-to-br from-[#0B2512] via-[#071D10] to-[#020C05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-8`,
                children: c.jsxs(`div`, {
                  className: `flex flex-col gap-6 md:flex-row md:items-center md:justify-between`,
                  children: [
                    c.jsxs(`div`, {
                      className: `max-w-3xl`,
                      children: [
                        c.jsx(`div`, {
                          className: `mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-[#C9FFD8]`,
                          children: c.jsx(l, { size: 26 }),
                        }),
                        c.jsx(`p`, {
                          className: `section-kicker`,
                          children: `Validação digital`,
                        }),
                        c.jsx(`h2`, {
                          className: `mt-3 text-2xl font-black text-white md:text-4xl`,
                          children: `Valide certificados de treinamento`,
                        }),
                        c.jsx(`p`, {
                          className: `mt-4 text-base leading-relaxed text-slate-400`,
                          children: `Acesse a página de validação digital para conferir certificados emitidos pela Total Quality Group Brasil.`,
                        }),
                      ],
                    }),
                    c.jsx(a, {
                      asChild: !0,
                      className: `h-10 rounded-md bg-white px-4 text-xs font-black uppercase text-[#0B2512] hover:bg-[#EAF7E8] sm:h-12 sm:px-6 sm:text-sm`,
                      children: c.jsxs(`a`, {
                        id: `btn-treinamentos-validacao-digital`,
                        href: `/validacao-digital`,
                        "data-event": `click_treinamentos_validacao_digital`,
                        "data-category": `cta`,
                        "data-action": `click`,
                        "data-label": `Treinamentos Validação Digital`,
                        className: `shrink-0`,
                        children: [
                          c.jsx(i, { className: `mr-2`, size: 18 }),
                          `Ir para validação`,
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
          c.jsx(`section`, {
            id: `cotacao`,
            className: `section-pad bg-[#031109]`,
            children: c.jsxs(`div`, {
              className: `container grid gap-12 lg:grid-cols-[1fr_430px] lg:items-start`,
              children: [
                c.jsxs(`div`, {
                  children: [
                    c.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Metodologia`,
                    }),
                    c.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Conteúdo prático e aplicável`,
                    }),
                    c.jsx(`div`, {
                      className: `mt-8 grid gap-4 sm:grid-cols-2`,
                      children: [
                        `Teoria aplicada aos requisitos ISO`,
                        `Exercícios e estudos de caso`,
                        `Planejamento e condução de auditorias`,
                        `Registro de evidências e constatações`,
                        `Identificação de não conformidades`,
                        `Certificado de participação`,
                      ].map((e) =>
                        c.jsxs(
                          `div`,
                          {
                            className: `flex items-center gap-3 rounded-2xl bg-[#102E18] p-4 shadow-[0_20px_44px_rgba(0,0,0,.22)]`,
                            children: [
                              c.jsx(o, { className: `text-[#1F8A4C]` }),
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
                c.jsx(e, {
                  title: `Cotação de treinamentos`,
                  context: `treinamento SGI`,
                  serviceScope: `treinamento`,
                }),
              ],
            }),
          }),
        ],
      }),
      c.jsx(r, {}),
    ],
  });
}
export { u as default };
