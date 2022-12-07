import Button from '../SFCButton.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

const getBtnWrapper = (props?: any) => {
  const wrapper = shallowMount(Button, {
    slots: {
      default: 'Button',
    },
    props,
  })
  const wrapperClasses = wrapper.classes().map((v) => v.replace('\n', ''))
  return {
    wrapper,
    wrapperClasses,
  }
}

// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const { wrapper } = getBtnWrapper()
    // 断言
    expect(wrapper.text()).toBe('Button')
  })
})
describe('color', () => {
  test('default', () => {
    const { wrapper } = getBtnWrapper()
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-500'),
    ).toBe(true)
  })
  test('red', () => {
    const { wrapperClasses } = getBtnWrapper({
      color: 'red',
    })
    expect(wrapperClasses.includes('bg-red-500')).toBe(true)
  })

  describe('plain', () => {
    test('default', () => {
      const { wrapperClasses } = getBtnWrapper()

      expect(wrapperClasses.includes('text-white')).toBe(true)
      expect(wrapperClasses.includes('bg-blue-500')).toBe(true)
      expect(wrapperClasses.includes('hover:bg-blue-400')).toBe(true)
      expect(wrapperClasses.includes('hover:border-blue-400')).toBe(true)
      expect(wrapperClasses.includes('border-blue-500')).toBe(true)
    })
    test(' plain true', () => {
      const { wrapperClasses } = getBtnWrapper({
        plain: true,
      })

      expect(wrapperClasses.includes('text-blue-500')).toBe(true)
      expect(wrapperClasses.includes('hover:text-white')).toBe(true)
      expect(wrapperClasses.includes('bg-blue-100')).toBe(true)
      expect(wrapperClasses.includes('hover:bg-blue-500')).toBe(true)
      expect(wrapperClasses.includes('border-blue-500')).toBe(true)
    })
  })
  describe('rounded', () => {
    test('default', () => {
      const { wrapperClasses } = getBtnWrapper()

      expect(wrapperClasses.includes('rounded-lg')).toBe(true)
    })
    test('rounded', () => {
      const { wrapperClasses } = getBtnWrapper({
        rounded: true,
      })

      expect(wrapperClasses.includes('rounded-full')).toBe(true)
    })
  })
  describe('Button size', () => {
    test('default', () => {
      const { wrapperClasses } = getBtnWrapper()

      expect(wrapperClasses.includes('py-2')).toBe(true)
      expect(wrapperClasses.includes('px-4')).toBe(true)
    })
    test('small', () => {
      const { wrapperClasses } = getBtnWrapper({
        size: 'small',
      })

      expect(wrapperClasses.includes('py-1')).toBe(true)
      expect(wrapperClasses.includes('px-2')).toBe(true)
      expect(wrapperClasses.includes('text-sm')).toBe(true)
    })
    test('mini', () => {
      const { wrapperClasses } = getBtnWrapper({
        size: 'mini',
      })

      expect(wrapperClasses.includes('py-0.5')).toBe(true)
      expect(wrapperClasses.includes('px-1')).toBe(true)
      expect(wrapperClasses.includes('text-xs')).toBe(true)
    })
  })
})
