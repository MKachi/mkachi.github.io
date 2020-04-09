import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { FaGithub, FaFacebook, FaRss } from 'react-icons/fa'

import Layout, { Direction } from '../../molecules/Layout'
import Image, { Type } from '../../atoms/Image'
import P, { Size } from '../../atoms/P'
import { IconType } from 'react-icons/lib/cjs'
import A, { Type as LinkType } from '../../atoms/A/index'

interface IProps {
  className?: string
  profile: string
  username: string
  description?: string
  github?: string
  facebook?: string
  rss?: string
}

const createSocialLink = (icon: JSX.Element, link: string) => {
  if (link == null || link == '') {
    return null
  }
  return (
    <A to={link} type={LinkType.Url}>
      {icon}
    </A>
  )
}

const createSocialLinks = <T extends IconType>(github, facebook, icon) => {
  const githubIcon = classNames(styles.icon, styles.github)
  const facebookIcon = classNames(styles.icon, styles.facebook)
  const rssIcon = classNames(styles.icon, styles.rss)

  const result: JSX.Element[] = []
  if (github != '' && github != null) {
    result.push(<FaGithub className={githubIcon} />)
  }

  if (facebook != '' && facebook != null) {
    result.push(<FaGithub className={facebookIcon} />)
  }

  if (icon != '' && icon != null) {
    result.push(<FaGithub className={icon} />)
  }
}

const Profile: React.FC<IProps> = ({ className, profile, username, description, github = '', facebook = '', rss = '' }) => {
  const githubIcon = classNames(styles.icon, styles.github)
  const facebookIcon = classNames(styles.icon, styles.facebook)
  const rssIcon = classNames(styles.icon, styles.rss)
  return (
    <div>
      <Layout direction={Direction.Row}>
        <Image className={styles.profile} type={Type.Background} src={profile} />
        <div className={styles.description}>
          <P size={Size.Medium} text={username} />
          <P size={Size.Small} text={description} />
          <div className={styles.icons}>
            {createSocialLink(<FaGithub className={githubIcon} />, github)}
            {createSocialLink(<FaFacebook className={facebookIcon} />, facebook)}
            {createSocialLink(<FaRss className={rssIcon} />, rss)}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Profile
