import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { removeExpenditureRequest } from '../../store/modules/expenditure/actions';
import { removeRecipeRequest } from '../../store/modules/recipe/actions';

import { RecordTitle, RecordItems } from './style';

const RecordList = ({ searchResult, updateList }) => {
  const { token } = useSelector((state) => state.auth);

  const dispach = useDispatch();

  const removeItem = (item) => {
    const date = item.postDay.split('/').join('-');

    switch (item.type) {
      case 'Despesas':
        dispach(removeExpenditureRequest(item.id, token, date));
        updateList();
        break;
      case 'Receita':
        dispach(removeRecipeRequest(item.id, token, date));
        updateList();
        break;

      default:
        break;
    }
  };
  return (
    <>
      <RecordTitle>
        <li>tipo</li>
        <li>dia postado</li>
        <li>pago</li>
        <li>dia pago</li>
        <li>tag</li>
        <li>valor</li>
        <li>-</li>
      </RecordTitle>
      {searchResult.map((item) => (
        <RecordItems key={item.id}>
          <li>{item.type[0]}</li>
          <li>{item.postDay}</li>
          <li>{item.wasPaind ? 'sim' : 'não'}</li>
          <li>{item.paidDay}</li>
          <li>{item.tag}</li>
          <li>R$ {item.value}</li>
          <li>
            <button type="button" onClick={() => removeItem(item)}>
              Exluir
            </button>
          </li>
        </RecordItems>
      ))}
    </>
  );
};
// description: "teate1"
// id: "XR512g5Lk8u0R7tFz8pF"
// paidDay: "17/08/2021"
// postDay: "20/01/2021"
// tag: "Roupa"
// type: "Receita"
// value: "110"
// wasPaid: true
RecordList.propTypes = {
  searchResult: PropTypes.arrayOf.isRequired,
  updateList: PropTypes.arrayOf.isRequired,
};

export default RecordList;