import { combineReducers } from "redux";
import search from "./search";
import tvShow from "./tvShow";

export default combineReducers({
  search,
  tvShow
});
