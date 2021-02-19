import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EntrarEmEspera } from '../../../../store/modules/autenticacao/actions';

import {
  RedeSocial,
  Input,
  Divisao,
  BtnEntrarOuCadastrar,
  InputContainer,
} from '../../style';

const Entrar = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { loadingSignInRequest } = useSelector((state) => state.autenticacao);

  const dispatch = useDispatch();

  return (
    <>
      <RedeSocial>
        <button type="button">Google</button>
        <button type="button">FaceBook</button>
      </RedeSocial>

      <Divisao>ou</Divisao>

      <InputContainer>
        <Input>
          <input
            type="text"
            placeholder="Seu email"
            value={email}
            onChange={(value) => {
              setEmail(value.target.value);
            }}
          />
          <div />
        </Input>

        <Input>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(value) => {
              setSenha(value.target.value);
            }}
          />
          <div />
        </Input>
      </InputContainer>

      {!loadingSignInRequest ? (
        <BtnEntrarOuCadastrar
          onClick={() => dispatch(EntrarEmEspera(email, senha))}
        >
          ENTRAR
        </BtnEntrarOuCadastrar>
      ) : (
        '...'
      )}
    </>
  );
};

export default Entrar;
