import React from 'react'
import ErrorBoundary from "./containers/ErrorBoundary";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Navbar from "./containers/Navbar";

const App = () => (
  <ErrorBoundary>
    <ConnectedRouter history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id" component={User} />
        <Route component={Home} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
)

export default App
