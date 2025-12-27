import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts'
import styled from '@emotion/styled'

import { useGetPurchaseFrequency } from '@api/useGetPurchaseFrequency'
import { mapToRechartsData } from '@domain/Purchase/utils/mapToReChartsData'
import { THEME } from '@styles/theme'

type Props = {
  queryParams: { from?: string; to?: string }
}

function Chart({ queryParams }: Props) {
  const { data: purchaseFrequency } = useGetPurchaseFrequency(queryParams)

  const isDataEmpty = purchaseFrequency.every((data) => data.count === 0)
  const chartData = useMemo(() => mapToRechartsData(purchaseFrequency), [purchaseFrequency])

  if (isDataEmpty) return <S.EmptyMessage>해당 기간에 구매 내역이 없습니다.</S.EmptyMessage>

  return (
    <S.Container>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData} layout="vertical">
          <XAxis type="number" domain={[0, 'dataMax']} />
          <YAxis type="category" dataKey="label" />
          <Bar
            dataKey="value"
            fill={THEME.COLOR.primary}
            background={{ fill: THEME.COLOR.gray.background, radius: 8 }}
            radius={[0, 8, 8, 0]}
          >
            <LabelList dataKey="value" position="insideRight" formatter={(v) => (v ? `${v}건` : '')} fill="#fff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </S.Container>
  )
}

export default Chart

const S = {
  Container: styled.div`
    width: 100%;
  `,
  EmptyMessage: styled.p`
    padding: ${({ theme }) => theme.SPACING.xl}px;
    font: ${({ theme }) => theme.FONTS.body.medium};
    text-align: center;
  `,
}
