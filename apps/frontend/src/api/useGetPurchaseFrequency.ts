import { useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { formatStringToDate } from '../shared/utils/formatStringToDate'

export type PurchaseFrequency = {
  range: string
  count: number
}

type Params = {
  from?: string
  to?: string
}

const getPurchaseFrequency = async (params: Params): Promise<PurchaseFrequency[]> => {
  const searchParams = new URLSearchParams()

  if (params.from) {
    searchParams.append('from', formatStringToDate(params.from).toISOString())
  }

  if (params.to) {
    searchParams.append('to', formatStringToDate(params.to).toISOString())
  }

  const queryString = searchParams.toString()
  const url = queryString ? `/purchase-frequency?${queryString}` : '/purchase-frequency'

  const response = await apiClient<PurchaseFrequency[]>(url)
  return response.data
}

export const useGetPurchaseFrequency = (queryParams: Params) => {
  return useSuspenseQuery({
    queryKey: ['purchase-frequency', queryParams],
    queryFn: () => getPurchaseFrequency(queryParams),
  })
}
