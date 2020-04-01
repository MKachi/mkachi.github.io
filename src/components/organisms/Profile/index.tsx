import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction } from '../../molecules/Layout'
import Image, { Type } from '../../atoms/Image'
import P from '../../atoms/P'

interface IProps {
  className?: string
}

const Profile: React.FC<IProps> = ({ className }) => {
  return (
    <div>
      <Layout direction={Direction.Row}>
        <Image
          className={styles.profile}
          type={Type.Background}
          src={'https://avatars1.githubusercontent.com/u/11822155?s=460&v=4'}
        />
        <div>
          <P text={'Username'} />
          <P text={'mkachi@naver.com'} />
        </div>
      </Layout>
    </div>
  )
}

export default Profile
