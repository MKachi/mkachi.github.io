import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Button from '../../atoms/Button'
import Layout, { Direction, HorizontalAlign } from '../../molecules/Layout'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

interface IProps {
  className?: string
  currentIndex: number
  lastIndex: number
  onChangeIndex(index: number): void
}

const clamp = (value: number, min: number, max: number) => {
  if (value > max) {
    return max
  } else if (value < min) {
    return min
  }
  return value
}

const createIndex = (currentIndex, lastIndex, onChangeIndex): JSX.Element[] => {
  const beginHideCount = currentIndex - 1
  const endHideCount = lastIndex - currentIndex

  const result: JSX.Element[] = []
  if (currentIndex !== 1) {
    result.push(
      <Button onClick={() => onChangeIndex(clamp(currentIndex - 1, 1, lastIndex))}>
        <IoMdArrowBack />
      </Button>
    )
  } else {
    result.push(<div />) // blank
  }

  if (beginHideCount < 3) {
    const index = lastIndex >= 5 ? 5 : lastIndex
    for (let i = 1; i <= index; ++i) {
      result.push(<Button text={i.toString()} onClick={() => onChangeIndex(i)} />)
    }
  } else if (endHideCount < 3) {
    for (let i = lastIndex - 4; i <= lastIndex; ++i) {
      result.push(<Button text={i.toString()} onClick={() => onChangeIndex(i)} />)
    }
  } else {
    const indices = [ currentIndex - 2, currentIndex - 1, currentIndex, currentIndex + 1, currentIndex + 2 ]
    for (let i = 0; i < indices.length; ++i) {
      const pageNumber = indices[i]
      result.push(<Button text={pageNumber.toString()} onClick={() => onChangeIndex(pageNumber)} />)
    }
  }

  if (currentIndex !== lastIndex) {
    result.push(
      <Button onClick={() => onChangeIndex(clamp(currentIndex + 1, 1, lastIndex))}>
        <IoMdArrowForward />
      </Button>
    )
  } else {
    result.push(<div />) // blank
  }
  return result
}

const Pagination: React.FC<IProps> = ({ className, currentIndex, lastIndex, onChangeIndex }) => {
  return (
    <Layout className={className} direction={Direction.Row} horizontalAlign={HorizontalAlign.SpaceAround}>
      {createIndex(currentIndex, lastIndex, onChangeIndex)}
    </Layout>
  )
}

export default Pagination
