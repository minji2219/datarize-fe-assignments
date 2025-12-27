import styled from '@emotion/styled'
import { THEME } from '../../styles/theme'

type Props = {
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

function Button({ children, size = 'sm', variant = 'primary', ...props }: Props) {
  return (
    <S.Container size={size} variant={variant} {...props}>
      {children}
    </S.Container>
  )
}
export default Button

const SIZE = {
  sm: { width: '100px', font: THEME.FONTS.body.medium_bold },
  lg: {
    width: '100%',
    font: THEME.FONTS.body.large_bold,
  },
} as const

const TYPE = {
  primary: {
    background: THEME.COLOR.primary,
    hover: THEME.COLOR.primaryHover,
    color: '#fff',
  },
  secondary: {
    background: THEME.COLOR.gray.background,
    color: '#000',
    hover: THEME.COLOR.gray.border,
  },
}

const S = {
  Container: styled.button<{ size: 'sm' | 'lg'; variant: 'primary' | 'secondary' }>`
    width: ${({ size }) => SIZE[size].width};
    height: 40px;
    font: ${({ size }) => SIZE[size].font};
    padding: ${({ theme }) => theme.SPACING.sm}px 0;
    background-color: ${({ variant }) => TYPE[variant].background};
    color: ${({ variant }) => TYPE[variant].color};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ variant }) => TYPE[variant].hover};
    }
  `,
}
