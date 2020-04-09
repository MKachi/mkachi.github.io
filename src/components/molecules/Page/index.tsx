import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Page: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles.default)
  return <div className={classProps}>{children}</div>
}

export default Page
