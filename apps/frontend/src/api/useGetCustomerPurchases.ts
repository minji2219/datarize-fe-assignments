import { useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from './apiClient'

export type CustomerPurchase = {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

const getCustomerPurchases = async (customerId: number): Promise<CustomerPurchase[]> => {
  const { data } = await apiClient(`/customers/${customerId}/purchases`)
  return data
}

export default function useGetCustomerPurchases(customerId: number) {
  return useSuspenseQuery({
    queryKey: ['customerPurchases', customerId],
    queryFn: () => getCustomerPurchases(customerId),
  })
}
