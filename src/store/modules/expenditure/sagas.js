import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import rsf from '../../../services/configFirebase';

export function* sendExpenses({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newShippingDay = shippingDay.split('/').join('-');

    yield call(
      rsf.firestore.setDocument,
      `expenditure/${token}/dates/${newShippingDay}`,
      {
        data,
      },
    );

    yield put(actions.submitExpenditureSuccess());
  } catch (error) {
    actions.submitExpenditureFailure();
  }
}
export default all([
  takeLatest('@expenditure/EXPENDITURE_REQUEST', sendExpenses),
]);
