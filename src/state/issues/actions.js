import { fetchGithubIssues } from '../../util/fetch';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAILED = 'SEARCH_REQUEST_FAILED';

export const searchRequest = params => dispatch => {
  const { url } = params;
  dispatch({
    type: SEARCH_REQUEST,
  });
  return fetchGithubIssues({
    url,
  })
    .then(data => {
      dispatch({ type: SEARCH_REQUEST_SUCCESS, data });
    })
    .catch(() => {
      dispatch({ type: SEARCH_REQUEST_FAILED });
    });
};
