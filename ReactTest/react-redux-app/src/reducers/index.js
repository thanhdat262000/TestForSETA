import { combineReducers } from "redux";
import { postReducer } from "./posts.js";
export const rootReducer = combineReducers({
  postReducer,
});
