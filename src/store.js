import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import tvShowMiddleware from "./middlewares/tvShowMiddleware";
import searchMiddleware from "./middlewares/searchMiddleware";

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(searchMiddleware, tvShowMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
