!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports._vantaEffect = t())
    : (e._vantaEffect = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function i(o) {
      if (t[o]) return t[o].exports;
      var n = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function (e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (i.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            i.d(
              o,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return o;
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 9))
    );
  })([
    function (e, t, i) {
      "use strict";
      function o(e, t) {
        for (let i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e;
      }
      function n() {
        return "undefined" != typeof navigator
          ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) || window.innerWidth < 600
          : null;
      }
      i.d(t, "c", function () {
        return o;
      }),
        i.d(t, "e", function () {
          return n;
        }),
        i.d(t, "i", function () {
          return s;
        }),
        i.d(t, "h", function () {
          return r;
        }),
        i.d(t, "g", function () {
          return h;
        }),
        i.d(t, "f", function () {
          return a;
        }),
        i.d(t, "a", function () {
          return u;
        }),
        i.d(t, "b", function () {
          return l;
        }),
        i.d(t, "d", function () {
          return c;
        }),
        (Number.prototype.clamp = function (e, t) {
          return Math.min(Math.max(this, e), t);
        });
      const s = (e) => e[Math.floor(Math.random() * e.length)];
      function r(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          e + Math.random() * (t - e)
        );
      }
      function h(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          Math.floor(e + Math.random() * (t - e + 1))
        );
      }
      const a = (e) => document.querySelector(e),
        u = (e) =>
          "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
        l = (e, t = 1) => {
          const i = u(e),
            o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
            n = o
              ? {
                  r: parseInt(o[1], 16),
                  g: parseInt(o[2], 16),
                  b: parseInt(o[3], 16),
                }
              : null;
          return "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")";
        },
        c = (e) => 0.299 * e.r + 0.587 * e.g + 0.114 * e.b;
    },
    function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r;
      });
      var o = i(0);
      const n = "object" == typeof window;
      let s = (n && window.THREE) || {};
      n && !window.VANTA && (window.VANTA = {});
      const r = (n && window.VANTA) || {};
      (r.register = (e, t) => (r[e] = (e) => new t(e))), (r.version = "0.5.15");
      const h = function () {
        return (
          Array.prototype.unshift.call(arguments, "[VANTA]"),
          console.error.apply(this, arguments)
        );
      };
      (r.VantaBase = class {
        constructor(e = {}) {
          if (!n) return !1;
          (r.current = this),
            (this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(
              this
            )),
            (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
            (this.resize = this.resize.bind(this)),
            (this.animationLoop = this.animationLoop.bind(this)),
            (this.restart = this.restart.bind(this));
          const t =
            "function" == typeof this.getDefaultOptions
              ? this.getDefaultOptions()
              : this.defaultOptions;
          if (
            ((this.options = Object(o.c)(
              {
                mouseControls: !0,
                touchControls: !0,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
              },
              t
            )),
            (e instanceof HTMLElement || "string" == typeof e) &&
              (e = { el: e }),
            Object(o.c)(this.options, e),
            this.options.THREE && (s = this.options.THREE),
            (this.el = this.options.el),
            null == this.el)
          )
            h('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const e = this.el;
            if (((this.el = Object(o.f)(e)), !this.el))
              return void h("Cannot find element", e);
          }
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (e) {
            return (
              h("Init error", e),
              this.renderer &&
                this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              void (
                this.options.backgroundColor &&
                (console.log("[VANTA] Falling back to backgroundColor"),
                (this.el.style.background = Object(o.a)(
                  this.options.backgroundColor
                )))
              )
            );
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const i = window.addEventListener;
          i("resize", this.resize),
            window.requestAnimationFrame(this.resize),
            this.options.mouseControls &&
              (i("scroll", this.windowMouseMoveWrapper),
              i("mousemove", this.windowMouseMoveWrapper)),
            this.options.touchControls &&
              (i("touchstart", this.windowTouchWrapper),
              i("touchmove", this.windowTouchWrapper));
        }
        setOptions(e = {}) {
          Object(o.c)(this.options, e);
        }
        prepareEl() {
          let e, t;
          if ("undefined" != typeof Node && Node.TEXT_NODE)
            for (e = 0; e < this.el.childNodes.length; e++) {
              const t = this.el.childNodes[e];
              if (t.nodeType === Node.TEXT_NODE) {
                const e = document.createElement("span");
                (e.textContent = t.textContent),
                  t.parentElement.insertBefore(e, t),
                  t.remove();
              }
            }
          for (e = 0; e < this.el.children.length; e++)
            (t = this.el.children[e]),
              "static" === getComputedStyle(t).position &&
                (t.style.position = "relative"),
              "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position &&
            (this.el.style.position = "relative");
        }
        applyCanvasStyles(e, t = {}) {
          Object(o.c)(e.style, {
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            background: "",
          }),
            Object(o.c)(e.style, t),
            e.classList.add("vanta-canvas");
        }
        initThree() {
          s.WebGLRenderer
            ? ((this.renderer = new s.WebGLRenderer({
                alpha: !0,
                antialias: !0,
              })),
              this.el.appendChild(this.renderer.domElement),
              this.applyCanvasStyles(this.renderer.domElement),
              isNaN(this.options.backgroundAlpha) &&
                (this.options.backgroundAlpha = 1),
              (this.scene = new s.Scene()))
            : console.warn("[VANTA] No THREE defined on window");
        }
        getCanvasElement() {
          return this.renderer
            ? this.renderer.domElement
            : this.p5renderer
            ? this.p5renderer.canvas
            : void 0;
        }
        windowMouseMoveWrapper(e) {
          const t = this.getCanvasElement();
          if (!t) return !1;
          const i = t.getBoundingClientRect(),
            o = e.clientX - i.left,
            n = e.clientY - i.top;
          o >= 0 &&
            n >= 0 &&
            o <= i.width &&
            n <= i.height &&
            ((this.mouseX = o),
            (this.mouseY = n),
            this.options.mouseEase || this.triggerMouseMove(o, n));
        }
        windowTouchWrapper(e) {
          if (1 === e.touches.length) {
            const t = this.getCanvasElement();
            if (!t) return !1;
            const i = t.getBoundingClientRect(),
              o = e.touches[0].clientX - i.left,
              n = e.touches[0].clientY - i.top;
            o >= 0 &&
              n >= 0 &&
              o <= i.width &&
              n <= i.height &&
              ((this.mouseX = o),
              (this.mouseY = n),
              this.options.mouseEase || this.triggerMouseMove(o, n));
          }
        }
        triggerMouseMove(e, t) {
          this.uniforms &&
            ((this.uniforms.iMouse.value.x = e / this.scale),
            (this.uniforms.iMouse.value.y = t / this.scale));
          const i = e / this.width,
            o = t / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i, o);
        }
        setSize() {
          this.scale || (this.scale = 1),
            Object(o.e)() && this.options.scaleMobile
              ? (this.scale = this.options.scaleMobile)
              : this.options.scale && (this.scale = this.options.scale),
            (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
            (this.height = Math.max(
              this.el.offsetHeight,
              this.options.minHeight
            ));
        }
        initMouse() {
          ((!this.mouseX && !this.mouseY) ||
            (this.mouseX === this.options.minWidth / 2 &&
              this.mouseY === this.options.minHeight / 2)) &&
            ((this.mouseX = this.width / 2),
            (this.mouseY = this.height / 2),
            this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(),
            this.camera &&
              ((this.camera.aspect = this.width / this.height),
              "function" == typeof this.camera.updateProjectionMatrix &&
                this.camera.updateProjectionMatrix()),
            this.renderer &&
              (this.renderer.setSize(this.width, this.height),
              this.renderer.setPixelRatio(
                window.devicePixelRatio / this.scale
              )),
            "function" == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const e = this.el.offsetHeight,
            t = this.el.getBoundingClientRect(),
            i =
              window.pageYOffset ||
              (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop,
            o = t.top + i;
          return o - window.innerHeight <= i && i <= o + e;
        }
        animationLoop() {
          return (
            this.t || (this.t = 0),
            (this.t += 1),
            this.t2 || (this.t2 = 0),
            (this.t2 += this.options.speed || 1),
            this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2),
            this.options.mouseEase &&
              ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
              (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
              Math.abs(this.mouseEaseX - this.mouseX) +
                Math.abs(this.mouseEaseY - this.mouseY) >
                0.1 &&
                ((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)),
                (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
                this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
            (this.isOnScreen() || this.options.forceAnimate) &&
              ("function" == typeof this.onUpdate && this.onUpdate(),
              this.scene &&
                this.camera &&
                (this.renderer.render(this.scene, this.camera),
                this.renderer.setClearColor(
                  this.options.backgroundColor,
                  this.options.backgroundAlpha
                )),
              this.fps && this.fps.update && this.fps.update(),
              "function" == typeof this.afterRender && this.afterRender()),
            (this.req = window.requestAnimationFrame(this.animationLoop))
          );
        }
        restart() {
          if (this.scene)
            for (; this.scene.children.length; )
              this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy();
          const e = window.removeEventListener;
          e("touchstart", this.windowTouchWrapper),
            e("touchmove", this.windowTouchWrapper),
            e("scroll", this.windowMouseMoveWrapper),
            e("mousemove", this.windowMouseMoveWrapper),
            e("resize", this.resize),
            window.cancelAnimationFrame(this.req),
            this.renderer &&
              (this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              (this.renderer = null),
              (this.scene = null));
        }
      }),
        (t.b = r.VantaBase);
    },
    function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return r;
      });
      var o = i(1),
        n = i(0);
      i.d(t, "a", function () {
        return o.a;
      });
      let s = "object" == typeof window && window.THREE;
      class r extends o.b {
        constructor(e) {
          ((s = e.THREE || s).Color.prototype.toVector = function () {
            return new s.Vector3(this.r, this.g, this.b);
          }),
            super(e),
            (this.updateUniforms = this.updateUniforms.bind(this));
        }
        init() {
          (this.mode = "shader"),
            (this.uniforms = {
              iTime: { type: "f", value: 1 },
              iResolution: { type: "v2", value: new s.Vector2(1, 1) },
              iDpr: { type: "f", value: window.devicePixelRatio || 1 },
              iMouse: {
                type: "v2",
                value: new s.Vector2(this.mouseX || 0, this.mouseY || 0),
              },
            }),
            super.init(),
            this.fragmentShader && this.initBasicShader();
        }
        setOptions(e) {
          super.setOptions(e), this.updateUniforms();
        }
        initBasicShader(e = this.fragmentShader, t = this.vertexShader) {
          t ||
            (t =
              "uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),
            this.updateUniforms(),
            "function" == typeof this.valuesChanger && this.valuesChanger();
          const i = new s.ShaderMaterial({
              uniforms: this.uniforms,
              vertexShader: t,
              fragmentShader: e,
            }),
            o = this.options.texturePath;
          o &&
            (this.uniforms.iTex = {
              type: "t",
              value: new s.TextureLoader().load(o),
            });
          const n = new s.Mesh(new s.PlaneGeometry(2, 2), i);
          this.scene.add(n),
            (this.camera = new s.Camera()),
            (this.camera.position.z = 1);
        }
        updateUniforms() {
          const e = {};
          let t, i;
          for (t in this.options)
            (i = this.options[t]),
              -1 !== t.toLowerCase().indexOf("color")
                ? (e[t] = { type: "v3", value: new s.Color(i).toVector() })
                : "number" == typeof i && (e[t] = { type: "f", value: i });
          return Object(n.c)(this.uniforms, e);
        }
        resize() {
          super.resize(),
            (this.uniforms.iResolution.value.x = this.width / this.scale),
            (this.uniforms.iResolution.value.y = this.height / this.scale);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, i) {
      "use strict";
      i.r(t);
      var o = i(2);
      class n extends o.b {}
      (t.default = o.a.register("FOG", n)),
        (n.prototype.defaultOptions = {
          highlightColor: 16761600,
          midtoneColor: 16719616,
          lowlightColor: 2949375,
          baseColor: 16772075,
          blurFactor: 0.6,
          speed: 1,
          zoom: 1,
          scale: 2,
          scaleMobile: 4,
        }),
        (n.prototype.fragmentShader =
          "uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\n\nuniform float blurFactor;\nuniform vec3 baseColor;\nuniform vec3 lowlightColor;\nuniform vec3 midtoneColor;\nuniform vec3 highlightColor;\nuniform float zoom;\n\nfloat random (in vec2 _st) {\n  return fract(sin(dot(_st.xy,\n                        vec2(12.9898,78.233)))*\n      43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 _st) {\n  vec2 i = floor(_st);\n  vec2 f = fract(_st);\n\n  // Four corners in 2D of a tile\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  return mix(a, b, u.x) +\n          (c - a)* u.y * (1.0 - u.x) +\n          (d - b) * u.x * u.y;\n}\n\n#define NUM_OCTAVES 6\n\nfloat fbm ( in vec2 _st) {\n  float v = 0.0;\n  float a = blurFactor;\n  vec2 shift = vec2(100.0);\n  // Rotate to reduce axial bias\n  mat2 rot = mat2(cos(0.5), sin(0.5),\n                  -sin(0.5), cos(0.50));\n  for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * noise(_st);\n      _st = rot * _st * 2.0 + shift;\n      a *= (1. - blurFactor);\n  }\n  return v;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / iResolution.xy*3.;\n  st.x *= 0.7 * iResolution.x / iResolution.y ; // Still keep it more landscape than square\n  st *= zoom;\n\n  // st += st * abs(sin(iTime*0.1)*3.0);\n  vec3 color = vec3(0.0);\n\n  vec2 q = vec2(0.);\n  q.x = fbm( st + 0.00*iTime);\n  q.y = fbm( st + vec2(1.0));\n\n  vec2 dir = vec2(0.15,0.126);\n  vec2 r = vec2(0.);\n  r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ dir.x*iTime );\n  r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ dir.y*iTime);\n\n  float f = fbm(st+r);\n\n  color = mix(baseColor,\n              lowlightColor,\n              clamp((f*f)*4.0,0.0,1.0));\n\n  color = mix(color,\n              midtoneColor,\n              clamp(length(q),0.0,1.0));\n\n  color = mix(color,\n              highlightColor,\n              clamp(length(r.x),0.0,1.0));\n\n  vec3 finalColor = mix(baseColor, color, f*f*f+.6*f*f+.5*f);\n  gl_FragColor = vec4(finalColor,1.0);\n}\n");
    },
  ]);
});
