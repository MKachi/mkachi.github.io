import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction, VerticalAlign } from '../../molecules/Layout'
import Image from '../../atoms/Image'

interface IProps {
  className?: string
  icon: string
  text: string
}

const IconLabel: React.FC<IProps> = ({ className, icon, text }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Layout className={classProps} direction={Direction.Row} verticalAlign={VerticalAlign.Center}>
      <Image className={styles['icon']} src={icon} />
      <span className={styles['text']}>{text}</span>
    </Layout>
  )
}

export default IconLabel
