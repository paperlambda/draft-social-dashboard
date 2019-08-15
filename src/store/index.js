import { createStore, applyMiddleware } from "redux";
import {createEpicMiddleware} from "redux-observable";
import {routerMiddleware} from "react-router-redux";
import {createBrowserHistory} from "history";

import reducers from './reducers'
import epics from './epics'

const epicMiddleware = createEpicMiddleware()
const store = createStore(reducers, applyMiddleware(epicMiddleware, routerMiddleware(createBrowserHistory())))

epicMiddleware.run(epics)

export default store
