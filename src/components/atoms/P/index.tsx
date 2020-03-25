import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

export enum Size {
  ExtraLarge = 'extra-large',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  ExtraSmall = 'extra-small',
}

export enum Weight {
  Thin = 'thin',
  Regular = 'regular',
  Bold = 'bold',
}

export enum Align {
  Center = 'center',
  Right = 'right',
  Left = 'left',
}

interface IProps {
  className?: string
  text?: string
  size?: Size
  weight?: Weight
  align?: Align
}

const P: React.FC<IProps> = ({ className, text, size = Size.Medium, weight = Weight.Regular, align = Align.Left }) => {
  const classProps = classNames(className, styles.default, styles[size], styles[weight], styles[align])
  return <p className={classProps}>{text}</p>
}

export default P
