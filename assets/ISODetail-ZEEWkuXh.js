import {
  C as e,
  T as t,
  _ as n,
  b as r,
  f as i,
  i as a,
  m as o,
  n as s,
  o as c,
  w as l,
  y as u,
} from "./site-I5uQJoek.js";
import { t as d } from "./arrow-En1g7yj6.js";
function f() {
  let [f] = a(),
    p = f.split(`/`).filter(Boolean).at(-1) || `iso-9001`,
    m = c.find((e) => e.slug === p) || c[0],
    h = m.icon;
  return u.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      u.jsx(l, {
        title: `Consultoria ${m.code} - ${m.title}`,
        description: `Consultoria ${m.code} para ${m.title}. ${m.description}`,
        path: `/consultoria/${m.slug}`,
        keywords: [
          `consultoria ${m.code}`,
          m.title,
          `certificação ISO`,
          `sistema de gestão`,
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
            children: u.jsxs(`div`, {
              className: `container grid gap-10 py-20 text-white md:py-28 lg:grid-cols-[1fr_380px] lg:items-center`,
              children: [
                u.jsxs(`div`, {
                  children: [
                    u.jsxs(`a`, {
                      id: `link-iso-detail-back`,
                      href: `/consultoria`,
                      "data-event": `click_iso_detail_back`,
                      "data-category": `navigation`,
                      "data-action": `click`,
                      "data-label": `ISO Detail Back`,
                      className: `mb-8 inline-flex items-center gap-2 text-sm font-black uppercase text-lime-100`,
                      children: [
                        u.jsx(d, { size: 18 }),
                        ` Voltar para consultorias`,
                      ],
                    }),
                    u.jsx(`div`, {
                      className: `mb-5 flex h-16 w-16 items-center justify-center rounded bg-[#031109] text-[#1F8A4C]`,
                      children: u.jsx(h, { size: 34 }),
                    }),
                    u.jsx(`h1`, {
                      className: `mb-6 text-4xl font-black leading-tight md:text-6xl`,
                      children: m.title,
                    }),
                    u.jsxs(`h2`, {
                      className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                      children: [`Consultoria `, m.code],
                    }),
                    u.jsx(`p`, {
                      className: `max-w-3xl text-lg leading-relaxed text-white/90`,
                      children: m.description,
                    }),
                    u.jsxs(`div`, {
                      className: `mt-8 flex flex-col gap-4 sm:flex-row`,
                      children: [
                        u.jsx(o, {
                          asChild: !0,
                          className: `btn-primary h-12 rounded-md px-6 font-black uppercase text-white`,
                          children: u.jsx(`a`, {
                            id: `btn-iso-detail-proposal-${m.slug}`,
                            href: `#cotacao`,
                            "data-event": `click_iso_detail_proposal`,
                            "data-category": `cta`,
                            "data-action": `click`,
                            "data-label": `ISO Detail Proposal ${m.code}`,
                            children: `Solicitar proposta`,
                          }),
                        }),
                        u.jsx(o, {
                          asChild: !0,
                          className: `h-12 rounded-md bg-[#031109] px-6 font-black uppercase text-[#C9FFD8] hover:bg-[#102E18]`,
                          children: u.jsx(`a`, {
                            id: `btn-iso-detail-whatsapp-${m.slug}`,
                            href: i(
                              `Olá! Quero falar com um consultor sobre ${m.code}.`,
                            ),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            "data-event": `click_whatsapp_iso_detail`,
                            "data-category": `cta`,
                            "data-action": `click`,
                            "data-label": `ISO Detail WhatsApp ${m.code}`,
                            children: `WhatsApp`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(`div`, {
                  className: `rounded-2xl bg-[#102E18] p-6 text-white shadow-2xl`,
                  children: [
                    u.jsx(`p`, {
                      className: `mb-4 text-sm font-black uppercase tracking-widest text-[#C9FFD8]`,
                      children: `Benefícios`,
                    }),
                    u.jsx(`div`, {
                      className: `space-y-3`,
                      children: m.benefits.map((e) =>
                        u.jsxs(
                          `div`,
                          {
                            className: `flex items-start gap-3`,
                            children: [
                              u.jsx(s, {
                                className: `mt-0.5 text-[#1F8A4C]`,
                                size: 20,
                              }),
                              u.jsx(`p`, {
                                className: `font-semibold`,
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
          u.jsx(`section`, {
            className: `section-pad bg-[#0F3D22] text-white`,
            children: u.jsxs(`div`, {
              className: `container`,
              children: [
                u.jsxs(`h2`, {
                  className: `mb-12 text-center text-3xl font-black md:text-5xl`,
                  children: [`Como funciona a `, m.code],
                }),
                u.jsx(`div`, {
                  className: `grid gap-5 md:grid-cols-5`,
                  children: n.map((e, t) =>
                    u.jsxs(
                      `div`,
                      {
                        className: `rounded-2xl bg-[#102E18] p-5 text-white shadow-xl`,
                        children: [
                          u.jsx(`span`, {
                            className: `mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#1F8A4C] font-black text-white`,
                            children: t + 1,
                          }),
                          u.jsx(`h3`, {
                            className: `mb-2 font-black`,
                            children: e.title,
                          }),
                          u.jsx(`p`, {
                            className: `text-sm text-slate-400`,
                            children: e.text,
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
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
                    u.jsxs(`p`, {
                      className: `section-kicker`,
                      children: [`Empresas que buscam `, m.code],
                    }),
                    u.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Quando essa consultoria faz sentido?`,
                    }),
                    u.jsx(`p`, {
                      className: `mt-5 text-lg leading-relaxed text-slate-400`,
                      children: `A consultoria é indicada para empresas que precisam estruturar processos, comprovar conformidade, atender requisitos de clientes, reduzir riscos e preparar a organização para auditorias internas ou Certificação.`,
                    }),
                    u.jsx(`div`, {
                      className: `mt-8 grid gap-4 sm:grid-cols-2`,
                      children: [
                        `Diagnóstico inicial`,
                        `Plano de implementação`,
                        `Documentação do Sistema`,
                        `Treinamento da equipe`,
                        `Auditoria interna`,
                        `Preparação para Certificação`,
                      ].map((e) =>
                        u.jsxs(
                          `div`,
                          {
                            className: `flex items-center gap-3 rounded-2xl bg-[#102E18] p-4`,
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
                  title: `Solicitar proposta ${m.code}`,
                  context: `${m.code} - ${m.title}`,
                  serviceScope: `consultoria`,
                  initialService: `Consultoria ISO - ${m.code}`,
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
export { f as default };
