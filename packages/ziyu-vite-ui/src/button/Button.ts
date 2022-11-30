import { defineComponent, h, PropType } from 'vue'
import { ButtonColor } from './types'

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
  name: 'ZiYuButton',
  props,
  render() {
    return h(
      'button',
      {
        class: 'border-red-500',
      },
      'ziyuButton',
    )
  },
})
