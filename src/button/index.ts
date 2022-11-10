import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'ZiYuButton',
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
