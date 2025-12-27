import styled from '@emotion/styled'

type Props = {
  label: string
} & React.ComponentProps<'input'>

function DateInput({ label, ...props }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Date type="date" {...props} />
    </S.Container>
  )
}

export default DateInput

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level2};
    position: relative;
  `,
  Label: styled.label`
    font: ${({ theme }) => theme.FONTS.body.small_bold};
  `,
  Date: styled.input`
    padding: ${({ theme }) => theme.SPACING.sm}px;
    border: 1px solid ${({ theme }) => theme.COLOR.gray.border};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    outline: none;
    transition: border-color 0.2s;
    font: ${({ theme }) => theme.FONTS.body.medium};

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      cursor: pointer;
      opacity: 0;
    }
  `,
}
