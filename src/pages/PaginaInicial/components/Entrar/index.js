import React, { useState } from 'react';
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

      <BtnEntrarOuCadastrar>ENTRAR</BtnEntrarOuCadastrar>
    </>
  );
};

export default Entrar;
