import { useState } from 'react'

export const useModal = () => {
  const [opened, setOpened] = useState(false)

  const handleCloseModal = (e?: MouseEvent) => {
    e?.stopPropagation()
    setOpened(false)
  }

  const handleOpenModal = () => {
    setOpened(true)
  }

  return {
    opened,
    handleCloseModal,
    handleOpenModal,
  }
}
