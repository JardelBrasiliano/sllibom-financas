import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cadastrarEmEspera } from '../../../../store/modules/cadastro/actions';

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

  const { loadingregisterRequest } = useSelector((state) => state.cadastro);

  const dispatch = useDispatch();

  const fazerCadastro = () => {
    dispatch(cadastrarEmEspera(nome, email, senha));
  };

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

      {!loadingregisterRequest ? (
        <BtnEntrarOuCadastrar onClick={() => fazerCadastro()}>
          CADASTRAR
        </BtnEntrarOuCadastrar>
      ) : (
        '...'
      )}
    </>
  );
};

export default Cadastrar;
