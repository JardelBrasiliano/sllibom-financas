import { types } from './actions';

const INITIAL_STATE = {
  loadingSubmitRequest: false,
  sent: false,
  error: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EXPENDITURE.REQUEST:
      return {
        ...state,
        loadingSubmitRequest: true,
      };
    case types.EXPENDITURE.SUCCESS:
      return {
        ...state,
        loadingSubmitRequest: false,
        sent: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.EXPENDITURE.FAILURE:
      return {
        ...state,
        loadingSubmitRequest: false,
        error: true,
      };
    default:
      return state;
  }
};

export default auth;
