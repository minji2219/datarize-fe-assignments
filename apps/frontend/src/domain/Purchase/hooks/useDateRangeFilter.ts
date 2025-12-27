import { useRef } from 'react'

import { useShowToast } from '@/shared/provider/ToastProvider'
import { validateDateRange } from '@domain/Purchase/utils/validateDateRange'

type Props = {
  onSearch: (fromDate: string, toDate: string) => void
  onReset: () => void
}

export const useDateRangeFilter = ({ onSearch, onReset }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const showToast = useShowToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const fromDate = formData.get('fromDate') as string
    const toDate = formData.get('toDate') as string

    const validation = validateDateRange(fromDate, toDate)
    if (!validation.valid) {
      showToast({ mode: 'WARN', message: validation.error! })
      return
    }

    onSearch(fromDate, toDate)
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
