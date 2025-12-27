import styled from '@emotion/styled'
import { Component, ReactNode } from 'react'
import Button from '@components/common/Button'

type Props = { children: ReactNode; onReset?: () => void }
type State = { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  reset = () => {
    this.setState({ hasError: false })
    this.props.onReset?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.Container>
          <S.Wrapper>
            <S.Title>😱오류가 발생했습니다.😵</S.Title>
            <S.Description>알 수 없는 오류가 발생했습니다. 다시 시도해주세요.</S.Description>
            <Button onClick={this.reset}>다시 시도</Button>
          </S.Wrapper>
        </S.Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.GAP.level4};
  `,
  Title: styled.p`
    font: ${({ theme }) => theme.FONTS.heading.medium};
  `,
  Description: styled.p``,
}
