import http from "@/helpers/http";
import {map} from "rxjs/operators";

const getPosts = () => {
  return http({
    url: `/posts?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const addPost = (body) => {
  return http({
    url: `/posts`,
    method: 'POST',
    body
  }).pipe(
    map((res) => res)
  )
}

const postService = {
  getPosts,
  addPost
}

export default postService
