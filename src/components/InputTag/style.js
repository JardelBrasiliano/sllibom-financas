import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: inherit;
  justify-content: flex-start;

  width: 90%;
  border-bottom: 1px solid rgba(88, 88, 88, 0.94);

  > input {
    width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`;
export const SelectedTag = styled.div``;

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
