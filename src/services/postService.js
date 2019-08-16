import http from "@/helpers/http";
import {map} from "rxjs/operators";

const getPosts = () => {
  return http({
    url: `/posts?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const getPost = (id) => {
  return http({
    url: `/posts/${id}`
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

const deletePost = (id) => {
  return http({
    url: `/posts/${id}`,
    method: 'DELETE'
  }).pipe(
    map((res) => res)
  )
}

const updatePost = (body) => {
  return http({
    url: `/posts/${body.postId}`,
    method: 'PATCH',
    body
  }).pipe(
    map((res) => res)
  )
}

const getPostComments = (id) => {
  return http({
    url: `/posts/${id}/comments?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const addComment = (body) => {
  return http({
    url: `/posts/${body.postId}/comments`,
    method: 'POST',
    body
  }).pipe(
    map((res) => res)
  )
}

const updateComment = (body) => {
  return http({
    url: `/comments/${id}`,
    method: 'PATCH',
    body
  }).pipe(
    map((res) => res)
  )
}

const postService = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  getPostComments,
  addComment,
  updateComment,
  updatePost
}

export default postService
