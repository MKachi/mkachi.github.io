import React, { useState } from 'react'
import Frame, { FrameType } from '../components/molecules/Frame'
import Menu from '../components/molecules/Menu'
import P from '../components/atoms/P'
import Profile from '../components/organisms/Profile'
import Layout, { Direction, HorizontalAlign } from '../components/molecules/Layout/index'
import Footer from '../components/organisms/Footer'
import Pagination from '../components/organisms/Pagination'
import PostList from '../components/organisms/PostList/index'
import useDB from '../hooks/useDB'

const Home = () => {
  const [ pageIndex, setPageIndex ] = useState(1)
  const { posts } = useDB()
  const showPostCount = 8
  let pageCount = Math.floor(posts.length / 8)
  if (posts.length % showPostCount !== 0) {
    pageCount += 1
  }
  return (
    <Frame type={FrameType.Content}>
      <Frame type={FrameType.Container}>
        <Layout direction={Direction.Row} horizontalAlign={HorizontalAlign.SpaceAround}>
          <Profile
            profile={
              'https://avatars3.githubusercontent.com/u/11822155?s=460&u=1baad602f7e934445410c001377b900a67271b22&v=4'
            }
            username={'M_Kachi'}
            description={'adsfadsfas'}
            github={'https://github.com/mkachi'}
            facebook={'https://www.facebook.com/mkachi'}
            rss={'https://www.facebook.com/mkachi'}
          />
        </Layout>
        <Menu
          items={[
            {
              name: 'Archive',
              component: (
                <Layout direction={Direction.Column}>
                  <PostList pageIndex={pageIndex} showPostCount={showPostCount} posts={posts} />
                  <Pagination pageIndex={pageIndex} pageCount={pageCount} onChangeIndex={setPageIndex} />
                </Layout>
              ),
            },
            { name: 'Tags', component: <P text={'text2'} /> },
          ]}
        />
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Home
