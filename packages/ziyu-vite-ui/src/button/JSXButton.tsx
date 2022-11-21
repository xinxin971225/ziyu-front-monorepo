import { defineComponent, PropType } from 'vue'
export type ButtonColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const props = {
  color: {
    type: String as PropType<ButtonColor>,
    default: 'blue',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
}

export default defineComponent({
  name: 'JSXButton',
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
    py-2
    px-4
    font-semibold
    rounded-lg
    ${props.plain ? `text-${props.color}-500 hover:text-white ` : 'text-white '}
    ${
      props.plain
        ? ` bg-${props.color}-100 hover:bg-${props.color}-500 `
        : ` bg-${props.color}-500 hover:bg-${props.color}-400 `
    }
    border-solid
    ${
      props.plain
        ? `border-${props.color}-500`
        : `hover:border-${props.color}-400 border-${props.color}-500`
    }
    cursor-pointer
    `}
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
