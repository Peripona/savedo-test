import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import loggerMiddleware from './middleware/logger';

const history = createBrowserHistory();

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
