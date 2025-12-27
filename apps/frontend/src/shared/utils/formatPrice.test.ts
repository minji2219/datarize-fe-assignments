import { describe, it, expect } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('숫자를 천단위 구분 기호와 함께 원화 형식으로 변환한다', () => {
    expect(formatPrice(10000)).toBe('10,000원')
    expect(formatPrice(1234567)).toBe('1,234,567원')
    expect(formatPrice(999)).toBe('999원')
  })

  it('0을 올바르게 포맷한다', () => {
    expect(formatPrice(0)).toBe('0원')
  })
})
