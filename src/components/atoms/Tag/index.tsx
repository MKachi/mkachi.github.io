import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Tag: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles['default'])
  return <span className={classProps}>{children}</span>
}

export default Tag
