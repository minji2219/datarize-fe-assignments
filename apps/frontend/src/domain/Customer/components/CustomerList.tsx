import { useState } from 'react'
import styled from '@emotion/styled'

import SearchForm from './SearchForm'
import Table from './Table'
import CustomerDetail from './CustomerDetail'
import Select from '@components/common/Select'
import Modal from '@components/common/Modal'
import QueryErrorBoundary from '@components/errors/QueryErrorBoundary'
import { useModal } from '@hooks/useModal'
import { Customer } from '@api/useGetCustomers'
import { useCustomerFilter, SortType } from '@domain/Customer/hooks/useCustomerFilter'

const SORT_OPTIONS = [
  { value: 'id', label: 'ID 순' },
  { value: 'desc', label: '구매금액 높은순' },
  { value: 'asc', label: '구매금액 낮은순' },
]

function CustomerList() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const { sortBy, handleSortChange, inputValue, handleInputChange, queryParams } = useCustomerFilter()
  const { opened, handleOpenModal, handleCloseModal } = useModal()

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer)
    handleOpenModal()
  }

  return (
    <S.Container>
      <SearchForm value={inputValue} onChange={handleInputChange} />

      <Select value={sortBy} onChange={(e) => handleSortChange(e.target.value as SortType)}>
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
