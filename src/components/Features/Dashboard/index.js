import React from 'react';

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
  console.log('Dashboard');
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
              <strong>3000</strong>
            </BarNav>
            <BarNav>
              <p>Receita mês atual</p>
              <strong>3000</strong>
            </BarNav>
            <BarNav>
              <p>Receita mês atual</p>
              <strong>3000</strong>
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
