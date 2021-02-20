import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import { dayBefore } from '../../../utils/date';

import rsf from '../../../services/configFirebase';

export function* sendExpenses({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newShippingDay = shippingDay.split('/').join('-');

    yield call(
      rsf.firestore.addDocument,
      `expenditure/${token}/date/days/${newShippingDay}`,
      {
        data,
      },
    );

    yield put(actions.submitExpenditureSuccess());
  } catch (error) {
    actions.submitExpenditureFailure();
  }
}

export function* searchExpenses({ payload }) {
  try {
    const { filter, token } = payload;
    const listBefore7Day = [];

    for (let index = 0; index < +filter - 1; index += 1) {
      const searchDay = dayBefore(index).split('/').join('-');

      const snapshot = yield call(
        rsf.firestore.getCollection,
        `expenditure/${token}/date/days/${searchDay}`,
      );

      snapshot.forEach((user) => {
        const recipe = {
          ...user.data().data,
          postDay: dayBefore(index),
          id: user.id,
          type: 'Despesas',
        };
        listBefore7Day.push(recipe);
      });
    }

    yield put(actions.searchExpenditureSuccess(listBefore7Day));
  } catch (error) {
    actions.searchExpenditureFailure();
  }
}

export function* removeExpenses({ payload }) {
  try {
    const { id, token, date } = payload;

    yield call(
      rsf.firestore.deleteDocument,
      `/expenditure/${token}/date/days/${date}/${id}`,
    );
    yield put(actions.removeExpenditureSuccess());
  } catch (error) {
    yield put(actions.removeExpenditureFailure());
  }
}
export default all([
  takeLatest('@expenditure/EXPENDITURE_SUBMIT_REQUEST', sendExpenses),
  takeLatest('@expenditure/EXPENDITURE_SEARCH_REQUEST', searchExpenses),
  takeLatest('@expenditure/EXPENDITURE_REMOVE_REQUEST', removeExpenses),
]);
