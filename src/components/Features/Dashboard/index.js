import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { searchGraphsRecipeRequest } from '../../../store/modules/recipe/actions';
import { searchGraphsExpenditureRequest } from '../../../store/modules/expenditure/actions';

import PieChart from './components/PieChart';
import MultiAxisLine from './components/MultiAxisLine';
import VerticalBar from './components/VerticalBar';

import {
  DashboardContainer,
  DashboardContent,
  Header,
  BarNavContainer,
  BarNav,
  GraphsContainer,
  GraphsContent,
  Graphs,
  GraphsRight,
  GraphsLeft,
} from './style';

const Dashboard = () => {
  const [recipeCurrentMonth, setRecipeCurrentMonth] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expenditureCurrentMonth, setExpenditureCurrentMonth] = useState(0);

  const { listRecipeGraphsBar } = useSelector((state) => state.recipe);
  const { listExpenditureGraphsBar } = useSelector(
    (state) => state.expenditure,
  );
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchGraphsRecipeRequest(token));
    dispatch(searchGraphsExpenditureRequest(token));
  }, []);

  useEffect(() => {
    const today = new Date();

    const totalRecipe = today.getMonth();
    const newListRecipe = listRecipeGraphsBar.map((item) => {
      if (!Number.isNaN(+item)) {
        return +item;
      }
      return 0;
    });
    const newListExpen = listExpenditureGraphsBar.map((item) => {
      if (!Number.isNaN(+item)) {
        return +item;
      }
      return 0;
    });
    setRecipeCurrentMonth(+newListRecipe[totalRecipe]);

    setExpenditureCurrentMonth(+listExpenditureGraphsBar[totalRecipe]);

    setBalance(+newListRecipe[totalRecipe] - +newListExpen[totalRecipe]);
  }, [listExpenditureGraphsBar, listRecipeGraphsBar]);
  return (
    <>
      <DashboardContainer>
        <DashboardContent>
          <Header>
            <p>Dashboard</p>
          </Header>

          <BarNavContainer>
            <BarNav>
              <p>Receita mês atual</p>
              <strong style={{ color: 'rgba(21, 249, 44,1)' }}>
                {recipeCurrentMonth}
              </strong>
            </BarNav>
            <BarNav>
              <p>Despesas mês atual</p>
              <strong style={{ color: 'rgba(249, 48, 21, 1)' }}>
                {expenditureCurrentMonth}
              </strong>
            </BarNav>
            <BarNav>
              <p>Saldo do mês</p>
              <strong
                style={{
                  color: `${
                    balance ? 'rgba(249, 48, 21, 1)' : 'rgba(21, 249, 44,1)'
                  }`,
                }}
              >
                {balance}
              </strong>
            </BarNav>
          </BarNavContainer>

          <GraphsContainer>
            <GraphsContent>
              <GraphsLeft>
                <Graphs>
                  <MultiAxisLine />
                </Graphs>
                <Graphs>
                  <VerticalBar />
                </Graphs>
              </GraphsLeft>

              <GraphsRight>
                <Graphs>
                  <PieChart />
                </Graphs>
              </GraphsRight>
            </GraphsContent>
          </GraphsContainer>
        </DashboardContent>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
