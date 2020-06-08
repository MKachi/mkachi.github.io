import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction } from '../../molecules/Layout'
import TextBox from '../../atoms/TextBox/index'
import Button from '../../atoms/Button'

import useMenu from '../../../hooks/useMenu'

import { IoMdClose } from 'react-icons/io'

interface IProps {
  className?: string
  searchText?: string
  placeholder?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBox: React.FC<IProps> = ({ className, searchText = '', placeholder = '', onChange = () => {} }) => {
  const { setSearchMode } = useMenu()
  const [boxFocused, setBoxFocus] = useState(false)

  const classProps = classNames(className, styles['default'])
  const buttonProps = boxFocused ? styles['button-focus'] : styles['button']

  return (
    <Layout className={classProps} direction={Direction.Row}>
      <TextBox
        className={styles['search-box']}
        value={searchText}
        onChange={onChange}
        onFocus={() => setBoxFocus(true)}
        onBlur={() => setBoxFocus(false)}
        placeholder={placeholder}
      />
      <Button className={buttonProps} onClick={() => setSearchMode(false)}>
        <span className={styles['close-icon']}>
          <IoMdClose />
        </span>
      </Button>
    </Layout>
  )
}

export default SearchBox
