import { useRef } from 'react'

import { useShowToast } from '@/shared/provider/ToastProvider'

type Props = {
  onSearch: (fromDate: string, toDate: string) => void
  onReset: () => void
}

export const useDateRangeFilter = ({ onSearch, onReset }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const showToast = useShowToast()

  const validateDateRange = (fromDate: string, toDate: string): boolean => {
    if (!fromDate || !toDate) {
      showToast({ mode: 'WARN', message: '시작 날짜와 종료 날짜를 모두 입력해주세요.' })
      return false
    }

    if (fromDate > toDate) {
      showToast({ mode: 'WARN', message: '시작 날짜는 종료 날짜보다 이전이어야 합니다.' })
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const fromDate = formData.get('fromDate') as string
    const toDate = formData.get('toDate') as string

    if (validateDateRange(fromDate, toDate)) {
      onSearch(fromDate, toDate)
    }
  }

  const handleReset = () => {
    formRef.current?.reset()
    onReset()
  }

  return {
    formRef,
    handleSubmit,
    handleReset,
  }
}
