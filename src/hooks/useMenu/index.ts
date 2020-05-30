import { TabMenuContext } from '../../contexts/TabMenuContext'
import { useContext } from 'react'

const useSearch = () => {
  const context = useContext(TabMenuContext)
  return {
    menuIndex: context.menuIndex,
    setMenuIndex: context.setMenuIndex,
    searchText: context.searchText,
    setSearchText: context.setSearchText,
    searchMode: context.searchMode,
    setSearchMode: context.setSearchMode
  }
}

export default useSearch
