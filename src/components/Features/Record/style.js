import styled from 'styled-components';

export const RecordContainer = styled.div`
  width: 80%;
  width: 100%;
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const RecordContent = styled.div`
  width: 90%;
  height: 90vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: start;

  > p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const BarNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  border-radius: 50px;
  margin-top: 10px;

  background-color: #fff;
  box-shadow: 0px 0px 12px -7px #000000;

  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    &:last-child {
      margin-right: 15px;
    }
    &:first-child {
      margin-left: 15px;
    }
    > button {
      position: relative;

      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;

      background-color: transparent;
      border: none;

      font-family: Arial, Helvetica, sans-serif;
      font-size: 17px;

      &.active::before {
        content: '';
        width: 120px;
        height: 2px;
        border-radius: 50%;
        background-color: #2962ff;
        position: absolute;
        top: 28px;
      }
    }
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;

  > p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
  }
  > input {
    margin-left: 10px;
  }
`;

export const CardProfile = styled.div`
  > .cardInput {
    margin: 20px 10px 20px 10px;
    color: #242625;

    > p:first-child {
      font-size: 10px;
      margin-bottom: 5px;
    }
    > .data {
      font-size: 15px;
      color: #8a918e;
    }
    > .div {
      height: 2px;
      width: 100%;
      background-color: #bfbfbf;
      margin-top: 2px;
    }
  }
`;
export const CardProfileContainer = styled.div`
  width: 100%;
  flex: 1;
  border-radius: 30px 30px 0 0;

  background-color: #fff;
  box-shadow: 0px 0px 12px -7px #000000;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 20px;

  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }

  > p {
    margin: 10px 0 20px 10px;
    font-size: 20px;
  }
`;
export const CircularProgressContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
