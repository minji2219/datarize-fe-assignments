import styled from '@emotion/styled'

type Props = {
  label?: string
  children?: React.ReactNode
} & React.ComponentProps<'select'>

function Select({ label, children, ...props }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Select {...props}>{children}</S.Select>
    </S.Container>
  )
}
export default Select

const S = {
  Container: styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACING.xs}px;
  `,
  Label: styled.label`
    font: ${({ theme }) => theme.FONTS.body.small_bold};
  `,
  Select: styled.select`
    padding: ${({ theme }) => theme.SPACING.sm}px;
    font: ${({ theme }) => theme.FONTS.body.small};
    background-color: ${({ theme }) => theme.COLOR.white};
    border: 1px solid ${({ theme }) => theme.COLOR.gray.border};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    cursor: pointer;
    transition: all 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.COLOR.primary};
    }
  `,
}
