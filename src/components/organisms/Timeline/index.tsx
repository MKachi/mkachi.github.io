import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import Layout, { Direction, VerticalAlign } from '../../molecules/Layout'
import { HorizontalAlign } from '../../molecules/Layout/index'

import { FaFlag } from 'react-icons/fa'

interface IProps {
  className?: string
  children?: React.ReactNode
}

const Timeline: React.FC<IProps> = ({ className, children }) => {
  return (
    <Layout className={className} direction={Direction.Row}>
      <Layout direction={Direction.Column} verticalAlign={VerticalAlign.Center}>
        <div className={styles['line']} />
        <span className={styles['symbol']}>
          <FaFlag />
        </span>
      </Layout>

      <Layout className={styles['comments']} direction={Direction.Column} horizontalAlign={HorizontalAlign.Right}>
        {children}
      </Layout>
    </Layout>
  )
}

export default Timeline
