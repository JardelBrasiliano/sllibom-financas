import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';

import {
  dayBefore,
  extentDate,
  dataTodayFormatWithBar,
} from '../../../utils/date';

import rsf from '../../../services/configFirebase';

export function* sendRecipe({ payload }) {
  try {
    const { data, token, shippingDay } = payload;

    const newShippingDay = shippingDay.split('/').join('-');
    const { extMonth, extYear } = extentDate(shippingDay);

    // Verifica de foi Recebido
    if (data.wasPaid) {
      // Levar o valor do dia completo
      yield call(
        rsf.firestore.addDocument,
        `recipe/${token}/received/${extYear}/days/${newShippingDay}/values`,
        {
          data,
        },
      );
      // pegando o valor total do dia
      const snapshotDay = yield call(
        rsf.firestore.getDocument,
        `recipe/${token}/received/${extYear}/days/${newShippingDay}`,
      );
      if (snapshotDay.data()) {
        // Novo valor somado
        const currentDay = snapshotDay.data().total || 0;
        const totalDay = currentDay + +data.value;
        // Atualizando valor
        yield call(
          rsf.firestore.setDocument,
          `recipe/${token}/received/${extYear}/days/${newShippingDay}`,
          { total: totalDay },
        );
      } else {
        yield call(
          rsf.firestore.setDocument,
          `recipe/${token}/received/${extYear}/days/${newShippingDay}`,
          { total: data.value },
        );
      }
      // ATUALIZA O TOTAL DO MES
      // Pega as informaçoes sobre o mes da data
      const snapshotMonth = yield call(
        rsf.firestore.getDocument,
        `recipe/${token}/received/${extYear}/month/${extMonth}`,
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
          `recipe/${token}/received/${extYear}/month/${extMonth}`,
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
          `recipe/${token}/lack/${extYear}/month/${extMonth}`,
          {
            total: data.value,
            tag,
          },
        );
      }
    } else {
      // Cria um arquivo caso nao exista
      console.log('o2');
      yield call(
        rsf.firestore.addDocument,
        `recipe/${token}/lack/${extYear}/days/${newShippingDay}/values`,
        {
          data,
        },
      );
    }

    yield put(actions.submitRecipeSuccess());
  } catch (error) {
    put(actions.submitRecipeFailure());
  }
}

export function* searchRecipe({ payload }) {
  try {
    const { filter, token } = payload;
    const listBefore7Day = [];

    for (let index = 0; index < +filter - 1; index += 1) {
      const searchDay = dayBefore(index).split('/').join('-');
      const { extYear } = extentDate(searchDay);

      const snapshot = yield call(
        rsf.firestore.getCollection,
        `/recipe/${token}/received/${extYear}/days/${searchDay}/values`,
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
    put(actions.searchRecipeFailure());
  }
}

export function* searchGraphsRecipe({ payload }) {
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

    let currentListTag = {};
    const snapshot = yield call(
      rsf.firestore.getCollection,
      `/recipe/${token}/received/${extYear}/month`,
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
        `/recipe/${token}/received/${extYear}/days/${searchDay}`,
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
      actions.searchGraphsRecipeSuccess(
        listBefore7Day,
        listMonth,
        currentListTag,
      ),
    );
  } catch (error) {
    yield put(actions.searchGraphsRecipeFailure());
  }
}

export function* removeRecipe({ payload }) {
  try {
    const { id, value, currentTag, wasPaid, token, date } = payload;
    const { extMonth, extYear } = extentDate(date);
    const situation = wasPaid ? 'received' : 'lack';

    yield call(
      rsf.firestore.deleteDocument,
      `/recipe/${token}/${situation}/${extYear}/days/${date}/values/${id}`,
    );

    // ATUALIZA O TOTAL DO MES
    // pegando o valor total do dia
    const snapshotDay = yield call(
      rsf.firestore.getDocument,
      `recipe/${token}/${situation}/${extYear}/days/${date}`,
    );
    // verifica de o valor exite
    // Novo valor somado
    const currentDay = snapshotDay.data().total || 0;
    const totalDay = currentDay - value;
    // Atualizando valor
    yield call(
      rsf.firestore.setDocument,
      `recipe/${token}/${situation}/${extYear}/days/${date}`,
      { total: totalDay },
    );

    // ATUALIZA O TOTAL DO MES
    // Pega as informaçoes sobre o mes da data
    const snapshotMonth = yield call(
      rsf.firestore.getDocument,
      `recipe/${token}/${situation}/${extYear}/month/${extMonth}`,
    );
    const currentMonth = snapshotMonth.data().total || 0;
    const sumMonth = currentMonth - value;

    // Passa as tags para uma variavel e depois verifica soma com o valor da tag atual;
    const allTag = snapshotMonth.data().tag;
    allTag[`${currentTag}`] = snapshotMonth.data().tag[`${currentTag}`] - value;
    const tag = allTag; // Novo valor somado

    // Atualiza as informações
    yield call(
      rsf.firestore.setDocument,
      `recipe/${token}/${situation}/${extYear}/month/${extMonth}`,
      {
        total: sumMonth,
        tag,
      },
    );
    yield put(actions.removeRecipeSuccess());
  } catch (error) {
    yield put(actions.removeRecipeFailure());
  }
}
export default all([
  takeLatest('@recipe/RECIPE_SUBMIT_REQUEST', sendRecipe),
  takeLatest('@recipe/RECIPE_SEARCH_REQUEST', searchRecipe),
  takeLatest('@recipe/RECIPE_SEARCH_GRAPHS_REQUEST', searchGraphsRecipe),
  takeLatest('@recipe/RECIPE_REMOVE_REQUEST', removeRecipe),
]);
