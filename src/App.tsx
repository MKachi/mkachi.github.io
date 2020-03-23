import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'

ReactDOM.render(
  <Router>
    <Switch>{router()}</Switch>
  </Router>,
  document.getElementById('root')
)
