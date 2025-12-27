import React from 'react'
import ReactDOM from 'react-dom/client'
import DashBoard from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { THEME } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <DashBoard />
    </ThemeProvider>
  </React.StrictMode>,
)
