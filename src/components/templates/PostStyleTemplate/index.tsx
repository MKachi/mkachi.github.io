import React from 'react'
import classNames from 'classNames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const PostStyleTemplate: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles['default'])
  return <div className={classProps}>{children}</div>
}

export default PostStyleTemplate
