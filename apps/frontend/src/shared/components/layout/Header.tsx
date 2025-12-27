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
    width: 100%;
    padding: ${({ theme }) => theme.SPACING.lg}px;
    cursor: pointer;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.Z_INDEX.fixed};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.medium};
  `,
  Title: styled.h1`
    font: ${({ theme }) => theme.FONTS.heading.large};
  `,
}
