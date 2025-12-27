import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ReactNode } from 'react'

import ErrorBoundary from './ErrorBoundary'

type Props = {
  children: ReactNode
}

function QueryErrorBoundary({ children }: Props) {
  const { reset } = useQueryErrorResetBoundary()

  return <ErrorBoundary onReset={reset}>{children}</ErrorBoundary>
}

export default QueryErrorBoundary
