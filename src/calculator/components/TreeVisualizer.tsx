import React from "react";
import { useTreeProvider } from "../../treeContext/context-provider";
import * as S from "./styledComponents.styled";

const TreeVisualizer: React.FC = () => {
    const [_, {stringTree}] = useTreeProvider();
    return(
       <S.TreeVisualizer>
            {stringTree}
       </S.TreeVisualizer> 
    )
}

export default TreeVisualizer