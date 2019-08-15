import {USER_GET} from "../actions/actionTypes";
import {ofType} from "redux-observable";
import { of } from 'rxjs'
import {switchMap, map, catchError} from "rxjs/operators";
import {usersGetFAction, usersGetRAction} from "../actions/userActions";
import userService from "../../services/userService";

const getUsersEpic = (action$) => {
  return action$.pipe(
    ofType(USER_GET),
    switchMap(() => {
      return userService.getUsers().pipe(
        map((res) => usersGetFAction(res)),
        catchError((err) => of(usersGetRAction(err)))
      )
    })
  )
}

export {
  getUsersEpic
}
