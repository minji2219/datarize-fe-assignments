const fontFamily =
  'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans KR", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'

const FONTS = {
  heading: {
    large: `700 28px/100% ${fontFamily}`,
    medium: `700 24px/150% ${fontFamily}`,
    small: `700 20px/150% ${fontFamily}`,
  },
  body: {
    large: `400 18px ${fontFamily}`,
    large_bold: `600 18px ${fontFamily}`,
    medium: `400 16px ${fontFamily}`,
    medium_bold: `600 16px ${fontFamily}`,
    small: `400 15px/150% ${fontFamily}`,
    small_bold: `600 15px/150% ${fontFamily}`,
  },
}

const COLOR = {
  gray: {
    border: '#dddddd',
    background: '#f5f5f5',
    text: '#666',
  },
  primary: '#8884d8',
  primaryHover: '#7a76c8',
}

const SPACING = {
  xs: 4,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
}

const GAP = {
  level1: '2px',
  level2: '4px',
  level3: '8px',
  level4: '12px',
  level5: '16px',
  level6: '20px',
  level7: '24px',
  level8: '36px',
  level9: '40px',
  level10: '48px',
  level11: '64px',
  level12: '80px',
}

const RADIUS = {
  xsmall: '6px',
  small: '14px',
  medium: '20px',
  large: '24px',
  half: '50%',
}

export const Z_INDEX = {
  base: 0,
  below: -1,
  fixed: 300,
  overlay: 500,
  modal: 1000,
  max: 9999,
}

const BOX_SHADOW = {
  light: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  medium: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  heavy: '0px 8px 24px rgba(0, 0, 0, 0.2)',
}

export const THEME = {
  COLOR,
  FONTS,
  SPACING,
  GAP,
  Z_INDEX,
  RADIUS,
  BOX_SHADOW,
}

export type CustomTheme = typeof THEME
