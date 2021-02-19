import styled from 'styled-components';

export const ExpenditureContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.69);
`;

export const ExpenditureContent = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  width: 550px;
  height: 550px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.82);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.82);

  border-radius: 50px;

  > .header {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    > p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 25px;
      font-weight: bold;

      margin-left: 20px;
    }

    > button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-size: 25px;
      margin-right: 20px;
    }
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: flex-start;

  width: 90%;
  margin-top: 40px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #a0a0a0;

  border-bottom: 1px solid rgba(88, 88, 88, 0.94);
  > input {
    margin-left: 15px;
    border: none;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`;

export const WasPaid = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: space-between;

  width: 90%;
  margin-top: 40px;

  > p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #a0a0a0;
  }
  > input {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #fb7254;
  }
`;

export const GetDate = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: flex-start;

  width: 90%;
  margin-top: 40px;
  padding-bottom: 3px;

  border-bottom: 1px solid rgba(88, 88, 88, 0.94);
  > p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #a0a0a0;
    margin: 0 10px 0 10px;
  }
  > button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 50px;
    background-color: #e1e1e1;

    transition: 0.2s ease-in-out background-color;

    &:hover {
      background-color: #d2d2d2;
    }

    &.active {
      background-color: #fb7254;
    }
  }
  > input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    border: none;
    width: 90px;
    height: 30px;
  }
`;

export const BtnSaveContainer = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: flex-end;

  width: 90%;
  margin-top: 40px;
`;

export const BtnSave = styled.button`
  cursor: pointer;
  margin: 20px 20px 20px 0;

  width: 180px;
  height: 60px;

  border: none;
  border-radius: 50px;
  background: #e1e1e1;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);

  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  color: #000;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease-in-out background;
  &:hover {
    background-color: #d2d2d2;
  }
  > p {
    pointer-events: none;
  }

  > p:first-child {
    position: absolute;
    top: 15px;
    left: 20px;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 25px;
  }

  > p:last-child {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  &.active {
    background-color: #2962ff;
  }
  &.active:hover {
    background: #214ecc;
  }
`;
