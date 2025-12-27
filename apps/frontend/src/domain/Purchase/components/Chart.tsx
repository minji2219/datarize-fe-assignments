import styled from '@emotion/styled'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts'
import { THEME } from '../../../shared/styles/theme'
import { useMemo } from 'react'
import { mapToRechartsData } from '../utils/mapToReChartsData'
import { useGetPurchaseFrequency } from '../../../api/useGetPurchaseFrequency'

type Props = {
  queryParams: { from?: string; to?: string }
}

function Chart({ queryParams }: Props) {
  const { data: purchaseFrequency } = useGetPurchaseFrequency(queryParams)

  const chartData = useMemo(() => mapToRechartsData(purchaseFrequency), [purchaseFrequency])
  /* TODO: 모든 데이터 구매건이 0일때 처리 */

  return (
    <S.Container>
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
    </S.Container>
  )
}

export default Chart

const S = {
  Container: styled.div`
    width: 100%;
    height: 500px;
  `,
}
