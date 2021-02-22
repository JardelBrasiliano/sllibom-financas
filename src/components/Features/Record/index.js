import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import { searchExpenditureRequest } from '../../../store/modules/expenditure/actions';
import { searchRecipeRequest } from '../../../store/modules/recipe/actions';

import { compareDate } from '../../../utils/date';

import RecordList from './components/RecordList';
import InputTag from '../../InputTag';

import {
  BarNav,
  Header,
  RecordContainer,
  RecordContent,
  CardProfileContainer,
  InputCheckBox,
  CircularProgressContainer,
  InputCheckBoxPaidOrRecived,
} from './style';

const Record = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchDays, setSearchDays] = useState(7);
  const [searchListExpenditure, setSearchListExpenditure] = useState(true);
  const [searchListRecipe, setSearchListRecipe] = useState(true);
  const [paidOrReceived, setPaidOrReceived] = useState(false);
  const [tag, setTag] = useState('');

  const { token } = useSelector((state) => state.auth);
  const {
    listExpenditure,
    sentExpenditure,
    loadingSearchExpenditureRequest,
  } = useSelector((state) => state.expenditure);
  const { listRecipe, sentRecipe, loadingSearchRecipeRequest } = useSelector(
    (state) => state.recipe,
  );

  const dispach = useDispatch();

  const filterByTime = (element) => {
    if (element.classList.value === '') {
      const elementActive = document.querySelector('.active');
      if (elementActive) {
        elementActive.classList.remove('active');
      }
      element.classList.add('active');
      setSearchDays(+element.value);
    }
  };

  const updateList = () => {
    dispach(searchRecipeRequest(searchDays, token));
    dispach(searchExpenditureRequest(searchDays, token));
  };

  useEffect(() => {
    dispach(searchRecipeRequest(searchDays, token));
    dispach(searchExpenditureRequest(searchDays, token));
  }, [searchDays]);

  useEffect(() => {
    const newList = listExpenditure.concat(listRecipe);

    const ordList = newList.sort(compareDate);
    setSearchResult(ordList);
  }, [
    searchListExpenditure,
    searchListRecipe,
    sentExpenditure,
    sentRecipe,
    listExpenditure,
    listRecipe,
  ]);

  useEffect(() => {
    if (searchListExpenditure && !searchListRecipe) {
      setSearchResult(listExpenditure.sort(compareDate));
    } else if (searchListRecipe && !searchListExpenditure) {
      setSearchResult(listRecipe.sort(compareDate));
    } else if (searchListExpenditure && searchListRecipe) {
      const newList = listExpenditure.concat(listRecipe);

      const ordList = newList.sort(compareDate);
      setSearchResult(ordList);
    } else {
      setSearchResult([]);
    }
  }, [searchListExpenditure, searchListRecipe]);

  useEffect(() => {
    if (tag === 'all') {
      const newList = listExpenditure.concat(listRecipe);

      const ordList = newList.sort(compareDate);
      setSearchResult(ordList);
    } else if (tag) {
      let newList = [];
      searchResult.forEach((item) => {
        if (item.tag === tag) {
          newList = [...newList, item];
        }
      });
      setSearchResult(newList);
    } else if (!tag) {
      setSearchResult([]);
    }
  }, [tag]);

  useEffect(() => {
    if (paidOrReceived) {
      let newList = [];
      searchResult.forEach((item) => {
        if (item.wasPaid === true) {
          newList = [...newList, item];
        }
      });
      setSearchResult(newList);
    } else {
      const newList = listExpenditure.concat(listRecipe);

      const ordList = newList.sort(compareDate);
      setSearchResult(ordList);
    }
  }, [paidOrReceived]);
  return (
    <RecordContainer>
      <RecordContent>
        <Header>
          <p>Relatório</p>
        </Header>

        <BarNav>
          <li>
            <button
              className="active"
              type="button"
              value={7}
              onClick={(btn) =>
                loadingSearchExpenditureRequest || loadingSearchRecipeRequest
                  ? ''
                  : filterByTime(btn.target)
              }
            >
              Últimos 7 dia
            </button>
          </li>
          <li>
            <button
              type="button"
              value={15}
              onClick={(btn) =>
                loadingSearchExpenditureRequest || loadingSearchRecipeRequest
                  ? ''
                  : filterByTime(btn.target)
              }
            >
              Últimos 15 dia
            </button>
          </li>
          <li>
            <button
              type="button"
              value={30}
              onClick={(btn) =>
                loadingSearchExpenditureRequest || loadingSearchRecipeRequest
                  ? ''
                  : filterByTime(btn.target)
              }
            >
              Últimos 30 dia
            </button>
          </li>
        </BarNav>

        <BarNav>
          <InputCheckBox>
            <p>Despesa</p>
            <input
              type="checkbox"
              id="Despesa"
              name="Despesa"
              checked={searchListExpenditure}
              onChange={() => setSearchListExpenditure(!searchListExpenditure)}
            />
          </InputCheckBox>
          <InputCheckBox>
            <p>Receita</p>
            <input
              type="checkbox"
              id="recipe"
              name="recipe"
              checked={searchListRecipe}
              onChange={() => setSearchListRecipe(!searchListRecipe)}
            />
          </InputCheckBox>
        </BarNav>

        <BarNav>
          <InputTag setTag={setTag} tagErr={false} />
          <InputCheckBoxPaidOrRecived>
            <InputCheckBox>
              <p>Pago/Recebido</p>
              <input
                type="checkbox"
                id="paid-received"
                name="rpaid-received"
                checked={paidOrReceived}
                onChange={() => setPaidOrReceived(!paidOrReceived)}
              />
            </InputCheckBox>
          </InputCheckBoxPaidOrRecived>
        </BarNav>

        <CardProfileContainer>
          {loadingSearchExpenditureRequest || loadingSearchRecipeRequest ? (
            <CircularProgressContainer>
              <CircularProgress />
            </CircularProgressContainer>
          ) : (
            <RecordList
              searchResult={searchResult === undefined ? [] : searchResult}
              updateList={updateList}
            />
          )}
        </CardProfileContainer>
      </RecordContent>
    </RecordContainer>
  );
};
export default Record;
