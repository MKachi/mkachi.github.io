import React from 'react'
import styles from './style.module.css'

import Layout, { Direction, Wrap } from '../../molecules/Layout'
import Card from '../../molecules/Card'
import A, { LinkType } from '../../atoms/A'
import P from '../../atoms/P'
import { IPost } from '../../../models/post'
import Tag from '../../atoms/Tag'

interface IProps {
  className?: string
  pageIndex: number
  showPostCount: number
  posts: IPost[]
}

const PostList: React.FC<IProps> = ({ className, pageIndex, showPostCount, posts }) => {
  const beginIndex = (pageIndex - 1) * showPostCount
  const endIndex = pageIndex * showPostCount
  const rangePosts = posts.slice(beginIndex, endIndex)

  return (
    <Layout className={className} direction={Direction.Column}>
      {rangePosts.map((post, index) => {
        return (
          <Card key={post.title}>
            <Layout direction={Direction.Column}>
              <P className={styles['date']} text={post.date} />
              <A className={styles['post-link']} to={`/post/${post.key}`} type={LinkType.Route}>
                <P className={styles['title']} text={post.title} />
              </A>
              <Layout className={styles['tag-list']} direction={Direction.Row} wrap={Wrap.Wrap}>
                {post.tags.map((tag, index) => <Tag className={styles['tag']} key={tag} value={tag}>{`#${tag}`}</Tag>)}
              </Layout>
            </Layout>
          </Card>
        )
      })}
    </Layout>
  )
}

export default PostList
