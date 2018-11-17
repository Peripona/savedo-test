import { fetchFromGithub } from '../../util/fetch';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAILED = 'SEARCH_REQUEST_FAILED';
export const ISSUE_SELECTED = 'ISSUE_SELECTED';

export const selectIssue = issueId => dispatch => {
  dispatch({
    type: ISSUE_SELECTED,
    issueId,
  });
};

export const searchRequest = params => dispatch => {
  const { url } = params;
  dispatch({
    type: SEARCH_REQUEST,
  });
  return fetchFromGithub({
    url,
  })
    .then(data => {
      dispatch({ type: SEARCH_REQUEST_SUCCESS, data });
    })
    .catch(() => {
      dispatch({ type: SEARCH_REQUEST_FAILED });
    });
};
