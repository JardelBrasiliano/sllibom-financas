import { combineReducers } from 'redux';

import autenticacao from './autenticacao';
import despesas from './despesas';
import receitas from './receitas';

export default combineReducers({
  autenticacao,
  despesas,
  receitas,
})