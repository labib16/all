(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        r = {},
        ha = {};

    function t(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in r ? f = r : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(r, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, h) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, r.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[t(r.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function w(a) {
        return a.raw = a
    }

    function x(a) {
        var b = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && a[t(r.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ja(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    function ka(a) {
        return a instanceof Array ? a : ja(x(a))
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = fa && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (fa && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function z(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ra = b.prototype
    }

    function ta() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var h = d[f];
                    if (b.call(c, h, f, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    u("WeakMap", function(a) {
        function b(h) {
            this.h = (f += Math.random() + 1).toString();
            if (h) {
                h = x(h);
                for (var g; !(g = h.next()).done;) g = g.value, this.set(g[0], g[1])
            }
        }

        function c() {}

        function d(h) {
            var g = typeof h;
            return "object" === g && null !== h || "function" === g
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        g = Object.seal({}),
                        k = new a([
                            [h, 2],
                            [g, 3]
                        ]);
                    if (2 != k.get(h) || 3 != k.get(g)) return !1;
                    k.delete(h);
                    k.set(g, 4);
                    return !k.has(h) && 4 == k.get(g)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(h, g) {
            if (!d(h)) throw Error("Invalid WeakMap key");
            if (!la(h, e)) {
                var k = new c;
                ca(h, e, {
                    value: k
                })
            }
            if (!la(h, e)) throw Error("WeakMap key fail: " + h);
            h[e][this.h] = g;
            return this
        };
        b.prototype.get = function(h) {
            return d(h) && la(h, e) ? h[e][this.h] : void 0
        };
        b.prototype.has = function(h) {
            return d(h) && la(h, e) && la(h[e], this.h)
        };
        b.prototype.delete = function(h) {
            return d(h) && la(h, e) && la(h[e], this.h) ? delete h[e][this.h] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var g = {};
            return g.F = g.next = g.head = g
        }

        function c(g, k) {
            var l = g.h;
            return ia(function() {
                if (l) {
                    for (; l.head != g.h;) l = l.F;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(g, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++h, f.set(k, l)) : l = "p_" + k;
            var m = g.i[l];
            if (m && la(g.i, l))
                for (g = 0; g < m.length; g++) {
                    var p = m[g];
                    if (k !== k && p.key !== p.key || k === p.key) return {
                        id: l,
                        list: m,
                        index: g,
                        u: p
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }

        function e(g) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (g) {
                g = x(g);
                for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var g = Object.seal({
                            x: 4
                        }),
                        k = new a(x([
                            [g, "s"]
                        ]));
                    if ("s" != k.get(g) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = t(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done ||
                        4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = new r.WeakMap;
        e.prototype.set = function(g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.i[l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this.h,
                F: this.h.F,
                head: this.h,
                key: g,
                value: k
            }, l.list.push(l.u), this.h.F.next = l.u, this.h.F = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(g) {
            g = d(this, g);
            return g.u && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.i[g.id], g.u.F.next = g.u.next, g.u.next.F = g.u.F,
                g.u.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.F = b();
            this.size = 0
        };
        e.prototype.has = function(g) {
            return !!d(this, g).u
        };
        e.prototype.get = function(g) {
            return (g = d(this, g).u) && g.value
        };
        e.prototype.entries = function() {
            return c(this, function(g) {
                return [g.key, g.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(g) {
                return g.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(g) {
                return g.value
            })
        };
        e.prototype.forEach = function(g, k) {
            for (var l = t(this, "entries").call(this),
                    m; !(m = l.next()).done;) m = m.value, g.call(k, m[1], m[0], this)
        };
        e.prototype[t(r.Symbol, "iterator")] = t(e.prototype, "entries");
        var h = 0;
        return e
    }, "es6");
    u("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    u("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");

    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(r.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");

    function va(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;)
                if (d[c++] != b[h++]) return !1;
            return h >= f
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    u("Set", function(a) {
        function b(c) {
            this.h = new r.Map;
            if (c) {
                c = x(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(x([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] ==
                        c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (h) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return t(this.h, "entries").call(this.h)
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype, "values");
        b.prototype[t(r.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    u("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) la(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== va(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var A = this || self;

    function wa(a) {
        a = a.split(".");
        for (var b = A, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        return Object.prototype.hasOwnProperty.call(a, za) && a[za] || (a[za] = ++Aa)
    }
    var za = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Aa = 0;

    function Ba(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ca(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ra = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Wa = function(d, e, f) {
            for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++) h[g - 2] = arguments[g];
            return b.prototype[e].apply(d, h)
        }
    }

    function Da(a) {
        return a
    };
    var Ea = (new Date).getTime();
    var Fa = {};

    function Ga(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ga);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    Ca(Ga, Error);
    Ga.prototype.name = "CustomError";

    function Ha(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ga.call(this, c + a[d])
    }
    Ca(Ha, Ga);
    Ha.prototype.name = "AssertionError";

    function Ia(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ja(a) {
        if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(La, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
        return a
    }
    var La = /&/g,
        Ma = /</g,
        Na = />/g,
        Oa = /"/g,
        Pa = /'/g,
        Qa = /\x00/g,
        Ka = /[\x00&<>"']/;

    function Ra(a, b) {
        var c = 0;
        a = Ia(String(a)).split(".");
        b = Ia(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length) break;
                c = Sa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Sa(0 == f[2].length, 0 == h[2].length) || Sa(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function Sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ta() {
        var a = A.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function D(a) {
        return -1 != Ta().indexOf(a)
    };

    function Ua() {
        return D("Trident") || D("MSIE")
    }

    function Va() {
        return (D("Chrome") || D("CriOS")) && !D("Edge") || D("Silk")
    }

    function Wa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Xa() {
        var a = Ta();
        if (Ua()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Wa(b);
        return D("Opera") ? a(["Version", "Opera"]) :
            D("Edge") ? a(["Edge"]) : D("Edg/") ? a(["Edg"]) : D("Silk") ? a(["Silk"]) : Va() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ya(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function $a(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function ab(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var g = f[h];
                b.call(void 0, g, h, a) && (d[e++] = g)
            } return d
    }

    function bb(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function cb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function db(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function eb(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function fb(a, b) {
        return 0 <= Ya(a, b)
    };

    function gb(a) {
        gb[" "](a);
        return a
    }
    gb[" "] = function() {};
    var hb = Ua();
    !D("Android") || Va();
    Va();
    !D("Safari") || Va();
    var ib = {},
        jb = null;

    function kb(a) {
        var b;
        void 0 === b && (b = 0);
        if (!jb) {
            jb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                ib[e] = f;
                for (var h = 0; h < f.length; h++) {
                    var g = f[h];
                    void 0 === jb[g] && (jb[g] = h)
                }
            }
        }
        b = ib[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            g = a[f + 2];
            h = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | g >> 6];
            g = b[g & 63];
            c[e++] = h + k + l + g
        }
        h = 0;
        g = d;
        switch (a.length - f) {
            case 2:
                h =
                    a[f + 1], g = b[(h & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | h >> 4] + g + d
        }
        return c.join("")
    };
    var lb = "undefined" !== typeof Uint8Array,
        mb = {};
    var nb;

    function ob(a) {
        if (mb !== mb) throw Error("illegal external caller");
        this.fa = a;
        if (null !== a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    ob.prototype.isEmpty = function() {
        return null == this.fa
    };
    var pb = "function" === typeof r.Symbol && "symbol" === typeof(0, r.Symbol)() ? (0, r.Symbol)(void 0) : void 0;

    function qb(a, b) {
        Object.isFrozen(a) || (pb ? a[pb] |= b : void 0 !== a.N ? a.N |= b : Object.defineProperties(a, {
            N: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function rb(a) {
        var b;
        pb ? b = a[pb] : b = a.N;
        return null == b ? 0 : b
    }

    function sb(a) {
        qb(a, 1);
        return a
    }

    function E(a) {
        return Array.isArray(a) ? !!(rb(a) & 2) : !1
    }

    function tb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        qb(a, 2)
    }

    function wb(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? qb(a, 8) : Object.isFrozen(a) || (pb ? a[pb] &= -9 : void 0 !== a.N && (a.N &= -9))
    };

    function xb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var yb, zb = Object.freeze(sb([]));

    function Ab(a) {
        if (E(a.m)) throw Error("Cannot mutate an immutable Message");
    }
    var Bb = "undefined" != typeof r.Symbol && "undefined" != typeof r.Symbol.hasInstance;

    function Cb(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Db(a, b) {
        var c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function Eb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (lb && null != a && a instanceof Uint8Array) return kb(a);
                    if (a instanceof ob) {
                        var b = a.fa;
                        b = null == b || "string" === typeof b ? b : lb && b instanceof Uint8Array ? kb(b) : null;
                        return (a.fa = b) || ""
                    }
                }
        }
        return a
    };

    function Fb(a) {
        var b = Gb;
        b = void 0 === b ? Hb : b;
        return Ib(a, b)
    }

    function Jb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Ib(a, b);
            else if (xb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Jb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Ib(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Jb(c[d], b);
        Array.isArray(a) && rb(a) & 1 && sb(c);
        return c
    }

    function Gb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Eb(a);
        return Array.isArray(a) ? Fb(a) : a
    }

    function Hb(a) {
        return lb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };

    function Kb(a) {
        return a.i || (a.i = a.m[a.j + a.K] = {})
    }

    function Lb(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.m[b + a.K]
    }

    function G(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Ab(a);
        b < a.j && !d ? a.m[b + a.K] = c : Kb(a)[b] = c;
        return a
    }

    function Mb(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e = Lb(a, b, d);
        Array.isArray(e) || (e = zb);
        if (E(a.m)) c && (tb(e), Object.freeze(e));
        else if (e === zb || E(e)) e = sb(e.slice()), G(a, b, e, d);
        return e
    }

    function Nb(a, b) {
        a = Lb(a, b);
        return null == a ? a : !!a
    }

    function H(a, b, c) {
        a = Lb(a, b);
        return null == a ? c : a
    }

    function Ob(a, b) {
        a = Nb(a, b);
        return null == a ? !1 : a
    }

    function Pb(a, b) {
        a = Lb(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function Qb(a, b, c) {
        null == c ? c = zb : sb(c);
        return G(a, b, c)
    }

    function Rb(a, b, c) {
        Ab(a);
        0 !== c ? G(a, b, c) : G(a, b, void 0, !1);
        return a
    }

    function Sb(a, b, c, d) {
        Ab(a);
        (c = Tb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), G(a, c));
        return G(a, b, d)
    }

    function Tb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != Lb(a, e) && (0 !== c && G(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function Ub(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (-1 === c) var e = null;
        else a.h || (a.h = {}), e = a.h[c], e || (b = Db(Lb(a, c, d), b), void 0 != b && (a.h[c] = b, E(a.m) && tb(b.m), e = b));
        if (null == e) return e;
        E(e.m) && !E(a.m) && (e = e.ea(Fa), G(a, c, e.m, d), a.h[c] = e);
        return e
    }

    function Vb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        a.h || (a.h = {});
        var e = E(a.m),
            f = a.h[c];
        if (!f) {
            var h = Mb(a, c, !0, d);
            f = [];
            var g = e || E(h);
            e = e || g;
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                e = e || E(l);
                l = Db(l, b);
                void 0 !== l && (f.push(l), g && tb(l.m))
            }
            g && (tb(f), Object.freeze(f));
            a.h[c] = f;
            wb(h, !e)
        }
        b = f;
        f = E(a.m);
        if (c = a = Mb(a, c, d)) {
            if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
            c = !(rb(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && E(d.m) && !f && (b[c] = b[c].ea(Fa), a[c] = b[c].m);
            wb(a, !0)
        }
        return b
    }

    function Wb(a, b, c) {
        Ab(a);
        a.h || (a.h = {});
        var d = null != c ? c.m : c;
        a.h[b] = c;
        return G(a, b, d)
    }

    function Xb(a, b, c) {
        var d = Yb;
        Ab(a);
        a.h || (a.h = {});
        var e = null != c ? c.m : c;
        a.h[b] = c;
        return Sb(a, b, d, e)
    }

    function $b(a, b, c) {
        Ab(a);
        if (null != c) {
            var d = sb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].m, e = e || E(d[f]);
            a.h || (a.h = {});
            a.h[b] = c;
            wb(d, !e)
        } else a.h && (a.h[b] = void 0), d = zb;
        return G(a, b, d)
    }

    function I(a, b) {
        return H(a, b, "")
    }

    function ac(a, b, c) {
        b = Tb(a, c) === b ? b : -1;
        return H(a, b, 0)
    };

    function bc(a, b, c) {
        a || (a = cc);
        cc = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.K = (d ? 0 : -1) - (this.constructor.h || 0);
        this.h = void 0;
        this.m = a;
        a: {
            d = this.m.length;a = d - 1;
            if (d && (d = this.m[a], xb(d))) {
                this.j = a - this.K;
                this.i = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, a + 1 - this.K), this.i = void 0) : this.j = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.j) a += this.K, (d = this.m[a]) ? Array.isArray(d) && sb(d) : this.m[a] = zb;
                else {
                    d = Kb(this);
                    var e = d[a];
                    e ? Array.isArray(e) && sb(e) : d[a] = zb
                }
    }
    bc.prototype.toJSON = function() {
        var a = this.m;
        return yb ? a : Fb(a)
    };

    function dc(a, b) {
        return Eb(b)
    }
    var cc;

    function ec() {
        bc.apply(this, arguments)
    }
    z(ec, bc);
    ec.prototype.ea = function() {
        return this
    };
    if (Bb) {
        var fc = {};
        Object.defineProperties(ec, (fc[r.Symbol.hasInstance] = Cb(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), fc))
    };

    function gc(a, b, c, d, e, f) {
        (a = a.h && a.h[c]) ? Array.isArray(a) ? (e = f.aa ? sb(a.slice()) : a, $b(b, c, e)) : Wb(b, c, a): (lb && d instanceof Uint8Array ? e = d.length ? new ob(new Uint8Array(d)) : nb || (nb = new ob(null)) : (Array.isArray(d) && (e ? tb(d) : Array.isArray(d) && rb(d) & 1 && f.aa && (d = d.slice())), e = d), G(b, c, e))
    };

    function J() {
        ec.apply(this, arguments)
    }
    z(J, ec);
    J.prototype.ea = function(a) {
        if (a !== Fa) throw Error("requires a valid immutable API token");
        if (E(this.m)) {
            a = {
                aa: !0
            };
            var b = E(this.m);
            if (b && !a.aa) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.ta && (c.ta = this.ta.slice());
            for (var d = this.m, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && xb(f))
                    for (g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            t(Number, "isNaN").call(Number, h) ? Kb(c)[g] = f[g] : gc(this, c, h, f[g], b, a)
                        }
                    } else gc(this, c, e - this.K,
                        f, b, a)
            }
            var g = c
        } else g = this;
        return g
    };
    if (Bb) {
        var hc = {};
        Object.defineProperties(J, (hc[r.Symbol.hasInstance] = Cb(Object[r.Symbol.hasInstance]), hc))
    };

    function ic(a) {
        J.call(this, a, -1, jc)
    }
    z(ic, J);

    function kc(a) {
        J.call(this, a)
    }
    z(kc, J);
    var jc = [2, 3];

    function lc(a, b) {
        this.h = a === mc && b || "";
        this.i = nc
    }
    lc.prototype.M = !0;
    lc.prototype.D = function() {
        return this.h
    };

    function oc(a) {
        return a instanceof lc && a.constructor === lc && a.i === nc ? a.h : "type_error:Const"
    }
    var nc = {},
        mc = {};

    function pc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function qc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    var rc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var sc;

    function tc() {
        if (void 0 === sc) {
            var a = null,
                b = A.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Da,
                        createScript: Da,
                        createScriptURL: Da
                    })
                } catch (c) {
                    A.console && A.console.error(c.message)
                }
                sc = a
            } else sc = a
        }
        return sc
    };

    function uc(a, b) {
        this.h = b === vc ? a : ""
    }
    n = uc.prototype;
    n.toString = function() {
        return this.h + ""
    };
    n.M = !0;
    n.D = function() {
        return this.h.toString()
    };
    n.ba = !0;
    n.T = function() {
        return 1
    };

    function wc(a) {
        return a instanceof uc && a.constructor === uc ? a.h : "type_error:TrustedResourceUrl"
    }
    var xc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        vc = {};

    function yc(a) {
        var b = tc();
        a = b ? b.createScriptURL(a) : a;
        return new uc(a, vc)
    }

    function zc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            } return b
    };

    function Ac(a, b) {
        this.h = b === Bc ? a : ""
    }
    n = Ac.prototype;
    n.toString = function() {
        return this.h.toString()
    };
    n.M = !0;
    n.D = function() {
        return this.h.toString()
    };
    n.ba = !0;
    n.T = function() {
        return 1
    };

    function Cc(a) {
        return a instanceof Ac && a.constructor === Ac ? a.h : "type_error:SafeUrl"
    }
    var Dc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ec = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Fc(a) {
        if (a instanceof Ac) return a;
        a = "object" == typeof a && a.M ? a.D() : String(a);
        Ec.test(a) ? a = new Ac(a, Bc) : (a = String(a), a = a.replace(/(%0A|%0D)/g, ""), a = a.match(Dc) ? new Ac(a, Bc) : null);
        return a
    }
    var Bc = {},
        Gc = new Ac("about:invalid#zClosurez", Bc);
    var Hc = {};

    function Ic(a, b) {
        this.h = b === Hc ? a : "";
        this.M = !0
    }
    Ic.prototype.D = function() {
        return this.h
    };
    Ic.prototype.toString = function() {
        return this.h.toString()
    };

    function Jc(a) {
        return a instanceof Ic && a.constructor === Ic ? a.h : "type_error:SafeStyle"
    }

    function Kc(a) {
        return new Ic(a, Hc)
    }

    function Lc(a) {
        var b = "",
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Mc).join(" ") : Mc(d), b += c + ":" + d + ";")
            } return b ? Kc(b) : Nc
    }
    var Nc = Kc("");

    function Mc(a) {
        if (a instanceof Ac) return 'url("' + Cc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof lc) a = oc(a);
        else {
            a = String(a);
            var b = a.replace(Oc, "$1").replace(Oc, "$1").replace(Pc, "url");
            if (Qc.test(b)) {
                if (b = !Rc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Sc(a)
                }
                a = b ? Tc(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ha("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Sc(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Qc = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Pc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Oc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Rc = /\/\*/;

    function Tc(a) {
        return a.replace(Pc, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, g, k) {
                f = g;
                return k
            });
            b = (Fc(d) || Gc).D();
            return c + f + b + f + e
        })
    };
    var Uc = {};

    function Vc(a, b, c) {
        this.h = c === Uc ? a : "";
        this.i = b;
        this.M = this.ba = !0
    }
    Vc.prototype.T = function() {
        return this.i
    };
    Vc.prototype.D = function() {
        return this.h.toString()
    };
    Vc.prototype.toString = function() {
        return this.h.toString()
    };

    function Wc(a) {
        return a instanceof Vc && a.constructor === Vc ? a.h : "type_error:SafeHtml"
    }

    function Xc(a) {
        if (a instanceof Vc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.ba && (c = a.T());
        return Yc(Ja(b && a.M ? a.D() : String(a)), c)
    }

    function Zc(a) {
        function b(f) {
            Array.isArray(f) ? f.forEach(b) : (f = Xc(f), e.push(Wc(f).toString()), f = f.T(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = Xc($c),
            d = c.T(),
            e = [];
        a.forEach(b);
        return Yc(e.join(Wc(c).toString()), d)
    }

    function ad(a) {
        return Zc(Array.prototype.slice.call(arguments))
    }

    function Yc(a, b) {
        var c = tc();
        a = c ? c.createHTML(a) : a;
        return new Vc(a, b, Uc)
    }
    var bd = /^[a-zA-Z0-9-]+$/,
        cd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        dd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        $c = new Vc(A.trustedTypes && A.trustedTypes.emptyHTML || "", 0, Uc);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function ed(a) {
        return Jc(a)
    };

    function fd(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function gd(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function hd(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function id(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function jd() {
        return D("iPad") || D("Android") && !D("Mobile") || D("Silk")
    };
    var kd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ld(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    gb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function md(a) {
        return ld(a.top) ? a.top : null
    }

    function nd(a, b) {
        var c = od("SCRIPT", a);
        c.src = wc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function pd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function qd(a, b) {
        if (!rd() && !sd()) {
            var c = Math.random();
            if (c < b) return c = td(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function td() {
        if (!r.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            r.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function ud(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function vd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var sd = fd(function() {
        return cb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], wd) || 1E-4 > Math.random()
    });

    function xd(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function yd(a, b) {
        var c = sd() ? null : Math.floor(1E3 * td());
        var d;
        if (d = null != c && a) a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? c : null
    }
    var rd = fd(function() {
        return wd("MSIE")
    });

    function wd(a) {
        return -1 != Ta().indexOf(a)
    }
    var zd = /^([0-9.]+)px$/,
        Ad = /^(-?[0-9.]{1,30})$/;

    function Bd(a) {
        return (a = zd.exec(a)) ? +a[1] : null
    }
    var Cd = fd(function() {
        return !jd() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile")) ? 2 : jd() ? 1 : 0
    });

    function Dd(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = od("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }

    function Ed(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function od(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var K = window,
        Fd, Gd = null,
        Hd = document.getElementsByTagName("script");
    Hd && Hd.length && (Gd = Hd[Hd.length - 1]);
    Fd = Gd;
    var Id = null;

    function Jd(a) {
        a = void 0 === a ? A : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Kd(a) {
        return (a = a || Jd()) ? ld(a.master) ? a.master : null : null
    };

    function Ld(a) {
        var b = ta.apply(1, arguments);
        if (0 === b.length) return yc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return yc(c.join(""))
    };

    function Md(a) {
        return Kc(a.map(ed).join(""))
    };

    function Nd(a) {
        return a instanceof uc ? wc(a) : wc(a)
    };

    function Od(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Pd() {
        var a = void 0 === a ? K : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Qd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function Rd(a, b) {
        this.h = a;
        this.i = b
    }
    Rd.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof Rd ? a : Sd(a)) : this
    };

    function Sd(a) {
        return new Rd({
            value: a
        }, null)
    }

    function Td(a) {
        try {
            return Sd(a())
        } catch (b) {
            return new Rd(null, b)
        }
    };

    function Ud(a) {
        J.call(this, a)
    }
    z(Ud, J);

    function Vd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Wd(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Xd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Yd(a, b) {
        this.h = a;
        this.i = b
    }

    function Zd(a, b, c) {
        this.url = a;
        this.Ba = b;
        this.ua = !!c;
        this.depth = null
    };

    function $d(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = od("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        h = Ya(f, d);
                    0 <= h && Array.prototype.splice.call(f, h, 1)
                }
                id(d, "load", e);
                id(d, "error", e)
            };
            hd(d, "load", e);
            hd(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function ae(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        ud(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        be(c, b)
    }

    function be(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : $d(c, a, void 0 === b ? !1 : b)
    };

    function ce() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function de(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function ee(a, b, c, d, e) {
        var f = [];
        ud(a, function(h, g) {
            (h = fe(h, b, c, d, e)) && f.push(g + "=" + h)
        });
        return f.join(b)
    }

    function fe(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], h = 0; h < a.length; h++) f.push(fe(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ee(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ge(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = he(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, p) {
            return m - p
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var h = a.h[f], g = a.i[h], k = 0; k < g.length; k++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                var l = ee(g[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function he(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function ie() {
        this.h = Math.random()
    }

    function je() {
        var a = ke,
            b = A.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function le(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof ce) var f = c;
            else f = new ce, ud(c, function(g, k) {
                var l = f,
                    m = l.l++;
                g = de(k, g);
                l.h.push(m);
                l.i[m] = g
            });
            var h = ge(f, "/pagead/gen_204?id=" + b + "&");
            h && $d(A, h, !1)
        } catch (g) {}
    };
    var me = null;

    function ne() {
        if (null === me) {
            me = "";
            try {
                var a = "";
                try {
                    a = A.top.location.hash
                } catch (c) {
                    a = A.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    me = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return me
    };

    function oe() {
        var a = void 0 === a ? A : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function pe() {
        var a = void 0 === a ? A : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function qe(a, b) {
        var c = pe() || oe();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var re = A.performance,
        se = !!(re && re.mark && re.measure && re.clearMarks),
        te = fd(function() {
            var a;
            if (a = se) a = ne(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ue() {
        this.i = [];
        this.j = A || A;
        var a = null;
        A && (A.google_js_reporting_queue = A.google_js_reporting_queue || [], this.i = A.google_js_reporting_queue, a = A.google_measure_js_timing);
        this.h = te() || (null != a ? a : 1 > Math.random())
    }

    function ve(a) {
        a && re && te() && (re.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), re.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ue.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new qe(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        re && te() && re.mark(b);
        return a
    };
    ue.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (pe() || oe()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            re && te() && re.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };

    function we() {
        var a = xe;
        this.o = ke;
        this.i = null;
        this.l = this.A;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = we.prototype;
    n.za = function(a) {
        this.l = a
    };
    n.ya = function(a) {
        this.i = a
    };
    n.Aa = function(a) {
        this.j = a
    };
    n.Z = function(a, b) {
        try {
            if (this.h && this.h.h) {
                var c = this.h.start(a.toString(), 3);
                var d = b();
                this.h.end(c)
            } else d = b()
        } catch (h) {
            b = !0;
            try {
                ve(c), b = this.l(a, new Vd(h, {
                    message: ye(h)
                }), void 0, void 0)
            } catch (g) {
                this.A(217, g)
            }
            if (b) {
                var e, f;
                null == (e = window.console) || null == (f = e.error) || f.call(e, h)
            } else throw h;
        }
        return d
    };
    n.wa = function(a, b) {
        var c = this;
        return function() {
            var d = ta.apply(0, arguments);
            return c.Z(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.A = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new ce;
            f.h.push(1);
            f.i[1] = de("context", a);
            Wd(b) || (b = new Vd(b, {
                message: ye(b)
            }));
            if (b.msg) {
                var h = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = de("msg", h)
            }
            var g = b.meta || {};
            if (this.i) try {
                this.i(g)
            } catch (Zb) {}
            if (d) try {
                d(g)
            } catch (Zb) {}
            b = [g];
            f.h.push(3);
            f.i[3] = b;
            d = A;
            b = [];
            h = null;
            do {
                var k = d;
                if (ld(k)) {
                    var l = k.location.href;
                    h = k.document && k.document.referrer || null
                } else l = h, h = null;
                b.push(new Zd(l || "", k));
                try {
                    d = k.parent
                } catch (Zb) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = A;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var p = b[m];
                    p.url || (p.url = k.location.ancestorOrigins[m - 1] || "", p.ua = !0)
                }
            var q = new Zd(A.location.href, A, !1);
            k = null;
            var y = b.length - 1;
            for (p = y; 0 <= p; --p) {
                var B = b[p];
                !k && Xd.test(B.url) && (k = B);
                if (B.url && !B.ua) {
                    q = B;
                    break
                }
            }
            B = null;
            var F = b.length && b[y].url;
            0 != q.depth && F && (B = b[y]);
            var v = new Yd(q, B);
            if (v.i) {
                var C = v.i.url || "";
                f.h.push(4);
                f.i[4] = de("top", C)
            }
            var Y = {
                url: v.h.url || ""
            };
            if (v.h.url) {
                var Za = v.h.url.match(kd),
                    xa = Za[1],
                    ub = Za[3],
                    vb = Za[4];
                q = "";
                xa && (q += xa + ":");
                ub && (q += "//", q += ub, vb && (q += ":" + vb));
                var Xe = q
            } else Xe = "";
            Y = [Y, {
                url: Xe
            }];
            f.h.push(5);
            f.i[5] = Y;
            le(this.o, e, f, this.j, c)
        } catch (Zb) {
            try {
                le(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ye(Zb),
                    url: v && v.h.url
                }, this.j, c)
            } catch (Zk) {}
        }
        return !0
    };
    n.xa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.A(a, d instanceof Error ? d : Error(d))
        })
    };

    function ye(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function ze(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, ze) : this.stack = Error().stack || ""
    }
    z(ze, Error);

    function Ae(a) {
        return null !== a && void 0 !== a
    }
    var Be = void 0;

    function Ce(a, b) {
        var c = Be;
        Be = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }

    function De(a) {
        var b = Be;
        Be = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };

    function Ee(a) {
        return "string" === typeof a
    }

    function Fe(a) {
        return void 0 === a
    };

    function Ge(a) {
        J.call(this, a, -1, He)
    }
    z(Ge, J);
    var He = [2, 8],
        Ie = [3, 4, 5],
        Je = [6, 7];
    var Ke;
    Ke = {
        Ua: 0,
        Ca: 3,
        Da: 4,
        Ea: 5
    };
    var Le = Ke.Ca,
        Me = Ke.Da,
        Ne = Ke.Ea;

    function Oe(a) {
        return null != a ? !a : a
    }

    function Pe(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Qe(a, b) {
        var c = Vb(a, Ge, 2);
        if (!c.length) return Re(a, b);
        a = H(a, 1, 0);
        if (1 === a) return Oe(Qe(c[0], b));
        c = bb(c, function(d) {
            return function() {
                return Qe(d, b)
            }
        });
        switch (a) {
            case 2:
                return Pe(c, !1);
            case 3:
                return Pe(c, !0)
        }
    }

    function Re(a, b) {
        var c = Tb(a, Ie);
        a: {
            switch (c) {
                case Le:
                    var d = ac(a, 3, Ie);
                    break a;
                case Me:
                    d = ac(a, 4, Ie);
                    break a;
                case Ne:
                    d = ac(a, 5, Ie);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ka(Mb(a, 8)))
            } catch (f) {
                return
            }
            b = H(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = I(a, 7 === Tb(a, Je) ? 7 : -1);
            else a: {
                switch (c) {
                    case Me:
                        a = Pb(a, 6 === Tb(a, Je) ? 6 : -1);
                        break a;
                    case Ne:
                        a = I(a, 7 === Tb(a, Je) ? 7 : -1);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ra(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Ee(a) && Ee(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ra(String(e), a);
                    case 11:
                        return null != e && 1 === Ra(String(e), a)
                }
            }
        }
    }

    function Se(a, b) {
        return !a || !(!b || !Qe(a, b))
    };

    function Te(a) {
        J.call(this, a, -1, Ue)
    }
    z(Te, J);
    var Ue = [4];

    function Ve(a) {
        J.call(this, a)
    }
    z(Ve, J);

    function We(a) {
        J.call(this, a, -1, Ye)
    }
    z(We, J);
    var Ye = [5],
        Ze = [1, 2, 3, 6, 7];

    function $e(a) {
        a.Na.apply(a, ka(ta.apply(1, arguments).map(function(b) {
            return {
                Sa: 4,
                message: b
            }
        })))
    };

    function af(a) {
        return function() {
            var b = ta.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var bf = af(function(a) {
        var b = [],
            c = {};
        a = x(a);
        for (var d = a.next(); !d.done; c = {
                Y: c.Y
            }, d = a.next()) c.Y = d.value, af(function(e) {
            return function() {
                var f = {};
                b.push([(f[e.Y.Sa] = e.Y.message.toJSON(), f)])
            }
        }(c))();
        return JSON.stringify([b])
    });

    function cf(a, b) {
        if (r.globalThis.fetch) r.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function df(a) {
        var b = void 0 === b ? cf : b;
        this.l = void 0 === a ? 1E3 : a;
        this.j = b;
        this.i = [];
        this.h = null
    }
    df.prototype.Na = function() {
        var a = ta.apply(0, arguments),
            b = this;
        af(function() {
            b.i.push.apply(b.i, ka(a));
            var c = af(function() {
                var d = bf(b.i);
                b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.i = [];
                b.h = null
            });
            100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
        })()
    };

    function ef(a) {
        J.call(this, a, -1, ff)
    }
    z(ef, J);

    function gf(a, b) {
        return Wb(a, 1, b)
    }

    function hf(a, b) {
        return $b(a, 2, b)
    }

    function jf(a, b) {
        return Qb(a, 4, b)
    }

    function kf(a, b) {
        return $b(a, 5, b)
    }

    function lf(a, b) {
        return Rb(a, 6, b)
    }

    function mf(a) {
        J.call(this, a)
    }
    z(mf, J);
    mf.prototype.L = function() {
        return H(this, 1, 0)
    };

    function nf(a, b) {
        return Rb(a, 1, b)
    }

    function of (a, b) {
        return Rb(a, 2, b)
    }

    function pf(a) {
        J.call(this, a)
    }
    z(pf, J);
    var ff = [2, 4, 5],
        qf = [1, 2];

    function rf(a) {
        J.call(this, a, -1, sf)
    }
    z(rf, J);

    function tf(a) {
        J.call(this, a, -1, uf)
    }
    z(tf, J);
    var sf = [2, 3],
        uf = [5],
        vf = [1, 2, 3, 4];

    function wf(a) {
        J.call(this, a)
    }
    z(wf, J);
    wf.prototype.getTagSessionCorrelator = function() {
        return H(this, 2, 0)
    };

    function xf(a) {
        var b = new wf;
        return Xb(b, 4, a)
    }
    var Yb = [4, 5, 7];

    function yf(a, b, c) {
        var d = void 0 === d ? new df(b) : d;
        this.i = a;
        this.o = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && td() < 1 / this.i
    }

    function zf(a, b, c, d, e, f) {
        var h = of (nf(new mf, b), c);
        b = lf(hf(gf(kf(jf(new ef, d), e), h), a.h), f);
        b = xf(b);
        a.l && $e(a.j, Af(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(g) {
                return g.L() === h.L() && H(g, 2, 0) === c
            })) a.h.push(h), 100 < a.h.length && a.h.shift()
    }

    function Bf(a, b, c, d) {
        if (a.o) {
            var e = new rf;
            b = $b(e, 2, b);
            c = $b(b, 3, c);
            d && Rb(c, 1, d);
            d = new wf;
            d = Xb(d, 7, c);
            a.l && $e(a.j, Af(a, d))
        }
    }

    function Af(a, b) {
        b = Rb(b, 1, Date.now());
        var c = Ed(window);
        b = Rb(b, 2, c);
        return Rb(b, 6, a.i)
    };

    function L(a) {
        var b = "ca";
        if (a.ca && a.hasOwnProperty(b)) return a.ca;
        b = new a;
        return a.ca = b
    };

    function Cf() {
        var a = {};
        this.h = (a[Le] = {}, a[Me] = {}, a[Ne] = {}, a)
    };
    var Df = /^true$/.test("false");

    function Ef(a, b) {
        switch (b) {
            case 1:
                return ac(a, 1, Ze);
            case 2:
                return ac(a, 2, Ze);
            case 3:
                return ac(a, 3, Ze);
            case 6:
                return ac(a, 6, Ze);
            default:
                return null
        }
    }

    function Ff(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Ob(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return Pb(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return Mb(a, 4);
            default:
                return null
        }
    }
    var Gf = fd(function() {
        if (!Df) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Hf(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, h;
        L(If).j[e] = null != (h = null == (f = L(If).j[e]) ? void 0 : f.add(b)) ? h : (new r.Set).add(b);
        e = Gf();
        if (null != e[b]) return e[b];
        b = Jf(d)[b];
        if (!b) return c;
        b = new We(b);
        b = Kf(b);
        a = Ff(b, a);
        return null != a ? a : c
    }

    function Kf(a) {
        var b = L(Cf).h;
        if (b) {
            var c = eb(Vb(a, Ve, 5), function(d) {
                return Se(Ub(d, Ge, 1), b)
            });
            if (c) return Ub(c, Te, 2)
        }
        return Ub(a, Te, 4)
    }

    function If() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new r.Map
    }

    function Lf(a, b, c) {
        return !!Hf(1, a, void 0 === b ? !1 : b, c)
    }

    function Mf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Hf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Nf(a, b, c) {
        return Hf(3, a, void 0 === b ? "" : b, c)
    }

    function Of(a, b, c) {
        b = void 0 === b ? [] : b;
        return Hf(6, a, b, c)
    }

    function Jf(a) {
        return L(If).i[a] || (L(If).i[a] = {})
    }

    function Pf(a, b) {
        var c = Jf(b);
        ud(a, function(d, e) {
            return c[e] = d
        })
    }

    function Qf(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            h = [];
        $a(b, function(g) {
            var k = Jf(g);
            $a(a, function(l) {
                var m = Tb(l, Ze),
                    p = Ef(l, m);
                if (p) {
                    var q, y, B;
                    var F = null != (B = null == (q = L(If).h.get(g)) ? void 0 : null == (y = q.get(p)) ? void 0 : y.slice(0)) ? B : [];
                    a: {
                        q = new tf;
                        switch (m) {
                            case 1:
                                Sb(q, 1, vf, p);
                                break;
                            case 2:
                                Sb(q, 2, vf, p);
                                break;
                            case 3:
                                Sb(q, 3, vf, p);
                                break;
                            case 6:
                                Sb(q, 4, vf, p);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Qb(q, 5, F);m = q
                    }
                    if (F = m) {
                        var v;
                        F = !(null == (v = L(If).j[g]) || !v.has(p))
                    }
                    F && f.push(m);
                    if (v = m) {
                        var C;
                        v = !(null == (C = L(If).h.get(g)) ||
                            !C.has(p))
                    }
                    v && h.push(m);
                    e || (C = L(If), C.h.has(g) || C.h.set(g, new r.Map), C.h.get(g).has(p) || C.h.get(g).set(p, []), d && C.h.get(g).get(p).push(d));
                    k[p] = l.toJSON()
                }
            })
        });
        (f.length || h.length) && Bf(c, f, h, null != d ? d : void 0)
    }

    function Rf(a, b) {
        var c = Jf(b);
        $a(a, function(d) {
            var e = new We(d),
                f = Tb(e, Ze);
            (e = Ef(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Sf() {
        return bb(t(Object, "keys").call(Object, L(If).i), function(a) {
            return Number(a)
        })
    }

    function Tf(a) {
        fb(L(If).l, a) || Pf(Jf(4), a)
    };

    function M(a) {
        this.methodName = a
    }
    var Uf = new M(1),
        Vf = new M(16),
        Wf = new M(15),
        Xf = new M(2),
        Yf = new M(3),
        Zf = new M(4),
        $f = new M(5),
        ag = new M(6),
        bg = new M(7),
        cg = new M(8),
        dg = new M(9),
        eg = new M(10),
        fg = new M(11),
        gg = new M(12),
        hg = new M(13),
        ig = new M(14);

    function N(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function O(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function jg(a) {
        N($f, Lf, a);
        N(ag, Mf, a);
        N(bg, Nf, a);
        N(cg, Of, a);
        N(hg, Rf, a);
        N(Wf, Tf, a)
    }

    function kg(a) {
        N(Zf, function(b) {
            L(Cf).h = b
        }, a);
        N(dg, function(b, c) {
            var d = L(Cf);
            d.h[Le][b] || (d.h[Le][b] = c)
        }, a);
        N(eg, function(b, c) {
            var d = L(Cf);
            d.h[Me][b] || (d.h[Me][b] = c)
        }, a);
        N(fg, function(b, c) {
            var d = L(Cf);
            d.h[Ne][b] || (d.h[Ne][b] = c)
        }, a);
        N(ig, function(b) {
            for (var c = L(Cf), d = x([Le, Me, Ne]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function lg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function mg() {
        this.l = function() {};
        this.j = function() {};
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function ng(a, b, c) {
        a.l = O(Uf, b, function() {});
        a.i = function(d) {
            O(Xf, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return O(Yf, b, function() {
                return []
            })(c)
        };
        a.j = function(d) {
            O(Vf, b, function() {})(d, c)
        }
    };
    var ke, og, xe = new ue;

    function pg(a) {
        null != a && (A.google_measure_js_timing = a);
        A.google_measure_js_timing || (a = xe, a.h = !1, a.i != a.j.google_js_reporting_queue && (te() && $a(a.i, ve), a.i.length = 0))
    }(function(a) {
        ke = a || new ie;
        "number" !== typeof A.google_srt && (A.google_srt = Math.random());
        je();
        og = new we;
        og.Aa(!0);
        "complete" == A.document.readyState ? pg() : xe.h && hd(A, "load", function() {
            pg()
        })
    })();

    function qg(a, b) {
        return og.Z(a, b)
    }

    function rg(a, b) {
        return og.wa(a, b)
    }

    function sg(a, b, c, d) {
        var e;
        Wd(b) ? e = b.msg || ye(b.error) : e = ye(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Vd ? b.error : b, c.pbr || (c.pbr = !0, og.A(a, b, .1, d, "puberror")), !1) : og.A(a, b, c, d)
    };

    function tg(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Td(function() {
            if (null == c || "" == c) var d = new Ud;
            else {
                d = JSON.parse(c);
                if (!Array.isArray(d)) {
                    var e = typeof d;
                    throw Error("Expected to deserialize an Array but got " + ("object" != e ? e : d ? Array.isArray(d) ? "array" : e : "null") + ": " + d);
                }
                cc = d;
                d = new Ud(d);
                cc = null
            }
            return d
        }) : Sd(null)
    };

    function ug() {
        this.S = {}
    }
    var vg = null,
        wg = {},
        xg = (wg[8] = "google_prev_ad_formats_by_region", wg[9] = "google_prev_ad_slotnames_by_region", wg);

    function yg(a) {
        J.call(this, a)
    }
    z(yg, J);

    function zg(a) {
        var b = new yg;
        return G(b, 5, a)
    };

    function Ag() {
        this.o = this.o;
        this.B = this.B
    }
    Ag.prototype.o = !1;
    Ag.prototype.l = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };

    function Bg(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Cg(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        Ag.call(this);
        this.i = a;
        this.h = null;
        this.v = {};
        this.H = 0;
        this.C = b;
        this.G = c;
        this.j = null
    }
    z(Cg, Ag);
    Cg.prototype.l = function() {
        this.v = {};
        this.j && (id(this.i, "message", this.j), delete this.j);
        delete this.v;
        delete this.i;
        delete this.h;
        Ag.prototype.l.call(this)
    };
    Cg.prototype.addEventListener = function(a) {
        function b(h, g) {
            clearTimeout(f);
            h ? (d = h, d.internalErrorState = Bg(d), d.internalBlockOnErrors = c.G, g && 0 === d.internalErrorState || (d.tcString = "tcunavailable", g || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.G
            },
            e = gd(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.C && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.C));
        try {
            Dg(this, "addEventListener", b)
        } catch (h) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    Cg.prototype.removeEventListener = function(a) {
        a && a.listenerId && Dg(this, "removeEventListener", null, a.listenerId)
    };

    function Dg(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.i.__tcfapi) a = a.i.__tcfapi, a(b, 2, c, d);
        else if (Eg(a)) {
            Fg(a);
            var e = ++a.H;
            a.v[e] = c;
            a.h && (c = {}, a.h.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Eg(a) {
        if (a.h) return a.h;
        a: {
            var b = a.i;
            for (var c = 0; 50 > c; ++c) {
                try {
                    var d = !(!b.frames || !b.frames.__tcfapiLocator)
                } catch (h) {
                    d = !1
                }
                if (d) break a;
                b: {
                    try {
                        var e = b.parent;
                        if (e && e != b) {
                            var f = e;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(b = f)) break
            }
            b = null
        }
        a.h = b;
        return a.h
    }

    function Fg(a) {
        a.j || (a.j = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, hd(a.i, "message", a.j))
    };

    function Gg(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Nb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Sd(b) : new Rd(null, Error("unav"))
    };

    function P(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Q(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Hg(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var Ig = new P(1084),
        Jg = new P(1082, !0),
        Kg = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Lg = new Q(1114, 1),
        Mg = new Q(1110),
        Ng = new Q(1111),
        Og = new Q(1112),
        Pg = new Q(1113),
        Qg = new Q(1104),
        Rg = new Q(1108),
        Sg = new Q(1106),
        Tg = new Q(1107),
        Ug = new Q(1105),
        Vg = new Q(1115, 1),
        Wg = new P(1121),
        Xg = new P(1143),
        Yg = new P(1026),
        Zg = new P(1090),
        $g = new P(1177),
        ah = new P(1162),
        bh = new P(1120),
        ch = new Q(1046),
        dh = new P(218),
        eh = new P(217),
        fh = new P(1179),
        gh = new P(227),
        hh = new P(208),
        ih = new P(282),
        jh = new Hg(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        kh = new P(203),
        lh = new P(434462125, !0),
        mh = new P(84),
        nh = new P(1928),
        oh = new P(1941),
        ph = new P(370946349),
        qh = new P(392736476, !0),
        rh = new Q(406149835),
        sh = new Hg(1932),
        th = new Q(1935);

    function uh(a, b) {
        var c = t(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (t(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + t(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? Kc(Jc(e)) : void 0
        };
        if (a)
            for (e = x(t(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = x(a.value), a = c.next().value, c = c.next().value, De(/^data-(?!xml)[_a-z][_a-z.0-9-]*$/.test(a)), d[a] = c;
        b = Yc((b instanceof Vc ? Wc(b) : Wc(b)).toString(), null);
        if (!bd.test("ins")) throw Error("");
        if ("INS" in dd) throw Error("");
        e = b;
        b = null;
        a = "";
        if (d)
            for (g in d)
                if (Object.prototype.hasOwnProperty.call(d, g)) {
                    if (!bd.test(g)) throw Error("");
                    var f = d[g];
                    if (null != f) {
                        c = g;
                        if (f instanceof lc) f = oc(f);
                        else if ("style" == c.toLowerCase()) {
                            var h = typeof f;
                            h = "object" == h && null != f || "function" == h;
                            if (!h) throw Error("");
                            f instanceof Ic || (f = Lc(f));
                            f = Jc(f)
                        } else {
                            if (/^on/i.test(c)) throw Error("");
                            if (c.toLowerCase() in cd)
                                if (f instanceof uc) f = wc(f).toString();
                                else if (f instanceof Ac) f = Cc(f);
                            else if ("string" === typeof f) f = (Fc(f) ||
                                Gc).D();
                            else throw Error("");
                        }
                        f.M && (f = f.D());
                        c = c + '="' + Ja(String(f)) + '"';
                        a += " " + c
                    }
                } var g = "<ins" + a;
        null == e ? e = [] : Array.isArray(e) || (e = [e]);
        !0 === rc.ins ? g += ">" : (b = ad(e), g += ">" + Wc(b).toString() + "</ins>", b = b.T());
        (d = d && d.dir) && (/^(ltr|rtl|auto)$/i.test(d) ? b = 0 : b = null);
        g = Yc(g, b);
        return Yc((g instanceof Vc ? Wc(g) : Wc(g)).toString(), null)
    };
    var vh = w(["border:none;margin:0;padding:0;position:relative;visibility:visible;background-color:transparent;"]),
        wh = w(["display:inline-table;"]),
        xh = w(["display:block;"]);

    function yh(a) {
        var b = K.document;
        var c = void 0;
        for (var d = 0; !c || b.getElementById(c + "_anchor");) c = "aswift_" + d++;
        var e = a.google_ad_width,
            f = a.google_ad_height,
            h = a.gml,
            g = a.gmr,
            k = a.gzi;
        d = [];
        if (h) {
            var l = d.push;
            var m = void 0 === m ? "" : m;
            De(isFinite(h));
            m = Kc(Jc(Lc({
                "margin-left": h + "px" + m
            })));
            l.call(d, m)
        }
        if (g) {
            m = d.push;
            var p = void 0 === p ? "" : p;
            De(isFinite(g));
            p = Kc(Jc(Lc({
                "margin-right": g + "px" + p
            })));
            m.call(d, p)
        }
        if (k) {
            p = d.push;
            var q = void 0 === q ? "" : q;
            De(t(Number, "isInteger").call(Number, k));
            q = Kc(Jc(Lc({
                "z-index": "" + k + q
            })));
            p.call(d, q)
        }
        a = a.google_ad_slot;
        q = $c;
        k = c + "_anchor";
        p = c + "_expand";
        g = Kc(vh[0]);
        if (e) {
            var y = void 0 === y ? "" : y;
            De(isFinite(e));
            y = Kc(Jc(Lc({
                width: e + "px" + y
            })));
            g = Md([g, y])
        }
        if (f) {
            y = g;
            var B = void 0 === B ? "" : B;
            De(isFinite(f));
            B = Kc(Jc(Lc({
                height: f + "px" + B
            })));
            g = Md([y, B])
        }
        B = Md([Kc(wh[0]), g].concat(ka(d)));
        d = Md([Kc(xh[0]), g]);
        f = new r.Map;
        a && f.set("data-ad-slot", a);
        B = uh({
            id: p,
            style: B,
            data: f
        }, uh({
            id: k,
            style: d
        }, q));
        b.write(Wc(B));
        return c
    };
    var zh = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Ah(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };
    var Bh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Ch(a, b) {
        this.j = a;
        this.i = b
    }
    Ch.prototype.minWidth = function() {
        return this.j
    };
    Ch.prototype.height = function() {
        return this.i
    };
    Ch.prototype.h = function(a) {
        return 300 < a && 300 < this.i ? this.j : Math.min(1200, Math.round(a))
    };

    function R(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Ch.call(this, a, b);
        this.X = c;
        this.Ka = d
    }
    z(R, Ch);
    R.prototype.da = function() {
        return this.X
    };

    function Dh(a) {
        return function(b) {
            return !!(b.X & a)
        }
    };

    function Eh() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Fh;
        this.sideRailProcessedFixedElements = new r.Set;
        this.sideRailAvailableSpace = new r.Map
    }

    function Fh() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Gh(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Hh(a) {
        return Gh(a).clientWidth
    };

    function Ih() {
        var a = {};
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function() {}
    }

    function S(a) {
        return L(Ih).j(a.h, a.defaultValue)
    }

    function T(a) {
        return L(Ih).l(a.h, a.defaultValue)
    };
    var Jh = w(["https://www.googletagservices.com/console/host/host.js"]),
        Kh = w(["https://www.googletagservices.com/console/panel/index.html"]),
        Lh = w(["https://www.googletagservices.com/console/overlay/index.html"]);
    Ld(Jh);
    Ld(Kh);
    Ld(Lh);

    function Mh(a, b) {
        do {
            var c = pd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Nh(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Oh(a) {
        var b = 0,
            c;
        for (c in Bh) - 1 != a.indexOf(c) && (b |= Bh[c]);
        return b
    }

    function Ph(a, b, c, d, e) {
        if (a !== a.top) return md(a) ? 3 : 16;
        if (!(488 > Hh(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Hh(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Hh(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = pd(b, a)) && (e = Bd(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Qh(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Rh(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = pd(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Sh(a, b, c) {
        a = Nh(b, a);
        return "rtl" == c ? -a.x : a.x
    };

    function Th(a, b, c) {
        var d = Bd;
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = pd(a, b)) && e[c] && d(e[c]) || null
    }

    function Uh(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Vh(a, b, c, d) {
        var e = a && Wh(c, b),
            f = Xh(b, d);
        return function(h) {
            return !(e && h.height() >= f)
        }
    }

    function Yh(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Wh(a, b) {
        a = Nh(a, b);
        return (a ? a.y : 0) < Gh(b).clientHeight - 100
    }

    function Zh(a, b) {
        var c = Th(b, a, "height");
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Th(b, a, "height");
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && Bd(b.style.height)) && (c = Math.min(c, d)), (d = Th(b, a, "maxHeight")) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Xh(a, b) {
        var c = 0 == Od(a);
        return b && c ? Math.max(250, 2 * Gh(a).clientHeight / 3) : 250
    };

    function $h(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = ai(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function ai(a) {
        var b = "";
        ud(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    var bi = gb("script");

    function ci(a, b, c, d, e, f, h, g, k, l, m, p, q, y, B) {
        this.B = a;
        this.W = b;
        this.X = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.P = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === h ? null : h;
        this.C = void 0 === g ? null : g;
        this.H = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.o = void 0 === m ? null : m;
        this.O = void 0 === p ? null : p;
        this.v = void 0 === q ? null : q;
        this.G = void 0 === y ? null : y;
        this.R = void 0 === B ? null : B
    }
    ci.prototype.size = function() {
        return this.W
    };

    function di(a, b, c) {
        null != a.X && (c.google_responsive_formats = a.X);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.o || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.B;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.C && (c.gfwroml = a.C);
        null != a.H && (c.gfwromr = a.H);
        null != a.l && (c.gfwroh = a.l);
        null != a.o && (c.gfwrow = a.o);
        null != a.O && (c.gfwroz = a.O);
        null != a.v && (c.gml = a.v);
        null != a.G && (c.gmr = a.G);
        null != a.R && (c.gzi = a.R);
        b = md(window) || window;
        $h(b.location, "google_responsive_dummy_ad") &&
            (fb([1, 2, 3, 4, 5, 6, 7, 8], a.B) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + bi + ">window.top.postMessage('" + a + "', '*');\n          </" + bi + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var ei = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function fi(a, b) {
        Ch.call(this, a, b)
    }
    z(fi, Ch);
    fi.prototype.h = function() {
        return this.minWidth()
    };
    var gi = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function hi(a, b) {
        Ch.call(this, a, b)
    }
    z(hi, Ch);
    hi.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function ii(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function ji(a, b) {
        for (var c = ki.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var h = c[f];
            if (a(h)) {
                if (!b || b(h)) return h;
                null === e && (e = h)
            }
        }
        return e
    };
    var U = [new R(970, 90, 2), new R(728, 90, 2), new R(468, 60, 2), new R(336, 280, 1), new R(320, 100, 2), new R(320, 50, 2), new R(300, 600, 4), new R(300, 250, 1), new R(250, 250, 1), new R(234, 60, 2), new R(200, 200, 1), new R(180, 150, 1), new R(160, 600, 4), new R(125, 125, 1), new R(120, 600, 4), new R(120, 240, 4), new R(120, 120, 1, !0)],
        ki = [U[6], U[12], U[3], U[0], U[7], U[14], U[1], U[8], U[10], U[4], U[15], U[2], U[11], U[5], U[13], U[9], U[16]];

    function li(a, b, c, d, e) {
        var f = qg(247, function() {
                var F;
                if ("false" == e.google_full_width_responsive) var v = {
                    I: a,
                    J: 1
                };
                else if ("autorelaxed" == b && e.google_full_width_responsive || mi(b) || e.google_ad_resize) {
                    v = Ph(c, d, a, .3, e);
                    if (!0 === v)
                        if ("true" == e.google_full_width_responsive || Mh(d, c)) {
                            v = Hh(c);
                            var C = v - a;
                            v = v && 0 <= C ? !0 : v ? -10 > C ? 11 : 0 > C ? 14 : 12 : 10
                        } else v = 9;
                    v = !0 !== v ? {
                        I: a,
                        J: v
                    } : {
                        I: Hh(c) || a,
                        J: !0
                    }
                } else v = {
                    I: a,
                    J: 2
                };
                C = v;
                v = C.I;
                C = C.J;
                if (!0 !== C) v = {
                    I: a,
                    J: C
                };
                else if (F = pd(d, c)) {
                    var Y = Bd(F.paddingLeft) || 0;
                    F = F.direction;
                    var Za = v -
                        a;
                    if (e.google_ad_resize) Y = -(Za + Y);
                    else {
                        for (var xa = d, ub = 0, vb = 0; 100 > vb && xa; vb++) ub += xa.offsetLeft + xa.clientLeft - xa.scrollLeft, xa = xa.offsetParent;
                        Y = ub + Y;
                        Y = "rtl" == F ? Y - Za : -Y
                    }
                    F = "rtl" == F;
                    v = {
                        I: v,
                        J: C,
                        marginLeft: F ? void 0 : Y,
                        marginRight: F ? Y : void 0,
                        zIndex: 30
                    }
                } else v = {
                    I: a,
                    J: C
                };
                return v
            }),
            h = f.J,
            g = f.marginLeft,
            k = f.marginRight,
            l = f.zIndex,
            m = e.google_ad_height || 0,
            p = ni(f.I, b, c, d, e, !0 === h);
        f = p.V;
        var q = p.U,
            y = p.da;
        p = p.va;
        var B = oi(b, y);
        return new ci(B, f, y, null, p, h, q, "", "", m, a, "", g, k, l)
    }

    function mi(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ni(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Hh(c)) ? 4 : 3 : Oh(b);
        var h = !1,
            g = !1;
        if (488 > Hh(c)) {
            var k = Mh(d, c);
            var l = Wh(d, c);
            h = !l && k;
            g = l && k
        }
        l = [Uh(a), Dh(b)];
        l.push(Vh(488 > Hh(c), c, d, g));
        null != e.google_max_responsive_height && l.push(Yh(e.google_max_responsive_height));
        var m = [function(q) {
            return !q.Ka
        }];
        if (h || g) h = Zh(c, d), m.push(Yh(h));
        var p = ji(ii(l), ii(m));
        if (!p) throw new ze("No slot size for availableWidth=" + a);
        l = qg(248, function() {
            var q;
            a: if (f) {
                if (e.gfwrnh && (q = Bd(e.gfwrnh))) {
                    q = {
                        V: new fi(a, q),
                        U: !0
                    };
                    break a
                }
                q = a / 1.2;
                var y = Math;
                var B = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var F = Infinity;
                else {
                    F = d;
                    var v = Infinity;
                    do {
                        var C = Th(F, c, "height");
                        C && (v = Math.min(v, C));
                        (C = Th(F, c, "maxHeight")) && (v = Math.min(v, C))
                    } while ((F = F.parentElement) && "HTML" != F.tagName);
                    F = v
                }
                y = B.call(y, q, F);
                if (y < .5 * q || 100 > y) y = q;
                S(ih) && !Wh(d, c) && (y = Math.max(y, .5 * Gh(c).clientHeight));
                q = {
                    V: new fi(a, Math.floor(y)),
                    U: y < q ? 102 : !0
                }
            } else q = {
                V: p,
                U: 100
            };
            return q
        });
        h = l.V;
        l = l.U;
        return "in-article" === e.google_ad_layout &&
            pi(c) ? {
                V: qi(a, c, d, h, e),
                U: !1,
                da: b,
                va: k
            } : {
                V: h,
                U: l,
                da: b,
                va: k
            }
    }

    function oi(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function qi(a, b, c, d, e) {
        var f = e.google_ad_height || Th(c, b, "height");
        a: {
            var h = a;
            var g = e.google_ad_layout || "image-top";
            if ("in-article" == g) {
                var k = h;
                if ("false" == e.google_full_width_responsive) h = k;
                else if (h = Ph(b, c, k, .2, e), !0 !== h) e.gfwrnwer = h, h = k;
                else if (h = Hh(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        c: {
                            k = c;
                            for (var l = 0; 100 > l && k.parentElement; ++l) {
                                for (var m = k.parentElement.childNodes, p = 0; p < m.length; ++p) {
                                    var q = m[p];
                                    if (q != k && Rh(b, q)) break c
                                }
                                k = k.parentElement;
                                k.style.width = "100%";
                                k.style.height =
                                    "auto"
                            }
                        }
                        k = (k = c.parentElement) ? (k = pd(k, b)) ? k.direction : "" : "";k && (c.style.border = c.style.borderStyle = c.style.outline = c.style.outlineStyle = c.style.transition = "none", c.style.borderSpacing = c.style.padding = "0", Qh(c, k, "0px"), c.style.width = Hh(b) + "px", 0 !== Sh(b, c, k) && (Qh(c, k, "0px"), l = Sh(b, c, k), Qh(c, k, -1 * l + "px"), m = Sh(b, c, k), 0 !== m && m !== l && Qh(c, k, l / (m - l) * l + "px")), c.style.zIndex = 30)
                    }
                else h = k;
                else h = k
            }
            if (250 > h) throw new ze("Fluid responsive ads must be at least 250px wide: availableWidth=" + h);h = Math.min(1200, Math.floor(h));
            if (f && "in-article" != g) {
                g = Math.ceil(f);
                if (50 > g) throw new ze("Fluid responsive ads must be at least 50px tall: height=" + g);
                g = new ci(11, new Ch(h, g))
            } else {
                if ("in-article" != g && (e = e.google_ad_layout_key)) {
                    g = "" + e;
                    b = Math.pow(10, 3);
                    if (e = (c = g.match(/([+-][0-9a-z]+)/g)) && c.length) {
                        f = [];
                        for (k = 0; k < e; k++) f.push(parseInt(c[k], 36) / b);
                        b = f
                    } else b = null;
                    if (!b) throw new ze("Invalid data-ad-layout-key value: " + g);
                    g = (h + -725) / 1E3;
                    c = 0;
                    e = 1;
                    f = b.length;
                    for (k = 0; k < f; k++) c += b[k] * e, e *= g;
                    g = Math.ceil(1E3 * c - -725 + 10);
                    if (isNaN(g)) throw new ze("Invalid height: height=" +
                        g);
                    if (50 > g) throw new ze("Fluid responsive ads must be at least 50px tall: height=" + g);
                    if (1200 < g) throw new ze("Fluid responsive ads must be at most 1200px tall: height=" + g);
                    g = new ci(11, new Ch(h, g));
                    break a
                }
                e = gi[g];
                if (!e) throw new ze("Invalid data-ad-layout value: " + g);
                c = Wh(c, b);
                b = Hh(b);
                b = "in-article" !== g || c || h !== b ? Math.ceil(e(h)) : Math.ceil(1.25 * e(h));
                g = new ci(11, "in-article" == g ? new hi(h, b) : new Ch(h, b))
            }
        }
        g = g.size();
        return g.minWidth() * g.height() > a * d.height() ? new R(g.minWidth(), g.height(), 1) : d
    }

    function pi(a) {
        return S(gh) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function ri(a) {
        var b = a.google_ad_format;
        if ("autorelaxed" == b) {
            a: {
                if ("pedestal" != a.google_content_recommendation_ui_type) {
                    b = x(ei);
                    for (var c = b.next(); !c.done; c = b.next())
                        if (null != a[c.value]) {
                            a = !0;
                            break a
                        }
                }
                a = !1
            }
            return a ? 9 : 5
        }
        if (mi(b)) return 1;
        if ("link" === b) return 4;
        if ("fluid" == b) {
            if (b = "in-article" === a.google_ad_layout) b = S(hh) || S(gh) || K.location && ("#hffwroe2etop" == K.location.hash || "#hffwroe2etoq" == K.location.hash);
            return b ? (si(a), 1) : 8
        }
        if (27 === a.google_reactive_ad_format) return si(a), 1
    }

    function si(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function ti(a) {
        var b = md(K);
        if (b) {
            b = Hh(b);
            var c = pd(a, K) || {},
                d = c.direction;
            if ("0px" === c.width && "none" !== c.cssFloat) return -1;
            if ("ltr" === d && b) return Math.floor(Math.min(1200, b - a.getBoundingClientRect().left));
            if ("rtl" === d && b) return a = K.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, b - a - Math.floor((b - K.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var V = {},
        ui = (V.google_ad_channel = !0, V.google_ad_client = !0, V.google_ad_host = !0, V.google_ad_host_channel = !0, V.google_adtest = !0, V.google_tag_for_child_directed_treatment = !0, V.google_tag_for_under_age_of_consent = !0, V.google_tag_partner = !0, V.google_restrict_data_processing = !0, V.google_page_url = !0, V.google_debug_params = !0, V.google_adbreak_test = !0, V.google_ad_frequency_hint = !0, V.google_admob_interstitial_slot = !0, V.google_admob_rewarded_slot = !0, V.google_max_ad_content_rating = !0, V.google_traffic_source = !0,
            V);
    var vi = w(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        wi = w(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        xi = w(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        yi = w(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        zi = w(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function Ai(a) {
        J.call(this, a, -1, Bi)
    }
    z(Ai, J);
    Ai.prototype.getId = function() {
        return H(this, 1, 0)
    };
    Ai.prototype.L = function() {
        return H(this, 7, 0)
    };
    var Bi = [2];

    function Ci(a) {
        J.call(this, a, -1, Di)
    }
    z(Ci, J);
    Ci.prototype.L = function() {
        return H(this, 5, 0)
    };
    var Di = [2];

    function Ei(a) {
        J.call(this, a, -1, Fi)
    }
    z(Ei, J);

    function Gi(a) {
        J.call(this, a, -1, Hi)
    }
    z(Gi, J);
    Gi.prototype.L = function() {
        return H(this, 1, 0)
    };

    function Ii(a) {
        J.call(this, a)
    }
    z(Ii, J);
    var Fi = [1, 4, 2, 3],
        Hi = [2];

    function Ji(a) {
        J.call(this, a, -1, Ki)
    }
    z(Ji, J);
    var Ki = [19];
    var Li = void 0;

    function Mi() {
        Ce(Li, Ae);
        return Li
    };

    function Ni(a, b, c) {
        return Oi(a, void 0 === c ? "" : c, function(d) {
            return cb(Vb(d, kc, 2), function(e) {
                return Lb(e, 1) === b
            })
        })
    }

    function Pi(a) {
        var b = void 0 === b ? "" : b;
        var c = md(K) || K;
        return Qi(c, a) ? !0 : Oi(K, b, function(d) {
            return cb(Mb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function Qi(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && fb(a.split(","), b.toString())
    }

    function Oi(a, b, c) {
        a = md(a) || a;
        var d = Ri(a);
        b && (b = Qd(String(b)));
        return qc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function Ri(a) {
        a = Si(a);
        var b = {};
        ud(a, function(c, d) {
            try {
                var e = new ic(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function Si(a) {
        if (S(Jg)) {
            var b = {
                Ba: a,
                Ja: Mi()
            };
            a = b.Ba;
            var c = b.Ja,
                d = void 0 === b.Ga ? !1 : b.Ga;
            if (b = !(void 0 === b.Ha ? 0 : b.Ha)) b = new Cg(a), b = "function" === typeof b.i.__tcfapi || null != Eg(b);
            if (!b) {
                if (d = !d) {
                    if (c) {
                        c = tg(a);
                        if (null != c.h)
                            if ((c = c.h.value) && null != Lb(c, 1)) c: switch (c = Lb(c, 1), c) {
                                case 1:
                                    c = !0;
                                    break c;
                                default:
                                    throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                            } else c = !1;
                            else og.A(806, c.i, void 0, void 0), c = !1;
                        c = !c
                    }
                    d = c
                }
                b = d
            }
            if (b)
                if (vg ? d = vg : (c = Kd() || window, d = c.google_persistent_state_async, d = null != d && "object" ==
                        typeof d && null != d.S && "object" == typeof d.S ? vg = d : c.google_persistent_state_async = vg = new ug), c = xg[24] || "google_ps_24", d = d.S, b = d[c], c = void 0 === b ? d[c] = void 0 : b, c) {
                    var e = void 0 === e ? !1 : e;
                    !1 === c.gdprApplies ? d = !0 : (void 0 === c.internalErrorState && (c.internalErrorState = Bg(c)), d = "error" === c.cmpStatus || 0 !== c.internalErrorState ? !c.internalBlockOnErrors : "loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus ? !1 : !0);
                    if (d)
                        if (!1 === c.gdprApplies || "tcunavailable" === c.tcString || void 0 ===
                            c.gdprApplies && !e || "string" !== typeof c.tcString || !c.tcString.length) var f = !0;
                        else {
                            f = void 0 === f ? "755" : f;
                            c: {
                                if (c.publisher && c.publisher.restrictions && (e = c.publisher.restrictions["1"], void 0 !== e)) {
                                    e = e[void 0 === f ? "755" : f];
                                    break c
                                }
                                e = void 0
                            }
                            0 === e ? f = !1 : c.purpose && c.vendor ? (e = c.vendor.consents, (f = !(!e || !e[void 0 === f ? "755" : f])) && c.purposeOneTreatment && "CH" === c.publisherCC ? f = !0 : f && (f = c.purpose.consents, f = !(!f || !f["1"]))) : f = !0
                        }
                    else f = !1;
                    f = zg(f);
                    a = Gg(a, f)
                } else a = new Rd(null, Error("tcunav"));
            else a = Gg(a, zg(!0));
            null != a.h ? (Ti("ok"), a = Ui(a.h.value)) : (Ti(a.i.message), a = {});
            return a
        }
        return Ui(a.localStorage)
    }

    function Ui(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : pc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Ti(a) {
        if (S(Ig)) {
            a = {
                s: a,
                g: S(Jg),
                c: Mi(),
                r: .01
            };
            var b = L(mg).h();
            !a.eid && b.length && (a.eid = b.toString());
            le(ke, "abg_adsensesettings_lserr", a, !0, .01)
        }
    };

    function Vi(a, b, c) {
        var d;
        (d = b.google_reactive_ad_format || S($g) && b.google_ad_resize || ri(b)) || (d = !((Ad.test(b.google_ad_width) || zd.test(a.style.width)) && (Ad.test(b.google_ad_height) || zd.test(a.style.height))));
        if (d) return !1;
        for (d = a; d; d = d.parentElement) {
            var e = pd(d, K);
            if (!e) return b.gfwrnwer = 18, !1;
            if (!fb(["static", "relative"], e.position)) return b.gfwrnwer = 17, !1
        }
        a = Ph(K, a, c, .3, b);
        return !0 !== a ? (b.gfwrnwer = a, !1) : K === K.top ? !0 : !1
    };

    function Wi(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    };

    function Xi(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    };

    function Yi(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[Le] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(h) {
            return Ni(K, Number(h))
        }, c[24] = function(h) {
            return Pi(Number(h))
        }, c[61] = function() {
            return Ob(b, 6)
        }, c[63] = function() {
            return Ob(b, 6) || ".google.ch" === I(b, 8)
        }, c), f[Me] = (d[7] = function(h) {
            try {
                var g = window.localStorage
            } catch (l) {
                g = null
            }
            h = Number(h);
            h = void 0 === h ? 0 : h;
            h = 0 !== h ? "google_experiment_mod" + h : "google_experiment_mod";
            var k = xd(g, h);
            g = null === k ? yd(g, h) : k;
            return null != g ? g : void 0
        }, d), f[Ne] = (e[6] = function() {
            return I(b,
                15)
        }, e), f
    };

    function Zi(a) {
        a = void 0 === a ? A : a;
        return a.ggeac || (a.ggeac = {})
    };

    function $i() {
        var a = L(Ih).i(jh.h, jh.defaultValue),
            b = K.document;
        b = void 0 === b ? window.document : b;
        Dd(a, b)
    };

    function aj(a, b) {
        try {
            var c = a.split(".");
            a = A;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (h) {}
    }

    function bj() {
        var a = {};
        this[Le] = (a[8] = function(b) {
            try {
                return null != wa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = wa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return fb(L(mg).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = aj(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!A.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                A.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), t(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = A.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), t(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[Me] = (a[3] = function() {
            return Cd()
        }, a[6] = function(b) {
            b = aj(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = A;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(kd)[3] ||
                null) ? decodeURI(c) : c) ? vd(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Ne] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = aj(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = A.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = wa("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = t(d, "find").call(d, function(h) {
                    return "Google Chrome" === h.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (h) {
                return ""
            }
        }, a)
    };
    var cj = [12, 13, 20];

    function dj() {}
    dj.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.sa ? !1 : d.sa,
            h = void 0 === d.La ? {} : d.La;
        d = void 0 === d.Ma ? [] : d.Ma;
        this.l = a;
        this.B = {};
        this.v = f;
        this.o = h;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = ne()) && $a(b.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (e.j[g] = !0)
        });
        $a(d, function(g) {
            e.j[g] = !0
        });
        this.h = c;
        return this
    };

    function ej(a, b, c) {
        var d = [],
            e = fj(a.l, b),
            f;
        if (f = 9 !== b) a.B[b] ? f = !0 : (a.B[b] = !0, f = !1);
        if (f) {
            var h;
            null == (h = a.h) || zf(h, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var g;
            null == (g = a.h) || zf(g, b, c, d, [], 3);
            return d
        }
        var k = fb(cj, b),
            l = [];
        $a(e, function(p) {
            var q = new pf;
            if (p = gj(a, p, c, q)) 0 !== Tb(q, qf) && l.push(q), q = p.getId(), d.push(q), hj(a, q, k ? 4 : c), (p = Vb(p, We, 2)) && (k ? Qf(p, Sf(), a.h, q) : Qf(p, [c], a.h, q))
        });
        var m;
        null == (m = a.h) || zf(m, b, c, d, l, 1);
        return d
    }

    function hj(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        fb(a, b) || a.push(b)
    }

    function ij(a, b) {
        a.l.push.apply(a.l, ka(ab(bb(b, function(c) {
            return new Gi(c)
        }), function(c) {
            return !fb(cj, c.L())
        })))
    }

    function gj(a, b, c, d) {
        var e = L(Cf).h;
        if (!Se(Ub(b, Ge, 3), e)) return null;
        var f = Vb(b, Ai, 2),
            h = H(b, 6, 0);
        if (h) {
            Sb(d, 1, qf, h);
            f = e[Me];
            switch (c) {
                case 2:
                    var g = f[8];
                    break;
                case 1:
                    g = f[7]
            }
            c = void 0;
            if (g) try {
                c = g(h), Rb(d, 3, c)
            } catch (k) {}
            return (b = jj(b, c)) ? kj(a, [b], 1) : null
        }
        if (h = H(b, 10, 0)) {
            Sb(d, 2, qf, h);
            g = null;
            switch (c) {
                case 1:
                    g = e[Me][9];
                    break;
                case 2:
                    g = e[Me][10];
                    break;
                default:
                    return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === H(b, 11, 0)) return null;
            void 0 !== c && Rb(d, 3, c);
            return (b = jj(b, c)) ? kj(a, [b], 1) : null
        }
        d = e ? ab(f, function(k) {
            return Se(Ub(k,
                Ge, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * H(b, 1, 0);
        return (b = H(b, 4, 0)) ? lj(a, b, c, d) : kj(a, d, c / 1E3)
    }

    function lj(a, b, c, d) {
        var e = null != a.o[b] ? a.o[b] : 1E3;
        if (0 >= e) return null;
        d = kj(a, d, c / e);
        a.o[b] = d ? 0 : e - c;
        return d
    }

    function kj(a, b, c) {
        var d = a.j,
            e = db(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.v ? null : qd(b, c)
    }

    function mj(a, b) {
        N(Uf, function(c) {
            a.j[c] = !0
        }, b);
        N(Xf, function(c, d) {
            return ej(a, c, d)
        }, b);
        N(Yf, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        N(gg, function(c) {
            return ij(a, c)
        }, b);
        N(Vf, function(c, d) {
            return hj(a, c, d)
        }, b)
    }

    function fj(a, b) {
        return (a = db(a, function(c) {
            return c.L() == b
        })) && Vb(a, Ci, 2) || []
    }

    function jj(a, b) {
        var c = Vb(a, Ai, 2),
            d = c.length,
            e = H(a, 8, 0);
        a = d * H(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * td());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = L(Cf).h;
        return !c || e && !Se(Ub(c, Ge, 3), e) ? null : c
    };

    function nj() {
        this.h = function() {}
    }

    function oj(a) {
        L(nj).h(a)
    };
    var pj, qj, rj, sj, tj, uj;

    function vj(a, b, c) {
        var d = Zi(K),
            e = 1;
        d = void 0 === d ? Zi() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new yf(null != (sj = null == (pj = Ub(a, Ii, 5)) ? void 0 : H(pj, 2, 0)) ? sj : 0, null != (tj = null == (qj = Ub(a, Ii, 5)) ? void 0 : H(qj, 4, 0)) ? tj : 0, null != (uj = null == (rj = Ub(a, Ii, 5)) ? void 0 : Ob(rj, 3)) ? uj : !1) : f;
        d.hasOwnProperty("init-done") ? (O(gg, d)(bb(Vb(a, Gi, 2), function(h) {
            return h.toJSON()
        })), O(hg, d)(bb(Vb(a, We, 1), function(h) {
            return h.toJSON()
        }), e), b && O(ig, d)(b), wj(d, e)) : (mj(L(dj).init(Vb(a, Gi, 2), e, f, c), d), jg(d), kg(d), lg(d), wj(d, e), Qf(Vb(a, We,
            1), [e], f, void 0, !0), Df = Df || !(!c || !c.Ia), oj(L(bj)), b && oj(b))
    }

    function wj(a, b) {
        a = void 0 === a ? Zi() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        ng(L(mg), c, d);
        xj(a, b);
        L(nj).h = O(ig, a);
        L(Ih).o()
    }

    function xj(a, b) {
        var c = L(Ih);
        c.j = function(d, e) {
            return O($f, a, function() {
                return !1
            })(d, e, b)
        };
        c.l = function(d, e) {
            return O(ag, a, function() {
                return 0
            })(d, e, b)
        };
        c.h = function(d, e) {
            return O(bg, a, function() {
                return ""
            })(d, e, b)
        };
        c.i = function(d, e) {
            return O(cg, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function() {
            O(Wf, a)(b)
        }
    };
    hb || !D("Safari") || Va();
    var yj = w(["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]);

    function zj(a) {
        hd(K, "load", function() {
            K.adsbygoogle || (K.adsbygoogle = [], nd(K.document, yc(Nd(Ld(yj)).toString())));
            K.adsbygoogle.push(a)
        })
    }

    function Aj(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Bj(a) {
        if (K.google_apltlad || K !== K.top || !a.google_ad_client) return null;
        K.google_apltlad = !0;
        var b = Aj(a.google_ad_client),
            c = b.enable_page_level_ads;
        ud(a, function(d, e) {
            ui[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function Cj(a) {
        og.ya(function(b) {
            b.shv = String(a);
            b.mjsv = "m202205230101";
            var c = L(mg).h(),
                d = Wi(A);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };
    var Dj = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_placement_id google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_video_play_muted google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_webgl_support google_package google_debug_params dash google_restrict_data_processing google_ad_public_floor google_ad_private_floor google_traffic_source".split(" "),
        Ej = {},
        Fj = (Ej.google_ad_modifications = !0, Ej.google_analytics_domain_name = !0, Ej.google_analytics_uacct = !0, Ej.google_pause_ad_requests = !0, Ej.google_user_agent_client_hint = !0, Ej);

    function Gj(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Hj(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Ij(a, b) {
        var c = a.document.getElementsByTagName("script");
        b = (void 0 === b ? 0 : b) ? "google_parsed_script_for_pub_code" : "google_parsed_script";
        a = a.navigator && a.navigator.userAgent || "";
        a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Pd() ? Gj : Hj;
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d];
            if (!e[b] &&
                (e[b] = !0, e = a(e))) return e
        }
        return null
    }

    function Jj() {
        try {
            var a = Ij(K)
        } catch (b) {
            return !1
        }
        if (!a) return !1;
        try {
            Kj(Lj(a), K)
        } catch (b) {
            return !1
        }
        return !!K.google_ad_client
    }

    function Mj() {
        for (var a = 0, b = Dj.length; a < b; a++) {
            var c = Dj[a];
            Fj[c] || (K[c] = null)
        }
    }

    function Nj(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    }

    function Lj(a) {
        for (var b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, c = {}, d; d = b.exec(a);) c[d[1]] = Nj(d[2]);
        return c
    }

    function Kj(a, b) {
        for (var c = 0; c < Dj.length; c++) {
            var d = Dj[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    };
    var Oj = new r.WeakMap;

    function Pj() {
        function a(e) {
            e = x(e);
            e.next();
            e = ja(e);
            return c(d, e)
        }
        var b = Qj;
        var c = void 0 === c ? Rj : c;
        var d = ya(b);
        return function() {
            var e = ta.apply(0, arguments),
                f = this || A,
                h = Oj.get(f);
            h || (h = {}, Oj.set(f, h));
            f = h;
            h = [this].concat(ka(e));
            e = a ? a(h) : h;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var g = x(h);
                h = g.next().value;
                g = ja(g);
                h = b.apply(h, g);
                f = f[e] = h
            }
            return f
        }
    }

    function Rj(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Qj(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        null != (e = null != (d = null == (b = Wi(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client")) ? a = e : (a = Ij(a, !0)) ? (a = Lj(a), a = a.google_ad_client ? a.google_ad_client : "") : a = "";
        return null != (f = a) ? f : ""
    };
    var Sj = "undefined" === typeof sttc ? void 0 : sttc;

    function Tj() {
        var a = og;
        try {
            return Ce(Sj, Ee), new Ji(JSON.parse(Sj))
        } catch (b) {
            a.A(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(Sj)
            })
        }
        return new Ji
    };
    var Uj = w(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Vj() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.A;
        this.o = null
    }
    n = Vj.prototype;
    n.ya = function(a) {
        this.h = a
    };
    n.Aa = function(a) {
        this.j = a
    };
    n.za = function(a) {
        this.i = a
    };
    n.A = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Wd(b) || (b = new Vd(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        A.google_js_errors = A.google_js_errors || [];
        A.google_js_errors.push(b);
        if (!A.error_rep_loaded) {
            a = Ld(Uj);
            var f;
            nd(A.document, null != (f = this.o) ? f : yc(Nd(a).toString()));
            A.error_rep_loaded = !0
        }
        return !1
    };
    n.Z = function(a, b) {
        try {
            return b()
        } catch (c) {
            if (!this.i(a, c, .01, void 0, "jserror")) throw c;
        }
    };
    n.wa = function(a, b) {
        var c = this;
        return function() {
            var d = ta.apply(0, arguments);
            return c.Z(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.xa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.A(a, d instanceof Error ? d : Error(d))
        })
    };

    function Wj(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function Xj(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = window,
            f = "undefined" !== typeof queueMicrotask;
        return function() {
            d && f && queueMicrotask(function() {
                e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                e.google_rum_task_id_counter += 1
            });
            var h = pe(),
                g = 3;
            try {
                var k = b.apply(this, arguments)
            } catch (l) {
                g = 13;
                if (!c) throw l;
                c(a, l)
            } finally {
                e.google_measure_js_timing && h && Wj(t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (pe() || 0) - h,
                    type: g
                }, d && f && {
                    taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter ||
                        1
                }), e)
            }
            return k
        }
    }

    function Yj(a, b) {
        return Xj(a, b, function(c, d) {
            (new Vj).A(c, d)
        })
    };

    function Zj(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function ak(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function bk() {
        var a = new r.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = x(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function ck(a) {
        a = a.id;
        return null != a && (bk().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function dk(a, b, c) {
        if (!a.sources) return !1;
        switch (ek(a)) {
            case 2:
                var d = fk(a);
                if (d) return c.some(function(f) {
                    return gk(d, f)
                });
            case 1:
                var e = hk(a);
                if (e) return b.some(function(f) {
                    return gk(e, f)
                })
        }
        return !1
    }

    function ek(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function hk(a) {
        return ik(a, function(b) {
            return b.currentRect
        })
    }

    function fk(a) {
        return ik(a, function(b) {
            return b.previousRect
        })
    }

    function ik(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function jk() {
        Ag.call(this);
        this.i = this.h = this.P = this.O = this.C = 0;
        this.oa = this.la = Number.NEGATIVE_INFINITY;
        this.ha = this.ja = this.ka = this.ma = this.ra = this.v = this.qa = this.W = 0;
        this.ia = !1;
        this.R = this.H = this.G = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.pa = a ? a.getAttribute("data-google-query-id") : null;
        this.j = null;
        this.na = !1;
        this.ga = function() {}
    }
    z(jk, Ag);

    function kk(a) {
        a.j || (a.j = new PerformanceObserver(Yj(640, function(b) {
            var c = lk !== window.scrollX || mk !== window.scrollY ? [] : nk,
                d = ok();
            b = x(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.C += Number(e.value);
                        Number(e.value) > f.O && (f.O = Number(e.value));
                        f.P += 1;
                        var h = dk(e, c, d);
                        h && (f.v += e.value, f.ma++);
                        if (5E3 < e.startTime - f.la || 1E3 < e.startTime - f.oa) f.la = e.startTime, f.h = 0, f.i = 0;
                        f.oa = e.startTime;
                        f.h += e.value;
                        h && (f.i += e.value);
                        f.h > f.W && (f.W = f.h, f.ra = f.i, f.qa = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.ka = Math.floor(e.renderTime || e.loadTime);
                    a.ja = e.size;
                    break;
                case "first-input":
                    a.ha = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ia = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.G += e, a.H = Math.max(a.H, e), a.R += 1
            }
        })));
        return a.j
    }

    function pk(a) {
        var b = Yj(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                } [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && qk(a)
            }),
            c = Yj(641, function() {
                return void qk(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ga = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            kk(a).disconnect()
        }
    }
    jk.prototype.l = function() {
        Ag.prototype.l.call(this);
        this.ga()
    };

    function qk(a) {
        if (!a.na) {
            a.na = !0;
            kk(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += ak("cls", a.C), b += ak("mls", a.O), b += Zj("nls", a.P), window.LayoutShiftAttribution && (b += ak("cas", a.v), b += Zj("nas", a.ma)), b += ak("wls", a.W), b += ak("tls", a.qa), window.LayoutShiftAttribution && (b += ak("was", a.ra)));
            window.LargestContentfulPaint && (b += Zj("lcp", a.ka), b += Zj("lcps", a.ja));
            window.PerformanceEventTiming && a.ia && (b += Zj("fid", a.ha));
            window.PerformanceLongTaskTiming &&
                (b += Zj("cbt", a.G), b += Zj("mbt", a.H), b += Zj("nlt", a.R));
            for (var c = 0, d = x(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) ck(e.value) && c++;
            b += Zj("nif", c);
            b += Zj("ifi", Od(window));
            c = L(mg).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (A === A.top ? 1 : 0);
            b += a.pa ? "&qqid=" + encodeURIComponent(a.pa) : Zj("pvsid", Ed(A));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.o || (a.o = !0, a.l())
        }
    }

    function gk(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function ok() {
        var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(ck),
            b = [].concat(ka(bk())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        lk = window.scrollX;
        mk = window.scrollY;
        return nk = [].concat(ka(a), ka(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var lk = void 0,
        mk = void 0,
        nk = [];
    var W = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        X = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function rk(a, b, c) {
        Ag.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && sk() && this.h.push(W);
        c && this.h.push(X);
        if (document.hasTrustToken && !S(ph)) {
            var e = new r.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof r.Map ? new r.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof r.Map || (window.goog_tt_promise_map =
                new r.Map)
        }
    }
    z(rk, Ag);

    function sk() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function tk() {
        var a = void 0 === a ? window.document : a;
        var b = L(Ih).i(sh.h, sh.defaultValue);
        Dd(b, a)
    }

    function uk(a, b) {
        return a || ".google.ch" === b || "function" === typeof K.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function vk() {
        var a = W.issuerOrigin + W.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: W.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(W.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(W.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(W.issuerOrigin, 6, !0) : Z(W.issuerOrigin, 5)
        })
    }

    function wk() {
        var a = W.issuerOrigin + W.issuancePath;
        Z(W.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(W.issuerOrigin, 10);
            return vk()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(W.issuerOrigin, 10), vk();
            Z(W.issuerOrigin, 9)
        })
    }

    function xk() {
        Z(W.issuerOrigin, 13);
        return document.hasTrustToken(W.issuerOrigin).then(function(a) {
            return a ? vk() : wk()
        })
    }

    function yk() {
        Z(X.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(X.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return window.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = X.issuerOrigin + X.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(X.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(X.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f &&
                        "NoModificationAllowedError" === f.name) Z(X.issuerOrigin, 18, !0);
                    else {
                        if (e) return window.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(X.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(X.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return window.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = X.issuerOrigin + X.getStatePath;
                Z(X.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [X.issuerOrigin]
                    }
                }).then(function(h) {
                    if (!h.ok) throw Error(h.status +
                        ": Network response was not ok!");
                    Z(X.issuerOrigin, 22);
                    return h.text().then(function(g) {
                        return JSON.parse(g)
                    })
                }).catch(function(h) {
                    return window.Promise.reject({
                        state: 21,
                        error: h
                    })
                })
            });
            var d = Ed(window);
            return a.then(function(e) {
                var f = X.issuerOrigin + X.issuancePath;
                return e && e.srqt && e.cs ? (Z(X.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(h) {
                    if (!h.ok) throw Error(h.status + ": Network response was not ok!");
                    Z(X.issuerOrigin, 25);
                    return e
                }).catch(function(h) {
                    return window.Promise.reject({
                        state: 24,
                        error: h
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(X.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(X.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return window.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(X.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        Z(X.issuerOrigin, e.state);
                        var f = T(rh);
                        Math.random() <= f && ae({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function zk(a) {
        if (document.hasTrustToken && !S(ph) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof r.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === W.issuerOrigin
                    })) {
                    var d = b.get(W.issuerOrigin);
                    d || (d = xk(), b.set(W.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === X.issuerOrigin
                }) && (a = b.get(X.issuerOrigin), a || (a = yk(), b.set(X.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    };

    function Ak(a) {
        J.call(this, a, -1, Bk)
    }
    z(Ak, J);

    function Ck(a, b) {
        return G(a, 2, b)
    }

    function Dk(a, b) {
        return G(a, 3, b)
    }

    function Ek(a, b) {
        return G(a, 4, b)
    }

    function Fk(a, b) {
        return G(a, 5, b)
    }

    function Gk(a, b) {
        return G(a, 9, b)
    }

    function Hk(a, b) {
        return $b(a, 10, b)
    }

    function Ik(a, b) {
        return G(a, 11, b)
    }

    function Jk(a, b) {
        return G(a, 1, b)
    }

    function Kk(a) {
        J.call(this, a)
    }
    z(Kk, J);
    Kk.prototype.getVersion = function() {
        return I(this, 2)
    };
    var Bk = [10, 6];
    var Lk = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Mk() {
        var a;
        return null != (a = K.google_tag_data) ? a : K.google_tag_data = {}
    }

    function Nk() {
        var a, b;
        if ("function" !== typeof(null == (a = K.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = Mk();
        if (c.uach_promise) return c.uach_promise;
        a = K.navigator.userAgentData.getHighEntropyValues(Lk).then(function(d) {
            null != c.uach || (c.uach = d);
            return d
        });
        return c.uach_promise = a
    }

    function Ok(a) {
        var b;
        return Ik(Hk(Gk(Fk(Ek(Dk(Ck(Jk(new Ak, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Kk;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Pk() {
        if (S(lh)) {
            var a, b;
            return null != (b = null == (a = Nk()) ? void 0 : a.then(function(f) {
                return Ok(f)
            })) ? b : null
        }
        var c, d;
        if ("function" !== typeof(null == (c = K.navigator) ? void 0 : null == (d = c.userAgentData) ? void 0 : d.getHighEntropyValues)) return null;
        var e;
        return null != (e = K.navigator.userAgentData.getHighEntropyValues(Lk).then(function(f) {
            return Ok(f)
        })) ? e : null
    };

    function Qk(a, b) {
        var c = void 0 === c ? "" : c;
        K.google_sa_impl && !K.document.getElementById("google_shimpl") && (delete K.google_sa_queue, delete K.google_sa_impl);
        K.google_sa_queue || (K.google_sa_queue = [], K.google_process_slots = rg(215, function() {
            return Rk(K.google_sa_queue)
        }), a = Sk(c, a, b), nd(K.document, a).id = "google_shimpl")
    }

    function Rk(a) {
        var b = a.shift();
        "function" === typeof b && qg(216, b);
        a.length && A.setTimeout(rg(215, function() {
            return Rk(a)
        }), 0)
    }

    function Tk(a, b) {
        K.google_sa_queue = K.google_sa_queue || [];
        K.google_sa_impl ? b(a) : K.google_sa_queue.push(a)
    }

    function Sk(a, b, c) {
        var d = Math.random() < T(ch) ? yc(Nd(b.Pa).toString()) : null;
        b = Ob(c, 4) ? b.Oa : b.Qa;
        b = d ? d : yc(Nd(b).toString());
        d = {};
        a: {
            if (Ob(c, 4)) {
                if (c = a || (S(fh) ? Pj()(K) : Qj(K))) {
                    var e = {};
                    c = (e.client = c, e.plah = K.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Uk(c, d);
        a: {
            if (S(bh) || S(Xg)) {
                a = a || (S(fh) ? Pj()(K) : Qj(K));
                var f;
                var h = (c = null == (h = Wi(K)) ? void 0 : null == (f = h.head_tag_slot_vars) ? void 0 : f.google_ad_host) ? c : Vk();
                if (a) {
                    f = {};
                    h = (f.client = a, f.plah = K.location.host, f.ama_t = "adsense", f.asntp =
                        T(Qg), f.asntpv = T(Ug), f.asntpl = T(Sg), f.asntpm = T(Tg), f.asntpc = T(Rg), f.asna = T(Mg), f.asnd = T(Ng), f.asnp = T(Og), f.asns = T(Pg), f.asmat = T(Lg), f.asptt = T(Vg), f.easpi = S(bh), f.asro = S(Wg), f.host = h, f.easai = S(ah), f);
                    break a
                }
            }
            h = {}
        }
        Uk(h, d);
        Uk(L(Ih).h(Kg.h, Kg.defaultValue) ? {
            bust: L(Ih).h(Kg.h, Kg.defaultValue)
        } : {}, d);
        b = xc.exec(wc(b).toString());
        h = b[3] || "";
        return yc(b[1] + zc("?", b[2] || "", d) + zc("#", h))
    }

    function Uk(a, b) {
        ud(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Vk() {
        var a = K.document.querySelector('meta[name="google-adsense-platform-account"]');
        if (a) return a.getAttribute("content")
    }

    function Wk(a, b) {
        var c = yh(a);
        Xk(a);
        var d = (new Date).getTime();
        a.google_lrv = I(b, 2);
        a.google_async_iframe_id = c;
        a.google_start_time = Ea;
        a.google_bpp = d > Ea ? d - Ea : 1;
        K.google_sv_map = K.google_sv_map || {};
        K.google_sv_map[c] = a;
        b = K.document.getElementById(c + "_anchor") ? function(f) {
            return f()
        } : function(f) {
            return window.setTimeout(f, 0)
        };
        var e = {
            pubWin: K,
            vars: a
        };
        Tk(function() {
            var f = K.google_sa_impl(e);
            f && f.catch && og.xa(911, f)
        }, b)
    }

    function Xk(a) {
        var b = a.google_ad_output,
            c = a.google_ad_format,
            d = a.google_ad_width || 0,
            e = a.google_ad_height || 0;
        c || "html" != b && null != b || (c = d + "x" + e);
        b = !a.google_ad_slot || a.google_override_format || !zh[a.google_ad_width + "x" + a.google_ad_height] && "aa" == a.google_loader_used;
        c && b ? c = c.toLowerCase() : c = "";
        a.google_ad_format = c;
        if ("number" !== typeof a.google_reactive_sra_index || !a.google_ad_unit_key) {
            c = [a.google_ad_slot, a.google_orig_ad_format || a.google_ad_format, a.google_ad_type, a.google_orig_ad_width || a.google_ad_width,
                a.google_orig_ad_height || a.google_ad_height
            ];
            b = [];
            d = 0;
            for (e = Fd.parentElement; e && 25 > d; e = e.parentNode, ++d) 9 === e.nodeType ? b.push("") : b.push(e.id);
            (b = b.join()) && c.push(b);
            a.google_ad_unit_key = vd(c.join(":")).toString();
            c = Fd;
            var f = void 0 === f ? !1 : f;
            b = [];
            for (d = 0; c && 25 > d; ++d) {
                e = "";
                void 0 !== f && f || (e = (e = 9 !== c.nodeType && c.id) ? "/" + e : "");
                a: {
                    if (c && c.nodeName && c.parentElement) {
                        var h = c.nodeName.toString().toLowerCase();
                        for (var g = c.parentElement.childNodes, k = 0, l = 0; l < g.length; ++l) {
                            var m = g[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() ===
                                h) {
                                if (c === m) {
                                    h = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    h = ""
                }
                b.push((c.nodeName && c.nodeName.toString().toLowerCase()) + e + h);
                c = c.parentElement
            }
            f = b.join() + ":";
            c = K;
            b = [];
            if (c) try {
                var p = c.parent;
                for (d = 0; p && p !== c && 25 > d; ++d) {
                    var q = p.frames;
                    for (e = 0; e < q.length; ++e)
                        if (c === q[e]) {
                            b.push(e);
                            break
                        } c = p;
                    p = c.parent
                }
            } catch (y) {}
            a.google_ad_dom_fingerprint = vd(f + b.join()).toString()
        }
    }

    function Yk(a) {
        tk();
        uk(Mi(), I(a, 8)) || rg(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = S(b.PeriodicSyncManager ? nh : oh);
            var c = S(qh);
            b = new rk(!0, b, c);
            0 < T(th) ? K.google_trust_token_operation_promise = zk(b) : zk(b)
        })();
        a = Pk();
        null != a && a.then(function(b) {
            a: {
                yb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), dc);
                    break a
                } finally {
                    yb = !1
                }
                c = void 0
            }
            K.google_user_agent_client_hint = c
        });
        $i()
    };
    qg(158, function() {
        var a = Tj();
        Cj(I(a, 2));
        var b = Ob(a, 6);
        Ce(Li, Fe);
        Li = b;
        og.za(sg);
        b = 2012 < H(a, 1, 0) ? "_fy" + H(a, 1, 0) : "";
        var c = I(a, 3),
            d = I(a, 2),
            e = Ld(vi, "m202205230101", b);
        c = Ld(wi, d, c);
        b = {
            Xa: e,
            Qa: Ld(xi, "m202205230101", b),
            Oa: Ld(yi, "m202205230101", b),
            Pa: Ld(zi, "m202205230101", b),
            Za: c,
            Ta: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        };
        e = [2, a.toJSON()];
        e = void 0 === e ? [] : e;
        c = !1;
        A.google_logging_queue || (c = !0, A.google_logging_queue = []);
        A.google_logging_queue.push([16, e]);
        if (e = c) {
            if (null == Id) {
                Id = !1;
                try {
                    var f = md(A);
                    f && -1 !== f.location.hash.indexOf("google_logging") && (Id = !0);
                    A.localStorage.getItem("google_logging") && (Id = !0)
                } catch (q) {}
            }
            e = Id
        }
        e && nd(A.document, yc(oc(new lc(mc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))));
        if (!Ua() || 0 <= Ra(Xa(), 11))
            if ("js" == K.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                if (null === K.document.currentScript) f = 1;
                else a: if (f = b.Ta, e = K.document, e.currentScript) f = Xi(e.currentScript, f);
                    else {
                        e = x(e.scripts);
                        for (c = e.next(); !c.done; c = e.next())
                            if (0 === Xi(c.value, f)) {
                                f = 0;
                                break a
                            } f = 1
                    } e = Wi(K);
                if (e.plle) wj(Zi(K), 1);
                else {
                    e.plle = !0;
                    try {
                        var h = K.localStorage
                    } catch (q) {
                        h = null
                    }
                    null == xd(h, "goog_pem_mod") && yd(h, "goog_pem_mod");
                    h = Ub(a, Ei, 12);
                    e = Ob(a, 9);
                    vj(h, Yi(f, a), {
                        sa: e && !!K.google_disable_experiments,
                        Ia: e
                    });
                    if (h = I(a, 15)) h = Number(h), L(mg).l(h);
                    h = x(Mb(a, 19));
                    for (f = h.next(); !f.done; f = h.next()) f =
                        f.value, L(mg).j(f);
                    L(mg).i(12);
                    L(mg).i(10);
                    h = md(K) || K;
                    $h(h.location, "google_mc_lab") && L(mg).j(44738307)
                }
                if (null == (K.Prototype || {}).Version || !S(Yg)) {
                    pg(S(mh));
                    try {
                        var g = new jk;
                        if (S(kh) && (h = window, !h.google_plmetrics && window.PerformanceObserver)) {
                            h.google_plmetrics = !0;
                            for (var k = x(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), l = k.next(); !l.done; l = k.next()) {
                                var m = l.value;
                                kk(g).observe({
                                    type: m,
                                    buffered: !0
                                })
                            }
                            pk(g)
                        }
                    } catch (q) {}
                    if (g = md(A)) g.google_reactive_ads_global_state ? (null == g.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
                        (g.google_reactive_ads_global_state.sideRailProcessedFixedElements = new r.Set), null == g.google_reactive_ads_global_state.sideRailAvailableSpace && (g.google_reactive_ads_global_state.sideRailAvailableSpace = new r.Map)) : g.google_reactive_ads_global_state = new Eh, g = g.google_reactive_ads_global_state, g.tagSpecificState[1] || (g.tagSpecificState[1] = {
                        debugCard: null,
                        debugCardRequested: !1
                    });
                    g = Wi(K);
                    k = g.space_collapsing || "none";
                    if ((g = g.remove_ads_by_default ? {
                            Fa: !0,
                            Ya: k,
                            Va: g.ablation_viewport_offset
                        } : null) && g.Fa) Mj();
                    else {
                        Yk(a);
                        Qk(b, a);
                        g = {};
                        null == K.google_ad_client && Jj() && (g.google_loader_features_used = 2048);
                        Kj(K, g);
                        g.google_ad_host || (k = Vk()) && (g.google_ad_host = k);
                        k = K;
                        var p = void 0 === p ? 1 : p;
                        k = Kd(Jd(k)) || k;
                        k.google_unique_id = (k.google_unique_id || 0) + p;
                        g.google_unique_id = k.google_unique_id;
                        g.google_loader_used = "sa";
                        Mj();
                        p = K.document;
                        p.currentScript ? p = p.currentScript.parentElement : (p = p.getElementsByTagName("script"), p = p[p.length - 1].parentElement);
                        if (K.document && K.document.body && !ri(g) && !g.google_reactive_ad_format &&
                            (k = g.google_ad_width, m = ti(p), 0 < m && k > m)) {
                            l = g.google_ad_height;
                            k = !!zh[k + "x" + l];
                            b = m;
                            if (k)
                                if (h = Ah(m, l)) b = h, g.google_ad_format = h + "x" + l + "_0ads_al";
                                else throw new ze("No slot size for availableWidth=" + m);
                            g.google_ad_resize = !0;
                            g.google_ad_width = b;
                            k || (g.google_ad_format = null, g.google_override_format = !0);
                            m = b;
                            l = li(m, "auto", K, p, g);
                            di(l, m, g);
                            l = l.size();
                            g.google_responsive_formats = null;
                            l.minWidth() > m && !k && (g.google_ad_width = l.minWidth())
                        }
                        k = g.google_ad_width || 0;
                        l = Ba(li, k, "auto", K, p, g, !1, !0);
                        !S(Zg) && 488 > Hh(K) && (m =
                            md(K) || K, b = g.google_ad_client, m = m.location && "#ftptohbh" === m.location.hash ? 2 : $h(m.location, "google_responsive_slot_preview") || S(eh) ? 1 : S(dh) ? 2 : Ni(m, 1, b) ? 1 : 0, 0 !== m && Vi(p, g, k) && (g.google_resizing_allowed = !0, g.ovlp = !0, 2 === m ? (m = {}, di(l(), k, m), g.google_resizing_width = m.google_ad_width, g.google_resizing_height = m.google_ad_height, g.iaaso = !1) : (g.google_ad_format = "auto", g.iaaso = !0, g.armr = 1)));
                        (k = 1 === Od(g) && Bj(g)) && zj(k);
                        1 == ri(g) && (k = g.google_ad_width || 0, di(li(k, g.google_ad_format, K, p, g), k, g));
                        Wk(g, a)
                    }
                }
            }
    });
}).call(this, "[2019,\"r20220525\",\"r20190131\",null,null,null,null,\".google.com.bd\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1131,null,null,[1]],[null,1142,null,[null,2]],[null,1165,null,[null,1000]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1159,null,[null,500]],[null,1119,null,[]],[null,1138,null,[]],[1122,null,null,[1]],[1145,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1167,null,null,[1]],[null,1169,null,[null,4000]],[1053,null,null,[1]],[1100,null,null,[1]],[1102,null,null,[1]],[1149,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,8100]],[1036,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[380254521,null,null,[],[[[1,[[4,null,63]]],[1]]]],[381914117,null,null,[1]],[null,null,null,[],null,1939],[null,null,null,[null,null,null,[\"AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98\/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A\/9La288e7MDEU2ifusFnMg1C2Ij6uoa\/Z\/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H\/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1953,null,null,[1]],[1947,null,null,[1]],[434462125,null,null,[1]],[null,1972,null,[]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[12,[[10,[[42531605],[42531606]]],[10,[[42531607],[42531608]]],[1,[[44764001],[44764002]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31065721],[31065722,[[432946749,null,null,[1]]]]]],[100,[[31067487],[31067488,[[1970,null,null,[1]]]]]]]],[10,[[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[100,[[42531556],[42531557,[[1161,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[100,[[44760474],[44760475,[[1129,null,null,[1]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44763827,[[1170,null,null,[1]]]]]],[100,[[44761043],[44761044]]],[null,[[44755592],[44755593,[[1122,null,null,[1]],[1033,null,null,[1]],[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[1122,null,null,[1]],[1033,null,null,[1]],[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[1122,null,null,[1]],[1033,null,null,[1]],[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[null,[[44762585],[44762586,[[1122,null,null,[1]],[1033,null,null,[1]]]]],null,51],[10,[[44763957],[44763958,[[1122,null,null,[1]],[1033,null,null,[1]],[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[21066428],[21066429]]],[50,[[31065544],[31065545,[[1154,null,null,[1]]]]]],[50,[[31065741],[31065742,[[1134,null,null,[1]]]]]],[50,[[31067527],[31067528,[[1147,null,null,[1]]]]],null,54],[100,[[31067628],[31067629,[[1148,null,null,[1]]]]]],[50,[[31067748],[31067749,[[null,1169,null,[null,15000]],[null,1168,null,[null,15000]]]]]],[1000,[[31067756,[[null,null,14,[null,null,\"31067756\"]]],[6,null,null,null,6,null,\"31067756\"]],[31067757,[[null,null,14,[null,null,\"31067757\"]]],[6,null,null,null,6,null,\"31067757\"]]],[4,null,55]],[100,[[31067768],[31067769,[[1177,null,null,[1]]]]]],[1000,[[31067781,[[null,null,14,[null,null,\"31067781\"]]],[6,null,null,null,6,null,\"31067781\"]],[31067782,[[null,null,14,[null,null,\"31067782\"]]],[6,null,null,null,6,null,\"31067782\"]]],[4,null,55]],[2,[[31067794,[[null,1103,null,[null,31067794]],[null,1119,null,[null,300]]]],[31067795,[[null,1142,null,[null,2]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31067795]],[1163,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[6,null,null,3,null,2],49],[300,[[31067796,[[null,1142,null,[null,2]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31067796]],[1163,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"],49],[1000,[[31067807,[[null,null,14,[null,null,\"31067807\"]]],[6,null,null,null,6,null,\"31067807\"]],[31067808,[[null,null,14,[null,null,\"31067808\"]]],[6,null,null,null,6,null,\"31067808\"]]],[4,null,55]],[500,[[44764387,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44764387]],[1163,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"],49],[null,[[44764509],[44764510,[[1174,null,null,[1]]]]]],[4,[[44765310,[[null,1103,null,[null,44765310]]]],[44765311,[[null,1103,null,[null,44765311]],[1143,null,null,[1]]]],[44765312,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765312]],[1163,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44765313,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765313]],[1163,null,null,[1]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44765314,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765314]],[1163,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44765402,[[null,1103,null,[null,44765402]],[1143,null,null,[1]],[1179,null,null,[1]]]],[44765491,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765491]],[1163,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1175,null,null,[1]],[1120,null,null,[1]]]],[44765492,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765492]],[1163,null,null,[1]],[1176,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1175,null,null,[1]],[1120,null,null,[1]]]],[44765815,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765815]],[1163,null,null,[1]],[1176,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44765816,[[null,1142,null,[null,8]],[1156,null,null,[1]],[null,1103,null,[null,44765816]],[1163,null,null,[1]],[1176,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1180,null,null,[1]],[null,1119,null,[null,300]],[1175,null,null,[1]],[1120,null,null,[1]]]]],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],49],[1,[[44765400],[44765401,[[1179,null,null,[1]]]]]],[1,[[44765403,[[null,1103,null,[null,44765403]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44765404,[[null,1103,null,[null,44765404]],[1121,null,null,[1]],[1143,null,null,[1]],[null,1119,null,[null,300]]]],[44765405,[[null,1103,null,[null,44765405]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44765406,[[null,1103,null,[null,44765406]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],49],[50,[[31061761],[31067422],[31067423,[[null,1032,null,[]]]],[31067605]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[11,[[10,[[44763950],[44763951,[[1957,null,null,[1]]]]],null,48]]],[17,[[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[13,[[10,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,8,null,null,null,null,[\"attributionReporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,\"31067756\",null,null,-1,[44759876,44759927,44759837]]");