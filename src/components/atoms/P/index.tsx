import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum Align {
  Center = 'center',
  Right = 'right',
  Left = 'left'
}

interface IProps {
  className?: string
  children?: React.ReactNode
  align?: Align
}

const P: React.FC<IProps> = ({ className, children, align = Align.Left }) => {
  const classProps = classNames(className, styles['default'], styles[align])
  return <p className={classProps}>{children}</p>
}

export default P
