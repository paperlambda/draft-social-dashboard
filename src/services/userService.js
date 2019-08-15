import http from "../helpers/http";
import {map}  from 'rxjs/operators'

const getUsers = () => {
  return http({
    url: '/users'
  }).pipe(
    map((res) => res)
  )
}

const getUserDetail = (id) => {
  return http({
    url: `/users/${id}`
  }).pipe(
    map((res) => res)
  )
}

const getUserPosts = (id) => {
  return http({
    url: `/users/${id}/posts?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const getUserAlbums = (id) => {
  return http({
    url: `/users/${id}/albums?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const userService = {
  getUsers,
  getUserDetail,
  getUserPosts,
  getUserAlbums
}

export default userService
