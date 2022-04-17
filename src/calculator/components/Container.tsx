import React, { useState } from "react";
import { Button } from ".";
import { useTreeProvider } from "../../treeContext/context-provider";
import * as S from "./styledComponents.styled";
import * as Parser from "../../parser/formula-parser";
const parse = Parser.parse;

const Container: React.FC = () => {
  const [trigger] = useTreeProvider();
  const [value, setValue] = useState<string>("PI*SQRT(SQR($b)-SQRT(4*$a))");

  const handleClick = () => {
    const syntaxTree = parse(value);
    trigger(syntaxTree);
  };

  return (
    <>
      <S.Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></S.Input>
      <Button handleClick={handleClick} />
    </>
  );
};

export default Container;
