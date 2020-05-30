import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
  onClick(): void
}

const Tag: React.FC<IProps> = ({ className, children, onClick = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <span className={classProps} onClick={onClick}>
      {children}
    </span>
  )
}

export default Tag
