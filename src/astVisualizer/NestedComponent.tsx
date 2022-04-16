import React from "react";
import * as S from "./styledComponents.styled";

type NestedComponentProps = {
  children: any;
  text?: string;
};

const NestedComponent: React.FC<NestedComponentProps> = ({
  children,
  text,
}) => {
  return (
    <S.SubContainer>
      {text} {children}
    </S.SubContainer>
  );
};

export default NestedComponent;
