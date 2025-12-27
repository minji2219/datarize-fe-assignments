import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

function LoadingSpinner() {
  return (
    <S.Container>
      <S.Spinner />
    </S.Container>
  )
}

export default LoadingSpinner

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Spinner: styled.div`
    width: 40px;
    height: 40px;

    border: 4px solid ${({ theme }) => theme.COLOR.gray.border};

    animation: ${spin} 1s linear infinite;
    border-radius: 50%;
    border-top: 4px solid ${({ theme }) => theme.COLOR.primary};
  `,
}
