import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const TextBox: React.FC<IProps> = ({ className, placeholder = '', value = '', onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return <input className={classProps} value={value} onChange={onChange} type={'TextBox'} placeholder={placeholder} />
}

export default TextBox
