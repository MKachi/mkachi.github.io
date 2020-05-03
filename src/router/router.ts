import Home from '../pages/Home'
import Posts from './routePosts'

const Router = [
  {
    path: '/',
    component: Home
  },
  ...Posts()
]

console.log(Router)

export default Router
