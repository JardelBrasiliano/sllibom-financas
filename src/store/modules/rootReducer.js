import { combineReducers } from 'redux';

import auth from './auth/redurcer';
import register from './register/redurcer';
// import despesas from './despesas/redurcer';
// import receitas from './receitas';

export default combineReducers({
  auth,
  register,
  // despesas,
  // receitas,
});
