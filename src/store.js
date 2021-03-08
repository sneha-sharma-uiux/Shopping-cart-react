import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import apireducers from "./store/reducers/api";
import cartreducers from "./store/reducers/cart";
import filterreducers from "./store/reducers/filterProduct";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);
const rootReducer = combineReducers({
  api: apireducers,
  cart: cartreducers,
  filter: filterreducers,
  form: formReducer,
  router: connectRouter(history)
});

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

export default store;
