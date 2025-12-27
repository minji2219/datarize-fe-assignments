import styled from '@emotion/styled'
import DateInput from './DateInput'
import Button from '../../../shared/components/common/Button'

type Props = {
  onSearch: (fromDate: string, toDate: string) => void
  // onReset: () => void
}

function DateFilter({ onSearch }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const fromDate = formData.get('fromDate') as string
    const toDate = formData.get('toDate') as string

    // TODO: 날짜 유효성 검사
    // 두개 다 값이 있어야하고 선행 관계있어야함
    onSearch(fromDate, toDate)
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Title>가격대별 구매 빈도</S.Title>
      <S.DateFilters>
        <DateInput label="시작 날짜:" name="fromDate" />
        <DateInput label="종료 날짜:" name="toDate" />
        <S.ButtonGroup>
          <Button>조회</Button>
          {/* <Button onClick={onReset} variant="secondary">
            초기화
          </Button> */}
        </S.ButtonGroup>
      </S.DateFilters>
    </S.Container>
  )
}

export default DateFilter

const S = {
  Container: styled.form`
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
