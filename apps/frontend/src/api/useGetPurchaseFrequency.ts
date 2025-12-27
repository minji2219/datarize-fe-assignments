import { useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { formatStringToDate } from '../utils/formatStringToDate'

function useGetPurchaseFrequency(queryParams: { from?: string; to?: string }) {
  return useSuspenseQuery({
    queryKey: ['purchase-frequency', queryParams],
    queryFn: async () => {
      const params = new URLSearchParams()
      if (queryParams.from) params.append('from', formatStringToDate(queryParams.from).toISOString())
      if (queryParams.to) params.append('to', formatStringToDate(queryParams.to).toISOString())
      const url = `/purchase-frequency${params.toString() ? '?' + params.toString() : ''}`

      const response = await apiClient(url)
      return response.data
    },
  })
}

export default useGetPurchaseFrequency
