import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { IoIosCube } from 'react-icons/io'
import P from '../../atoms/P'

interface IProps {
  className?: string
}

const Footer: React.FC<IProps> = ({ className }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <footer className={classProps}>
      <P className={styles['text']}>{'Copyright Ⓒ 2020 mkachi. All rights reserved.'}</P>
    </footer>
  )
}

export default Footer
