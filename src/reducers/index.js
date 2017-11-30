import { combineReducers } from "redux";
import search from "./search";
import tvShows from "./tvShows";

export default combineReducers({
  search,
  tvShows
});
