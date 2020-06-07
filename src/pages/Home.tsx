import React from 'react'
import useDB from '../hooks/useDB'
import useMenu from '../hooks/useMenu'

import Frame, { FrameType } from '../components/molecules/Frame'
import Layout, { Direction, HorizontalAlign } from '../components/molecules/Layout/index'
import Profile from '../components/organisms/Profile'
import Footer from '../components/organisms/Footer'
import TabMenu from '../components/organisms/TabMenu'
import TagList from '../components/organisms/TagList'
import PostListTemplate from '../components/templates/PostListTemplate'
import SearchBox from '../components/organisms/SearchBox'
import TextBox from '../components/atoms/TextBox'

const menuItems = [ 'Archive', 'Tags' ]

const isSelectedMenu = (menuName: string): boolean => {
  const { menuIndex, searchMode } = useMenu()
  if (searchMode) {
    return false
  }
  return menuItems[menuIndex] === menuName
}

const Home = () => {
  const { posts, tags } = useDB()

  console.log('render Home page')
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
        <TextBox />
        {/* <SearchBox /> */}
        <TabMenu items={menuItems} />
        {isSelectedMenu('Archive') && <PostListTemplate posts={posts} />}
        {isSelectedMenu('Tags') && <TagList tags={tags} />}
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Home
