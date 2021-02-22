import { types } from './actions';

const INITIAL_STATE = {
  loadingregRisterRequest: false,
  error: false,
  success: false,
};
const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTER.REQUEST:
      return {
        ...state,
        loadingregRisterRequest: true,
        error: false,
        success: false,
      };
    case types.REGISTER.SUCCESS:
      return {
        ...state,
        loadingregRisterRequest: false,
        error: false,
        success: true,
      };
    case types.REGISTER.FAILURE:
      return {
        ...state,
        loadingregRisterRequest: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};

export default register;
