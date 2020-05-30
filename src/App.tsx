import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import './index.css'
import TabMenuProvider from './contexts/TabMenuContext'

const App: React.FC = () => {
  return (
    <Router>
      <TabMenuProvider>
        <Switch>{router()}</Switch>
      </TabMenuProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
