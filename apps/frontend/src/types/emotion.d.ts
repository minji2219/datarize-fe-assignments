import '@emotion/react'
import { CustomTheme } from '../styles/theme'

declare module '@emotion/react' {
  interface Theme extends CustomTheme {}
}
