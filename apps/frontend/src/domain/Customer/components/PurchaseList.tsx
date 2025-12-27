import styled from '@emotion/styled'

import { useGetCustomerPurchases } from '@/api/useGetCustomerPurchases'
import { formatPrice } from '@utils/formatPrice'

function PurchaseList({ customerId }: { customerId: number }) {
  const { data: purchases } = useGetCustomerPurchases(customerId)

  if (!purchases || purchases.length === 0) {
    return <S.EmptyMessage>구매 내역이 없습니다.</S.EmptyMessage>
  }

  return (
    <S.Container>
      {purchases.map((purchase, index) => (
        <S.Item key={index}>
          <S.Image src={purchase.imgSrc} alt={purchase.product} />
          <S.Info>
            <S.Name>{purchase.product}</S.Name>
            <S.Quantity>구매 수량: {purchase.quantity}개</S.Quantity>
            <S.Date>구매 일자: {purchase.date}</S.Date>
          </S.Info>
          <S.Price>{formatPrice(purchase.price)}</S.Price>
        </S.Item>
      ))}
    </S.Container>
  )
}

export default PurchaseList

const S = {
  EmptyMessage: styled.div`
    padding: ${({ theme }) => theme.SPACING.xl}px;
    font: ${({ theme }) => theme.FONTS.body.medium};
    text-align: center;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACING.md}px;
    overflow-y: auto;
  `,
  Item: styled.div`
    display: flex;
    align-items: flex-end;
    padding: ${({ theme }) => theme.SPACING.md}px;
    gap: ${({ theme }) => theme.SPACING.md}px;
    border: 1px solid ${({ theme }) => theme.COLOR.gray.border};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
  `,
  Image: styled.img`
    width: 80px;
    height: 80px;
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    background: ${({ theme }) => theme.COLOR.gray.background};
    object-fit: cover;
  `,
  Info: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACING.xs}px;
  `,
  Name: styled.p`
    font: ${({ theme }) => theme.FONTS.body.medium_bold};
  `,
  Quantity: styled.p`
    font: ${({ theme }) => theme.FONTS.body.small};
    color: ${({ theme }) => theme.COLOR.gray.text};
  `,
  Date: styled.p`
    font: ${({ theme }) => theme.FONTS.body.small};
    color: ${({ theme }) => theme.COLOR.gray.text};
  `,
  Price: styled.p`
    font: ${({ theme }) => theme.FONTS.body.large_bold};
    color: ${({ theme }) => theme.COLOR.primary};
    white-space: nowrap;
  `,
}
