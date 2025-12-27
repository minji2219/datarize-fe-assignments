import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { isAxiosError } from 'axios'

export type Customer = {
  id: number
  name: string
  count: number
  totalAmount: number
}

type Params = {
  sortBy?: 'asc' | 'desc'
  name?: string
}

const getCustomers = async (params: Params = {}): Promise<Customer[]> => {
  const searchParams = new URLSearchParams()

  if (params.sortBy) {
    searchParams.append('sortBy', params.sortBy)
  }

  if (params.name) {
    searchParams.append('name', params.name)
  }

  const queryString = searchParams.toString()
  const url = queryString ? `/customers?${queryString}` : '/customers'

  try {
    const res = await apiClient(url)
    return res.data
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return []
    }
    throw error
  }
}

export default function useGetCustomers(params: Params = {}) {
  return useQuery({
    queryKey: ['customers', params],
    queryFn: () => getCustomers(params),
    placeholderData: (prev) => prev,
  })
}
