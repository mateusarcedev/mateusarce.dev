(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_421d06._.js", {

"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>J),
    "useTheme": (()=>z)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var L = (e, o, s, u, d, m, l, h)=>{
    let i = document.documentElement, T = [
        "light",
        "dark"
    ];
    function p(a) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((g)=>{
            let k = g === "class", S = k && m ? d.map((f)=>m[f] || f) : d;
            k ? (i.classList.remove(...S), i.classList.add(a)) : i.setAttribute(g, a);
        }), R(a);
    }
    function R(a) {
        h && T.includes(a) && (i.style.colorScheme = a);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let a = localStorage.getItem(o) || s, g = l && a === "system" ? c() : a;
        p(g);
    } catch (a) {}
};
var M = [
    "light",
    "dark"
], Q = "(prefers-color-scheme: dark)", U = typeof window == "undefined", E = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0), N = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(E)) != null ? e : N;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(E) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(H, {
        ...e
    }), _ = [
    "light",
    "dark"
], H = ({ forcedTheme: e, disableTransitionOnChange: o = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: d = "theme", themes: m = _, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: i, children: T, nonce: p, scriptProps: R })=>{
    let [c, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "H.useState": ()=>b(d, l)
    }["H.useState"]), [w, g] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "H.useState": ()=>b(d)
    }["H.useState"]), k = i ? Object.values(i) : m, S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "H.useCallback[S]": (n)=>{
            let r = n;
            if (!r) return;
            n === "system" && s && (r = I());
            let y = i ? i[r] : r, C = o ? W(p) : null, P = document.documentElement, x = {
                "H.useCallback[S].x": (v)=>{
                    v === "class" ? (P.classList.remove(...k), y && P.classList.add(y)) : v.startsWith("data-") && (y ? P.setAttribute(v, y) : P.removeAttribute(v));
                }
            }["H.useCallback[S].x"];
            if (Array.isArray(h) ? h.forEach(x) : x(h), u) {
                let v = M.includes(l) ? l : null, O = M.includes(r) ? r : v;
                P.style.colorScheme = O;
            }
            C == null || C();
        }
    }["H.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "H.useCallback[f]": (n)=>{
            let r = typeof n == "function" ? n(c) : n;
            a(r);
            try {
                localStorage.setItem(d, r);
            } catch (y) {}
        }
    }["H.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "H.useCallback[A]": (n)=>{
            let r = I(n);
            g(r), c === "system" && s && !e && S("system");
        }
    }["H.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "H.useEffect": ()=>{
            let n = window.matchMedia(Q);
            return n.addListener(A), A(n), ({
                "H.useEffect": ()=>n.removeListener(A)
            })["H.useEffect"];
        }
    }["H.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "H.useEffect": ()=>{
            let n = {
                "H.useEffect.n": (r)=>{
                    if (r.key !== d) return;
                    let y = r.newValue || l;
                    f(y);
                }
            }["H.useEffect.n"];
            return window.addEventListener("storage", n), ({
                "H.useEffect": ()=>window.removeEventListener("storage", n)
            })["H.useEffect"];
        }
    }["H.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "H.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["H.useEffect"], [
        e,
        c
    ]);
    let D = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "H.useMemo[D]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? w : c,
                themes: s ? [
                    ...m,
                    "system"
                ] : m,
                systemTheme: s ? w : void 0
            })
    }["H.useMemo[D]"], [
        c,
        f,
        e,
        w,
        s,
        m
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(E.Provider, {
        value: D
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(V, {
        forcedTheme: e,
        storageKey: d,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: i,
        themes: m,
        nonce: p,
        scriptProps: R
    }), T);
}, V = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.memo(({ forcedTheme: e, storageKey: o, attribute: s, enableSystem: u, enableColorScheme: d, defaultTheme: m, value: l, themes: h, nonce: i, scriptProps: T })=>{
    let p = JSON.stringify([
        s,
        o,
        m,
        e,
        h,
        l,
        u,
        d
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("script", {
        ...T,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? i : "",
        dangerouslySetInnerHTML: {
            __html: `(${L.toString()})(${p})`
        }
    });
}), b = (e, o)=>{
    if (U) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || o;
}, W = (e)=>{
    let o = document.createElement("style");
    return e && o.setAttribute("nonce", e), o.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(o), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(o);
        }, 1);
    };
}, I = (e)=>(e || (e = window.matchMedia(Q)), e.matches ? "dark" : "light");
;
}}),
}]);

//# sourceMappingURL=_421d06._.js.map