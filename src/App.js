import React from 'react'
import ErrorBoundary from "./containers/ErrorBoundary";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <ErrorBoundary>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Home} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
)

export default App
