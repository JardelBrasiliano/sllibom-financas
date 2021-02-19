import { types } from './actions';

const INITIAL_STATE = {
  loadingregisterRequest: false,
  error: false,
};
const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTER.REQUEST:
      return {
        ...state,
        loadingregisterRequest: true,
      };
    case types.REGISTER.SUCCESS:
      return {
        ...state,
        loadingregisterRequest: false,
      };
    case types.REGISTER.FAILURE:
      return {
        ...state,
        loadingregisterRequest: false,
        error: true,
      };
    default:
      return state;
  }
};

export default register;
