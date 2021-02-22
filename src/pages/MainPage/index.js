import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HeaderUser from '../../components/HeaderUser';
import SideMenuBar from '../../components/SideMenuBar';

import Features from '../../components/Features';

import { MainContainer, MainSection } from './style';

const MainPage = () => {
  const { isSignedIn } = useSelector((state) => state.auth);

  return (
    <>
      {!isSignedIn ? <Redirect to="/" /> : ''}
      <MainContainer>
        <SideMenuBar />
        <MainSection>
          <HeaderUser />
          <Features />
        </MainSection>
      </MainContainer>
    </>
  );
};

export default MainPage;
