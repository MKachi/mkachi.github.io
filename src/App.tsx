import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import './index.css'
import MenuProvider from './contexts/MenuContext'

const App: React.FC = () => {
  return (
    <Router>
      <MenuProvider>
        <Switch>{router()}</Switch>
      </MenuProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
