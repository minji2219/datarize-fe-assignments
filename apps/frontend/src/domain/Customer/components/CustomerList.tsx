import { useState, useMemo } from 'react'
import styled from '@emotion/styled'
import { useGetCustomers, Customer } from '../../../api/useGetCustomers'
import SearchForm from './SearchForm'
import useDebounce from '../../../shared/hooks/useDebounce'
import Select from '../../../shared/components/common/Select'
import Table from './Table'
import CustomerDetail from './CustomerDetail'
import Modal from '../../../shared/components/common/Modal'
import { useModal } from '../../../shared/hooks/useModal'

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

  const { data: customers, isLoading } = useGetCustomers(queryParams)

  if (isLoading) return <div>loading...</div>
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

      <S.TableWrapper>
        {customers && customers.length > 0 ? (
          <Table customers={customers} onRowClick={handleSelectCustomer} />
        ) : (
          <S.Message>검색 결과가 없습니다.</S.Message>
        )}
      </S.TableWrapper>

      {selectedCustomer && (
        <Modal opened={opened} onClose={handleCloseModal}>
          <CustomerDetail customerId={selectedCustomer.id} customerName={selectedCustomer.name} />
        </Modal>
      )}
    </S.Container>
  )
}

export default CustomerList

const S = {
  Container: styled.div`
    padding: ${({ theme }) => theme.SPACING.lg}px;
    background: white;
    border-radius: ${({ theme }) => theme.RADIUS.medium};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.light};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${({ theme }) => theme.GAP.level7};
  `,
  TableWrapper: styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;
  `,
  Message: styled.p`
    font: ${({ theme }) => theme.FONTS.body.medium};
    text-align: center;
    margin-top: ${({ theme }) => theme.SPACING.xl}px;
  `,
}
