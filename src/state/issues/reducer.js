import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_FAILED,
  ISSUE_SELECTED,
} from './actions';

const defaultState = {
  fetching: false,
  data: null,
  fetchError: false,
};

const selectedIssueDetails = (issues, issueId) =>
  issues.find(issue => issue.number === issueId);

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      const { page } = action;
      return { ...state, page, fetching: true, data: null, fetchError: false };
    case SEARCH_REQUEST_SUCCESS:
      const { data } = action;
      return { ...state, data, fetching: false };
    case SEARCH_REQUEST_FAILED:
      return { ...state, fetching: false, fetchError: true };
    case ISSUE_SELECTED:
      return {
        ...state,
        selected: selectedIssueDetails(state.data, action.issueId),
      };
    default:
      return state;
  }
};
