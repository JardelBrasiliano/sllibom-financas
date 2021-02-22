import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../../components/SignIn';
import Register from '../../components/Register';

import { Header, Main, Action, SignInOrRegister, InputControl } from './style';

import logo from '../../assets/logo.png';
import initiation from '../../assets/home-page.jpg';

const LoginPage = () => {
  const [active, setActive] = useState(true);

  const { isSignedIn } = useSelector((state) => state.auth);

  return (
    <>
      {isSignedIn > 0 ? <Redirect to="/profile" /> : null}
      <Header className="header-container">
        <div className="header-content">
          <img className="header-img" src={logo} alt="" />
          <h1 className="header-texto">Sllibom</h1>
        </div>
      </Header>

      <Main>
        <Action>
          <div>
            <h2>Hora de transformar suas finanças.</h2>
            <img src={initiation} alt="" />
            <p>
              O caminho está a sua frente. Você já deu seu primeiro passo rumo à
              transformação financeira e nós te guiaremos nessa jornada.
            </p>
          </div>
        </Action>

        <SignInOrRegister>
          <div className="entrar-content">
            <InputControl>
              <button
                type="button"
                className={active ? 'active' : ''}
                onClick={() => setActive(!active)}
              >
                ENTRAR
              </button>
              <button
                type="button"
                className={active ? '' : 'active'}
                onClick={() => setActive(!active)}
              >
                CADASTRAR
              </button>
            </InputControl>
            {active ? <SignIn /> : <Register />}
          </div>
        </SignInOrRegister>
      </Main>
    </>
  );
};

export default LoginPage;
