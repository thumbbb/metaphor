function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = [
            "./blue-pants.DuSqE58F.js",
            "./nuxt-layouts.C4ffjC9N.js",
            "./swiper-vue.e2OLCNzz.js",
            "./swiper-vue.Bs3d9ZnH.css",
            "./index.U7aCEuxp.js",
            "./index.BkT0jHNJ.css",
            "./error-404.Cy26Tr1V.js",
            "./vue.f36acd1f.BZig-5Yi.js",
            "./error-404.CoUbADi5.css",
            "./error-500.B_N-ZFT7.js",
            "./error-500.BXQ_YkC0.css"
        ]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import {
    e as Ot,
    r as ae,
    h as $t,
    g as So,
    i as K,
    t as Co,
    n as Pe,
    v as To,
    u as $,
    s as be,
    a as fe,
    b as Ke,
    d as Fe,
    c as q,
    f as te,
    p as ye,
    w as xt,
    K as Ao,
    j as Ho,
    m as xn,
    k as Ie,
    l as jn,
    o as Oo,
    q as $o,
    x as xo,
    y as jo,
    S as Ln,
    T as Lo,
    z as re,
    A as se,
    B as Mo,
    C as Io,
    D as Vt,
    E as No,
    F as Uo,
    G as Bo,
    H as Do,
    I as Wo
} from "./swiper-vue.e2OLCNzz.js"
const qo = /#/g,
    Ko = /&/g,
    Fo = /\//g,
    Vo = /=/g,
    jt = /\+/g,
    zo = /%5e/gi,
    Go = /%60/gi,
    Qo = /%7c/gi,
    Jo = /%20/gi
