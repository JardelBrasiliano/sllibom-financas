import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > .header-content {
    margin-left: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 50px;
      height: 50px;

      border-radius: 7px;
      margin-right: 15px;
    }

    > h1 {
      font-family: Maven Pro, arial, sans-serif;
      font-size: 25px;

      color: #2962ff;
    }
  }
`;
export const Main = styled.main`
  position: relative;

  width: 100%;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Action = styled.section`
  width: 500px;
  height: 100%;
  padding: 0 15px 15px 15px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;

  > div {
    height: 100%;
    width: 450px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    > h2 {
      font-size: 35px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }

    > img {
      width: 100%;
      height: auto;
    }

    > p {
      color: #b3af9d;

      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;

      margin-bottom: 5px;
    }
  }

  @media (max-width: 800px) {
    opacity: 0;
    position: absolute;
    display: none;
  }
`;

export const SignInOrRegister = styled.section`
  width: 500px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  > .entrar-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
/* ENTRAR E CADASTRAR */

export const InputControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  margin-bottom: 20px;
  > button {
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
  > .active {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 125px;
      height: 3px;
      border-radius: 2px;
      background-color: #2962ff;
    }
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  margin-bottom: 20px;

  > button {
    cursor: pointer;

    width: 100px;
    height: 40px;

    border: none;
    border-radius: 50px;

    background-color: white;
    -webkit-box-shadow: 0px 0px 7px -2px #000000;
    box-shadow: 0px 0px 7px -2px #000000;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Division = styled.p`
  position: relative;
  margin-bottom: 20px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #e5e5e5;
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 20px;

    width: 130px;
    height: 1.2px;
    background-color: #e5e5e5;
  }
  &::after {
    content: '';
    position: absolute;
    top: 9px;
    right: 20px;

    width: 130px;
    height: 1.2px;
    background-color: #e5e5e5;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 185px; ;
`;

export const Input = styled.div`
  position: relative;
  margin-bottom: 20px;
  > input {
    display: flex;

    font-size: 18px;

    width: 280px;
    height: 40px;

    border: none;
  }
  > article {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 280px;
    height: 2px;
    background-color: #3f3f3f;
  }
`;

export const ErrorInput = styled.div`
  position: absolute;
  bottom: -6px;

  width: 90%;
  transition: 0.3s ease-in-out opacity;
  > p {
    position: absolute;
    font-family: arial;
    font-size: 10px;
    color: red;
  }
`;

export const BtnSignInOrRegister = styled.button`
  cursor: pointer;
  margin: 20px 0 20px 0;

  width: 200px;
  height: 50px;

  border: none;
  border-radius: 50px;
  background: #2962ff;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);

  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  color: #fff;

  transition: 0.2s ease-in-out background;

  &:hover {
    background: #214ecc;
  }
`;
