import React, { useState } from 'react'
import useDB from '../hooks/useDB'
import useMenu from '../hooks/useMenu'

import Frame, { FrameType } from '../components/molecules/Frame'
import Layout, { Direction, HorizontalAlign } from '../components/molecules/Layout/index'
import Profile from '../components/organisms/Profile'
import PostList from '../components/organisms/PostList/index'
import Pagination from '../components/organisms/Pagination'
import Footer from '../components/organisms/Footer'
import Menu from '../components/organisms/TabMenu'
import TagList from '../components/organisms/TagList'

const isSelectedMenu = (menuItems: string[], menuName: string): boolean => {
  const { menuIndex } = useMenu()
  return menuItems[menuIndex] === menuName
}

const Home = () => {
  const [ pageIndex, setPageIndex ] = useState(1)
  const { posts, tags } = useDB()

  const menuItems = [ 'Archive', 'Tags' ]
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
        <Menu items={menuItems} />
        {isSelectedMenu(menuItems, 'Archive') && (
          <Layout direction={Direction.Column}>
            <PostList pageIndex={pageIndex} showPostCount={showPostCount} posts={posts} />
            <Pagination pageIndex={pageIndex} pageCount={pageCount} onChangeIndex={setPageIndex} />
          </Layout>
        )}
        {isSelectedMenu(menuItems, 'Tags') && <TagList tags={tags} />}
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Home
