export const types = {
  REGISTER: {
    REQUEST: '@register/REGISTER_REQUEST',
    SUCCESS: '@register/REGISTER_SUCCESS',
    FAILURE: '@register/REGISTER_FAILURE',
  },
};

export const registerRequest = (name, email, password) => ({
  type: types.REGISTER.REQUEST,
  payload: { name, email, password },
});

export const registerSuccess = () => ({
  type: types.REGISTER.SUCCESS,
});
export const registerFailure = () => ({
  type: types.REGISTER.FAILURE,
});
