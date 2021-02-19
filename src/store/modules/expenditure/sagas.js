import { takeLatest, all } from 'redux-saga/effects';
import * as actions from './actions';

// import rsf from '../../../services/configFirebase';

export function* sendExpenses({ payload }) {
  try {
    yield console.log(payload);
  } catch (error) {
    actions.signInFailure();
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', sendExpenses)]);
