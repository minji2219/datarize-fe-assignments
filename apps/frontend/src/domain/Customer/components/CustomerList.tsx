import styled from '@emotion/styled'

import SearchForm from './SearchForm'
import CustomerTable from './CustomerTable'
import CustomerDetail from './CustomerDetail'
import Select from '@components/common/Select'
import Modal from '@components/common/Modal'
import QueryErrorBoundary from '@components/errors/QueryErrorBoundary'
import { useCustomerFilter, SortType } from '@domain/Customer/hooks/useCustomerFilter'
import { useCustomerDetail } from '@domain/Customer/hooks/useCustomerDetail'

const SORT_OPTIONS = [
  { value: 'id', label: 'ID 순' },
  { value: 'desc', label: '구매금액 높은순' },
  { value: 'asc', label: '구매금액 낮은순' },
]

function CustomerList() {
  const { sortBy, handleSortChange, inputValue, handleInputChange, queryParams } = useCustomerFilter()
  const { selectedCustomer, isModalOpen, handleSelectCustomer, handleCloseModal } = useCustomerDetail()

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
          <CustomerTable queryParams={queryParams} onRowClick={handleSelectCustomer} />
        </S.TableWrapper>
      </QueryErrorBoundary>

      {selectedCustomer && (
        <Modal opened={isModalOpen} onClose={handleCloseModal}>
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
