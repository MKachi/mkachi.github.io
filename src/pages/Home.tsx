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

import { IPost } from '../models/post'
import { ITag } from '../models/tag'
import { ISocialLink } from '../models/socialLink'
import { FaGithub, FaFacebook, FaRss } from 'react-icons/fa'

const menuItems = ['Archive', 'Tags']

const isSelectedMenu = (menuName: string): boolean => {
  const { menuIndex } = useMenu()
  return menuItems[menuIndex] === menuName
}
const showPostList = (posts: IPost[], tags: ITag[]) => {
  return (
    <React.Fragment>
      <TabMenu items={menuItems} />
      {isSelectedMenu('Archive') && <PostListTemplate posts={posts} />}
      {isSelectedMenu('Tags') && <TagList tags={tags} />}
    </React.Fragment>
  )
}

const getSearchPosts = (searchText: string, posts: IPost[]) => {
  const result: IPost[] = []

  if (searchText.indexOf('tags:') === 0) {
    const tagList = searchText.replace(/#|tags:| /gi, '').split(',')
    tagList.forEach(target => {
      posts.forEach(post => {
        if (post.tags.includes(target.toLowerCase())) {
          result.push(post)
        }
      })
    })
  } else {
    posts.forEach(post => {
      if (post.title.toLowerCase().includes(searchText.toLowerCase())) {
        result.push(post)
      }
    })
  }
  return result
}
const showSearchList = (posts: IPost[], searchText: string, setSearchText: (value: string) => void) => {
  return (
    <React.Fragment>
      <SearchBox searchText={searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)} />
      <PostListTemplate posts={getSearchPosts(searchText, posts)} />
    </React.Fragment>
  )
}

const createSocialLinks = (): ISocialLink[] => {
  return [
    { icon: <FaGithub />, url: 'https://github.com/mkachi', hoverColor: '#000000' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/mkachi', hoverColor: '#4359ac' },
    { icon: <FaRss />, url: 'https://www.facebook.com/mkachi', hoverColor: '#ff9900' }
  ]
}

const Home = () => {
  const { posts, tags } = useDB()
  const { searchMode, searchText, setSearchText } = useMenu()

  return (
    <Frame type={FrameType.Content}>
      <Frame type={FrameType.Container}>
        <Layout direction={Direction.Row} horizontalAlign={HorizontalAlign.SpaceAround}>
          <Profile
            profile={'https://avatars3.githubusercontent.com/u/11822155?s=460&u=1baad602f7e934445410c001377b900a67271b22&v=4'}
            username={'M_Kachi'}
            description={'adsfadsfas'}
            socialLinks={createSocialLinks()}
            resume={'/resume'}
          />
        </Layout>
        {searchMode ? showSearchList(posts, searchText, (value: string) => setSearchText(value)) : showPostList(posts, tags)}
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Home
