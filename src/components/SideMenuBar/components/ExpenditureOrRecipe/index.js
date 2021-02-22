import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

import { CircularProgress } from '@material-ui/core';
import InputTag from '../../../InputTag';

import { submitExpenditureRequest } from '../../../../store/modules/expenditure/actions';
import { submitRecipeRequest } from '../../../../store/modules/recipe/actions';
import { validateCurrency } from '../../../../utils/number';

import {
  dataTodayFormatWithBar,
  checkDateFormat,
} from '../../../../utils/date';

import {
  ExpenditureOrRecipeContainer,
  ExpenditureOrRecipeContent,
  Value,
  WasPaid,
  GetDate,
  BtnSaveContainer,
  BtnSave,
  Description,
  ErrorInput,
} from './style';

const ExpenditureOrRecipe = ({ setOpen, isRecipe, ...props }) => {
  const [title, setTitle] = useState('');

  const [value, setValue] = useState('');
  const [errValue, setErrValue] = useState(false);

  const [wasPaid, setWaspaid] = useState(true);

  const [today, setToday] = useState(false);
  const [anotherDate, setAnotherDate] = useState('');
  const [shippingDay, setShippingDay] = useState('');
  const [errDate, setErrDate] = useState('');

  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tagErr, setTagErr] = useState(false);

  const { loadingSubmitRequest } = useSelector((state) => state.expenditure);
  const { loadingSubmitRecipeRequest } = useSelector((state) => state.recipe);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const checkErro = () => {
    const verfDate = checkDateFormat(anotherDate || shippingDay);
    const valdValue = validateCurrency(value);

    if (verfDate <= 0) {
      if (!wasPaid) {
        setAnotherDate('');
        return 1;
      }
      setErrDate(verfDate);
      setAnotherDate('');
      return -1;
    }
    if (valdValue <= 0) {
      setErrValue(valdValue);
      setValue('');
      return -1;
    }
    if (tag === 'all' || tag === undefined || tag === '') {
      setTagErr(true);
      return -1;
    }
    return 1;
  };
  const sendToFirebase = () => {
    const validateForm = checkErro();

    if (validateForm > 0) {
      setErrDate('');
      setTagErr(false);
      setErrValue(true);
      const fomatedValue = +value;

      const dateBaseRecipe = {
        value: fomatedValue,
        wasPaid,
        paidDay: anotherDate || shippingDay,
        description,
        tag,
      };
      if (isRecipe) {
        dispatch(submitRecipeRequest(dateBaseRecipe, token, shippingDay));
      } else {
        dispatch(submitExpenditureRequest(dateBaseRecipe, token, shippingDay));
      }
    }
  };

  const changeToday = () => {
    setAnotherDate(false);
    setErrDate('');
    setToday(shippingDay);
  };

  const changAnotherDate = (date) => {
    if (date === '') {
      setAnotherDate(false);

      setErrDate('');
    }
    if (wasPaid === false) {
      setAnotherDate(false);
      setErrDate(false);
    }

    setToday(false);
    setAnotherDate(date);
  };

  const changDescription = (currentDescription) => {
    if (currentDescription.length <= 50) {
      setDescription(currentDescription);
    } else {
      setDescription(description);
    }
  };

  const changWasPaid = () => {
    if (wasPaid) {
      setWaspaid(!wasPaid);
      setToday('');
      setAnotherDate(false);
    } else {
      setWaspaid(!wasPaid);
      setToday(shippingDay);
      setAnotherDate('');
    }
  };

  useEffect(() => {
    const date = dataTodayFormatWithBar();
    setShippingDay(date);
    const { children } = props;
    setTitle(children);
    setToday(date);
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
            <ErrorInput>
              {
                <p style={{ opacity: `${errValue === -2 ? '1' : '0'}` }}>
                  Formato errado - 1000,00
                </p>
              }
              {
                <p style={{ opacity: `${errValue === -1 ? '1' : '0'}` }}>
                  Informe um valor maior que zero.
                </p>
              }
            </ErrorInput>
          </Value>

          <WasPaid>
            <p>{title === 'Receita' ? 'Recebio' : 'Foi pago'}</p>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={wasPaid}
              onChange={() => changWasPaid()}
            />
          </WasPaid>

          <GetDate
            style={{
              borderBottom: `${
                errDate !== ''
                  ? '1px solid red'
                  : '1px solid rgba(88, 88, 88, 0.94)'
              }`,
            }}
          >
            <button
              type="button"
              className={`${today || wasPaid ? 'active ' : ''}${
                anotherDate === '' ? ' ' : ' deactivate'
              }`}
              onClick={changeToday}
            >
              Hoje
            </button>
            <p> ou </p>
            <input
              type="text"
              placeholder="XX/XX/XXXX"
              value={wasPaid ? anotherDate : ''}
              onChange={(dateCurrent) => {
                changAnotherDate(dateCurrent.target.value);
              }}
            />
            <ErrorInput>
              {
                <p style={{ opacity: `${errDate === 0 ? '1' : '0'}` }}>
                  Formato errado - XX/XX/XXX
                </p>
              }
              {
                <p style={{ opacity: `${errDate === -1 ? '1' : '0'}` }}>
                  Não é permitido datas a frente de hoje
                </p>
              }
            </ErrorInput>
          </GetDate>

          <Description>
            <Input
              fullWidth
              color="primary"
              className="InputValue"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(valueCurrent) =>
                changDescription(valueCurrent.target.value)
              }
            />
          </Description>

          <InputTag setTag={setTag} tagErr={tagErr} />

          <BtnSaveContainer>
            <BtnSave
              onClick={() => sendToFirebase()}
              className={
                value &&
                !loadingSubmitRequest &&
                !loadingSubmitRecipeRequest &&
                !(tag === 'all' || tag === undefined || tag === '')
                  ? 'active'
                  : ''
              }
            >
              {loadingSubmitRequest || loadingSubmitRecipeRequest ? (
                <CircularProgress />
              ) : (
                'SALVAR'
              )}
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
