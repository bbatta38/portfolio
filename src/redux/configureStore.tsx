import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const env = process.env.NODE_ENV;

const middlewares = [thunk];

const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(...middlewares));

export { history };

export default store;
