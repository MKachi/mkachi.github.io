import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Tag from '../../atoms/Tag'
import { IPost, IPostContent } from '../../../models/post'
import Layout, { Direction, Wrap } from '../../molecules/Layout'
import Comment from '../../atoms/Comment'
import { useHistory } from 'react-router-dom'
import PostStyleTemplate from '../PostStyleTemplate'
import Button from '../../atoms/Button'
import { AiOutlineUnorderedList } from 'react-icons/ai'

interface IProps {
  className?: string
  info: IPost
  content: IPostContent
}

const PostTemplate: React.FC<IProps> = ({ className, info, content }) => {
  const history = useHistory()
  const location = history.location

  const classProps = classNames(className, styles['default'])
  return (
    <article className={classProps}>
      <Layout className={styles['post-header']} direction={Direction.Column}>
        <Layout direction={Direction.Row}>
          <Button className={styles['back-button']} onClick={() => history.goBack()}>
            <AiOutlineUnorderedList className={styles['icon']} />
            <span>{'목록'}</span>
          </Button>
        </Layout>
        <h1 className={styles['post-title']}>{info.title}</h1>
        <Layout className={styles['post-time']} direction={Direction.Row}>
          <span>{info.date}</span>
          <span>{info.time}</span>
        </Layout>
        <Layout className={styles['post-tags']} direction={Direction.Row} wrap={Wrap.Wrap}>
          {info.tags.map(tag => (
            <Tag className={styles['tag']} key={tag} value={tag}>{`#${tag}`}</Tag>
          ))}
        </Layout>
      </Layout>
      <PostStyleTemplate>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </PostStyleTemplate>
      <Comment title={info.title} url={`https://mkachi.github.io${location.pathname}`} identifier={location.pathname} />
    </article>
  )
}

export default PostTemplate
