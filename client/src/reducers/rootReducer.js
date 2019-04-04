import { combineReducers } from "redux";
import porfolio from "./porfolio";
import getItem from "./getItem";

const rootReducer = combineReducers({
  porfolio,
  getItem
});
export default rootReducer;
