import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  width: 350px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-color: #fff;
`;

export const Header = styled.header`
  margin-top: 13px;
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 60px;
    height: 60px;

    margin-right: 15px;
  }

  > h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 33px;
    color: #2962ff;
  }
`;

export const BtnAdd = styled.button`
  cursor: pointer;
  margin: 20px 0 20px 0;

  width: 180px;
  height: 60px;

  border: none;
  border-radius: 50px;
  background: #2962ff;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.43);

  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  color: #fff;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease-in-out background;

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

  &:hover {
    background: #214ecc;
  }
`;

export const Navigation = styled.nav`
  margin-top: 20px;
  width: 100%;

  > ul {
    > li {
      background-color: #fff;
      transition: 0.2s ease-in-out background-color;

      &:hover {
        background-color: #e8e8e8;
      }
      > a {
        display: flex;
        align-items: flex-end;
        justify-content: center;

        width: 100%;
        height: 45px;

        padding-bottom: 5px;

        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        color: black;
        text-decoration: none;
      }
    }
  }
`;
