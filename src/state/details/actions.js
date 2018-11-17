import { fetchFromGithub } from '../../util/fetch';

export const DETAILS_REQUEST = 'DETAILS_REQUEST';
export const DETAILS_REQUEST_SUCCESS = 'DETAILS_REQUEST_SUCCESS';
export const DETAILS_REQUEST_FAILED = 'DETAILS_REQUEST_FAILED';

export const detailsRequest = params => dispatch => {
  const { url } = params;
  dispatch({
    type: DETAILS_REQUEST,
  });
  return fetchFromGithub({
    url,
  })
    .then(data => {
      dispatch({ type: DETAILS_REQUEST_SUCCESS, data });
    })
    .catch(() => {
      dispatch({ type: DETAILS_REQUEST_FAILED });
    });
};
