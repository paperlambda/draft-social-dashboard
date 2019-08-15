import {USER_GET} from "../actions/actionTypes";
import {ofType} from "redux-observable";
import { of } from 'rxjs'
import {switchMap, tap} from "rxjs/operators";
import {usersGetFAction} from "../actions/userActions";

const getUsersEpic = (action$) => {
  return action$.pipe(
    ofType(USER_GET),
    tap(() => {
      console.log('D')
    }),
    switchMap(() => {
      return of(usersGetFAction([]))
    })
  )
}

export {
  getUsersEpic
}
