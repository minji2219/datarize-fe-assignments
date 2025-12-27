import styled from '@emotion/styled'
import { Suspense } from 'react'
import CustomerList from './domain/Customer/components/CustomerList'
import { PurchaseFrequencyChart } from './domain/Purchase/components/PurchaseFrequencyChart'
import Header from './shared/components/layout/Header'
import QueryErrorBoundary from './shared/components/errors/QueryErrorBoundary'

function DashBoard() {
  return (
    <S.Container>
      <Header />
      {/* TODO: 에러바운더리 */}
      <QueryErrorBoundary>
        <CustomerList />
      </QueryErrorBoundary>
      <Suspense>
        <PurchaseFrequencyChart />
      </Suspense>
    </S.Container>
  )
}

export default DashBoard

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.COLOR.gray.background};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level8};
  `,
  Header: styled.header`
    margin-bottom: 24px;
  `,
}
