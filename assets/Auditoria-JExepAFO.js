import {
  C as e,
  T as t,
  b as n,
  c as r,
  m as i,
  n as a,
  w as o,
  y as s,
} from "./site-I5uQJoek.js";
function c() {
  return s.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      s.jsx(o, {
        title: `Auditorias em Sistemas de Gestão ISO`,
        description: `Auditorias de diagnóstico, internas, fornecedor, conformidade, certificação, manutenção e recertificação para Sistemas de Gestão ISO.`,
        path: `/auditoria`,
        keywords: [
          `auditoria ISO`,
          `auditoria interna ISO`,
          `auditoria de fornecedor`,
          `auditoria de certificação`,
          `auditoria de conformidade`,
        ],
      }),
      s.jsx(t, {}),
      s.jsxs(`main`, {
        id: `conteudo`,
        tabIndex: -1,
        className: `flex flex-1 flex-col min-w-0`,
        children: [
          s.jsx(`section`, {
            className: `industrial-hero page-hero-offset`,
            children: s.jsxs(`div`, {
              className: `container py-20 text-white md:py-28`,
              children: [
                s.jsx(`p`, {
                  className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                  children: `Auditorias`,
                }),
                s.jsx(`h1`, {
                  className: `mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl`,
                  children: `Auditorias em Sistemas de gestão`,
                }),
                s.jsx(`p`, {
                  className: `max-w-2xl text-lg leading-relaxed text-white/90`,
                  children: `diagnóstico, conformidade, fornecedores, manutenção, recertificação e preparação para auditorias de Certificação.`,
                }),
                s.jsx(i, {
                  asChild: !0,
                  className: `btn-primary h-12 rounded-md px-6 font-black uppercase text-white`,
                  children: s.jsx(`a`, {
                    id: `btn-auditoria-hero-proposal`,
                    href: `#cotacao`,
                    "data-event": `click_auditoria_hero_proposal`,
                    "data-category": `cta`,
                    "data-action": `click`,
                    "data-label": `Auditoria Hero Proposal`,
                    className: `mt-8 inline-block`,
                    children: `Quero solicitar uma proposta`,
                  }),
                }),
              ],
            }),
          }),
          s.jsx(`section`, {
            className: `section-pad bg-[#031109]`,
            children: s.jsxs(`div`, {
              className: `container`,
              children: [
                s.jsxs(`div`, {
                  className: `mx-auto mb-12 max-w-3xl text-center`,
                  children: [
                    s.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Tipos de auditoria`,
                    }),
                    s.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Auditorias para cada etapa do Sistema de Gestão`,
                    }),
                    s.jsx(`p`, {
                      className: `mt-4 text-lg leading-relaxed text-slate-400`,
                      children: `Do diagnóstico inicial à recertificação, avaliamos conformidade, eficácia e riscos com base nos requisitos aplicáveis.`,
                    }),
                  ],
                }),
                s.jsx(`div`, {
                  className: `grid gap-5 md:grid-cols-2 lg:grid-cols-3`,
                  children: r.map((e) => {
                    let t = e.icon;
                    return s.jsxs(
                      `a`,
                      {
                        id: `card-auditoria-${e.slug}`,
                        href: `/auditoria/${e.slug}`,
                        "data-event": `click_auditoria_card`,
                        "data-category": `card`,
                        "data-action": `click`,
                        "data-label": `Auditoria Card ${e.title}`,
                        className: `group glass-effect flex min-h-full flex-col rounded-2xl p-6 card-hover`,
                        children: [
                          s.jsx(`div`, {
                            className: `mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F8A4C]/12 text-[#C9FFD8]`,
                            children: s.jsx(t, { size: 30 }),
                          }),
                          s.jsx(`h3`, {
                            className: `mb-3 text-xl font-black text-white`,
                            children: e.title,
                          }),
                          s.jsx(`p`, {
                            className: `text-sm leading-relaxed text-slate-400`,
                            children: e.text,
                          }),
                          s.jsx(`span`, {
                            className: `mt-5 inline-flex items-center gap-2 text-xs font-black uppercase text-[#2F7D32]`,
                            children: `Ver detalhes`,
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
          s.jsx(`section`, {
            id: `cotacao`,
            className: `section-pad bg-[#0B2512]`,
            children: s.jsxs(`div`, {
              className: `container grid gap-12 lg:grid-cols-[1fr_430px] lg:items-start`,
              children: [
                s.jsxs(`div`, {
                  children: [
                    s.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Como funciona`,
                    }),
                    s.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Da preparação ao relatório final`,
                    }),
                    s.jsx(`div`, {
                      className: `mt-8 space-y-4`,
                      children: [
                        `Definição de escopo, norma e critérios`,
                        `Análise de documentos, processos e requisitos`,
                        `Execução da auditoria com entrevistas e evidências`,
                        `Relatório técnico com achados classificados`,
                        `Plano de ações corretivas e oportunidades`,
                        `Acompanhamento da eficácia quando aplicável`,
                      ].map((e, t) =>
                        s.jsxs(
                          `div`,
                          {
                            className: `flex gap-4 rounded-2xl bg-[#102E18] p-5 shadow-[0_20px_44px_rgba(0,0,0,.22)]`,
                            children: [
                              s.jsx(`span`, {
                                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F8A4C] font-black text-white`,
                                children: t + 1,
                              }),
                              s.jsx(`p`, {
                                className: `self-center font-semibold text-slate-300`,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    s.jsx(`div`, {
                      className: `mt-8 grid gap-3 sm:grid-cols-2`,
                      children: [
                        `Identificação de não conformidades`,
                        `Oportunidades de melhoria`,
                        `Redução de riscos`,
                        `Preparação para Certificação`,
                      ].map((e) =>
                        s.jsxs(
                          `div`,
                          {
                            className: `flex items-center gap-3`,
                            children: [
                              s.jsx(a, { className: `text-[#1F8A4C]` }),
                              s.jsx(`span`, {
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
                s.jsx(e, {
                  title: `cotação de auditoria`,
                  context: `auditoria em Sistema de gestão`,
                  serviceScope: `auditoria`,
                }),
              ],
            }),
          }),
        ],
      }),
      s.jsx(n, {}),
    ],
  });
}
export { c as default };
