import styled from '@emotion/styled'
import SearchBar from '../../../shared/components/common/SearchBar'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchForm({ value, onChange }: Props) {
  return (
    <S.Container>
      <S.Title>고객 목록</S.Title>
      {/* <S.SearchForm onSubmit={handleSearch}> */}
      <SearchBar type="text" placeholder="고객 이름으로 검색..." value={value} onChange={onChange} />
      {/* </S.SearchForm> */}
    </S.Container>
  )
}

export default SearchForm

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.GAP.level5};
  `,
  Title: styled.h2`
    font: ${({ theme }) => theme.FONTS.heading.medium};
  `,
  SearchForm: styled.form`
    display: flex;
    gap: ${({ theme }) => theme.GAP.level3};
    align-items: center;
  `,
}
