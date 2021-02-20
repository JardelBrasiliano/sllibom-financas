import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HeaderUser from '../../components/HeaderUser';
import SideMenuBar from '../../components/SideMenuBar';
import Record from '../../components/Features/Record';

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
          <Record />
        </MainSection>
      </MainContainer>
    </>
  );
};

export default MainPage;
