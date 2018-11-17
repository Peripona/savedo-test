import {
  DETAILS_REQUEST,
  DETAILS_REQUEST_FAILED,
  DETAILS_REQUEST_SUCCESS,
} from './actions';

const defaultState = {
  fetching: false,
  data: null,
  fetchError: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case DETAILS_REQUEST:
      const { page } = action;
      return { ...state, page, fetching: true, data: null, fetchError: false };
    case DETAILS_REQUEST_SUCCESS:
      const { data } = action;
      return { ...state, data, fetching: false };
    case DETAILS_REQUEST_FAILED:
      return { ...state, fetching: false, fetchError: true };
    default:
      return state;
  }
};
