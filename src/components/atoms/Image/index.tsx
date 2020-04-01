import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum ImageType {
  Default = 'img',
  Background = 'background',
}

interface IProps {
  className?: string
  type?: ImageType
  src: string
}

const Image: React.FC<IProps> = ({ className, type = ImageType.Default, src }) => {
  const classProps = classNames(className, styles[type])
  if (type === ImageType.Default) {
    return <img className={classProps} src={src} />
  } else {
    return <div className={classProps} style={{ backgroundImage: `url(${src})` }} />
  }
}

export default Image
