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

    const snapshot = yield call(rsf.firestore.getDocument, `users/${user.uid}`);
    const resUser = snapshot.data();

    const person = {
      name: resUser.name,
      email: resUser.email,
    };

    yield put(actions.signInSuccess(user.uid, person));
  } catch (error) {
    yield put(actions.signInFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
