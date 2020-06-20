import Home from '../pages/Home'
import Post from '../pages/Post'
import Resume from '../pages/Resume'

const Router = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/post/:postKey/',
    component: Post
  },
  {
    path: '/resume',
    component: Resume
  }
]
export default Router
