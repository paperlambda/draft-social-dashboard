import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'

import createRootReducer from './reducers'
import epics from './epics'

export const history = createBrowserHistory()
const epicMiddleware = createEpicMiddleware()

const configureStore = () => {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(epicMiddleware, routerMiddleware(history), logger))
  )
  epicMiddleware.run(epics)
  return store
}

export default configureStore
