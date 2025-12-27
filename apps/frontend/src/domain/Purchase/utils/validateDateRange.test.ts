import { describe, it, expect } from 'vitest'
import { validateDateRange } from './validateDateRange'

describe('validateDateRange', () => {
  it('시작 날짜가 없으면 유효하지 않다', () => {
    const result = validateDateRange('', '2024-12-31')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('시작 날짜와 종료 날짜를 모두 입력해주세요.')
  })

  it('종료 날짜가 없으면 유효하지 않다', () => {
    const result = validateDateRange('2024-01-01', '')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('시작 날짜와 종료 날짜를 모두 입력해주세요.')
  })

  it('두 날짜 모두 없으면 유효하지 않다', () => {
    const result = validateDateRange('', '')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('시작 날짜와 종료 날짜를 모두 입력해주세요.')
  })

  it('시작 날짜가 종료 날짜보다 늦으면 유효하지 않다', () => {
    const result = validateDateRange('2024-12-31', '2024-01-01')
    expect(result.valid).toBe(false)
    expect(result.error).toBe('시작 날짜는 종료 날짜보다 이전이어야 합니다.')
  })

  it('올바른 날짜 범위는 유효하다', () => {
    const result = validateDateRange('2024-01-01', '2024-12-31')
    expect(result.valid).toBe(true)
    expect(result.error).toBeUndefined()
  })

  it('같은 날짜도 유효하다', () => {
    const result = validateDateRange('2024-06-15', '2024-06-15')
    expect(result.valid).toBe(true)
    expect(result.error).toBeUndefined()
  })

  it('문자열 비교로 날짜 대소 비교가 작동한다', () => {
    const validResult = validateDateRange('2024-01-15', '2024-02-01')
    expect(validResult.valid).toBe(true)

    const invalidResult = validateDateRange('2024-02-01', '2024-01-15')
    expect(invalidResult.valid).toBe(false)
  })
})
