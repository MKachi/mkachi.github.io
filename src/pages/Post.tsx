import React from 'react'
import Frame, { FrameType } from '../components/molecules/Frame'
import Footer from '../components/organisms/Footer'
import PostTemplate from '../components/templates/PostTemplate'
import Helmet from 'react-helmet'
import useDB from '../hooks/useDB'
import { IPost, IPostContent } from '../models/post'

const Post = ({ match }) => {
  const { posts, contents } = useDB()
  const key = match.params.postKey
  const content: IPostContent = contents[key]
  const info: IPost = posts[content.index]

  return (
    <Frame type={FrameType.Content}>
      <Helmet>
        <title>{info.title}</title>
      </Helmet>
      <Frame type={FrameType.Container}>
        <PostTemplate content={content} />
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Post
