export type SizeType = keyof typeof SIZE_MAP

export const SIZE_MAP = {
  sm: '24',
  md: '32',
  xlg: '48',
} as const

export type SizeMapType = typeof SIZE_MAP
