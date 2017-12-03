import { getTvShowById } from "../api";
import {
  tvShowRequest,
  tvShowSuccess,
  tvShowFailure
} from "../actions/tvShows";

export default store => next => action => {
  const result = next(action);

  if (action.type === tvShowRequest.toString()) {
    getTvShowById(action.payload)
      .then(data => store.dispatch(tvShowSuccess(data)))
      .catch(error => store.dispatch(tvShowFailure(error)));
  }

  return result;
};
