import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* Entrar({ payload }) {
  try {
    const { email, senha } = payload;
    const { user } = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      senha,
    );
    yield put(actions.EntrarSucesso(user.uid, email));
  } catch (error) {
    actions.EntrarErro();
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', Entrar)]);
