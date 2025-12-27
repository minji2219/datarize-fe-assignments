import styled from '@emotion/styled'
import CustomerList from './domain/Customer/components/CustomerList'
import { PurchaseFrequencyChart } from './domain/Purchase/components/PurchaseFrequencyChart'
import Header from './shared/components/layout/Header'

function Dashboard() {
  return (
    <S.Container>
      <Header />
      <PurchaseFrequencyChart />
      <CustomerList />
    </S.Container>
  )
}

export default Dashboard

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.COLOR.gray.background};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level8};
    padding: ${({ theme }) => theme.SPACING.xl}px;
  `,
}
