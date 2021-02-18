import React, { useState } from 'react';

import Entrar from './components/Entrar';
import Cadastrar from './components/Cadastrar';

import {
  Header,
  Main,
  Acao,
  EntrarOuCadastrar,
  ControleDeEntrada,
} from './style';

import logo from '../../assets/logo.svg';
import inicio from '../../assets/home-page.png';

const PaginaInicial = () => {
  const [ativo, setAtivo] = useState(true);
  return (
    <>
      <Header className="header-container">
        <div className="header-content">
          <img className="header-img" src={logo} alt="" />
          <h1 className="header-texto">Mobills</h1>
        </div>
      </Header>

      <Main>
        <Acao>
          <div>
            <h2>Hora de transformar suas finanças.</h2>
            <img src={inicio} alt="" />
            <p>
              O caminho está a sua frente. Você já deu seu primeiro passo rumo à
              transformação financeira e nós te guiaremos nessa jornada.
            </p>
          </div>
        </Acao>

        <EntrarOuCadastrar>
          <div className="entrar-content">
            <ControleDeEntrada>
              <button
                type="button"
                className={ativo ? 'ativo' : ''}
                onClick={() => setAtivo(!ativo)}
              >
                ENTRAR
              </button>
              <button
                type="button"
                className={ativo ? '' : 'ativo'}
                onClick={() => setAtivo(!ativo)}
              >
                CADASTRAR
              </button>
            </ControleDeEntrada>
            {ativo ? <Entrar /> : <Cadastrar />}
          </div>
        </EntrarOuCadastrar>
      </Main>
    </>
  );
};

export default PaginaInicial;
