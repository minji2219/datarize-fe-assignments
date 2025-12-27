export const validateDateRange = (fromDate: string, toDate: string): { valid: boolean; error?: string } => {
  if (!fromDate || !toDate) {
    return {
      valid: false,
      error: '시작 날짜와 종료 날짜를 모두 입력해주세요.',
    }
  }

  if (fromDate > toDate) {
    return {
      valid: false,
      error: '시작 날짜는 종료 날짜보다 이전이어야 합니다.',
    }
  }

  return { valid: true }
}