function Xo(e) {
    return encodeURI("" + e).replace(Qo, "|")
}
function dt(e) {
    return Xo(typeof e == "string" ? e : JSON.stringify(e))
        .replace(jt, "%2B")
        .replace(Jo, "+")
        .replace(qo, "%23")
        .replace(Ko, "%26")
        .replace(Go, "`")
        .replace(zo, "^")
        .replace(Fo, "%2F")
}
function ot(e) {
    return dt(e).replace(Vo, "%3D")
}
function Ne(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function Yo(e) {
    return Ne(e.replace(jt, " "))
}
function Zo(e) {
    return Ne(e.replace(jt, " "))
}
function er(e = "") {
    const t = {}
    e[0] === "?" && (e = e.slice(1))
    for (const n of e.split("&")) {
        const o = n.match(/([^=]+)=?(.*)/) || []
        if (o.length < 2) continue
        const r = Yo(o[1])
        if (r === "__proto__" || r === "constructor") continue
        const s = Zo(o[2] || "")
        t[r] === void 0 ? (t[r] = s) : Array.isArray(t[r]) ? t[r].push(s) : (t[r] = [t[r], s])
    }
    return t
}
function tr(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? (Array.isArray(t) ? t.map((n) => `${ot(e)}=${dt(n)}`).join("&") : `${ot(e)}=${dt(t)}`) : ot(e)
}
function nr(e) {
    return Object.keys(e)
        .filter((t) => e[t] !== void 0)
        .map((t) => tr(t, e[t]))
        .filter(Boolean)
        .join("&")
}
const or = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    rr = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    sr = /^([/\\]\s*){2,}[^/\\]/,
    ar = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    ir = /\/$|\/\?|\/#/,
    cr = /^\.?\//
function Se(e, t = {}) {
    return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? or.test(e) : rr.test(e) || (t.acceptRelative ? sr.test(e) : !1)
}
function lr(e) {
    return !!e && ar.test(e)
}
function ht(e = "", t) {
    return t ? ir.test(e) : e.endsWith("/")
}
function Lt(e = "", t) {
    if (!t) return (ht(e) ? e.slice(0, -1) : e) || "/"
    if (!ht(e, !0)) return e || "/"
    let n = e,
        o = ""
    const r = e.indexOf("#")
    r >= 0 && ((n = e.slice(0, r)), (o = e.slice(r)))
    const [s, ...i] = n.split("?")
    return (s.slice(0, -1) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + o
}
function pt(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/"
    if (ht(e, !0)) return e || "/"
    let n = e,
        o = ""
    const r = e.indexOf("#")
    if (r >= 0 && ((n = e.slice(0, r)), (o = e.slice(r)), !n)) return o
    const [s, ...i] = n.split("?")
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + o
}
function ur(e = "") {
    return e.startsWith("/")
}
function zt(e = "") {
    return ur(e) ? e : "/" + e
}
function fr(e, t) {
    if (In(t) || Se(e)) return e
    const n = Lt(t)
    return e.startsWith(n) ? e : Ce(n, e)
}
function Gt(e, t) {
    if (In(t)) return e
    const n = Lt(t)
    if (!e.startsWith(n)) return e
    const o = e.slice(n.length)
    return o[0] === "/" ? o : "/" + o
}
function Mn(e, t) {
    const n = Ve(e),
        o = { ...er(n.search), ...t }
    return (n.search = nr(o)), pr(n)
}
function In(e) {
    return !e || e === "/"
}
function dr(e) {
    return e && e !== "/"
}
function Ce(e, ...t) {
    let n = e || ""
    for (const o of t.filter((r) => dr(r)))
        if (n) {
            const r = o.replace(cr, "")
            n = pt(n) + r
        } else n = o
    return n
}
function hr(e, t, n = {}) {
    return n.trailingSlash || ((e = pt(e)), (t = pt(t))), n.leadingSlash || ((e = zt(e)), (t = zt(t))), n.encoding || ((e = Ne(e)), (t = Ne(t))), e === t
}
const Nn = Symbol.for("ufo:protocolRelative")
function Ve(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i)
    if (n) {
        const [, f, d = ""] = n
        return { protocol: f.toLowerCase(), pathname: d, href: f + d, auth: "", host: "", search: "", hash: "" }
    }
    if (!Se(e, { acceptRelative: !0 })) return t ? Ve(t + e) : Qt(e)
    const [, o = "", r, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [],
        [, i = "", l = ""] = s.match(/([^#/?]*)(.*)?/) || [],
        { pathname: c, search: u, hash: a } = Qt(l.replace(/\/(?=[A-Za-z]:)/, ""))
    return { protocol: o.toLowerCase(), auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "", host: i, pathname: c, search: u, hash: a, [Nn]: !o }
}
function Qt(e = "") {
    const [t = "", n = "", o = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1)
    return { pathname: t, search: n, hash: o }
}
function pr(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        o = e.hash || "",
        r = e.auth ? e.auth + "@" : "",
        s = e.host || ""
    return (e.protocol || e[Nn] ? (e.protocol || "") + "//" : "") + r + s + t + n + o
}
const mr = () => {
        var e
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    Ue = mr().app,
    yr = () => Ue.baseURL,
    gr = () => Ue.buildAssetsDir,
    Mt = (...e) => Ce(Un(), gr(), ...e),
    Un = (...e) => {
        const t = Ue.cdnURL || Ue.baseURL
        return e.length ? Ce(t, ...e) : t
    }
;(globalThis.__buildAssetsURL = Mt), (globalThis.__publicAssetsURL = Un)
const _r = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    vr = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    wr = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/
function br(e, t) {
    if (e === "__proto__" || (e === "constructor" && t && typeof t == "object" && "prototype" in t)) {
        Er(e)
        return
    }
    return t
}
function Er(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Be(e, t = {}) {
    if (typeof e != "string") return e
    const n = e.trim()
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\")) return n.slice(1, -1)
    if (n.length <= 9) {
        const o = n.toLowerCase()
        if (o === "true") return !0
        if (o === "false") return !1
        if (o === "undefined") return
        if (o === "null") return null
        if (o === "nan") return Number.NaN
        if (o === "infinity") return Number.POSITIVE_INFINITY
        if (o === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!wr.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON")
        return e
    }
    try {
        if (_r.test(e) || vr.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution")
            return JSON.parse(e, br)
        }
        return JSON.parse(e)
    } catch (o) {
        if (t.strict) throw o
        return e
    }
}
class Rr extends Error {
    constructor(t, n) {
        super(t, n), (this.name = "FetchError"), n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function kr(e) {
    var c, u, a, f, d
    const t = ((c = e.error) == null ? void 0 : c.message) || ((u = e.error) == null ? void 0 : u.toString()) || "",
        n = ((a = e.request) == null ? void 0 : a.method) || ((f = e.options) == null ? void 0 : f.method) || "GET",
        o = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
        r = `[${n}] ${JSON.stringify(o)}`,
        s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        i = `${r}: ${s}${t ? ` ${t}` : ""}`,
        l = new Rr(i, e.error ? { cause: e.error } : void 0)
    for (const h of ["request", "options", "response"])
        Object.defineProperty(l, h, {
            get() {
                return e[h]
            }
        })
    for (const [h, y] of [
        ["data", "_data"],
        ["status", "status"],
        ["statusCode", "status"],
        ["statusText", "statusText"],
        ["statusMessage", "statusText"]
    ])
        Object.defineProperty(l, h, {
            get() {
                return e.response && e.response[y]
            }
        })
    return l
}
const Pr = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]))
function Jt(e = "GET") {
    return Pr.has(e.toUpperCase())
}
function Sr(e) {
    if (e === void 0) return !1
    const t = typeof e
    return t === "string" || t === "number" || t === "boolean" || t === null
        ? !0
        : t !== "object"
        ? !1
        : Array.isArray(e)
        ? !0
        : e.buffer
        ? !1
        : (e.constructor && e.constructor.name === "Object") || typeof e.toJSON == "function"
}
const Cr = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    Tr = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function Ar(e = "") {
    if (!e) return "json"
    const t = e.split(";").shift() || ""
    return Tr.test(t) ? "json" : Cr.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Hr(e, t, n = globalThis.Headers) {
    const o = { ...t, ...e }
    if (
        (t != null && t.params && e != null && e.params && (o.params = { ...(t == null ? void 0 : t.params), ...(e == null ? void 0 : e.params) }),
        t != null && t.query && e != null && e.query && (o.query = { ...(t == null ? void 0 : t.query), ...(e == null ? void 0 : e.query) }),
        t != null && t.headers && e != null && e.headers)
    ) {
        o.headers = new n((t == null ? void 0 : t.headers) || {})
        for (const [r, s] of new n((e == null ? void 0 : e.headers) || {})) o.headers.set(r, s)
    }
    return o
}
const Or = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    $r = new Set([101, 204, 205, 304])
function Bn(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: o = globalThis.AbortController } = e
    async function r(l) {
        const c = (l.error && l.error.name === "AbortError" && !l.options.timeout) || !1
        if (l.options.retry !== !1 && !c) {
            let a
            typeof l.options.retry == "number" ? (a = l.options.retry) : (a = Jt(l.options.method) ? 0 : 1)
            const f = (l.response && l.response.status) || 500
            if (a > 0 && (Array.isArray(l.options.retryStatusCodes) ? l.options.retryStatusCodes.includes(f) : Or.has(f))) {
                const d = l.options.retryDelay || 0
                return d > 0 && (await new Promise((h) => setTimeout(h, d))), s(l.request, { ...l.options, retry: a - 1, timeout: l.options.timeout })
            }
        }
        const u = kr(l)
        throw (Error.captureStackTrace && Error.captureStackTrace(u, s), u)
    }
    const s = async function (c, u = {}) {
            var d
            const a = { request: c, options: Hr(u, e.defaults, n), response: void 0, error: void 0 }
            if (
                ((a.options.method = (d = a.options.method) == null ? void 0 : d.toUpperCase()),
                a.options.onRequest && (await a.options.onRequest(a)),
                typeof a.request == "string" &&
                    (a.options.baseURL && (a.request = fr(a.request, a.options.baseURL)),
                    (a.options.query || a.options.params) && (a.request = Mn(a.request, { ...a.options.params, ...a.options.query }))),
                a.options.body &&
                    Jt(a.options.method) &&
                    (Sr(a.options.body)
                        ? ((a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body)),
                          (a.options.headers = new n(a.options.headers || {})),
                          a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"),
                          a.options.headers.has("accept") || a.options.headers.set("accept", "application/json"))
                        : (("pipeTo" in a.options.body && typeof a.options.body.pipeTo == "function") || typeof a.options.body.pipe == "function") &&
                          ("duplex" in a.options || (a.options.duplex = "half"))),
                !a.options.signal && a.options.timeout)
            ) {
                const h = new o()
                setTimeout(() => h.abort(), a.options.timeout), (a.options.signal = h.signal)
            }
            try {
                a.response = await t(a.request, a.options)
            } catch (h) {
                return (a.error = h), a.options.onRequestError && (await a.options.onRequestError(a)), await r(a)
            }
            if (a.response.body && !$r.has(a.response.status) && a.options.method !== "HEAD") {
                const h = (a.options.parseResponse ? "json" : a.options.responseType) || Ar(a.response.headers.get("content-type") || "")
                switch (h) {
                    case "json": {
                        const y = await a.response.text(),
                            w = a.options.parseResponse || Be
                        a.response._data = w(y)
                        break
                    }
                    case "stream": {
                        a.response._data = a.response.body
                        break
                    }
                    default:
                        a.response._data = await a.response[h]()
                }
            }
            return (
                a.options.onResponse && (await a.options.onResponse(a)),
                !a.options.ignoreResponseError && a.response.status >= 400 && a.response.status < 600
                    ? (a.options.onResponseError && (await a.options.onResponseError(a)), await r(a))
                    : a.response
            )
        },
        i = async function (c, u) {
            return (await s(c, u))._data
        }
    return (i.raw = s), (i.native = (...l) => t(...l)), (i.create = (l = {}) => Bn({ ...e, defaults: { ...e.defaults, ...l } })), i
}
const It = (function () {
        if (typeof globalThis < "u") return globalThis
        if (typeof self < "u") return self
        if (typeof window < "u") return window
        if (typeof global < "u") return global
        throw new Error("unable to locate global object")
    })(),
    xr = It.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    jr = It.Headers,
    Lr = It.AbortController,
    Mr = Bn({ fetch: xr, Headers: jr, AbortController: Lr }),
    Ir = Mr
globalThis.$fetch || (globalThis.$fetch = Ir.create({ baseURL: yr() }))
function mt(e, t = {}, n) {
    for (const o in e) {
        const r = e[o],
            s = n ? `${n}:${o}` : o
        typeof r == "object" && r !== null ? mt(r, t, s) : typeof r == "function" && (t[s] = r)
    }
    return t
}
const Nr = { run: (e) => e() },
    Ur = () => Nr,
    Dn = typeof console.createTask < "u" ? console.createTask : Ur
function Br(e, t) {
    const n = t.shift(),
        o = Dn(n)
    return e.reduce((r, s) => r.then(() => o.run(() => s(...t))), Promise.resolve())
}
function Dr(e, t) {
    const n = t.shift(),
        o = Dn(n)
    return Promise.all(e.map((r) => o.run(() => r(...t))))
}
function rt(e, t) {
    for (const n of [...e]) n(t)
}
class Wr {
    constructor() {
        ;(this._hooks = {}),
            (this._before = void 0),
            (this._after = void 0),
            (this._deprecatedMessages = void 0),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this))
    }
    hook(t, n, o = {}) {
        if (!t || typeof n != "function") return () => {}
        const r = t
        let s
        for (; this._deprecatedHooks[t]; ) (s = this._deprecatedHooks[t]), (t = s.to)
        if (s && !o.allowDeprecated) {
            let i = s.message
            i || (i = `${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
                this._deprecatedMessages || (this._deprecatedMessages = new Set()),
                this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", { get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb", configurable: !0 })
            } catch {}
        return (
            (this._hooks[t] = this._hooks[t] || []),
            this._hooks[t].push(n),
            () => {
                n && (this.removeHook(t, n), (n = void 0))
            }
        )
    }
    hookOnce(t, n) {
        let o,
            r = (...s) => (typeof o == "function" && o(), (o = void 0), (r = void 0), n(...s))
        return (o = this.hook(t, r)), o
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const o = this._hooks[t].indexOf(n)
            o !== -1 && this._hooks[t].splice(o, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n
        const o = this._hooks[t] || []
        delete this._hooks[t]
        for (const r of o) this.hook(t, r)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t)
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = mt(t),
            o = Object.keys(n).map((r) => this.hook(r, n[r]))
        return () => {
            for (const r of o.splice(0, o.length)) r()
        }
    }
    removeHooks(t) {
        const n = mt(t)
        for (const o in n) this.removeHook(o, n[o])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(Br, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(Dr, t, ...n)
    }
    callHookWith(t, n, ...o) {
        const r = this._before || this._after ? { name: n, args: o, context: {} } : void 0
        this._before && rt(this._before, r)
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], o)
        return s instanceof Promise
            ? s.finally(() => {
                  this._after && r && rt(this._after, r)
              })
            : (this._after && r && rt(this._after, r), s)
    }
    beforeEach(t) {
        return (
            (this._before = this._before || []),
            this._before.push(t),
            () => {
                if (this._before !== void 0) {
                    const n = this._before.indexOf(t)
                    n !== -1 && this._before.splice(n, 1)
                }
            }
        )
    }
    afterEach(t) {
        return (
            (this._after = this._after || []),
            this._after.push(t),
            () => {
                if (this._after !== void 0) {
                    const n = this._after.indexOf(t)
                    n !== -1 && this._after.splice(n, 1)
                }
            }
        )
    }
}
function Wn() {
    return new Wr()
}
function qr(e = {}) {
    let t,
        n = !1
    const o = (i) => {
        if (t && t !== i) throw new Error("Context conflict")
    }
    let r
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage
        i ? (r = new i()) : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (r && t === void 0) {
            const i = r.getStore()
            if (i !== void 0) return i
        }
        return t
    }
    return {
        use: () => {
            const i = s()
            if (i === void 0) throw new Error("Context is not available")
            return i
        },
        tryUse: () => s(),
        set: (i, l) => {
            l || o(i), (t = i), (n = !0)
        },
        unset: () => {
            ;(t = void 0), (n = !1)
        },
        call: (i, l) => {
            o(i), (t = i)
            try {
                return r ? r.run(i, l) : l()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(i, l) {
            t = i
            const c = () => {
                    t = i
                },
                u = () => (t === i ? c : void 0)
            yt.add(u)
            try {
                const a = r ? r.run(i, l) : l()
                return n || (t = void 0), await a
            } finally {
                yt.delete(u)
            }
        }
    }
}
function Kr(e = {}) {
    const t = {}
    return {
        get(n, o = {}) {
            return t[n] || (t[n] = qr({ ...e, ...o })), t[n], t[n]
        }
    }
}
const De = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    Xt = "__unctx__",
    Fr = De[Xt] || (De[Xt] = Kr()),
    Vr = (e, t = {}) => Fr.get(e, t),
    Yt = "__unctx_async_handlers__",
    yt = De[Yt] || (De[Yt] = new Set())
function Ee(e) {
    const t = []
    for (const r of yt) {
        const s = r()
        s && t.push(s)
    }
    const n = () => {
        for (const r of t) r()
    }
    let o = e()
    return (
        o &&
            typeof o == "object" &&
            "catch" in o &&
            (o = o.catch((r) => {
                throw (n(), r)
            })),
        [o, n]
    )
}
const qn = Vr("nuxt-app", { asyncContext: !1 }),
    zr = "__nuxt_plugin"
function Gr(e) {
    let t = 0
    const n = {
        _scope: Ot(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.10.3"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: ae({ data: {}, state: {}, once: new Set(), _errors: {}, ...(window.__NUXT__ ?? {}) }),
        static: { data: {} },
        runWithContext: (r) => n._scope.run(() => Xr(n, r)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {}
            t++
            let r = !1
            return () => {
                if (!r && ((r = !0), t--, t === 0)) return (n.isHydrating = !1), n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    }
    ;(n.hooks = Wn()),
        (n.hook = n.hooks.hook),
        (n.callHook = n.hooks.callHook),
        (n.provide = (r, s) => {
            const i = "$" + r
            Oe(n, i, s), Oe(n.vueApp.config.globalProperties, i, s)
        }),
        Oe(n.vueApp, "$nuxt", n),
        Oe(n.vueApp.config.globalProperties, "$nuxt", n)
    {
        window.addEventListener("nuxt.preloadError", (s) => {
            n.callHook("app:chunkError", { error: s.payload })
        }),
            (window.useNuxtApp = window.useNuxtApp || j)
        const r = n.hook("app:error", (...s) => {
            console.error("[nuxt] error caught during app initialization", ...s)
        })
        n.hook("app:mounted", r)
    }
    const o = ae(n.payload.config)
    return n.provide("config", o), n
}
async function Qr(e, t) {
    if ((t.hooks && e.hooks.addHooks(t.hooks), typeof t == "function")) {
        const { provide: n } = (await e.runWithContext(() => t(e))) || {}
        if (n && typeof n == "object") for (const o in n) e.provide(o, n[o])
    }
}
async function Jr(e, t) {
    const n = [],
        o = [],
        r = [],
        s = []
    let i = 0
    async function l(c) {
        var a
        const u = ((a = c.dependsOn) == null ? void 0 : a.filter((f) => t.some((d) => d._name === f) && !n.includes(f))) ?? []
        if (u.length > 0) o.push([new Set(u), c])
        else {
            const f = Qr(e, c).then(async () => {
                c._name &&
                    (n.push(c._name),
                    await Promise.all(
                        o.map(async ([d, h]) => {
                            d.has(c._name) && (d.delete(c._name), d.size === 0 && (i++, await l(h)))
                        })
                    ))
            })
            c.parallel ? r.push(f.catch((d) => s.push(d))) : await f
        }
    }
    for (const c of t) await l(c)
    if ((await Promise.all(r), i)) for (let c = 0; c < i; c++) await Promise.all(r)
    if (s.length) throw s[0]
}
function Q(e) {
    if (typeof e == "function") return e
    const t = e._name || e.name
    return delete e.name, Object.assign(e.setup || (() => {}), e, { [zr]: !0, _name: t })
}
function Xr(e, t, n) {
    const o = () => (n ? t(...n) : t())
    return qn.set(e), e.vueApp.runWithContext(o)
}
function Yr() {
    var t
    let e
    return $t() && (e = (t = So()) == null ? void 0 : t.appContext.app.$nuxt), (e = e || qn.tryUse()), e || null
}
function j() {
    const e = Yr()
    if (!e) throw new Error("[nuxt] instance unavailable")
    return e
}
function Nt(e) {
    return j().$config
}
function Oe(e, t, n) {
    Object.defineProperty(e, t, { get: () => n })
}
function Zr(e, t) {
    return { ctx: { table: e }, matchAll: (n) => Fn(n, e, t) }
}
function Kn(e) {
    const t = {}
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([o, r]) => [o, Kn(r)])) : new Map(Object.entries(e[n]))
    return t
}
function es(e) {
    return Zr(Kn(e))
}
function Fn(e, t, n) {
    n !== !0 && e.endsWith("/") && (e = e.slice(0, -1) || "/")
    const o = []
    for (const [s, i] of Zt(t.wildcard)) (e === s || e.startsWith(s + "/")) && o.push(i)
    for (const [s, i] of Zt(t.dynamic))
        if (e.startsWith(s + "/")) {
            const l = "/" + e.slice(s.length).split("/").splice(2).join("/")
            o.push(...Fn(l, i))
        }
    const r = t.static.get(e)
    return r && o.push(r), o.filter(Boolean)
}
function Zt(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}
function st(e) {
    if (e === null || typeof e != "object") return !1
    const t = Object.getPrototypeOf(e)
    return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) || Symbol.iterator in e
        ? !1
        : Symbol.toStringTag in e
        ? Object.prototype.toString.call(e) === "[object Module]"
        : !0
}
function gt(e, t, n = ".", o) {
    if (!st(t)) return gt(e, {}, n, o)
    const r = Object.assign({}, t)
    for (const s in e) {
        if (s === "__proto__" || s === "constructor") continue
        const i = e[s]
        i != null &&
            ((o && o(r, s, i, n)) ||
                (Array.isArray(i) && Array.isArray(r[s]) ? (r[s] = [...i, ...r[s]]) : st(i) && st(r[s]) ? (r[s] = gt(i, r[s], (n ? `${n}.` : "") + s.toString(), o)) : (r[s] = i)))
    }
    return r
}
function Vn(e) {
    return (...t) => t.reduce((n, o) => gt(n, o, "", e), {})
}
const zn = Vn(),
    ts = Vn((e, t, n) => {
        if (e[t] !== void 0 && typeof n == "function") return (e[t] = n(e[t])), !0
    })
function ns(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var os = Object.defineProperty,
    rs = (e, t, n) => (t in e ? os(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    oe = (e, t, n) => (rs(e, typeof t != "symbol" ? t + "" : t, n), n)
class _t extends Error {
    constructor(t, n = {}) {
        super(t, n),
            oe(this, "statusCode", 500),
            oe(this, "fatal", !1),
            oe(this, "unhandled", !1),
            oe(this, "statusMessage"),
            oe(this, "data"),
            oe(this, "cause"),
            n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = { message: this.message, statusCode: wt(this.statusCode, 500) }
        return this.statusMessage && (t.statusMessage = Gn(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}
oe(_t, "__h3_error__", !0)
function vt(e) {
    if (typeof e == "string") return new _t(e)
    if (ss(e)) return e
    const t = new _t(e.message ?? e.statusMessage ?? "", { cause: e.cause || e })
    if (ns(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (
        (e.data && (t.data = e.data),
        e.statusCode ? (t.statusCode = wt(e.statusCode, t.statusCode)) : e.status && (t.statusCode = wt(e.status, t.statusCode)),
        e.statusMessage ? (t.statusMessage = e.statusMessage) : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
    ) {
        const n = t.statusMessage
        Gn(t.statusMessage) !== n &&
            console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}
function ss(e) {
    var t
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const as = /[^\u0009\u0020-\u007E]/g
function Gn(e = "") {
    return e.replace(as, "")
}
function wt(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const is = Symbol("layouts-meta"),
    ze = Symbol("route"),
    J = () => {
        var e
        return (e = j()) == null ? void 0 : e.$router
    },
    Qn = () => ($t() ? K(ze, j()._route) : j()._route)
const cs = () => {
        try {
            if (j()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    tc = (e, t) => {
        e || (e = "/")
        const n = typeof e == "string" ? e : Mn(e.path || "/", e.query || {}) + (e.hash || "")
        if (t != null && t.open) {
            {
                const { target: l = "_blank", windowFeatures: c = {} } = t.open,
                    u = Object.entries(c)
                        .filter(([a, f]) => f !== void 0)
                        .map(([a, f]) => `${a.toLowerCase()}=${f}`)
                        .join(", ")
                open(n, l, u)
            }
            return Promise.resolve()
        }
        const o = (t == null ? void 0 : t.external) || Se(n, { acceptRelative: !0 })
        if (o) {
            if (!(t != null && t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.")
            const l = Ve(n).protocol
            if (l && lr(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
        }
        const r = cs()
        if (!o && r) return e
        const s = J(),
            i = j()
        return o
            ? (i._scope.stop(), t != null && t.replace ? location.replace(n) : (location.href = n), r ? (i.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
            : t != null && t.replace
            ? s.replace(e)
            : s.push(e)
    },
    Jn = "__nuxt_error",
    Ge = () => Co(j().payload, "error"),
    ue = (e) => {
        const t = Qe(e)
        try {
            const n = j(),
                o = Ge()
            n.hooks.callHook("app:error", t), (o.value = o.value || t)
        } catch {
            throw t
        }
        return t
    },
    ls = async (e = {}) => {
        const t = j(),
            n = Ge()
        t.callHook("app:error:cleared", e), e.redirect && (await J().replace(e.redirect)), (n.value = null)
    },
    us = (e) => !!e && typeof e == "object" && Jn in e,
    Qe = (e) => {
        const t = vt(e)
        return Object.defineProperty(t, Jn, { value: !0, configurable: !1, writable: !1 }), t
    },
    fs = "modulepreload",
    ds = function (e, t) {
        return e[0] === "." ? new URL(e, t).href : e
    },
    en = {},
    hs = function (t, n, o) {
        let r = Promise.resolve()
        if (n && n.length > 0) {
            const s = document.getElementsByTagName("link")
            r = Promise.all(
                n.map((i) => {
                    if (((i = ds(i, o)), i in en)) return
                    en[i] = !0
                    const l = i.endsWith(".css"),
                        c = l ? '[rel="stylesheet"]' : ""
                    if (!!o)
                        for (let f = s.length - 1; f >= 0; f--) {
                            const d = s[f]
                            if (d.href === i && (!l || d.rel === "stylesheet")) return
                        }
                    else if (document.querySelector(`link[href="${i}"]${c}`)) return
                    const a = document.createElement("link")
                    if (((a.rel = l ? "stylesheet" : fs), l || ((a.as = "script"), (a.crossOrigin = "")), (a.href = i), document.head.appendChild(a), l))
                        return new Promise((f, d) => {
                            a.addEventListener("load", f), a.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${i}`)))
                        })
                })
            )
        }
        return r
            .then(() => t())
            .catch((s) => {
                const i = new Event("vite:preloadError", { cancelable: !0 })
                if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented)) throw s
            })
    },
    We = (...e) =>
        hs(...e).catch((t) => {
            const n = new Event("nuxt.preloadError")
            throw ((n.payload = t), window.dispatchEvent(n), t)
        }),
    ps = -1,
    ms = -2,
    ys = -3,
    gs = -4,
    _s = -5,
    vs = -6
