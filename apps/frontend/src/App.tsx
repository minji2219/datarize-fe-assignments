import styled from '@emotion/styled'
import { PurchaseFrequencyChart } from './domain/PurchaseFrequencyChart/components/PurchaseFrequencyChart'
import Header from './components/layout/Header'
import { Suspense } from 'react'

function DashBoard() {
  return (
    <S.Container>
      <Header />
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
