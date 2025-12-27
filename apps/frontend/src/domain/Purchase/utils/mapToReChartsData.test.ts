import { describe, it, expect } from 'vitest'
import { mapToPurchaseChartData } from './mapToReChartsData'
import type { PurchaseFrequency } from '@api/useGetPurchaseFrequency'

describe('mapToPurchaseChartData', () => {
  it('0-20000 범위를 "2만원 이하"로 변환한다', () => {
    const input: PurchaseFrequency[] = [{ range: '0 - 20000', count: 5 }]
    const result = mapToPurchaseChartData(input)

    expect(result[0].label).toBe('2만원 이하')
    expect(result[0].value).toBe(5)
  })

  it('20000-30000 범위를 "2-3만원"으로 변환한다', () => {
    const input: PurchaseFrequency[] = [{ range: '20000 - 30000', count: 3 }]
    const result = mapToPurchaseChartData(input)

    expect(result[0].label).toBe('2-3만원')
    expect(result[0].value).toBe(3)
  })

  it('100000 이상 범위를 "9-10만원 이상"으로 변환한다', () => {
    const input: PurchaseFrequency[] = [{ range: '100000 - 999999', count: 2 }]
    const result = mapToPurchaseChartData(input)

    expect(result[0].label).toBe('9-10만원 이상')
    expect(result[0].value).toBe(2)
  })

  it('count가 0인 경우도 올바르게 처리한다', () => {
    const input: PurchaseFrequency[] = [{ range: '0 - 20000', count: 0 }]
    const result = mapToPurchaseChartData(input)

    expect(result[0].value).toBe(0)
  })
})
