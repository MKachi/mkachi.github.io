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
  text?: string
  align?: Align
}

const P: React.FC<IProps> = ({ className, text, align = Align.Left }) => {
  const classProps = classNames(className, styles['default'], styles[align])
  return <p className={classProps}>{text}</p>
}

export default P
