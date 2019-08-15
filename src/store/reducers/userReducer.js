import {USER_GET, USER_GET_F, USER_GET_R} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  users: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case USER_GET_F:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case USER_GET_R:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}
