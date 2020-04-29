import React from 'react'
import Layout, { Direction, HorizontalAlign } from '../../molecules/Layout'
import Button from '../../atoms/Button'

interface IProps {
  className?: string
  pageIndex: number
  pageCount: number
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

const rightHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = []
  let count = pageCount

  const edgeCount = pageCount - 5
  if (edgeCount >= 3) {
    count = 5
  }

  for (let i = 1; i <= count; ++i) {
    result.push(<Button text={i.toString()} onClick={() => onChangeIndex(i)} />)
  }

  if (edgeCount >= 3) {
    result.push(<p>...</p>)
    result.push(<Button text={pageCount.toString()} onClick={() => onChangeIndex(pageCount)} />)
  }

  return result
}

const leftHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = []
  result.push(<Button text={'1'} onClick={() => onChangeIndex(1)} />)
  result.push(<p>...</p>)

  for (let i = pageCount - 4; i <= pageCount; ++i) {
    result.push(<Button text={i.toString()} onClick={() => onChangeIndex(i)} />)
  }
  return result
}

const sideHide = (pageIndex: number, pageCount: number, onChangeIndex = (index: number) => {}): JSX.Element[] => {
  const result: JSX.Element[] = []
  result.push(<Button text={'1'} onClick={() => onChangeIndex(1)} />)
  result.push(<p>...</p>)
  for (let i = pageIndex - 1; i <= pageIndex + 1; ++i) {
    result.push(<Button text={i.toString()} onClick={() => onChangeIndex(i)} />)
  }
  result.push(<p>...</p>)
  result.push(<Button text={pageCount.toString()} onClick={() => onChangeIndex(pageCount)} />)
  return result
}

const Pagination: React.FC<IProps> = ({ className, pageIndex, pageCount, onChangeIndex }) => {
  let buttons: JSX.Element[] = null

  const edgeCount = pageCount - pageIndex
  if (pageIndex < 5) {
    buttons = rightHide(pageIndex, pageCount, onChangeIndex)
  } else if (edgeCount <= 3) {
    buttons = leftHide(pageIndex, pageCount, onChangeIndex)
  } else {
    buttons = sideHide(pageIndex, pageCount, onChangeIndex)
  }

  return (
    <Layout className={className} direction={Direction.Row} horizontalAlign={HorizontalAlign.SpaceAround}>
      {buttons}
    </Layout>
  )
}

export default Pagination
