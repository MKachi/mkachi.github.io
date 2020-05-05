import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import useDB from '../../../hooks/useDB'
import Layout, { Direction } from '../../molecules/Layout'
import Card from '../../molecules/Card'

interface IProps {
  className?: string
  pageIndex: number
  showPostCount: number
}

const PostList: React.FC<IProps> = ({ className, pageIndex, showPostCount }) => {
  const { postList } = useDB()
  const posts = postList.slice(pageIndex - 1, pageIndex + pageIndex * showPostCount - 1)
  return (
    <Layout direction={Direction.Column}>
      {posts.map(value => {
        return (
          <Card>
            <Layout direction={Direction.Column}>
              <p>{value.key}</p>
              <p>{value.date}</p>
              <p>{value.title}</p>
              <p>{value.tags}</p>
            </Layout>
          </Card>
        )
      })}
    </Layout>
  )
}

export default PostList
