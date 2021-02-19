import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import register from './register/sagas';
// import despesas from './despesas/sagas';
// import receitas from './receitas/sagas';

export default function* rootSaga() {
  return yield all([auth, register]);
}
