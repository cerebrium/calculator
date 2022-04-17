import React from "react";
import { Visualizer } from "../astVisualizer";
import { TopSection, TreeVisualizer } from "./components";
import * as S from "./styledComponents.styled";

const CalculatorBody: React.FC = () => {
  return (
    <S.Container>
      <S.Header>Calculator</S.Header>
      <TopSection />
      <Visualizer />
      <TreeVisualizer />
    </S.Container>
  );
};

export default CalculatorBody;
