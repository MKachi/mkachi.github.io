import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { MdMail } from 'react-icons/md'
import { FaGithub, FaFacebook, FaRss } from 'react-icons/fa'

import Layout, { Direction, VerticalAlign } from '../../molecules/Layout'
import Image, { Type } from '../../atoms/Image'
import P, { Size } from '../../atoms/P'

interface IProps {
  className?: string
}

const Profile: React.FC<IProps> = ({ className }) => {
  return (
    <div>
      <Layout direction={Direction.Row}>
        <Image className={styles.profile} type={Type.Background} src={'https://avatars1.githubusercontent.com/u/11822155?s=460&v=4'} />
        <div className={styles.description}>
          <P size={Size.Medium} text={'Username'} />
          <P size={Size.Small} text={'mkachi@naver.com'} />
          <div className={styles.icons}>
            <FaGithub className={styles.icon} />
            <FaFacebook className={styles.icon} />
            <FaRss className={styles.icon} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Profile
