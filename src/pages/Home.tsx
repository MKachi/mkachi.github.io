import React, { useState } from 'react'
import Frame, { FrameType } from '../components/molecules/Frame'
import Menu from '../components/molecules/Menu'
import P from '../components/atoms/P'
import Profile from '../components/organisms/Profile'
import Layout, { Direction, HorizontalAlign } from '../components/molecules/Layout/index'
import Footer from '../components/organisms/Footer'
import Pagination from '../components/organisms/Pagination'
import PostList from '../components/organisms/PostList/index'

const Home = () => {
  return (
    <Frame type={FrameType.Content}>
      <Frame type={FrameType.Container}>
        <Layout direction={Direction.Row} horizontalAlign={HorizontalAlign.SpaceAround}>
          <Profile
            profile={'https://avatars3.githubusercontent.com/u/11822155?s=460&u=1baad602f7e934445410c001377b900a67271b22&v=4'}
            username={'M_Kachi'}
            description={'adsfadsfas'}
            github={'https://github.com/mkachi'}
            facebook={'https://www.facebook.com/mkachi'}
            rss={'https://www.facebook.com/mkachi'}
          />
        </Layout>
        <Menu
          items={[
            { name: 'Archive', component: <PostList pageIndex={1} showPostCount={8} /> },
            { name: 'Tags', component: <P text={'text2'} /> }
          ]}
        />
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Home
