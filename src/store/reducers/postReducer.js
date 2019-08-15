import {
  POST_GET,
  POST_GET_F,
  POST_GET_R,
  POST_SET_SELECTED,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  posts: [],
  error: false,
  selectedPost: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_GET:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case POST_GET_F:
      return {
        ...state,
        posts: action.payload,
        isLoading: false
      }
    case POST_GET_R:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case POST_SET_SELECTED:
      return {
        ...state,
        selectedPost: action.payload
      }

    default:
      return state
  }
}
