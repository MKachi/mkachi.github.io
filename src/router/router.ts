import Home from '../pages/Home'
import Post from '../pages/Post'

const Router = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/post/:postKey/',
    component: Post
  }
]
export default Router
