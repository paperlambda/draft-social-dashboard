import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from "./userReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer
})
