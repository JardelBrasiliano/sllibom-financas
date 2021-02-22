import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { registerRequest } from '../../store/modules/register/actions';

import {
  Input,
  Division,
  BtnSignInOrRegister,
  InputContainer,
  ErrorInput,
} from '../../pages/LoginPage/style';

const Cadastrar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { loadingregRisterRequest, error, success } = useSelector(
    (state) => state.register,
  );

  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(registerRequest(name, email, password));
  };

  useEffect(() => {
    if (success) {
      setName('');
      setEmail('');
      setpassword('');
    }
  }, [success]);

  return (
    <>
      <Division> </Division>

      <InputContainer>
        <Input>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(value) => {
              setName(value.target.value);
            }}
          />
          <article />
        </Input>

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
            <p style={{ opacity: `${success ? '1' : '0'}`, color: 'green' }}>
              Email Cadastrado com sucesso.
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

      {!loadingregRisterRequest ? (
        <BtnSignInOrRegister onClick={() => signUp()}>
          CADASTRAR
        </BtnSignInOrRegister>
      ) : (
        <BtnSignInOrRegister style={{ backgroundColor: '#A5A4A4' }}>
          <CircularProgress style={{ transform: 'scale(0.7)' }} />
        </BtnSignInOrRegister>
      )}
    </>
  );
};

export default Cadastrar;
