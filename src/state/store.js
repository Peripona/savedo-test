import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import loggerMiddleware from './middleware/logger';

// https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819
// Passing basename prop to the history for gh-pages deployment
const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancer = applyMiddleware(
  routerMiddleware(history),
  loggerMiddleware,
  thunk,
);

const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(middlewareEnhancer),
);

export { store, history };
