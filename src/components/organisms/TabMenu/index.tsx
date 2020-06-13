import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import useMenu from '../../../hooks/useMenu'

import Layout, { Direction } from '../../molecules/Layout'
import Button from '../../atoms/Button'

import { FaSearch } from 'react-icons/fa'

interface IProps {
  className?: string
  items: string[]
}

const createMenuItem = (item: string, isSelected: boolean, onClick: VoidFunction) => {
  const classProps = classNames(styles['item'], isSelected ? styles['selected'] : '')
  return (
    <Button className={classProps} key={item} onClick={onClick}>
      {item}
    </Button>
  )
}

const TabMenu: React.FC<IProps> = ({ className, items }) => {
  const { menuIndex, setMenuIndex, setSearchMode } = useMenu()
  const classProps = classNames(className, styles['default'])

  return (
    <Layout className={classProps} direction={Direction.Row}>
      {items.map((value, index) => {
        return createMenuItem(value, index === menuIndex, () => setMenuIndex(index))
      })}
      <Button className={styles['search-button']} onClick={() => setSearchMode(true)}>
        <FaSearch />
      </Button>
    </Layout>
  )
}

export default TabMenu
