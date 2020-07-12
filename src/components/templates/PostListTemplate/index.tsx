import React, { useState } from 'react'
import { IPost } from '../../../models/post'

import PostList from '../../organisms/PostList/index'
import Pagination from '../../organisms/Pagination/index'
import Layout, { Direction } from '../../molecules/Layout/index'

interface IProps {
  className?: string
  posts: IPost[]
}

const PostListTemplate: React.FC<IProps> = ({ className, posts }) => {
  const [ pageIndex, setPageIndex ] = useState(1)
  const showPostCount = 8

  let pageCount = Math.floor(posts.length / showPostCount)
  if (posts.length % showPostCount !== 0) {
    pageCount += 1
  }

  return (
    <Layout className={className} direction={Direction.Column}>
      <PostList pageIndex={pageIndex} showPostCount={showPostCount} posts={posts} />
      <Pagination pageIndex={pageIndex} pageCount={pageCount} onChangeIndex={setPageIndex} />
    </Layout>
  )
}

export default PostListTemplate
