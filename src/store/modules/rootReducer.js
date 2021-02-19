import { combineReducers } from 'redux';

import autenticacao from './autenticacao/redurcer';
import cadastro from './cadastro/redurcer';
// import despesas from './despesas/redurcer';
// import receitas from './receitas';

export default combineReducers({
  autenticacao,
  cadastro,
  // despesas,
  // receitas,
});
