import { useRef } from 'react'
import styled from '@emotion/styled'
import DateInput from './DateInput'
import Button from '@components/common/Button'
import { useShowToast } from '@/shared/provider/ToastProivder'

type Props = {
  onSearch: (fromDate: string, toDate: string) => void
  onReset: () => void
}

function DateFilter({ onSearch, onReset }: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const showToast = useShowToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const fromDate = formData.get('fromDate') as string
    const toDate = formData.get('toDate') as string

    if (!fromDate || !toDate) {
      showToast({ mode: 'WARN', message: '시작 날짜와 종료 날짜를 모두 입력해주세요.' })
      return
    }

    if (fromDate > toDate) {
      showToast({ mode: 'WARN', message: '시작 날짜는 종료 날짜보다 이전이어야 합니다.' })
      return
    }

    onSearch(fromDate, toDate)
  }

  const handleResetClick = () => {
    formRef.current?.reset()
    onReset()
  }

  return (
    <S.Container ref={formRef} onSubmit={handleSubmit}>
      <S.Title>가격대별 구매 빈도</S.Title>
      <S.DateFilters>
        <DateInput label="시작 날짜:" name="fromDate" />
        <DateInput label="종료 날짜:" name="toDate" />
        <S.ButtonGroup>
          <Button>조회</Button>
          <Button type="button" onClick={handleResetClick} variant="secondary">
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
