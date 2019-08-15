import { combineEpics } from "redux-observable";
import {getUsersEpic} from "./userEpics";
import {getPostsEpic} from "@/store/epics/postEpics";

export default combineEpics(
  getUsersEpic,
  getPostsEpic
)
