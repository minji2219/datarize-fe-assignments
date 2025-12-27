import styled from '@emotion/styled'
import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Cross from '@components/icons/Cross'

export type Props = {
  opened: boolean
  onClose: () => void
  children?: ReactNode
}

function Modal({ opened, onClose, children }: Props) {
  useEffect(() => {
    if (!opened) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [opened])

  if (!opened) return
  const modalRoot = document.querySelector('#modal') as HTMLElement

  return ReactDOM.createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.IconWrapper onClick={onClose}>
          <Cross size="md" strokeWidth={4} color="#fff" />
        </S.IconWrapper>
        {children}
      </S.Container>
    </>,
    modalRoot,
  )
}

export default Modal

const S = {
  Overlay: styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.Z_INDEX.overlay};
    background-color: rgb(0 0 0 / 10%);
    backdrop-filter: blur(2px);
  `,
  Container: styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${({ theme }) => theme.Z_INDEX.modal};
    padding: ${({ theme }) => theme.SPACING.xl}px;
    background-color: white;
    border-radius: ${({ theme }) => theme.RADIUS.medium};
  `,
  IconWrapper: styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: ${({ theme }) => theme.RADIUS.half};
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.COLOR.primary};
  `,
}
