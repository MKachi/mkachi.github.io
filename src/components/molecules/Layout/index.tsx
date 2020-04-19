import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum Direction {
  Row = 'row',
  Column = 'column',
  RowReverse = 'row-reverse',
  ColumnReverse = 'column-reverse'
}

export enum VerticalAlign {
  Top = 'v-top',
  Center = 'v-center',
  Bottom = 'v-bottom',
  Stretch = 'v-stretch'
}

export enum HorizontalAlign {
  Left = 'h-left',
  Center = 'h-center',
  Right = 'h-right',
  SpaceAround = 'h-space-around',
  SpaceBetween = 'h-space-between'
}

export enum Wrap {
  Wrap = 'wrap',
  NoWrap = 'no-wrap',
  Reverse = 'wrap-reverse'
}

export enum Overflow {
  Auto = 'auto',
  Hidden = 'hidden'
}

interface IProps {
  className?: string
  children?: React.ReactNode
  direction?: Direction
  verticalAlign?: VerticalAlign
  horizontalAlign?: HorizontalAlign
  wrap?: Wrap
  overflow?: Overflow
}

const Layout: React.FC<IProps> = ({ className, children, direction = Direction.Row, verticalAlign, horizontalAlign, wrap, overflow }) => {
  const classProps = classNames(
    className,
    styles.default,
    styles[direction],
    styles[verticalAlign ? verticalAlign : ''],
    styles[horizontalAlign ? horizontalAlign : ''],
    styles[wrap ? wrap : ''],
    styles[overflow ? overflow : '']
  )
  return <div className={classProps}>{children}</div>
}

export default Layout
