import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import { dayBefore } from '../../../utils/date';

import rsf from '../../../services/configFirebase';

export function* sendRecipe({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newShippingDay = shippingDay.split('/').join('-');

    yield call(
      rsf.firestore.addDocument,
      `recipe/${token}/date/days/${newShippingDay}`,
      {
        data,
      },
    );

    yield put(actions.submitRecipeSuccess());
  } catch (error) {
    actions.submitRecipeFailure();
  }
}

export function* searchRecipe({ payload }) {
  try {
    const { filter, token } = payload;
    const listBefore7Day = [];

    for (let index = 0; index < +filter - 1; index += 1) {
      const searchDay = dayBefore(index).split('/').join('-');

      const snapshot = yield call(
        rsf.firestore.getCollection,
        `recipe/${token}/date/days/${searchDay}`,
      );

      snapshot.forEach((user) => {
        const recipe = {
          ...user.data().data,
          postDay: dayBefore(index),
          id: user.id,
          type: 'Receita',
        };
        listBefore7Day.push(recipe);
      });
    }

    yield put(actions.searchRecipeSuccess(listBefore7Day));
  } catch (error) {
    actions.searchRecipeFailure();
  }
}

export function* removeRecipe({ payload }) {
  try {
    const { id, token, date } = payload;

    yield call(
      rsf.firestore.deleteDocument,
      `/recipe/${token}/date/days/${date}/${id}`,
    );
    yield put(actions.removeRecipeSuccess());
  } catch (error) {
    yield put(actions.removeRecipeFailure());
  }
}
export default all([
  takeLatest('@recipe/RECIPE_SUBMIT_REQUEST', sendRecipe),
  takeLatest('@recipe/RECIPE_SEARCH_REQUEST', searchRecipe),
  takeLatest('@recipe/RECIPE_REMOVE_REQUEST', removeRecipe),
]);
