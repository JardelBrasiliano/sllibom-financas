import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 80%;
  width: 100%;
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ProfileContent = styled.div`
  width: 90%;
  height: 100%;

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
  justify-content: flex-start;

  height: 40px;
  border-radius: 50px;
  margin: 20px 0 20px 0;

  box-shadow: 0px 0px 12px -7px #000000;
  background-color: #fff;

  > li {
    position: relative;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;

    &:not(:last-child) {
      margin-right: 15px;
    }
    &:first-child {
      margin-left: 15px;
    }
    &::before {
      content: '';
      width: 118px;
      height: 2px;
      border-radius: 50%;
      background-color: #2962ff;
      position: absolute;
      top: 27px;
    }
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

  > p {
    margin: 10px 0 20px 10px;
    font-size: 20px;
  }
`;
