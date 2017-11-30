import { tvShow } from "../api";
import { showsRequest, showsSuccess, showsFailure } from "../actions/tvShows";

export default store => next => action => {
  const result = next(action);

  if (action.type === showsRequest.toString()) {
    tvShow(action.payload)
      .then(data => store.dispatch(showsSuccess(data)))
      .catch(error => store.dispatch(showsFailure(error)));
  }

  return result;
};
