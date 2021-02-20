export const types = {
  EXPENDITURE: {
    REQUEST: '@expenditure/EXPENDITURE_REQUEST',
    SUCCESS: '@expenditure/EXPENDITURE_SUCCESS',
    FAILURE: '@expenditure/EXPENDITURE_FAILURE',
  },
};

export const submitExpenditureRequest = (data, token, shippingDay) => ({
  type: types.EXPENDITURE.REQUEST,
  payload: { data, token, shippingDay },
});

export const submitExpenditureSuccess = () => ({
  type: types.EXPENDITURE.SUCCESS,
});

export const submitExpenditureFailure = () => ({
  type: types.EXPENDITURE.FAILURE,
});
