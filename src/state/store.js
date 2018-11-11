import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import loggerMiddleware from './middleware/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancer = applyMiddleware(loggerMiddleware);

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(middlewareEnhancer),
);
