import { PurchaseFrequency } from '../../../api/useGetPurchaseFrequency'

export const mapToRechartsData = (rawData: PurchaseFrequency[]) => {
  return rawData.map(({ range, count }) => {
    const [min, max] = range.split(' - ').map(Number)

    return {
      label: formatPriceRange(min, max),
      value: count,
    }
  })
}

const formatPriceRange = (min: number, max: number) => {
  if (max >= 100_000) return '10만원 이상'

  const minMan = Math.floor(min / 10_000)
  const maxMan = Math.floor(max / 10_000)

  return minMan === 0 ? '2만원 이하' : `${minMan}-${maxMan}만원`
}
