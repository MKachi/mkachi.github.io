import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum Type {
  Default = 'img',
  Background = 'background'
}

interface IProps {
  className?: string
  type?: Type
  src: string
}

const Image: React.FC<IProps> = ({ className, type = Type.Default, src }) => {
  const classProps = classNames(className, styles['default'], styles[type])
  if (type === Type.Default) {
    return <img className={classProps} src={src} />
  } else {
    return <div className={classProps} style={{ backgroundImage: `url(${src})` }} />
  }
}

export default Image
