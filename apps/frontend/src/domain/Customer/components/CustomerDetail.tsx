import styled from '@emotion/styled'
import { Suspense } from 'react'
import QueryErrorBoundary from '../../../shared/components/errors/QueryErrorBoundary'
import PurchaseList from './PurchaseList'
import LoadingSpinner from '../../../shared/components/icons/LoadingSpinner'

type Props = {
  customerId: number
  customerName: string
}

function CustomerDetail({ customerId, customerName }: Props) {
  return (
    <S.Container>
      <S.Title>{customerName}님의 구매 내역</S.Title>

      <QueryErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <PurchaseList customerId={customerId} />
        </Suspense>
      </QueryErrorBoundary>
    </S.Container>
  )
}

export default CustomerDetail

const S = {
  Container: styled.div`
    min-width: 600px;
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACING.lg}px;
  `,
  Title: styled.h2`
    font: ${({ theme }) => theme.FONTS.heading.large};
  `,
}
