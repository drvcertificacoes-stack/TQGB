import {
  T as e,
  b as t,
  h as n,
  n as r,
  v as i,
  w as a,
  y as o,
} from "./site-I5uQJoek.js";
import { t as s } from "./qr-f-we9UFx.js";
function c() {
  return o.jsxs(`div`, {
    className: `min-h-screen flex flex-col bg-[#031109]`,
    children: [
      o.jsx(a, {
        title: `Validação Digital de Certificados`,
        description: `Página de validação digital da Total Quality Group Brasil para conferência de certificados por QR Code.`,
        path: `/validacao-digital`,
        keywords: [
          `validação digital`,
          `QR Code certificado`,
          `validar certificado`,
          `Total Quality Group Brasil`,
        ],
      }),
      o.jsx(e, {}),
      o.jsxs(`main`, {
        id: `conteudo`,
        tabIndex: -1,
        className: `flex flex-1 flex-col min-w-0`,
        children: [
          o.jsx(`section`, {
            className: `industrial-hero page-hero-offset`,
            children: o.jsx(`div`, {
              className: `container py-20 text-white md:py-28`,
              children: o.jsxs(`div`, {
                className: `max-w-4xl`,
                children: [
                  o.jsx(`p`, {
                    className: `mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime-200`,
                    children: `Validação digital`,
                  }),
                  o.jsx(`h1`, {
                    className: `mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl`,
                    children: `Valide certificados por QR Code`,
                  }),
                  o.jsx(`p`, {
                    className: `max-w-2xl text-lg leading-relaxed text-white/90`,
                    children: `Confira a autenticidade de certificados emitidos pela Total Quality Group Brasil acessando a URL apontada pelo QR Code do documento.`,
                  }),
                ],
              }),
            }),
          }),
          o.jsx(`section`, {
            className: `section-pad bg-[#031109]`,
            children: o.jsxs(`div`, {
              className: `container`,
              children: [
                o.jsxs(`div`, {
                  className: `mx-auto mb-12 max-w-3xl text-center`,
                  children: [
                    o.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Segurança`,
                    }),
                    o.jsx(`h2`, {
                      className: `section-title mt-3`,
                      children: `Conferência rápida e confiável`,
                    }),
                    o.jsx(`p`, {
                      className: `mt-4 text-lg leading-relaxed text-slate-400`,
                      children: `A validação por QR Code direciona para páginas oficiais de confirmação, com proteção por Captcha e exibição do certificado validado.`,
                    }),
                  ],
                }),
                o.jsx(`div`, {
                  className: `grid gap-5 md:grid-cols-3`,
                  children: [
                    {
                      icon: s,
                      title: `Leitura por QR Code`,
                      text: `O QR Code do certificado direciona para a página de validação do curso correspondente.`,
                    },
                    {
                      icon: n,
                      title: `Certificado validado`,
                      text: `Após a confirmação de segurança, a página exibe o certificado como validado.`,
                    },
                    {
                      icon: i,
                      title: `Mais proteção`,
                      text: `A validação digital ajuda a reduzir falsificações e reforça a credibilidade do documento.`,
                    },
                  ].map((e) => {
                    let t = e.icon;
                    return o.jsxs(
                      `div`,
                      {
                        className: `dark-card rounded-2xl p-6`,
                        children: [
                          o.jsx(t, {
                            className: `mb-4 text-[#C9FFD8]`,
                            size: 34,
                          }),
                          o.jsx(`h3`, {
                            className: `mb-3 text-xl font-black text-white`,
                            children: e.title,
                          }),
                          o.jsx(`p`, {
                            className: `text-sm leading-relaxed text-slate-400`,
                            children: e.text,
                          }),
                        ],
                      },
                      e.title,
                    );
                  }),
                }),
                o.jsxs(`div`, {
                  className: `mt-8 rounded-3xl border border-[#68FF94]/18 bg-gradient-to-br from-[#0B2512] via-[#06170D] to-[#020C05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-8`,
                  children: [
                    o.jsx(`p`, {
                      className: `section-kicker`,
                      children: `Conformidade institucional`,
                    }),
                    o.jsx(`h2`, {
                      className: `mt-3 text-2xl font-black leading-tight text-white md:text-4xl`,
                      children: `Sistema de Gestão certificado`,
                    }),
                    o.jsxs(`div`, {
                      className: `mt-5 space-y-4 text-base leading-relaxed text-slate-300 md:text-lg`,
                      children: [
                        o.jsx(`p`, {
                          children: `A TotalQuality Group possui seu Sistema de Gestão certificado nas normas ABNT NBR ISO 9001:2015, ABNT NBR ISO 14001:2015, ABNT NBR ISO 45001:2018 e ABNT NBR ISO 37301, com certificações emitidas por organismo de certificação acreditado e reconhecido internacionalmente pela IAF (International Accreditation Forum).`,
                        }),
                        o.jsx(`p`, {
                          children: `Além disso, a empresa atua em conformidade com os requisitos da ABNT NBR ISO/IEC 17065, realizando processos de avaliação da conformidade por meio de organismo acreditado pela UK Akkreditering Forum (UKAF), assegurando imparcialidade, competência técnica, transparência e confiabilidade em seus serviços.`,
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs(`div`, {
                  className: `mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0B2512] p-5 text-slate-300`,
                  children: [
                    o.jsx(r, { className: `mt-0.5 shrink-0 text-[#C9FFD8]` }),
                    o.jsx(`p`, {
                      className: `text-sm leading-relaxed`,
                      children: `Para validar um certificado, utilize o QR Code impresso no próprio documento.`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx(t, {}),
    ],
  });
}
export { c as default };
