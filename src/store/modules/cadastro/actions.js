export const types = {
  REGISTER: {
    REQUEST: '@register/REGISTER_REQUEST',
    SUCCESS: '@register/REGISTER_SUCCESS',
    FAILURE: '@register/REGISTER_FAILURE',
  },
};

export function cadastrarEmEspera(name, email, senha) {
  return {
    type: types.REGISTER.REQUEST,
    payload: { name, email, senha },
  };
}

export function cadastrarSucesso() {
  return {
    type: types.REGISTER.SUCCESS,
  };
}

export function cadastrarErro() {
  return {
    type: types.REGISTER.FAILURE,
  };
}
