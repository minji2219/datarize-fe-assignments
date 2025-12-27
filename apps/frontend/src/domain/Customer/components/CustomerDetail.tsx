import styled from '@emotion/styled'
import { Suspense } from 'react'
import QueryErrorBoundary from '../../../shared/components/errors/QueryErrorBoundary'
import PurchaseList from './PurchaseList'
import LoadingSpinner from '../../../shared/components/icons/LoadingSpinner'
import { Customer } from '../../../api/useGetCustomers'
import { formatPrice } from '../../../shared/utils/formatPrice'

type Props = {
  customer: Customer
}

function CustomerDetail({ customer }: Props) {
  const { id, name, count, totalAmount } = customer
  return (
    <S.Container>
      <S.Title>{name}님의 구매 내역</S.Title>

      <QueryErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <PurchaseList customerId={id} />
        </Suspense>
      </QueryErrorBoundary>

      <S.Summary>
        <S.Quantity>총 구매 횟수: {count}회</S.Quantity>
        <S.Price>{formatPrice(totalAmount)}</S.Price>
      </S.Summary>
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
  Summary: styled.div`
    display: flex;
    justify-content: space-between;

    padding: ${({ theme }) => theme.SPACING.lg}px;
    background-color: ${({ theme }) => theme.COLOR.gray.background};
  `,
  Quantity: styled.p``,
  Price: styled.p`
    font: ${({ theme }) => theme.FONTS.body.large_bold};
    color: ${({ theme }) => theme.COLOR.primary};
    white-space: nowrap;
  `,
}
