import { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts'
import DateFilter from './DateFilter'
import useGetPurchaseFrequency from '../../api/useGetPurchaseFrequency'
import { mapToRechartsData } from '../../domain/PurchaseFrequencyChart/utils/mapToReChartsData'
import { THEME } from '../../styles/theme'

export function PurchaseFrequencyChart() {
  const [queryParams, setQueryParams] = useState<{ from?: string; to?: string }>({})

  const { data } = useGetPurchaseFrequency(queryParams)

  const handleSearch = (fromDate: string, toDate: string) => {
    setQueryParams({ from: fromDate, to: toDate })
  }

  const chartData = useMemo(() => mapToRechartsData(data), [data])

  return (
    <S.Container>
      <DateFilter onSearch={handleSearch} />

      {/* TODO: 모든 데이터 구매건이 0일때 처리 */}
      <S.ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical">
            <XAxis type="number" hide domain={[0, 'dataMax']} />
            <YAxis type="category" dataKey="label" />

            {/* 실제 값 (앞쪽) */}
            <Bar dataKey="value" stackId="range" fill={THEME.COLOR.primary} barSize={40} radius={[0, 8, 8, 0]}>
              <LabelList dataKey="value" position="insideRight" formatter={(v) => (v ? `${v}건` : '')} fill="#fff" />
            </Bar>

            {/* 남은 영역 (뒤쪽) */}
            <Bar dataKey="background" stackId="range" fill="#F3F4F6" barSize={40} radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </S.ChartContainer>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    padding: ${({ theme }) => theme.SPACING.lg}px;
    background: white;
    border-radius: ${({ theme }) => theme.RADIUS.medium};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.light};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level8};
  `,
  ChartContainer: styled.div`
    width: 100%;
    height: 500px;
  `,
}
