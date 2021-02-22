import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { signInRequest } from '../../store/modules/auth/actions';

import {
  Input,
  Division,
  BtnSignInOrRegister,
  InputContainer,
  ErrorInput,
} from '../../pages/LoginPage/style';

const Entrar = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { loadingSignInRequest, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const verfRegister = () => {
    dispatch(signInRequest(email, password));
  };
  return (
    <>
      <Division> </Division>

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
          <article />
          <ErrorInput>
            <p style={{ opacity: `${error ? '1' : '0'}` }}>
              O endereço de email ou a senha que você não é válido.
            </p>
          </ErrorInput>
        </Input>

        <Input>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(value) => {
              setpassword(value.target.value);
            }}
          />
          <article />
          <ErrorInput>
            <p style={{ opacity: `${error ? '1' : '0'}` }}>
              O endereço de email ou a senha que você não é válido.
            </p>
          </ErrorInput>
        </Input>
      </InputContainer>

      {!loadingSignInRequest ? (
        <BtnSignInOrRegister onClick={() => verfRegister()}>
          ENTRAR
        </BtnSignInOrRegister>
      ) : (
        <BtnSignInOrRegister style={{ backgroundColor: '#A5A4A4' }}>
          <CircularProgress style={{ transform: 'scale(0.7)' }} />
        </BtnSignInOrRegister>
      )}
    </>
  );
};

export default Entrar;
