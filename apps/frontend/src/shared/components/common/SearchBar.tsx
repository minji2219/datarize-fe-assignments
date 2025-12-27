import styled from '@emotion/styled'
import Search from '../icons/Search'

type Props = React.ComponentProps<'input'>

function SearchBar({ ...props }: Props) {
  return (
    <S.Container>
      <S.SearchInput type="text" {...props} />
      <S.SearchIcon>
        <Search />
      </S.SearchIcon>
    </S.Container>
  )
}

export default SearchBar

const S = {
  Container: styled.div`
    position: relative;
  `,
  SearchInput: styled.input`
    width: 100%;
    height: 40px;
    padding: 0 ${({ theme }) => theme.SPACING.md}px;
    font: ${({ theme }) => theme.FONTS.body.medium};
    border: 1px solid ${({ theme }) => theme.COLOR.gray.border};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;

    &:focus {
      border-color: ${({ theme }) => theme.COLOR.primary};
    }
  `,
  SearchIcon: styled.div`
    position: absolute;
    top: 8px;
    right: 10px;
  `,
}
