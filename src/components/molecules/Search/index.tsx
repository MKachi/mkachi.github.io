import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import useSearch from '../../../hooks/useSearch/index'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import Layout, { Direction } from '../Layout'
import TextBox from '../../atoms/TextBox'
import Button from '../../atoms/Button'

interface IProps {
  className?: string
}

const Search: React.FC<IProps> = ({ className }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <Layout className={classProps} direction={Direction.Column}>
      <Layout className={styles['header']} direction={Direction.Row}>
        <div className={styles['search-box']}>
          <TextBox />
          <Button className={styles['search']}>
            <IoMdClose />
          </Button>
        </div>
      </Layout>
    </Layout>
  )
}

export default Search
