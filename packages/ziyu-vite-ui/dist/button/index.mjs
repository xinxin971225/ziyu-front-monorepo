import { defineComponent, createVNode } from "vue";
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
const Button = defineComponent({
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
const index = {
  install: (app) => {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  index as default
};
//# sourceMappingURL=index.mjs.map
