import styled from '@emotion/styled'

import DateInput from './DateInput'
import Button from '@components/common/Button'
import { useDateRangeFilter } from '@domain/Purchase/hooks/useDateRangeFilter'

type Props = {
  onSearch: (fromDate: string, toDate: string) => void
  onReset: () => void
}

function DateFilter({ onSearch, onReset }: Props) {
  const { formRef, handleSubmit, handleReset } = useDateRangeFilter({ onSearch, onReset })

  return (
    <S.Container ref={formRef} onSubmit={handleSubmit}>
      <S.Title>가격대별 구매 빈도</S.Title>
      <S.DateFilters>
        <DateInput label="시작 날짜:" name="fromDate" />
        <DateInput label="종료 날짜:" name="toDate" />
        <S.ButtonGroup>
          <Button>조회</Button>
          <Button type="button" onClick={handleReset} variant="secondary">
            초기화
          </Button>
        </S.ButtonGroup>
      </S.DateFilters>
    </S.Container>
  )
}

export default DateFilter

const S = {
  Container: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.GAP.level4};
  `,
  Title: styled.h2`
    font: ${({ theme }) => theme.FONTS.heading.medium};
  `,
  DateFilters: styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    gap: ${({ theme }) => theme.GAP.level5};
  `,
  ButtonGroup: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.GAP.level3};
  `,
}
