import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  placeholder?: string
}

const TextBox: React.FC<IProps> = ({ className, placeholder = '' }) => {
  const classProps = classNames(className, styles['default'])
  return <input className={classProps} type={'TextBox'} placeholder={placeholder}></input>
}

export default TextBox
