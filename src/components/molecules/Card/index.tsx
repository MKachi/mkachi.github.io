import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum CardType {
  Post = 'post',
  Resume = 'resume',
}

interface IProps {
  className?: string
  children?: React.ReactNode
  type?: CardType
}

const Card: React.FC<IProps> = ({ className, children, type = CardType.Post }) => {
  const classProps = classNames(className, styles[type])
  return <article className={classProps}>{children}</article>
}

export default Card
