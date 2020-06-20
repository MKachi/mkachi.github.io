import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import styles from './style.module.css'
import Button from '../../atoms/Button'
import { IoMdRocket } from 'react-icons/io'

interface IProps {
  className?: string
}

const TopButton: React.FC<IProps> = ({ className }) => {
  let intervalId = 0
  const delay = 2
  const movePixel = 40

  const moveScroll = () => {
    if (window.pageYOffset <= 0) {
      window.clearInterval(intervalId)
    }
    window.scroll(0, window.pageYOffset - movePixel)
  }

  const classProps = classNames(styles['default'], className)
  return ReactDOM.createPortal(
    <Button
      className={classProps}
      onClick={() => {
        intervalId = window.setInterval(moveScroll, delay)
      }}
    >
      <IoMdRocket className={styles['icon']} />
    </Button>,
    document.getElementById('root')
  )
}

export default TopButton
