import { handleActions } from "redux-actions";
import {
  tvShowRequest,
  tvShowSuccess,
  tvShowFailure
} from "../actions/tvShows";

const initialState = {
  data: {},
  isFetching: true,
  error: null
};

export default handleActions(
  {
    [tvShowRequest]: state => ({ ...state, isFetching: true }),

    [tvShowSuccess]: (state, action) => ({
      ...state,
      data: action.payload,
      isFetching: false
    }),

    [tvShowFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error
    })
  },
  initialState
);
