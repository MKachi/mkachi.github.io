import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum ListType {
  Number,
  Symbol,
}

interface IProps {
  className?: string
  type?: ListType
  children?: React.ReactNode
}

const ListGroup: React.FC<IProps> = ({ className, type = ListType.Number, children }) => {
  const classProps = classNames(styles['default'], className)
  return type === ListType.Number ? (
    <ol className={classProps}>{children}</ol>
  ) : (
    <ul className={classProps}>{children}</ul>
  )
}

export default ListGroup
