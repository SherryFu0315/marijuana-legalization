(function(e) {
    function t(t) {
        for (var n, o, r = t[0], c = t[1], l = t[2], m = 0, u = []; m < r.length; m++) o = r[m], s[o] && u.push(s[o][0]), s[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        h && h(t);
        while (u.length) u.shift()();
        return a.push.apply(a, l || []), i()
    }
    function i() {
        for (var e, t = 0; t < a.length; t++) {
            for (var i = a[t], n = !0, r = 1; r < i.length; r++) {
                var c = i[r];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(t--, 1), e = o(o.s = i[0]))
        }
        return e
    }
    var n = {},
        s = {
            app: 0
        },
        a = [];
    function o(t) {
        if (n[t]) return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = e, o.c = n, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/marijuana-legalization/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var l = 0; l < r.length; l++) t(r[l]);
    var h = c;
    a.push([0, "chunk-vendors"]), i()
})({
    0: function(e, t, i) {
        e.exports = i("56d7")
    },
    "0635": function(e, t, i) {
        "use strict";
        var n = i("6da7"),
            s = i.n(n);
        s.a
    },
    "0cd8": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBgwBJgMJ2+KYAAABRklEQVRIx+2UsUsCYRjGf2o3NEdtEZEkwpH0H/QXJLTX0tJWS2ODhC4K2SbBgSaGQ7W0NAWhELQ01BJYRGMOGphdW0Pcad733X3fuTT03PS+D/f7nnt574sBGQyeCakJIEGcBYH3xrkaABaJCbw14ryqASxKAq9LVDWBTBU+ff1jTvwBp7Sl3hSHFIMSXPDiA7e4DALItc4yqeAZyDRLkTQ9QGXOHkUoY9H8KcIAtplhzyn0PyFJhhW+nFI3gUGVPHeDhm6COVKkhxu6CVoc/V57/SHukmBzHECfDQrMD7fq9OkKnh7TEkiWa+foCFDnnpprNjijhA18SH8lg1tqFAYJtlzLpC28XEZl8o4pmkELhNfbqB7Yp4rh3QObHDc0sAMRUZbYIe9dpAPKrDKpkOKKpngTO1QUXneDjKl/wF8BPPIUHvANHgVIIlAb+fwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMTJUMDE6Mzg6MDMrMDI6MDCSorGaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTEyVDAxOjM4OjAzKzAyOjAw4/8JJgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
    },
    "0ef7": function(e, t, i) {},
    "102e": function(e, t, i) {
        "use strict";
        var n = i("b644"),
            s = i.n(n);
        s.a
    },
    "1f52": function(e, t, i) {
        "use strict";
        var n = i("8b1b"),
            s = i.n(n);
        s.a
    },
    "20d8": function(e, t, i) {},
    "25d2": function(e, t, i) {
        "use strict";
        var n = i("8b96"),
            s = i.n(n);
        s.a
    },
    "2be3": function(e, t, i) {
        "use strict";
        var n = i("b610"),
            s = i.n(n);
        s.a
    },
    "2d98": function(e, t, i) {},
    "38c8": function(e, t, i) {},
    "396d": function(e, t, i) {
        "use strict";
        var n = i("2d98"),
            s = i.n(n);
        s.a
    },
    "3a63": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASmSURBVGhD7ZpNqFVVGIavpZVRGGaUiQVapIVBQoSDtCSCgkoHqTUpQRQr0iIhB0ZGZdCPURQWpJMySrFCsxqEJiUE5cBJVpRoVpRWkvZDmfU8m/vB5txzzz1r73VOF/GFZ7DWPnv97PXzfetbp+e4jmGdB7fDi7AVvoNf4V84Aj/DLngTHoVr4VQYFBoJ98CnYINT+R1ehetgCHRdo+BxOATRqP3wOtwJV8G5cAqERsAEmAEPw4fgSMX7O2EWdKVDVjIffgIrPwpOlRtgGKTKzt4LX0N0yGk5ETomR2ETRIVvwSTIoaFwG3wLlv0H+MGy62LYC1byPTgCndBp8Cw40tb1EtjJLLocYiq9D+dAp+U6+gWscyOcBLXk1PkRLNDdpXaBCboU3MKtez2cCJXkmojp9DKcAN3WBRAf8kkzUuXu9DZYwBbo5kg06grQ3rhubjQjRe4YdsKFfbYZFXQR3AVPwFPgNnsZVNECsD2OzplmtKOz4AD4YpXdyY5rW2LnaeQDuBBSFVv/qiLVhrTYvqCdSJUG7ksoN7wZegHO/xSNA+2L3sCAH0LfSbfDr1nF2Nn5aKzzWufwml6WQ9ml+QhS3ZFnwHe1Ly21GPxhldGw49FIv9p0aNQUKPtXkyFFY+FvcGTOMKM/7QArqLI27odooM5jf3oX4neLzEiUBtJ3+3Vhzgd/4EKv4gBeDS/AdtAt709PQ3TkQTMSdQv47uYi1UQeivzBa0Wqc9oA0ZGFZiTK7fcf8NDW9IP7NS3c80Sn5E71J0RHtDVV5NnF95uusW3gw2lFKr/coXQ6oxPahapaC5bhNOujfeDDMUUqv8I6y2FItSNlPQSWs6xINSgCBcOLVF55nvkNoiNV1kZZd4Pl6P70kQ9cRLnluT3mtLjY62ouWNbzRapBGhof5tZKiE7sAb2Huopp+lyRalCcyIx25JJTKj6Qbo+2JofuA8tcUaQa9Bn40MpzyYosU94wI5PCqDb1DMLhSz68tJAny+jIUjMyKQ591xepBj0CPjR4lkuvQHSk7k4V0h7F8dcwbR8Zi/Wh7nUu3QSP9WIwIYfCy/6qSDWRAWXPELrZo80YpNII2pGWJ0VDPv7IXWEwymn1BdjGlq6U7rc/MhabI8LnSe6TXgxE1JWL2/bthpanSx+GFdatr6uyRW9qhRPl+rWsO4rUALoZ/LFO5Olm1FDOjtwKlvMNtOUPOiqG9n3JgHIdfQzRkUqRwl4Z9Yzw6Rwz2tUl4AG/UnQvs/ywYQDfMyNV4ZgdhFz3IFUUbo4jUjXq2bMGLMR5WfVYWkeGWa1f+1br5GooP3ww3QLvSrohp5PegPVqoLNM75NhHVhox67ESjJKEnFe65sJ2eTIeKyMwLQVjYfccouN3cmbgCuhI/JKzAC0FTlvjcU29UATpUcRxk6MRnb8is+jqjGwiOH+BW6P7u/u9+3INeBOqAP4OUQHvNWdDV2Vof3VUA64GbzQmut8Gn032jEPXFdLwJPdO/ADxDui72RgsPwHg67LM74NdVTK1wYD4XnCkZ0K/8f9ZEvpMRvGNAL4AHhpZGONdridem3hevB64LiOYfX0/AchqW+MCGXysAAAAABJRU5ErkJggg=="
    },
    "3d03": function(e, t, i) {},
    "407c": function(e, t, i) {},
    4781: function(e, t, i) {
        "use strict";
        var n = i("0ef7"),
            s = i.n(n);
        s.a
    },
    "4a9d": function(e, t, i) {
        "use strict";
        var n = i("e85c"),
            s = i.n(n);
        s.a
    },
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        i("7f7f"), i("78a7"), i("450d");
        var n = i("33ca"),
            s = i.n(n),
            a = (i("eca7"), i("3787")),
            o = i.n(a),
            r = (i("425f"), i("4105")),
            c = i.n(r),
            l = (i("a7cc"), i("df33")),
            h = i.n(l),
            m = (i("10cb"), i("f3ad")),
            u = i.n(m),
            d = (i("06f1"), i("6ac9")),
            p = i.n(d),
            f = (i("f4f9"), i("c2cc")),
            v = i.n(f),
            g = (i("7a0f"), i("0f6c")),
            b = i.n(g),
            _ = (i("1f1a"), i("4e4b")),
            y = i.n(_),
            w = (i("ae26"), i("845f")),
            A = i.n(w),
            C = (i("1951"), i("eedf")),
            k = i.n(C),
            x = (i("cadf"), i("551c"), i("097d"), i("2b0e")),
            R = i("8aa5"),
            D = i.n(R),
            B = (i("0fae"), i("38c8"), function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e.isSlidesRead ? [e.isUserinfoSet ? i("div", {
                    staticClass: "main"
                }, [i("NewsArticle"), i("hr"), i("Comments", {
                    attrs: {
                        user: e.user,
                        savedData: e.savedData
                    }
                }), e.shouldShowDialog ? i("Dialog", {
                    attrs: {
                        visible: e.shouldShowDialog
                    }
                }) : e._e()], 1) : i("Login", {
                    attrs: {
                        saveUserinfo: e.setUserinfo
                    }
                })] : i("Slides", {
                    attrs: {
                        done: e.markSlidesRead
                    }
                })], 2)
            }),
            E = [],
            S = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "modal"
                }, [i("div", {
                    staticClass: "slides"
                }, [i("img", {
                    staticClass: "slide",
                    attrs: {
                        src: "static/training/" + e.which + "/Slide" + e.currentSlide + ".jpg"
                    }
                }), i("div", {
                    staticClass: "row"
                }, [i("el-button", {
                    attrs: {
                        icon: "el-icon-arrow-left",
                        circle: "",
                        disabled: 1 === e.currentSlide
                    },
                    on: {
                        click: e.prev
                    }
                }), i("span", [e._v(e._s(e.currentSlide) + " / " + e._s(e.lastSlide))]), i("el-button", {
                    attrs: {
                        type: e.isLastSlide ? "success" : void 0,
                        icon: e.isLastSlide ? "el-icon-d-arrow-right" : "el-icon-arrow-right",
                        circle: ""
                    },
                    on: {
                        click: e.next
                    }
                })], 1)])])
            },
            M = [],
            j = {
                name: "slides",
                props: ["which", "done"],
                data: function() {
                    var e;
                    return e = 0 === this.which ? 8 : 11, {
                        currentSlide: 1,
                        lastSlide: e
                    }
                },
                computed: {
                    isLastSlide: function() {
                        return this.currentSlide === this.lastSlide
                    }
                },
                methods: {
                    prev: function() {
                        1 !== this.currentSlide && (this.currentSlide -= 1)
                    },
                    next: function() {
                        this.currentSlide !== this.lastSlide ? this.currentSlide += 1 : this.done()
                    }
                }
            },
            I = j,
            T = (i("f5cc"), i("2877")),
            O = Object(T["a"])(I, S, M, !1, null, "d5bfd246", null);
        O.options.__file = "Slides.vue";
        var L = O.exports,
            N = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("el-dialog", {
                    attrs: {
                        visible: "",
                        center: "",
                        "show-close": !1
                    }
                }, [i("el-form", {
                    ref: "form",
                    attrs: {
                        model: e.form,
                        rules: e.rules
                    }
                }, [i("el-form-item", {
                    attrs: {
                        label: "Screen Name",
                        prop: "nickname"
                    }
                }, [i("el-input", {
                    attrs: {
                        autocomplete: "off"
                    },
                    model: {
                        value: e.form.nickname,
                        callback: function(t) {
                            e.$set(e.form, "nickname", t)
                        },
                        expression: "form.nickname"
                    }
                })], 1), i("el-form-item", {
                    attrs: {
                        label: "Password",
                        prop: "password"
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "password",
                        autocomplete: "off"
                    },
                    model: {
                        value: e.form.password,
                        callback: function(t) {
                            e.$set(e.form, "password", t)
                        },
                        expression: "form.password"
                    }
                })], 1)], 1), i("div", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v("Sign in")])], 1)], 1)
            },
            U = [],
            F = {
                name: "login",
                props: ["saveUserinfo"],
                data: function() {
                    return {
                        form: {
                            nickname: "",
                            password: ""
                        },
                        rules: {
                            nickname: [{
                                required: !0,
                                message: "Please input screen name",
                                trigger: "blur"
                            }],
                            password: [{
                                required: !0,
                                message: "Please input password",
                                trigger: "blur"
                            }]
                        }
                    }
                },
                methods: {
                    submit: function() {
                        var e = this;
                        this.$refs["form"].validate(function(t) {
                            if (!t) return !1;
                            e.saveUserinfo(e.form.nickname.trim(), e.form.password.trim())
                        })
                    }
                }
            },
            P = F,
            z = (i("1f52"), Object(T["a"])(P, N, U, !1, null, "1f287389", null));
        z.options.__file = "Login.vue";
        var G = z.exports,
            Q = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            V = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("article", [n("h1", [e._v("Weed is legalized in Michigan yet rejected by North Dakota")]), n("section", {
                    staticClass: "content"
                }, [n("p", [e._v("On November 12, 2018, Michigan voters made the state the 10th in the U.S. — and the first in the Midwest — to legalize recreational marijuana. Voters in a second Midwest state, North Dakota, struck down a similar measure that would have legalized recreational use and expunged criminal records for prior marijuana offenders.")]), n("p", [e._v("Recreational marijuana is already legal in Washington, DC, and nine other states: Washington, Oregon, Nevada, California, Colorado, Alaska, Vermont, Maine and Massachusetts.")]), n("h2", [e._v("Michigan")]), n("p", [e._v("Michigan’s Proposal 1 permits use for adults 21 and older, yet allows municipalities to ban or restrict marijuana use and commercial enterprise within their boundaries. The new law will allow individuals to grow up to 12 cannabis plants at a time. Public consumption remains prohibited. Michigan has provided for one of the lowest cannabis tax levels in the nation with retailers to pay a 10% excise tax, and consumers picking up the state’s 6% sales tax.")]), n("p", [e._v("While 56% of Michigan voted to support legalization, 44% opposed. The bill is expected to go into effect next year with sales beginning in 2020.")]), n("p", [e._v("“I am proud of Michigan voters who have overwhelmingly supported this initiative and I am extremely excited about a future where law enforcement and our criminal justice system can focus on real crime and improve public safety,” Barton Morris Junior, founder of Cannabis Legal Group said.")]), n("h2", [e._v("North Dakota")]), n("p", [e._v("North Dakota’s Measure 3 failed to pass. The brake on legalization comes as less of a surprise, as critics warned the bill lacked regulatory and enforcement details. The state’s proposal contained no mandatory tax on marijuana transfers or sales, making revenue projections uncertain. Proponents of the measure viewed it as critical criminal justice reform, as the state has one of the lowest marijuana consumption rates, yet is among the highest for prosecuting marijuana offenses.")]), n("p", {
                    staticClass: "image-container"
                }, [n("img", {
                    attrs: {
                        src: i("8554")
                    }
                })]), n("p", [e._v("Cole Haymond, an Advisor for Legalize ND, said North Dakota is also home to veterans who could benefit from easier access to the drug. “With a state with a high percentage of veterans it’s disappointing if it doesn’t pass,” Haymod said ahead of the vote.")]), n("p", [e._v("Polls leading into midterm elections were mixed on the initiative. An October 11 – 14 poll found 51% of likely voters in favor of legalized recreational use, while an earlier October poll found 59% against the measure.While 59.5% of North Dakota voters ultimately said no to legalization, only 40.5% said yes.")])])])
            }],
            Y = {
                name: "news-article"
            },
            J = Y,
            q = (i("4a9d"), Object(T["a"])(J, Q, V, !1, null, "7d0d7657", null));
        q.options.__file = "NewsArticle.vue";
        var W = q.exports,
            X = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("section", {
                    staticClass: "comments"
                }, [e.shouldShowReplyBox ? i("ReplyBox", {
                    attrs: {
                        user: e.user,
                        main: !0
                    }
                }) : e._e(), e.shouldShowComments ? e._l(e.comments, function(t) {
                    return i("Comment", {
                        key: t.id,
                        attrs: {
                            comment: t,
                            user: e.user,
                            "saved-data": e.savedData
                        }
                    })
                }) : e._e()], 2)
            },
            H = [],
            K = i("be94"),
            Z = i("ade3"),
            $ = (i("7514"), i("8615"), i("456d"), i("ac6a"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "comment",
                    class: {
                        reply: e.isReply
                    }
                }, [n("div", {
                    staticClass: "comment__main"
                }, [n("img", {
                    staticClass: "comment__main_avatar",
                    attrs: {
                        src: e.imageURL
                    }
                }), n("div", {
                    staticClass: "comment__main__body"
                }, [n("div", {
                    staticClass: "comment___main__body__nickname__report"
                }, [n("div", {
                    staticClass: "comment__main__body__nickname"
                }, [e._v(e._s(e.comment.nickname))]), e.isReportEnabled && !e.comment.byCurrentUser ? n("div", {
                    staticClass: "comment___main__body__report"
                }, [n("div", {
                    staticClass: "comment___main__body__report__info"
                }, [e.comment.flagInfo ? [n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1 !== e.attitude,
                        expression: "attitude !== false"
                    }],
                    staticClass: "flag",
                    attrs: {
                        src: i("5a25")
                    }
                }), e._v("\n              " + e._s(e.flagInfoDisplay) + "\n              "), n("el-popover", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 === e.attitude && void 0 === e.reported,
                        expression: "attitude === undefined && reported === undefined"
                    }],
                    attrs: {
                        placement: "top-end",
                        width: "300",
                        trigger: "hover",
                        offset: -100
                    }
                }, [n("img", {
                    staticClass: "help",
                    attrs: {
                        slot: "reference",
                        src: i("3a63")
                    },
                    slot: "reference"
                }), 2 === e.study && 1 === e.condition ? [n("p", [n("strong", [e._v("The recommendation decision is made based on our comment policy.")])]), n("ul", [n("li", [e._v("Commenters in this forum are instructed to be civil in addressing and referencing other commenters and stay focused on the subject at hand.")]), n("li", [e._v("Comments represent a range of views and are judged the most interesting or thoughtful.")]), n("li", [e._v("In some cases, comments may be specifically highlighted to showcase commentary from a particular region, or readers with first-hand knowledge of an issue.")])])] : 2 === e.study && 2 === e.condition ? [n("p", [n("strong", [e._v("The moderation decision is made based on our comment policy.")])]), n("ul", [n("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), n("ul", [n("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), n("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), n("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), n("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), n("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])])] : [n("p", [n("strong", [e._v("Commentators in this forum are instructed to observe the following rules:")])]), n("ul", [n("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), n("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), n("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), n("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), n("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])]], 2)] : e._e()], 2), e.comment.flagInfo ? [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 === e.attitude,
                        expression: "attitude === undefined"
                    }],
                    staticClass: "button danger",
                    on: {
                        click: e.confirm
                    }
                }, [e._v("Agree")]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 === e.attitude,
                        expression: "attitude === undefined"
                    }],
                    staticClass: "button danger",
                    on: {
                        click: e.unflag
                    }
                }, [e._v("Disagree")])] : e._e(), e.comment.flagInfo ? e._e() : [n("div", {
                    staticClass: "button",
                    on: {
                        click: e.report
                    }
                }, [n("img", {
                    attrs: {
                        src: i("0cd8")
                    }
                }), e._v("\n              " + e._s(e.reportInfoDisplay) + "\n            ")])], n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 !== e.attitude || void 0 !== e.reported,
                        expression: "attitude !== undefined || reported !== undefined"
                    }],
                    staticClass: "button danger",
                    on: {
                        click: e.change
                    }
                }, [e._v("Undo")])], 2) : e._e(), e.comment.byCurrentUser ? n("div", {
                    staticClass: "button",
                    on: {
                        click: e.showEditBox
                    }
                }, [e._v("Edit")]) : e._e()]), n("div", {
                    staticClass: "comment__main__body__content"
                }, [e._v(e._s(e.editedContent))]), e.comment.byCurrentUser ? e._e() : n("div", {
                    staticClass: "comment__main__body__buttons"
                }, [n("div", {
                    staticClass: "button",
                    class: {
                        active: e.isShowingReplyBox
                    },
                    on: {
                        click: e.toggleReplyBox
                    }
                }, [e._v("Reply")]), !e.isReply && e.hasReplies ? n("div", {
                    staticClass: "button",
                    class: {
                        active: e.isShowingReplies
                    },
                    attrs: {
                        disabled: !e.hasReplies
                    },
                    on: {
                        click: e.toggleReplies
                    }
                }, [e._v("Replies (" + e._s(e.repliesCount) + ")")]) : e._e(), n("div", {
                    staticClass: "button",
                    on: {
                        click: e.voteLike
                    }
                }, [n("img", {
                    class: {
                        active: !0 === e.like
                    },
                    attrs: {
                        src: i("8e44")
                    }
                }), e._v(" (" + e._s(e.likeCount) + ")")]), n("div", {
                    staticClass: "button",
                    on: {
                        click: e.voteDislike
                    }
                }, [n("img", {
                    class: {
                        active: !1 === e.like
                    },
                    attrs: {
                        src: i("fcd3")
                    }
                }), e._v(" (" + e._s(e.dislikeCount) + ")")])])])]), n("ReplyBox", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowingReplyBox,
                        expression: "isShowingReplyBox"
                    }],
                    attrs: {
                        user: e.user,
                        comment: e.comment,
                        "parent-comment": e.parentComment,
                        fold: e.foldReplyBox
                    }
                }), !e.isReply && e.hasReplies && e.isShowingReplies ? n("div", {
                    staticClass: "comment__replies"
                }, e._l(e.replies, function(t) {
                    return n("comment", {
                        key: t.id,
                        attrs: {
                            comment: t,
                            "parent-comment": e.comment,
                            "is-reply": !0,
                            user: e.user,
                            "saved-data": e.savedData
                        }
                    })
                })) : e._e(), n("el-dialog", {
                    attrs: {
                        title: "Edit",
                        visible: e.isShowingEditBox,
                        center: "",
                        "before-close": e.hideEditBox
                    }
                }, [n("el-form", [n("el-form-item", {
                    attrs: {
                        label: "Comment"
                    }
                }, [n("el-input", {
                    attrs: {
                        type: "textarea"
                    },
                    model: {
                        value: e.editingContent,
                        callback: function(t) {
                            e.editingContent = t
                        },
                        expression: "editingContent"
                    }
                })], 1)], 1), n("div", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [n("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.edit
                    }
                }, [e._v("Submit")])], 1)], 1)], 1)
            }),
            ee = [],
            te = (i("9e1f"), i("6ed5")),
            ie = i.n(te),
            ne = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("section", {
                    staticClass: "reply-box",
                    class: {
                        main: e.main
                    }
                }, [i("div", {
                    staticClass: "reply-box__nickname"
                }, [e._v(e._s(e.user.nickname))]), i("div", {
                    staticClass: "reply-box__avatar__input"
                }, [i("img", {
                    attrs: {
                        src: e.imageURL
                    }
                }), i("el-input", {
                    attrs: {
                        type: "textarea",
                        cols: "40",
                        rows: "3",
                        placeholder: e.placeholder
                    },
                    model: {
                        value: e.content,
                        callback: function(t) {
                            e.content = t
                        },
                        expression: "content"
                    }
                })], 1), e.main && !1 === e.isEnough ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e(), i("div", {
                    staticClass: "reply-box___buttons"
                }, [i("el-button", {
                    attrs: {
                        type: "primary",
                        size: "small",
                        disabled: !e.isEnough
                    },
                    on: {
                        click: e.post
                    }
                }, [e._v("Post")])], 1)])
            },
            se = [],
            ae = i("14b7"),
            oe = Object(ae["a"])(),
            re = oe,
            ce = {
                study: void 0,
                condition: void 0,
                name: void 0,
                user: void 0,
                comment: "",
                finalComment: "",
                initialize: function(e) {
                    var t = e.study,
                        i = e.condition,
                        n = e.name;
                    this.study = t, this.condition = i, this.name = n
                }
            },
            le = {
                name: "reply-box",
                props: ["user", "comment", "parentComment", "fold", "main"],
                data: function() {
                    return {
                        content: this.comment ? "@".concat(this.comment.nickname, " ") : "",
                        minLength: this.main ? 280 : 1
                    }
                },
                computed: {
                    imageURL: function() {
                        return "https://ui-avatars.com/api/?name=".concat(this.user.nickname)
                    },
                    isReply: function() {
                        return !!this.parentComment
                    },
                    placeholder: function() {
                        return this.main ? "Please summarize your thoughts on marijuana legalization and enter your comments here:" : ""
                    },
                    isEnough: function() {
                        return this.content.length >= this.minLength
                    },
                    remainingLength: function() {
                        return this.minLength - this.content.length
                    }
                },
                methods: {
                    post: function() {
                        if (this.main) return ce.comment = this.content, void re.emit("click-on-post");
                        re.emit("post", {
                            commentId: this.isReply ? this.parentComment.id : this.comment ? this.comment.id : void 0,
                            replyId: this.isReply ? this.comment.id : void 0,
                            comment: {
                                content: this.content,
                                nickname: this.user.nickname,
                                uid: this.user.nickname,
                                like: 0,
                                dislike: 0,
                                type: 0,
                                byCurrentUser: !0
                            }
                        }), this.content = "", this.fold && this.fold()
                    }
                }
            },
            he = le,
            me = (i("102e"), Object(T["a"])(he, ne, se, !1, null, "5d4f2e6a", null));
        me.options.__file = "ReplyBox.vue";
        var ue = me.exports,
            de = (i("28a5"), i("369b")),
            pe = i.n(de),
            fe = [{
                study: 1,
                condition: 1,
                name: "No bot condition"
            }, {
                study: 1,
                condition: 6,
                name: "EnhancedMindful + lenient"
            }, {
                study: 1,
                condition: 5,
                name: "Mindful + strict"
            }, {
                study: 1,
                condition: 4,
                name: "Mindful + lenient"
            }, {
                study: 1,
                condition: 3,
                name: "Routine + strict"
            }, {
                study: 1,
                condition: 2,
                name: "Routine + lenient"
            }, {
                study: 2,
                condition: 2,
                name: "Moderation  bot"
            }, {
                study: 2,
                condition: 1,
                name: "Selection bot"
            }],
            ve = function(e) {
                for (var t = window.location.hash.substring(window.location.hash.indexOf("?") + 1), i = t.split("&"), n = 0; n < i.length; n++) {
                    var s = i[n].split("=");
                    if (decodeURIComponent(s[0]) == e) return decodeURIComponent(s[1])
                }
                return ""
            },
            ge = [],
            be = {},
            _e = [];
        function ye(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var i = Math.floor(Math.random() * (t + 1)),
                    n = [e[i], e[t]];
                e[t] = n[0], e[i] = n[1]
            }
            return e
        }
        var we = function() {
                return new Promise(function(e) {
                    var t = ve("id"),
                        i = parseInt(atob(t), 10);
                    console.log(i);
                    var n = fe[i],
                        s = !1,
                        a = !1,
                        o = 2 === n.study,
                        r = function() {
                            if (s && a && o) return ye(ge), e(n)
                        };
                    fetch("static/".concat(n.study, "/comments.csv")).then(function(e) {
                        return e.text()
                    }).then(function(e) {
                        pe.a.parse(e, {
                            header: !0
                        }).data.forEach(function(e) {
                            var t = e.comment_text,
                                i = e.down_count,
                                s = e.up_count,
                                a = e.message_id,
                                o = e.nickname,
                                r = e.user_id,
                                c = e.Selection_bot,
                                l = e.Moderation_bot;
                            ge.push({
                                content: t,
                                like: s,
                                dislike: i,
                                id: a,
                                nickname: o,
                                uid: r,
                                flagInfo: 2 === n.condition ? l : 3 === n.condition ? c : 4 === n.condition ? l : 5 === n.condition ? c : void 0
                            })
                        }), s = !0, r()
                    }), fetch("static/".concat(n.study, "/replies.csv")).then(function(e) {
                        return e.text()
                    }).then(function(e) {
                        pe.a.parse(e, {
                            header: !0
                        }).data.forEach(function(e) {
                            var t = e.reply_text,
                                i = e.message_id_default,
                                n = e.reply_id,
                                s = e.reply_nickname,
                                a = e.reply_down_count,
                                o = e.reply_up_count,
                                r = e.reply_uid,
                                c = {
                                    content: t,
                                    like: o,
                                    dislike: a,
                                    id: n,
                                    nickname: s,
                                    uid: r,
                                    parentId: i
                                };
                            be[i] ? be[i].push(c) : be[i] = [c]
                        }), a = !0, r()
                    }), 1 === n.study && fetch("static/1/peer-review.csv").then(function(e) {
                        return e.text()
                    }).then(function(e) {
                        pe.a.parse(e, {
                            header: !0
                        }).data.forEach(function(e) {
                            var t = e.comment_text,
                                i = e.Mindful_strict,
                                s = e.Routine_strict;
                            _e.push({
                                content: t,
                                bot: 2 === n.condition ? e["Routine_lenient "] : 3 === n.condition ? s : 4 === n.condition ? e["Mindful_lenient "] : 5 === n.condition ? i : void 0
                            })
                        }), o = !0, r()
                    })
                })
            },
            Ae = function() {
                return ge
            },
            Ce = function(e) {
                return be[e] || []
            },
            ke = function(e, t, i, n) {
                var s = be[e].find(function(e) {
                    var i = e.id;
                    return i === t
                });
                s[i] = n
            },
            xe = function() {
                return _e
            },
            Re = {
                name: "comment",
                components: {
                    ReplyBox: ue
                },
                props: ["comment", "parentComment", "user", "savedData"],
                data: function() {
                    var e = this,
                        t = this.user,
                        i = t.nickname,
                        n = t.id,
                        s = !!this.parentComment,
                        a = Ce(this.comment.id),
                        o = this.comment._like,
                        r = this.comment._attitude,
                        c = this.comment._reported;
                    if (this.savedData.reactions)
                        if (s) {
                            var l = this.savedData.reactions[this.parentComment.id] && this.savedData.reactions[this.parentComment.id].replies[this.comment.id];
                            l && (o = l.like, r = l.attitude, c = l.reported)
                        } else {
                            var h = this.savedData.reactions[this.comment.id];
                            h && (o = h.like, r = h.attitude, c = h.reported)
                        }
                    return this.savedData.replies && Object.keys(this.savedData.replies).forEach(function(t) {
                        var o = e.savedData.replies[t];
                        if (!s && o.commentId === e.comment.id) {
                            var r = Object.values(o.content)[Object.values(o.content).length - 1];
                            a.push({
                                content: r,
                                id: t,
                                nickname: i,
                                uid: n,
                                like: 0,
                                dislike: 0,
                                type: 0,
                                byCurrentUser: !0
                            })
                        }
                    }), {
                        isReportEnabled: !0,
                        isShowingReplies: !1,
                        isShowingReplyBox: !1,
                        isShowingEditBox: !1,
                        editedContent: this.comment.content,
                        editingContent: "",
                        replies: a,
                        reported: c,
                        attitude: r,
                        like: o,
                        study: ce.study,
                        condition: ce.condition
                    }
                },
                computed: {
                    isReply: function() {
                        return !!this.parentComment
                    },
                    hasReplies: function() {
                        return this.replies.length > 0
                    },
                    imageURL: function() {
                        return "https://ui-avatars.com/api/?name=".concat(this.comment.nickname)
                    },
                    repliesCount: function() {
                        return this.replies.length
                    },
                    whom: function() {
                        return 0 === this.comment.type ? "" : 1 === this.comment.type ? "bot" : "community"
                    },
                    flagInfoDisplay: function() {
                        return void 0 === this.attitude ? this.comment.flagInfo : !1 === this.attitude ? 1 === this.condition ? "Disagree with the bot: this post is not insightful" : "Disagree with the bot: this post is not inappropriate" : 1 === this.condition ? "Agree with the bot: this is insightful" : "Agree with the bot: this is inappropriate"
                    },
                    reportInfoDisplay: function() {
                        return this.reported ? 1 === this.study ? "Reported" : 1 === this.condition ? "Recommended: this is insightful" : "Reported: this is inappropriate" : 1 === this.study ? "Report" : 1 === this.condition ? "Recommend to bot" : "Report to bot"
                    },
                    likeCount: function() {
                        return parseInt(this.comment.like, 10) + (!0 === this.like ? 1 : 0)
                    },
                    dislikeCount: function() {
                        return parseInt(this.comment.dislike, 10) + (!1 === this.like ? 1 : 0)
                    }
                },
                methods: {
                    reactionsRef: function(e) {
                        return (this.isReply ? "".concat(this.user.id, "/reactions/").concat(this.parentComment.id, "/replies/").concat(this.comment.id, "/") : "".concat(this.user.id, "/reactions/").concat(this.comment.id, "/")) + e
                    },
                    report: function() {
                        ie.a.alert("Thank you for your feedback!", void 0, {
                            showConfirmButton: !0,
                            confirmButtonText: "Back to discussion",
                            closeOnClickModal: !0,
                            center: !0
                        }), D.a.database().ref(this.reactionsRef("reported")).set(!0), this.reported = !0, this.isReply && ke(this.parentComment.id, this.comment.id, "_reported", !0)
                    },
                    confirm: function() {
                        D.a.database().ref(this.reactionsRef("_attitude")).set(!0), this.attitude = !0, this.isReply && ke(this.parentComment.id, this.comment.id, "_attitude", !0)
                    },
                    unflag: function() {
                        ie.a.alert("Thank you for your help. Your unflagging action has been reported".concat(this.whom ? " to the ".concat(this.whom) : "", "."), void 0, {
                            showConfirmButton: !0,
                            confirmButtonText: "Back to discussion",
                            closeOnClickModal: !0,
                            center: !0
                        }), D.a.database().ref(this.reactionsRef("attitude")).set(!1), this.attitude = !1, this.isReply && ke(this.parentComment.id, this.comment.id, "_attitude", !1)
                    },
                    change: function() {
                        void 0 !== this.attitude && (D.a.database().ref(this.reactionsRef("attitude")).set(null), this.attitude = void 0, this.isReply && ke(this.parentComment.id, this.comment.id, "_attitude", void 0)), void 0 !== this.reported && (D.a.database().ref(this.reactionsRef("reported")).set(null), this.reported = void 0, this.isReply && ke(this.parentComment.id, this.comment.id, "_reported", void 0))
                    },
                    voteLike: function() {
                        this.like = !0 !== this.like || null, D.a.database().ref(this.reactionsRef("like")).set(this.like), this.isReply && ke(this.parentComment.id, this.comment.id, "_like", this.like)
                    },
                    voteDislike: function() {
                        this.like = !1 === this.like && null, D.a.database().ref(this.reactionsRef("like")).set(this.like), this.isReply && ke(this.parentComment.id, this.comment.id, "_like", this.like)
                    },
                    toggleReplies: function() {
                        this.isShowingReplies = !this.isShowingReplies, D.a.database().ref(this.reactionsRef("viewReplies")).push((new Date).toGMTString())
                    },
                    toggleReplyBox: function() {
                        this.isShowingReplyBox = !this.isShowingReplyBox
                    },
                    foldReplyBox: function() {
                        this.isShowingReplyBox = !1
                    },
                    showEditBox: function() {
                        this.isShowingEditBox = !0, this.editingContent = this.editedContent
                    },
                    hideEditBox: function() {
                        this.isShowingEditBox = !1
                    },
                    edit: function() {
                        D.a.database().ref("".concat(this.user.id, "/replies/").concat(this.comment.id, "/content")).push(this.editingContent), this.editedContent = this.editingContent, this.isShowingEditBox = !1
                    }
                },
                mounted: function() {
                    var e = this;
                    re.on("post", function(t) {
                        var i = t.commentId,
                            n = t.replyId,
                            s = t.comment;
                        if (i === e.comment.id) {
                            var a = "".concat(e.user.id, "/replies/"),
                                o = {
                                    commentId: i,
                                    content: Object(Z["a"])({}, D.a.database().ref().child(a).push().key, s.content)
                                };
                            n && (o.replyId = n);
                            var r = D.a.database().ref(a).push().key;
                            D.a.database().ref(a + r).set(o).then(function() {
                                e.replies.push(Object(K["a"])({}, s, {
                                    id: r
                                })), e.isShowingReplies = !0
                            })
                        }
                    })
                }
            },
            De = Re,
            Be = (i("e0da"), Object(T["a"])(De, $, ee, !1, null, "289c5fc8", null));
        Be.options.__file = "Comment.vue";
        var Ee = Be.exports,
            Se = function(e) {
                return {
                    content: e,
                    dislike: "0",
                    flagInfo: "",
                    id: "fake",
                    like: "0",
                    nickname: ce.user.nickname,
                    uid: "fake"
                }
            },
            Me = {
                name: "comments",
                components: {
                    Comment: Ee,
                    ReplyBox: ue
                },
                props: ["user", "savedData"],
                data: function() {
                    var e = this,
                        t = this.user,
                        i = t.nickname,
                        n = t.id,
                        s = Ae();
                    this.savedData.replies && Object.keys(this.savedData.replies).forEach(function(t) {
                        var a = e.savedData.replies[t];
                        if (!a.commentId && !a.replyId) {
                            var o = Object.values(a.content)[Object.values(a.content).length - 1];
                            s.push({
                                content: o,
                                id: t,
                                nickname: i,
                                uid: n,
                                like: 0,
                                dislike: 0,
                                type: 0,
                                byCurrentUser: !0
                            })
                        }
                    });
                    var a = this.savedData.actions && Object.keys(this.savedData.actions).find(function(t) {
                        return "done" === e.savedData.actions[t].type
                    });
                    if (a && 2 === ce.study) {
                        var o = Object.keys(this.savedData.actions).find(function(t) {
                                return "resubmit-comment" === e.savedData.actions[t].type
                            }),
                            r = Math.floor(Math.random() * Math.floor(s.length));
                        s.splice(r, 0, Se(this.savedData.actions[o].input.comment))
                    }
                    return {
                        comments: s,
                        shouldShowComments: a,
                        shouldShowReplyBox: !a
                    }
                },
                mounted: function() {
                    var e = this;
                    re.on("done", function() {
                        if (2 === ce.study) {
                            var t = Math.floor(Math.random() * Math.floor(e.comments.length));
                            e.comments.splice(t, 0, Se(ce.finalComment))
                        }
                        e.shouldShowReplyBox = !1
                    }), re.on("show-comments", function() {
                        e.shouldShowComments = !0
                    }), re.on("post", function(t) {
                        var i = t.commentId,
                            n = t.replyId,
                            s = t.comment;
                        if (void 0 === i && void 0 === n) {
                            var a = "".concat(e.user.id, "/replies/"),
                                o = (new Date).getTime();
                            D.a.database().ref(a + o).set({
                                content: Object(Z["a"])({}, D.a.database().ref().child(a).push().key, s.content)
                            }).then(function() {
                                e.comments.push(Object(K["a"])({}, s, {
                                    id: o
                                })), e.$nextTick(function() {
                                    var e = document.scrollingElement || document.body;
                                    e.scrollTo({
                                        top: e.scrollHeight,
                                        behavior: "smooth"
                                    })
                                })
                            })
                        }
                    })
                }
            },
            je = Me,
            Ie = (i("dd8b"), Object(T["a"])(je, X, H, !1, null, "531caf16", null));
        Ie.options.__file = "Comments.vue";
        var Te = Ie.exports,
            Oe = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("el-dialog", {
                    attrs: {
                        visible: e.visible,
                        width: "80%",
                        center: "",
                        "show-close": !1,
                        "close-on-click-modal": !1,
                        "close-on-press-escape": !1
                    },
                    on: {
                        "update:visible": function(t) {
                            e.visible = t
                        }
                    }
                }, ["introduction" === e.step ? i("Introduction") : e._e(), 1 === e.study ? ["rule" === e.step ? [1 === e.condition ? i("ModerationRule11") : e._e(), 2 === e.condition ? i("ModerationRule12") : e._e(), 3 === e.condition ? i("ModerationRule13") : e._e(), 4 === e.condition ? i("ModerationRule14") : e._e(), 5 === e.condition ? i("ModerationRule15") : e._e()] : e._e(), "explanation" === e.step ? [4 === e.condition ? i("BotExplanation14") : e._e(), 5 === e.condition ? i("BotExplanation15") : e._e()] : e._e()] : e._e(), 2 === e.study ? ["rule" === e.step ? [1 === e.condition ? i("ModerationRule21") : e._e(), 2 === e.condition ? i("ModerationRule22") : e._e()] : e._e(), "explanation" === e.step ? [1 === e.condition ? i("BotExplanation21") : e._e(), 2 === e.condition ? i("BotExplanation22") : e._e()] : e._e()] : e._e(), "peer-review" === e.step ? i("PeerReview", {
                    key: e.peerReviewCurrent,
                    attrs: {
                        count: e.peerReviewCount,
                        current: e.peerReviewCurrent,
                        content: e.peerReviewContent,
                        bot: e.peerReviewBot
                    }
                }) : e._e(), "resubmit-comment" === e.step ? i("OwnComment") : e._e(), "done" === e.step ? i("Done") : e._e(), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {
                        type: "info",
                        disabled: !e.canProceed
                    },
                    on: {
                        click: e.next
                    }
                }, [e._v(e._s("done" === e.step ? "Enter the forum" : "Next")), i("i", {
                    staticClass: "el-icon-arrow-right el-icon--right"
                })])], 1)], 2)
            },
            Le = [],
            Ne = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Ue = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("p", [e._v("Thanks for your comment. Before we consider your comment for publication, please help us review five comments from other users. ")]), i("p", [e._v("In the next step, you will learn about the commenting rules of the forum.")])])
            }],
            Fe = {
                name: "introduction",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "introduction"
                    })
                }
            },
            Pe = Fe,
            ze = (i("91d4"), Object(T["a"])(Pe, Ne, Ue, !1, null, "79b9c629", null));
        ze.options.__file = "Introduction.vue";
        var Ge = ze.exports,
            Qe = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Ve = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])])
            }],
            Ye = {
                name: "study-11",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "rule"
                    })
                }
            },
            Je = Ye,
            qe = (i("4781"), Object(T["a"])(Je, Qe, Ve, !1, null, "197c314f", null));
        qe.options.__file = "ModerationRule11.vue";
        var We = qe.exports,
            Xe = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            He = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("A test message Commentators in this forum are instructed to observe the following rules:")]), i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])]), i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us moderate comments based on the above rules. ")]), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(" \"Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v(" “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v(" “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])]), i("h3", [e._v("How the moderation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of inappropriateness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as appropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as inappropriate by the bot when it is really not ("false positives")')]), i("li", [e._v('Comment classified as appropriate by the bot when in reality the comment is NOT appropriate ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", [e._v("A bot can be made “strict” or “lenient” in its assessment by tweaking the cutoff point. Referring to the table below, if the bot were designed to be more "), i("u", [e._v("strict")]), e._v(", "), i("u", [e._v("comment-4")]), e._v(" would have been classified as "), i("u", [e._v("inappropriate")]), e._v(". ")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study1.jpg"
                    }
                })]), i("p", {
                    staticClass: "highlight2"
                }, [e._v("Note: In the comments and the discussion forum you’ll see in the next steps, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("the bot is designed to be "), i("u", [e._v("lenient")])]), e._v(".")])])
            }],
            Ke = {
                name: "moderation-rule-12",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "rule"
                    })
                }
            },
            Ze = Ke,
            $e = (i("396d"), Object(T["a"])(Ze, Xe, He, !1, null, "6091e4f9", null));
        $e.options.__file = "ModerationRule12.vue";
        var et = $e.exports,
            tt = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            it = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])]), i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us moderate comments based on the above rules. ")]), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(" \"Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v(" “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v(" “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])]), i("h3", [e._v("How the moderation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of inappropriateness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as appropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as inappropriate by the bot when it is really not ("false positives")')]), i("li", [e._v('Comment classified as appropriate by the bot when in reality the comment is NOT appropriate ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", [e._v("A bot can be made “strict” or “lenient” in its assessment by tweaking the cutoff point. Referring to the table below, if the bot were designed to be more "), i("u", [e._v("lenient")]), e._v(", "), i("u", [e._v("comment-3")]), e._v(" would have been classified as "), i("u", [e._v("appropriate")]), e._v(". ")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study1.jpg"
                    }
                })]), i("p", {
                    staticClass: "highlight2"
                }, [e._v("Note: In the comments and the discussion forum you’ll see in the next steps, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("the bot is designed to be "), i("u", [e._v("strict")])]), e._v(".")])])
            }],
            nt = {
                name: "study-12",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "rule"
                    })
                }
            },
            st = nt,
            at = (i("0635"), Object(T["a"])(st, tt, it, !1, null, "039917b8", null));
        at.options.__file = "ModerationRule13.vue";
        var ot = at.exports,
            rt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), e._m(0), e._m(1), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), e._m(2), e._m(3), e._m(4), e._m(5), i("form", [i("label", {
                    staticClass: "highlight"
                }, [e._v("Your task:")]), i("p", [e._v("Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 assessed as not appropriate whereas comments 2 and 4 are appropriate? Did the bot make any mistakes?")]), i("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    model: {
                        value: e.explanation,
                        callback: function(t) {
                            e.explanation = t
                        },
                        expression: "explanation"
                    }
                }), !1 === e.isFinished ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e()], 1)])
            },
            ct = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us moderate comments based on the above rules. ")])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(" \"Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v(" “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v(" “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }],
            lt = {
                name: "moderation-rule-14",
                data: function() {
                    return {
                        explanation: "",
                        minLength: 280
                    }
                },
                computed: {
                    isFinished: function() {
                        return this.explanation.length >= this.minLength
                    },
                    remainingLength: function() {
                        return this.minLength - this.explanation.length
                    }
                },
                watch: {
                    isFinished: function(e) {
                        e ? re.emit("step-finished", {
                            type: "rule",
                            input: this.explanation
                        }) : re.emit("step-unfinished")
                    }
                }
            },
            ht = lt,
            mt = (i("25d2"), Object(T["a"])(ht, rt, ct, !1, null, "e54a6cb2", null));
        mt.options.__file = "ModerationRule14.vue";
        var ut = mt.exports,
            dt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), e._m(0), e._m(1), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), e._m(2), e._m(3), e._m(4), e._m(5), i("form", [i("label", {
                    staticClass: "highlight"
                }, [e._v("Your task:")]), i("p", [e._v("Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 assessed as not appropriate whereas comments 2 and 4 are appropriate? Did the bot make any mistakes?")]), i("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    model: {
                        value: e.explanation,
                        callback: function(t) {
                            e.explanation = t
                        },
                        expression: "explanation"
                    }
                }), !1 === e.isFinished ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e()], 1)])
            },
            pt = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us moderate comments based on the above rules. ")])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(" \"Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v(" “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v(" “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }],
            ft = {
                name: "study-12",
                data: function() {
                    return {
                        explanation: "",
                        minLength: 280
                    }
                },
                computed: {
                    isFinished: function() {
                        return this.explanation.length >= this.minLength
                    },
                    remainingLength: function() {
                        return this.minLength - this.explanation.length
                    }
                },
                watch: {
                    isFinished: function(e) {
                        e ? re.emit("step-finished", {
                            type: "rule",
                            input: this.explanation
                        }) : re.emit("step-unfinished")
                    }
                }
            },
            vt = ft,
            gt = (i("2be3"), Object(T["a"])(vt, dt, pt, !1, null, "6185bfa0", null));
        gt.options.__file = "ModerationRule15.vue";
        var bt = gt.exports,
            _t = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Please Note")]), e._m(0), e._m(1), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of insightfulness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), e._m(2), e._m(3), e._m(4), e._m(5), i("form", [i("label", {
                    staticClass: "highlight"
                }, [e._v("Your task:")]), i("p", [e._v("Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 are recommended by the bot whereas comments 2 and 4 are not recommended?")]), i("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    model: {
                        value: e.explanation,
                        callback: function(t) {
                            e.explanation = t
                        },
                        expression: "explanation"
                    }
                }), !1 === e.isFinished ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e()], 1)])
            },
            yt = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("ul", [i("li", [e._v("Commenters in this forum are instructed to be civil in addressing and referencing other commenters and stay focused on the subject at hand.")]), i("li", [e._v("Comments represent a range of views and are judged the most interesting or thoughtful.")]), i("li", [e._v("In some cases, comments may be specifically highlighted to showcase commentary from a particular region, or readers with first-hand knowledge of an issue.")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us select particularly insightful comments for recommendation. ")])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(' "I recognize there is changes in our climate and feel that we need to do what we can to prevent any further decline. I try to do all that is in my power to change my effect on the climate change. I support what I can to encourage companies to change their effects on our environment.”'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Recommended by the bot")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Climate changes naturally. It\'s a natural phenomenon."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Not selected for recommendation by the bot")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v("  “It's the best it makes me warm when it should be cold. Thanks, global warming.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Recommended by the bot")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v("   “They are blatantly ignoring a fact that 98% of scientists agree are real. It is okay to have your own opinion about how we should deal with climate change, but no action at all is selfish because we are destroying the world for future generations.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Not selected for recommendation by the bot")])])
            }],
            wt = {
                name: "moderation-rule-21",
                data: function() {
                    return {
                        explanation: "",
                        minLength: 280
                    }
                },
                computed: {
                    isFinished: function() {
                        return this.explanation.length >= this.minLength
                    },
                    remainingLength: function() {
                        return this.minLength - this.explanation.length
                    }
                },
                watch: {
                    isFinished: function(e) {
                        e ? re.emit("step-finished", {
                            type: "rule",
                            input: this.explanation
                        }) : re.emit("step-unfinished")
                    }
                }
            },
            At = wt,
            Ct = (i("6139"), Object(T["a"])(At, _t, yt, !1, null, "5933f357", null));
        Ct.options.__file = "ModerationRule21.vue";
        var kt = Ct.exports,
            xt = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Commenting Rules")]), i("p", [e._v("Commentators in this forum are instructed to observe the following rules:")]), e._m(0), e._m(1), i("p", {
                    staticClass: "highlight"
                }, [e._v("For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:")]), e._m(2), e._m(3), e._m(4), e._m(5), i("form", [i("label", {
                    staticClass: "highlight"
                }, [e._v("Your task:")]), i("p", [e._v("Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 assessed as not appropriate whereas comments 2 and 4 are appropriate?")]), i("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    model: {
                        value: e.explanation,
                        callback: function(t) {
                            e.explanation = t
                        },
                        expression: "explanation"
                    }
                }), !1 === e.isFinished ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e()], 1)])
            },
            Rt = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("ul", [i("li", [e._v("Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.")]), i("li", [e._v("Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.")]), i("li", [e._v("Stalking or harassing another person and any form of discouraging participation by others are forbidden.")]), i("li", [e._v("Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. ")]), i("li", [e._v("The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("An artificial-intelligence-based software (ie. "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a bot")]), e._v(") is used to help us moderate comments based on the above rules. ")])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 1:")]), e._v(" \"Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 2:")]), e._v(' "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."'), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 3:")]), e._v("  “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Not Appropriate")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("Comment - 4:")]), e._v("  “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”"), i("br"), i("span", {
                    staticClass: "highlight"
                }, [e._v("Bot assessment: Appropriate")])])
            }],
            Dt = {
                name: "moderation-rule-22",
                data: function() {
                    return {
                        explanation: "",
                        minLength: 280
                    }
                },
                computed: {
                    isFinished: function() {
                        return this.explanation.length >= this.minLength
                    },
                    remainingLength: function() {
                        return this.minLength - this.explanation.length
                    }
                },
                watch: {
                    isFinished: function(e) {
                        e ? re.emit("step-finished", {
                            type: "rule",
                            input: this.explanation
                        }) : re.emit("step-unfinished")
                    }
                }
            },
            Bt = Dt,
            Et = (i("97a1"), Object(T["a"])(Bt, xt, Rt, !1, null, "362bdc49", null));
        Et.options.__file = "ModerationRule22.vue";
        var St = Et.exports,
            Mt = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            jt = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("How the moderation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of inappropriateness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as appropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as inappropriate by the bot when it is really not ("false positives")')]), i("li", [e._v('Comment classified as appropriate by the bot when in reality the comment is NOT appropriate ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", [e._v("A bot can be made “strict” or “lenient” in its assessment by tweaking the cutoff point. Referring to the table below, if the bot were designed to be more "), i("u", [e._v("strict")]), e._v(", "), i("u", [e._v("comment-4")]), e._v(" would have been classified as "), i("u", [e._v("inappropriate")]), e._v(". ")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study1.jpg"
                    }
                })]), i("p", {
                    staticClass: "highlight2"
                }, [e._v("Note: In the comments and the discussion forum you’ll see in the next steps, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("the bot is designed to be "), i("u", [e._v("lenient")])]), e._v(".")])])
            }],
            It = {
                name: "box-explanation-14",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "bot-explanation"
                    })
                }
            },
            Tt = It,
            Ot = (i("769d"), Object(T["a"])(Tt, Mt, jt, !1, null, "6ff0da3e", null));
        Ot.options.__file = "BotExplanation14.vue";
        var Lt = Ot.exports,
            Nt = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Ut = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("How the moderation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of inappropriateness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as appropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as inappropriate by the bot when it is really not ("false positives")')]), i("li", [e._v('Comment classified as appropriate by the bot when in reality the comment is NOT appropriate ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", [e._v("A bot can be made “strict” or “lenient” in its assessment by tweaking the cutoff point. Referring to the table below, if the bot were designed to be more "), i("u", [e._v("lenient")]), e._v(", "), i("u", [e._v("comment-3")]), e._v(" would have been classified as "), i("u", [e._v("appropriate")]), e._v(". ")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study1.jpg"
                    }
                })]), i("p", {
                    staticClass: "highlight2"
                }, [e._v("Note: In the comments and the discussion forum you’ll see in the next steps, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("the bot is designed to be "), i("u", [e._v("strict")])]), e._v(".")])])
            }],
            Ft = {
                name: "box-explanation-15",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "bot-explanation"
                    })
                }
            },
            Pt = Ft,
            zt = (i("ecf1"), Object(T["a"])(Pt, Nt, Ut, !1, null, "eec85ed4", null));
        zt.options.__file = "BotExplanation15.vue";
        var Gt = zt.exports,
            Qt = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Vt = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("How the recommendation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of insightfulness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as insightful or not. For example, all comments with a probability score of higher than 0.5 can be classified as insightful.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as not insightful by the bot when it really is insightful ("false positives")')]), i("li", [e._v('Comment classified as insightful by the bot when in reality the comment is not ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study2-1.jpg"
                    }
                })])])
            }],
            Yt = {
                name: "box-explanation-21",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "bot-explanation"
                    })
                }
            },
            Jt = Yt,
            qt = (i("ebdb"), Object(T["a"])(Jt, Qt, Vt, !1, null, "0f7a550c", null));
        qt.options.__file = "BotExplanation21.vue";
        var Wt = qt.exports,
            Xt = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Ht = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("How the moderation bot works:")]), i("p", [e._v("Using natural language processing techniques, the bot assesses the words used in a comment and derives a "), i("span", {
                    staticClass: "highlight"
                }, [e._v("probability")]), e._v(" of inappropriateness score for each comment. ")]), i("p", [e._v("Then, "), i("span", {
                    staticClass: "highlight"
                }, [e._v("a cutoff on the probability score (0 to 1)")]), e._v(" is determined to classify each comment as appropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.")]), i("p", [i("span", {
                    staticClass: "highlight"
                }, [e._v("The cutoff that is used by the bot can lead to classification errors,")]), e._v(" such as:")]), i("ul", [i("li", [e._v('Comment classified as inappropriate by the bot when it really is not ("false positives")')]), i("li", [e._v('Comment classified as appropriate by the bot when in reality the comment is NOT approporiate ("false negatives")')])]), i("p", {
                    staticClass: "highlight"
                }, [e._v("Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).")]), i("p", {
                    staticClass: "center"
                }, [i("img", {
                    attrs: {
                        src: "static/study2-2.jpg"
                    }
                })])])
            }],
            Kt = {
                name: "box-explanation-22",
                mounted: function() {
                    re.emit("step-finished", {
                        type: "bot-explanation"
                    })
                }
            },
            Zt = Kt,
            $t = (i("5c90"), Object(T["a"])(Zt, Xt, Ht, !1, null, "11ee8cee", null));
        $t.options.__file = "BotExplanation22.vue";
        var ei = $t.exports,
            ti = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Please help review user comments (" + e._s(e.current + 1) + "/" + e._s(e.count) + ")")]), i("p", [e._v(e._s(e.content))]), i("hr"), void 0 !== e.bot ? i("div", {
                    staticClass: "highlight assessment"
                }, [i("span", [e._v(e._s(e.bot))]), i("div", {
                    staticClass: "attitude-container"
                }, [i("span", [e._v("Do you agree with bot? ")]), i("el-button-group", [i("el-button", {
                    attrs: {
                        type: "warning",
                        plain: !0 !== e.attitude
                    },
                    on: {
                        click: function(t) {
                            e.attitude = !0
                        }
                    }
                }, [e._v("Yes")]), i("el-button", {
                    attrs: {
                        type: "warning",
                        plain: !1 !== e.attitude
                    },
                    on: {
                        click: function(t) {
                            e.attitude = !1
                        }
                    }
                }, [e._v("No")])], 1)], 1)]) : e._e(), 1 === e.study && 1 === e.condition ? i("div", {
                    staticClass: "highlight assessment"
                }, [i("div", {
                    staticClass: "attitude-container"
                }, [i("span", [e._v("Do you agree that this comment can be published? ")]), i("el-button-group", [i("el-button", {
                    attrs: {
                        type: "warning",
                        plain: !0 !== e.attitude
                    },
                    on: {
                        click: function(t) {
                            e.attitude = !0
                        }
                    }
                }, [e._v("Yes")]), i("el-button", {
                    attrs: {
                        type: "warning",
                        plain: !1 !== e.attitude
                    },
                    on: {
                        click: function(t) {
                            e.attitude = !1
                        }
                    }
                }, [e._v("No")])], 1)], 1)]) : e._e(), i("div", {
                    staticClass: "rating"
                }, [i("p", {
                    staticClass: "rating-label"
                }, [e._v("Please rate the overall quality of the comment:")]), i("div", {
                    staticClass: "rate-container"
                }, [i("label", [e._v("Quality")]), i("el-rate", {
                    staticClass: "rate",
                    on: {
                        change: e.onRatingChange
                    },
                    model: {
                        value: e.rating,
                        callback: function(t) {
                            e.rating = t
                        },
                        expression: "rating"
                    }
                })], 1)])])
            },
            ii = [],
            ni = {
                name: "peer-review",
                props: ["count", "current", "content", "bot"],
                data: function() {
                    return {
                        attitude: void 0,
                        rating: null,
                        ratingTouched: !1,
                        study: ce.study,
                        condition: ce.condition
                    }
                },
                computed: {
                    isFinished: function() {
                        return this.ratingTouched && void 0 !== this.attitude
                    }
                },
                watch: {
                    isFinished: function(e) {
                        if (e) {
                            var t = {
                                index: this.current,
                                content: this.content,
                                rating: this.rating
                            };
                            this.bot && (t.bot = this.bot), this.attitude && (t.attitude = this.attitude), re.emit("step-finished", {
                                type: "peer-review",
                                input: t
                            })
                        } else re.emit("step-unfinished")
                    }
                },
                methods: {
                    onRatingChange: function() {
                        this.ratingTouched = !0
                    }
                }
            },
            si = ni,
            ai = (i("db3c"), Object(T["a"])(si, ti, ii, !1, null, "2afec923", null));
        ai.options.__file = "PeerReview.vue";
        var oi = ai.exports,
            ri = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("h1", [e._v("Please resubmit your comment")]), i("p", [e._v("This is a draft of your comment that you summarized before:")]), i("p", {
                    staticClass: "original-comment"
                }, [e._v(e._s(e.originalComment))]), i("p", [e._v(e._s(e.instruction))]), i("label", {
                    staticClass: "username"
                }, [e._v(e._s(e.username))]), i("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4,
                        placeholder: "Please finalize your comment on marijuana legalization: "
                    },
                    on: {
                        paste: e.handlePaste
                    },
                    model: {
                        value: e.comment,
                        callback: function(t) {
                            e.comment = t
                        },
                        expression: "comment"
                    }
                }), !1 === e.isEnough ? i("p", {
                    staticClass: "error"
                }, [e._v("Min length is " + e._s(e.minLength) + " characters, " + e._s(e.remainingLength) + " remaining.")]) : e._e(), 1 === e.study ? i("p", [e._v("*Please note that your comment will not be shown immediately after your submission, because it will await moderation from your peers (Like what you just did!). ")]) : e._e(), i("hr"), i("div", {
                    staticClass: "rating"
                }, [i("p", {
                    staticClass: "rating-label"
                }, [e._v("Please rate the overall quality of your comment that you are submitting for publication:")]), i("div", {
                    staticClass: "rate-container"
                }, [i("label", [e._v("Quality")]), i("el-rate", {
                    staticClass: "rate",
                    on: {
                        change: e.onRatingChange
                    },
                    model: {
                        value: e.rating,
                        callback: function(t) {
                            e.rating = t
                        },
                        expression: "rating"
                    }
                })], 1)])], 1)
            },
            ci = [],
            li = {
                name: "own-comment",
                data: function() {
                    return {
                        comment: "",
                        rating: null,
                        ratingTouched: !1,
                        username: ce.user.nickname,
                        minLength: 280,
                        originalComment: ce.comment,
                        study: ce.study,
                        condition: ce.condition
                    }
                },
                computed: {
                    isEnough: function() {
                        return this.comment.length >= this.minLength
                    },
                    isFinished: function() {
                        return this.ratingTouched && this.isEnough
                    },
                    remainingLength: function() {
                        return this.minLength - this.comment.length
                    },
                    instruction: function() {
                        return 1 === this.study ? 1 === this.condition ? "Considering the commenting rules of the forum, please finalize your comment and enter it again below for publication:" : "Considering the commenting rules of the forum and your review of five other comments from other users, please finalize your comment and enter it again below for publication: " : 1 === this.condition ? "Considering the commenting rules of the forum and the bot's process for recommendation, please finalize your comment and enter it again below for publication:" : "Considering the commenting rules of the forum and the bot's process for moderation, please finalize your comment and enter it again below for publication:"
                    }
                },
                watch: {
                    isFinished: function(e) {
                        e ? (ce.finalComment = this.comment, re.emit("step-finished", {
                            type: "resubmit-comment",
                            input: {
                                comment: this.comment,
                                rating: this.rating
                            }
                        })) : re.emit("step-unfinished")
                    }
                },
                methods: {
                    onRatingChange: function() {
                        this.ratingTouched = !0
                    },
                    handlePaste: function() {
                        return !1
                    }
                }
            },
            hi = li,
            mi = (i("b750"), Object(T["a"])(hi, ri, ci, !1, null, "a8fe1804", null));
        mi.options.__file = "OwnComment.vue";
        var ui = mi.exports,
            di = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("article", [i("p", [e._v("Thank you! You are now going to enter the discussion forum.")]), 1 === e.study ? i("p", [e._v("Please note that your comment will not be shown in the forum yet as it is awaiting moderation by other users. ")]) : e._e(), i("p", [e._v("Meanwhile, please interact with other users of the forum by:")]), i("ul", [i("li", [e._v("replying to other users")]), i("li", [e._v("voting thumbs up or thumbs down for posts by other users")]), 1 === e.study ? [i("li", [e._v("report any inappropriate comments in the forum that may have been missed by other moderators")])] : e._e(), 2 === e.study ? [i("li", [e._v("interact with the bot " + e._s(1 === e.condition ? "recommendation" : "moderation") + " results")]), i("li", [e._v("report any potential " + e._s(1 === e.condition ? "insightful" : "inappropriate") + " comments that are missed by the bot")])] : e._e()], 2)])
            },
            pi = [],
            fi = {
                name: "done",
                data: function() {
                    return {
                        study: ce.study,
                        condition: ce.condition
                    }
                },
                mounted: function() {
                    re.emit("step-finished", {
                        type: "done"
                    })
                }
            },
            vi = fi,
            gi = (i("e13e"), Object(T["a"])(vi, di, pi, !1, null, "804fc09c", null));
        gi.options.__file = "Done.vue";
        var bi = gi.exports,
            _i = {
                name: "study-dialog",
                components: {
                    Introduction: Ge,
                    ModerationRule11: We,
                    ModerationRule12: et,
                    ModerationRule13: ot,
                    ModerationRule14: ut,
                    ModerationRule15: bt,
                    ModerationRule21: kt,
                    ModerationRule22: St,
                    BotExplanation14: Lt,
                    BotExplanation15: Gt,
                    BotExplanation21: Wt,
                    BotExplanation22: ei,
                    PeerReview: oi,
                    OwnComment: ui,
                    Done: bi
                },
                props: ["visible"],
                data: function() {
                    return {
                        study: ce.study,
                        condition: ce.condition,
                        step: 1 === ce.study ? "introduction" : "rule",
                        peerReviews: xe(),
                        peerReviewCurrent: 0,
                        isProcessing: !1,
                        canProceed: !1,
                        stepsData: [{
                            type: "comment",
                            input: ce.comment,
                            date: (new Date).getTime()
                        }],
                        lastStepData: void 0
                    }
                },
                computed: {
                    peerReviewCount: function() {
                        return this.peerReviews.length
                    },
                    peerReviewContent: function() {
                        return 1 === this.study && this.peerReviews[this.peerReviewCurrent].content
                    },
                    peerReviewBot: function() {
                        return 1 === this.study && this.peerReviews[this.peerReviewCurrent].bot
                    }
                },
                mounted: function() {
                    var e = this;
                    re.on("step-finished", function(t) {
                        e.lastStepData = t, e.canProceed = !0
                    }), re.on("step-unfinished", function() {
                        e.lastStepData = void 0, e.canProceed = !1
                    })
                },
                methods: {
                    next: function() {
                        this.isProcessing || (this.isProcessing = !0, this.canProceed = !1, this.stepsData.push(Object(K["a"])({}, this.lastStepData, {
                            date: (new Date).getTime()
                        })), this.updateStep(), this.isProcessing = !1)
                    },
                    updateStep: function() {
                        var e = this.step,
                            t = this.study,
                            i = this.condition,
                            n = this.peerReviewCurrent,
                            s = this.peerReviewCount;
                        if ("introduction" !== e) {
                            if ("rule" === e) return 1 === t && i > 3 || 2 === t ? void(this.step = "explanation") : void(this.step = "peer-review");
                            if ("explanation" === e) return 2 === t ? void(this.step = "resubmit-comment") : void(this.step = "peer-review");
                            if ("peer-review" === e) return n < s - 1 ? void(this.peerReviewCurrent += 1) : void(this.step = "resubmit-comment");
                            if ("resubmit-comment" !== e) return "done" === e ? (D.a.database().ref("".concat(ce.user.id, "/actions")).set(this.stepsData), void re.emit("done")) : void 0;
                            this.step = "done"
                        } else this.step = "rule"
                    }
                }
            },
            yi = _i,
            wi = (i("bf5e"), Object(T["a"])(yi, Oe, Le, !1, null, "30a0f317", null));
        wi.options.__file = "Dialog.vue";
        var Ai = wi.exports,
            Ci = {
                name: "app",
                components: {
                    Slides: L,
                    Login: G,
                    NewsArticle: W,
                    Comments: Te,
                    Dialog: Ai
                },
                data: function() {
                    return {
                        isSlidesRead: !0,
                        isUserinfoSet: !1,
                        user: {
                            nickname: "chengkang",
                            password: "123456",
                            id: void 0
                        },
                        savedData: {},
                        shouldShowDialog: !1
                    }
                },
                mounted: function() {
                    var e = this;
                    re.on("click-on-post", function() {
                        e.shouldShowDialog = !0
                    }), re.on("done", function() {
                        e.shouldShowDialog = !1, re.emit("show-comments")
                    })
                },
                methods: {
                    markSlidesRead: function() {
                        this.isSlidesRead = !0
                    },
                    setUserinfo: function(e, t) {
                        var i = this,
                            n = btoa("".concat(e, "-").concat(t));
                        this.user = {
                            nickname: e,
                            password: t,
                            id: n
                        }, ce.user = {
                            nickname: e,
                            password: t,
                            id: n
                        }, D.a.database().ref("".concat(n, "/case")).set({
                            study: ce.study,
                            condition: ce.name
                        }).then(function() {
                            D.a.database().ref(n).once("value").then(function(e) {
                                var t = e.val() || {};
                                i.savedData = t, i.isUserinfoSet = !0
                            })
                        }), window.FS.identify(n, {
                            displayName: e,
                            password: t
                        })
                    }
                }
            },
            ki = Ci,
            xi = (i("d841"), Object(T["a"])(ki, B, E, !1, null, "39b6dd7c", null));
        xi.options.__file = "App.vue";
        var Ri = xi.exports;
        x["default"].config.productionTip = !1, x["default"].use(k.a), x["default"].use(A.a), x["default"].use(y.a), x["default"].use(b.a), x["default"].use(v.a), x["default"].use(p.a), x["default"].use(u.a), x["default"].use(h.a), x["default"].use(c.a), x["default"].use(o.a), x["default"].use(s.a), D.a.initializeApp({
            apiKey: "AIzaSyCSGV8SL8f15gYwwBuK2t6k2yJ0ke80qUQ",
            authDomain: "march-version.firebaseapp.com",
            databaseURL: "https://march-version.firebaseio.com",
            projectId: "march-version",
            storageBucket: "march-version.appspot.com",
            messagingSenderId: "58729237152"
        }), we().then(function(e) {
            var t = e.study,
                i = e.condition,
                n = e.name;
            ce.initialize({
                study: t,
                condition: i,
                name: n
            }), new x["default"]({
                render: function(e) {
                    return e(Ri)
                }
            }).$mount("#app")
        })
    },
    "5a25": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAdiAAAHYgE4epnbAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAALRQTFRF/////wAA/wAAv0BAxDsnxjkrwj0pvzcu2zcuvzgo3zgwwTgshRsbvzorvzsspCYiQ0pgyzcswTspvjoqvzorwTsstTAkQkpgwDorvzosQUlh3TYtwDormj5DQUpgvzor1DMrwDkrsjs8wTorvDo5wTorwDor3TYuvzgqwDoswTorwDortCsjwDorwDgqwDorwDorsyojsikjwDorrioisCchty0luSwmuiomvjgqwDor3TUuy5VyqQAAADR0Uk5TAAECBA0SGRwcICApMDA0Q0VFSk9YY2RocoCBmJqdqKirtrfAwszg4OPk5ebn7fHy9/r7+7CSEMUAAACcSURBVDjL7dNXDsJADEVRQ+i99w5J6IGBDDDsf18UIcUmkc0CuN/ny3oG6FWAb9SWwMwNykSBxT0oJ4FqkZb+BitDOpUE0AUe2BYPDnngQQd4MI/xwMsCD5rAAy8hADOQgKlFgTUCm+QHDPuvJteL1nqP7zAmgymc/Wc3cuoGBmU/DHYpBOLHMDBTvMnWVim1dGj1n0b7B++E938ATDVlmMbh7+gAAAAASUVORK5CYII="
    },
    "5c90": function(e, t, i) {
        "use strict";
        var n = i("d3a3"),
            s = i.n(n);
        s.a
    },
    6139: function(e, t, i) {
        "use strict";
        var n = i("407c"),
            s = i.n(n);
        s.a
    },
    6461: function(e, t, i) {},
    "68ba": function(e, t, i) {},
    "6be3": function(e, t, i) {},
    "6da7": function(e, t, i) {},
    "769d": function(e, t, i) {
        "use strict";
        var n = i("6be3"),
            s = i.n(n);
        s.a
    },
    8554: function(e, t, i) {
        e.exports = i.p + "img/1.93ef8035.jpg"
    },
    "8b1b": function(e, t, i) {},
    "8b96": function(e, t, i) {},
    "8e44": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA6gAAAOoB+Ss1JgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK3SURBVFiFxZfBa1RXFMZ/332TTKyxaBZarIKiQ6aYl5lkRgy02Lpx4aYIjaXQTQV3duVCcOO+iIsGhLixCxfdCPoHqFmEgSZhTOKLTLQahGJLsSoYmjEz754utGJiqjPj1Pdt3oN3z/l+9973zj1PZkYryuWKgybLAXjcXDQ9OdFKHrUCEIbFXQTcQdzE8EDOYJx69VAURYvN5HJNuwOWchsALT7ZsO/m9NRA7PxOQZqga7TZXC0BrNatcvm+vPtGYri/v5h97wAAs7MT94C7XtqTCMBz6Q6yTxIE4G+g+/8H8PF24I+FhevVluLfFUDS52Zce1fzlgAkOeCgpKuJAPTlC6OID6zecbkdAA1XQkkuzA2eAX0tCz6bmfllYfWYMF/8Efj+DWk80jjeLlnceTGKSo80PDwczM8v7DYzrTK0np7uu2NjY3GYL3yFcdpgs8cdmJuemFsreyaTSae7N/3nZxh472Jn+4W+w2wxndIX2jtQmF3yhGsFrJPuVc2WzPgI7Gzt2bqRSmX86Rtm2JAyQ0Mfpqv1SZmuqC9XsJEtXezsWPk6/Bl7jv5exaST1JbONXvIvE19A4VjMh1NAaQEnVo5oAO9uNbP32izOYCL3W/m7ON2V8LGFfgexHIqMQBTFqgktwIiWQAzes0SAnhRzjMoIYAw3LsD6KqlktqCwLIYf81PTT1MBsAsi6hA+zuihuRRLyQIIJHFEgR4vgXWGMCyD3rb6d1XKOwGNteclRsCcNLxdgLIu2+B6Uq5/AAgBdjtZa9Fv7Izehz/e2dH+vPFG77e+VMUlR61apwdHNyaMh2R6ZS8vnwJNJQvXKzC4bWCNjpdeBjbPPADYEiTeN/836zTNoxdggfedCKamfz5JUAjPWEYDm0hqH0qlAH01oDXpMey+Nf167tKpVJp6dUn/wD3RgRjrSOGfwAAAABJRU5ErkJggg=="
    },
    "91d4": function(e, t, i) {
        "use strict";
        var n = i("b35d"),
            s = i.n(n);
        s.a
    },
    "93b1": function(e, t, i) {},
    "97a1": function(e, t, i) {
        "use strict";
        var n = i("3d03"),
            s = i.n(n);
        s.a
    },
    ab28: function(e, t, i) {},
    ae5c: function(e, t, i) {},
    b35d: function(e, t, i) {},
    b610: function(e, t, i) {},
    b644: function(e, t, i) {},
    b750: function(e, t, i) {
        "use strict";
        var n = i("20d8"),
            s = i.n(n);
        s.a
    },
    bf5e: function(e, t, i) {
        "use strict";
        var n = i("ef1c"),
            s = i.n(n);
        s.a
    },
    d3a3: function(e, t, i) {},
    d7d7: function(e, t, i) {},
    d841: function(e, t, i) {
        "use strict";
        var n = i("93b1"),
            s = i.n(n);
        s.a
    },
    db3c: function(e, t, i) {
        "use strict";
        var n = i("68ba"),
            s = i.n(n);
        s.a
    },
    dd8b: function(e, t, i) {
        "use strict";
        var n = i("e79d"),
            s = i.n(n);
        s.a
    },
    e0da: function(e, t, i) {
        "use strict";
        var n = i("ab28"),
            s = i.n(n);
        s.a
    },
    e13e: function(e, t, i) {
        "use strict";
        var n = i("6461"),
            s = i.n(n);
        s.a
    },
    e79d: function(e, t, i) {},
    e85c: function(e, t, i) {},
    ebdb: function(e, t, i) {
        "use strict";
        var n = i("ae5c"),
            s = i.n(n);
        s.a
    },
    ecf1: function(e, t, i) {
        "use strict";
        var n = i("ffbb"),
            s = i.n(n);
        s.a
    },
    ef1c: function(e, t, i) {},
    f5cc: function(e, t, i) {
        "use strict";
        var n = i("d7d7"),
            s = i.n(n);
        s.a
    },
    fcd3: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/gD+AP7rGNSCAAAACXBIWXMAAADpAAAA6QFUkhRLAAAACXZwQWcAAAAgAAAAIACH+pydAAACCElEQVRYw+XXzUuUURTH8c8dRTMzwqSipKg0dFW4DaKXP6CCCFq2qV2bVr1AuwgXEtGuRS2CpP4AoZ2boFoEkTRDSkFoEGVBUTbqnBYzBpOazmQ9C39weJ6H5557vudw7+XcFBGWUkppM/ajG2lJh/n6hFE8iojvVXM3tKy7WypOHV/Iq6mt/faPz+8L6EfgaeVZqzqxGxM4HxGDvwBQ6jp1KbV0dFZ5FL98VLhzGYq4gDsRMVlH8LkqbsXJSjJHI2IIGpHatvdq3banymFq8t3c6/2IGKg38JwiYgLXU0obcBVDkFuG782/Df6b7mJfpSLLAiisZPSIGMV79C0X4F8oj55VDVDIGiDzCuSxMaXUkRXAG0yhJxOAiCjhVWYAFRWyBsiveoBJNOWgNDOtNF2sspgpzg08k1Ja9w8AOjGusbn1uXKTMc9yzS1jeIEPuIi2iPC3hvXKi7A/oQFd5rdagTHM4gSuYBMORcTIQimllJrR+4escziA0/iKg7VQ5zCAcexcZMyNxapZsVkM4xzaI0I95bul3GC2L/BvENdqma+eXXAW33BsJVZizQCVY/QhjmQCUNEwDmcJ8BZbUkprsgJYTGuVt1dmAN14mQlASmmX8vVrpBa/FQFIKe3APTyIiPz/APiifLI9Tik9w2v8UD4jaoNfzvV8kaz7sLfyORIRT+qZ5ydtkFri5GVH3wAAACV0RVh0Y3JlYXRlLWRhdGUAMjAxOC0wNi0xNlQxMDo0Mjo1MyswMDowMLnBnY4AAAAldEVYdG1vZGlmeS1kYXRlADIwMTgtMDYtMTZUMTA6NDI6NTMrMDA6MDDmcOu6AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
    },
    ffbb: function(e, t, i) {}
});
//# sourceMappingURL=app.91f630cc.js.map
