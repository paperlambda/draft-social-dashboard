import {USER_SET_SELECTED, USER_GET, USER_GET_F, USER_GET_R} from "./actionTypes";

export const usersGetAction = () => ({
  type: USER_GET,
})

export const usersGetFAction = (data) => ({
  type: USER_GET_F,
  payload: data
})

export const usersGetRAction = (error) => ({
  type: USER_GET_R,
  payload: error
})

export const userSetSelectedAction = (data) => ({
  type: USER_SET_SELECTED,
  payload: data
})
