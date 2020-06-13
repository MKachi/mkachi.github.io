import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Tag from '../../atoms/Tag'
import { IPost, IPostContent } from '../../../models/post'
import Layout, { Direction, Wrap } from '../../molecules/Layout'

interface IProps {
  className?: string
  info: IPost
  content: IPostContent
}

const PostTemplate: React.FC<IProps> = ({ className, info, content }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <article className={classProps}>
      <Layout className={styles['post-header']} direction={Direction.Column}>
        <h1 className={styles['post-title']}>{info.title}</h1>
        <Layout className={styles['post-time']} direction={Direction.Row}>
          <span>{info.date}</span>
          <span>{info.time}</span>
        </Layout>
        <Layout className={styles['post-tags']} direction={Direction.Row} wrap={Wrap.Wrap}>
          {info.tags.map(tag => <Tag className={styles['tag']} value={tag}>{`#${tag}`}</Tag>)}
        </Layout>
      </Layout>
      <div className={styles['post-content']} dangerouslySetInnerHTML={{ __html: content.content }} />
    </article>
  )
}

export default PostTemplate
