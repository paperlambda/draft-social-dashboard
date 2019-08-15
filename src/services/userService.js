import http from "../helpers/http";
import {map ,tap}  from 'rxjs/operators'

const getUsers = () => {
  return http({
    url: '/users'
  }).pipe(
    tap(() => {
      console.log('working')
    }),
    map((res) => res)
  )
}

const userService = {
  getUsers
}

export default userService
