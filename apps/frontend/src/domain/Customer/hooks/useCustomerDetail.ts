import { useState } from 'react'

import { useModal } from '@hooks/useModal'
import { Customer } from '@api/useGetCustomers'

export function useCustomerDetail() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const { opened, handleOpenModal, handleCloseModal } = useModal()

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer)
    handleOpenModal()
  }

  const handleClose = () => {
    handleCloseModal()
    setSelectedCustomer(null)
  }

  return {
    selectedCustomer,
    isModalOpen: opened,
    handleSelectCustomer,
    handleCloseModal: handleClose,
  }
}
