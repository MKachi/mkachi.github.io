import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { Link } from 'react-router-dom'

export enum Type {
  Route,
  Url
}

interface IProps {
  className?: string
  to: string
  type?: Type
  children?: React.ReactNode
}

const A: React.FC<IProps> = ({ className, to, children, type = Type.Url }) => {
  const classProps = classNames(className, styles.default)
  if (type == Type.Route) {
    return (
      <Link className={classProps} to={to}>
        {children}
      </Link>
    )
  } else {
    return (
      <a className={classProps} href={to} target={'_blank'}>
        {children}
      </a>
    )
  }
}

export default A
