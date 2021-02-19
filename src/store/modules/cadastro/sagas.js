import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* novoCadastroComEmailESenha({ payload }) {
  try {
    const { email, senha } = payload;

    yield call(rsf.auth.createUserWithEmailAndPassword, email, senha);

    yield actions.cadastrarSucesso();
  } catch (err) {
    yield put(actions.cadastrarErro());
  }
}

export default all([
  takeLatest('@register/REGISTER_REQUEST', novoCadastroComEmailESenha),
]);
