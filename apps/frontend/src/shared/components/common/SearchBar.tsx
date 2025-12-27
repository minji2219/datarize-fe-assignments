import styled from '@emotion/styled'

import Search from '@components/icons/Search'

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
    height: 44px;
    padding: ${({ theme }) => theme.SPACING.sm}px;
    border: 1px solid ${({ theme }) => theme.COLOR.gray.border};
    border-radius: ${({ theme }) => theme.RADIUS.xsmall};
    font: ${({ theme }) => theme.FONTS.body.medium};
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.COLOR.primary};
    }
  `,
  SearchIcon: styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
  `,
}
