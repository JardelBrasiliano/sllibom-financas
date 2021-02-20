import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

import InputTag from '../../../InputTag';

import { submitExpenditureRequest } from '../../../../store/modules/expenditure/actions';
import { submitRecipeRequest } from '../../../../store/modules/recipe/actions';

import { dataTodayFormatWithBar } from '../../../../utils/date';

import {
  ExpenditureOrRecipeContainer,
  ExpenditureOrRecipeContent,
  Value,
  WasPaid,
  GetDate,
  BtnSaveContainer,
  BtnSave,
  Description,
} from './style';

const ExpenditureOrRecipe = ({ setOpen, isRecipe, ...props }) => {
  const [title, setTitle] = useState('');

  const [value, setValue] = useState('');
  const [wasPaid, setWaspaid] = useState(true);
  const [today, setToday] = useState(false);
  const [anotherDate, setAnotherDate] = useState('');
  const [shippingDay, setShippingDay] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const { loadingSubmitRequest } = useSelector((state) => state.expenditure);
  const { loadingSubmitRecipeRequest } = useSelector((state) => state.recipe);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const sendExpenseToFirebase = () => {
    const date = today || anotherDate;
    const dateBaseExpenditure = {
      value,
      wasPaid,
      paidDay: date,
      description,
      tag,
    };

    dispatch(submitExpenditureRequest(dateBaseExpenditure, token, shippingDay));
  };

  const sendRecipeToFirebase = () => {
    const date = today || anotherDate;
    const dateBaseExpenditure = {
      value,
      wasPaid,
      paidDay: date,
      description,
      tag,
    };

    dispatch(submitRecipeRequest(dateBaseExpenditure, token, shippingDay));
  };

  const changeToday = () => {
    setAnotherDate('');
    setToday(shippingDay);
  };

  const changAnotherDate = (date) => {
    setToday(false);
    setAnotherDate(date);
  };

  useEffect(() => {
    const date = dataTodayFormatWithBar();
    setShippingDay(date);
    const { children } = props;
    setTitle(children);
  }, []);

  return (
    <>
      <ExpenditureOrRecipeContainer>
        <ExpenditureOrRecipeContent>
          <div className="header">
            <p>{title}</p>
            <button type="button" onClick={() => setOpen(false)}>
              X
            </button>
          </div>

          <Value>
            <p>R$</p>
            <Input
              fullWidth
              color={isRecipe ? 'primary' : 'secondary'}
              className="InputValue"
              type="text"
              placeholder="0,00"
              value={value}
              onChange={(valueCurrent) => {
                setValue(valueCurrent.target.value);
              }}
            />
          </Value>

          <WasPaid>
            <p>Foi pago</p>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={wasPaid}
              onChange={() => setWaspaid(!wasPaid)}
            />
          </WasPaid>

          <GetDate>
            <button
              type="button"
              className={`${today ? 'active' : ''}`}
              onClick={changeToday}
            >
              Hoje
            </button>
            <p> ou </p>
            <input
              type="text"
              placeholder="XX/XX/XXXX"
              value={anotherDate}
              onChange={(dateCurrent) => {
                changAnotherDate(dateCurrent.target.value);
              }}
            />
          </GetDate>

          <Description>
            <Input
              fullWidth
              color="secondary"
              className="InputValue"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(valueCurrent) => {
                setDescription(valueCurrent.target.value);
              }}
            />
          </Description>

          <InputTag setTag={setTag} />

          <BtnSaveContainer>
            <BtnSave
              onClick={!isRecipe ? sendExpenseToFirebase : sendRecipeToFirebase}
              className={
                value &&
                (today || anotherDate !== '') &&
                !loadingSubmitRequest &&
                !loadingSubmitRecipeRequest
                  ? 'active'
                  : ''
              }
            >
              {loadingSubmitRequest || loadingSubmitRecipeRequest
                ? '...'
                : 'SALVAR'}
            </BtnSave>
          </BtnSaveContainer>
        </ExpenditureOrRecipeContent>
      </ExpenditureOrRecipeContainer>
    </>
  );
};

ExpenditureOrRecipe.propTypes = {
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isRecipe: PropTypes.bool.isRequired,
};

export default ExpenditureOrRecipe;
