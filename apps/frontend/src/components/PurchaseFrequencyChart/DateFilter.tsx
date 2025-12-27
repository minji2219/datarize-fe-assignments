import styled from '@emotion/styled'
import { ChangeEvent } from 'react'
import DateInput from './DateInput'
import Button from '../common/Button'

type Props = {
  fromDate: string
  toDate: string
  onChangeFromDate: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeToDate: (event: ChangeEvent<HTMLInputElement>) => void
}

function DateFilter({ fromDate, toDate, onChangeFromDate, onChangeToDate }: Props) {
  return (
    <S.Container>
      <S.Title>가격대별 구매 빈도</S.Title>
      <S.DateFilters>
        <DateInput label="시작 날짜:" value={fromDate} onChange={onChangeFromDate} />

        <DateInput label="종료 날짜:" value={toDate} onChange={onChangeToDate} />
        <S.ButtonGroup>
          <Button onClick={() => {}}>조회</Button>
          <Button onClick={() => {}} variant="secondary">
            초기화
          </Button>
        </S.ButtonGroup>
      </S.DateFilters>
    </S.Container>
  )
}

export default DateFilter

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level4};
  `,
  Title: styled.h2`
    font: ${({ theme }) => theme.FONTS.heading.medium};
  `,
  DateFilters: styled.div`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.GAP.level5};
    align-items: end;
  `,
  ButtonGroup: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.GAP.level3};
  `,
}
