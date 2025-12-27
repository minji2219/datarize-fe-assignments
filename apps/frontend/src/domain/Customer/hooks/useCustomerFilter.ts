import { useState, useMemo } from 'react'

import useDebounce from '@hooks/useDebounce'

export type SortType = 'id' | 'asc' | 'desc'

export const useCustomerFilter = () => {
  const [sortBy, setSortBy] = useState<SortType>('id')
  const [inputValue, setInputValue] = useState('')
  const debouncedQuery = useDebounce(inputValue, 500)

  const queryParams = useMemo(() => {
    const params: { sortBy?: 'asc' | 'desc'; name?: string } = {}

    if (sortBy !== 'id') {
      params.sortBy = sortBy
    }

    if (debouncedQuery) {
      params.name = debouncedQuery
    }

    return params
  }, [sortBy, debouncedQuery])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSortChange = (value: SortType) => {
    setSortBy(value)
  }

  return {
    sortBy,
    inputValue,
    queryParams,
    handleInputChange,
    handleSortChange,
  }
}
