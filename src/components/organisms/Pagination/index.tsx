import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Button from '../../atoms/Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface IProps {
  className?: string
  pageIndex: number
  pageCount: number
  onChangeIndex(index: number): void
}

const MoreLine = <li className={styles['list-item']}>...</li>

const clamp = (value: number, min: number, max: number): number => {
  if (value > max) {
    return max
  } else if (value < min) {
    return min
  }
  return value
}

const createButton = (buttonIndex: number, pageIndex: number, onChangeIndex = (index: number) => {}): JSX.Element => {
  const classProps = classNames(styles['button'], buttonIndex === pageIndex ? styles['selected'] : null)
  return (
    <li className={styles['list-item']}>
      <Button className={classProps} onClick={() => onChangeIndex(buttonIndex)}>
        {buttonIndex.toString()}
      </Button>
    </li>
  )
}

const createArrow = (left: boolean, pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element => {
  if (left) {
    const classProps = classNames(styles['list-item'], pageIndex === 1 ? styles['arrow-hide'] : null)
    return (
      <li className={classProps}>
        <Button className={styles['button']} onClick={() => onChangeIndex(clamp(pageIndex - 1, 1, pageCount))}>
          <MdKeyboardArrowLeft className={styles['symbol']} />
        </Button>
      </li>
    )
  }

  const classProps = classNames(styles['list-item'], pageIndex === pageCount ? styles['arrow-hide'] : null)
  return (
    <li className={classProps}>
      <Button className={styles['button']} onClick={() => onChangeIndex(clamp(pageIndex + 1, 1, pageCount))}>
        <MdKeyboardArrowRight className={styles['symbol']} />
      </Button>
    </li>
  )
}

const rightHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = []
  let count = pageCount

  const edgeCount = pageCount - 5
  if (edgeCount >= 3) {
    count = 5
  }

  for (let i = 1; i <= count; ++i) {
    result.push(createButton(i, pageIndex, onChangeIndex))
  }

  if (edgeCount >= 3) {
    result.push(MoreLine)
    result.push(createButton(pageCount, pageIndex, onChangeIndex))
  }
  return result
}

const leftHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = [createButton(1, pageIndex, onChangeIndex), MoreLine]
  for (let i = pageCount - 4; i <= pageCount; ++i) {
    result.push(createButton(i, pageIndex, onChangeIndex))
  }
  return result
}

const sideHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = [createButton(1, pageIndex, onChangeIndex), MoreLine]
  for (let i = pageIndex - 1; i <= pageIndex + 1; ++i) {
    result.push(createButton(i, pageIndex, onChangeIndex))
  }
  result.push(MoreLine)
  result.push(createButton(pageCount, pageIndex, onChangeIndex))
  return result
}

const Pagination: React.FC<IProps> = ({ className, pageIndex, pageCount, onChangeIndex }) => {
  let buttons: JSX.Element[] = []
  const edgeCount = pageCount - pageIndex
  if (pageIndex < 5) {
    buttons = rightHide(pageIndex, pageCount, onChangeIndex)
  } else if (edgeCount <= 3) {
    buttons = leftHide(pageIndex, pageCount, onChangeIndex)
  } else {
    buttons = sideHide(pageIndex, pageCount, onChangeIndex)
  }

  const classProps = classNames(className, styles['default'])
  return (
    <nav className={classProps}>
      <ul className={styles['buttons']}>
        {createArrow(true, pageIndex, pageCount, onChangeIndex)}
        {buttons}
        {createArrow(false, pageIndex, pageCount, onChangeIndex)}
      </ul>
    </nav>
  )
}

export default Pagination
