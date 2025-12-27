import styled from '@emotion/styled'

import { THEME } from '@styles/theme'

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
    padding: ${({ theme }) => theme.SPACING.sm}px 0;
    border: none;
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    font: ${({ size }) => SIZE[size].font};
    color: ${({ variant }) => TYPE[variant].color};
    background-color: ${({ variant }) => TYPE[variant].background};
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ variant }) => TYPE[variant].hover};
    }
  `,
}
