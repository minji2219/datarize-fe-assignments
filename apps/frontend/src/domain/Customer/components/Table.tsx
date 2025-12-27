import styled from '@emotion/styled'
import { Customer } from '../../../api/useGetCustomers'
import { formatPrice } from '../../../shared/utils/formatPrice'

type Props = {
  customers: Customer[]
  onRowClick: (customer: Customer) => void
}

function Table({ customers, onRowClick }: Props) {
  return (
    <S.Table>
      <colgroup>
        <col style={{ width: '40px' }} />
        <col style={{ width: '120px' }} />
        <col style={{ width: '120px' }} />
        <col style={{ width: '160px' }} />
      </colgroup>
      <S.TableHead>
        <S.TableRow>
          <S.TableHeader>ID</S.TableHeader>
          <S.TableHeader>이름</S.TableHeader>
          <S.TableHeader>총 구매 횟수</S.TableHeader>
          <S.TableHeader>총 구매 금액</S.TableHeader>
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {customers.map((customer) => (
          <S.TableRow key={customer.id} onClick={() => onRowClick(customer)}>
            <S.TableCell>{customer.id}</S.TableCell>
            <S.TableCell>{customer.name}</S.TableCell>
            <S.TableCell>{customer.count}회</S.TableCell>
            <S.TableCell>{formatPrice(customer.totalAmount)}</S.TableCell>
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )
}

export default Table

const S = {
  Table: styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  `,
  TableHead: styled.thead`
    background-color: ${({ theme }) => theme.COLOR.gray.background};
  `,
  TableBody: styled.tbody``,
  TableRow: styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.COLOR.gray.border};

    &:last-child {
      border-bottom: none;
    }

    tbody & {
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.COLOR.gray.background};
      }
    }
  `,
  TableHeader: styled.th`
    padding: ${({ theme }) => theme.SPACING.md}px;
    font: ${({ theme }) => theme.FONTS.body.medium_bold};

    &:first-of-type {
      border-top-left-radius: ${({ theme }) => theme.RADIUS.xsmall};
    }

    &:last-child {
      border-top-right-radius: ${({ theme }) => theme.RADIUS.xsmall};
    }
  `,
  TableCell: styled.td`
    padding: ${({ theme }) => theme.SPACING.md}px;
    font: ${({ theme }) => theme.FONTS.body.medium};
    text-align: center;
  `,
}