function ws(e, t) {
    return bs(JSON.parse(e), t)
}
function bs(e, t) {
    if (typeof e == "number") return r(e, !0)
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input")
    const n = e,
        o = Array(n.length)
    function r(s, i = !1) {
        if (s === ps) return
        if (s === ys) return NaN
        if (s === gs) return 1 / 0
        if (s === _s) return -1 / 0
        if (s === vs) return -0
        if (i) throw new Error("Invalid input")
        if (s in o) return o[s]
        const l = n[s]
        if (!l || typeof l != "object") o[s] = l
        else if (Array.isArray(l))
            if (typeof l[0] == "string") {
                const c = l[0],
                    u = t == null ? void 0 : t[c]
                if (u) return (o[s] = u(r(l[1])))
                switch (c) {
                    case "Date":
                        o[s] = new Date(l[1])
                        break
                    case "Set":
                        const a = new Set()
                        o[s] = a
                        for (let h = 1; h < l.length; h += 1) a.add(r(l[h]))
                        break
                    case "Map":
                        const f = new Map()
                        o[s] = f
                        for (let h = 1; h < l.length; h += 2) f.set(r(l[h]), r(l[h + 1]))
                        break
                    case "RegExp":
                        o[s] = new RegExp(l[1], l[2])
                        break
                    case "Object":
                        o[s] = Object(l[1])
                        break
                    case "BigInt":
                        o[s] = BigInt(l[1])
                        break
                    case "null":
                        const d = Object.create(null)
                        o[s] = d
                        for (let h = 1; h < l.length; h += 2) d[l[h]] = r(l[h + 1])
                        break
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(l.length)
                o[s] = c
                for (let u = 0; u < l.length; u += 1) {
                    const a = l[u]
                    a !== ms && (c[u] = r(a))
                }
            }
        else {
            const c = {}
            o[s] = c
            for (const u in l) {
                const a = l[u]
                c[u] = r(a)
            }
        }
        return o[s]
    }
    return r(0)
}
function Es(e) {
    return Array.isArray(e) ? e : [e]
}
const Rs = ["title", "titleTemplate", "script", "style", "noscript"],
    je = ["base", "meta", "link", "style", "script", "noscript"],
    ks = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    Ps = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    Xn = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"],
    Ss = typeof window < "u"
function Ut(e) {
    let t = 9
    for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9)
    return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function tn(e) {
    return (
        e._h ||
        Ut(
            e._d
                ? e._d
                : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props)
                      .map(([t, n]) => `${t}:${String(n)}`)
                      .join(",")}`
        )
    )
}
function Yn(e, t) {
    const { props: n, tag: o } = e
    if (Ps.includes(o)) return o
    if (o === "link" && n.rel === "canonical") return "canonical"
    if (n.charset) return "charset"
    const r = ["id"]
    o === "meta" && r.push("name", "property", "http-equiv")
    for (const s of r)
        if (typeof n[s] < "u") {
            const i = String(n[s])
            return t && !t(i) ? !1 : `${o}:${s}:${i}`
        }
    return !1
}
function nn(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function Cs(e, t, n) {
    const o = {
        tag: e,
        props: await Zn(
            typeof t == "object" && typeof t != "function" && !(t instanceof Promise)
                ? { ...t }
                : { [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t },
            ["templateParams", "titleTemplate"].includes(e)
        )
    }
    return (
        Xn.forEach((r) => {
            const s = typeof o.props[r] < "u" ? o.props[r] : n[r]
            typeof s < "u" && ((!["innerHTML", "textContent", "children"].includes(r) || Rs.includes(o.tag)) && (o[r === "children" ? "innerHTML" : r] = s), delete o.props[r])
        }),
        o.props.body && ((o.tagPosition = "bodyClose"), delete o.props.body),
        o.tag === "script" && typeof o.innerHTML == "object" && ((o.innerHTML = JSON.stringify(o.innerHTML)), (o.props.type = o.props.type || "application/json")),
        Array.isArray(o.props.content) ? o.props.content.map((r) => ({ ...o, props: { ...o.props, content: r } })) : o
    )
}
function Ts(e, t) {
    const n = e === "class" ? " " : ";"
    return (
        typeof t == "object" &&
            !Array.isArray(t) &&
            (t = Object.entries(t)
                .filter(([, o]) => o)
                .map(([o, r]) => (e === "style" ? `${o}:${r}` : o))),
        (Array.isArray(t) ? t.join(n) : t)
            .split(n)
            .filter((o) => o.trim())
            .filter(Boolean)
            .join(n)
    )
}
async function Zn(e, t) {
    for (const n of Object.keys(e)) {
        if (["class", "style"].includes(n)) {
            e[n] = Ts(n, e[n])
            continue
        }
        if ((e[n] instanceof Promise && (e[n] = await e[n]), !t && !Xn.includes(n))) {
            const o = String(e[n]),
                r = n.startsWith("data-")
            o === "true" || o === "" ? (e[n] = r ? "true" : !0) : e[n] || (r && o === "false" ? (e[n] = "false") : delete e[n])
        }
    }
    return e
}
const As = 10
async function Hs(e) {
    const t = []
    return (
        Object.entries(e.resolvedInput)
            .filter(([n, o]) => typeof o < "u" && ks.includes(n))
            .forEach(([n, o]) => {
                const r = Es(o)
                t.push(...r.map((s) => Cs(n, s, e)).flat())
            }),
        (await Promise.all(t))
            .flat()
            .filter(Boolean)
            .map((n, o) => ((n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << As) + o), n))
    )
}
const on = { base: -10, title: 10 },
    rn = { critical: -80, high: -10, low: 20 }
function qe(e) {
    let t = 100
    const n = e.tagPriority
    return typeof n == "number"
        ? n
        : (e.tag === "meta"
              ? (e.props["http-equiv"] === "content-security-policy" && (t = -30), e.props.charset && (t = -20), e.props.name === "viewport" && (t = -15))
              : e.tag === "link" && e.props.rel === "preconnect"
              ? (t = 20)
              : e.tag in on && (t = on[e.tag]),
          typeof n == "string" && n in rn ? t + rn[n] : t)
}
const Os = [
        { prefix: "before:", offset: -1 },
        { prefix: "after:", offset: 1 }
    ],
    at = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
    Y = "%separator"
function Le(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e
    function o(i) {
        let l
        return (
            ["s", "pageTitle"].includes(i) ? (l = t.pageTitle) : i.includes(".") ? (l = i.split(".").reduce((c, u) => (c && c[u]) || void 0, t)) : (l = t[i]),
            typeof l < "u" ? (l || "").replace(/"/g, '\\"') : !1
        )
    }
    let r = e
    try {
        r = decodeURI(e)
    } catch {}
    return (
        (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
            .sort()
            .reverse()
            .forEach((i) => {
                const l = o(i.slice(1))
                typeof l == "string" && (e = e.replace(new RegExp(`\\${i}(\\W|$)`, "g"), (c, u) => `${l}${u}`).trim())
            }),
        e.includes(Y) &&
            (e.endsWith(Y) && (e = e.slice(0, -Y.length).trim()),
            e.startsWith(Y) && (e = e.slice(Y.length).trim()),
            (e = e.replace(new RegExp(`\\${Y}\\s*\\${Y}`, "g"), Y)),
            (e = Le(e, { separator: n }, n))),
        e
    )
}
async function eo(e, t = {}) {
    var a
    const n = t.document || e.resolvedOptions.document
    if (!n) return
    const o = { shouldRender: e.dirty, tags: [] }
    if ((await e.hooks.callHook("dom:beforeRender", o), !o.shouldRender)) return
    const r = (await e.resolveTags()).map((f) => ({ tag: f, id: je.includes(f.tag) ? tn(f) : f.tag, shouldRender: !0 }))
    let s = e._dom
    if (!s) {
        s = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } }
        for (const f of ["body", "head"]) {
            const d = (a = n[f]) == null ? void 0 : a.children,
                h = []
            for (const y of [...d].filter((w) => je.includes(w.tagName.toLowerCase()))) {
                const w = { tag: y.tagName.toLowerCase(), props: await Zn(y.getAttributeNames().reduce((v, k) => ({ ...v, [k]: y.getAttribute(k) }), {})), innerHTML: y.innerHTML }
                let E = 1,
                    m = Yn(w)
                for (; m && h.find((v) => v._d === m); ) m = `${m}:${E++}`
                ;(w._d = m || void 0), h.push(w), (s.elMap[y.getAttribute("data-hid") || tn(w)] = y)
            }
        }
    }
    ;(s.pendingSideEffects = { ...(s.sideEffects || {}) }), (s.sideEffects = {})
    function i(f, d, h) {
        const y = `${f}:${d}`
        ;(s.sideEffects[y] = h), delete s.pendingSideEffects[y]
    }
    function l({ id: f, $el: d, tag: h }) {
        const y = h.tag.endsWith("Attrs")
        ;(s.elMap[f] = d),
            y ||
                (["textContent", "innerHTML"].forEach((w) => {
                    h[w] && h[w] !== d[w] && (d[w] = h[w])
                }),
                i(f, "el", () => {
                    var w
                    ;(w = s.elMap[f]) == null || w.remove(), delete s.elMap[f]
                }))
        for (const [w, E] of Object.entries(h._eventHandlers || {})) (h.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(w.replace("on", ""), E.bind(d))
        Object.entries(h.props).forEach(([w, E]) => {
            const m = `attr:${w}`
            if (w === "class")
                for (const v of (E || "").split(" ").filter(Boolean)) y && i(f, `${m}:${v}`, () => d.classList.remove(v)), !d.classList.contains(v) && d.classList.add(v)
            else if (w === "style")
                for (const v of (E || "").split(";").filter(Boolean)) {
                    const [k, ...O] = v.split(":").map((S) => S.trim())
                    i(f, `${m}:${v}:${k}`, () => {
                        d.style.removeProperty(k)
                    }),
                        d.style.setProperty(k, O.join(":"))
                }
            else d.getAttribute(w) !== E && d.setAttribute(w, E === !0 ? "" : String(E)), y && i(f, m, () => d.removeAttribute(w))
        })
    }
    const c = [],
        u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
    for (const f of r) {
        const { tag: d, shouldRender: h, id: y } = f
        if (h) {
            if (d.tag === "title") {
                n.title = d.textContent
                continue
            }
            ;(f.$el = f.$el || s.elMap[y]), f.$el ? l(f) : je.includes(d.tag) && c.push(f)
        }
    }
    for (const f of c) {
        const d = f.tag.tagPosition || "head"
        ;(f.$el = n.createElement(f.tag.tag)), l(f), (u[d] = u[d] || n.createDocumentFragment()), u[d].appendChild(f.$el)
    }
    for (const f of r) await e.hooks.callHook("dom:renderTag", f, n, i)
    u.head && n.head.appendChild(u.head),
        u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
        u.bodyClose && n.body.appendChild(u.bodyClose),
        Object.values(s.pendingSideEffects).forEach((f) => f()),
        (e._dom = s),
        (e.dirty = !1),
        await e.hooks.callHook("dom:rendered", { renders: r })
}
async function $s(e, t = {}) {
    const n = t.delayFn || ((o) => setTimeout(o, 10))
    return (e._domUpdatePromise =
        e._domUpdatePromise ||
        new Promise((o) =>
            n(async () => {
                await eo(e, t), delete e._domUpdatePromise, o()
            })
        ))
}
function xs(e) {
    return (t) => {
        var o, r
        const n = ((r = (o = t.resolvedOptions.document) == null ? void 0 : o.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : r.innerHTML) || !1
        return (
            n && t.push(JSON.parse(n)),
            {
                mode: "client",
                hooks: {
                    "entries:updated": function (s) {
                        $s(s, e)
                    }
                }
            }
        )
    }
}
const js = ["templateParams", "htmlAttrs", "bodyAttrs"],
    Ls = {
        hooks: {
            "tag:normalise": function ({ tag: e }) {
                ;["hid", "vmid", "key"].forEach((o) => {
                    e.props[o] && ((e.key = e.props[o]), delete e.props[o])
                })
                const n = Yn(e) || (e.key ? `${e.tag}:${e.key}` : !1)
                n && (e._d = n)
            },
            "tags:resolve": function (e) {
                const t = {}
                e.tags.forEach((o) => {
                    const r = (o.key ? `${o.tag}:${o.key}` : o._d) || o._p,
                        s = t[r]
                    if (s) {
                        let l = o == null ? void 0 : o.tagDuplicateStrategy
                        if ((!l && js.includes(o.tag) && (l = "merge"), l === "merge")) {
                            const c = s.props
                            ;["class", "style"].forEach((u) => {
                                c[u] && (o.props[u] ? (u === "style" && !c[u].endsWith(";") && (c[u] += ";"), (o.props[u] = `${c[u]} ${o.props[u]}`)) : (o.props[u] = c[u]))
                            }),
                                (t[r].props = { ...c, ...o.props })
                            return
                        } else if (o._e === s._e) {
                            ;(s._duped = s._duped || []), (o._d = `${s._d}:${s._duped.length + 1}`), s._duped.push(o)
                            return
                        } else if (qe(o) > qe(s)) return
                    }
                    const i = Object.keys(o.props).length + (o.innerHTML ? 1 : 0) + (o.textContent ? 1 : 0)
                    if (je.includes(o.tag) && i === 0) {
                        delete t[r]
                        return
                    }
                    t[r] = o
                })
                const n = []
                Object.values(t).forEach((o) => {
                    const r = o._duped
                    delete o._duped, n.push(o), r && n.push(...r)
                }),
                    (e.tags = n),
                    (e.tags = e.tags.filter((o) => !(o.tag === "meta" && (o.props.name || o.props.property) && !o.props.content)))
            }
        }
    },
    Ms = {
        mode: "server",
        hooks: {
            "tags:resolve": function (e) {
                const t = {}
                e.tags
                    .filter((n) => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server")
                    .forEach((n) => {
                        t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
                    }),
                    Object.keys(t).length && e.tags.push({ tag: "script", innerHTML: JSON.stringify(t), props: { id: "unhead:payload", type: "application/json" } })
            }
        }
    },
    Is = ["script", "link", "bodyAttrs"],
    Ns = (e) => ({
        hooks: {
            "tags:resolve": function (t) {
                for (const n of t.tags.filter((o) => Is.includes(o.tag)))
                    Object.entries(n.props).forEach(([o, r]) => {
                        o.startsWith("on") &&
                            typeof r == "function" &&
                            (e.ssr && at.includes(o) ? ((n.props[o] = `this.dataset.${o} = true`), (n.props["data-unhead-events"] = "")) : delete n.props[o],
                            (n._eventHandlers = n._eventHandlers || {}),
                            (n._eventHandlers[o] = r))
                    }),
                        e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || Ut(n.props.src || n.props.href))
            },
            "dom:renderTag": function (t) {
                const n = t.$el
                if (!(n != null && n.dataset) || !("unheadEvents" in n.dataset)) return
                delete n.dataset.unheadEvents
                const o = (r) => {
                    var s, i
                    return (i = (s = t.tag._eventHandlers) == null ? void 0 : s[r]) == null ? void 0 : i.call(t.$el, new Event(r.replace("on", "")))
                }
                for (const r of Object.keys(n.dataset).filter((s) => at.includes(s))) o(r)
                typeof MutationObserver < "u" &&
                    new MutationObserver((s) => {
                        s.filter((i) => i.attributeName && at.includes(i.attributeName.replace("data-", "")))
                            .map((i) => i.attributeName.replace("data-", ""))
                            .map(o)
                    }).observe(t.$el, { attributes: !0 })
            }
        }
    }),
    Us = ["link", "style", "script", "noscript"],
    Bs = {
        hooks: {
            "tag:normalise": ({ tag: e }) => {
                e.key && Us.includes(e.tag) && (e.props["data-hid"] = e._h = Ut(e.key))
            }
        }
    },
    Ds = {
        hooks: {
            "tags:resolve": (e) => {
                const t = (n) => {
                    var o
                    return (o = e.tags.find((r) => r._d === n)) == null ? void 0 : o._p
                }
                for (const { prefix: n, offset: o } of Os)
                    for (const r of e.tags.filter((s) => typeof s.tagPriority == "string" && s.tagPriority.startsWith(n))) {
                        const s = t(r.tagPriority.replace(n, ""))
                        typeof s < "u" && (r._p = s + o)
                    }
                e.tags.sort((n, o) => n._p - o._p).sort((n, o) => qe(n) - qe(o))
            }
        }
    },
    Ws = { meta: "content", link: "href", htmlAttrs: "lang" },
    qs = (e) => ({
        hooks: {
            "tags:resolve": (t) => {
                var l
                const { tags: n } = t,
                    o = (l = n.find((c) => c.tag === "title")) == null ? void 0 : l.textContent,
                    r = n.findIndex((c) => c.tag === "templateParams"),
                    s = r !== -1 ? n[r].props : {},
                    i = s.separator || "|"
                delete s.separator, (s.pageTitle = Le(s.pageTitle || o || "", s, i))
                for (const c of n.filter((u) => u.processTemplateParams !== !1)) {
                    const u = Ws[c.tag]
                    u && typeof c.props[u] == "string"
                        ? (c.props[u] = Le(c.props[u], s, i))
                        : (c.processTemplateParams === !0 || ["titleTemplate", "title"].includes(c.tag)) &&
                          ["innerHTML", "textContent"].forEach((a) => {
                              typeof c[a] == "string" && (c[a] = Le(c[a], s, i))
                          })
                }
                ;(e._templateParams = s), (e._separator = i), (t.tags = n.filter((c) => c.tag !== "templateParams"))
            }
        }
    }),
    Ks = {
        hooks: {
            "tags:resolve": (e) => {
                const { tags: t } = e
                let n = t.findIndex((r) => r.tag === "titleTemplate")
                const o = t.findIndex((r) => r.tag === "title")
                if (o !== -1 && n !== -1) {
                    const r = nn(t[n].textContent, t[o].textContent)
                    r !== null ? (t[o].textContent = r || t[o].textContent) : delete t[o]
                } else if (n !== -1) {
                    const r = nn(t[n].textContent)
                    r !== null && ((t[n].textContent = r), (t[n].tag = "title"), (n = -1))
                }
                n !== -1 && delete t[n], (e.tags = t.filter(Boolean))
            }
        }
    },
    Fs = {
        hooks: {
            "tags:afterResolve": function (e) {
                for (const t of e.tags)
                    typeof t.innerHTML == "string" &&
                        (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type)
                            ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
                            : (t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, "g"), `<\\/${t.tag}`)))
            }
        }
    }
let to
function Vs(e = {}) {
    const t = zs(e)
    return t.use(xs()), (to = t)
}
function sn(e, t) {
    return !e || (e === "server" && t) || (e === "client" && !t)
}
function zs(e = {}) {
    const t = Wn()
    t.addHooks(e.hooks || {}), (e.document = e.document || (Ss ? document : void 0))
    const n = !e.document,
        o = () => {
            ;(l.dirty = !0), t.callHook("entries:updated", l)
        }
    let r = 0,
        s = []
    const i = [],
        l = {
            plugins: i,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            headEntries() {
                return s
            },
            use(c) {
                const u = typeof c == "function" ? c(l) : c
                ;(!u.key || !i.some((a) => a.key === u.key)) && (i.push(u), sn(u.mode, n) && t.addHooks(u.hooks || {}))
            },
            push(c, u) {
                u == null || delete u.head
                const a = { _i: r++, input: c, ...u }
                return (
                    sn(a.mode, n) && (s.push(a), o()),
                    {
                        dispose() {
                            ;(s = s.filter((f) => f._i !== a._i)), t.callHook("entries:updated", l), o()
                        },
                        patch(f) {
                            ;(s = s.map((d) => (d._i === a._i && (d.input = a.input = f), d))), o()
                        }
                    }
                )
            },
            async resolveTags() {
                const c = { tags: [], entries: [...s] }
                await t.callHook("entries:resolve", c)
                for (const u of c.entries) {
                    const a = u.resolvedInput || u.input
                    if (((u.resolvedInput = await (u.transform ? u.transform(a) : a)), u.resolvedInput))
                        for (const f of await Hs(u)) {
                            const d = { tag: f, entry: u, resolvedOptions: l.resolvedOptions }
                            await t.callHook("tag:normalise", d), c.tags.push(d.tag)
                        }
                }
                return await t.callHook("tags:beforeResolve", c), await t.callHook("tags:resolve", c), await t.callHook("tags:afterResolve", c), c.tags
            },
            ssr: n
        }
    return [Ls, Ms, Ns, Bs, Ds, qs, Ks, Fs, ...((e == null ? void 0 : e.plugins) || [])].forEach((c) => l.use(c)), l.hooks.callHook("init", l), l
}
function Gs() {
    return to
}
const Qs = To.startsWith("3")
function Js(e) {
    return typeof e == "function" ? e() : $(e)
}
function bt(e, t = "") {
    if (e instanceof Promise) return e
    const n = Js(e)
    return !e || !n
        ? n
        : Array.isArray(n)
        ? n.map((o) => bt(o, t))
        : typeof n == "object"
        ? Object.fromEntries(Object.entries(n).map(([o, r]) => (o === "titleTemplate" || o.startsWith("on") ? [o, $(r)] : [o, bt(r, o)])))
        : n
}
const Xs = {
        hooks: {
            "entries:resolve": function (e) {
                for (const t of e.entries) t.resolvedInput = bt(t.input)
            }
        }
    },
    no = "usehead"
function Ys(e) {
    return {
        install(n) {
            Qs && ((n.config.globalProperties.$unhead = e), (n.config.globalProperties.$head = e), n.provide(no, e))
        }
    }.install
}
function Zs(e = {}) {
    e.domDelayFn = e.domDelayFn || ((n) => Pe(() => setTimeout(() => n(), 0)))
    const t = Vs(e)
    return t.use(Xs), (t.install = Ys(t)), t
}
const Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Rt = "__unhead_injection_handler__"
function ea(e) {
    Et[Rt] = e
}
function nc() {
    if (Rt in Et) return Et[Rt]()
    const e = K(no)
    return e || Gs()
}
const ta = { nuxt: { buildId: "4c315757-830d-4a2b-a67d-646c68bbd6cd" } },
    na = ts(ta)
function oa() {
    const e = j()
    return e._appConfig || (e._appConfig = ae(na)), e._appConfig
}
const oc = !1,
    kt = !1,
    ra = !1,
    rc = { componentName: "NuxtLink" },
    sa = "#__nuxt"
let Me, oo
function aa() {
    var t
    const e = (t = oa().nuxt) == null ? void 0 : t.buildId
    return (
        (Me = $fetch(Mt(`builds/meta/${e}.json`))),
        Me.then((n) => {
            oo = es(n.matcher)
        }),
        Me
    )
}
function Je() {
    return Me || aa()
}
async function ro(e) {
    return await Je(), zn({}, ...oo.matchAll(e).reverse())
}
function an(e, t = {}) {
    const n = ia(e, t),
        o = j(),
        r = (o._payloadCache = o._payloadCache || {})
    return n in r || (r[n] = ca(e).then((s) => (s ? so(n).then((i) => i || (delete r[n], null)) : ((r[n] = null), null)))), r[n]
}
const cn = "json"
function ia(e, t = {}) {
    const n = new URL(e, "http://localhost")
    if (n.host !== "localhost" || Se(n.pathname, { acceptRelative: !0 })) throw new Error("Payload URL must not include hostname: " + e)
    const o = t.hash || (t.fresh ? Date.now() : "")
    return Ce(Nt().app.baseURL, n.pathname, o ? `_payload.${o}.${cn}` : `_payload.${cn}`)
}
async function so(e) {
    const t = fetch(e).then((n) => n.text().then(ao))
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function ca(e = Qn().path) {
    if (((e = Lt(e)), (await Je()).prerendered.includes(e))) return !0
    const n = await ro(e)
    return !!n.prerender && !n.redirect
}
let $e = null
async function la() {
    if ($e) return $e
    const e = document.getElementById("__NUXT_DATA__")
    if (!e) return {}
    const t = await ao(e.textContent || ""),
        n = e.dataset.src ? await so(e.dataset.src) : void 0
    return ($e = { ...t, ...n, ...window.__NUXT__ }), $e
}
async function ao(e) {
    return await ws(e, j()._payloadRevivers)
}
function ua(e, t) {
    j()._payloadRevivers[e] = t
}
const ln = {
        NuxtError: (e) => Qe(e),
        EmptyShallowRef: (e) => be(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Be(e)),
        EmptyRef: (e) => fe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Be(e)),
        ShallowRef: (e) => be(e),
        ShallowReactive: (e) => Ke(e),
        Ref: (e) => fe(e),
        Reactive: (e) => ae(e)
    },
    fa = Q({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n
            for (const o in ln) ua(o, ln[o])
            Object.assign(e.payload, (([t, n] = Ee(() => e.runWithContext(la))), (t = await t), n(), t)), (window.__NUXT__ = e.payload)
        }
    }),
    da = [],
    ha = Q({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = Zs({ plugins: da })
            ea(() => j().vueApp._context.provides.usehead), e.vueApp.use(t)
            {
                let n = !0
                const o = async () => {
                    ;(n = !1), await eo(t)
                }
                t.hooks.hook("dom:beforeRender", (r) => {
                    r.shouldRender = !n
                }),
                    e.hooks.hook("page:start", () => {
                        n = !0
                    }),
                    e.hooks.hook("page:finish", () => {
                        e.isHydrating || o()
                    }),
                    e.hooks.hook("app:error", o),
                    e.hooks.hook("app:suspense:resolve", o)
            }
        }
    })
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const le = typeof document < "u"
function pa(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const A = Object.assign
function it(e, t) {
    const n = {}
    for (const o in t) {
        const r = t[o]
        n[o] = F(r) ? r.map(e) : e(r)
    }
    return n
}
const ge = () => {},
    F = Array.isArray,
    io = /#/g,
    ma = /&/g,
    ya = /\//g,
    ga = /=/g,
    _a = /\?/g,
    co = /\+/g,
    va = /%5B/g,
    wa = /%5D/g,
    lo = /%5E/g,
    ba = /%60/g,
    uo = /%7B/g,
    Ea = /%7C/g,
    fo = /%7D/g,
    Ra = /%20/g
function Bt(e) {
    return encodeURI("" + e)
        .replace(Ea, "|")
        .replace(va, "[")
        .replace(wa, "]")
}
function ka(e) {
    return Bt(e).replace(uo, "{").replace(fo, "}").replace(lo, "^")
}
function Pt(e) {
    return Bt(e).replace(co, "%2B").replace(Ra, "+").replace(io, "%23").replace(ma, "%26").replace(ba, "`").replace(uo, "{").replace(fo, "}").replace(lo, "^")
}
function Pa(e) {
    return Pt(e).replace(ga, "%3D")
}
function Sa(e) {
    return Bt(e).replace(io, "%23").replace(_a, "%3F")
}
function Ca(e) {
    return e == null ? "" : Sa(e).replace(ya, "%2F")
}
function Re(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Ta = /\/$/,
    Aa = (e) => e.replace(Ta, "")
function ct(e, t, n = "/") {
    let o,
        r = {},
        s = "",
        i = ""
    const l = t.indexOf("#")
    let c = t.indexOf("?")
    return (
        l < c && l >= 0 && (c = -1),
        c > -1 && ((o = t.slice(0, c)), (s = t.slice(c + 1, l > -1 ? l : t.length)), (r = e(s))),
        l > -1 && ((o = o || t.slice(0, l)), (i = t.slice(l, t.length))),
        (o = xa(o ?? t, n)),
        { fullPath: o + (s && "?") + s + i, path: o, query: r, hash: Re(i) }
    )
}
function Ha(e, t) {
    const n = t.query ? e(t.query) : ""
    return t.path + (n && "?") + n + (t.hash || "")
}
function un(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Oa(e, t, n) {
    const o = t.matched.length - 1,
        r = n.matched.length - 1
    return o > -1 && o === r && de(t.matched[o], n.matched[r]) && ho(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function de(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function ho(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1
    for (const n in e) if (!$a(e[n], t[n])) return !1
    return !0
}
function $a(e, t) {
    return F(e) ? fn(e, t) : F(t) ? fn(t, e) : e === t
}
function fn(e, t) {
    return F(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}
function xa(e, t) {
    if (e.startsWith("/")) return e
    if (!e) return t
    const n = t.split("/"),
        o = e.split("/"),
        r = o[o.length - 1]
    ;(r === ".." || r === ".") && o.push("")
    let s = n.length - 1,
        i,
        l
    for (i = 0; i < o.length; i++)
        if (((l = o[i]), l !== "."))
            if (l === "..") s > 1 && s--
            else break
    return n.slice(0, s).join("/") + "/" + o.slice(i).join("/")
}
var ke
;(function (e) {
    ;(e.pop = "pop"), (e.push = "push")
})(ke || (ke = {}))
var _e
;(function (e) {
    ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(_e || (_e = {}))
function ja(e) {
    if (!e)
        if (le) {
            const t = document.querySelector("base")
            ;(e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
        } else e = "/"
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Aa(e)
}
const La = /^[^#]+#/
function Ma(e, t) {
    return e.replace(La, "#") + t
}
function Ia(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect()
    return { behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0) }
}
const Xe = () => ({ left: window.scrollX, top: window.scrollY })
function Na(e) {
    let t
    if ("el" in e) {
        const n = e.el,
            o = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? (o ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
        if (!r) return
        t = Ia(r, e)
    } else t = e
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function dn(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const St = new Map()
function Ua(e, t) {
    St.set(e, t)
}
function Ba(e) {
    const t = St.get(e)
    return St.delete(e), t
}
let Da = () => location.protocol + "//" + location.host
function po(e, t) {
    const { pathname: n, search: o, hash: r } = t,
        s = e.indexOf("#")
    if (s > -1) {
        let l = r.includes(e.slice(s)) ? e.slice(s).length : 1,
            c = r.slice(l)
        return c[0] !== "/" && (c = "/" + c), un(c, "")
    }
    return un(n, e) + o + r
}
function Wa(e, t, n, o) {
    let r = [],
        s = [],
        i = null
    const l = ({ state: d }) => {
        const h = po(e, location),
            y = n.value,
            w = t.value
        let E = 0
        if (d) {
            if (((n.value = h), (t.value = d), i && i === y)) {
                i = null
                return
            }
            E = w ? d.position - w.position : 0
        } else o(h)
        r.forEach((m) => {
            m(n.value, y, { delta: E, type: ke.pop, direction: E ? (E > 0 ? _e.forward : _e.back) : _e.unknown })
        })
    }
    function c() {
        i = n.value
    }
    function u(d) {
        r.push(d)
        const h = () => {
            const y = r.indexOf(d)
            y > -1 && r.splice(y, 1)
        }
        return s.push(h), h
    }
    function a() {
        const { history: d } = window
        d.state && d.replaceState(A({}, d.state, { scroll: Xe() }), "")
    }
    function f() {
        for (const d of s) d()
        ;(s = []), window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", a)
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", a, { passive: !0 }), { pauseListeners: c, listen: u, destroy: f }
}
function hn(e, t, n, o = !1, r = !1) {
    return { back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: r ? Xe() : null }
}
function qa(e) {
    const { history: t, location: n } = window,
        o = { value: po(e, n) },
        r = { value: t.state }
    r.value || s(o.value, { back: null, current: o.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
    function s(c, u, a) {
        const f = e.indexOf("#"),
            d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : Da() + e + c
        try {
            t[a ? "replaceState" : "pushState"](u, "", d), (r.value = u)
        } catch (h) {
            console.error(h), n[a ? "replace" : "assign"](d)
        }
    }
    function i(c, u) {
        const a = A({}, t.state, hn(r.value.back, c, r.value.forward, !0), u, { position: r.value.position })
        s(c, a, !0), (o.value = c)
    }
    function l(c, u) {
        const a = A({}, r.value, t.state, { forward: c, scroll: Xe() })
        s(a.current, a, !0)
        const f = A({}, hn(o.value, c, null), { position: a.position + 1 }, u)
        s(c, f, !1), (o.value = c)
    }
    return { location: o, state: r, push: l, replace: i }
}
function mo(e) {
    e = ja(e)
    const t = qa(e),
        n = Wa(e, t.state, t.location, t.replace)
    function o(s, i = !0) {
        i || n.pauseListeners(), history.go(s)
    }
    const r = A({ location: "", base: e, go: o, createHref: Ma.bind(null, e) }, t, n)
    return Object.defineProperty(r, "location", { enumerable: !0, get: () => t.location.value }), Object.defineProperty(r, "state", { enumerable: !0, get: () => t.state.value }), r
}
function Ka(e) {
    return (e = location.host ? e || location.pathname + location.search : ""), e.includes("#") || (e += "#"), mo(e)
}
function Fa(e) {
    return typeof e == "string" || (e && typeof e == "object")
}
function yo(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const W = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 },
    go = Symbol("")
var pn
;(function (e) {
    ;(e[(e.aborted = 4)] = "aborted"), (e[(e.cancelled = 8)] = "cancelled"), (e[(e.duplicated = 16)] = "duplicated")
})(pn || (pn = {}))
function he(e, t) {
    return A(new Error(), { type: e, [go]: !0 }, t)
}
function G(e, t) {
    return e instanceof Error && go in e && (t == null || !!(e.type & t))
}
const mn = "[^/]+?",
    Va = { sensitive: !1, strict: !1, start: !0, end: !0 },
    za = /[.+*?^${}()[\]/\\]/g
function Ga(e, t) {
    const n = A({}, Va, t),
        o = []
    let r = n.start ? "^" : ""
    const s = []
    for (const u of e) {
        const a = u.length ? [] : [90]
        n.strict && !u.length && (r += "/")
        for (let f = 0; f < u.length; f++) {
            const d = u[f]
            let h = 40 + (n.sensitive ? 0.25 : 0)
            if (d.type === 0) f || (r += "/"), (r += d.value.replace(za, "\\$&")), (h += 40)
            else if (d.type === 1) {
                const { value: y, repeatable: w, optional: E, regexp: m } = d
                s.push({ name: y, repeatable: w, optional: E })
                const v = m || mn
                if (v !== mn) {
                    h += 10
                    try {
                        new RegExp(`(${v})`)
                    } catch (O) {
                        throw new Error(`Invalid custom RegExp for param "${y}" (${v}): ` + O.message)
                    }
                }
                let k = w ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`
                f || (k = E && u.length < 2 ? `(?:/${k})` : "/" + k), E && (k += "?"), (r += k), (h += 20), E && (h += -8), w && (h += -20), v === ".*" && (h += -50)
            }
            a.push(h)
        }
        o.push(a)
    }
    if (n.strict && n.end) {
        const u = o.length - 1
        o[u][o[u].length - 1] += 0.7000000000000001
    }
    n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)")
    const i = new RegExp(r, n.sensitive ? "" : "i")
    function l(u) {
        const a = u.match(i),
            f = {}
        if (!a) return null
        for (let d = 1; d < a.length; d++) {
            const h = a[d] || "",
                y = s[d - 1]
            f[y.name] = h && y.repeatable ? h.split("/") : h
        }
        return f
    }
    function c(u) {
        let a = "",
            f = !1
        for (const d of e) {
            ;(!f || !a.endsWith("/")) && (a += "/"), (f = !1)
            for (const h of d)
                if (h.type === 0) a += h.value
                else if (h.type === 1) {
                    const { value: y, repeatable: w, optional: E } = h,
                        m = y in u ? u[y] : ""
                    if (F(m) && !w) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`)
                    const v = F(m) ? m.join("/") : m
                    if (!v)
                        if (E) d.length < 2 && (a.endsWith("/") ? (a = a.slice(0, -1)) : (f = !0))
                        else throw new Error(`Missing required param "${y}"`)
                    a += v
                }
        }
        return a || "/"
    }
    return { re: i, score: o, keys: s, parse: l, stringify: c }
}
function Qa(e, t) {
    let n = 0
    for (; n < e.length && n < t.length; ) {
        const o = t[n] - e[n]
        if (o) return o
        n++
    }
    return e.length < t.length ? (e.length === 1 && e[0] === 80 ? -1 : 1) : e.length > t.length ? (t.length === 1 && t[0] === 80 ? 1 : -1) : 0
}
function Ja(e, t) {
    let n = 0
    const o = e.score,
        r = t.score
    for (; n < o.length && n < r.length; ) {
        const s = Qa(o[n], r[n])
        if (s) return s
        n++
    }
    if (Math.abs(r.length - o.length) === 1) {
        if (yn(o)) return 1
        if (yn(r)) return -1
    }
    return r.length - o.length
}
function yn(e) {
    const t = e[e.length - 1]
    return e.length > 0 && t[t.length - 1] < 0
}
const Xa = { type: 0, value: "" },
    Ya = /[a-zA-Z0-9_]/
function Za(e) {
    if (!e) return [[]]
    if (e === "/") return [[Xa]]
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
    function t(h) {
        throw new Error(`ERR (${n})/"${u}": ${h}`)
    }
    let n = 0,
        o = n
    const r = []
    let s
    function i() {
        s && r.push(s), (s = [])
    }
    let l = 0,
        c,
        u = "",
        a = ""
    function f() {
        u &&
            (n === 0
                ? s.push({ type: 0, value: u })
                : n === 1 || n === 2 || n === 3
                ? (s.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
                  s.push({ type: 1, value: u, regexp: a, repeatable: c === "*" || c === "+", optional: c === "*" || c === "?" }))
                : t("Invalid state to consume buffer"),
            (u = ""))
    }
    function d() {
        u += c
    }
    for (; l < e.length; ) {
        if (((c = e[l++]), c === "\\" && n !== 2)) {
            ;(o = n), (n = 4)
            continue
        }
        switch (n) {
            case 0:
                c === "/" ? (u && f(), i()) : c === ":" ? (f(), (n = 1)) : d()
                break
            case 4:
                d(), (n = o)
                break
            case 1:
                c === "(" ? (n = 2) : Ya.test(c) ? d() : (f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--)
                break
            case 2:
                c === ")" ? (a[a.length - 1] == "\\" ? (a = a.slice(0, -1) + c) : (n = 3)) : (a += c)
                break
            case 3:
                f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (a = "")
                break
            default:
                t("Unknown state")
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), r
}
function ei(e, t, n) {
    const o = Ga(Za(e.path), n),
        r = A(o, { record: e, parent: t, children: [], alias: [] })
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function ti(e, t) {
    const n = [],
        o = new Map()
    t = vn({ strict: !1, end: !0, sensitive: !1 }, t)
    function r(a) {
        return o.get(a)
    }
    function s(a, f, d) {
        const h = !d,
            y = ni(a)
        y.aliasOf = d && d.record
        const w = vn(t, a),
            E = [y]
        if ("alias" in a) {
            const k = typeof a.alias == "string" ? [a.alias] : a.alias
            for (const O of k) E.push(A({}, y, { components: d ? d.record.components : y.components, path: O, aliasOf: d ? d.record : y }))
        }
        let m, v
        for (const k of E) {
            const { path: O } = k
            if (f && O[0] !== "/") {
                const S = f.record.path,
                    M = S[S.length - 1] === "/" ? "" : "/"
                k.path = f.record.path + (O && M + O)
            }
            if (((m = ei(k, f, w)), d ? d.alias.push(m) : ((v = v || m), v !== m && v.alias.push(m), h && a.name && !_n(m) && i(a.name)), y.children)) {
                const S = y.children
                for (let M = 0; M < S.length; M++) s(S[M], m, d && d.children[M])
            }
            ;(d = d || m), ((m.record.components && Object.keys(m.record.components).length) || m.record.name || m.record.redirect) && c(m)
        }
        return v
            ? () => {
                  i(v)
              }
            : ge
    }
    function i(a) {
        if (yo(a)) {
            const f = o.get(a)
            f && (o.delete(a), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i))
        } else {
            const f = n.indexOf(a)
            f > -1 && (n.splice(f, 1), a.record.name && o.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function c(a) {
        let f = 0
        for (; f < n.length && Ja(a, n[f]) >= 0 && (a.record.path !== n[f].record.path || !_o(a, n[f])); ) f++
        n.splice(f, 0, a), a.record.name && !_n(a) && o.set(a.record.name, a)
    }
    function u(a, f) {
        let d,
            h = {},
            y,
            w
        if ("name" in a && a.name) {
            if (((d = o.get(a.name)), !d)) throw he(1, { location: a })
            ;(w = d.record.name),
                (h = A(
                    gn(
                        f.params,
                        d.keys
                            .filter((v) => !v.optional)
                            .concat(d.parent ? d.parent.keys.filter((v) => v.optional) : [])
                            .map((v) => v.name)
                    ),
                    a.params &&
                        gn(
                            a.params,
                            d.keys.map((v) => v.name)
                        )
                )),
                (y = d.stringify(h))
        } else if (a.path != null) (y = a.path), (d = n.find((v) => v.re.test(y))), d && ((h = d.parse(y)), (w = d.record.name))
        else {
            if (((d = f.name ? o.get(f.name) : n.find((v) => v.re.test(f.path))), !d)) throw he(1, { location: a, currentLocation: f })
            ;(w = d.record.name), (h = A({}, f.params, a.params)), (y = d.stringify(h))
        }
        const E = []
        let m = d
        for (; m; ) E.unshift(m.record), (m = m.parent)
        return { name: w, path: y, params: h, matched: E, meta: ri(E) }
    }
    return e.forEach((a) => s(a)), { addRoute: s, resolve: u, removeRoute: i, getRoutes: l, getRecordMatcher: r }
}
function gn(e, t) {
    const n = {}
    for (const o of t) o in e && (n[o] = e[o])
    return n
}
function ni(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: oi(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && { default: e.component }
    }
}
function oi(e) {
    const t = {},
        n = e.props || !1
    if ("component" in e) t.default = n
    else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n
    return t
}
function _n(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0
        e = e.parent
    }
    return !1
}
function ri(e) {
    return e.reduce((t, n) => A(t, n.meta), {})
}
function vn(e, t) {
    const n = {}
    for (const o in e) n[o] = o in t ? t[o] : e[o]
    return n
}
function _o(e, t) {
    return t.children.some((n) => n === e || _o(e, n))
}
function si(e) {
    const t = {}
    if (e === "" || e === "?") return t
    const o = (e[0] === "?" ? e.slice(1) : e).split("&")
    for (let r = 0; r < o.length; ++r) {
        const s = o[r].replace(co, " "),
            i = s.indexOf("="),
            l = Re(i < 0 ? s : s.slice(0, i)),
            c = i < 0 ? null : Re(s.slice(i + 1))
        if (l in t) {
            let u = t[l]
            F(u) || (u = t[l] = [u]), u.push(c)
        } else t[l] = c
    }
    return t
}
function wn(e) {
    let t = ""
    for (let n in e) {
        const o = e[n]
        if (((n = Pa(n)), o == null)) {
            o !== void 0 && (t += (t.length ? "&" : "") + n)
            continue
        }
        ;(F(o) ? o.map((s) => s && Pt(s)) : [o && Pt(o)]).forEach((s) => {
            s !== void 0 && ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s))
        })
    }
    return t
}
function ai(e) {
    const t = {}
    for (const n in e) {
        const o = e[n]
        o !== void 0 && (t[n] = F(o) ? o.map((r) => (r == null ? null : "" + r)) : o == null ? o : "" + o)
    }
    return t
}
const ii = Symbol(""),
    bn = Symbol(""),
    Dt = Symbol(""),
    Wt = Symbol(""),
    Ct = Symbol("")
function me() {
    let e = []
    function t(o) {
        return (
            e.push(o),
            () => {
                const r = e.indexOf(o)
                r > -1 && e.splice(r, 1)
            }
        )
    }
    function n() {
        e = []
    }
    return { add: t, list: () => e.slice(), reset: n }
}
function ee(e, t, n, o, r, s = (i) => i()) {
    const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || [])
    return () =>
        new Promise((l, c) => {
            const u = (d) => {
                    d === !1
                        ? c(he(4, { from: n, to: t }))
                        : d instanceof Error
                        ? c(d)
                        : Fa(d)
                        ? c(he(2, { from: t, to: d }))
                        : (i && o.enterCallbacks[r] === i && typeof d == "function" && i.push(d), l())
                },
                a = s(() => e.call(o && o.instances[r], t, n, u))
            let f = Promise.resolve(a)
            e.length < 3 && (f = f.then(u)), f.catch((d) => c(d))
        })
}
function lt(e, t, n, o, r = (s) => s()) {
    const s = []
    for (const i of e)
        for (const l in i.components) {
            let c = i.components[l]
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (ci(c)) {
                    const a = (c.__vccOpts || c)[t]
                    a && s.push(ee(a, n, o, i, l, r))
                } else {
                    let u = c()
                    s.push(() =>
                        u.then((a) => {
                            if (!a) return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`))
                            const f = pa(a) ? a.default : a
                            i.components[l] = f
                            const h = (f.__vccOpts || f)[t]
                            return h && ee(h, n, o, i, l, r)()
                        })
                    )
                }
        }
    return s
}
function ci(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}
function En(e) {
    const t = K(Dt),
        n = K(Wt),
        o = q(() => t.resolve($(e.to))),
        r = q(() => {
            const { matched: c } = o.value,
                { length: u } = c,
                a = c[u - 1],
                f = n.matched
            if (!a || !f.length) return -1
            const d = f.findIndex(de.bind(null, a))
            if (d > -1) return d
            const h = Rn(c[u - 2])
            return u > 1 && Rn(a) === h && f[f.length - 1].path !== h ? f.findIndex(de.bind(null, c[u - 2])) : d
        }),
        s = q(() => r.value > -1 && di(n.params, o.value.params)),
        i = q(() => r.value > -1 && r.value === n.matched.length - 1 && ho(n.params, o.value.params))
    function l(c = {}) {
        return fi(c) ? t[$(e.replace) ? "replace" : "push"]($(e.to)).catch(ge) : Promise.resolve()
    }
    return { route: o, href: q(() => o.value.href), isActive: s, isExactActive: i, navigate: l }
}
const li = Fe({
        name: "RouterLink",
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: "page" }
        },
        useLink: En,
        setup(e, { slots: t }) {
            const n = ae(En(e)),
                { options: o } = K(Dt),
                r = q(() => ({
                    [kn(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
                    [kn(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }))
            return () => {
                const s = t.default && t.default(n)
                return e.custom ? s : te("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: r.value }, s)
            }
        }
    }),
    ui = li
function fi(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target")
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}
function di(e, t) {
    for (const n in t) {
        const o = t[n],
            r = e[n]
        if (typeof o == "string") {
            if (o !== r) return !1
        } else if (!F(r) || r.length !== o.length || o.some((s, i) => s !== r[i])) return !1
    }
    return !0
}
function Rn(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const kn = (e, t, n) => e ?? t ?? n,
    hi = Fe({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
            const o = K(Ct),
                r = q(() => e.route || o.value),
                s = K(bn, 0),
                i = q(() => {
                    let u = $(s)
                    const { matched: a } = r.value
                    let f
                    for (; (f = a[u]) && !f.components; ) u++
                    return u
                }),
                l = q(() => r.value.matched[i.value])
            ye(
                bn,
                q(() => i.value + 1)
            ),
                ye(ii, l),
                ye(Ct, r)
            const c = fe()
            return (
                xt(
                    () => [c.value, l.value, e.name],
                    ([u, a, f], [d, h, y]) => {
                        a &&
                            ((a.instances[f] = u),
                            h && h !== a && u && u === d && (a.leaveGuards.size || (a.leaveGuards = h.leaveGuards), a.updateGuards.size || (a.updateGuards = h.updateGuards))),
                            u && a && (!h || !de(a, h) || !d) && (a.enterCallbacks[f] || []).forEach((w) => w(u))
                    },
                    { flush: "post" }
                ),
                () => {
                    const u = r.value,
                        a = e.name,
                        f = l.value,
                        d = f && f.components[a]
                    if (!d) return Pn(n.default, { Component: d, route: u })
                    const h = f.props[a],
                        y = h ? (h === !0 ? u.params : typeof h == "function" ? h(u) : h) : null,
                        E = te(
                            d,
                            A({}, y, t, {
                                onVnodeUnmounted: (m) => {
                                    m.component.isUnmounted && (f.instances[a] = null)
                                },
                                ref: c
                            })
                        )
                    return Pn(n.default, { Component: E, route: u }) || E
                }
            )
        }
    })
function Pn(e, t) {
    if (!e) return null
    const n = e(t)
    return n.length === 1 ? n[0] : n
}
const vo = hi
function pi(e) {
    const t = ti(e.routes, e),
        n = e.parseQuery || si,
        o = e.stringifyQuery || wn,
        r = e.history,
        s = me(),
        i = me(),
        l = me(),
        c = be(W)
    let u = W
    le && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual")
    const a = it.bind(null, (p) => "" + p),
        f = it.bind(null, Ca),
        d = it.bind(null, Re)
    function h(p, _) {
        let g, b
        return yo(p) ? ((g = t.getRecordMatcher(p)), (b = _)) : (b = p), t.addRoute(b, g)
    }
    function y(p) {
        const _ = t.getRecordMatcher(p)
        _ && t.removeRoute(_)
    }
    function w() {
        return t.getRoutes().map((p) => p.record)
    }
    function E(p) {
        return !!t.getRecordMatcher(p)
    }
    function m(p, _) {
        if (((_ = A({}, _ || c.value)), typeof p == "string")) {
            const R = ct(n, p, _.path),
                I = t.resolve({ path: R.path }, _),
                pe = r.createHref(R.fullPath)
            return A(R, I, { params: d(I.params), hash: Re(R.hash), redirectedFrom: void 0, href: pe })
        }
        let g
        if (p.path != null) g = A({}, p, { path: ct(n, p.path, _.path).path })
        else {
            const R = A({}, p.params)
            for (const I in R) R[I] == null && delete R[I]
            ;(g = A({}, p, { params: f(R) })), (_.params = f(_.params))
        }
        const b = t.resolve(g, _),
            H = p.hash || ""
        b.params = a(d(b.params))
        const L = Ha(o, A({}, p, { hash: ka(H), path: b.path })),
            P = r.createHref(L)
        return A({ fullPath: L, hash: H, query: o === wn ? ai(p.query) : p.query || {} }, b, { redirectedFrom: void 0, href: P })
    }
    function v(p) {
        return typeof p == "string" ? ct(n, p, c.value.path) : A({}, p)
    }
    function k(p, _) {
        if (u !== p) return he(8, { from: _, to: p })
    }
    function O(p) {
        return x(p)
    }
    function S(p) {
        return O(A(v(p), { replace: !0 }))
    }
    function M(p) {
        const _ = p.matched[p.matched.length - 1]
        if (_ && _.redirect) {
            const { redirect: g } = _
            let b = typeof g == "function" ? g(p) : g
            return (
                typeof b == "string" && ((b = b.includes("?") || b.includes("#") ? (b = v(b)) : { path: b }), (b.params = {})),
                A({ query: p.query, hash: p.hash, params: b.path != null ? {} : p.params }, b)
            )
        }
    }
    function x(p, _) {
        const g = (u = m(p)),
            b = c.value,
            H = p.state,
            L = p.force,
            P = p.replace === !0,
            R = M(g)
        if (R) return x(A(v(R), { state: typeof R == "object" ? A({}, H, R.state) : H, force: L, replace: P }), _ || g)
        const I = g
        I.redirectedFrom = _
        let pe
        return (
            !L && Oa(o, b, g) && ((pe = he(16, { to: I, from: b })), Kt(b, b, !0, !1)),
            (pe ? Promise.resolve(pe) : B(I, b))
                .catch((U) => (G(U) ? (G(U, 2) ? U : et(U)) : Ze(U, I, b)))
                .then((U) => {
                    if (U) {
                        if (G(U, 2)) return x(A({ replace: P }, v(U.to), { state: typeof U.to == "object" ? A({}, H, U.to.state) : H, force: L }), _ || I)
                    } else U = X(I, b, !0, P, H)
                    return V(I, b, U), U
                })
        )
    }
    function T(p, _) {
        const g = k(p, _)
        return g ? Promise.reject(g) : Promise.resolve()
    }
    function C(p) {
        const _ = He.values().next().value
        return _ && typeof _.runWithContext == "function" ? _.runWithContext(p) : p()
    }
    function B(p, _) {
        let g
        const [b, H, L] = mi(p, _)
        g = lt(b.reverse(), "beforeRouteLeave", p, _)
        for (const R of b)
            R.leaveGuards.forEach((I) => {
                g.push(ee(I, p, _))
            })
        const P = T.bind(null, p, _)
        return (
            g.push(P),
            ie(g)
                .then(() => {
                    g = []
                    for (const R of s.list()) g.push(ee(R, p, _))
                    return g.push(P), ie(g)
                })
                .then(() => {
                    g = lt(H, "beforeRouteUpdate", p, _)
                    for (const R of H)
                        R.updateGuards.forEach((I) => {
                            g.push(ee(I, p, _))
                        })
                    return g.push(P), ie(g)
                })
                .then(() => {
                    g = []
                    for (const R of L)
                        if (R.beforeEnter)
                            if (F(R.beforeEnter)) for (const I of R.beforeEnter) g.push(ee(I, p, _))
                            else g.push(ee(R.beforeEnter, p, _))
                    return g.push(P), ie(g)
                })
                .then(() => (p.matched.forEach((R) => (R.enterCallbacks = {})), (g = lt(L, "beforeRouteEnter", p, _, C)), g.push(P), ie(g)))
                .then(() => {
                    g = []
                    for (const R of i.list()) g.push(ee(R, p, _))
                    return g.push(P), ie(g)
                })
                .catch((R) => (G(R, 8) ? R : Promise.reject(R)))
        )
    }
    function V(p, _, g) {
        l.list().forEach((b) => C(() => b(p, _, g)))
    }
    function X(p, _, g, b, H) {
        const L = k(p, _)
        if (L) return L
        const P = _ === W,
            R = le ? history.state : {}
        g && (b || P ? r.replace(p.fullPath, A({ scroll: P && R && R.scroll }, H)) : r.push(p.fullPath, H)), (c.value = p), Kt(p, _, g, P), et()
    }
    let ne
    function Ye() {
        ne ||
            (ne = r.listen((p, _, g) => {
                if (!Ft.listening) return
                const b = m(p),
                    H = M(b)
                if (H) {
                    x(A(H, { replace: !0 }), b).catch(ge)
                    return
                }
                u = b
                const L = c.value
                le && Ua(dn(L.fullPath, g.delta), Xe()),
                    B(b, L)
                        .catch((P) =>
                            G(P, 12)
                                ? P
                                : G(P, 2)
                                ? (x(P.to, b)
                                      .then((R) => {
                                          G(R, 20) && !g.delta && g.type === ke.pop && r.go(-1, !1)
                                      })
                                      .catch(ge),
                                  Promise.reject())
                                : (g.delta && r.go(-g.delta, !1), Ze(P, b, L))
                        )
                        .then((P) => {
                            ;(P = P || X(b, L, !1)), P && (g.delta && !G(P, 8) ? r.go(-g.delta, !1) : g.type === ke.pop && G(P, 20) && r.go(-1, !1)), V(b, L, P)
                        })
                        .catch(ge)
            }))
    }
    let z = me(),
        N = me(),
        Ae
    function Ze(p, _, g) {
        et(p)
        const b = N.list()
        return b.length ? b.forEach((H) => H(p, _, g)) : console.error(p), Promise.reject(p)
    }
    function Po() {
        return Ae && c.value !== W
            ? Promise.resolve()
            : new Promise((p, _) => {
                  z.add([p, _])
              })
    }
    function et(p) {
        return Ae || ((Ae = !p), Ye(), z.list().forEach(([_, g]) => (p ? g(p) : _())), z.reset()), p
    }
    function Kt(p, _, g, b) {
        const { scrollBehavior: H } = e
        if (!le || !H) return Promise.resolve()
        const L = (!g && Ba(dn(p.fullPath, 0))) || ((b || !g) && history.state && history.state.scroll) || null
        return Pe()
            .then(() => H(p, _, L))
            .then((P) => P && Na(P))
            .catch((P) => Ze(P, p, _))
    }
    const tt = (p) => r.go(p)
    let nt
    const He = new Set(),
        Ft = {
            currentRoute: c,
            listening: !0,
            addRoute: h,
            removeRoute: y,
            hasRoute: E,
            getRoutes: w,
            resolve: m,
            options: e,
            push: O,
            replace: S,
            go: tt,
            back: () => tt(-1),
            forward: () => tt(1),
            beforeEach: s.add,
            beforeResolve: i.add,
            afterEach: l.add,
            onError: N.add,
            isReady: Po,
            install(p) {
                const _ = this
                p.component("RouterLink", ui),
                    p.component("RouterView", vo),
                    (p.config.globalProperties.$router = _),
                    Object.defineProperty(p.config.globalProperties, "$route", { enumerable: !0, get: () => $(c) }),
                    le && !nt && c.value === W && ((nt = !0), O(r.location).catch((H) => {}))
                const g = {}
                for (const H in W) Object.defineProperty(g, H, { get: () => c.value[H], enumerable: !0 })
                p.provide(Dt, _), p.provide(Wt, Ke(g)), p.provide(Ct, c)
                const b = p.unmount
                He.add(p),
                    (p.unmount = function () {
                        He.delete(p), He.size < 1 && ((u = W), ne && ne(), (ne = null), (c.value = W), (nt = !1), (Ae = !1)), b()
                    })
            }
        }
    function ie(p) {
        return p.reduce((_, g) => _.then(() => C(g)), Promise.resolve())
    }
    return Ft
}
function mi(e, t) {
    const n = [],
        o = [],
        r = [],
        s = Math.max(t.matched.length, e.matched.length)
    for (let i = 0; i < s; i++) {
        const l = t.matched[i]
        l && (e.matched.find((u) => de(u, l)) ? o.push(l) : n.push(l))
        const c = e.matched[i]
        c && (t.matched.find((u) => de(u, c)) || r.push(c))
    }
    return [n, o, r]
}
function sc() {
    return K(Wt)
}
const yi = (e, t) =>
        t.path
            .replace(/(:\w+)\([^)]+\)/g, "$1")
            .replace(/(:\w+)[?+*]/g, "$1")
            .replace(/:\w+/g, (n) => {
                var o
                return ((o = e.params[n.slice(1)]) == null ? void 0 : o.toString()) || ""
            }),
    Tt = (e, t) => {
        const n = e.route.matched.find((r) => {
                var s
                return ((s = r.components) == null ? void 0 : s.default) === e.Component.type
            }),
            o = t ?? (n == null ? void 0 : n.meta.key) ?? (n && yi(e.route, n))
        return typeof o == "function" ? o(e.route) : o
    },
    gi = (e, t) => ({ default: () => (e ? te(Ao, e === !0 ? {} : e, t) : t) })
function qt(e) {
    return Array.isArray(e) ? e : [e]
}
const ut = null,
    ft = null,
    Sn = [
        {
            name: "blue-pants",
            path: "/blue-pants",
            meta: {},
            alias: [],
            redirect: ut == null ? void 0 : ut.redirect,
            component: () => We(() => import("./blue-pants.DuSqE58F.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then((e) => e.default || e)
        },
        {
            name: "index",
            path: "/",
            meta: {},
            alias: [],
            redirect: ft == null ? void 0 : ft.redirect,
            component: () => We(() => import("./index.U7aCEuxp.js"), __vite__mapDeps([4, 2, 3, 1, 5]), import.meta.url).then((e) => e.default || e)
        }
    ],
    _i = (e, t, n) => (
        (t = t === !0 ? {} : t),
        {
            default: () => {
                var o
                return t ? te(e, t, n) : (o = n.default) == null ? void 0 : o.call(n)
            }
        }
    )
function Cn(e) {
    const t =
        (e == null ? void 0 : e.meta.key) ??
        e.path
            .replace(/(:\w+)\([^)]+\)/g, "$1")
            .replace(/(:\w+)[?+*]/g, "$1")
            .replace(/:\w+/g, (n) => {
                var o
                return ((o = e.params[n.slice(1)]) == null ? void 0 : o.toString()) || ""
            })
    return typeof t == "function" ? t(e) : t
}
function vi(e, t) {
    return e === t || t === W
        ? !1
        : Cn(e) !== Cn(t)
        ? !0
        : !e.matched.every((o, r) => {
              var s, i
              return o.components && o.components.default === ((i = (s = t.matched[r]) == null ? void 0 : s.components) == null ? void 0 : i.default)
          })
}
const wi = {
    scrollBehavior(e, t, n) {
        var u
        const o = j(),
            r = ((u = J().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto"
        let s = n || void 0
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop
        if ((!s && t && e && i !== !1 && vi(e, t) && (s = { left: 0, top: 0 }), e.path === t.path))
            return t.hash && !e.hash ? { left: 0, top: 0 } : e.hash ? { el: e.hash, top: Tn(e.hash), behavior: r } : !1
        const l = (a) => !!(a.meta.pageTransition ?? kt),
            c = l(t) && l(e) ? "page:transition:finish" : "page:finish"
        return new Promise((a) => {
            o.hooks.hookOnce(c, async () => {
                await new Promise((f) => setTimeout(f, 0)), e.hash && (s = { el: e.hash, top: Tn(e.hash), behavior: r }), a(s)
            })
        })
    }
}
function Tn(e) {
    try {
        const t = document.querySelector(e)
        if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const bi = { hashMode: !1, scrollBehaviorType: "auto" },
    D = { ...bi, ...wi },
    Ei = async (e) => {
        var c
        let t, n
        if (!((c = e.meta) != null && c.validate)) return
        const o = j(),
            r = J()
        if ((([t, n] = Ee(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t) === !0) return
        const i = Qe({ statusCode: 404, statusMessage: `Page Not Found: ${e.fullPath}`, data: { path: e.fullPath } }),
            l = r.beforeResolve((u) => {
                if ((l(), u === e)) {
                    const a = r.afterEach(async () => {
                        a(), await o.runWithContext(() => ue(i)), window.history.pushState({}, "", e.fullPath)
                    })
                    return !1
                }
            })
    },
    Ri = async (e) => {
        let t, n
        const o = (([t, n] = Ee(() => ro(e.path))), (t = await t), n(), t)
        if (o.redirect) return o.redirect
    },
    ki = [Ei, Ri],
    ve = {}
function Pi(e, t, n) {
    const { pathname: o, search: r, hash: s } = t,
        i = e.indexOf("#")
    if (i > -1) {
        const u = s.includes(e.slice(i)) ? e.slice(i).length : 1
        let a = s.slice(u)
        return a[0] !== "/" && (a = "/" + a), Gt(a, "")
    }
    const l = Gt(o, e),
        c = !n || hr(l, n, { trailingSlash: !0 }) ? l : n
    return c + (c.includes("?") ? "" : r) + s
}
const Si = Q({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            var w, E
            let t,
                n,
                o = Nt().app.baseURL
            D.hashMode && !o.includes("#") && (o += "#")
            const r = ((w = D.history) == null ? void 0 : w.call(D, o)) ?? (D.hashMode ? Ka(o) : mo(o)),
                s = ((E = D.routes) == null ? void 0 : E.call(D, Sn)) ?? Sn
            let i
            const l = Pi(o, window.location, e.payload.path),
                c = pi({
                    ...D,
                    scrollBehavior: (m, v, k) => {
                        if (v === W) {
                            i = k
                            return
                        }
                        if (D.scrollBehavior) {
                            if (((c.options.scrollBehavior = D.scrollBehavior), "scrollRestoration" in window.history)) {
                                const O = c.beforeEach(() => {
                                    O(), (window.history.scrollRestoration = "manual")
                                })
                            }
                            return D.scrollBehavior(m, W, i || k)
                        }
                    },
                    history: r,
                    routes: s
                })
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(c)
            const u = be(c.currentRoute.value)
            c.afterEach((m, v) => {
                u.value = v
            }),
                Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", { get: () => u.value })
            const a = be(c.resolve(l)),
                f = () => {
                    a.value = c.currentRoute.value
                }
            e.hook("page:finish", f),
                c.afterEach((m, v) => {
                    var k, O, S, M
                    ;((O = (k = m.matched[0]) == null ? void 0 : k.components) == null ? void 0 : O.default) ===
                        ((M = (S = v.matched[0]) == null ? void 0 : S.components) == null ? void 0 : M.default) && f()
                })
            const d = {}
            for (const m in a.value) Object.defineProperty(d, m, { get: () => a.value[m] })
            ;(e._route = Ke(d)), (e._middleware = e._middleware || { global: [], named: {} })
            const h = Ge()
            try {
                ;([t, n] = Ee(() => c.isReady())), await t, n()
            } catch (m) {
                ;([t, n] = Ee(() => e.runWithContext(() => ue(m)))), await t, n()
            }
            const y = e.payload.state._layout
            return (
                c.beforeEach(async (m, v) => {
                    var k
                    await e.callHook("page:loading:start"), (m.meta = ae(m.meta)), e.isHydrating && y && !Ho(m.meta.layout) && (m.meta.layout = y), (e._processingMiddleware = !0)
                    {
                        const O = new Set([...ki, ...e._middleware.global])
                        for (const S of m.matched) {
                            const M = S.meta.middleware
                            if (M) for (const x of qt(M)) O.add(x)
                        }
                        for (const S of O) {
                            const M = typeof S == "string" ? e._middleware.named[S] || (await ((k = ve[S]) == null ? void 0 : k.call(ve).then((T) => T.default || T))) : S
                            if (!M) throw new Error(`Unknown route middleware: '${S}'.`)
                            const x = await e.runWithContext(() => M(m, v))
                            if (!e.payload.serverRendered && e.isHydrating && (x === !1 || x instanceof Error)) {
                                const T = x || vt({ statusCode: 404, statusMessage: `Page Not Found: ${l}` })
                                return await e.runWithContext(() => ue(T)), !1
                            }
                            if (x !== !0 && (x || x === !1)) return x
                        }
                    }
                }),
                c.onError(async () => {
                    delete e._processingMiddleware, await e.callHook("page:loading:end")
                }),
                c.afterEach(async (m, v, k) => {
                    delete e._processingMiddleware,
                        !e.isHydrating && h.value && (await e.runWithContext(ls)),
                        k && (await e.callHook("page:loading:end")),
                        m.matched.length === 0 &&
                            (await e.runWithContext(() => ue(vt({ statusCode: 404, fatal: !1, statusMessage: `Page not found: ${m.fullPath}`, data: { path: m.fullPath } }))))
                }),
                e.hooks.hookOnce("app:created", async () => {
                    try {
                        const m = c.resolve(l)
                        "name" in m && (m.name = void 0), await c.replace({ ...m, force: !0 }), (c.options.scrollBehavior = D.scrollBehavior)
                    } catch (m) {
                        await e.runWithContext(() => ue(m))
                    }
                }),
                { provide: { router: c } }
            )
        }
    }),
    An =
        globalThis.requestIdleCallback ||
        ((e) => {
            const t = Date.now(),
                n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) }
            return setTimeout(() => {
                e(n)
            }, 1)
        }),
    ac =
        globalThis.cancelIdleCallback ||
        ((e) => {
            clearTimeout(e)
        }),
    wo = (e) => {
        const t = j()
        t.isHydrating
            ? t.hooks.hookOnce("app:suspense:resolve", () => {
                  An(e)
              })
            : An(e)
    },
    Ci = Q({
        name: "nuxt:payload",
        setup(e) {
            J().beforeResolve(async (t, n) => {
                if (t.path === n.path) return
                const o = await an(t.path)
                o && Object.assign(e.static.data, o.data)
            }),
                wo(() => {
                    var t
                    e.hooks.hook("link:prefetch", async (n) => {
                        Ve(n).protocol || (await an(n))
                    }),
                        ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(Je, 1e3)
                })
        }
    }),
    Ti = Q((e) => {
        let t
        async function n() {
            const o = await Je()
            t && clearTimeout(t), (t = setTimeout(n, 1e3 * 60 * 60))
            const r = await $fetch(Mt("builds/latest.json") + `?${Date.now()}`)
            r.id !== o.id && e.hooks.callHook("app:manifest:update", r)
        }
        wo(() => {
            t = setTimeout(n, 1e3 * 60 * 60)
        })
    }),
    Ai = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let bo
const Te = (e) => (bo = e),
    Eo = Symbol()
function At(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var we
;(function (e) {
    ;(e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function")
})(we || (we = {}))
function Hi() {
    const e = Ot(!0),
        t = e.run(() => fe({}))
    let n = [],
        o = []
    const r = xn({
        install(s) {
            Te(r), (r._a = s), s.provide(Eo, r), (s.config.globalProperties.$pinia = r), o.forEach((i) => n.push(i)), (o = [])
        },
        use(s) {
            return !this._a && !Ai ? o.push(s) : n.push(s), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t
    })
    return r
}
const Ro = () => {}
function Hn(e, t, n, o = Ro) {
    e.push(t)
    const r = () => {
        const s = e.indexOf(t)
        s > -1 && (e.splice(s, 1), o())
    }
    return !n && $o() && xo(r), r
}
function ce(e, ...t) {
    e.slice().forEach((n) => {
        n(...t)
    })
}
const Oi = (e) => e()
function Ht(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e)
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue
        const o = t[n],
            r = e[n]
        At(r) && At(o) && e.hasOwnProperty(n) && !Ie(o) && !jn(o) ? (e[n] = Ht(r, o)) : (e[n] = o)
    }
    return e
}
const $i = Symbol()
function xi(e) {
    return !At(e) || !e.hasOwnProperty($i)
}
const { assign: Z } = Object
function ji(e) {
    return !!(Ie(e) && e.effect)
}
function Li(e, t, n, o) {
    const { state: r, actions: s, getters: i } = t,
        l = n.state.value[e]
    let c
    function u() {
        l || (n.state.value[e] = r ? r() : {})
        const a = jo(n.state.value[e])
        return Z(
            a,
            s,
            Object.keys(i || {}).reduce(
                (f, d) => (
                    (f[d] = xn(
                        q(() => {
                            Te(n)
                            const h = n._s.get(e)
                            return i[d].call(h, h)
                        })
                    )),
                    f
                ),
                {}
            )
        )
    }
    return (c = ko(e, u, t, n, o, !0)), c
}
function ko(e, t, n = {}, o, r, s) {
    let i
    const l = Z({ actions: {} }, n),
        c = { deep: !0 }
    let u,
        a,
        f = [],
        d = [],
        h
    const y = o.state.value[e]
    !s && !y && (o.state.value[e] = {}), fe({})
    let w
    function E(T) {
        let C
        ;(u = a = !1),
            typeof T == "function"
                ? (T(o.state.value[e]), (C = { type: we.patchFunction, storeId: e, events: h }))
                : (Ht(o.state.value[e], T), (C = { type: we.patchObject, payload: T, storeId: e, events: h }))
        const B = (w = Symbol())
        Pe().then(() => {
            w === B && (u = !0)
        }),
            (a = !0),
            ce(f, C, o.state.value[e])
    }
    const m = s
        ? function () {
              const { state: C } = n,
                  B = C ? C() : {}
              this.$patch((V) => {
                  Z(V, B)
              })
          }
        : Ro
    function v() {
        i.stop(), (f = []), (d = []), o._s.delete(e)
    }
    function k(T, C) {
        return function () {
            Te(o)
            const B = Array.from(arguments),
                V = [],
                X = []
            function ne(N) {
                V.push(N)
            }
            function Ye(N) {
                X.push(N)
            }
            ce(d, { args: B, name: T, store: S, after: ne, onError: Ye })
            let z
            try {
                z = C.apply(this && this.$id === e ? this : S, B)
            } catch (N) {
                throw (ce(X, N), N)
            }
            return z instanceof Promise ? z.then((N) => (ce(V, N), N)).catch((N) => (ce(X, N), Promise.reject(N))) : (ce(V, z), z)
        }
    }
    const O = {
            _p: o,
            $id: e,
            $onAction: Hn.bind(null, d),
            $patch: E,
            $reset: m,
            $subscribe(T, C = {}) {
                const B = Hn(f, T, C.detached, () => V()),
                    V = i.run(() =>
                        xt(
                            () => o.state.value[e],
                            (X) => {
                                ;(C.flush === "sync" ? a : u) && T({ storeId: e, type: we.direct, events: h }, X)
                            },
                            Z({}, c, C)
                        )
                    )
                return B
            },
            $dispose: v
        },
        S = ae(O)
    o._s.set(e, S)
    const x = ((o._a && o._a.runWithContext) || Oi)(() => o._e.run(() => (i = Ot()).run(t)))
    for (const T in x) {
        const C = x[T]
        if ((Ie(C) && !ji(C)) || jn(C)) s || (y && xi(C) && (Ie(C) ? (C.value = y[T]) : Ht(C, y[T])), (o.state.value[e][T] = C))
        else if (typeof C == "function") {
            const B = k(T, C)
            ;(x[T] = B), (l.actions[T] = C)
        }
    }
    return (
        Z(S, x),
        Z(Oo(S), x),
        Object.defineProperty(S, "$state", {
            get: () => o.state.value[e],
            set: (T) => {
                E((C) => {
                    Z(C, T)
                })
            }
        }),
        o._p.forEach((T) => {
            Z(
                S,
                i.run(() => T({ store: S, app: o._a, pinia: o, options: l }))
            )
        }),
        y && s && n.hydrate && n.hydrate(S.$state, y),
        (u = !0),
        (a = !0),
        S
    )
}
function ic(e, t, n) {
    let o, r
    const s = typeof t == "function"
    typeof e == "string" ? ((o = e), (r = s ? n : t)) : ((r = e), (o = e.id))
    function i(l, c) {
        const u = $t()
        return (l = l || (u ? K(Eo, null) : null)), l && Te(l), (l = bo), l._s.has(o) || (s ? ko(o, t, r, l) : Li(o, r, l)), l._s.get(o)
    }
    return (i.$id = o), i
}
function Mi(e = {}) {
    const t = e.path || window.location.pathname
    let n = {}
    try {
        n = Be(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({ state: j().payload.state }))
            } catch {}
        window.location.pathname !== t ? (window.location.href = t) : window.location.reload()
    }
}
const Ii = Q((e) => {
        const t = Hi()
        return e.vueApp.use(t), Te(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), { provide: { pinia: t } }
    }),
    Ni = Q({ name: "nuxt:global-components" }),
    xe = {},
    Ui = Q({
        name: "nuxt:prefetch",
        setup(e) {
            const t = J()
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async (n) => {
                    var r
                    const o = (r = n == null ? void 0 : n.meta) == null ? void 0 : r.layout
                    o && typeof xe[o] == "function" && (await xe[o]())
                })
            }),
                e.hooks.hook("link:prefetch", (n) => {
                    if (Se(n)) return
                    const o = t.resolve(n)
                    if (!o) return
                    const r = o.meta.layout
                    let s = qt(o.meta.middleware)
                    s = s.filter((i) => typeof i == "string")
                    for (const i of s) typeof ve[i] == "function" && ve[i]()
                    r && typeof xe[r] == "function" && xe[r]()
                })
        }
    }),
    Bi = Q({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = J(),
                n = Nt(),
                o = new Set()
            t.beforeEach(() => {
                o.clear()
            }),
                e.hook("app:chunkError", ({ error: s }) => {
                    o.add(s)
                })
            function r(s) {
                const l = "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : Ce(n.app.baseURL, s.fullPath)
                Mi({ path: l, persistState: !0 })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(r)
            }),
                t.onError((s, i) => {
                    o.has(s) && r(i)
                })
        }
    }),
    Di = [fa, ha, Si, Ci, Ti, Ii, Ni, Ui, Bi],
    Wi = Fe({
        props: { vnode: { type: Object, required: !0 }, route: { type: Object, required: !0 }, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean },
        setup(e) {
            const t = e.renderKey,
                n = e.route,
                o = {}
            for (const r in e.route) Object.defineProperty(o, r, { get: () => (t === e.renderKey ? e.route[r] : n[r]) })
            return ye(ze, Ke(o)), () => te(e.vnode, { ref: e.vnodeRef })
        }
    }),
    qi = Fe({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: { type: String },
            transition: { type: [Boolean, Object], default: void 0 },
            keepalive: { type: [Boolean, Object], default: void 0 },
            route: { type: Object },
            pageKey: { type: [Function, String], default: null }
        },
        setup(e, { attrs: t, expose: n }) {
            const o = j(),
                r = fe(),
                s = K(ze, null)
            let i
            n({ pageRef: r })
            const l = K(is, null)
            let c
            const u = o.deferHydration()
            if (o.isHydrating) {
                const a = o.hooks.hookOnce("app:error", u)
                J().beforeEach(a)
            }
            return (
                e.pageKey &&
                    xt(
                        () => e.pageKey,
                        (a, f) => {
                            a !== f && o.callHook("page:loading:start")
                        }
                    ),
                () =>
                    te(
                        vo,
                        { name: e.name, route: e.route, ...t },
                        {
                            default: (a) => {
                                const f = Fi(s, a.route, a.Component),
                                    d = s && s.matched.length === a.route.matched.length
                                if (!a.Component) {
                                    if (c && !d) return c
                                    u()
                                    return
                                }
                                if (c && l && !l.isCurrent(a.route)) return c
                                if (f && s && (!l || (l != null && l.isCurrent(s)))) return d ? c : null
                                const h = Tt(a, e.pageKey)
                                !o.isHydrating && !Vi(s, a.route, a.Component) && i === h && o.callHook("page:loading:end"), (i = h)
                                const y = !!(e.transition ?? a.route.meta.pageTransition ?? kt),
                                    w =
                                        y &&
                                        Ki(
                                            [
                                                e.transition,
                                                a.route.meta.pageTransition,
                                                kt,
                                                {
                                                    onAfterLeave: () => {
                                                        o.callHook("page:transition:finish", a.Component)
                                                    }
                                                }
                                            ].filter(Boolean)
                                        ),
                                    E = e.keepalive ?? a.route.meta.keepalive ?? ra
                                return (
                                    (c = _i(
                                        Lo,
                                        y && w,
                                        gi(
                                            E,
                                            te(
                                                Ln,
                                                {
                                                    suspensible: !0,
                                                    onPending: () => o.callHook("page:start", a.Component),
                                                    onResolve: () => {
                                                        Pe(() =>
                                                            o
                                                                .callHook("page:finish", a.Component)
                                                                .then(() => o.callHook("page:loading:end"))
                                                                .finally(u)
                                                        )
                                                    }
                                                },
                                                {
                                                    default: () => {
                                                        const m = te(Wi, {
                                                            key: h || void 0,
                                                            vnode: a.Component,
                                                            route: a.route,
                                                            renderKey: h || void 0,
                                                            trackRootNodes: y,
                                                            vnodeRef: r
                                                        })
                                                        return E && (m.type.name = a.Component.type.name || a.Component.type.__name || "RouteProvider"), m
                                                    }
                                                }
                                            )
                                        )
                                    ).default()),
                                    c
                                )
                            }
                        }
                    )
            )
        }
    })
function Ki(e) {
    const t = e.map((n) => ({ ...n, onAfterLeave: n.onAfterLeave ? qt(n.onAfterLeave) : void 0 }))
    return zn(...t)
}
function Fi(e, t, n) {
    if (!e) return !1
    const o = t.matched.findIndex((r) => {
        var s
        return ((s = r.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    })
    return !o || o === -1
        ? !1
        : t.matched.slice(0, o).some((r, s) => {
              var i, l, c
              return ((i = r.components) == null ? void 0 : i.default) !== ((c = (l = e.matched[s]) == null ? void 0 : l.components) == null ? void 0 : c.default)
          }) ||
              (n && Tt({ route: t, Component: n }) !== Tt({ route: e, Component: n }))
}
function Vi(e, t, n) {
    return e
        ? t.matched.findIndex((r) => {
              var s
              return ((s = r.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
          }) <
              t.matched.length - 1
        : !1
}
const zi = (e, t) => {
        const n = e.__vccOpts || e
        for (const [o, r] of t) n[o] = r
        return n
    },
    Gi = {}
function Qi(e, t, n, o, r, s) {
    const i = qi
    return re(), se(i)
}
const Ji = zi(Gi, [["render", Qi]]),
    Xi = {
        __name: "nuxt-error-page",
        props: { error: Object },
        setup(e) {
            const n = e.error
            ;(n.stack || "")
                .split(
                    `
`
                )
                .splice(1)
                .map((f) => ({
                    text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
                    internal: (f.includes("node_modules") && !f.includes(".cache")) || f.includes("internal") || f.includes("new Promise")
                }))
                .map((f) => `<span class="stack${f.internal ? " internal" : ""}">${f.text}</span>`).join(`
`)
            const o = Number(n.statusCode || 500),
                r = o === 404,
                s = n.statusMessage ?? (r ? "Page Not Found" : "Internal Server Error"),
                i = n.message || n.toString(),
                l = void 0,
                c = Vt(() => We(() => import("./error-404.Cy26Tr1V.js"), __vite__mapDeps([6, 2, 3, 7, 8]), import.meta.url).then((f) => f.default || f)),
                u = Vt(() => We(() => import("./error-500.B_N-ZFT7.js"), __vite__mapDeps([9, 7, 2, 3, 10]), import.meta.url).then((f) => f.default || f)),
                a = r ? c : u
            return (f, d) => (re(), se($(a), Mo(Io({ statusCode: $(o), statusMessage: $(s), description: $(i), stack: $(l) })), null, 16))
        }
    },
    Yi = Xi,
    Zi = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = j(),
                o = n.deferHydration()
            if (n.isHydrating) {
                const l = n.hooks.hookOnce("app:error", o)
                J().beforeEach(l)
            }
            const r = !1
            ye(ze, Qn()), n.hooks.callHookWith((l) => l.map((c) => c()), "vue:setup")
            const s = Ge()
            No((l, c, u) => {
                if ((n.hooks.callHook("vue:error", l, c, u).catch((a) => console.error("[nuxt] Error in `vue:error` hook", a)), us(l) && (l.fatal || l.unhandled)))
                    return n.runWithContext(() => ue(l)), !1
            })
            const i = !1
            return (l, c) => (
                re(),
                se(
                    Ln,
                    { onResolve: $(o) },
                    {
                        default: Uo(() => [
                            $(s)
                                ? (re(), se($(Yi), { key: 0, error: $(s) }, null, 8, ["error"]))
                                : $(i)
                                ? (re(), se($(t), { key: 1, context: $(i) }, null, 8, ["context"]))
                                : $(r)
                                ? (re(), se(Bo($(r)), { key: 2 }))
                                : (re(), se($(Ji), { key: 3 }))
                        ]),
                        _: 1
                    },
                    8,
                    ["onResolve"]
                )
            )
        }
    },
    On = Zi
let $n
{
    let e
    ;($n = async function () {
        var i, l
        if (e) return e
        const o = !!(((i = window.__NUXT__) != null && i.serverRendered) || ((l = document.getElementById("__NUXT_DATA__")) == null ? void 0 : l.dataset.ssr) === "true")
                ? Do(On)
                : Wo(On),
            r = Gr({ vueApp: o })
        async function s(c) {
            await r.callHook("app:error", c), (r.payload.error = r.payload.error || Qe(c))
        }
        o.config.errorHandler = s
        try {
            await Jr(r, Di)
        } catch (c) {
            s(c)
        }
        try {
            await r.hooks.callHook("app:created", o), await r.hooks.callHook("app:beforeMount", o), o.mount(sa), await r.hooks.callHook("app:mounted", o), await Pe()
        } catch (c) {
            s(c)
        }
        return o.config.errorHandler === s && (o.config.errorHandler = void 0), o
    }),
        (e = $n().catch((t) => {
            throw (console.error("Error while mounting app:", t), t)
        }))
}
export {
    is as L,
    ze as P,
    zi as _,
    er as a,
    Nt as b,
    ac as c,
    j as d,
    tc as e,
    Lt as f,
    bt as g,
    Se as h,
    nc as i,
    Ce as j,
    ic as k,
    Qn as l,
    sc as m,
    rc as n,
    wo as o,
    Ve as p,
    xe as q,
    An as r,
    oc as s,
    _i as t,
    J as u,
    pt as w
}
