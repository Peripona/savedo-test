import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import issuesReducer from './issues/reducer';
import detailsReducer from './details/reducer';

const rootReducer = history =>
  combineReducers({
    issues: issuesReducer,
    details: detailsReducer,
    router: connectRouter(history),
  });

export default rootReducer;
