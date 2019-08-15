import {USER_GET, USER_GET_F, USER_GET_R} from "./actionTypes";

const usersGetAction = () => ({
  type: USER_GET,
})

const usersGetFAction = (data) => ({
  type: USER_GET_F,
  payload: data
})

const usersGetRAction = (error) => ({
  type: USER_GET_R,
  payload: error
})

export {
  usersGetAction,
  usersGetFAction,
  usersGetRAction
}
