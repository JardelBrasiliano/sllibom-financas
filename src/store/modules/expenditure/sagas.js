import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import {
  dayBefore,
  extentDate,
  dataTodayFormatWithBar,
} from '../../../utils/date';

import rsf from '../../../services/configFirebase';

export function* sendExpenses({ payload }) {
  try {
    const { data, token, shippingDay } = payload;
    const newDate = data.paidDay.split('/').join('-');

    const { extMonth, extYear } = extentDate(data.paidDay);
    // Verifica de foi Recebido
    if (data.wasPaid) {
      // Levar o valor do dia completo
      yield call(
        rsf.firestore.addDocument,
        `expenditure/${token}/paid/${extYear}/days/${newDate}/values`,
        {
          data,
          postDay: shippingDay,
        },
      );
      // pegando o valor total do dia
      const snapshotDay = yield call(
        rsf.firestore.getDocument,
        `expenditure/${token}/paid/${extYear}/days/${newDate}`,
      );
      // verifica de o valor exite
      if (snapshotDay.data()) {
        // Novo valor somado
        const currentDay = snapshotDay.data().total || 0;
        const totalDay = currentDay + +data.value;
        // Atualizando valor
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/days/${newDate}`,
          { total: totalDay },
        );
      } else {
        yield call(
          rsf.firestore.setDocument,
          `expenditure/${token}/paid/${extYear}/days/${newDate}`,
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
      const postDay = shippingDay.split('/').join('-');
      const { extYear: currentYear } = extentDate(shippingDay);

      yield call(
        rsf.firestore.addDocument,
        `expenditure/${token}/lack/${currentYear}/days/${postDay}/values`,
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
      const { extYear } = extentDate(searchDay);
      const snapshot = yield call(
        rsf.firestore.getCollection,
        `/expenditure/${token}/paid/${extYear}/days/${searchDay}/values`,
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
    put(actions.searchExpenditureFailure());
  }
}

export function* searchGraphsExpenses({ payload }) {
  try {
    const { token } = payload;

    const today = dataTodayFormatWithBar();
    const { extMonth, extYear } = extentDate(today);
    const listMonth = [
      'jan',
      'fev',
      'mar',
      'abr',
      'maio',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ];
    let currentListTag = [];
    const snapshot = yield call(
      rsf.firestore.getCollection,
      `/expenditure/${token}/paid/${extYear}/month`,
    );
    snapshot.forEach((user) => {
      const indexListMonth = listMonth.indexOf(user.id);
      if (indexListMonth) {
        listMonth[indexListMonth] = user.data().total;
      }
      if (user.id === extMonth) {
        currentListTag = user.data().tag;
      }
    });

    const listBefore7Day = [];

    for (let index = 0; index < +7; index += 1) {
      const searchDay = dayBefore(index).split('/').join('-');
      const { extDay } = extentDate(searchDay);
      const snapshotCallDays = yield call(
        rsf.firestore.getDocument,
        `/expenditure/${token}/paid/${extYear}/days/${searchDay}`,
      );
      if (snapshotCallDays.data()) {
        const recipe = {
          postDay: extDay,
          total: snapshotCallDays.data().total,
        };

        listBefore7Day.push(recipe);
      } else {
        const recipe = {
          postDay: extDay,
          total: 0,
        };

        listBefore7Day.push(recipe);
      }
    }
    yield put(
      actions.searchGraphsExpenditureSuccess(
        listBefore7Day,
        listMonth,
        currentListTag,
      ),
    );
  } catch (error) {
    yield put(actions.searchGraphsExpenditureFailure());
  }
}

export function* removeExpenses({ payload }) {
  try {
    const { item, token } = payload;
    const { extMonth: paindDayMonth, extYear: paindDayYear } = extentDate(
      item.paidDay,
    );
    const { extYear: postDayYear } = extentDate(item.postDay);

    const formtPaidDay = item.paidDay.split('/').join('-');
    const formtPostDay = item.postDay.split('/').join('-');

    const isPaid = `/expenditure/${token}/paid/${paindDayYear}/days/${formtPaidDay}/values/${item.id}`;
    const isLack = `/expenditure/${token}/lack/${postDayYear}/days/${formtPostDay}/values/${item.id}`;

    const isActual = item.wasPaid ? isPaid : isLack;

    yield call(rsf.firestore.deleteDocument, isActual);
    if (item.wasPaid) {
      // pegando o valor total do dia
      const snapshotDay = yield call(
        rsf.firestore.getDocument,
        `expenditure/${token}/paid/${paindDayYear}/days/${formtPaidDay}`,
      );
      // verifica de o valor exite
      // Novo valor somado
      const currentDay = snapshotDay.data().total || 0;
      const totalDay = currentDay - item.value;
      // Atualizando valor
      yield call(
        rsf.firestore.setDocument,
        `expenditure/${token}/paid/${paindDayYear}/days/${formtPaidDay}`,
        { total: totalDay },
      );
      // ATUALIZA O TOTAL DO MES
      // Pega as informaçoes sobre o mes da data
      const snapshotMonth = yield call(
        rsf.firestore.getDocument,
        `expenditure/${token}/paid/${paindDayYear}/month/${paindDayMonth}`,
      );
      const currentMonth = snapshotMonth.data().total || 0;
      const sumMonth = currentMonth - item.value;

      // Passa as tags para uma variavel e depois verifica soma com o valor da tag atual;
      const allTag = snapshotMonth.data().tag;
      allTag[`${item.tag}`] =
        snapshotMonth.data().tag[`${item.tag}`] - item.value;
      const tag = allTag; // Novo valor somado

      // Atualiza as informações
      yield call(
        rsf.firestore.setDocument,
        `expenditure/${token}/paid/${paindDayYear}/month/${paindDayMonth}`,
        {
          total: sumMonth,
          tag,
        },
      );
    }
    yield put(actions.removeExpenditureSuccess());
  } catch (error) {
    yield put(actions.removeExpenditureFailure());
  }
}
export default all([
  takeLatest('@expenditure/EXPENDITURE_SUBMIT_REQUEST', sendExpenses),
  takeLatest('@expenditure/EXPENDITURE_SEARCH_REQUEST', searchExpenses),
  takeLatest(
    '@expenditure/EXPENDITURE_SEARCH_GRAPHS_REQUEST',
    searchGraphsExpenses,
  ),
  takeLatest('@expenditure/EXPENDITURE_REMOVE_REQUEST', removeExpenses),
]);
