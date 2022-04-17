import { CalculatorBody } from "./calculator";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <Container>
      <CalculatorBody />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #222831;
`;

export default App;
