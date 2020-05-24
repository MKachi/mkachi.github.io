import React, { createContext } from 'react'
import { useState } from 'react'

interface IContextProps {
  selectMenu: string
  setSelectMenu(value: string): void
  searchText: string
  setSearchText(value: string): void
  searchMode: boolean
  setSearchMode(value: boolean): void
}

export const MenuContext = createContext<IContextProps | null>(null)

interface IProps {
  children?: React.ReactNode
}

const MenuProvider: React.FC<IProps> = ({ children }) => {
  const [selectMenu, setSelectMenu] = useState('')
  const [searchText, setSearchText] = useState('')
  const [searchMode, setSearchMode] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        selectMenu,
        setSelectMenu,
        searchText,
        setSearchText,
        searchMode,
        setSearchMode
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
