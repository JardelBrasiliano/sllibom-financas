export const types = {
  EXPENDITURE_SUBMIT: {
    REQUEST: '@expenditure/EXPENDITURE_SUBMIT_REQUEST',
    SUCCESS: '@expenditure/EXPENDITURE_SUBMIT_SUCCESS',
    FAILURE: '@expenditure/EXPENDITURE_SUBMIT_FAILURE',
  },
  EXPENDITURE_SEARCH: {
    REQUEST: '@expenditure/EXPENDITURE_SEARCH_REQUEST',
    SUCCESS: '@expenditure/EXPENDITURE_SEARCH_SUCCESS',
    FAILURE: '@expenditure/EXPENDITURE_SEARCH_FAILURE',
  },
  EXPENDITURE_SEARCH_GRAPHS: {
    REQUEST: '@expenditure/EXPENDITURE_SEARCH_GRAPHS_REQUEST',
    SUCCESS: '@expenditure/EXPENDITURE_SEARCH_GRAPHS_SUCCESS',
    FAILURE: '@expenditure/EXPENDITURE_SEARCH_GRAPHS_FAILURE',
  },
  EXPENDITURE_REMOVE: {
    REQUEST: '@expenditure/EXPENDITURE_REMOVE_REQUEST',
    SUCCESS: '@expenditure/EXPENDITURE_REMOVE_SUCCESS',
    FAILURE: '@expenditure/EXPENDITURE_REMOVE_FAILURE',
  },
};
// SUBMIT
export const submitExpenditureRequest = (data, token, shippingDay) => ({
  type: types.EXPENDITURE_SUBMIT.REQUEST,
  payload: { data, token, shippingDay },
});
export const submitExpenditureSuccess = () => ({
  type: types.EXPENDITURE_SUBMIT.SUCCESS,
});
export const submitExpenditureFailure = () => ({
  type: types.EXPENDITURE_SUBMIT.FAILURE,
});
// SEARCH
export const searchExpenditureRequest = (filter, token) => ({
  type: types.EXPENDITURE_SEARCH.REQUEST,
  payload: { filter, token },
});
export const searchExpenditureSuccess = (list) => ({
  type: types.EXPENDITURE_SEARCH.SUCCESS,
  payload: { list },
});
export const searchExpenditureFailure = () => ({
  type: types.EXPENDITURE_SEARCH.FAILURE,
});
// SEARCH GRAPHS
export const searchGraphsExpenditureRequest = (token) => ({
  type: types.EXPENDITURE_SEARCH_GRAPHS.REQUEST,
  payload: { token },
});
export const searchGraphsExpenditureSuccess = (listLine, listBar, Listpie) => ({
  type: types.EXPENDITURE_SEARCH_GRAPHS.SUCCESS,
  payload: { listLine, listBar, Listpie },
});
export const searchGraphsExpenditureFailure = () => ({
  type: types.EXPENDITURE_SEARCH_GRAPHS.FAILURE,
});
// REMOVE
export const removeExpenditureRequest = (
  id,
  value,
  currentTag,
  wasPaid,
  token,
  date,
) => ({
  type: types.EXPENDITURE_REMOVE.REQUEST,
  payload: { id, value, currentTag, token, date },
});

export const removeExpenditureSuccess = () => ({
  type: types.EXPENDITURE_REMOVE.SUCCESS,
});

export const removeExpenditureFailure = () => ({
  type: types.EXPENDITURE_REMOVE.FAILURE,
});
