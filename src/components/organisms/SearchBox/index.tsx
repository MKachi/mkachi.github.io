import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout from '../../molecules/Layout'
import TextBox from '../../atoms/TextBox/index'

interface IProps {
  className?: string
  placeholder?: string
  onChange?(inputText: string): void
}

const SearchBox: React.FC<IProps> = ({ className, placeholder = '', onChange = (inputText: string) => {} }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <Layout className={classProps}>
      <TextBox
        value={inputText}
        onChange={() => {
          // onChange(inputText)
          console.log(inputText)
        }}
        placeholder={placeholder}
      />
    </Layout>
  )
}

export default SearchBox
