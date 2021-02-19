import React from 'react';

import HeaderUser from '../../components/HeaderUser';
import SideMenuBar from '../../components/SideMenuBar';
import Profile from '../../components/features/Profile';

import { MainContainer, MainSection } from './style';

const MainPage = () => (
  <>
    <MainContainer>
      <SideMenuBar />
      <MainSection>
        <HeaderUser />
        <Profile />
      </MainSection>
    </MainContainer>
  </>
);

export default MainPage;
