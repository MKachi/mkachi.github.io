import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum FrameType {
  Container = 'container',
  Content = 'content'
}

interface IProps {
  className?: string
  type?: FrameType
  children?: React.ReactNode
}

const Frame: React.FC<IProps> = ({ className, type = FrameType.Container, children }) => {
  const classProps = classNames(className, styles['default'], styles[type])
  return <div className={classProps}>{children}</div>
}

export default Frame
