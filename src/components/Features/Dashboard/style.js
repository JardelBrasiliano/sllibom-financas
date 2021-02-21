import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 80%;
  width: 100%;
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DashboardContent = styled.div`
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

export const BarNavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
`;

export const BarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  height: 70px;
  border-radius: 50px;
  margin: 20px 0 20px 0;
  overflow: hidden;

  box-shadow: 0px 0px 12px -7px #000000;
  background-color: #fff;
  > p {
    font-size: 12px;
    font-family: arial;
  }
  > strong {
    font-family: arial;
    font-size: 35px;
    margin-bottom: 5px;
  }
`;

export const GraphsContainer = styled.div`
  width: 100%;
  flex: 1;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0px 0px 12px -7px #000000;
`;
export const GraphsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  height: 100%;
`;

export const GraphsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const GraphsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  > div {
    max-width: 420px;
  }
`;
export const Graphs = styled.div`
  position: relative;
  width: 100%;
`;
