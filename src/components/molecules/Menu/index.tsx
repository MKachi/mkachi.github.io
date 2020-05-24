import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import useMenu from '../../../hooks/useMenu'

import Layout, { Direction } from '../Layout'
import Button from '../../atoms/Button'

interface IProps {
  className?: string
  items: string[]
}

const createMenuItem = (item: string, isSelected: boolean, onClick: VoidFunction) => {
  const classProps = classNames(styles['item'], isSelected ? styles['selected'] : '')
  return (
    <Button className={classProps} onClick={onClick}>
      {item}
    </Button>
  )
}

const Menu: React.FC<IProps> = ({ className, items }) => {
  const { selectMenu, setSelectMenu } = useMenu()
  const classProps = classNames(className, styles['default'])

  return (
    <Layout className={classProps} direction={Direction.Row}>
      {items.map(value => {
        return createMenuItem(value, selectMenu === value, () => setSelectMenu(value))
      })}
    </Layout>
  )
}

export default Menu
