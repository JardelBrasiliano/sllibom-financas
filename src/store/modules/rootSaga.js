import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import register from './register/sagas';
import expenditure from './expenditure/sagas';
import recipe from './recipe/sagas';

export default function* rootSaga() {
  return yield all([auth, register, expenditure, recipe]);
}
