<template>
  <button :class="computedClass" class="font-semibold border-solid cursor-pointer">
    <i v-if="props.icon" :class="`i-ic-baseline-${props.icon} p-3`"></i> <slot
  /></button>
</template>

<script lang="ts" setup>
import type { ButtonColor, ZiYuUiSize } from './types'
import { computed } from 'vue'
import { getButtonSizeClassMap } from './utils'

/**
 * 有限制，不能往外抽离https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
 */
export interface Props {
  color?: ButtonColor
  plain?: boolean
  icon?: string
  rounded?: boolean
  size?: ZiYuUiSize
}
const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  plain: false,
  icon: '',
  rounded: false,
  size: 'base',
})

const computedClass = computed(() => {
  const { plain, color, rounded, size } = props
  let classStr = `hover:border-${props.color}-400 border-${props.color}-500 bg-${props.color}-500 hover:bg-${props.color}-400 text-white `
  if (plain) {
    classStr = `text-${color}-500 hover:text-white bg-${color}-100 hover:bg-${color}-500 border-${color}-500 `
  }
  const sizeMap = getButtonSizeClassMap()
  classStr += sizeMap[size]
  if (rounded) {
    classStr += 'rounded-full '
  } else {
    classStr += 'rounded-lg '
  }
  return classStr
})
</script>

<script lang="ts">
export default {
  name: 'SFCButton',
}
</script>
