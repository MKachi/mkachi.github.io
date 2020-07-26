import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import useSearch from '../../../hooks/useMenu/index'

interface IProps {
  className?: string
  value: string
  children?: React.ReactNode
}

const Tag: React.FC<IProps> = ({ className, value, children }) => {
  const classProps = classNames(className, styles['default'])
  const { setSearchMode, setSearchText } = useSearch()
  return (
    <span
      className={classProps}
      onClick={() => {
        setSearchText(`tags: #${value}`)
        setSearchMode(true)
      }}
    >
      {children}
    </span>
  )
}

export default Tag
