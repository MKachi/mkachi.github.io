import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { IoIosCube } from 'react-icons/io'
import P, { Size } from '../../atoms/P'

interface IProps {
  className?: string
}

const Footer: React.FC<IProps> = ({ className }) => {
  const classProps = classNames(className, styles.default)
  return (
    <footer className={classProps}>
      <P text={'mkachi. All rights reserved'} />
      <IoIosCube className={styles.symbol} />
      <P text={'Powered by github pages'} />
    </footer>
  )
}

export default Footer
