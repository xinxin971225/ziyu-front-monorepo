var ZiYuUI = function(exports, vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.innerHTML = '*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-ic-baseline-add{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-check{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-delete{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-edit{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-message{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-share{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92c1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.cursor-pointer,[cursor-pointer=\"\"]{cursor:pointer;}.border-blue-400,.hover\:border-blue-400:hover{--un-border-opacity:1;border-color:rgba(96,165,250,var(--un-border-opacity));}.border-blue-500{--un-border-opacity:1;border-color:rgba(59,130,246,var(--un-border-opacity));}.border-gray-400,.hover\:border-gray-400:hover{--un-border-opacity:1;border-color:rgba(156,163,175,var(--un-border-opacity));}.border-gray-500{--un-border-opacity:1;border-color:rgba(107,114,128,var(--un-border-opacity));}.border-green-400,.hover\:border-green-400:hover{--un-border-opacity:1;border-color:rgba(74,222,128,var(--un-border-opacity));}.border-green-500{--un-border-opacity:1;border-color:rgba(34,197,94,var(--un-border-opacity));}.border-indigo-400,.hover\:border-indigo-400:hover{--un-border-opacity:1;border-color:rgba(129,140,248,var(--un-border-opacity));}.border-indigo-500{--un-border-opacity:1;border-color:rgba(99,102,241,var(--un-border-opacity));}.border-pink-400,.hover\:border-pink-400:hover{--un-border-opacity:1;border-color:rgba(244,114,182,var(--un-border-opacity));}.border-pink-500{--un-border-opacity:1;border-color:rgba(236,72,153,var(--un-border-opacity));}.border-purple-400,.hover\:border-purple-400:hover{--un-border-opacity:1;border-color:rgba(192,132,252,var(--un-border-opacity));}.border-purple-500{--un-border-opacity:1;border-color:rgba(168,85,247,var(--un-border-opacity));}.border-red-400,.hover\:border-red-400:hover{--un-border-opacity:1;border-color:rgba(248,113,113,var(--un-border-opacity));}.border-red-500{--un-border-opacity:1;border-color:rgba(239,68,68,var(--un-border-opacity));}.border-yellow-400,.hover\:border-yellow-400:hover{--un-border-opacity:1;border-color:rgba(250,204,21,var(--un-border-opacity));}.border-yellow-500{--un-border-opacity:1;border-color:rgba(234,179,8,var(--un-border-opacity));}.rounded-lg,[rounded-lg=\"\"]{border-radius:0.5rem;}.border-solid,[border-solid=\"\"]{border-style:solid;}.bg-blue-100{--un-bg-opacity:1;background-color:rgba(219,234,254,var(--un-bg-opacity));}.bg-blue-500,.hover\:bg-blue-500:hover{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-gray-100{--un-bg-opacity:1;background-color:rgba(243,244,246,var(--un-bg-opacity));}.bg-gray-500,.hover\:bg-gray-500:hover{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-green-100{--un-bg-opacity:1;background-color:rgba(220,252,231,var(--un-bg-opacity));}.bg-green-500,.hover\:bg-green-500:hover{--un-bg-opacity:1;background-color:rgba(34,197,94,var(--un-bg-opacity));}.bg-indigo-100{--un-bg-opacity:1;background-color:rgba(224,231,255,var(--un-bg-opacity));}.bg-indigo-500,.hover\:bg-indigo-500:hover{--un-bg-opacity:1;background-color:rgba(99,102,241,var(--un-bg-opacity));}.bg-pink-100{--un-bg-opacity:1;background-color:rgba(252,231,243,var(--un-bg-opacity));}.bg-pink-500,.hover\:bg-pink-500:hover{--un-bg-opacity:1;background-color:rgba(236,72,153,var(--un-bg-opacity));}.bg-purple-100{--un-bg-opacity:1;background-color:rgba(243,232,255,var(--un-bg-opacity));}.bg-purple-500,.hover\:bg-purple-500:hover{--un-bg-opacity:1;background-color:rgba(168,85,247,var(--un-bg-opacity));}.bg-red-100{--un-bg-opacity:1;background-color:rgba(254,226,226,var(--un-bg-opacity));}.bg-red-500,.hover\:bg-red-500:hover{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-100{--un-bg-opacity:1;background-color:rgba(254,249,195,var(--un-bg-opacity));}.bg-yellow-500,.hover\:bg-yellow-500:hover{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover\:bg-blue-400:hover{--un-bg-opacity:1;background-color:rgba(96,165,250,var(--un-bg-opacity));}.hover\:bg-gray-400:hover{--un-bg-opacity:1;background-color:rgba(156,163,175,var(--un-bg-opacity));}.hover\:bg-green-400:hover{--un-bg-opacity:1;background-color:rgba(74,222,128,var(--un-bg-opacity));}.hover\:bg-indigo-400:hover{--un-bg-opacity:1;background-color:rgba(129,140,248,var(--un-bg-opacity));}.hover\:bg-pink-400:hover{--un-bg-opacity:1;background-color:rgba(244,114,182,var(--un-bg-opacity));}.hover\:bg-purple-400:hover{--un-bg-opacity:1;background-color:rgba(192,132,252,var(--un-bg-opacity));}.hover\:bg-red-400:hover{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity));}.hover\:bg-yellow-400:hover{--un-bg-opacity:1;background-color:rgba(250,204,21,var(--un-bg-opacity));}.p-3,[p-3=\"\"]{padding:0.75rem;}.px-4,[px-4=\"\"]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=\"\"]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=\"\"]{font-weight:600;}.hover\:text-white:hover,.text-white,[hover\:text-white=\"\"]:hover,[text-white=\"\"]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.text-blue-500{--un-text-opacity:1;color:rgba(59,130,246,var(--un-text-opacity));}.text-gray-500{--un-text-opacity:1;color:rgba(107,114,128,var(--un-text-opacity));}.text-green-500{--un-text-opacity:1;color:rgba(34,197,94,var(--un-text-opacity));}.text-indigo-500{--un-text-opacity:1;color:rgba(99,102,241,var(--un-text-opacity));}.text-pink-500{--un-text-opacity:1;color:rgba(236,72,153,var(--un-text-opacity));}.text-purple-500{--un-text-opacity:1;color:rgba(168,85,247,var(--un-text-opacity));}.text-red-500{--un-text-opacity:1;color:rgba(239,68,68,var(--un-text-opacity));}.text-yellow-500{--un-text-opacity:1;color:rgba(234,179,8,var(--un-text-opacity));}';
  document.head.appendChild(__vite_style__);
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("button", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const props = {
    color: {
      type: String,
      default: "blue"
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  };
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    props,
    setup(props2, {
      slots
    }) {
      return () => vue.createVNode("button", {
        "class": `
    py-2 
    px-4 
    font-semibold 
    rounded-lg 
    ${props2.plain ? `text-${props2.color}-500 hover:text-white ` : "text-white "}
    ${props2.plain ? ` bg-${props2.color}-100 hover:bg-${props2.color}-500 ` : ` bg-${props2.color}-500 hover:bg-${props2.color}-400 `}
    border-solid
    ${props2.plain ? `border-${props2.color}-500` : `hover:border-${props2.color}-400 border-${props2.color}-500`}
    cursor-pointer 
    `
      }, [props2.icon !== "" ? vue.createVNode("i", {
        "class": `i-ic-baseline-${props2.icon} p-3`
      }, null) : "", slots.default ? slots.default() : ""]);
    }
  });
  const ZiYuButton = vue.defineComponent({
    name: "ZiYuButton",
    render() {
      return vue.h(
        "button",
        {
          class: "border-red-500"
        },
        "ziyuButton"
      );
    }
  });
  const __uno = "";
  const entry = {
    install: (app) => {
      app.component(SFCButton.name, SFCButton);
      app.component(JSXButton.name, JSXButton);
      app.component(ZiYuButton.name, ZiYuButton);
    }
  };
  exports.JSXButton = JSXButton;
  exports.SFCButton = SFCButton;
  exports.ZiYuButton = ZiYuButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);