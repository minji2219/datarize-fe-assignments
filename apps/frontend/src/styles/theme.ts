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
    background: '#f5f5f5',
  },
}

export const THEME = {
  COLOR,
  FONTS,
}

export type CustomTheme = typeof THEME
