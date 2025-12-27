import { Suspense, useState } from 'react'
import styled from '@emotion/styled'

import DateFilter from './DateFilter'
import PurchaseFrequencyBarChart from './PurchaseFrequencyBarChart'
import QueryErrorBoundary from '@components/errors/QueryErrorBoundary'
import LoadingSpinner from '@components/icons/LoadingSpinner'

function PurchaseFrequencyChart() {
  const [queryParams, setQueryParams] = useState<{ from?: string; to?: string }>({})

  const handleSearch = (fromDate: string, toDate: string) => {
    setQueryParams({ from: fromDate, to: toDate })
  }

  const handleReset = () => {
    setQueryParams({})
  }

  return (
    <S.Container>
      <DateFilter onSearch={handleSearch} onReset={handleReset} />

      <QueryErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <PurchaseFrequencyBarChart queryParams={queryParams} />
        </Suspense>
      </QueryErrorBoundary>
    </S.Container>
  )
}

export default PurchaseFrequencyChart

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
    margin-top: 100px;
  `,
}
