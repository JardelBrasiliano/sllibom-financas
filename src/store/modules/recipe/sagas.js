import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* sendRecipe({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newShippingDay = shippingDay.split('/').join('-');
    console.log('recipe');
    yield call(
      rsf.firestore.setDocument,
      `recipe/${token}/dates/${newShippingDay}`,
      {
        data,
      },
    );

    yield put(actions.submitRecipeSuccess());
  } catch (error) {
    actions.submitRecipeFailure();
  }
}
export default all([takeLatest('@recipe/RECIPE_REQUEST', sendRecipe)]);
