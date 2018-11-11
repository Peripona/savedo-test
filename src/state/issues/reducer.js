import { FETCH_ISSUES } from './actions';
const initialState = {
  data: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
