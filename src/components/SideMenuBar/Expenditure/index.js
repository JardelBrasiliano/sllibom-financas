import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ExpenditureContainer,
  ExpenditureContent,
  Value,
  WasPaid,
  GetDate,
  BtnSaveContainer,
  BtnSave,
} from './style';

const Expenditure = ({ setOpenExpenditure }) => {
  const [value, setValue] = useState('');
  const [wasPaid, setWaspaid] = useState(true);
  const [today, setToday] = useState(false);
  const [anotherDate, setAnotherDate] = useState('');

  const changeToday = () => {
    setAnotherDate('');

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    setToday(`${day}/0${month}/${year}`);
  };

  const changAnotherDate = (date) => {
    setToday(false);
    setAnotherDate(date);
  };

  return (
    <>
      <ExpenditureContainer>
        <ExpenditureContent>
          <div className="header">
            <p>Despesas</p>
            <button type="button" onClick={() => setOpenExpenditure(false)}>
              X
            </button>
          </div>

          <Value>
            <p>R$</p>
            <input
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
          <BtnSaveContainer>
            <BtnSave
              className={value && (today || anotherDate !== '') ? 'active' : ''}
            >
              SALVAR
            </BtnSave>
          </BtnSaveContainer>
        </ExpenditureContent>
      </ExpenditureContainer>
    </>
  );
};

Expenditure.propTypes = {
  setOpenExpenditure: PropTypes.func.isRequired,
};

export default Expenditure;
