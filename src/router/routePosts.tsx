import React from 'react'
import Post from '../pages/Post'
import db from '../database.json'
import { IPost } from '../models/post'

export default () => {
  const posts: IPost[] = db.posts
  const result = []
  for (let i = 0; i < posts.length; ++i) {
    const postPage = () => {
      return <Post post={posts[i]} />
    }
    result.push({
      path: posts[i].path,
      component: postPage
    })
  }
  return result
}
