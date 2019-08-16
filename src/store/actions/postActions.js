import {
  POST_GET,
  POST_GET_F,
  POST_GET_R,
  POST_SET_SELECTED, POST_TOGGLE_MODAL
} from "./actionTypes";

export const postsGetAction = () => ({
  type: POST_GET,
})

export const postsGetFAction = (data) => ({
  type: POST_GET_F,
  payload: data
})

export const postsGetRAction = (error) => ({
  type: POST_GET_R,
  payload: error
})

export const postSetSelectedAction = (data) => ({
  type: POST_SET_SELECTED,
  payload: data
})
