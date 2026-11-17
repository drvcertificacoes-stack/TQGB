import {
  i as e,
  m as t,
  t as n,
  u as r,
  w as i,
  y as a,
} from "./site-I5uQJoek.js";
var o = r(`CircleAlert`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
    [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
  ]),
  s = r(`House`, [
    [
      `path`,
      { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` },
    ],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `1d0kgt`,
      },
    ],
  ]);
function c({ className: e, ...t }) {
  return a.jsx(`div`, {
    "data-slot": `card`,
    className: n(
      `bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`,
      e,
    ),
    ...t,
  });
}
function l({ className: e, ...t }) {
  return a.jsx(`div`, {
    "data-slot": `card-content`,
    className: n(`px-6`, e),
    ...t,
  });
}
function u() {
  let [, n] = e();
  return a.jsxs(`main`, {
    id: `conteudo`,
    tabIndex: -1,
    className: `min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100`,
    children: [
      a.jsx(i, {
        title: `Página não encontrada`,
        description: `A página solicitada não foi encontrada no site da Total Quality Group Brasil.`,
        path: `/404`,
        noIndex: !0,
      }),
      a.jsx(c, {
        className: `w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm`,
        children: a.jsxs(l, {
          className: `pt-8 pb-8 text-center`,
          children: [
            a.jsx(`div`, {
              className: `flex justify-center mb-6`,
              children: a.jsxs(`div`, {
                className: `relative`,
                children: [
                  a.jsx(`div`, {
                    className: `absolute inset-0 bg-red-100 rounded-full animate-pulse`,
                  }),
                  a.jsx(o, { className: `relative h-16 w-16 text-red-500` }),
                ],
              }),
            }),
            a.jsx(`h1`, {
              className: `text-4xl font-bold text-slate-900 mb-2`,
              children: `404`,
            }),
            a.jsx(`h2`, {
              className: `text-xl font-semibold text-slate-700 mb-4`,
              children: `Page Not Found`,
            }),
            a.jsxs(`p`, {
              className: `text-slate-600 mb-8 leading-relaxed`,
              children: [
                `Sorry, the page you are looking for doesn't exist.`,
                a.jsx(`br`, {}),
                `It may have been moved or deleted.`,
              ],
            }),
            a.jsx(`div`, {
              className: `flex flex-col sm:flex-row gap-3 justify-center`,
              children: a.jsxs(t, {
                id: `btn-404-go-home`,
                "data-event": `click_404_go_home`,
                "data-category": `navigation`,
                "data-action": `click`,
                "data-label": `404 Go Home`,
                onClick: () => {
                  n(`/`);
                },
                className: `bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg`,
                children: [a.jsx(s, { className: `w-4 h-4 mr-2` }), `Go Home`],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { u as default };
