import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../../../store/modules/register/actions';

import {
  SocialMedia,
  Input,
  Division,
  BtnSignInOrRegister,
  InputContainer,
} from '../../style';

const Cadastrar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { loadingregisterRequest } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(registerRequest(name, email, password));
  };

  return (
    <>
      <SocialMedia>
        <button type="button">Google</button>
        <button type="button">FaceBook</button>
      </SocialMedia>

      <Division>ou</Division>

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
          <div />
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
          <div />
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
          <div />
        </Input>
      </InputContainer>

      {!loadingregisterRequest ? (
        <BtnSignInOrRegister onClick={() => signUp()}>
          CADASTRAR
        </BtnSignInOrRegister>
      ) : (
        '...'
      )}
    </>
  );
};

export default Cadastrar;
