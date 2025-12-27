import styled from '@emotion/styled'

function Header() {
  return (
    <S.Container>
      <S.Title>구매 분석 대시보드</S.Title>
    </S.Container>
  )
}

export default Header

const S = {
  Container: styled.header`
    padding: ${({ theme }) => theme.SPACING.lg}px;
    cursor: pointer;
    background-color: white;
  `,
  Title: styled.h1`
    font: ${({ theme }) => theme.FONTS.heading.large};
  `,
}
