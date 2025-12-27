import { Suspense, useState } from 'react'
import styled from '@emotion/styled'
import DateFilter from './DateFilter'
import Chart from './Chart'
import QueryErrorBoundary from '../../../shared/components/errors/QueryErrorBoundary'
import LoadingSpinner from '../../../shared/components/icons/LoadingSpinner'

export function PurchaseFrequencyChart() {
  const [queryParams, setQueryParams] = useState<{ from?: string; to?: string }>({})

  const handleSearch = (fromDate: string, toDate: string) => {
    setQueryParams({ from: fromDate, to: toDate })
  }

  return (
    <S.Container>
      <DateFilter onSearch={handleSearch} />

      <QueryErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Chart queryParams={queryParams} />
        </Suspense>
      </QueryErrorBoundary>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    min-height: 600px;
    padding: ${({ theme }) => theme.SPACING.lg}px;
    background: white;
    border-radius: ${({ theme }) => theme.RADIUS.medium};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.light};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level8};
  `,
}
