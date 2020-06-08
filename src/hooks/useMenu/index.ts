import { MenuContext } from '../../contexts/MenuContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

const useSearch = () => {
  const context = useContext(MenuContext)
  const history = useHistory()
  return {
    menuIndex: context.menuIndex,
    setMenuIndex: context.setMenuIndex,
    searchText: context.searchText,
    setSearchText: context.setSearchText,
    searchMode: context.searchMode,
    setSearchMode: (value: boolean) => {
      context.setSearchMode(value)
      if (value) {
        if (history.location.pathname !== '/') {
          history.push('/')
        }
      } else {
        context.setSearchText('')
      }
    }
  }
}

export default useSearch
