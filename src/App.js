import React from 'react'
import ErrorBoundary from './containers/ErrorBoundary'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Navbar from './containers/Navbar'
import Post from './pages/Post/Post'

const App = () => (
  <ErrorBoundary>
    <ConnectedRouter history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/posts/:id" component={Post} />
        <Route component={Home} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
)

export default App
