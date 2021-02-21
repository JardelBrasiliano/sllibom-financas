import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import { dayBefore, extentDate } from '../../../utils/date';

import rsf from '../../../services/configFirebase';

export function* sendExpenses({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newShippingDay = shippingDay.split('/').join('-');
    const { extMonth, extYear } = extentDate(shippingDay);

    // Verifica de foi Recebido
    if (shippingDay) {
      // Levar o valor do dia completo
      yield call(
        rsf.firestore.addDocument,
        `expenditure/${token}/paid/${extYear}/days/${newShippingDay}/values`,
        {
          data,
        },
      );
      // pegando o valor total do dia
      const snapshotDay = yield call(
        rsf.firestore.getDocument,
        `expenditure/${token}/paid/${extYear}/days/${newShippingDay}`,
      );
      // verifica de o valor exite
      if (snapshotDay.data()) {
        // Novo valor somado
        const currentDay = snapshotDay.data().total || 0;
        const totalDay = currentDay + +data.value;
        // Atualizando valor
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/days/${newShippingDay}`,
          { total: totalDay },
        );
      } else {
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/days/${newShippingDay}`,
          { total: data.value },
        );
      }
      // ATUALIZA O TOTAL DO MES
      // Pega as informaçoes sobre o mes da data
      const snapshotMonth = yield call(
        rsf.firestore.getDocument,
        `expenditure/${token}/paid/${extYear}/month/${extMonth}`,
      );
      // verifica de o valor exite
      if (snapshotMonth.data()) {
        // Declara o valor total e depois soma
        const currentMonth = snapshotMonth.data().total || 0;
        const sumMonth = currentMonth + +data.value;

        // Passa as tags para uma variavel e depois verifica soma com o valor da tag atual;
        const allTag = snapshotMonth.data().tag;
        allTag[`${data.tag}`] =
          snapshotMonth.data().tag[`${data.tag}`] + +data.value;
        const tag = allTag; // Novo valor somado

        // Atualiza as informações
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/month/${extMonth}`,
          {
            total: sumMonth,
            tag,
          },
        );
      } else {
        const allTag = {
          Alimentação: 0,
          Educação: 0,
          Lazer: 0,
          Moradia: 0,
          Pagamento: 0,
          Roupa: 0,
          Saúde: 0,
          Transporte: 0,
        };
        // Novo valor somado
        allTag[`${data.tag}`] = +data.value;
        const tag = allTag;
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/month/${extMonth}`,
          {
            total: data.value,
            tag,
          },
        );
      }
    } else {
      // Cria um arquivo caso nao exista
      yield call(
        rsf.firestore.addDocument,
        `expenditure/${token}/lack/${extYear}/days/${newShippingDay}/values`,
        {
          data,
        },
      );
    }

    yield put(actions.submitExpenditureSuccess());
  } catch (error) {
    yield put(actions.submitExpenditureFailure());
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
