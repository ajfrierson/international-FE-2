import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
