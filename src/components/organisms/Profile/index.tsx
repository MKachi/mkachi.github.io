import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { RiFileTextLine } from 'react-icons/ri'
import Layout, { Direction } from '../../molecules/Layout'
import Image, { Type } from '../../atoms/Image'
import P from '../../atoms/P'
import A, { LinkType } from '../../atoms/A'
import { ISocialLink } from '../../../models/socialLink'

interface IProps {
  className?: string
  profile: string
  username: string
  description?: string
  socialLinks?: ISocialLink[]
  resume?: string
  children?: React.ReactNode
}

const createSocialLink = (index: number, socialLink: ISocialLink) => {
  const [isFocus, setFocus] = useState(false)
  const hoverStyle: React.CSSProperties = {
    color: socialLink.hoverColor
  }
  const classProps = classNames(styles['icon'])
  return (
    <A key={index} to={socialLink.url} type={LinkType.Url}>
      <span
        onPointerOver={() => {
          setFocus(true)
        }}
        onPointerOut={() => {
          setFocus(false)
        }}
        className={classProps}
        style={isFocus ? hoverStyle : null}
      >
        {socialLink.icon}
      </span>
    </A>
  )
}

const Profile: React.FC<IProps> = ({ className, profile, username, description, socialLinks = [], children, resume = '' }) => {
  return (
    <Layout className={className} direction={Direction.Row}>
      <Image className={styles['profile']} type={Type.Default} src={profile} />
      <div className={styles['description']}>
        <P text={username} />
        <P text={description} />
        <div className={styles['icons']}>
          {socialLinks.map((value, index) => {
            return createSocialLink(index, value)
          })}
        </div>
        {resume !== '' && (
          <A className={styles['resume']} to={resume} type={LinkType.Route}>
            <span>{'resume'}</span>
            <RiFileTextLine />
          </A>
        )}
      </div>
      {children}
    </Layout>
  )
}

export default Profile
