import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import issuesReducer from './issues/reducer';

const rootReducer = history =>
  combineReducers({
    issues: issuesReducer,
    router: connectRouter(history),
  });

export default rootReducer;
