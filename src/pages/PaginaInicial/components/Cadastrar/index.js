import React, { useState } from 'react';
import {
  RedeSocial,
  Input,
  Divisao,
  BtnEntrarOuCadastrar,
  InputContainer,
} from '../../style';

const Cadastrar = () => {
  const [nome, setNome] = useState('');
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
            placeholder="Seu nome"
            value={nome}
            onChange={(value) => {
              setNome(value.target.value);
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
            value={senha}
            onChange={(value) => {
              setSenha(value.target.value);
            }}
          />
          <div />
        </Input>
      </InputContainer>
      <BtnEntrarOuCadastrar>CADASTRAR</BtnEntrarOuCadastrar>
    </>
  );
};

export default Cadastrar;
