import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Card: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles['default'])
  return <section className={classProps}>{children}</section>
}

export default Card
