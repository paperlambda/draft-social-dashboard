import {ofType} from "redux-observable";
import { of } from 'rxjs'
import {switchMap, map, catchError} from "rxjs/operators";
import {postsGetFAction, postsGetRAction} from "../actions/postActions";
import {POST_GET} from "../actions/actionTypes";
import postService from "@/services/postService";

const getPostsEpic = (action$) => {
  return action$.pipe(
    ofType(POST_GET),
    switchMap(() => {
      return postService.getPosts().pipe(
        map((res) => postsGetFAction(res)),
        catchError((err) => of(postsGetRAction(err)))
      )
    })
  )
}

export {
  getPostsEpic
}
