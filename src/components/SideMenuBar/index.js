import React from 'react';
import { Link } from 'react-router-dom';
import { SideMenuContainer, Header, BtnAdd, Navigation } from './style';

import logo from '../../assets/logo.svg';

const SideMenuBar = () => (
  <>
    <SideMenuContainer>
      <Header>
        <img src={logo} alt="" />
        <h2>Mobills</h2>
      </Header>

      <BtnAdd>
        <p>+</p>
        <p>Novo</p>
      </BtnAdd>

      <Navigation>
        <ul>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              className="btnNav"
              type="button"
              onClick={() => console.log('oi')}
            >
              Sair
            </button>
          </li>
        </ul>
      </Navigation>
    </SideMenuContainer>
  </>
);

export default SideMenuBar;
