import React from 'react'
import routes from './router'
import { Route } from 'react-router-dom'

const createRoute = (path: string, component: any, index: number) => {
  return <Route path={path} component={component} exact={true} key={index} />
}

const Router = () => routes.map((route, index) => createRoute(route.path, route.component, index))

export default Router
