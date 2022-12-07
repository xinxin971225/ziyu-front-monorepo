import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, createTextVNode, renderSlot, createVNode } from "vue";
const getButtonSizeClassMap = () => ({
  small: "text-sm px-2 py-1 ",
  mini: "text-xs px-1 py-0.5 ",
  base: "py-2 px-4 "
});
const __default__ = {
  name: "SFCButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    color: { default: "blue" },
    plain: { type: Boolean, default: false },
    icon: { default: "" },
    rounded: { type: Boolean, default: false },
    size: { default: "base" }
  },
  setup(__props) {
    const props2 = __props;
    const computedClass = computed(() => {
      const { plain, color, rounded, size } = props2;
      let classStr = `hover:border-${props2.color}-400 border-${props2.color}-500 bg-${props2.color}-500 hover:bg-${props2.color}-400 text-white `;
      if (plain) {
        classStr = `text-${color}-500 hover:text-white bg-${color}-100 hover:bg-${color}-500 border-${color}-500 `;
      }
      const sizeMap = getButtonSizeClassMap();
      classStr += sizeMap[size];
      if (rounded) {
        classStr += "rounded-full ";
      } else {
        classStr += "rounded-lg ";
      }
      return classStr;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([unref(computedClass), "font-semibold border-solid cursor-pointer"])
      }, [
        props2.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(`i-ic-baseline-${props2.icon} p-3`)
        }, null, 2)) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
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
const JSXButton = defineComponent({
  name: "JSXButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
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
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const __uno = "";
const entry = {
  install: (app) => {
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  _sfc_main as SFCButton,
  entry as default
};
//# sourceMappingURL=ziyu-vite-ui.mjs.map
