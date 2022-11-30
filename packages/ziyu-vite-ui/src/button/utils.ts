import { ZiYuUiSize } from './types'

export const getButtonSizeClassMap = (): Record<ZiYuUiSize, string> => ({
  small: 'text-sm px-2 py-1 ',
  mini: 'text-xs px-1 py-0.5 ',
  base: 'py-2 px-4 ',
})
