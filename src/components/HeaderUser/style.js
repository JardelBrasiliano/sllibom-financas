import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  height: 50px;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
`;

export const User = styled.button`
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  width: 230px;

  border: none;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.3s ease-in-out;
  > img {
    pointer-events: none;
    margin-right: 15px;
    height: 40px;
    width: 40px;

    background-color: #e8e8e8;
    border-radius: 50%;
  }
  > strong {
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;

    overflow: hidden; /* "overflow" value must be different from "visible" */

    text-overflow: ellipsis;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;
