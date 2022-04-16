import React, { useEffect, useMemo } from "react";
import * as S from "./styledComponents.styled";
import { useTreeProvider } from "../treeContext/context-provider";
import { NestedComponent } from ".";

const symbolMap: any = {
  SUBTRACTION: "-",
  ADDITION: "+",
  MULTIPLICATION: "*",
  DIVISION: "/",
};

const Visualizer: React.FC = () => {
  const [trigger, { tree }] = useTreeProvider();
  /*
        Subdivide tree
        Wrap each in an outline
        SQRT(SQR($b)-4*$a)
    */

  const wrappedElements = useMemo(() => {
    if (tree) {
      const traverse = (tree: any) => {
        console.log("tree: ", tree);
        let final_array_of_elements: any = [];

        const _iterate = (tree: any, element: any): any => {
          let _element = element;

          // Name is the actual text
          if (tree["name"]) {
            // console.log("NAME:", tree["name"], tree);
            console.log(
              `---------------------------- printing name ${tree["name"]} ----------------------------`
            );

            _element = (
              <NestedComponent text={tree["name"]} children={element} />
            );
          }

          if (tree["type"] === "NUMBER") {
            _element = (
              <NestedComponent text={tree["value"]} children={element} />
            );
          }
          console.log(
            "---------------------------- new iteration ----------------------------"
          );
          if (tree["left"]) {
            console.log("SHIFTING LEFT");
            console.log("final array: ", final_array_of_elements);
            final_array_of_elements.push(
              <>
                {_iterate(tree.left, <></>)}
                {symbolMap[tree["type"]]}
              </>
            );
          }
          if (tree["right"]) {
            // operator
            console.log("SHIFTING RIGHT");
            final_array_of_elements.push(_iterate(tree.right, <></>));
          }

          if (tree.arguments) {
            tree.arguments.forEach((el: any, _: number) => {
              final_array_of_elements.push(_iterate(el, <></>));
            });
          }

          return _element;
        };

        // If left or right make array
        if (tree.left | tree.right) {
          final_array_of_elements.push(symbolMap[tree["value"]]);
          final_array_of_elements.unshift(_iterate(tree.left, <></>));
          final_array_of_elements.push(_iterate(tree.right, <></>));
        } else {
          // If not handle arguments
          final_array_of_elements.push(<>{tree["name"]}</>);
          if (tree["arguments"]) {
            tree["arguments"].forEach((el: any) => {
              final_array_of_elements.push(_iterate(el, <></>));
            });
          }
        }
        return final_array_of_elements;
      };
      const elements = traverse(tree);
      return elements;
    }

    return <></>;
  }, [tree]);

  return (
    <S.Container>
      <S.SubContainer>{wrappedElements}</S.SubContainer>
    </S.Container>
  );
};

export default Visualizer;
