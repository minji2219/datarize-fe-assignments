import { useState, useMemo } from 'react'
import styled from '@emotion/styled'

import SearchForm from './SearchForm'
import Table from './Table'
import CustomerDetail from './CustomerDetail'
import Select from '@components/common/Select'
import Modal from '@components/common/Modal'
import QueryErrorBoundary from '@components/errors/QueryErrorBoundary'
import useDebounce from '@hooks/useDebounce'
import { useModal } from '@hooks/useModal'
import { Customer } from '@api/useGetCustomers'

type SortType = 'id' | 'asc' | 'desc'
const SORT_OPTIONS = [
  { value: 'id', label: 'ID 순' },
  { value: 'desc', label: '구매금액 높은순' },
  { value: 'asc', label: '구매금액 낮은순' },
]

function CustomerList() {
  const [sortBy, setSortBy] = useState<SortType>('id')
  const [inputValue, setInputValue] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const debouncedQuery = useDebounce(inputValue, 500)

  const { opened, handleOpenModal, handleCloseModal } = useModal()

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer)
    handleOpenModal()
  }

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

  return (
    <S.Container>
      <SearchForm value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortType)}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <QueryErrorBoundary>
        <S.TableWrapper>
          <Table queryParams={queryParams} onRowClick={handleSelectCustomer} />
        </S.TableWrapper>
      </QueryErrorBoundary>

      {selectedCustomer && (
        <Modal opened={opened} onClose={handleCloseModal}>
          <CustomerDetail customer={selectedCustomer} />
        </Modal>
      )}
    </S.Container>
  )
}

export default CustomerList

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: ${({ theme }) => theme.SPACING.lg}px;
    gap: ${({ theme }) => theme.GAP.level7};
    background: white;
    border-radius: ${({ theme }) => theme.RADIUS.medium};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.light};
  `,
  TableWrapper: styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;
  `,
}
