import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* newRegistrationWithEmailPassword({ payload }) {
  try {
    const { name, email, password } = payload;

    const { user } = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password,
    );

    yield call(rsf.firestore.setDocument, `users/${user.uid}`, {
      name,
      email,
    });

    yield put(actions.registerSuccess());
  } catch (err) {
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest('@register/REGISTER_REQUEST', newRegistrationWithEmailPassword),
]);
