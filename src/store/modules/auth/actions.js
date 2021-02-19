export const types = {
  LOGIN: {
    REQUEST: '@auth/SIGN_IN_REQUEST',
    SUCCESS: '@auth/SIGN_IN_SUCCESS',
    FAILURE: '@auth/SIGN_IN_FAILURE',
  },
  LOGOUT: {
    SUCCESS: '@auth/LOG_OUT',
  },
};

export const logOut = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const signInRequest = (email, password) => ({
  type: types.LOGIN.REQUEST,
  payload: { email, password },
});

export const signInSuccess = (token, user) => ({
  type: types.LOGIN.SUCCESS,
  payload: { token, user },
});

export const signInFailure = () => ({
  type: types.LOGIN.FAILURE,
});
