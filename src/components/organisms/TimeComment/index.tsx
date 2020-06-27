import React from 'react'
import styles from './style.module.css'
import Layout, { Direction } from '../../molecules/Layout'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const TimeComment: React.FC<IProps> = ({ className, children }) => {
  return (
    <Layout className={className} direction={Direction.Row}>
      <span className={styles['symbol']}>
        <span />
      </span>
      <Layout className={styles['content']} direction={Direction.Column}>
        {children}
      </Layout>
    </Layout>
  )
}

export default TimeComment
