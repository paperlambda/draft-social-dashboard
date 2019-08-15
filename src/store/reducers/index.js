import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from "./userReducer";
import postReducer from "./postReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  post: postReducer
})
