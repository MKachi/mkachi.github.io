import { MenuContext } from '../../contexts/MenuContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

const useSearch = () => {
  const context = useContext(MenuContext)
  const history = useHistory()
  return {
    menuIndex: context.menuIndex,
    setMenuIndex: context.setMenuIndex,
    searchMode: context.searchMode,
    setSearchMode: (value: boolean) => {
      context.setSearchMode(value)
      if (value) {
        if (history.location.pathname !== '/') {
          history.push('/')
        }
      } else {
        history.goBack()
      }
    }
  }
}

export default useSearch
