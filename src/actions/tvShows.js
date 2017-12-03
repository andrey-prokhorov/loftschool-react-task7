import { createActions } from "redux-actions";

export const { tvShowRequest, tvShowSuccess, tvShowFailure } = createActions(
  "TV_SHOW_REQUEST",
  "TV_SHOW_SUCCESS",
  "TV_SHOW_FAILURE"
);
