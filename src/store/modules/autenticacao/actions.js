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

export function Sair() {
  return {
    type: types.LOGOUT.SUCCESS,
  };
}

export function EntrarEmEspera(email, senha) {
  return {
    type: types.LOGIN.REQUEST,
    payload: { email, senha },
  };
}

export function EntrarSucesso(token, user) {
  return {
    type: types.LOGIN.SUCCESS,
    payload: { token, user },
  };
}

export function EntrarErro() {
  return {
    type: types.LOGIN.FAILURE,
  };
}
