/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeExpenditureRequest } from '../../../../../store/modules/expenditure/actions';
import { removeRecipeRequest } from '../../../../../store/modules/recipe/actions';

import { DeleteOutlineOutlined, TrendingUpOutlined , TrendingDownOutlined } from '@material-ui/icons';

import { RecordTitle, RecordItems } from './style';

const RecordList = ({ searchResult, updateList }) => {
  const { token } = useSelector((state) => state.auth);
  
  const dispach = useDispatch();
  const removeItem = (item) => {
    
    switch (item.type) {
      case 'Despesas':
        dispach(removeExpenditureRequest(item, token));
        updateList();
        break;
      case 'Receita':
        dispach(removeRecipeRequest(item, token));
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
          <li>{item.type[0] === 'R' ? <TrendingUpOutlined style={{ color: '#4caf50' }} /> : <TrendingDownOutlined color='error'/>}</li>
          <li>{item.postDay}</li>
          <li>{item.wasPaid ? 'sim' : 'não'}</li>
          <li>{item.paidDay}</li>
          <li>{item.tag}</li>
          <li>R$ {item.value}</li>
          <li>
            <button type='button' onClick={() => removeItem(item)}>
              <DeleteOutlineOutlined color='error' />
            </button>
          </li>
        </RecordItems>
      ))}
    </>
  );
};
export default RecordList;
