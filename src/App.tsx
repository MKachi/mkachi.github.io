import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>{router()}</Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
