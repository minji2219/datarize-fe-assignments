import React from 'react'
import ReactDOM from 'react-dom/client'
import DashBoard from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { THEME } from './styles/theme.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/queryClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <DashBoard />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
