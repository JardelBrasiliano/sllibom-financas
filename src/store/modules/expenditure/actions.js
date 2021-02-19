export const types = {
  EXPENDITURE: {
    REQUEST: '@auth/SIGN_IN_REQUEST',
    SUCCESS: '@auth/SIGN_IN_SUCCESS',
    FAILURE: '@auth/SIGN_IN_FAILURE',
  },
};

export const submitExpenditureRequest = (data) => ({
  type: types.EXPENDITURE.REQUEST,
  payload: { data },
});

export const submitExpenditureSuccess = () => ({
  type: types.EXPENDITURE.SUCCESS,
});

export const submitExpenditureFailure = () => ({
  type: types.EXPENDITURE.FAILURE,
});
