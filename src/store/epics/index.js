import { combineEpics } from "redux-observable";
import {getUsersEpic} from "./userEpics";

export default combineEpics(
  getUsersEpic
)
