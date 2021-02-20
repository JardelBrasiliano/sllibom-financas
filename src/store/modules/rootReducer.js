import { combineReducers } from 'redux';

import auth from './auth/redurcer';
import register from './register/redurcer';
import expenditure from './expenditure/redurcer';
import recipe from './recipe/redurcer';

export default combineReducers({
  auth,
  register,
  expenditure,
  recipe,
});
