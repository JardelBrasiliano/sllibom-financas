import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;
    const { user } = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password,
    );
    yield put(actions.signInSuccess(user.uid, email));
  } catch (error) {
    actions.signInFailure();
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
