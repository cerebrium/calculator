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
        let final_array_of_elements: any = [];

        const _iterate = (tree: any, element: any): any => {
          let _element = element;

          /*

            Name is where the text wanted is found
            Due to the placement of the recursive function, this should only be done for variables

          */
          if (tree["name"] && tree["type"] === "VARIABLE") {

            _element = (
              <NestedComponent text={tree["name"]} children={element} />
            );
          }

          /*

            If the type is number, we want the value not the name

          */

          if (tree["type"] === "NUMBER") {
            _element = (
              <NestedComponent text={tree["value"]} children={element} />
            );
          }

          /*

            If there is a left side, we need to recursively call the function again
            and slot it into the display first

          */

          if (tree["left"]) {
            final_array_of_elements.push(
              <>
                {_iterate(tree.left, <></>)}
                {symbolMap[tree["type"]]}
              </>
            );
          }

          /*

            The right follows the left, and should be prepended by the symbol (done above)

          */

          if (tree["right"]) {
            // operator
            if (tree["name"]) {
              final_array_of_elements.push(
              <S.SubContainer>
                {tree["name"]}
                {_iterate(tree.right, <></>)}
              </S.SubContainer>
              )
            } else {
              final_array_of_elements.push(_iterate(tree.right, <></>));
            }
          }

          /*

            The arguments are of type array, and should be iterated through
            with recursive calls to the function, in order

          */


          if (tree.arguments) {
            if (tree["name"]) {
              final_array_of_elements.push(<NestedComponent text={tree["name"]} children={element} />)
            }
            tree.arguments.forEach((el: any, _: number) => {
              final_array_of_elements.push(_iterate(el, <></>));
            });
          }

          /*

            Return the formatted and copied jsx element

          */

          return _element;
        };

        /*
        
          If there is a top level left and right, we want to place them in order
          around the symbol. To achieve this we use a different initial 
          display than if there isn't a top level left and right

        */ 

        if (tree.left | tree.right) {
          final_array_of_elements.push(symbolMap[tree["value"]]);
          final_array_of_elements.unshift(_iterate(tree.left, <></>));
          final_array_of_elements.push(_iterate(tree.right, <></>));
        } else {
          /*

            There is not a top level split, so we want to prepend the while 
            formula with the initial function

          */

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
