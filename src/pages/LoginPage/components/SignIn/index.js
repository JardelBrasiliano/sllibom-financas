import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../../../store/modules/auth/actions';

import {
  SocialMedia,
  Input,
  Division,
  BtnSignInOrRegister,
  InputContainer,
} from '../../style';

const Entrar = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { loadingSignInRequest } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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

      {!loadingSignInRequest ? (
        <BtnSignInOrRegister
          onClick={() => dispatch(signInRequest(email, password))}
        >
          ENTRAR
        </BtnSignInOrRegister>
      ) : (
        '...'
      )}
    </>
  );
};

export default Entrar;
