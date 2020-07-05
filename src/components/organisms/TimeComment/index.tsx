import React from 'react'
import styles from './style.module.css'

import Layout, { Direction } from '../../molecules/Layout'
import P from '../../atoms/P'
import Image from '../../atoms/Image'

interface IProps {
  className?: string
  timestamp: string
  icon?: string
  position?: string
  title: string
  children?: React.ReactNode
}

const TimeComment: React.FC<IProps> = ({ className, timestamp = '', icon = '', position = '', title, children }) => {
  return (
    <Layout className={className} direction={Direction.Row}>
      <span className={styles['symbol']}>
        <span />
      </span>
      <Layout className={styles['content']} direction={Direction.Column}>
        <P className={styles['timestamp']}>{timestamp}</P>
        <Layout direction={Direction.Row}>
          {icon !== '' ? <Image className={styles['icon']} src={icon} /> : null}
          <Layout direction={Direction.Column}>
            <P className={styles['position']}>{position}</P>
            <P className={styles['title']}>{title}</P>
            {children}
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default TimeComment
