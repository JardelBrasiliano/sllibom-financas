import { types } from './actions';

const INITIAL_STATE = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: null,
};

const expenditure = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        error: false,
        token: null,
        user: '',
      };
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    default:
      return state;
  }
};

export default expenditure;
