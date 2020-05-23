import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  text?: string
}

const Tag: React.FC<IProps> = ({ className, text }) => {
  const classProps = classNames(className, styles['default'])
  return <span className={classProps}>{text}</span>
}

export default Tag
