import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/auth/actions';

import ExpenditureOrRecipe from './components/ExpenditureOrRecipe';

import {
  SideMenuContainer,
  Header,
  BtnAdd,
  Navigation,
  BtnContainer,
  BtnAction,
} from './style';

import logo from '../../assets/logo.svg';

const SideMenuBar = () => {
  const [open, setOpen] = useState(false);
  const [openExpenditure, setOpenExpenditure] = useState(false); // << Mudar para false
  const [openRecipe, setOpenRecipe] = useState(false);

  const dispach = useDispatch();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const expenditure = () => {
    setOpenExpenditure(!openExpenditure);
    setOpen(false);
  };
  const recipe = () => {
    setOpenRecipe(!openRecipe);
    setOpen(false);
  };

  return (
    <>
      {openExpenditure ? (
        <ExpenditureOrRecipe setOpen={setOpenExpenditure} isRecipe={false}>
          Despesas
        </ExpenditureOrRecipe>
      ) : (
        ''
      )}
      {openRecipe ? (
        <ExpenditureOrRecipe setOpen={setOpenRecipe} isRecipe>
          Receita
        </ExpenditureOrRecipe>
      ) : (
        ''
      )}

      <SideMenuContainer>
        <Header>
          <img src={logo} alt="" />
          <h2>Mobills</h2>
        </Header>

        <ClickAwayListener onClickAway={handleClickAway}>
          <BtnContainer>
            <BtnAdd onClick={handleClick}>
              <p>+</p>
              <p>Novo</p>
            </BtnAdd>
            {open ? (
              <div className="btnModal">
                <BtnAction type="button" onClick={recipe}>
                  Receita
                </BtnAction>
                <BtnAction type="button" onClick={expenditure}>
                  Despesas
                </BtnAction>
              </div>
            ) : null}
          </BtnContainer>
        </ClickAwayListener>

        <Navigation>
          <ul>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/record">Relatório</Link>
            </li>
            <li>
              <button
                className="btnNav"
                type="button"
                onClick={() => dispach(logOut())}
              >
                Sair
              </button>
            </li>
          </ul>
        </Navigation>
      </SideMenuContainer>
    </>
  );
};

export default SideMenuBar;
