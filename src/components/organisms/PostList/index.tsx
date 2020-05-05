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
  const beginIndex = (pageIndex - 1) * showPostCount
  const endIndex = pageIndex * showPostCount
  const posts = postList.slice(beginIndex, endIndex)
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
