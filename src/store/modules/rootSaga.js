import { all } from 'redux-saga/effects';

import autenticacao from './autenticacao/sagas';
import despesas from './despesas/sagas';
import receitas from './receitas/sagas';

export default function* rootSaga() {
  return yield all([autenticacao, despesas, receitas]);
}