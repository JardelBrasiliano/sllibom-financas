import styled from 'styled-components';

export const RecordTitle = styled.ul`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 50px;

  height: 40px;
  border-bottom: 0.7px solid #585858;

  > li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 40px;
      width: 0.7px;
      background-color: #585858;
    }
  }
`;

export const RecordItems = styled.ul`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 50px;

  height: 40px;
  border-bottom: 0.7px solid #585858;

  > li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 40px;
      width: 0.7px;
      background-color: #585858;
    }
    > button {
      cursor: pointer;
      background-color: transparent;
      width: 100%;
      height: 100%;

      border: none;
      transition: 0.3s ease-in-out background-color;
      &:hover {
        background-color: rgba(147, 147, 147, 0.2);
      }
    }
  }
`;
