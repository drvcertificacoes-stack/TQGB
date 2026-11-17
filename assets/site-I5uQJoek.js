const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ISODetail-ZEEWkuXh.js",
      "assets/arrow-En1g7yj6.js",
      "assets/AuditDetail-wlskZTGW.js",
      "assets/Treinamentos-tNHiCDzk.js",
      "assets/qr-f-we9UFx.js",
      "assets/ValidacaoDigital-SI2O0n5Q.js",
      "assets/CertificadoCursoValidacao-SsyZbunn.js",
    ]),
) => i.map((i) => d[i]);
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var S = (x.prototype = new b());
    ((S.constructor = x), _(S, y.prototype), (S.isPureReactComponent = !0));
    var C = Array.isArray;
    function w() {}
    var T = { H: null, A: null, T: null, S: null },
      E = Object.prototype.hasOwnProperty;
    function D(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function O(e, t) {
      return D(e.type, t, e.props);
    }
    function ee(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function k(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;
    function j(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }
    function M(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(w, w)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function N(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), N(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + j(e, 0) : a),
          C(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              N(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ee(o) &&
                (o = O(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (C(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + j(a, u)), (c += N(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + j(a, u++)), (c += N(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return N(M(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function P(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        N(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function te(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var ne =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function F(e) {
      var t = T.T,
        n = {};
      ((n.types = t === null ? null : t.types), (T.T = n));
      try {
        var r = e(),
          i = T.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(w, ne));
      } catch (e) {
        ne(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (T.T = t));
      }
    }
    function I(e) {
      var t = T.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else F(I.bind(null, e));
    }
    var L = {
      map: P,
      forEach: function (e, t, n) {
        P(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          P(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          P(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ee(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = L),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = x),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return T.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = I),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !E.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return D(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            E.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return D(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ee),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: te,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = F),
      (e.unstable_useCacheRefresh = function () {
        return T.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return T.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return T.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return T.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return T.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return T.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return T.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return T.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return T.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return T.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return T.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return T.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return T.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return T.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return T.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return T.H.useRef(e);
      }),
      (e.useState = function (e) {
        return T.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return T.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return T.H.useTransition();
      }),
      (e.version = `19.3.1`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = c(u(), 1),
  m = c(f(), 1),
  h = `modulepreload`,
  g = function (e) {
    return `/` + e;
  },
  _ = {},
  v = function (e) {
    return e.pathname.endsWith(`.css`);
  },
  y = function (e, t, n) {
    if (t in e) return e[t];
    let r = n();
    if (!r) {
      e[t] = void 0;
      return;
    }
    let i = r.then(
      () => {
        e[t] = void 0;
      },
      (n) => {
        throw ((e[t] = void 0), n);
      },
    );
    return ((e[t] = i), i);
  },
  b = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e,
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(e))
          : new URL(e, import.meta.url);
      }
      r = o(
        t
          .map((t) => {
            t = g(t, n);
            let r = s(t),
              i = v(r);
            return y(_, r.href, () => {
              if (e === void 0) {
                e = { all: new Set(), styles: new Set() };
                let t = document.getElementsByTagName(`link`);
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  (e.all.add(r.href),
                    r.rel === `stylesheet` && e.styles.add(r.href));
                }
              }
              if ((i ? e.styles : e.all).has(r.href)) return;
              let t = document.createElement(`link`);
              if (
                ((t.rel = i ? `stylesheet` : h),
                i || (t.as = `script`),
                (t.crossOrigin = ``),
                (t.href = r.href),
                a && t.setAttribute(`nonce`, a),
                document.head.appendChild(t),
                i)
              )
                return new Promise((e, n) => {
                  let i = (a) => {
                    (t.removeEventListener(`load`, i),
                      t.removeEventListener(`error`, i),
                      a.type === `error`
                        ? n(Error(`Unable to preload CSS for ${r}`))
                        : e(a));
                  };
                  (t.addEventListener(`load`, i),
                    t.addEventListener(`error`, i));
                });
            });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  x = () => p.default,
  S = p.default;
function C(e, t) {
  for (var n = 0; n < t.length; n++) {
    let r = t[n];
    if (typeof r != `string` && !Array.isArray(r)) {
      for (let t in r)
        if (t !== "default" && !(t in e)) {
          let n = Object.getOwnPropertyDescriptor(r, t);
          n &&
            Object.defineProperty(
              e,
              t,
              n.get ? n : { enumerable: !0, get: () => r[t] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` }),
  );
}
function w(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, `default`)
    ? e.default
    : e;
}
var T = C({ __proto__: null, default: w(S) }, [S]);
function E(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = E(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function D() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = E(e)) && (r && (r += ` `), (r += t));
  return r;
}
var O = `-`,
  ee = (e) => {
    let t = M(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        let n = e.split(O);
        return (n[0] === `` && n.length !== 1 && n.shift(), k(n, t) || j(e));
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        return t && r[e] ? [...i, ...r[e]] : i;
      },
    };
  },
  k = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let n = e[0],
      r = t.nextPart.get(n),
      i = r ? k(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    let a = e.join(O);
    return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
  },
  A = /^\[(.+)\]$/,
  j = (e) => {
    if (A.test(e)) {
      let t = A.exec(e)[1],
        n = t?.substring(0, t.indexOf(`:`));
      if (n) return `arbitrary..` + n;
    }
  },
  M = (e) => {
    let { theme: t, classGroups: n } = e,
      r = { nextPart: new Map(), validators: [] };
    for (let e in n) N(n[e], r, e, t);
    return r;
  },
  N = (e, t, n, r) => {
    e.forEach((e) => {
      if (typeof e == `string`) {
        let r = e === `` ? t : P(t, e);
        r.classGroupId = n;
      } else if (typeof e == `function`) {
        if (te(e)) {
          N(e(r), t, n, r);
          return;
        }
        t.validators.push({ validator: e, classGroupId: n });
      } else
        Object.entries(e).forEach(([e, i]) => {
          N(i, P(t, e), n, r);
        });
    });
  },
  P = (e, t) => {
    let n = e;
    return (
      t.split(O).forEach((e) => {
        (n.nextPart.has(e) ||
          n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(e)));
      }),
      n
    );
  },
  te = (e) => e.isThemeGetter,
  ne = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map(),
      i = (i, a) => {
        (n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map())));
      };
    return {
      get(e) {
        let t = n.get(e);
        if (t !== void 0) return t;
        if ((t = r.get(e)) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        n.has(e) ? n.set(e, t) : i(e, t);
      },
    };
  },
  F = `!`,
  I = `:`,
  L = 1,
  re = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a;
        for (let o = 0; o < e.length; o++) {
          let s = e[o];
          if (n === 0 && r === 0) {
            if (s === I) {
              (t.push(e.slice(i, o)), (i = o + L));
              continue;
            }
            if (s === `/`) {
              a = o;
              continue;
            }
          }
          s === `[`
            ? n++
            : s === `]`
              ? n--
              : s === `(`
                ? r++
                : s === `)` && r--;
        }
        let o = t.length === 0 ? e : e.substring(i),
          s = ie(o);
        return {
          modifiers: t,
          hasImportantModifier: s !== o,
          baseClassName: s,
          maybePostfixModifierPosition: a && a > i ? a - i : void 0,
        };
      };
    if (t) {
      let e = t + I,
        n = r;
      r = (t) =>
        t.startsWith(e)
          ? n(t.substring(e.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: t,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  ie = (e) =>
    e.endsWith(F)
      ? e.substring(0, e.length - 1)
      : e.startsWith(F)
        ? e.substring(1)
        : e,
  R = (e) => {
    let t = Object.fromEntries(e.orderSensitiveModifiers.map((e) => [e, !0]));
    return (e) => {
      if (e.length <= 1) return e;
      let n = [],
        r = [];
      return (
        e.forEach((e) => {
          e[0] === `[` || t[e] ? (n.push(...r.sort(), e), (r = [])) : r.push(e);
        }),
        n.push(...r.sort()),
        n
      );
    };
  },
  ae = (e) => ({
    cache: ne(e.cacheSize),
    parseClassName: re(e),
    sortModifiers: R(e),
    ...ee(e),
  }),
  oe = /\s+/,
  se = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
      } = t,
      o = [],
      s = e.trim().split(oe),
      c = ``;
    for (let e = s.length - 1; e >= 0; --e) {
      let t = s[e],
        {
          isExternal: l,
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (l) {
        c = t + (c.length > 0 ? ` ` + c : c);
        continue;
      }
      let m = !!p,
        h = r(m ? f.substring(0, p) : f);
      if (!h) {
        if (!m || ((h = r(f)), !h)) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        m = !1;
      }
      let g = a(u).join(`:`),
        _ = d ? g + F : g,
        v = _ + h;
      if (o.includes(v)) continue;
      o.push(v);
      let y = i(h, m);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        o.push(_ + t);
      }
      c = t + (c.length > 0 ? ` ` + c : c);
    }
    return c;
  };
function ce() {
  let e = 0,
    t,
    n,
    r = ``;
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = z(t)) && (r && (r += ` `), (r += n));
  return r;
}
var z = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++)
    e[r] && (t = z(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
function le(e, ...t) {
  let n,
    r,
    i,
    a = o;
  function o(o) {
    return (
      (n = ae(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    );
  }
  function s(e) {
    let t = r(e);
    if (t) return t;
    let a = se(e, n);
    return (i(e, a), a);
  }
  return function () {
    return a(ce.apply(null, arguments));
  };
}
var B = (e) => {
    let t = (t) => t[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  ue = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  de = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  fe = /^\d+\/\d+$/,
  pe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  me =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  he = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  _e =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  V = (e) => fe.test(e),
  H = (e) => !!e && !Number.isNaN(Number(e)),
  U = (e) => !!e && Number.isInteger(Number(e)),
  ve = (e) => e.endsWith(`%`) && H(e.slice(0, -1)),
  W = (e) => pe.test(e),
  ye = () => !0,
  be = (e) => me.test(e) && !he.test(e),
  xe = () => !1,
  Se = (e) => ge.test(e),
  Ce = (e) => _e.test(e),
  we = (e) => !G(e) && !q(e),
  Te = (e) => J(e, Re, xe),
  G = (e) => ue.test(e),
  K = (e) => J(e, ze, be),
  Ee = (e) => J(e, Be, H),
  De = (e) => J(e, Ie, xe),
  Oe = (e) => J(e, Le, Ce),
  ke = (e) => J(e, He, Se),
  q = (e) => de.test(e),
  Ae = (e) => Y(e, ze),
  je = (e) => Y(e, Ve),
  Me = (e) => Y(e, Ie),
  Ne = (e) => Y(e, Re),
  Pe = (e) => Y(e, Le),
  Fe = (e) => Y(e, He, !0),
  J = (e, t, n) => {
    let r = ue.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Y = (e, t, n = !1) => {
    let r = de.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Ie = (e) => e === `position` || e === `percentage`,
  Le = (e) => e === `image` || e === `url`,
  Re = (e) => e === `length` || e === `size` || e === `bg-size`,
  ze = (e) => e === `length`,
  Be = (e) => e === `number`,
  Ve = (e) => e === `family-name`,
  He = (e) => e === `shadow`,
  Ue = le(() => {
    let e = B(`color`),
      t = B(`font`),
      n = B(`text`),
      r = B(`font-weight`),
      i = B(`tracking`),
      a = B(`leading`),
      o = B(`breakpoint`),
      s = B(`container`),
      c = B(`spacing`),
      l = B(`radius`),
      u = B(`shadow`),
      d = B(`inset-shadow`),
      f = B(`text-shadow`),
      p = B(`drop-shadow`),
      m = B(`blur`),
      h = B(`perspective`),
      g = B(`aspect`),
      _ = B(`ease`),
      v = B(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), q, G],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [q, G, c],
      T = () => [V, `full`, `auto`, ...w()],
      E = () => [U, `none`, `subgrid`, q, G],
      D = () => [`auto`, { span: [`full`, U, q, G] }, U, q, G],
      O = () => [U, `auto`, q, G],
      ee = () => [`auto`, `min`, `max`, `fr`, q, G],
      k = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      A = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      j = () => [`auto`, ...w()],
      M = () => [
        V,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      N = () => [e, q, G],
      P = () => [...b(), Me, De, { position: [q, G] }],
      te = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ne = () => [`auto`, `cover`, `contain`, Ne, Te, { size: [q, G] }],
      F = () => [ve, Ae, K],
      I = () => [``, `none`, `full`, l, q, G],
      L = () => [``, H, Ae, K],
      re = () => [`solid`, `dashed`, `dotted`, `double`],
      ie = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      R = () => [H, ve, Me, De],
      ae = () => [``, `none`, m, q, G],
      oe = () => [`none`, H, q, G],
      se = () => [`none`, H, q, G],
      ce = () => [H, q, G],
      z = () => [V, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [W],
        breakpoint: [W],
        color: [ye],
        container: [W],
        "drop-shadow": [W],
        ease: [`in`, `out`, `in-out`],
        font: [we],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [W],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [W],
        shadow: [W],
        spacing: [`px`, H],
        text: [W],
        "text-shadow": [W],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, V, G, q, g] }],
        container: [`container`],
        columns: [{ columns: [H, G, q, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ start: T() }],
        end: [{ end: T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [U, `auto`, q, G] }],
        basis: [{ basis: [V, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [H, V, `auto`, `initial`, `none`, G] }],
        grow: [{ grow: [``, H, q, G] }],
        shrink: [{ shrink: [``, H, q, G] }],
        order: [{ order: [U, `first`, `last`, `none`, q, G] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: D() }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: D() }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ee() }],
        "auto-rows": [{ "auto-rows": ee() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...k(), `normal`] }],
        "justify-items": [{ "justify-items": [...A(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...A()] }],
        "align-content": [{ content: [`normal`, ...k()] }],
        "align-items": [{ items: [...A(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...A(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": k() }],
        "place-items": [{ "place-items": [...A(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...A()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: M() }],
        w: [{ w: [s, `screen`, ...M()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...M()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...M()] },
        ],
        h: [{ h: [`screen`, `lh`, ...M()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...M()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...M()] }],
        "font-size": [{ text: [`base`, n, Ae, K] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, q, Ee] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              ve,
              G,
            ],
          },
        ],
        "font-family": [{ font: [je, G, t] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, q, G] }],
        "line-clamp": [{ "line-clamp": [H, `none`, q, Ee] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, q, G] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, q, G] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: N() }],
        "text-color": [{ text: N() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...re(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [H, `from-font`, `auto`, q, K] },
        ],
        "text-decoration-color": [{ decoration: N() }],
        "underline-offset": [{ "underline-offset": [H, `auto`, q, G] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              q,
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, q, G] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: P() }],
        "bg-repeat": [{ bg: te() }],
        "bg-size": [{ bg: ne() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  U,
                  q,
                  G,
                ],
                radial: [``, q, G],
                conic: [U, q, G],
              },
              Pe,
              Oe,
            ],
          },
        ],
        "bg-color": [{ bg: N() }],
        "gradient-from-pos": [{ from: F() }],
        "gradient-via-pos": [{ via: F() }],
        "gradient-to-pos": [{ to: F() }],
        "gradient-from": [{ from: N() }],
        "gradient-via": [{ via: N() }],
        "gradient-to": [{ to: N() }],
        rounded: [{ rounded: I() }],
        "rounded-s": [{ "rounded-s": I() }],
        "rounded-e": [{ "rounded-e": I() }],
        "rounded-t": [{ "rounded-t": I() }],
        "rounded-r": [{ "rounded-r": I() }],
        "rounded-b": [{ "rounded-b": I() }],
        "rounded-l": [{ "rounded-l": I() }],
        "rounded-ss": [{ "rounded-ss": I() }],
        "rounded-se": [{ "rounded-se": I() }],
        "rounded-ee": [{ "rounded-ee": I() }],
        "rounded-es": [{ "rounded-es": I() }],
        "rounded-tl": [{ "rounded-tl": I() }],
        "rounded-tr": [{ "rounded-tr": I() }],
        "rounded-br": [{ "rounded-br": I() }],
        "rounded-bl": [{ "rounded-bl": I() }],
        "border-w": [{ border: L() }],
        "border-w-x": [{ "border-x": L() }],
        "border-w-y": [{ "border-y": L() }],
        "border-w-s": [{ "border-s": L() }],
        "border-w-e": [{ "border-e": L() }],
        "border-w-t": [{ "border-t": L() }],
        "border-w-r": [{ "border-r": L() }],
        "border-w-b": [{ "border-b": L() }],
        "border-w-l": [{ "border-l": L() }],
        "divide-x": [{ "divide-x": L() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": L() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...re(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...re(), `hidden`, `none`] }],
        "border-color": [{ border: N() }],
        "border-color-x": [{ "border-x": N() }],
        "border-color-y": [{ "border-y": N() }],
        "border-color-s": [{ "border-s": N() }],
        "border-color-e": [{ "border-e": N() }],
        "border-color-t": [{ "border-t": N() }],
        "border-color-r": [{ "border-r": N() }],
        "border-color-b": [{ "border-b": N() }],
        "border-color-l": [{ "border-l": N() }],
        "divide-color": [{ divide: N() }],
        "outline-style": [{ outline: [...re(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [H, q, G] }],
        "outline-w": [{ outline: [``, H, Ae, K] }],
        "outline-color": [{ outline: N() }],
        shadow: [{ shadow: [``, `none`, u, Fe, ke] }],
        "shadow-color": [{ shadow: N() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Fe, ke] }],
        "inset-shadow-color": [{ "inset-shadow": N() }],
        "ring-w": [{ ring: L() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: N() }],
        "ring-offset-w": [{ "ring-offset": [H, K] }],
        "ring-offset-color": [{ "ring-offset": N() }],
        "inset-ring-w": [{ "inset-ring": L() }],
        "inset-ring-color": [{ "inset-ring": N() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Fe, ke] }],
        "text-shadow-color": [{ "text-shadow": N() }],
        opacity: [{ opacity: [H, q, G] }],
        "mix-blend": [
          { "mix-blend": [...ie(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ie() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [H] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": R() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": R() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": N() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": N() }],
        "mask-image-t-from-pos": [{ "mask-t-from": R() }],
        "mask-image-t-to-pos": [{ "mask-t-to": R() }],
        "mask-image-t-from-color": [{ "mask-t-from": N() }],
        "mask-image-t-to-color": [{ "mask-t-to": N() }],
        "mask-image-r-from-pos": [{ "mask-r-from": R() }],
        "mask-image-r-to-pos": [{ "mask-r-to": R() }],
        "mask-image-r-from-color": [{ "mask-r-from": N() }],
        "mask-image-r-to-color": [{ "mask-r-to": N() }],
        "mask-image-b-from-pos": [{ "mask-b-from": R() }],
        "mask-image-b-to-pos": [{ "mask-b-to": R() }],
        "mask-image-b-from-color": [{ "mask-b-from": N() }],
        "mask-image-b-to-color": [{ "mask-b-to": N() }],
        "mask-image-l-from-pos": [{ "mask-l-from": R() }],
        "mask-image-l-to-pos": [{ "mask-l-to": R() }],
        "mask-image-l-from-color": [{ "mask-l-from": N() }],
        "mask-image-l-to-color": [{ "mask-l-to": N() }],
        "mask-image-x-from-pos": [{ "mask-x-from": R() }],
        "mask-image-x-to-pos": [{ "mask-x-to": R() }],
        "mask-image-x-from-color": [{ "mask-x-from": N() }],
        "mask-image-x-to-color": [{ "mask-x-to": N() }],
        "mask-image-y-from-pos": [{ "mask-y-from": R() }],
        "mask-image-y-to-pos": [{ "mask-y-to": R() }],
        "mask-image-y-from-color": [{ "mask-y-from": N() }],
        "mask-image-y-to-color": [{ "mask-y-to": N() }],
        "mask-image-radial": [{ "mask-radial": [q, G] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": R() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": R() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": N() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": N() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [H] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": R() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": R() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": N() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": N() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: P() }],
        "mask-repeat": [{ mask: te() }],
        "mask-size": [{ mask: ne() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, q, G] }],
        filter: [{ filter: [``, `none`, q, G] }],
        blur: [{ blur: ae() }],
        brightness: [{ brightness: [H, q, G] }],
        contrast: [{ contrast: [H, q, G] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Fe, ke] }],
        "drop-shadow-color": [{ "drop-shadow": N() }],
        grayscale: [{ grayscale: [``, H, q, G] }],
        "hue-rotate": [{ "hue-rotate": [H, q, G] }],
        invert: [{ invert: [``, H, q, G] }],
        saturate: [{ saturate: [H, q, G] }],
        sepia: [{ sepia: [``, H, q, G] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, q, G] }],
        "backdrop-blur": [{ "backdrop-blur": ae() }],
        "backdrop-brightness": [{ "backdrop-brightness": [H, q, G] }],
        "backdrop-contrast": [{ "backdrop-contrast": [H, q, G] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, H, q, G] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [H, q, G] }],
        "backdrop-invert": [{ "backdrop-invert": [``, H, q, G] }],
        "backdrop-opacity": [{ "backdrop-opacity": [H, q, G] }],
        "backdrop-saturate": [{ "backdrop-saturate": [H, q, G] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, H, q, G] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              q,
              G,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [H, `initial`, q, G] }],
        ease: [{ ease: [`linear`, `initial`, _, q, G] }],
        delay: [{ delay: [H, q, G] }],
        animate: [{ animate: [`none`, v, q, G] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, q, G] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: oe() }],
        "rotate-x": [{ "rotate-x": oe() }],
        "rotate-y": [{ "rotate-y": oe() }],
        "rotate-z": [{ "rotate-z": oe() }],
        scale: [{ scale: se() }],
        "scale-x": [{ "scale-x": se() }],
        "scale-y": [{ "scale-y": se() }],
        "scale-z": [{ "scale-z": se() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: ce() }],
        "skew-x": [{ "skew-x": ce() }],
        "skew-y": [{ "skew-y": ce() }],
        transform: [{ transform: [q, G, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: z() }],
        "translate-x": [{ "translate-x": z() }],
        "translate-y": [{ "translate-y": z() }],
        "translate-z": [{ "translate-z": z() }],
        "translate-none": [`translate-none`],
        accent: [{ accent: N() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: N() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              q,
              G,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, q, G] },
        ],
        fill: [{ fill: [`none`, ...N()] }],
        "stroke-w": [{ stroke: [H, Ae, K, Ee] }],
        stroke: [{ stroke: [`none`, ...N()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function We(...e) {
  return Ue(D(e));
}
function Ge(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    i,
    a,
    o = [],
    s = ``,
    c = e.split(`/`);
  for (c[0] || c.shift(); (i = c.shift());)
    ((n = i[0]),
      n === `*`
        ? (o.push(n), (s += i[1] === `?` ? `(?:/(.*))?` : `/(.*)`))
        : n === `:`
          ? ((r = i.indexOf(`?`, 1)),
            (a = i.indexOf(`.`, 1)),
            o.push(i.substring(1, ~r ? r : ~a ? a : i.length)),
            (s += ~r && !~a ? `(?:/([^/]+?))?` : `/([^/]+?)`),
            ~a && (s += (~r ? `?` : ``) + `\\` + i.substring(a)))
          : (s += `/` + i));
  return { keys: o, pattern: RegExp(`^` + s + (t ? `(?=$|/)` : `/?$`), `i`) };
}
var Ke = { exports: {} },
  qe = {},
  Je;
function Ye() {
  if (Je) return qe;
  Je = 1;
  var e = x();
  function t(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
  }
  var n = typeof Object.is == `function` ? Object.is : t,
    r = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function s(e, t) {
    var n = t(),
      s = r({ inst: { value: n, getSnapshot: t } }),
      l = s[0].inst,
      u = s[1];
    return (
      a(
        function () {
          ((l.value = n), (l.getSnapshot = t), c(l) && u({ inst: l }));
        },
        [e, n, t],
      ),
      i(
        function () {
          return (
            c(l) && u({ inst: l }),
            e(function () {
              c(l) && u({ inst: l });
            })
          );
        },
        [e],
      ),
      o(n),
      n
    );
  }
  function c(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !n(e, r);
    } catch {
      return !0;
    }
  }
  function l(e, t) {
    return t();
  }
  var u =
    typeof window > `u` ||
    typeof window.document > `u` ||
    typeof window.document.createElement > `u`
      ? l
      : s;
  return (
    (qe.useSyncExternalStore =
      e.useSyncExternalStore === void 0 ? u : e.useSyncExternalStore),
    qe
  );
}
var Xe;
function Ze() {
  return (Xe || ((Xe = 1), (Ke.exports = Ye())), Ke.exports);
}
var Qe = Ze(),
  $e = T.useInsertionEffect,
  et =
    typeof window < `u` &&
    typeof window.document < `u` &&
    typeof window.document.createElement < `u`
      ? S.useLayoutEffect
      : S.useEffect,
  tt = $e || et,
  nt = (e) => {
    let t = S.useRef([e, (...e) => t[0](...e)]).current;
    return (
      tt(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  rt = `popstate`,
  it = `pushState`,
  at = `replaceState`,
  ot = [rt, it, at, `hashchange`],
  st = (e) => {
    for (let t of ot) addEventListener(t, e);
    return () => {
      for (let t of ot) removeEventListener(t, e);
    };
  },
  ct = (e, t) => Qe.useSyncExternalStore(st, e, t),
  lt = () => location.search,
  ut = ({ ssrSearch: e = `` } = {}) => ct(lt, () => e),
  dt = () => location.pathname,
  ft = ({ ssrPath: e } = {}) => ct(dt, e ? () => e : dt),
  pt = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? at : it](n, ``, e),
  mt = (e = {}) => [ft(e), pt],
  ht = Symbol.for(`wouter_v3`);
if (typeof history < `u` && typeof window[ht] > `u`) {
  for (let e of [it, at]) {
    let t = history[e];
    history[e] = function () {
      let n = t.apply(this, arguments),
        r = new Event(e);
      return ((r.arguments = arguments), dispatchEvent(r), n);
    };
  }
  Object.defineProperty(window, ht, { value: !0 });
}
var gt = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? `~` + t
      : t.slice(e.length) || `/`,
  _t = (e = ``) => (e === `/` ? `` : e),
  vt = (e, t) => (e[0] === `~` ? e.slice(1) : _t(t) + e),
  yt = (e = ``, t) => gt(bt(_t(e)), bt(t)),
  bt = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  xt = {
    hook: mt,
    searchHook: ut,
    parser: Ge,
    base: ``,
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (e) => e,
  },
  St = S.createContext(xt),
  Ct = () => S.useContext(St),
  wt = {},
  Tt = S.createContext(wt),
  Et = () => S.useContext(Tt),
  Dt = (e) => {
    let [t, n] = e.hook(e);
    return [yt(e.base, t), nt((t, r) => n(vt(t, e.base), r))];
  },
  Ot = () => Dt(Ct()),
  kt = (e, t, n, r) => {
    let { pattern: i, keys: a } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || `*`, r),
      o = i.exec(n) || [],
      [s, ...c] = o;
    return s === void 0
      ? [!1, null]
      : [
          !0,
          (() => {
            let e =
                a === !1
                  ? o.groups
                  : Object.fromEntries(a.map((e, t) => [e, c[t]])),
              t = { ...c };
            return (e && Object.assign(t, e), t);
          })(),
          ...(r ? [s] : []),
        ];
  },
  At = ({ children: e, ...t }) => {
    let n = Ct(),
      r = t.hook ? xt : n,
      i = r,
      [a, o] = t.ssrPath?.split(`?`) ?? [];
    (o && ((t.ssrSearch = o), (t.ssrPath = a)),
      (t.hrefs = t.hrefs ?? t.hook?.hrefs));
    let s = S.useRef({}),
      c = s.current,
      l = c;
    for (let e in r) {
      let n = e === `base` ? r[e] + (t[e] || ``) : t[e] || r[e];
      (c === l && n !== l[e] && (s.current = l = { ...l }),
        (l[e] = n),
        (n !== r[e] || n !== i[e]) && (i = l));
    }
    return S.createElement(St.Provider, { value: i, children: e });
  },
  jt = ({ children: e, component: t }, n) =>
    t ? S.createElement(t, { params: n }) : typeof e == `function` ? e(n) : e,
  Mt = (e) => {
    let t = S.useRef(wt),
      n = t.current;
    return (t.current =
      Object.keys(e).length !== Object.keys(n).length ||
      Object.entries(e).some(([e, t]) => t !== n[e])
        ? e
        : n);
  },
  Nt = ({ path: e, nest: t, match: n, ...r }) => {
    let i = Ct(),
      [a] = Dt(i),
      [o, s, c] = n ?? kt(i.parser, e, a, t),
      l = Mt({ ...Et(), ...s });
    if (!o) return null;
    let u = c ? S.createElement(At, { base: c }, jt(r, l)) : jt(r, l);
    return S.createElement(Tt.Provider, { value: l, children: u });
  };
S.forwardRef((e, t) => {
  let n = Ct(),
    [r, i] = Dt(n),
    {
      to: a = ``,
      href: o = a,
      onClick: s,
      asChild: c,
      children: l,
      className: u,
      replace: d,
      state: f,
      ...p
    } = e,
    m = nt((t) => {
      t.ctrlKey ||
        t.metaKey ||
        t.altKey ||
        t.shiftKey ||
        t.button !== 0 ||
        (s?.(t), t.defaultPrevented || (t.preventDefault(), i(o, e)));
    }),
    h = n.hrefs(o[0] === `~` ? o.slice(1) : n.base + o, n);
  return c && S.isValidElement(l)
    ? S.cloneElement(l, { onClick: m, href: h })
    : S.createElement(`a`, {
        ...p,
        onClick: m,
        href: h,
        className: u?.call ? u(r === o) : u,
        children: l,
        ref: t,
      });
});
var Pt = (e) =>
    Array.isArray(e)
      ? e.flatMap((e) => Pt(e && e.type === S.Fragment ? e.props.children : e))
      : [e],
  Ft = ({ children: e, location: t }) => {
    let n = Ct(),
      [r] = Dt(n);
    typeof window < `u` &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      Pt(e).forEach((e) => {
        if (S.isValidElement(e) && e.props.path) {
          let t = e.props.path;
          window.__WOUTER_ROUTES__.includes(t) ||
            window.__WOUTER_ROUTES__.push(t);
        }
      }));
    for (let i of Pt(e)) {
      let e = 0;
      if (
        S.isValidElement(i) &&
        (e = kt(n.parser, i.props.path, t || r, i.props.nest))[0]
      )
        return S.cloneElement(i, { match: e });
    }
    return null;
  },
  It = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Lt = (...e) => e.filter((e, t, n) => !!e && n.indexOf(e) === t).join(` `),
  Rt = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  zt = S.forwardRef(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      S.createElement(
        `svg`,
        {
          ref: c,
          ...Rt,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Lt(`lucide`, i),
          ...s,
        },
        [
          ...o.map(([e, t]) => S.createElement(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  X = (e, t) => {
    let n = S.forwardRef(({ className: n, ...r }, i) =>
      S.createElement(zt, {
        ref: i,
        iconNode: t,
        className: Lt(`lucide-${It(e)}`, n),
        ...r,
      }),
    );
    return ((n.displayName = `${e}`), n);
  },
  Bt = X(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  Vt = X(`Award`, [
    [
      `path`,
      {
        d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,
        key: `1yiouv`,
      },
    ],
    [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }],
  ]),
  Ht = X(`BadgeCheck`, [
    [
      `path`,
      {
        d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
        key: `3c2336`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  Ut = X(`BookOpenCheck`, [
    [`path`, { d: `M12 21V7`, key: `gj6g52` }],
    [`path`, { d: `m16 12 2 2 4-4`, key: `mdajum` }],
    [
      `path`,
      {
        d: `M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3`,
        key: `8arnkb`,
      },
    ],
  ]),
  Wt = X(`BriefcaseBusiness`, [
    [`path`, { d: `M12 12h.01`, key: `1mp3jc` }],
    [`path`, { d: `M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`, key: `1ksdt3` }],
    [`path`, { d: `M22 13a18.15 18.15 0 0 1-20 0`, key: `12hx5q` }],
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `6`, rx: `2`, key: `i6l2r4` },
    ],
  ]),
  Gt = X(`Building2`, [
    [`path`, { d: `M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z`, key: `1b4qmf` }],
    [`path`, { d: `M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2`, key: `i71pzd` }],
    [`path`, { d: `M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2`, key: `10jefs` }],
    [`path`, { d: `M10 6h4`, key: `1itunk` }],
    [`path`, { d: `M10 10h4`, key: `tcdvrf` }],
    [`path`, { d: `M10 14h4`, key: `kelpxr` }],
    [`path`, { d: `M10 18h4`, key: `1ulq68` }],
  ]),
  Kt = X(`ChartColumn`, [
    [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
    [`path`, { d: `M18 17V9`, key: `2bz60n` }],
    [`path`, { d: `M13 17V5`, key: `1frdt8` }],
    [`path`, { d: `M8 17v-3`, key: `17ska0` }],
  ]),
  qt = X(`ChevronDown`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  Jt = X(`CircleCheck`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  Yt = X(`ClipboardCheck`, [
    [
      `rect`,
      {
        width: `8`,
        height: `4`,
        x: `8`,
        y: `2`,
        rx: `1`,
        ry: `1`,
        key: `tgr4d6`,
      },
    ],
    [
      `path`,
      {
        d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
        key: `116196`,
      },
    ],
    [`path`, { d: `m9 14 2 2 4-4`, key: `df797q` }],
  ]),
  Xt = X(`ClipboardList`, [
    [
      `rect`,
      {
        width: `8`,
        height: `4`,
        x: `8`,
        y: `2`,
        rx: `1`,
        ry: `1`,
        key: `tgr4d6`,
      },
    ],
    [
      `path`,
      {
        d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
        key: `116196`,
      },
    ],
    [`path`, { d: `M12 11h4`, key: `1jrz19` }],
    [`path`, { d: `M12 16h4`, key: `n85exb` }],
    [`path`, { d: `M8 11h.01`, key: `1dfujw` }],
    [`path`, { d: `M8 16h.01`, key: `18s6g9` }],
  ]),
  Zt = X(`Database`, [
    [`ellipse`, { cx: `12`, cy: `5`, rx: `9`, ry: `3`, key: `msslwz` }],
    [`path`, { d: `M3 5V19A9 3 0 0 0 21 19V5`, key: `1wlel7` }],
    [`path`, { d: `M3 12A9 3 0 0 0 21 12`, key: `mv7ke4` }],
  ]),
  Qt = X(`Facebook`, [
    [
      `path`,
      {
        d: `M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`,
        key: `1jg4f8`,
      },
    ],
  ]),
  $t = X(`Factory`, [
    [
      `path`,
      {
        d: `M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z`,
        key: `159hny`,
      },
    ],
    [`path`, { d: `M17 18h1`, key: `uldtlt` }],
    [`path`, { d: `M12 18h1`, key: `s9uhes` }],
    [`path`, { d: `M7 18h1`, key: `1neino` }],
  ]),
  en = X(`FlaskConical`, [
    [
      `path`,
      {
        d: `M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2`,
        key: `pzvekw`,
      },
    ],
    [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
    [`path`, { d: `M7 16h10`, key: `wp8him` }],
  ]),
  tn = X(`GraduationCap`, [
    [
      `path`,
      {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`,
      },
    ],
    [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
    [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
  ]),
  nn = X(`Instagram`, [
    [
      `rect`,
      {
        width: `20`,
        height: `20`,
        x: `2`,
        y: `2`,
        rx: `5`,
        ry: `5`,
        key: `2e1cvw`,
      },
    ],
    [
      `path`,
      { d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`, key: `9exkf1` },
    ],
    [`line`, { x1: `17.5`, x2: `17.51`, y1: `6.5`, y2: `6.5`, key: `r4j83e` }],
  ]),
  rn = X(`Leaf`, [
    [
      `path`,
      {
        d: `M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,
        key: `nnexq3`,
      },
    ],
    [
      `path`,
      { d: `M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`, key: `mt58a7` },
    ],
  ]),
  an = X(`Linkedin`, [
    [
      `path`,
      {
        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
        key: `c2jq9f`,
      },
    ],
    [`rect`, { width: `4`, height: `12`, x: `2`, y: `9`, key: `mk3on5` }],
    [`circle`, { cx: `4`, cy: `4`, r: `2`, key: `bt5ra8` }],
  ]),
  on = X(`LockKeyhole`, [
    [`circle`, { cx: `12`, cy: `16`, r: `1`, key: `1au0dj` }],
    [
      `rect`,
      { x: `3`, y: `10`, width: `18`, height: `12`, rx: `2`, key: `6s8ecr` },
    ],
    [`path`, { d: `M7 10V7a5 5 0 0 1 10 0v3`, key: `1pqi11` }],
  ]),
  sn = X(`Mail`, [
    [
      `rect`,
      { width: `20`, height: `16`, x: `2`, y: `4`, rx: `2`, key: `18n3k1` },
    ],
    [`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`, key: `1ocrg3` }],
  ]),
  cn = X(`Menu`, [
    [`line`, { x1: `4`, x2: `20`, y1: `12`, y2: `12`, key: `1e0a9i` }],
    [`line`, { x1: `4`, x2: `20`, y1: `6`, y2: `6`, key: `1owob3` }],
    [`line`, { x1: `4`, x2: `20`, y1: `18`, y2: `18`, key: `yk5zj1` }],
  ]),
  ln = X(`MonitorCog`, [
    [`path`, { d: `M12 17v4`, key: `1riwvh` }],
    [`path`, { d: `m15.2 4.9-.9-.4`, key: `12wd2u` }],
    [`path`, { d: `m15.2 7.1-.9.4`, key: `1r2vl7` }],
    [`path`, { d: `m16.9 3.2-.4-.9`, key: `3zbo91` }],
    [`path`, { d: `m16.9 8.8-.4.9`, key: `1qr2dn` }],
    [`path`, { d: `m19.5 2.3-.4.9`, key: `1rjrkq` }],
    [`path`, { d: `m19.5 9.7-.4-.9`, key: `heryx5` }],
    [`path`, { d: `m21.7 4.5-.9.4`, key: `17fqt1` }],
    [`path`, { d: `m21.7 7.5-.9-.4`, key: `14zyni` }],
    [
      `path`,
      {
        d: `M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7`,
        key: `1tnzv8`,
      },
    ],
    [`path`, { d: `M8 21h8`, key: `1ev6f3` }],
    [`circle`, { cx: `18`, cy: `6`, r: `3`, key: `1h7g24` }],
  ]),
  un = X(`RotateCcw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  dn = X(`Scale`, [
    [
      `path`,
      { d: `m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z`, key: `7g6ntu` },
    ],
    [
      `path`,
      { d: `m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z`, key: `ijws7r` },
    ],
    [`path`, { d: `M7 21h10`, key: `1b0cd5` }],
    [`path`, { d: `M12 3v18`, key: `108xh3` }],
    [`path`, { d: `M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2`, key: `3gwbw2` }],
  ]),
  fn = X(`Send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  pn = X(`ShieldCheck`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  mn = X(`Siren`, [
    [`path`, { d: `M7 18v-6a5 5 0 1 1 10 0v6`, key: `pcx96s` }],
    [
      `path`,
      {
        d: `M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z`,
        key: `1b4s83`,
      },
    ],
    [`path`, { d: `M21 12h1`, key: `jtio3y` }],
    [`path`, { d: `M18.5 4.5 18 5`, key: `g5sp9y` }],
    [`path`, { d: `M2 12h1`, key: `1uaihz` }],
    [`path`, { d: `M12 2v1`, key: `11qlp1` }],
    [`path`, { d: `m4.929 4.929.707.707`, key: `1i51kw` }],
    [`path`, { d: `M12 12v6`, key: `3ahymv` }],
  ]),
  hn = X(`TriangleAlert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  gn = X(`Users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`path`, { d: `M16 3.13a4 4 0 0 1 0 7.75`, key: `1da9ce` }],
  ]),
  _n = X(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  vn = X(`Youtube`, [
    [
      `path`,
      {
        d: `M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17`,
        key: `1q2vi4`,
      },
    ],
    [`path`, { d: `m10 15 5-3-5-3z`, key: `1jp15x` }],
  ]),
  yn = X(`Zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  bn = class extends S.Component {
    constructor(e) {
      (super(e), (this.state = { hasError: !1, error: null }));
    }
    static getDerivedStateFromError(e) {
      return { hasError: !0, error: e };
    }
    render() {
      return this.state.hasError
        ? m.jsx(`div`, {
            className: `flex items-center justify-center min-h-screen p-8 bg-background`,
            children: m.jsxs(`div`, {
              className: `flex flex-col items-center w-full max-w-2xl p-8`,
              children: [
                m.jsx(hn, {
                  size: 48,
                  className: `text-destructive mb-6 flex-shrink-0`,
                }),
                m.jsx(`h2`, {
                  className: `text-xl mb-4`,
                  children: `Ocorreu um erro ao carregar a página.`,
                }),
                m.jsxs(`button`, {
                  id: `btn-error-reload`,
                  "data-event": `click_error_reload`,
                  "data-category": `error`,
                  "data-action": `click`,
                  "data-label": `Error Reload Page`,
                  onClick: () => window.location.reload(),
                  className: We(
                    `flex items-center gap-2 px-4 py-2 rounded-lg`,
                    `bg-primary text-primary-foreground`,
                    `hover:opacity-90 cursor-pointer`,
                  ),
                  children: [m.jsx(un, { size: 16 }), `Recarregar página`],
                }),
              ],
            }),
          })
        : this.props.children;
    }
  },
  xn = `tqg_lead_attribution`,
  Sn = `[data-event]`,
  Cn = [
    `utm_source`,
    `utm_medium`,
    `utm_campaign`,
    `utm_term`,
    `utm_content`,
    `utm_id`,
  ],
  wn = [`gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`],
  Tn = () => typeof window < `u`,
  En = () => {
    if (!Tn()) return {};
    try {
      let e = window.localStorage.getItem(xn);
      return e ? JSON.parse(e) : {};
    } catch {
      return {};
    }
  },
  Dn = (e) => {
    if (Tn())
      try {
        window.localStorage.setItem(xn, JSON.stringify(e));
      } catch {}
  };
function On() {
  if (!Tn()) return {};
  let e = new URLSearchParams(window.location.search),
    t = En(),
    n = {};
  [...Cn, ...wn].forEach((t) => {
    let r = e.get(t);
    r && (n[t] = r);
  });
  let r = new Date().toISOString(),
    i = {
      ...t,
      ...n,
      first_page:
        t.first_page || `${window.location.pathname}${window.location.search}`,
      landing_page: t.landing_page || window.location.href,
      lead_origin: t.lead_origin || window.location.pathname,
      first_referrer: t.first_referrer || document.referrer || `direct`,
      last_page: window.location.href,
      last_page_path: window.location.pathname,
      updated_at: r,
      created_at: t.created_at || r,
    };
  return (Dn(i), i);
}
function kn() {
  return On();
}
function An(e, t = {}) {
  Tn() &&
    ((window.dataLayer = window.dataLayer || []),
    window.dataLayer.push({
      event: e,
      page_path: window.location.pathname,
      page_url: window.location.href,
      page_title: document.title,
      ...kn(),
      ...t,
    }));
}
function jn(e) {
  return (
    e.innerText?.trim().replace(/\s+/g, ` `) ||
    e.getAttribute(`aria-label`) ||
    null
  );
}
function Mn() {
  if (!Tn()) return () => {};
  On();
  let e = (e) => {
      let t = e.target?.closest(Sn);
      t &&
        ((t.matches(`button[type="submit"], input[type="submit"]`) &&
          t.closest(`form[data-event]`)) ||
          An(t.dataset.event || `click_element`, {
            event_category: t.dataset.category || null,
            event_action: t.dataset.action || `click`,
            event_label: t.dataset.label || jn(t),
            element_id: t.id || null,
            element_text: jn(t),
            element_url: t instanceof HTMLAnchorElement ? t.href : null,
          }));
    },
    t = (e) => {
      let t = e.target?.closest(`form[data-event]`);
      t &&
        An(t.dataset.event || `submit_form`, {
          event_category: t.dataset.category || `form`,
          event_action: t.dataset.action || `submit`,
          event_label: t.dataset.label || t.id || null,
          form_id: t.id || null,
        });
    };
  return (
    document.addEventListener(`click`, e),
    document.addEventListener(`submit`, t),
    () => {
      (document.removeEventListener(`click`, e),
        document.removeEventListener(`submit`, t));
    }
  );
}
function Nn() {
  let e = kn();
  return {
    UTM_Source: e.utm_source || ``,
    UTM_Medium: e.utm_medium || ``,
    UTM_Campaign: e.utm_campaign || ``,
    UTM_Term: e.utm_term || ``,
    UTM_Content: e.utm_content || ``,
    GCLID: e.gclid || ``,
    FBCLID: e.fbclid || ``,
    Lead_Origin: e.lead_origin || ``,
    Landing_Page: e.landing_page || ``,
    First_Page: e.first_page || ``,
    Last_Page: e.last_page || ``,
    First_Referrer: e.first_referrer || ``,
  };
}
var Pn = (e, t) => {
    if (e && e !== t) return e;
  },
  Fn = () => ({
    gtmId: Pn(window.__TQG_TRACKING__?.GTM_ID || void 0, `GTM-XXXXXXX`),
    ga4Id: Pn(window.__TQG_TRACKING__?.GA4_ID || void 0, `G-XXXXXXXXXX`),
  });
function In(e, t, n) {
  if (document.getElementById(e)) return;
  let r = document.createElement(`script`);
  ((r.id = e),
    (r.async = !!t),
    t && (r.src = t),
    n && (r.textContent = n),
    document.head.appendChild(r));
}
function Ln(e) {
  return !!document.querySelector(
    `script[src*="googletagmanager.com/gtm.js?id=${e}"]`,
  );
}
function Rn(e) {
  return !!document.querySelector(
    `iframe[src*="googletagmanager.com/ns.html?id=${e}"]`,
  );
}
function zn() {
  let [e] = Ot();
  return (
    S.useEffect(() => {
      ((window.dataLayer = window.dataLayer || []), On());
      let e = Mn(),
        { gtmId: t, ga4Id: n } = Fn();
      if (
        t &&
        (Ln(t) ||
          (window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: `gtm.js`,
          }),
          In(
            `google-tag-manager`,
            `https://www.googletagmanager.com/gtm.js?id=${t}`,
          )),
        !Rn(t))
      ) {
        let e = document.createElement(`iframe`);
        ((e.id = `google-tag-manager-noscript`),
          (e.src = `https://www.googletagmanager.com/ns.html?id=${t}`),
          (e.height = `0`),
          (e.width = `0`),
          (e.style.display = `none`),
          (e.style.visibility = `hidden`),
          document.body.prepend(e));
      }
      return (
        n &&
          (In(
            `google-analytics-gtag`,
            `https://www.googletagmanager.com/gtag/js?id=${n}`,
          ),
          In(
            `google-analytics-config`,
            void 0,
            `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${n}',{send_page_view:false});`,
          )),
        e
      );
    }, []),
    S.useEffect(() => {
      (On(),
        An(`page_view`, {
          event_category: `navigation`,
          event_action: `view`,
          event_label: e,
        }));
    }, [e]),
    null
  );
}
var Bn = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  Vn = D,
  Hn = ((e, t) => (n) => {
    var r;
    if (t?.variants == null) return Vn(e, n?.class, n?.className);
    let { variants: i, defaultVariants: a } = t,
      o = Object.keys(i).map((e) => {
        let t = n?.[e],
          r = a?.[e];
        if (t === null) return null;
        let o = Bn(t) || Bn(r);
        return i[e][o];
      }),
      s =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return Vn(
      e,
      o,
      t == null || (r = t.compoundVariants) == null
        ? void 0
        : r.reduce((e, t) => {
            let { class: n, className: r, ...i } = t;
            return Object.entries(i).every((e) => {
              let [t, n] = e;
              return Array.isArray(n)
                ? n.includes({ ...a, ...s }[t])
                : { ...a, ...s }[t] === n;
            })
              ? [...e, n, r]
              : e;
          }, []),
      n?.class,
      n?.className,
    );
  })(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground hover:bg-primary/90`,
          destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60`,
          outline: `border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50`,
          secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
          ghost: `hover:bg-accent dark:hover:bg-accent/50`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2 has-[>svg]:px-3`,
          sm: `h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5`,
          lg: `h-10 rounded-md px-6 has-[>svg]:px-4`,
          icon: `size-9`,
          "icon-sm": `size-8`,
          "icon-lg": `size-10`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  );
function Un({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  children: i,
  ...a
}) {
  let o = We(Hn({ variant: t, size: n, className: e }));
  return r && S.isValidElement(i)
    ? S.cloneElement(i, {
        ...a,
        "data-slot": `button`,
        className: We(o, i.props.className),
      })
    : m.jsx(`button`, {
        ...a,
        "data-slot": `button`,
        className: o,
        children: i,
      });
}
var Wn = [
  { value: 12, suffix: `+`, label: `ANOS DE ATUAÇÃO`, color: `text-[#C9FFD8]` },
  {
    value: 1e3,
    suffix: `+`,
    label: `EMPRESAS ATENDIDAS`,
    color: `text-[#2F7D32]`,
  },
  {
    value: 20,
    suffix: `+`,
    label: `NORMAS E SISTEMAS ATENDIDOS`,
    color: `text-[#C9FFD8]`,
  },
  { display: `Brasil`, label: `ATENDIMENTO NACIONAL`, color: `text-[#2F7D32]` },
];
function Gn(e, t) {
  let [n, r] = S.useState(0);
  return (
    S.useEffect(() => {
      if (!t) return;
      let n = 0,
        i = performance.now(),
        a = (t) => {
          let o = Math.min((t - i) / 1500, 1),
            s = 1 - (1 - o) ** 3;
          (r(Math.round(e * s)), o < 1 && (n = requestAnimationFrame(a)));
        };
      return ((n = requestAnimationFrame(a)), () => cancelAnimationFrame(n));
    }, [t, e]),
    n
  );
}
function Kn() {
  let e = S.useRef(null),
    [t, n] = S.useState(!1);
  return (
    S.useEffect(() => {
      let t = e.current;
      if (!t) return;
      let r = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (n(!0), r.disconnect());
        },
        { threshold: 0.35 },
      );
      return (r.observe(t), () => r.disconnect());
    }, []),
    m.jsx(`section`, {
      ref: e,
      className: `bg-[#F5F7FB] py-20 text-[#0B2512]`,
      children: m.jsxs(`div`, {
        className: `container`,
        children: [
          m.jsx(`div`, {
            className: `mx-auto mb-12 max-w-4xl text-center`,
            children: m.jsxs(`h2`, {
              className: `font-heading text-[clamp(2.1rem,5vw,4.3rem)] font-black leading-[1.05]`,
              children: [
                `Confiança conquistada com `,
                m.jsx(`span`, {
                  className: `text-[#1F8A4C]`,
                  children: `resultados sólidos`,
                }),
              ],
            }),
          }),
          m.jsx(`div`, {
            className: `overflow-hidden rounded-2xl bg-[#0B2512] shadow-[0_20px_50px_rgba(5,12,26,0.18)]`,
            children: m.jsx(`div`, {
              className: `grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0`,
              children: Wn.map((e) =>
                m.jsx(qn, { stat: e, active: t }, e.label),
              ),
            }),
          }),
          m.jsx(`p`, {
            className: `mx-auto mt-8 max-w-3xl text-center text-sm font-medium text-slate-700`,
            children: `Consultoria, auditorias e treinamentos com padrão internacional de qualidade, segurança e conformidade.`,
          }),
        ],
      }),
    })
  );
}
function qn({ stat: e, active: t }) {
  let n = `value` in e ? (e.value ?? 0) : 0,
    r = Gn(n, t);
  return m.jsxs(`div`, {
    className: `px-6 py-8 text-center`,
    children: [
      m.jsx(`div`, {
        className: `font-heading text-5xl font-black leading-none md:text-6xl ${e.color}`,
        children: `display` in e ? e.display : `${r || n}${e.suffix}`,
      }),
      m.jsx(`p`, {
        className: `mt-4 text-xs font-black uppercase tracking-[0.12em] text-slate-300`,
        children: e.label,
      }),
    ],
  });
}
var Jn = [
  {
    name: `Avant Color`,
    logo: `/assets/clientes-consultoria/optimized/avant-color.webp`,
  },
  { name: `Baker`, logo: `/assets/clientes-consultoria/optimized/baker.webp` },
  {
    name: `C-MMIND`,
    logo: `/assets/clientes-consultoria/optimized/c-mmind.webp`,
  },
  {
    name: `Corpo de Bombeiros`,
    logo: `/assets/clientes-consultoria/optimized/corpo-de-bombeiros.webp`,
  },
  {
    name: `Ecowork`,
    logo: `/assets/clientes-consultoria/optimized/ecowork.webp`,
  },
  {
    name: `Engquadros`,
    logo: `/assets/clientes-consultoria/optimized/engquadros.webp`,
  },
  {
    name: `Freeway`,
    logo: `/assets/clientes-consultoria/optimized/freeway.webp`,
  },
  {
    name: `Intera`,
    logo: `/assets/clientes-consultoria/optimized/intera.webp`,
  },
  {
    name: `Jump & Label`,
    logo: `/assets/clientes-consultoria/optimized/jump-label.webp`,
  },
  {
    name: `Lima & Torres`,
    logo: `/assets/clientes-consultoria/optimized/lima-torres.webp`,
  },
  {
    name: `LM Consultoria`,
    logo: `/assets/clientes-consultoria/optimized/lm-consultoria.webp`,
  },
  {
    name: `Maqelite`,
    logo: `/assets/clientes-consultoria/optimized/maqelite.webp`,
  },
  {
    name: `MSE Naval`,
    logo: `/assets/clientes-consultoria/optimized/mse-naval.webp`,
  },
  {
    name: `New Ortho`,
    logo: `/assets/clientes-consultoria/optimized/new-ortho.webp`,
  },
  {
    name: `Sadel Alfa`,
    logo: `/assets/clientes-consultoria/optimized/sadel-alfa.webp`,
  },
  {
    name: `Viver Clínica Médica`,
    logo: `/assets/clientes-consultoria/optimized/viver-clinica-medica.webp`,
  },
];
function Yn({ duplicate: e = !1 }) {
  return m.jsx(`div`, {
    className: `clients-carousel-list`,
    "aria-hidden": e || void 0,
    children: Jn.map((t) =>
      m.jsx(
        `div`,
        {
          className: `clients-carousel-card`,
          children: m.jsx(`img`, {
            src: t.logo,
            alt: e ? `` : `Logo da ${t.name}`,
            width: 320,
            height: 140,
            loading: `lazy`,
            decoding: `async`,
          }),
        },
        `${e ? `duplicate-` : ``}${t.name}`,
      ),
    ),
  });
}
function Xn() {
  return m.jsxs(`section`, {
    className: `clients-showcase`,
    "aria-labelledby": `clients-showcase-title`,
    children: [
      m.jsxs(`div`, {
        className: `container clients-showcase-heading`,
        children: [
          m.jsx(`p`, {
            className: `section-kicker`,
            children: `Empresas que confiam em nosso trabalho`,
          }),
          m.jsx(`h2`, {
            id: `clients-showcase-title`,
            className: `section-title mt-3`,
            children: `Empresas que já se beneficiaram com nossos serviços`,
          }),
        ],
      }),
      m.jsx(`div`, {
        className: `clients-carousel`,
        tabIndex: 0,
        "aria-label": `Logos de empresas atendidas`,
        children: m.jsxs(`div`, {
          className: `clients-carousel-track`,
          children: [m.jsx(Yn, {}), m.jsx(Yn, { duplicate: !0 })],
        }),
      }),
    ],
  });
}
function Zn({ className: e, ...t }) {
  return m.jsx(`svg`, {
    viewBox: `0 0 448 512`,
    fill: `currentColor`,
    "aria-hidden": `true`,
    className: e,
    ...t,
    children: m.jsx(`path`, {
      d: `M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.4-138c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`,
    }),
  });
}
var Qn = `5521969005913`,
  $n = `5521993968383`,
  er = `(21) 96900-5913`,
  tr = `comercial@totalqualitygroup.com.br`,
  nr = `financeiro@totalqualitygroup.com.br`,
  rr = `Estrada dos Três Rios, 958 - Freguesia, Jacarepaguá - Rio de Janeiro / RJ, CEP 22745-005`,
  ir = `Estrada dos Tres Rios, 958 - Freguesia, Jacarepagua - Rio de Janeiro / RJ, CEP 22745-005`,
  ar = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ir)}`,
  or = `https://www.google.com/maps?q=${encodeURIComponent(ir)}&output=embed`,
  sr = [
    {
      label: `LinkedIn`,
      href: `https://www.linkedin.com/company/totalqualitygroup/?originalSubdomain=br`,
    },
    {
      label: `Instagram`,
      href: `https://www.instagram.com/totalqualitygroup/`,
    },
    { label: `Facebook`, href: `https://www.facebook.com/totalqualitygroupp` },
    { label: `YouTube`, href: `https://www.youtube.com/@marciosantaana7071` },
  ],
  cr = (e, t = Qn) => `https://wa.me/${t}?text=${encodeURIComponent(e)}`,
  lr = async (e) => {
    let t = {
        _subject: e.subject,
        _template: `table`,
        _captcha: `false`,
        Origem: e.source,
        Nome: e.name || `Não informado`,
        Empresa: e.company || `Não informada`,
        Telefone: e.phone || `Não informado`,
        Email: e.email,
        Interesse: e.service || `Não informado`,
        Mensagem: e.message,
        ...Nn(),
      },
      n = await fetch(`/lead.php`, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(t),
      }),
      r = await n.json().catch(() => null);
    if (
      (!n.ok || r?.ok !== !0) &&
      (n.ok ||
        (n.status < 500 && n.status !== 404) ||
        !(
          await fetch(`https://formsubmit.co/ajax/${tr}`, {
            method: `POST`,
            headers: {
              Accept: `application/json`,
              "Content-Type": `application/json`,
            },
            body: JSON.stringify(t),
          })
        ).ok)
    )
      throw Error(`Não foi possível enviar a solicitação.`);
    (e.source !== `Formulário WhatsApp` &&
      window.gtag?.(`event`, `conversion`, {
        send_to: `AW-18216923617/4P6sCOq4hc4cEOHjwO5D`,
      }),
      An(`lead_form_success`, {
        event_category: `form`,
        event_action: `success`,
        event_label: e.source,
        service: e.service || null,
      }));
  },
  Z = [
    {
      code: `ISO 9001`,
      slug: `iso-9001`,
      title: `Sistema de gestão da Qualidade`,
      icon: Yt,
      description: `A ISO 9001 estabelece requisitos para um Sistema de gestão da Qualidade, aumentando a Eficiência dos processos, a padronização e a satisfação dos clientes.`,
      benefits: [
        `Melhoria Contínua dos processos`,
        `Aumento da satisfação dos clientes`,
        `Padronização operacional`,
        `Mais competitividade comercial`,
      ],
    },
    {
      code: `ISO 14001`,
      slug: `iso-14001`,
      title: `Sistema de gestão Ambiental`,
      icon: rn,
      description: `A ISO 14001 ajuda Organizações a reduzir impactos ambientais, atender requisitos legais e melhorar o desempenho ambiental de forma estruturada.`,
      benefits: [
        `redução de impactos ambientais`,
        `Atendimento a requisitos legais`,
        `Prevenção da poluição`,
        `Melhor reputação institucional`,
      ],
    },
    {
      code: `ISO 45001`,
      slug: `iso-45001`,
      title: `Saúde e Segurança Ocupacional`,
      icon: pn,
      description: `A ISO 45001 fortalece a Prevenção de acidentes, doenças ocupacionais e riscos de saúde e segurança no trabalho.`,
      benefits: [
        `Ambientes mais seguros`,
        `redução de riscos ocupacionais`,
        `Conformidade legal`,
        `Cultura de Prevenção`,
      ],
    },
    {
      code: `ISO/IEC 20000-1`,
      slug: `iso-20000-1`,
      title: `Gestão de Serviços de TI`,
      icon: ln,
      description: `A ISO/IEC 20000-1 estrutura a gestão de serviços de tecnologia para melhorar entrega, controle, indicadores e satisfação dos clientes internos e externos.`,
      benefits: [
        `Serviços de TI mais previsíveis`,
        `Indicadores claros`,
        `Melhoria de atendimento`,
        `Processos de suporte padronizados`,
      ],
    },
    {
      code: `ISO/IEC 27001`,
      slug: `iso-27001`,
      title: `segurança da informação`,
      icon: on,
      description: `A ISO/IEC 27001 define requisitos para proteger informações, reduzir riscos de segurança e fortalecer controles de confidencialidade, integridade e disponibilidade.`,
      benefits: [
        `proteção de informações críticas`,
        `gestão de riscos cibernéticos`,
        `Controles documentados`,
        `confiança de clientes e parceiros`,
      ],
    },
    {
      code: `ISO/IEC 27701`,
      slug: `iso-27701`,
      title: `Privacidade da informação`,
      icon: Ht,
      description: `A ISO/IEC 27701 amplia controles de Privacidade e proteção de dados, apoiando a governança de informações pessoais e práticas alinhadas à LGPD.`,
      benefits: [
        `governança de dados pessoais`,
        `Apoio à LGPD`,
        `redução de riscos de Privacidade`,
        `Rastreabilidade de controles`,
      ],
    },
    {
      code: `ISO 37001`,
      slug: `iso-37001`,
      title: `Sistema de gestão Antissuborno`,
      icon: dn,
      description: `A ISO 37001 auxilia na Prevenção, detecção e tratamento de práticas de suborno, fortalecendo integridade, ética e governança.`,
      benefits: [
        `Controles antissuborno`,
        `Canais e Políticas estruturadas`,
        `Cultura de integridade`,
        `redução de riscos legais`,
      ],
    },
    {
      code: `ISO 37301`,
      slug: `iso-37301`,
      title: `Sistema de gestão de Compliance`,
      icon: Wt,
      description: `A ISO 37301 apoia o cumprimento de leis, regulamentos, requisitos internos e compromissos contratuais com uma cultura sólida de conformidade.`,
      benefits: [
        `governança fortalecida`,
        `gestão de obrigações`,
        `redução de riscos regulatórios`,
        `transparência operacional`,
      ],
    },
    {
      code: `ISO 22301`,
      slug: `iso-22301`,
      title: `Continuidade de Negócios`,
      icon: mn,
      description: `A ISO 22301 prepara empresas para responder e se recuperar de interrupções, mantendo operações críticas em cenários adversos.`,
      benefits: [
        `Resiliência operacional`,
        `Planos de continuidade`,
        `Resposta a crises`,
        `confiança das partes interessadas`,
      ],
    },
    {
      code: `ISO 22000`,
      slug: `iso-22000`,
      title: `segurança de Alimentos`,
      icon: Jt,
      description: `A ISO 22000 organiza controles de segurança de alimentos ao longo da cadeia produtiva, reduzindo riscos e fortalecendo conformidade.`,
      benefits: [
        `Controle de perigos alimentares`,
        `Processos padronizados`,
        `Mais confiança na cadeia`,
        `Melhoria Contínua`,
      ],
    },
    {
      code: `FSSC 22000`,
      slug: `fssc-22000`,
      title: `Food Safety System Certification`,
      icon: Vt,
      description: `A FSSC 22000 complementa a gestão de segurança de alimentos com requisitos reconhecidos internacionalmente para empresas da cadeia alimentar.`,
      benefits: [
        `Reconhecimento internacional`,
        `Requisitos robustos`,
        `Apoio à cadeia de alimentos`,
        `Controle operacional`,
      ],
    },
    {
      code: `ISO 13485`,
      slug: `iso-13485`,
      title: `Dispositivos Médicos`,
      icon: Gt,
      description: `A ISO 13485 estrutura sistemas de qualidade para Organizações que atuam com dispositivos Médicos e requisitos regulatórios específicos.`,
      benefits: [
        `Controle regulatório`,
        `Rastreabilidade`,
        `gestão de qualidade técnica`,
        `confiança no produto`,
      ],
    },
    {
      code: `ISO 39001`,
      slug: `iso-39001`,
      title: `segurança Viária`,
      icon: $t,
      description: `A ISO 39001 ajuda Organizações a reduzir riscos de trânsito e melhorar desempenho em segurança Viária nas operações.`,
      benefits: [
        `redução de acidentes`,
        `Indicadores de segurança`,
        `gestão de frota e rotas`,
        `Conformidade operacional`,
      ],
    },
    {
      code: `ISO 41001`,
      slug: `iso-41001`,
      title: `Facilities Management`,
      icon: Gt,
      description: `A ISO 41001 melhora a gestão de infraestrutura, serviços de apoio e ambientes de trabalho, aumentando Eficiência e produtividade.`,
      benefits: [
        `gestão eficiente de facilities`,
        `redução de custos`,
        `Melhoria da Experiência do usuário`,
        `serviços de apoio padronizados`,
      ],
    },
    {
      code: `ISO 50001`,
      slug: `iso-50001`,
      title: `gestão de Energia`,
      icon: yn,
      description: `A ISO 50001 apoia a melhoria do desempenho energético, a redução de consumo e a gestão sistemática de oportunidades de Eficiência.`,
      benefits: [
        `Eficiência energética`,
        `redução de custos`,
        `Metas e indicadores`,
        `Sustentabilidade`,
      ],
    },
    {
      code: `ISO 55001`,
      slug: `iso-55001`,
      title: `gestão de Ativos`,
      icon: Kt,
      description: `A ISO 55001 orienta a gestão de ativos físicos e Não físicos ao longo do ciclo de vida, maximizando valor e reduzindo riscos.`,
      benefits: [
        `Melhor uso dos ativos`,
        `redução de riscos`,
        `decisões baseadas em valor`,
        `Ciclo de vida estruturado`,
      ],
    },
    {
      code: `ISO/IEC 17025`,
      slug: `iso-17025`,
      title: `Laboratórios de Ensaio e Calibração`,
      icon: en,
      description: `A ISO/IEC 17025 estabelece requisitos de competência, imparcialidade e consistência operacional para Laboratórios de ensaio e Calibração.`,
      benefits: [
        `Resultados confiáveis`,
        `competência técnica`,
        `Rastreabilidade metrológica`,
        `Reconhecimento de laboratório`,
      ],
    },
    {
      code: `ISO/IEC 42001`,
      slug: `iso-42001`,
      title: `Sistema de Gestão de Inteligência Artificial (SGIA)`,
      icon: ln,
      description: `A ISO/IEC 42001 estrutura a governança de sistemas de Inteligência artificial, riscos, responsabilidades e Melhoria Contínua.`,
      benefits: [
        `governança de IA`,
        `gestão de riscos`,
        `transparência e controles`,
        `Uso responsável de tecnologia`,
      ],
    },
    {
      code: `ISO 16363`,
      slug: `iso-16363`,
      title: `Auditoria e Certificação de Repositórios Digitais Confiáveis`,
      icon: Zt,
      description: `A ISO 16363 apoia a auditoria e Certificação de repositórios digitais confiáveis, avaliando governança, gestão de riscos, preservação digital e controles de confiabilidade.`,
      benefits: [
        `Preservação digital confiável`,
        `Governança de repositórios`,
        `Gestão de riscos digitais`,
        `Mais credibilidade institucional`,
      ],
    },
    {
      code: `ISO 18788`,
      slug: `iso-18788`,
      title: `Sistema de Gestão para Operações de Segurança Privada`,
      icon: pn,
      description: `A ISO 18788 estabelece requisitos para Sistemas de Gestão de Operações de Segurança Privada, fortalecendo controle operacional, gestão de riscos, conformidade e responsabilidade.`,
      benefits: [
        `Operações de segurança controladas`,
        `Gestão de riscos`,
        `Conformidade contratual e legal`,
        `Responsabilidade e transparência`,
      ],
    },
    {
      code: `PBQP-H`,
      slug: `pbqp-h`,
      title: `Qualidade na construção Civil`,
      icon: Gt,
      description: `O PBQP-H eleva padrões de qualidade e produtividade na construção civil, apoiando conformidade com requisitos do SiAC.`,
      benefits: [
        `Qualidade em obras`,
        `padronização de processos`,
        `redução de desperdícios`,
        `Competitividade no setor`,
      ],
    },
  ],
  ur = [
    {
      title: `Auditoria de diagnóstico`,
      text: `Analisamos processos, requisitos e lacunas para identificar o que precisa ser melhorado.`,
    },
    {
      title: `Planejamento`,
      text: `Elaboramos um plano personalizado com escopo, cronograma, responsáveis e prioridades.`,
    },
    {
      title: `Implantação`,
      text: `Implementamos processos, controles, Documentação e treinamentos com a equipe.`,
    },
    {
      title: `Certificação`,
      text: `Realizamos auditorias internas e preparamos a empresa para o organismo certificador.`,
    },
    {
      title: `Melhoria Contínua`,
      text: `Acompanhamos ações de melhoria para manter o sistema vivo e eficiente.`,
    },
  ],
  Q = [
    {
      title: `Auditoria de Diagnóstico`,
      slug: `diagnostico`,
      icon: Xt,
      text: `Avaliação inicial realizada para identificar o nível de conformidade da organização em relação aos requisitos da norma aplicável.`,
      description: `Permite identificar pontos fortes, oportunidades de melhoria e definir um plano de ação antes da implementação ou Certificação.`,
      bestFor: [
        `Empresas iniciando a implementação ISO`,
        `Organizações que precisam entender lacunas`,
        `Preparação antes da auditoria interna ou Certificação`,
      ],
      outputs: [
        `Mapa de conformidade`,
        `Lista de lacunas e prioridades`,
        `Plano de ação orientado por requisitos`,
      ],
    },
    {
      title: `Auditoria Interna`,
      slug: `interna`,
      icon: Jt,
      text: `Auditoria conduzida pela própria organização ou por consultores independentes para verificar a eficácia do Sistema de Gestão.`,
      description: `Avalia se o Sistema de Gestão está sendo implementado e mantido de forma eficaz, atendendo aos requisitos das normas ISO e aos procedimentos internos.`,
      bestFor: [
        `Empresas certificadas ou em Certificação`,
        `Validação de processos internos`,
        `Preparação para auditorias externas`,
      ],
      outputs: [
        `Relatório de auditoria interna`,
        `Evidências de conformidade`,
        `Não conformidades e oportunidades de melhoria`,
      ],
    },
    {
      title: `Auditoria de Fornecedor`,
      slug: `fornecedor`,
      icon: gn,
      text: `Avaliação realizada em fornecedores e prestadores de serviços para verificar sua capacidade de atender aos critérios da organização.`,
      description: `Verifica requisitos de qualidade, meio ambiente, saúde e segurança, segurança da informação ou outros critérios estabelecidos pela organização.`,
      bestFor: [
        `Homologação de fornecedores`,
        `Gestão de riscos na cadeia`,
        `Contratos com requisitos críticos`,
      ],
      outputs: [
        `Relatório de avaliação do fornecedor`,
        `Riscos e pontos de atenção`,
        `Recomendações para homologação ou acompanhamento`,
      ],
    },
    {
      title: `Auditoria de Conformidade`,
      slug: `conformidade`,
      icon: dn,
      text: `Verificação sistemática destinada a avaliar o atendimento aos requisitos legais, regulamentares, normativos e contratuais.`,
      description: `Reduz riscos, fortalece a conformidade e apoia decisões sobre obrigações aplicáveis às atividades da organização.`,
      bestFor: [
        `Empresas com exigências legais e contratuais`,
        `Operações reguladas`,
        `Revisão de compliance e requisitos normativos`,
      ],
      outputs: [
        `Matriz de requisitos avaliados`,
        `Registro de conformidade e desvios`,
        `Plano de adequação`,
      ],
    },
    {
      title: `Auditoria de Certificação`,
      slug: `certificacao`,
      icon: Vt,
      text: `Auditoria realizada por organismo certificador independente para avaliar se o Sistema de Gestão atende aos requisitos da norma ISO.`,
      description: `Quando aprovada, resulta na emissão do certificado de conformidade. A Total Quality Group apoia a preparação e o acompanhamento técnico.`,
      bestFor: [
        `Empresas prontas para Certificação`,
        `Validação final do sistema`,
        `Acompanhamento junto ao organismo certificador`,
      ],
      outputs: [
        `Preparação para auditoria externa`,
        `Suporte técnico durante o processo`,
        `Apoio no tratamento de apontamentos`,
      ],
    },
    {
      title: `Auditoria de Manutenção (Supervisão)`,
      slug: `manutencao-supervisao`,
      icon: pn,
      text: `Auditoria periódica realizada após a Certificação para verificar se o Sistema de Gestão continua eficaz e conforme.`,
      description: `Apoia a manutenção da validade da Certificação durante o ciclo, avaliando a continuidade da implementação e dos controles.`,
      bestFor: [
        `Empresas já certificadas`,
        `Manutenção anual da Certificação`,
        `Verificação de maturidade do sistema`,
      ],
      outputs: [
        `Relatório de supervisão`,
        `Ações para manter conformidade`,
        `Recomendações de Melhoria Contínua`,
      ],
    },
    {
      title: `Auditoria de Recertificação`,
      slug: `recertificacao`,
      icon: Ht,
      text: `Auditoria realizada ao término do ciclo de Certificação, normalmente a cada três anos, para renovar o certificado.`,
      description: `Avalia a continuidade da eficácia do Sistema de Gestão e apoia a renovação do certificado por um novo ciclo de Certificação.`,
      bestFor: [
        `Empresas no fim do ciclo de Certificação`,
        `Renovação do certificado ISO`,
        `Revisão ampla da eficácia do sistema`,
      ],
      outputs: [
        `Diagnóstico para renovação`,
        `Plano de preparação para recertificação`,
        `Apoio na resposta a não conformidades`,
      ],
    },
  ],
  $ = [
    {
      title: `Auditor Interno SGI`,
      icon: Ut,
      text: `Curso voltado à formação de auditores internos em Sistemas de Gestão Integrada (SGI).`,
      description: `Capacita os participantes para planejar, executar, registrar e acompanhar auditorias internas com base nas normas ISO 9001, ISO 14001 e ISO 45001.`,
      standards: [`ISO 9001`, `ISO 14001`, `ISO 45001`],
      audience: [
        `Profissionais de qualidade, meio ambiente e segurança`,
        `Colaboradores indicados para auditorias internas`,
        `Equipes envolvidas no SGI`,
      ],
      outcomes: [
        `Planejar e executar auditorias internas`,
        `Registrar evidências e constatações`,
        `Identificar não conformidades e oportunidades de melhoria`,
      ],
    },
    {
      title: `Auditor Líder SGI`,
      icon: tn,
      text: `Curso avançado destinado à formação de Auditores Líderes em Sistemas de Gestão Integrada.`,
      description: `Desenvolve competências para planejar, coordenar e conduzir auditorias de primeira, segunda e terceira parte, conforme as diretrizes da ISO 19011 e os requisitos das normas ISO 9001, ISO 14001 e ISO 45001.`,
      standards: [`ISO 19011`, `ISO 9001`, `ISO 14001`, `ISO 45001`],
      audience: [
        `Profissionais que desejam liderar equipes de auditoria`,
        `Auditores internos em evolução técnica`,
        `Consultores e profissionais que atuam com Certificação`,
      ],
      outcomes: [
        `Coordenar equipes de auditoria`,
        `Conduzir auditorias de primeira, segunda e terceira parte`,
        `Atuar com visão crítica em organismos certificadores e consultorias`,
      ],
    },
  ],
  dr = `Consultoria ISO - ${Z[0].code}`;
function fr({ variant: e = `floating` }) {
  let t = S.useRef(!1),
    [n, r] = S.useState(!1),
    [i, a] = S.useState(!1),
    [o, s] = S.useState({ interest: dr, name: ``, phone: ``, email: `` }),
    [c, l] = S.useState(!1),
    u = Ot()[0].startsWith(`/treinamentos`),
    d = cr(
      u
        ? `Olá! Quero falar sobre treinamentos da Total Quality Group.`
        : `Olá! Quero falar com a Total Quality Group.`,
      u ? $n : void 0,
    ),
    f = `min-h-11 w-full rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/15`,
    p =
      e === `floating`
        ? `fixed bottom-4 right-4 z-[80] md:bottom-6 md:right-6`
        : `relative z-20`,
    h =
      e === `floating`
        ? `ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0B2512] shadow-[0_4px_24px_rgba(37,211,102,0.42)] transition-transform hover:scale-105 md:h-16 md:w-16`
        : `flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/35 bg-[#25D366] text-[#0B2512] shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a]`;
  return e === `floating`
    ? m.jsx(`div`, {
        className: p,
        children: m.jsx(`a`, {
          id: `btn-whatsapp-floating`,
          href: d,
          target: `_blank`,
          rel: `noopener noreferrer`,
          "aria-label": `Abrir WhatsApp`,
          "data-event": `click_whatsapp_floating`,
          "data-category": `cta`,
          "data-action": `click`,
          "data-label": `WhatsApp Floating`,
          className: h,
          children: m.jsx(Zn, { className: `h-7 w-7 md:h-8 md:w-8` }),
        }),
      })
    : m.jsxs(`div`, {
        className: p,
        children: [
          i &&
            m.jsxs(`form`, {
              id: `form-whatsapp-inline`,
              "data-event": `submit_whatsapp_inline_form`,
              "data-category": `form`,
              "data-action": `submit`,
              "data-label": `WhatsApp Inline Form`,
              onSubmit: async (e) => {
                if ((e.preventDefault(), t.current)) {
                  e.stopPropagation();
                  return;
                }
                ((t.current = !0), r(!0));
                let n = [
                    `Olá! Quero falar com a Total Quality Group.`,
                    `Interesse: ${o.interest}`,
                    `Nome: ${o.name}`,
                    `Whatsapp: ${o.phone}`,
                    `E-mail: ${o.email}`,
                  ].join(`
`),
                  i = window.open(`about:blank`, `_blank`);
                (i && (i.opener = null), l(!1));
                try {
                  await lr({
                    subject: `Solicitação pelo WhatsApp - ${o.interest}`,
                    source: `Formulário WhatsApp`,
                    name: o.name,
                    phone: o.phone,
                    email: o.email,
                    service: o.interest,
                    message: n,
                  });
                } catch {
                  l(!0);
                } finally {
                  ((t.current = !1), r(!1));
                }
                let a = o.interest.startsWith(`Treinamento`) ? $n : void 0;
                (window.gtag?.(`event`, `conversion`, {
                  send_to: `AW-18216923617/DIyBCL2O_bscEOHjwO5D`,
                }),
                  i && !i.closed
                    ? i.location.replace(cr(n, a))
                    : window.location.assign(cr(n, a)));
              },
              className: `absolute right-0 top-[calc(100%+.75rem)] w-[calc(100vw-2rem)] max-w-[22rem] rounded-2xl border border-slate-100 bg-white p-4 text-slate-900 shadow-[0_24px_70px_rgba(0,0,0,.30)]`,
              children: [
                m.jsxs(`div`, {
                  className: `mb-3 flex items-start justify-between gap-4`,
                  children: [
                    m.jsxs(`div`, {
                      children: [
                        m.jsx(`h3`, {
                          className: `text-base font-black text-slate-950`,
                          children: `Vamos conversar!`,
                        }),
                        m.jsx(`p`, {
                          className: `mt-1 text-xs leading-snug text-slate-400`,
                          children: `Deixe seus dados e a gente continua no WhatsApp.`,
                        }),
                      ],
                    }),
                    m.jsx(`button`, {
                      id: `btn-close-whatsapp-inline-form`,
                      type: `button`,
                      "data-event": `close_whatsapp_inline_form`,
                      "data-category": `form`,
                      "data-action": `click`,
                      "data-label": `Close WhatsApp Inline Form`,
                      onClick: () => a(!1),
                      "aria-label": `Fechar formulário do WhatsApp`,
                      className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700`,
                      children: m.jsx(_n, { size: 18 }),
                    }),
                  ],
                }),
                m.jsxs(`div`, {
                  className: `grid gap-2.5`,
                  children: [
                    m.jsxs(`label`, {
                      className: `field-label`,
                      children: [
                        `Qual o seu interesse?`,
                        m.jsxs(`select`, {
                          value: o.interest,
                          onChange: (e) =>
                            s({ ...o, interest: e.target.value }),
                          "aria-label": `Qual o seu interesse?`,
                          className: f,
                          children: [
                            m.jsx(`optgroup`, {
                              label: `Consultoria ISO`,
                              children: Z.map((e) =>
                                m.jsxs(
                                  `option`,
                                  {
                                    value: `Consultoria ISO - ${e.code}`,
                                    children: [`Consultoria ISO - `, e.code],
                                  },
                                  e.slug,
                                ),
                              ),
                            }),
                            m.jsx(`optgroup`, {
                              label: `Auditoria`,
                              children: Q.map((e) =>
                                m.jsxs(
                                  `option`,
                                  {
                                    value: `Auditoria - ${e.title}`,
                                    children: [`Auditoria - `, e.title],
                                  },
                                  e.slug,
                                ),
                              ),
                            }),
                            m.jsx(`optgroup`, {
                              label: `Treinamento`,
                              children: $.map((e) =>
                                m.jsxs(
                                  `option`,
                                  {
                                    value: `Treinamento - ${e.title}`,
                                    children: [`Treinamento - `, e.title],
                                  },
                                  e.title,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs(`label`, {
                      className: `field-label`,
                      children: [
                        `Nome`,
                        m.jsx(`input`, {
                          required: !0,
                          value: o.name,
                          onChange: (e) => s({ ...o, name: e.target.value }),
                          placeholder: `Seu nome`,
                          className: f,
                        }),
                      ],
                    }),
                    m.jsxs(`label`, {
                      className: `field-label`,
                      children: [
                        `WhatsApp`,
                        m.jsx(`input`, {
                          required: !0,
                          value: o.phone,
                          onChange: (e) => s({ ...o, phone: e.target.value }),
                          placeholder: `Whatsapp`,
                          className: f,
                        }),
                      ],
                    }),
                    m.jsxs(`label`, {
                      className: `grid gap-1 text-xs font-semibold text-slate-700`,
                      children: [
                        `E-mail `,
                        m.jsx(`span`, {
                          className: `text-[#168F43]`,
                          children: `*Obrigatório`,
                        }),
                        m.jsx(`input`, {
                          required: !0,
                          type: `email`,
                          value: o.email,
                          onChange: (e) => s({ ...o, email: e.target.value }),
                          placeholder: `voce@email.com`,
                          className: f,
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsxs(`button`, {
                  id: `btn-submit-whatsapp-inline-form`,
                  type: `submit`,
                  disabled: n,
                  "data-event": `submit_whatsapp_inline_button`,
                  "data-category": `form`,
                  "data-action": `submit`,
                  "data-label": `Submit WhatsApp Inline Form`,
                  className: `mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[#25D366] px-5 text-sm font-black text-[#0B2512] shadow-[0_10px_28px_rgba(37,211,102,.28)] transition hover:-translate-y-px hover:bg-[#20bd5a]`,
                  children: [
                    m.jsx(Zn, { className: `h-[18px] w-[18px]` }),
                    `Solicitar proposta`,
                  ],
                }),
                c &&
                  m.jsx(`p`, {
                    role: `alert`,
                    className: `mt-2 text-xs font-semibold text-red-600`,
                    children: `O e-mail não foi enviado, mas o WhatsApp será aberto.`,
                  }),
              ],
            }),
          m.jsx(`button`, {
            id: `btn-toggle-whatsapp-inline-form`,
            type: `button`,
            "data-event": `toggle_whatsapp_inline_form`,
            "data-category": `cta`,
            "data-action": `click`,
            "data-label": `Toggle WhatsApp Inline Form`,
            onClick: () => a((e) => !e),
            "aria-expanded": i,
            "aria-label": i
              ? `Fechar formulário do WhatsApp`
              : `Abrir formulário do WhatsApp`,
            className: h,
            children: i
              ? m.jsx(_n, { className: `h-5 w-5` })
              : m.jsx(Zn, { className: `h-5 w-5` }),
          }),
        ],
      });
}
function pr({
  open: e,
  onClose: t,
  title: n = `Solicitação enviada!`,
  message:
    r = `Recebemos seus dados. Nossa equipe comercial vai entrar em contato em breve.`,
  durationMs: i = 6500,
}) {
  return (
    S.useEffect(() => {
      if (!e) return;
      let n = window.setTimeout(t, i);
      return () => window.clearTimeout(n);
    }, [i, t, e]),
    e
      ? m.jsx(`div`, {
          className: `fixed inset-0 z-[120] flex items-center justify-center bg-[#031109]/72 px-4 backdrop-blur-sm`,
          role: `status`,
          "aria-live": `polite`,
          children: m.jsxs(`div`, {
            className: `relative w-full max-w-md overflow-hidden rounded-2xl border border-[#68FF94]/30 bg-[#071D0E] p-6 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,.48)]`,
            children: [
              m.jsx(`button`, {
                type: `button`,
                onClick: t,
                "aria-label": `Fechar aviso de envio`,
                className: `absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#68FF94]/45 hover:text-white`,
                children: m.jsx(_n, { size: 18 }),
              }),
              m.jsx(`div`, {
                className: `mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#68FF94]/35 bg-[#68FF94]/14 text-[#C9FFD8] shadow-[0_0_34px_rgba(104,255,148,.18)]`,
                children: m.jsx(Jt, { size: 36 }),
              }),
              m.jsx(`h2`, {
                className: `font-heading text-2xl font-black leading-tight sm:text-3xl`,
                children: n,
              }),
              m.jsx(`p`, {
                className: `mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300 sm:text-base`,
                children: r,
              }),
              m.jsx(`p`, {
                className: `mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#C9FFD8]`,
                children: `Obrigado pelo contato`,
              }),
              m.jsx(`div`, {
                className: `mt-5 h-1.5 overflow-hidden rounded-full bg-white/10`,
                children: m.jsx(`div`, {
                  className: `lead-success-progress h-full rounded-full bg-[#68FF94]`,
                  style: { animationDuration: `${i}ms` },
                }),
              }),
            ],
          }),
        })
      : null
  );
}
function mr({
  open: e,
  onClose: t,
  title: n = `Fale com a Total Quality`,
  eyebrow: r = `Contato comercial`,
  context: i = `consultoria, auditoria ou treinamento ISO`,
  initialService: a = `Consultoria ISO - ${Z[0].code}`,
}) {
  let o = S.useRef(!1),
    [s, c] = S.useState(!1),
    [l, u] = S.useState({
      name: ``,
      company: ``,
      phone: ``,
      email: ``,
      service: a,
      message: ``,
    }),
    [d, f] = S.useState(!1),
    [p, h] = S.useState(!1),
    g = S.useRef(null),
    _ = S.useId();
  if (
    (S.useEffect(() => {
      if (!e) return;
      let t = g.current,
        n = document.activeElement,
        r = document.body.style.overflow;
      return (
        t.showModal(),
        (document.body.style.overflow = `hidden`),
        () => {
          (t.close(),
            (document.body.style.overflow = r),
            n instanceof HTMLElement && n.focus());
        }
      );
    }, [e]),
    !e)
  )
    return null;
  let v = `min-h-10 rounded-[8px] border border-white/10 bg-[#031109]/76 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#68FF94]`;
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(`dialog`, {
        ref: g,
        onCancel: (e) => {
          (e.preventDefault(), t());
        },
        "aria-labelledby": _,
        className: `quote-dialog fixed inset-0 z-[90] flex items-center justify-center bg-[#031109]/72 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-4`,
        children: [
          m.jsx(`button`, {
            className: `absolute inset-0 cursor-default`,
            tabIndex: -1,
            "aria-label": `Fechar formulário`,
            onClick: t,
          }),
          m.jsxs(`form`, {
            id: `form-contact-modal`,
            "data-event": `submit_contact_modal_form`,
            "data-category": `form`,
            "data-action": `submit`,
            "data-label": `Contact Modal Form`,
            onSubmit: async (e) => {
              if ((e.preventDefault(), o.current)) {
                e.stopPropagation();
                return;
              }
              ((o.current = !0), c(!0));
              let t = [
                `Olá! Quero solicitar contato para ${i}.`,
                `Nome: ${l.name}`,
                `Empresa: ${l.company}`,
                `Whatsapp: ${l.phone}`,
                `E-mail: ${l.email}`,
                `Serviço: ${l.service}`,
                l.message ? `Mensagem: ${l.message}` : ``,
              ].filter(Boolean).join(`
`);
              h(!1);
              try {
                (await lr({
                  subject: `Solicitação de cotação - ${l.service}`,
                  source: n,
                  name: l.name,
                  company: l.company,
                  phone: l.phone,
                  email: l.email,
                  service: l.service,
                  message: t,
                }),
                  f(!0));
              } catch {
                (h(!0), f(!1));
              } finally {
                ((o.current = !1), c(!1));
              }
            },
            className: `relative z-10 max-h-[calc(100dvh-1.5rem)] w-full max-w-[31rem] overflow-y-auto rounded-xl border border-white/10 bg-[#0B2512] shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-2xl`,
            children: [
              m.jsxs(`div`, {
                className: `flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:gap-5 sm:px-6 sm:py-4`,
                children: [
                  m.jsxs(`div`, {
                    children: [
                      m.jsx(`p`, {
                        className: `mb-1.5 text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#C9FFD8] sm:mb-2 sm:text-[0.7rem] sm:tracking-[0.28em]`,
                        children: r,
                      }),
                      m.jsx(`h2`, {
                        id: _,
                        className: `font-heading text-xl font-black leading-tight text-white sm:text-2xl`,
                        children: n,
                      }),
                      m.jsxs(`p`, {
                        className: `mt-1.5 text-sm leading-snug text-slate-400`,
                        children: [`Envie sua solicitação para `, tr, `.`],
                      }),
                    ],
                  }),
                  m.jsx(`button`, {
                    id: `btn-close-contact-modal`,
                    type: `button`,
                    "data-event": `close_contact_modal`,
                    "data-category": `modal`,
                    "data-action": `click`,
                    "data-label": `Close Contact Modal`,
                    onClick: t,
                    className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-[#68FF94]/40 hover:text-white`,
                    "aria-label": `Fechar`,
                    children: m.jsx(_n, { size: 20 }),
                  }),
                ],
              }),
              m.jsxs(`div`, {
                className: `grid gap-3 px-4 py-3 sm:px-6 sm:py-4`,
                children: [
                  m.jsxs(`label`, {
                    className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                    children: [
                      `Nome completo`,
                      m.jsx(`input`, {
                        required: !0,
                        value: l.name,
                        onChange: (e) => u({ ...l, name: e.target.value }),
                        placeholder: `Seu nome`,
                        className: v,
                      }),
                    ],
                  }),
                  m.jsxs(`div`, {
                    className: `grid gap-3 sm:grid-cols-2`,
                    children: [
                      m.jsxs(`label`, {
                        className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                        children: [
                          `Empresa`,
                          m.jsx(`input`, {
                            required: !0,
                            value: l.company,
                            onChange: (e) =>
                              u({ ...l, company: e.target.value }),
                            placeholder: `Nome da empresa`,
                            className: v,
                          }),
                        ],
                      }),
                      m.jsxs(`label`, {
                        className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                        children: [
                          `Whatsapp`,
                          m.jsx(`input`, {
                            required: !0,
                            value: l.phone,
                            onChange: (e) => u({ ...l, phone: e.target.value }),
                            placeholder: `(21) 00000-0000`,
                            className: v,
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs(`label`, {
                    className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                    children: [
                      `E-mail `,
                      m.jsx(`span`, {
                        className: `text-[#C9FFD8]`,
                        children: `*Obrigatório`,
                      }),
                      m.jsx(`input`, {
                        required: !0,
                        type: `email`,
                        value: l.email,
                        onChange: (e) => u({ ...l, email: e.target.value }),
                        placeholder: `voce@email.com`,
                        className: v,
                      }),
                    ],
                  }),
                  m.jsxs(`label`, {
                    className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                    children: [
                      `Serviço de interesse`,
                      m.jsxs(`select`, {
                        value: l.service,
                        onChange: (e) => u({ ...l, service: e.target.value }),
                        className: v,
                        children: [
                          m.jsx(`optgroup`, {
                            label: `Consultoria ISO`,
                            children: Z.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Consultoria ISO - ${e.code}`,
                                  children: [`Consultoria ISO - `, e.code],
                                },
                                e.slug,
                              ),
                            ),
                          }),
                          m.jsx(`optgroup`, {
                            label: `Auditoria`,
                            children: Q.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Auditoria - ${e.title}`,
                                  children: [`Auditoria - `, e.title],
                                },
                                e.slug,
                              ),
                            ),
                          }),
                          m.jsx(`optgroup`, {
                            label: `Treinamento`,
                            children: $.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Treinamento - ${e.title}`,
                                  children: [`Treinamento - `, e.title],
                                },
                                e.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs(`label`, {
                    className: `grid gap-1.5 text-xs font-black uppercase text-slate-300`,
                    children: [
                      `Mensagem`,
                      m.jsx(`textarea`, {
                        value: l.message,
                        onChange: (e) => u({ ...l, message: e.target.value }),
                        placeholder: `Descreva rapidamente sua necessidade operacional`,
                        rows: 3,
                        className: `${v} min-h-[4.5rem] resize-none sm:min-h-[5.25rem]`,
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs(`div`, {
                className: `flex flex-col gap-3 border-t border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4`,
                children: [
                  m.jsx(`p`, {
                    className: `max-w-[15rem] text-xs leading-relaxed text-slate-400`,
                    children: `Sua solicitação será enviada para o e-mail comercial.`,
                  }),
                  m.jsxs(`button`, {
                    id: `btn-submit-contact-modal`,
                    type: `submit`,
                    disabled: s,
                    "data-event": `submit_contact_modal_button`,
                    "data-category": `form`,
                    "data-action": `submit`,
                    "data-label": `Submit Contact Modal`,
                    className: `inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#2F7D32] px-5 text-sm font-black text-white shadow-[0_4px_20px_rgba(47,125,50,.35)] transition hover:-translate-y-px hover:bg-[#256B2C] sm:text-base`,
                    children: [
                      m.jsx(fn, { size: 17 }),
                      `Solicitar proposta`,
                      m.jsx(Bt, { size: 16 }),
                    ],
                  }),
                ],
              }),
              p &&
                m.jsx(`div`, {
                  className: `mx-4 mb-4 rounded-lg border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100 sm:mx-6`,
                  children: `Não foi possível enviar agora. Tente novamente ou chame pelo WhatsApp.`,
                  role: `alert`,
                }),
            ],
          }),
          m.jsx(`div`, {
            className: `pointer-events-none absolute bottom-6 right-6 hidden h-16 w-16 items-center justify-center rounded-full bg-[#2F7D32] text-white shadow-[0_4px_24px_rgba(47,125,50,.36)] md:flex`,
            children: m.jsx(sn, { size: 32 }),
          }),
          m.jsx(pr, { open: d, onClose: () => f(!1) }),
        ],
      }),
    ],
  });
}
var hr = { LinkedIn: an, Instagram: nn, Facebook: Qt, YouTube: vn },
  gr = [
    {
      title: `Gestão e certificação`,
      codes: [
        `ISO 9001`,
        `ISO 14001`,
        `ISO 45001`,
        `ISO 37301`,
        `ISO 37001`,
        `ISO/IEC 20000-1`,
      ],
    },
    {
      title: `Segurança, tecnologia e dados`,
      codes: [
        `ISO/IEC 27001`,
        `ISO/IEC 27701`,
        `ISO/IEC 42001`,
        `ISO 16363`,
        `ISO/IEC 17025`,
      ],
    },
    {
      title: `Operações e setores específicos`,
      codes: [
        `ISO 22000`,
        `FSSC 22000`,
        `ISO 13485`,
        `ISO 39001`,
        `ISO 41001`,
        `ISO 50001`,
        `ISO 55001`,
        `ISO 18788`,
        `ISO 22301`,
        `PBQP-H`,
      ],
    },
  ];
function _r() {
  let [e] = Ot(),
    [t, n] = S.useState(!1),
    [r, i] = S.useState(!1),
    [a, o] = S.useState(!1),
    [s, c] = S.useState(!1),
    [l, u] = S.useState(!1),
    [d, f] = S.useState(!1),
    [p, h] = S.useState(() => ``),
    g = `relative px-2.5 py-2.5 text-[0.82rem] font-bold text-slate-300 transition-colors hover:text-white xl:px-3 xl:text-[0.86rem]`,
    _ = e.split(`#`)[0] || `/`;
  (S.useEffect(() => {
    let e = () => h(window.location.hash);
    return (
      e(),
      window.addEventListener(`hashchange`, e),
      () => window.removeEventListener(`hashchange`, e)
    );
  }, [e]),
    S.useEffect(() => {
      let e = () => f(window.scrollY > 12);
      return (
        e(),
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    S.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` &&
          (n(!1), document.getElementById(`btn-mobile-menu-toggle`)?.focus());
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [t]));
  let v = (e) =>
      e === `/`
        ? _ === `/` && p !== `#como-funciona`
        : e === `/#como-funciona`
          ? _ === `/` && p === `#como-funciona`
          : _ === e || _.startsWith(`${e}/`),
    y = (e) =>
      `${g} ${v(e) ? `text-white after:absolute after:bottom-1 after:left-2.5 after:h-0.5 after:w-9 after:rounded-full after:bg-[#2F7D32] xl:after:left-3 xl:after:w-10` : ``}`,
    b = d || t,
    x = () => {
      n(!1);
      let e =
        _ === `/` ||
        _ === `/consultoria` ||
        _.startsWith(`/consultoria/`) ||
        _ === `/auditoria` ||
        _.startsWith(`/auditoria/`) ||
        _ === `/treinamentos`
          ? _
          : `/`;
      e === _
        ? (window.history.pushState(null, ``, `${e}#cotacao`),
          h(`#cotacao`),
          requestAnimationFrame(() =>
            document
              .getElementById(`cotacao`)
              ?.scrollIntoView({ behavior: `smooth`, block: `start` }),
          ))
        : (window.location.href = `${e}#cotacao`);
    };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(`header`, {
        className: `fixed left-0 right-0 top-0 z-[70] transition-all duration-300 ${b ? `border-b border-white/5 bg-[#031109]/96 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl` : `border-b border-transparent bg-transparent shadow-none`}`,
        children: [
          m.jsx(`div`, {
            className: `container`,
            children: m.jsxs(`div`, {
              className: `relative flex min-h-[5.75rem] items-center justify-between gap-4 md:min-h-[7rem] lg:min-h-[7.25rem] lg:gap-5`,
              children: [
                m.jsx(`a`, {
                  id: `link-header-logo`,
                  href: `/`,
                  "data-event": `click_header_logo`,
                  "data-category": `navigation`,
                  "data-action": `click`,
                  "data-label": `Header Logo`,
                  className: `group flex h-20 w-24 shrink-0 items-center justify-center md:h-24 md:w-28`,
                  children: m.jsx(`img`, {
                    src: `/assets/LogoTotalQuality.webp`,
                    alt: `Total Quality Group Brasil`,
                    className: `h-[4.5rem] w-[5.1rem] object-contain brightness-110 contrast-110 drop-shadow-[0_0_22px_rgba(31,138,76,0.65)] md:h-[5.25rem] md:w-[6rem]`,
                    width: 94,
                    height: 51,
                  }),
                }),
                m.jsx(`div`, {
                  className: `hidden min-w-0 flex-1 justify-center lg:flex`,
                  children: m.jsxs(`nav`, {
                    className: `flex min-h-[3.35rem] max-w-full items-center gap-2 rounded-full px-5 transition-all duration-300 xl:gap-3 xl:px-6 ${b ? `border border-white/10 bg-white/[0.055] shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl` : `border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-md`}`,
                    children: [
                      m.jsx(`a`, {
                        id: `link-header-home`,
                        href: `/`,
                        "data-event": `click_header_nav_home`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Header Home`,
                        className: y(`/`),
                        children: `Home`,
                      }),
                      m.jsx(`a`, {
                        id: `link-header-empresa`,
                        href: `/empresa`,
                        "data-event": `click_header_nav_empresa`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Header Empresa`,
                        className: y(`/empresa`),
                        children: `Empresa`,
                      }),
                      m.jsxs(`div`, {
                        className: `group relative`,
                        children: [
                          m.jsxs(`a`, {
                            id: `btn-header-consultoria-menu`,
                            href: `/consultoria`,
                            "data-event": `click_header_consultoria_menu`,
                            "data-category": `navigation`,
                            "data-action": `click`,
                            "data-label": `Header Consultoria Menu`,
                            className: `${y(`/consultoria`)} flex items-center gap-1`,
                            children: [
                              `Consultoria ISO `,
                              m.jsx(qt, { size: 16 }),
                            ],
                          }),
                          m.jsxs(`div`, {
                            className: `invisible absolute left-1/2 top-full z-50 mt-3 w-[54rem] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#102E18] p-5 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100`,
                            children: [
                              m.jsxs(`div`, {
                                className: `mb-4 flex items-center justify-between border-b border-white/10 pb-3`,
                                children: [
                                  m.jsx(`a`, {
                                    id: `link-header-consultoria-all`,
                                    href: `/consultoria`,
                                    "data-event": `click_header_consultoria_all`,
                                    "data-category": `navigation`,
                                    "data-action": `click`,
                                    "data-label": `Header All Consultorias`,
                                    className: `text-sm font-black uppercase tracking-wide text-white hover:text-[#C9FFD8]`,
                                    children: `Todas as consultorias ISO`,
                                  }),
                                  m.jsx(`span`, {
                                    className: `text-xs font-bold uppercase tracking-[0.18em] text-[#C9FFD8]`,
                                    children: `Normas atendidas`,
                                  }),
                                ],
                              }),
                              m.jsx(`div`, {
                                className: `grid gap-5 md:grid-cols-3`,
                                children: gr.map((e) =>
                                  m.jsxs(
                                    `div`,
                                    {
                                      children: [
                                        m.jsx(`p`, {
                                          className: `mb-2 text-xs font-black uppercase tracking-wide text-[#C9FFD8]`,
                                          children: e.title,
                                        }),
                                        m.jsx(`div`, {
                                          className: `grid gap-1`,
                                          children: e.codes.map((e) => {
                                            let t = Z.find((t) => t.code === e);
                                            return t
                                              ? m.jsx(
                                                  `a`,
                                                  {
                                                    id: `link-header-consultoria-${t.slug}`,
                                                    href: `/consultoria/${t.slug}`,
                                                    "data-event": `click_header_consultoria_norm`,
                                                    "data-category": `navigation`,
                                                    "data-action": `click`,
                                                    "data-label": `Header Consultoria ${t.code}`,
                                                    className: `rounded-lg px-2 py-1.5 text-[0.8rem] font-semibold leading-tight text-slate-300 hover:bg-white/5 hover:text-white`,
                                                    children: t.code,
                                                  },
                                                  t.slug,
                                                )
                                              : null;
                                          }),
                                        }),
                                      ],
                                    },
                                    e.title,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs(`div`, {
                        className: `group relative`,
                        children: [
                          m.jsxs(`a`, {
                            id: `btn-header-auditoria-menu`,
                            href: `/auditoria`,
                            "data-event": `click_header_auditoria_menu`,
                            "data-category": `navigation`,
                            "data-action": `click`,
                            "data-label": `Header Auditoria Menu`,
                            className: `${y(`/auditoria`)} flex items-center gap-1`,
                            children: [`Auditoria `, m.jsx(qt, { size: 16 })],
                          }),
                          m.jsx(`div`, {
                            className: `invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-[#102E18] py-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100`,
                            children: Q.slice(0, 7).map((e) =>
                              m.jsx(
                                `a`,
                                {
                                  id: `link-header-auditoria-${e.slug}`,
                                  href: `/auditoria/${e.slug}`,
                                  "data-event": `click_header_auditoria_type`,
                                  "data-category": `navigation`,
                                  "data-action": `click`,
                                  "data-label": `Header Auditoria ${e.title}`,
                                  className: `block px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-[#C9FFD8]`,
                                  children: e.title,
                                },
                                e.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                      m.jsxs(`div`, {
                        className: `group relative`,
                        children: [
                          m.jsxs(`a`, {
                            id: `btn-header-treinamentos-menu`,
                            href: `/treinamentos`,
                            "data-event": `click_header_treinamentos_menu`,
                            "data-category": `navigation`,
                            "data-action": `click`,
                            "data-label": `Header Treinamentos Menu`,
                            className: `${y(`/treinamentos`)} flex items-center gap-1`,
                            children: [
                              `Treinamentos `,
                              m.jsx(qt, { size: 16 }),
                            ],
                          }),
                          m.jsxs(`div`, {
                            className: `invisible absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl border border-white/10 bg-[#102E18] py-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100`,
                            children: [
                              m.jsx(`a`, {
                                id: `link-header-treinamentos-all`,
                                href: `/treinamentos`,
                                "data-event": `click_header_treinamentos_all`,
                                "data-category": `navigation`,
                                "data-action": `click`,
                                "data-label": `Header All Treinamentos`,
                                className: `block border-b border-white/10 px-4 py-3 text-sm font-black text-white hover:bg-white/5 hover:text-[#C9FFD8]`,
                                children: `Todos os treinamentos`,
                              }),
                              $.map((e) =>
                                m.jsx(
                                  `a`,
                                  {
                                    id: `link-header-treinamento-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`,
                                    href: `/treinamentos#cotacao`,
                                    "data-event": `click_header_treinamento`,
                                    "data-category": `navigation`,
                                    "data-action": `click`,
                                    "data-label": `Header Treinamento ${e.title}`,
                                    className: `block px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-[#C9FFD8]`,
                                    children: e.title,
                                  },
                                  e.title,
                                ),
                              ),
                              m.jsx(`a`, {
                                id: `link-header-validacao-digital`,
                                href: `/validacao-digital`,
                                "data-event": `click_header_validacao_digital`,
                                "data-category": `navigation`,
                                "data-action": `click`,
                                "data-label": `Header Validação Digital`,
                                className: `block border-t border-white/10 px-4 py-3 text-sm font-black text-[#C9FFD8] hover:bg-white/5 hover:text-white`,
                                children: `Validação Digital`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsx(`button`, {
                        id: `btn-header-contact`,
                        type: `button`,
                        "data-event": `open_contact_modal_header`,
                        "data-category": `cta`,
                        "data-action": `click`,
                        "data-label": `Header Contact`,
                        onClick: () => u(!0),
                        className: g,
                        children: `Contato`,
                      }),
                      m.jsx(Un, {
                        id: `btn-header-quote`,
                        "data-event": `click_header_quote`,
                        "data-category": `cta`,
                        "data-action": `click`,
                        "data-label": `Header Solicitar Cotação`,
                        onClick: x,
                        className: `ml-2 h-9 rounded-full bg-white px-4 text-[0.8rem] font-black text-[#0B2512] shadow-[0_10px_28px_rgba(255,255,255,0.16)] hover:bg-[#EAF7E8] xl:h-10 xl:px-5 xl:text-[0.86rem]`,
                        children: `Solicitar Cotação`,
                      }),
                    ],
                    "aria-label": `Navegação`,
                  }),
                }),
                m.jsx(`button`, {
                  id: `btn-mobile-menu-toggle`,
                  type: `button`,
                  "data-event": `toggle_mobile_menu`,
                  "data-category": `navigation`,
                  "data-action": `click`,
                  "data-label": `Mobile Menu Toggle`,
                  className: `rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white hover:bg-white/10 lg:hidden`,
                  onClick: () => n(!t),
                  "aria-expanded": t,
                  "aria-label": t ? `Fechar menu` : `Abrir menu`,
                  children: t
                    ? m.jsx(_n, { size: 24 })
                    : m.jsx(cn, { size: 24 }),
                }),
              ],
            }),
          }),
          t &&
            m.jsx(`nav`, {
              className: `relative z-[90] mx-4 mb-4 max-h-[calc(100dvh-6.75rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B2512] p-5 shadow-2xl lg:hidden`,
              children: m.jsxs(`div`, {
                className: `flex flex-col gap-4 pb-1`,
                children: [
                  m.jsx(`a`, {
                    id: `link-mobile-home`,
                    href: `/`,
                    "data-event": `click_mobile_nav_home`,
                    "data-category": `navigation`,
                    "data-action": `click`,
                    "data-label": `Mobile Home`,
                    className: `font-semibold text-slate-200`,
                    children: `Home`,
                  }),
                  m.jsx(`a`, {
                    id: `link-mobile-empresa`,
                    href: `/empresa`,
                    "data-event": `click_mobile_nav_empresa`,
                    "data-category": `navigation`,
                    "data-action": `click`,
                    "data-label": `Mobile Empresa`,
                    className: `font-semibold text-slate-200`,
                    children: `Empresa`,
                  }),
                  m.jsxs(`button`, {
                    id: `btn-mobile-consultoria-menu`,
                    type: `button`,
                    "data-event": `toggle_mobile_consultoria_menu`,
                    "data-category": `navigation`,
                    "data-action": `click`,
                    "data-label": `Mobile Consultoria Menu`,
                    onClick: () => i(!r),
                    "aria-expanded": r,
                    className: `flex items-center justify-between font-semibold text-slate-200`,
                    children: [`Consultoria ISO `, m.jsx(qt, { size: 18 })],
                  }),
                  r &&
                    m.jsxs(`div`, {
                      className: `max-h-72 overflow-y-auto border-l-2 border-[#2F7D32] pl-4`,
                      children: [
                        m.jsx(`a`, {
                          id: `link-mobile-consultoria-all`,
                          href: `/consultoria`,
                          "data-event": `click_mobile_consultoria_all`,
                          "data-category": `navigation`,
                          "data-action": `click`,
                          "data-label": `Mobile All Consultorias`,
                          className: `block py-2 text-sm font-black text-slate-200`,
                          children: `Todas as consultorias ISO`,
                        }),
                        Z.map((e) =>
                          m.jsxs(
                            `a`,
                            {
                              id: `link-mobile-consultoria-${e.slug}`,
                              href: `/consultoria/${e.slug}`,
                              "data-event": `click_mobile_consultoria_norm`,
                              "data-category": `navigation`,
                              "data-action": `click`,
                              "data-label": `Mobile Consultoria ${e.code}`,
                              className: `block py-2 text-sm font-semibold text-slate-400`,
                              children: [e.code, ` - `, e.title],
                            },
                            e.slug,
                          ),
                        ),
                      ],
                    }),
                  m.jsxs(`button`, {
                    id: `btn-mobile-auditoria-menu`,
                    type: `button`,
                    "data-event": `toggle_mobile_auditoria_menu`,
                    "data-category": `navigation`,
                    "data-action": `click`,
                    "data-label": `Mobile Auditoria Menu`,
                    onClick: () => o(!a),
                    "aria-expanded": a,
                    className: `flex items-center justify-between font-semibold text-slate-200`,
                    children: [`Auditoria `, m.jsx(qt, { size: 18 })],
                  }),
                  a &&
                    m.jsx(`div`, {
                      className: `border-l-2 border-[#2F7D32] pl-4`,
                      children: Q.map((e) =>
                        m.jsx(
                          `a`,
                          {
                            id: `link-mobile-auditoria-${e.slug}`,
                            href: `/auditoria/${e.slug}`,
                            "data-event": `click_mobile_auditoria_type`,
                            "data-category": `navigation`,
                            "data-action": `click`,
                            "data-label": `Mobile Auditoria ${e.title}`,
                            className: `block py-2 text-sm font-semibold text-slate-400`,
                            children: e.title,
                          },
                          e.title,
                        ),
                      ),
                    }),
                  m.jsxs(`button`, {
                    id: `btn-mobile-treinamentos-menu`,
                    type: `button`,
                    "data-event": `toggle_mobile_treinamentos_menu`,
                    "data-category": `navigation`,
                    "data-action": `click`,
                    "data-label": `Mobile Treinamentos Menu`,
                    onClick: () => c(!s),
                    "aria-expanded": s,
                    className: `flex items-center justify-between font-semibold text-slate-200`,
                    children: [`Treinamentos `, m.jsx(qt, { size: 18 })],
                  }),
                  s &&
                    m.jsxs(`div`, {
                      className: `border-l-2 border-[#2F7D32] pl-4`,
                      children: [
                        m.jsx(`a`, {
                          id: `link-mobile-treinamentos-all`,
                          href: `/treinamentos`,
                          "data-event": `click_mobile_treinamentos_all`,
                          "data-category": `navigation`,
                          "data-action": `click`,
                          "data-label": `Mobile All Treinamentos`,
                          className: `block py-2 text-sm font-black text-slate-200`,
                          children: `Todos os treinamentos`,
                        }),
                        $.map((e) =>
                          m.jsx(
                            `a`,
                            {
                              id: `link-mobile-treinamento-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`,
                              href: `/treinamentos#cotacao`,
                              "data-event": `click_mobile_treinamento`,
                              "data-category": `navigation`,
                              "data-action": `click`,
                              "data-label": `Mobile Treinamento ${e.title}`,
                              className: `block py-2 text-sm font-semibold text-slate-400`,
                              children: e.title,
                            },
                            e.title,
                          ),
                        ),
                        m.jsx(`a`, {
                          id: `link-mobile-validacao-digital`,
                          href: `/validacao-digital`,
                          "data-event": `click_mobile_validacao_digital`,
                          "data-category": `navigation`,
                          "data-action": `click`,
                          "data-label": `Mobile Validação Digital`,
                          className: `block py-2 text-sm font-black text-[#C9FFD8]`,
                          children: `Validação Digital`,
                        }),
                      ],
                    }),
                  m.jsx(`button`, {
                    id: `btn-mobile-contact`,
                    type: `button`,
                    "data-event": `open_contact_modal_mobile`,
                    "data-category": `cta`,
                    "data-action": `click`,
                    "data-label": `Mobile Contact`,
                    onClick: () => u(!0),
                    className: `text-left font-semibold text-slate-200`,
                    children: `Contato`,
                  }),
                  m.jsx(`div`, {
                    className: `flex items-center justify-center gap-3 border-t border-white/10 pt-4`,
                    children: sr.map((e) => {
                      let t = hr[e.label];
                      return m.jsx(
                        `a`,
                        {
                          id: `link-mobile-social-${e.label.toLowerCase()}`,
                          href: e.href,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": e.label,
                          "data-event": `click_mobile_social`,
                          "data-category": `social`,
                          "data-action": `click`,
                          "data-label": `Mobile Social ${e.label}`,
                          className: `flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-[#68FF94]/40 hover:text-[#C9FFD8]`,
                          children: m.jsx(t, { size: 18 }),
                        },
                        e.label,
                      );
                    }),
                  }),
                  m.jsx(Un, {
                    id: `btn-mobile-quote`,
                    "data-event": `click_mobile_quote`,
                    "data-category": `cta`,
                    "data-action": `click`,
                    "data-label": `Mobile Solicitar Cotação`,
                    onClick: x,
                    className: `w-full rounded-full bg-white font-black text-[#0B2512] hover:bg-[#EAF7E8]`,
                    children: `Solicitar Cotação`,
                  }),
                ],
              }),
              "aria-label": `Menu móvel`,
            }),
        ],
      }),
      m.jsx(mr, { open: l, onClose: () => u(!1) }),
    ],
  });
}
var vr = `Olá! Quero falar com um consultor da Total Quality Group.`,
  yr = { LinkedIn: an, Instagram: nn, Facebook: Qt, YouTube: vn };
function br() {
  return m.jsxs(`footer`, {
    id: `contato`,
    className: `border-t border-[#68FF94]/10 bg-[radial-gradient(circle_at_12%_0%,rgba(104,255,148,0.08),transparent_28%),linear-gradient(180deg,#020C05_0%,#031109_48%,#020804_100%)] pt-12 text-white`,
    children: [
      m.jsxs(`div`, {
        className: `container`,
        children: [
          m.jsxs(`div`, {
            className: `mb-12 grid gap-6 rounded-2xl border border-[#68FF94]/18 bg-[radial-gradient(circle_at_18%_0%,rgba(104,255,148,0.13),transparent_30%),linear-gradient(145deg,#0D381C_0%,#082512_58%,#110B1D_100%)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.34)] md:p-8 lg:grid-cols-[1fr_auto] lg:items-center`,
            children: [
              m.jsxs(`div`, {
                className: `max-w-2xl`,
                children: [
                  m.jsx(`p`, {
                    className: `mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9FFD8]`,
                    children: `Cadastro e credibilidade`,
                  }),
                  m.jsx(`h3`, {
                    className: `text-2xl font-black leading-tight md:text-3xl`,
                    children: `Empresa com cadastro ativo no CRC Petrobras.`,
                  }),
                  m.jsx(`p`, {
                    className: `mt-3 text-sm leading-relaxed text-slate-300`,
                    children: `Empresa cadastrada no CRC Petrobras, reforçando credibilidade para atendimento a operações técnicas e ambientes regulados.`,
                  }),
                ],
              }),
              m.jsx(`div`, {
                className: `flex justify-center lg:justify-end`,
                children: m.jsx(`div`, {
                  className: `flex items-center justify-center rounded-2xl bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.32)] ring-4 ring-[#68FF94]/20`,
                  children: m.jsx(`img`, {
                    src: `/assets/PetrobrasLogo.webp`,
                    alt: `Empresa com cadastro ativo no CRC Petrobras`,
                    className: `h-36 w-auto object-contain`,
                    width: 150,
                    height: 150,
                    loading: `lazy`,
                    decoding: `async`,
                  }),
                }),
              }),
            ],
          }),
          m.jsxs(`div`, {
            className: `mb-12 grid gap-9 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1fr_1fr]`,
            children: [
              m.jsxs(`div`, {
                children: [
                  m.jsx(`div`, {
                    className: `mb-5 flex h-20 w-36 items-center justify-center rounded-xl border border-[#68FF94]/14 bg-[#020C05]/70 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.32)]`,
                    children: m.jsx(`img`, {
                      src: `/assets/LogoTotalQuality.webp`,
                      alt: `Total Quality Group Brasil`,
                      className: `h-[51px] w-[94px] object-contain`,
                      width: 94,
                      height: 51,
                      loading: `lazy`,
                      decoding: `async`,
                    }),
                  }),
                  m.jsx(`p`, {
                    className: `text-sm font-light leading-relaxed text-slate-400`,
                    children: `Consultoria, auditorias e treinamentos para Sistemas de gestão ISO, com atendimento nacional e matriz no Rio de Janeiro.`,
                  }),
                  m.jsx(`div`, {
                    className: `mt-5 grid max-w-xs grid-cols-2 gap-2`,
                    children: [
                      `Atendimento nacional`,
                      `Matriz RJ`,
                      `LGPD`,
                      `ISO`,
                    ].map((e) =>
                      m.jsx(
                        `span`,
                        {
                          className: `rounded-lg border border-[#68FF94]/12 bg-[#020C05]/52 px-3 py-2 text-xs font-semibold text-slate-300`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              m.jsxs(`nav`, {
                children: [
                  m.jsx(`h4`, {
                    className: `mb-5 text-sm font-bold uppercase tracking-wide`,
                    children: `Navegação`,
                  }),
                  m.jsxs(`div`, {
                    className: `space-y-2.5 text-sm text-slate-400`,
                    children: [
                      m.jsx(`a`, {
                        id: `link-footer-home`,
                        "data-event": `click_footer_nav_home`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Home`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/`,
                        children: `Home`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-empresa`,
                        "data-event": `click_footer_nav_empresa`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Empresa`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/empresa`,
                        children: `Empresa`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-consultoria`,
                        "data-event": `click_footer_nav_consultoria`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Consultoria ISO`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/consultoria`,
                        children: `Consultoria ISO`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-auditoria`,
                        "data-event": `click_footer_nav_auditoria`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Auditoria`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/auditoria`,
                        children: `Auditoria`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-treinamentos`,
                        "data-event": `click_footer_nav_treinamentos`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Treinamentos`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/treinamentos`,
                        children: `Treinamentos`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-codigo-conduta`,
                        "data-event": `click_footer_nav_codigo_conduta`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Código de Conduta`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/codigo-conduta`,
                        children: `Código de Conduta`,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-politica-privacidade`,
                        "data-event": `click_footer_nav_politica_privacidade`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Footer Política de Privacidade`,
                        className: `block hover:text-[#C9FFD8]`,
                        href: `/politica-privacidade`,
                        children: `Política de Privacidade`,
                      }),
                    ],
                  }),
                ],
                "aria-label": `Navegação`,
              }),
              m.jsxs(`div`, {
                children: [
                  m.jsx(`h4`, {
                    className: `mb-5 text-sm font-bold uppercase tracking-wide`,
                    children: `Contato`,
                  }),
                  m.jsxs(`div`, {
                    className: `space-y-3`,
                    children: [
                      m.jsx(`a`, {
                        id: `link-footer-email-commercial`,
                        href: `mailto:${tr}`,
                        "data-event": `click_footer_email_commercial`,
                        "data-category": `contact`,
                        "data-action": `click`,
                        "data-label": `Footer Commercial Email`,
                        className: `block rounded-lg border border-[#68FF94]/12 bg-[#020C05]/52 px-3 py-2 text-xs text-slate-300 hover:border-[#68FF94]/35 hover:text-[#C9FFD8]`,
                        children: tr,
                      }),
                      m.jsx(`a`, {
                        id: `link-footer-email-finance`,
                        href: `mailto:${nr}`,
                        "data-event": `click_footer_email_finance`,
                        "data-category": `contact`,
                        "data-action": `click`,
                        "data-label": `Footer Finance Email`,
                        className: `block rounded-lg border border-[#68FF94]/12 bg-[#020C05]/52 px-3 py-2 text-xs text-slate-300 hover:border-[#68FF94]/35 hover:text-[#C9FFD8]`,
                        children: nr,
                      }),
                    ],
                  }),
                  m.jsx(`div`, {
                    className: `mt-5 flex gap-3`,
                    children: sr.map((e) => {
                      let t = yr[e.label];
                      return m.jsx(
                        `a`,
                        {
                          id: `link-footer-social-${e.label.toLowerCase()}`,
                          href: e.href,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": e.label,
                          "data-event": `click_footer_social`,
                          "data-category": `social`,
                          "data-action": `click`,
                          "data-label": `Footer Social ${e.label}`,
                          className: `flex h-10 w-10 items-center justify-center rounded-lg border border-[#68FF94]/12 bg-[#020C05]/52 text-slate-300 hover:border-[#68FF94]/35 hover:text-[#C9FFD8]`,
                          children: m.jsx(t, { size: 18 }),
                        },
                        e.label,
                      );
                    }),
                  }),
                ],
              }),
              m.jsxs(`div`, {
                children: [
                  m.jsx(`h4`, {
                    className: `mb-5 text-sm font-bold uppercase tracking-wide`,
                    children: `WhatsApp`,
                  }),
                  m.jsxs(`a`, {
                    id: `btn-whatsapp-footer`,
                    href: cr(vr),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    "data-event": `click_whatsapp_footer`,
                    "data-category": `cta`,
                    "data-action": `click`,
                    "data-label": `WhatsApp Footer`,
                    className: `flex items-center gap-3 rounded-lg border border-[#68FF94]/18 bg-[#020C05]/52 px-3 py-3 text-sm text-slate-300 hover:border-[#68FF94]/35 hover:text-white`,
                    children: [
                      m.jsx(Zn, {
                        className: `h-5 w-5 shrink-0 text-[#25D366]`,
                      }),
                      m.jsxs(`span`, {
                        children: [
                          m.jsx(`strong`, {
                            className: `text-white`,
                            children: `WhatsApp principal`,
                          }),
                          m.jsx(`br`, {}),
                          er,
                        ],
                      }),
                    ],
                  }),
                  m.jsxs(`div`, {
                    className: `mt-5 border-t border-white/10 pt-4 text-xs text-slate-400`,
                    children: [
                      m.jsx(`span`, {
                        className: `font-bold uppercase tracking-wider text-[#C9FFD8]`,
                        children: `Operação`,
                      }),
                      m.jsx(`p`, {
                        className: `mt-1`,
                        children: `Nacional · Consultoria · Auditoria · Treinamentos`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          m.jsxs(`div`, {
            className: `flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row`,
            children: [
              m.jsx(`p`, {
                children: `© 2026 Total Quality Group Brasil. Todos os direitos reservados.`,
              }),
              m.jsxs(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  m.jsx(`span`, {
                    className: `text-[#C9FFD8]`,
                    children: `Segurança`,
                  }),
                  m.jsx(`span`, { className: `text-[#68FF94]`, children: `•` }),
                  m.jsx(`span`, { children: `Qualidade` }),
                  m.jsx(`span`, { className: `text-[#68FF94]`, children: `•` }),
                  m.jsx(`span`, {
                    className: `text-[#C9FFD8]`,
                    children: `Conformidade`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      m.jsx(fr, {}),
    ],
  });
}
var xr = `Total Quality Group Brasil`,
  Sr = `https://totalqualitygroupbrasil.com.br`,
  Cr = `${Sr}/assets/fundo-hero.jpg`;
function wr({
  title: e,
  description: t,
  path: n = `/`,
  image: r = Cr,
  type: i = `website`,
  noIndex: a = !1,
  structuredData: o,
}) {
  let s = Sr + n,
    c = e.includes(xr) ? e : e + ` | Total Quality Group Brasil`,
    l = r.startsWith(`https://`) ? r : Sr + r,
    u = {
      description: t,
      robots: a ? `noindex, follow` : `index, follow`,
      "twitter:card": `summary_large_image`,
      "twitter:title": c,
      "twitter:description": t,
      "twitter:image": l,
    },
    d = {
      title: c,
      description: t,
      type: i,
      url: s,
      site_name: xr,
      locale: `pt_BR`,
      image: l,
    };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(`title`, { children: c }),
      m.jsx(`link`, { rel: `canonical`, href: s }),
      ...Object.entries(u).map(([e, t]) =>
        m.jsx(`meta`, { name: e, content: t }, e),
      ),
      ...Object.entries(d).map(([e, t]) =>
        m.jsx(`meta`, { property: `og:` + e, content: t }, e),
      ),
      o &&
        m.jsx(`script`, {
          type: `application/ld+json`,
          id: `page-structured-data`,
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(o).replaceAll(`<`, `\\u003c`),
          },
        }),
    ],
  });
}
function Tr({
  title: e = `Solicitar cotação`,
  context: t = `consultoria, auditoria ou treinamento ISO`,
  serviceScope: n = `all`,
  initialService: r,
}) {
  let i = S.useRef(!1),
    [a, o] = S.useState(!1),
    s =
      n === `auditoria`
        ? `Auditoria - ${Q[0].title}`
        : n === `treinamento`
          ? `Treinamento - ${$[0].title}`
          : `Consultoria ISO - ${Z[0].code}`,
    [c, l] = S.useState({
      name: ``,
      company: ``,
      service: r || s,
      phone: ``,
      email: ``,
      message: ``,
    }),
    [u, d] = S.useState(!1),
    [f, p] = S.useState(!1),
    h = `${n}-${t}`
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``)
      .slice(0, 72),
    g = async (n) => {
      if ((n.preventDefault(), i.current)) {
        n.stopPropagation();
        return;
      }
      ((i.current = !0), o(!0));
      let r = [
        `Olá! Quero solicitar uma proposta para ${t}.`,
        `Nome: ${c.name}`,
        `Empresa: ${c.company}`,
        `Whatsapp: ${c.phone}`,
        `E-mail: ${c.email}`,
        `Serviço de interesse: ${c.service}`,
        c.message ? `Mensagem: ${c.message}` : ``,
      ].filter(Boolean).join(`
`);
      p(!1);
      try {
        (await lr({
          subject: `Solicitação de proposta - ${c.service}`,
          source: e,
          name: c.name,
          company: c.company,
          phone: c.phone,
          email: c.email,
          service: c.service,
          message: r,
        }),
          d(!0));
      } catch {
        (p(!0), d(!1));
      } finally {
        ((i.current = !1), o(!1));
      }
    },
    _ = `min-h-11 rounded-lg border border-white/10 bg-[#031109]/70 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#68FF94] md:py-3`;
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(`form`, {
        id: `form-proposal-${h}`,
        "data-event": `submit_proposal_form`,
        "data-category": `form`,
        "data-action": `submit`,
        "data-label": `Proposal Form - ${t}`,
        onSubmit: g,
        className: `rounded-xl border border-white/10 bg-[#102E18]/92 p-4 shadow-[0_22px_60px_rgba(0,0,0,.3)] backdrop-blur md:rounded-2xl md:p-6`,
        children: [
          m.jsxs(`div`, {
            className: `mb-4 flex items-center gap-3 md:mb-5`,
            children: [
              m.jsx(`span`, {
                className: `flex h-11 w-11 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-[#C9FFD8] shadow-[0_0_24px_rgba(104,255,148,0.12)]`,
                children: m.jsx(sn, { size: 22 }),
              }),
              m.jsxs(`div`, {
                children: [
                  m.jsx(`h3`, {
                    className: `text-xl font-black text-white`,
                    children: e,
                  }),
                  m.jsx(`p`, {
                    className: `text-sm text-slate-400`,
                    children: `Envio direto para o e-mail comercial`,
                  }),
                ],
              }),
            ],
          }),
          m.jsxs(`div`, {
            className: `grid gap-3`,
            children: [
              m.jsxs(`label`, {
                className: `field-label`,
                children: [
                  `Nome`,
                  m.jsx(`input`, {
                    required: !0,
                    value: c.name,
                    onChange: (e) => l({ ...c, name: e.target.value }),
                    placeholder: `Nome`,
                    className: _,
                  }),
                ],
              }),
              m.jsxs(`label`, {
                className: `field-label`,
                children: [
                  `Empresa`,
                  m.jsx(`input`, {
                    required: !0,
                    value: c.company,
                    onChange: (e) => l({ ...c, company: e.target.value }),
                    placeholder: `Empresa`,
                    className: _,
                  }),
                ],
              }),
              m.jsxs(`label`, {
                className: `field-label`,
                children: [
                  `WhatsApp`,
                  m.jsx(`input`, {
                    required: !0,
                    value: c.phone,
                    onChange: (e) => l({ ...c, phone: e.target.value }),
                    placeholder: `Whatsapp`,
                    className: _,
                  }),
                ],
              }),
              m.jsxs(`label`, {
                className: `grid gap-1 text-sm font-semibold text-slate-200`,
                children: [
                  `E-mail `,
                  m.jsx(`span`, {
                    className: `text-xs text-[#C9FFD8]`,
                    children: `*Obrigatório`,
                  }),
                  m.jsx(`input`, {
                    required: !0,
                    type: `email`,
                    value: c.email,
                    onChange: (e) => l({ ...c, email: e.target.value }),
                    placeholder: `E-mail`,
                    className: _,
                  }),
                ],
              }),
              m.jsx(`div`, {
                children: m.jsxs(`label`, {
                  className: `field-label`,
                  children: [
                    `Serviço de interesse`,
                    m.jsxs(`select`, {
                      value: c.service,
                      onChange: (e) => l({ ...c, service: e.target.value }),
                      "aria-label": `Serviço de interesse`,
                      className: `${_} w-full`,
                      children: [
                        (n === `all` || n === `consultoria`) &&
                          m.jsx(`optgroup`, {
                            label: `Consultoria ISO`,
                            children: Z.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Consultoria ISO - ${e.code}`,
                                  children: [`Consultoria ISO - `, e.code],
                                },
                                e.slug,
                              ),
                            ),
                          }),
                        (n === `all` || n === `auditoria`) &&
                          m.jsx(`optgroup`, {
                            label: `Auditoria`,
                            children: Q.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Auditoria - ${e.title}`,
                                  children: [`Auditoria - `, e.title],
                                },
                                e.slug,
                              ),
                            ),
                          }),
                        (n === `all` || n === `treinamento`) &&
                          m.jsx(`optgroup`, {
                            label: `Treinamento`,
                            children: $.map((e) =>
                              m.jsxs(
                                `option`,
                                {
                                  value: `Treinamento - ${e.title}`,
                                  children: [`Treinamento - `, e.title],
                                },
                                e.title,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              m.jsxs(`label`, {
                className: `field-label`,
                children: [
                  `Mensagem`,
                  m.jsx(`textarea`, {
                    value: c.message,
                    onChange: (e) => l({ ...c, message: e.target.value }),
                    placeholder: `Mensagem`,
                    rows: 3,
                    className: `${_} resize-none`,
                  }),
                ],
              }),
            ],
          }),
          m.jsxs(`button`, {
            id: `btn-submit-proposal-${h}`,
            type: `submit`,
            disabled: a,
            "data-event": `submit_proposal_form_button`,
            "data-category": `form`,
            "data-action": `submit`,
            "data-label": `Submit Proposal - ${t}`,
            className: `mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2F7D32] px-5 py-2.5 text-sm font-black uppercase text-white shadow-[0_4px_20px_rgba(47,125,50,.35)] transition-all hover:-translate-y-px hover:bg-[#256B2C] md:py-3 md:text-base`,
            children: [`Solicitar proposta `, m.jsx(Bt, { size: 18 })],
          }),
          f &&
            m.jsx(`div`, {
              className: `mt-3 rounded-lg border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100`,
              children: `Não foi possível enviar agora. Tente novamente ou chame pelo WhatsApp.`,
              role: `alert`,
            }),
        ],
      }),
      m.jsx(pr, { open: u, onClose: () => d(!1) }),
    ],
  });
}
var Er = { LinkedIn: an, Instagram: nn, Facebook: Qt, YouTube: vn };
function Dr() {
  let [e, t] = S.useState(!1);
  return (
    S.useEffect(() => {
      window.location.hash === `#como-funciona` &&
        requestAnimationFrame(() =>
          document
            .getElementById(`como-funciona`)
            ?.scrollIntoView({ behavior: `smooth`, block: `start` }),
        );
    }, []),
    m.jsxs(`div`, {
      className: `min-h-screen flex flex-col bg-[#031109] text-white`,
      children: [
        m.jsx(wr, {
          title: `Consultoria ISO, Auditorias e Treinamentos`,
          description: `Total Quality Group Brasil: consultoria ISO, auditorias e treinamentos em Sistemas de Gestão. Atendimento nacional e matriz no Rio de Janeiro.`,
          path: `/`,
          keywords: [
            `consultoria ISO`,
            `auditoria ISO`,
            `treinamento ISO`,
            `ISO 9001`,
            `ISO 14001`,
            `ISO 45001`,
            `Total Quality Group Brasil`,
          ],
          structuredData: {
            "@context": `https://schema.org`,
            "@type": `ProfessionalService`,
            name: `Total Quality Group Brasil`,
            url: `https://totalqualitygroupbrasil.com.br/`,
            image: `https://totalqualitygroupbrasil.com.br/assets/fundo-hero.jpg`,
            address: {
              "@type": `PostalAddress`,
              streetAddress: `Estrada dos Três Rios, 958 - Freguesia, Jacarepaguá`,
              addressLocality: `Rio de Janeiro`,
              addressRegion: `RJ`,
              postalCode: `22745-005`,
              addressCountry: `BR`,
            },
            areaServed: `Brasil`,
            serviceType: [
              `Consultoria ISO`,
              `Auditorias em Sistemas de Gestão`,
              `Treinamentos SGI`,
            ],
          },
        }),
        m.jsx(_r, {}),
        m.jsxs(`main`, {
          id: `conteudo`,
          tabIndex: -1,
          className: `flex flex-1 flex-col min-w-0`,
          children: [
            m.jsxs(`section`, {
              id: `home`,
              className: `industrial-hero relative flex min-h-0 items-center overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:min-h-[100svh]`,
              children: [
                m.jsxs(`picture`, {
                  className: `hero-picture`,
                  children: [
                    m.jsx(`source`, {
                      media: `(max-width: 639px)`,
                      type: `image/avif`,
                      srcSet: `/assets/hero-green-global-mobile.avif 960w`,
                      sizes: `100vw`,
                      width: 960,
                      height: 540,
                    }),
                    m.jsx(`source`, {
                      media: `(max-width: 639px)`,
                      type: `image/webp`,
                      srcSet: `/assets/hero-green-global-mobile.webp 960w`,
                      sizes: `100vw`,
                      width: 960,
                      height: 540,
                    }),
                    m.jsx(`source`, {
                      type: `image/avif`,
                      srcSet: `/assets/hero-green-global.avif 1672w`,
                      sizes: `100vw`,
                    }),
                    m.jsx(`img`, {
                      src: `/assets/hero-green-global.webp`,
                      srcSet: `/assets/hero-green-global.webp 1672w`,
                      sizes: `100vw`,
                      width: 1672,
                      height: 941,
                      fetchPriority: `high`,
                      alt: ``,
                    }),
                  ],
                }),
                m.jsx(`div`, { className: `absolute inset-0 bg-[#031109]/45` }),
                m.jsx(`div`, {
                  className: `absolute inset-0 bg-gradient-to-b from-[#031109]/78 via-transparent to-[#031109]`,
                }),
                m.jsx(`div`, {
                  className: `absolute inset-x-5 bottom-10 top-32 rounded-[2rem] border border-[#F6FFF5]/18 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.12)_48%,transparent_56%)] opacity-40`,
                }),
                m.jsx(`div`, {
                  className: `container pointer-events-none absolute inset-x-0 top-[15.1rem] z-20 hidden justify-end xl:flex`,
                  children: m.jsxs(`div`, {
                    className: `pointer-events-auto flex items-center gap-3 rounded-full border border-white/12 bg-[#0B2512]/62 px-3 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md`,
                    children: [
                      sr.map((e) => {
                        let t = Er[e.label];
                        return m.jsx(
                          `a`,
                          {
                            id: `link-home-social-${e.label.toLowerCase()}`,
                            href: e.href,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            "aria-label": e.label,
                            "data-event": `click_home_social`,
                            "data-category": `social`,
                            "data-action": `click`,
                            "data-label": `Home Social ${e.label}`,
                            className: `flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-slate-200 transition hover:-translate-y-0.5 hover:border-[#68FF94]/50 hover:bg-[#0B2512]/90 hover:text-[#C9FFD8]`,
                            children: m.jsx(t, { size: 20 }),
                          },
                          e.label,
                        );
                      }),
                      m.jsx(fr, { variant: `inline` }),
                    ],
                  }),
                }),
                m.jsx(`div`, {
                  className: `container relative z-10 flex justify-center py-7 sm:py-10 md:py-16`,
                  children: m.jsxs(`div`, {
                    className: `mx-auto max-w-5xl text-center`,
                    children: [
                      m.jsxs(`p`, {
                        className: `mx-auto mb-4 max-w-[22rem] text-center text-[0.62rem] font-black uppercase leading-relaxed tracking-[0.16em] text-[#C9FFD8] sm:mb-5 sm:max-w-none sm:text-xs sm:tracking-[0.18em]`,
                        children: [
                          m.jsx(`span`, {
                            className: `text-white`,
                            children: `Total Quality Group Brasil`,
                          }),
                          m.jsx(`span`, {
                            className: `mx-2 text-[#68FF94]`,
                            children: `-`,
                          }),
                          m.jsx(`span`, {
                            className: `text-[#C9FFD8]`,
                            children: `Consultoria para Certificação ISO`,
                          }),
                        ],
                      }),
                      m.jsxs(`h1`, {
                        className: `mb-6 font-heading text-[clamp(2.45rem,9vw,5.9rem)] font-black leading-[0.92]`,
                        children: [
                          m.jsx(`span`, {
                            className: `hero-title-shine block bg-clip-text text-transparent drop-shadow-[0_4px_22px_rgba(255,255,255,0.12)]`,
                            children: `TOTAL`,
                          }),
                          m.jsx(`span`, {
                            className: `hero-title-shine block bg-clip-text text-transparent drop-shadow-[0_4px_22px_rgba(255,255,255,0.1)]`,
                            children: `QUALITY`,
                          }),
                          m.jsx(`span`, {
                            className: `block text-white drop-shadow-[0_3px_18px_rgba(255,255,255,0.12)]`,
                            children: `GROUP`,
                          }),
                        ],
                      }),
                      m.jsx(`p`, {
                        className: `mx-auto mb-4 max-w-3xl text-[0.74rem] font-black uppercase leading-relaxed tracking-[0.14em] text-[#F6FFF5] sm:text-sm sm:tracking-[0.18em] md:mb-5 md:text-base`,
                        children: `Consultoria ISO, Auditorias e Treinamentos para Empresas em Todo o Brasil`,
                      }),
                      m.jsx(`div`, {
                        className: `mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-[#68FF94] to-transparent`,
                      }),
                      m.jsx(`p`, {
                        className: `mx-auto mb-6 max-w-3xl text-[0.93rem] font-light leading-relaxed text-gray-200 sm:text-[clamp(.96rem,2vw,1.18rem)] md:mb-8`,
                        children: `Transformamos processos em resultados com consultoria, auditorias e treinamentos para implantação, implementação, manutenção e melhoria de Sistemas de Gestão ISO.`,
                      }),
                      m.jsxs(`div`, {
                        className: `flex flex-wrap items-center justify-center gap-2.5 sm:gap-3`,
                        children: [
                          m.jsx(`a`, {
                            id: `btn-home-hero-quote`,
                            href: `#cotacao`,
                            "data-event": `click_home_hero_quote`,
                            "data-category": `cta`,
                            "data-action": `click`,
                            "data-label": `Home Hero Solicitar Cotação`,
                            className: `inline-flex`,
                            children: m.jsxs(Un, {
                              className: `h-10 rounded-[8px] bg-white px-4 text-xs font-black text-[#0B2512] shadow-[0_12px_30px_rgba(255,255,255,0.18)] hover:bg-[#EAF7E8] sm:h-[3.25rem] sm:px-7 sm:text-sm`,
                              children: [
                                `Solicitar cotação `,
                                m.jsx(Bt, {
                                  className: `ml-1.5 sm:ml-2`,
                                  size: 15,
                                }),
                              ],
                            }),
                          }),
                          m.jsxs(Un, {
                            id: `btn-home-hero-contact`,
                            "data-event": `open_contact_modal_home_hero`,
                            "data-category": `cta`,
                            "data-action": `click`,
                            "data-label": `Home Hero Entrar em Contato`,
                            onClick: () => t(!0),
                            className: `h-10 rounded-[8px] border border-white/25 bg-[#0B2512]/72 px-4 text-xs font-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:border-[#68FF94]/45 hover:bg-white/[0.1] sm:h-[3.25rem] sm:px-7 sm:text-sm`,
                            children: [
                              m.jsx(sn, {
                                className: `mr-1.5 text-[#C9FFD8] sm:mr-2`,
                                size: 16,
                              }),
                              `Entrar em contato`,
                            ],
                          }),
                        ],
                      }),
                      m.jsx(`div`, {
                        className: `mx-auto mt-7 flex max-w-[32rem] flex-col items-center gap-2 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 md:mt-8 md:pt-6`,
                        children: [
                          `12+ anos`,
                          `1000+ empresas`,
                          `Atendimento nacional`,
                        ].map((e) =>
                          m.jsxs(
                            `span`,
                            {
                              className: `flex min-h-5 items-center justify-center gap-2 text-center text-xs text-gray-300`,
                              children: [
                                m.jsx(`span`, {
                                  className: `h-1 w-1 rounded-full bg-[#B7E4C7]`,
                                }),
                                e,
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            m.jsx(`section`, {
              id: `como-funciona`,
              className: `section-pad bg-[#031109]`,
              children: m.jsxs(`div`, {
                className: `container`,
                children: [
                  m.jsxs(`div`, {
                    className: `mx-auto mb-12 max-w-3xl text-center`,
                    children: [
                      m.jsx(`p`, {
                        className: `section-kicker`,
                        children: `Como funciona`,
                      }),
                      m.jsx(`h2`, {
                        className: `section-title mt-3`,
                        children: `Etapas claras para sua Certificação ISO`,
                      }),
                      m.jsx(`p`, {
                        className: `mt-4 text-lg text-slate-400`,
                        children: `Diagnóstico, plano, implantação, Certificação e Melhoria Contínua.`,
                      }),
                    ],
                  }),
                  m.jsx(`div`, {
                    className: `grid gap-5 lg:grid-cols-5`,
                    children: ur.map((e, t) =>
                      m.jsxs(
                        `div`,
                        {
                          className: `relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(104,255,148,0.14),transparent_30%),linear-gradient(145deg,#0D381C_0%,#082512_58%,#110B1D_100%)] p-6 text-white shadow-[0_22px_52px_rgba(0,0,0,.32)]`,
                          children: [
                            m.jsx(`span`, {
                              className: `absolute -right-4 -top-4 text-8xl font-black text-white/[0.06]`,
                              children: t + 1,
                            }),
                            m.jsx(`div`, {
                              className: `mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-2xl font-black text-[#C9FFD8] shadow-[0_0_24px_rgba(104,255,148,0.12)]`,
                              children: t + 1,
                            }),
                            m.jsx(`h3`, {
                              className: `mb-3 text-xl font-black`,
                              children: e.title,
                            }),
                            m.jsx(`p`, {
                              className: `text-sm leading-relaxed text-slate-400`,
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
            m.jsx(Kn, {}),
            m.jsx(Xn, {}),
            m.jsx(`section`, {
              className: `section-pad bg-[#031109]`,
              children: m.jsxs(`div`, {
                className: `container`,
                children: [
                  m.jsxs(`div`, {
                    className: `mx-auto mb-12 max-w-3xl text-center`,
                    children: [
                      m.jsx(`p`, {
                        className: `section-kicker`,
                        children: `Soluções para sua empresa`,
                      }),
                      m.jsx(`h2`, {
                        className: `section-title mt-3`,
                        children: `Consultoria, auditoria e treinamento.`,
                      }),
                      m.jsx(`p`, {
                        className: `mt-4 text-lg text-slate-400`,
                        children: `Serviços personalizados para organizações de todos os portes e segmentos.`,
                      }),
                    ],
                  }),
                  m.jsx(`div`, {
                    className: `grid gap-5 md:grid-cols-3`,
                    children: [
                      {
                        icon: Xt,
                        title: `Consultoria em Sistemas de Gestão`,
                        text: `Implementação, manutenção e melhoria de Sistemas de Gestão de acordo com normas internacionais ISO.`,
                      },
                      {
                        icon: pn,
                        title: `Auditorias`,
                        text: `Auditorias de diagnóstico, internas, conformidade, fornecedores e preparação para Certificação.`,
                      },
                      {
                        icon: tn,
                        title: `Treinamentos`,
                        text: `Capacitação para colaboradores, gestores, auditores internos e auditores líderes.`,
                      },
                    ].map((e) => {
                      let t = e.icon;
                      return m.jsxs(
                        `div`,
                        {
                          className: `dark-card rounded-2xl p-6 card-hover`,
                          children: [
                            m.jsx(`div`, {
                              className: `mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#68FF94]/18 bg-[#68FF94]/12 text-[#C9FFD8] shadow-[0_0_24px_rgba(104,255,148,0.12)]`,
                              children: m.jsx(t, { size: 26 }),
                            }),
                            m.jsx(`h3`, {
                              className: `mb-3 text-xl font-black text-white`,
                              children: e.title,
                            }),
                            m.jsx(`p`, {
                              className: `text-sm leading-relaxed text-slate-400`,
                              children: e.text,
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
            m.jsx(`section`, {
              className: `iso-gradient-section section-pad relative overflow-hidden text-white`,
              children: m.jsxs(`div`, {
                className: `container relative z-10`,
                children: [
                  m.jsxs(`div`, {
                    className: `mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between`,
                    children: [
                      m.jsxs(`div`, {
                        children: [
                          m.jsx(`p`, {
                            className: `text-xs font-bold uppercase tracking-[0.2em] text-white`,
                            children: `Normas ISO atendidas`,
                          }),
                          m.jsx(`h2`, {
                            className: `mt-3 text-[clamp(2rem,9vw,3rem)] font-black leading-tight md:text-5xl`,
                            children: `Qual consultoria ISO sua empresa precisa?`,
                          }),
                        ],
                      }),
                      m.jsxs(`a`, {
                        id: `link-home-consultoria-all`,
                        href: `/consultoria`,
                        "data-event": `click_home_consultoria_all`,
                        "data-category": `navigation`,
                        "data-action": `click`,
                        "data-label": `Home Ver Todas Consultorias`,
                        className: `inline-flex w-fit items-center gap-2 text-sm font-black uppercase text-white md:text-base`,
                        children: [`Ver todas `, m.jsx(Bt, { size: 18 })],
                      }),
                    ],
                  }),
                  m.jsx(`div`, {
                    className: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
                    children: Z.map((e) => {
                      let t = e.icon;
                      return m.jsxs(
                        `a`,
                        {
                          id: `card-home-consultoria-${e.slug}`,
                          href: `/consultoria/${e.slug}`,
                          "data-event": `click_home_consultoria_card`,
                          "data-category": `card`,
                          "data-action": `click`,
                          "data-label": `Home Consultoria ${e.code}`,
                          className: `group flex min-h-28 gap-4 rounded-xl border border-[#68FF94]/10 bg-[#020C05]/88 p-4 shadow-[0_20px_44px_rgba(0,0,0,.26)] transition-all hover:-translate-y-1 hover:border-[#68FF94]/28 hover:bg-[#061A0C] hover:shadow-[0_24px_55px_rgba(0,0,0,.34)] md:min-h-32 md:rounded-2xl md:p-5`,
                          children: [
                            m.jsx(`span`, {
                              className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-[#1F8A4C]`,
                              children: m.jsx(t, { size: 28 }),
                            }),
                            m.jsxs(`span`, {
                              children: [
                                m.jsx(`strong`, {
                                  className: `block text-lg`,
                                  children: e.code,
                                }),
                                m.jsx(`span`, {
                                  className: `block text-sm leading-snug text-white/78`,
                                  children: e.title,
                                }),
                                m.jsxs(`span`, {
                                  className: `mt-3 inline-flex items-center gap-1 text-xs font-black uppercase text-[#C9FFD8]`,
                                  children: [
                                    `Saiba mais `,
                                    m.jsx(Bt, { size: 14 }),
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
            m.jsx(`section`, {
              id: `cotacao`,
              className: `section-pad bg-[#0B2512]`,
              children: m.jsxs(`div`, {
                className: `container grid gap-12 lg:grid-cols-2 lg:items-center`,
                children: [
                  m.jsxs(`div`, {
                    children: [
                      m.jsx(`p`, {
                        className: `section-kicker`,
                        children: `Casos atendidos`,
                      }),
                      m.jsx(`h2`, {
                        className: `section-title mt-3`,
                        children: `Quais empresas buscam ter a Certificação ISO?`,
                      }),
                      m.jsx(`p`, {
                        className: `mt-5 text-lg leading-relaxed text-slate-400`,
                        children: `Empresas que precisam comprovar qualidade, reduzir riscos, atender clientes exigentes, participar de contratos, fortalecer governança ou padronizar processos.`,
                      }),
                      m.jsx(`div`, {
                        className: `mt-8 grid gap-4 sm:grid-cols-2`,
                        children: [
                          {
                            icon: $t,
                            text: `Indústrias, óleo e gás, alimentos e construção civil`,
                          },
                          {
                            icon: Gt,
                            text: `Empresas de serviços, tecnologia, facilities e saúde`,
                          },
                          {
                            icon: gn,
                            text: `Organizações com fornecedores e contratos críticos`,
                          },
                          {
                            icon: Jt,
                            text: `Negócios que precisam demonstrar conformidade`,
                          },
                        ].map((e) => {
                          let t = e.icon;
                          return m.jsxs(
                            `div`,
                            {
                              className: `dark-card rounded-2xl p-5`,
                              children: [
                                m.jsx(t, { className: `mb-3 text-[#C9FFD8]` }),
                                m.jsx(`p`, {
                                  className: `font-semibold text-slate-300`,
                                  children: e.text,
                                }),
                              ],
                            },
                            e.text,
                          );
                        }),
                      }),
                    ],
                  }),
                  m.jsx(Tr, {
                    title: `Solicitar cotação`,
                    context: `cotação de consultoria, auditoria ou treinamento`,
                  }),
                ],
              }),
            }),
            m.jsx(`section`, {
              className: `section-pad bg-[#031109]`,
              children: m.jsxs(`div`, {
                className: `container`,
                children: [
                  m.jsxs(`div`, {
                    className: `mx-auto mb-12 max-w-3xl text-center`,
                    children: [
                      m.jsx(`p`, {
                        className: `section-kicker`,
                        children: `Sobre nós`,
                      }),
                      m.jsx(`h2`, {
                        className: `section-title mt-3`,
                        children: `Assessoria inteligente em Sistemas de Gestão`,
                      }),
                    ],
                  }),
                  m.jsx(`div`, {
                    className: `grid gap-5 md:grid-cols-4`,
                    children: [
                      [
                        `12+`,
                        `anos de atuação no Rio de Janeiro e atendimento nacional`,
                      ],
                      [
                        `Brasil`,
                        `consultoria presencial, híbrida e remota nas cinco regiões`,
                      ],
                      [
                        `ISO`,
                        `implementação, manutenção e melhoria de Sistemas de Gestão`,
                      ],
                      [
                        `Equipe`,
                        `consultores, auditores e técnicos qualificados`,
                      ],
                    ].map(([e, t]) =>
                      m.jsxs(
                        `div`,
                        {
                          className: `dark-card rounded-2xl p-6 text-center`,
                          children: [
                            m.jsx(`p`, {
                              className: `text-4xl font-black text-[#C9FFD8]`,
                              children: e,
                            }),
                            m.jsx(`p`, {
                              className: `mt-3 text-sm font-semibold text-slate-400`,
                              children: t,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        m.jsx(br, {}),
        m.jsx(mr, { open: e, onClose: () => t(!1) }),
      ],
    })
  );
}
var Or = [
  [`/`, null],
  [
    `/consultoria/:slug`,
    () => b(() => import(`./ISODetail-ZEEWkuXh.js`), __vite__mapDeps([0, 1])),
  ],
  [
    `/auditoria/:slug`,
    () => b(() => import(`./AuditDetail-wlskZTGW.js`), __vite__mapDeps([2, 1])),
  ],
  [`/auditoria`, () => b(() => import(`./Auditoria-JExepAFO.js`), [])],
  [`/consultoria`, () => b(() => import(`./Consultoria-aOLUa2Fw.js`), [])],
  [
    `/treinamentos`,
    () =>
      b(() => import(`./Treinamentos-tNHiCDzk.js`), __vite__mapDeps([3, 4])),
  ],
  [
    `/validacao-digital`,
    () =>
      b(
        () => import(`./ValidacaoDigital-SI2O0n5Q.js`),
        __vite__mapDeps([5, 4]),
      ),
  ],
  [
    `/certificados/auditor-lider`,
    () =>
      b(
        () =>
          import(`./CertificadoCursoValidacao-SsyZbunn.js`).then((e) => ({
            default: e.CertificadoAuditorLider,
          })),
        __vite__mapDeps([6, 4]),
      ),
  ],
  [
    `/certificados/auditor-interno`,
    () =>
      b(
        () =>
          import(`./CertificadoCursoValidacao-SsyZbunn.js`).then((e) => ({
            default: e.CertificadoAuditorInterno,
          })),
        __vite__mapDeps([6, 4]),
      ),
  ],
  [`/empresa`, () => b(() => import(`./Empresa-imHmqtVx.js`), [])],
  [
    `/politica-privacidade`,
    () => b(() => import(`./PoliticaPrivacidade-m6uXiOuU.js`), []),
  ],
  [`/codigo-conduta`, () => b(() => import(`./CodigoConduta-xZuOSVcL.js`), [])],
  [void 0, () => b(() => import(`./NotFound-KE-G0vm6.js`), [])],
].map(([e, t]) => ({ path: e, load: t, component: t ? S.lazy(t) : Dr }));
async function kr(e) {
  let t = Or.find(({ path: t }) => kt(Ge, t, e)[0]);
  t.load && (t.component = (await t.load()).default);
}
function Ar({ pathname: e } = {}) {
  return m.jsx(bn, {
    children: m.jsx(At, {
      ssrPath: e,
      children: m.jsxs(m.Fragment, {
        children: [
          m.jsx(`a`, {
            className: `skip-link`,
            href: `#conteudo`,
            children: `Pular para o conteúdo`,
          }),
          m.jsx(zn, {}),
          m.jsx(S.Suspense, {
            fallback: m.jsx(`div`, { className: `min-h-screen bg-[#031109]` }),
            children: m.jsx(Ft, {
              children: Or.map(({ path: e, component: t }) =>
                m.jsx(Nt, { path: e, component: t }, e || `404`),
              ),
            }),
          }),
        ],
      }),
    }),
  });
}
export {
  u as A,
  Tr as C,
  on as D,
  un as E,
  c as M,
  Gt as O,
  $ as S,
  _r as T,
  ur as _,
  Ar as a,
  br as b,
  Q as c,
  ar as d,
  cr as f,
  Bt as g,
  Ht as h,
  Ot as i,
  o as j,
  f as k,
  or as l,
  Un as m,
  Jt as n,
  Z as o,
  rr as p,
  S as r,
  Vt as s,
  We as t,
  X as u,
  pn as v,
  wr as w,
  kr as x,
  m as y,
};
