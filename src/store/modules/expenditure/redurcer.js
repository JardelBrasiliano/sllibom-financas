import { types } from './actions';

const INITIAL_STATE = {
  loadingSubmitRequest: false,
  sent: false,
  error: false,
};

const expenditure = (state = INITIAL_STATE, action) => {
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

export default expenditure;
