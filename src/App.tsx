import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import './index.css'
import MenuProvider from './contexts/MenuContext'

const App: React.FC = () => {
  console.log('개발자 도구에 당도한것을 환영하오 낯선이여')
  return (
    <Router>
      <MenuProvider>
        <Switch>{router()}</Switch>
      </MenuProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
