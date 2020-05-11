import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction } from '../Layout/index'
import { IMenuItem } from '../../../models/menuItem'
import Button from '../../atoms/Button'

interface IProps {
  className?: string
  items: IMenuItem[]
}

const createMenuItem = (item: IMenuItem, isSelected: boolean, onClick: VoidFunction) => {
  const classProps = classNames(styles.item, isSelected ? styles.selected : '')
  return <Button className={classProps} text={item.name} onClick={onClick} />
}

const Menu: React.FC<IProps> = ({ className, items }) => {
  const [selectedIndex, setMenuIndex] = useState(0)
  const classProps = classNames(className, styles.default)
  return (
    <Layout className={classProps} direction={Direction.Column}>
      <Layout className={styles.menus} direction={Direction.Row}>
        {items.map((value, index) => {
          return createMenuItem(value, selectedIndex === index, () => setMenuIndex(index))
        })}
      </Layout>
      <div className={styles.content}>{items[selectedIndex].component}</div>
    </Layout>
  )
}

export default Menu
