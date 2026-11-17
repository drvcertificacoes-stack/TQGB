import {
  C as e,
  T as t,
  _ as n,
  b as r,
  f as i,
  g as a,
  m as o,
  n as s,
  o as c,
  w as l,
  y as u,
} from "./site-I5uQJoek.js";
function d() {
  return u.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      u.jsx(l, {
        title: `Consultoria ISO para Empresas`,
        description: `Consultoria ISO para implementação, manutenção e melhoria de Sistemas de Gestão. Atendemos ISO 9001, ISO 14001, ISO 45001, ISO 27001 e outras normas.`,
        path: `/consultoria`,
        keywords: [
          `consultoria ISO`,
          `implementação ISO`,
          `certificação ISO`,
          `ISO 9001`,
          `ISO 14001`,
          `ISO 45001`,
        ],
      }),
      u.jsx(t, {}),
      u.jsxs(`main`, {
        id: `conteudo`,
        tabIndex: -1,
        className: `flex flex-1 flex-col min-w-0`,
        children: [
          u.jsx(`section`, {
            className: `industrial-hero page-hero-offset`,
            children: u.jsx(`div`, {
              className: `container py-20 text-white md:py-28`,
              children: u.jsxs(`div`, {
                className: `max-w-4xl`,
                children: [
                  u.jsx(`p`, {
                    className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                    children: `Consultoria ISO`,
                  }),
                  u.jsx(`h1`, {
                    className: `mb-6 text-4xl font-black leading-tight md:text-6xl`,
                    children: `Qual consultoria ISO sua empresa precisa?`,
                  }),
                  u.jsx(`p`, {
                    className: `max-w-2xl text-lg text-white/90 md:text-xl`,
                    children: `Apoiamos sua organização em todas as etapas: diagnóstico, planejamento, implementação, auditoria interna, tratamento de Não conformidades e preparação para Certificação.`,
                  }),
                  u.jsxs(`div`, {
                    className: `mt-8 flex flex-col gap-4 sm:flex-row`,
                    children: [
                      u.jsx(o, {
                        asChild: !0,
                        className: `btn-primary h-12 rounded-md px-6 font-black uppercase text-white`,
                        children: u.jsx(`a`, {
                          id: `btn-consultoria-hero-proposal`,
                          href: `#cotacao`,
                          "data-event": `click_consultoria_hero_proposal`,
                          "data-category": `cta`,
                          "data-action": `click`,
                          "data-label": `Consultoria Hero Proposal`,
                          children: `Quero solicitar uma proposta`,
                        }),
                      }),
                      u.jsx(o, {
                        asChild: !0,
                        className: `h-12 rounded-md bg-[#031109] px-6 font-black uppercase text-[#1F8A4C] hover:bg-slate-100`,
                        children: u.jsx(`a`, {
                          id: `btn-consultoria-hero-whatsapp`,
                          href: i(
                            `Olá! Quero falar com um consultor sobre qual ISO minha empresa precisa.`,
                          ),
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "data-event": `click_whatsapp_consultoria_hero`,
                          "data-category": `cta`,
                          "data-action": `click`,
                          "data-label": `Consultoria Hero WhatsApp`,
                          children: `Quero falar com consultor`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          u.jsx(`section`, {
            className: `section-pad bg-[#0F3D22] text-white`,
            children: u.jsxs(`div`, {
              className: `container`,
              children: [
                u.jsx(`h2`, {
                  className: `mb-12 text-center text-3xl font-black md:text-5xl`,
                  children: `Qual Certificação ISO sua empresa precisa?`,
                }),
                u.jsx(`div`, {
                  className: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
                  children: c.map((e) => {
                    let t = e.icon;
                    return u.jsxs(
                      `a`,
                      {
                        id: `card-consultoria-${e.slug}`,
                        href: `/consultoria/${e.slug}`,
                        "data-event": `click_consultoria_norm_card`,
                        "data-category": `card`,
                        "data-action": `click`,
                        "data-label": `Consultoria Card ${e.code}`,
                        className: `group flex min-h-36 gap-4 rounded-2xl bg-[#102E18] p-5 text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl`,
                        children: [
                          u.jsx(`span`, {
                            className: `flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[#1F8A4C] text-white`,
                            children: u.jsx(t, { size: 28 }),
                          }),
                          u.jsxs(`span`, {
                            children: [
                              u.jsx(`strong`, {
                                className: `block text-lg text-white`,
                                children: e.code,
                              }),
                              u.jsx(`span`, {
                                className: `block text-sm leading-snug text-slate-300`,
                                children: e.title,
                              }),
                              u.jsxs(`span`, {
                                className: `mt-4 inline-flex items-center gap-1 text-xs font-black uppercase text-[#1F8A4C]`,
                                children: [
                                  `Saiba mais `,
                                  u.jsx(a, { size: 14 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.slug,
                    );
                  }),
                }),
              ],
            }),
          }),
          u.jsx(`section`, {
            id: `cotacao`,
            className: `section-pad bg-[#031109]`,
            children: u.jsxs(`div`, {
              className: `container grid gap-12 lg:grid-cols-[1fr_430px] lg:items-start`,
              children: [
                u.jsxs(`div`, {
                  children: [
                    u.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Como funciona`,
                    }),
                    u.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Consultoria para Implantação de Sistemas de gestão ISO`,
                    }),
                    u.jsx(`p`, {
                      className: `mt-5 text-lg leading-relaxed text-slate-400`,
                      children: `Nossa consultoria acompanha sua empresa desde o planejamento até a preparação para a auditoria de Certificação, oferecendo suporte técnico completo para que o Sistema de gestão seja implementado de forma eficiente e alinhado às necessidades do negócio.`,
                    }),
                    u.jsx(`div`, {
                      className: `mt-8 space-y-4`,
                      children: n.map((e, t) =>
                        u.jsxs(
                          `div`,
                          {
                            className: `flex gap-4 rounded-2xl border border-white/10 bg-[#102E18] p-5`,
                            children: [
                              u.jsx(`span`, {
                                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F8A4C] font-black text-white`,
                                children: t + 1,
                              }),
                              u.jsxs(`div`, {
                                children: [
                                  u.jsx(`h3`, {
                                    className: `font-black text-white`,
                                    children: e.title,
                                  }),
                                  u.jsx(`p`, {
                                    className: `text-slate-400`,
                                    children: e.text,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                    u.jsx(`div`, {
                      className: `mt-10 grid gap-4 sm:grid-cols-2`,
                      children: [
                        `Consultores altamente qualificados`,
                        `Atendimento personalizado`,
                        `Metodologia prática e eficiente`,
                        `Suporte durante todas as etapas`,
                        `Foco em resultados e Melhoria Contínua`,
                        `Experiência em diversos segmentos`,
                      ].map((e) =>
                        u.jsxs(
                          `div`,
                          {
                            className: `flex items-center gap-3 rounded-2xl bg-[#102E18] p-4 shadow-[0_20px_44px_rgba(0,0,0,.22)]`,
                            children: [
                              u.jsx(s, {
                                className: `text-[#1F8A4C]`,
                                size: 22,
                              }),
                              u.jsx(`p`, {
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
                u.jsx(e, {
                  title: `Solicitar proposta`,
                  context: `consultoria ISO`,
                  serviceScope: `consultoria`,
                }),
              ],
            }),
          }),
        ],
      }),
      u.jsx(r, {}),
    ],
  });
}
export { d as default };
