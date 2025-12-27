import { describe, it, expect } from 'vitest'
import { formatStringToDate } from './formatStringToDate'

describe('formatStringToDate', () => {
  it('YYYY-MM-DD 형식의 문자열을 Date 객체로 변환한다', () => {
    const result = formatStringToDate('2024-12-31')
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(11) // 12월은 11
    expect(result.getDate()).toBe(31)
  })

  it('월 인덱스를 올바르게 변환한다 (1월 = 0)', () => {
    const result = formatStringToDate('2024-01-15')
    expect(result.getMonth()).toBe(0) // 1월은 0
    expect(result.getDate()).toBe(15)
  })

  it('날짜 비교가 가능하다', () => {
    const date1 = formatStringToDate('2024-01-01')
    const date2 = formatStringToDate('2024-12-31')
    expect(date1.getTime()).toBeLessThan(date2.getTime())
  })
})
