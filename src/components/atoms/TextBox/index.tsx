import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void
}

const TextBox: React.FC<IProps> = ({ className, placeholder = '', value = '', onFocus = () => {}, onBlur = () => {}, onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return <input className={classProps} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} type={'TextBox'} placeholder={placeholder} />
}

export default TextBox
