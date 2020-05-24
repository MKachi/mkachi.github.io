import { MenuContext } from '../../contexts/MenuContext'
import { useContext } from 'react'

const useSearch = () => {
  const context = useContext(MenuContext)
  return {
    selectMenu: context.selectMenu,
    setSelectMenu: context.setSelectMenu,
    searchText: context.searchText,
    setSearchText: context.setSearchText,
    searchMode: context.searchMode,
    setSearchMode: context.setSearchMode
  }
}

export default useSearch
