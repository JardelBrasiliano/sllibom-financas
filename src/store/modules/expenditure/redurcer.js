import { types } from './actions';

const INITIAL_STATE = {
  loadingSubmitRequest: false,
  loadingSearchExpenditureRequest: false,
  loadingRemoveExpenditureRequest: false,
  listExpenditure: [],
  sentExpenditure: false,
  error: false,
};

const expenditure = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EXPENDITURE_SUBMIT.REQUEST:
      return {
        ...state,
        loadingSubmitRequest: true,
      };
    case types.EXPENDITURE_SUBMIT.SUCCESS:
      return {
        ...state,
        loadingSubmitRequest: false,
        sent: true,
      };
    case types.EXPENDITURE_SUBMIT.FAILURE:
      return {
        ...state,
        loadingSubmitRequest: false,
        error: true,
      };
    // SEARCH
    case types.EXPENDITURE_SEARCH.REQUEST:
      return {
        ...state,
        loadingSearchExpenditureRequest: true,
      };
    case types.EXPENDITURE_SEARCH.SUCCESS:
      return {
        ...state,
        loadingSearchExpenditureRequest: false,
        listExpenditure: action.payload.list,
        sentExpenditure: true,
      };
    case types.EXPENDITURE_SEARCH.FAILURE:
      return {
        ...state,
        loadingSearchExpenditureRequest: false,
        error: true,
      };
    // REMOVE
    case types.EXPENDITURE_REMOVE.REQUEST:
      return {
        ...state,
        loadingRemoveExpenditureRequest: true,
      };
    case types.EXPENDITURE_REMOVE.SUCCESS:
      return {
        ...state,
        loadingRemoveExpenditureRequest: false,
      };
    case types.EXPENDITURE_REMOVE.FAILURE:
      return {
        ...state,
        loadingRemoveExpenditureRequest: false,
        error: true,
      };

    default:
      return state;
  }
};

export default expenditure;
