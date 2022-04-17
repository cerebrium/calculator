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
  const [_, { tree, stringTree }] = useTreeProvider();

  const wrappedElements = useMemo(() => {
    if (tree) {
      // console.log("tree changed: ", stringTree);
      const traverse = (tree: any) => {
        const tracking_map: any = {}
        let final_array_of_elements: any = [];

        const _iterate = (tree: any, element: any): any => {
          let _element = element;
          if (tracking_map[tree.type]) {
            tracking_map[tree.type] += 1
          } else {
            tracking_map[tree.type] = 1
          }

          /*

            Name is where the text wanted is found
            Due to the placement of the recursive function, this should only be done for variables

          */
          if (tree["name"] && tree["type"] === "VARIABLE") {
            _element = (
              <NestedComponent text={tree["name"]} children={element} node={tree} map={tracking_map}/>
            );
          }

          /*

            If the type is number, we want the value not the name

          */

          if (tree["type"] === "NUMBER") {
            _element = (
              <NestedComponent text={tree["value"]} children={element} node={tree} map={tracking_map}/>
            );
          }

          if (tree["type"] === "PI") {
            _element = (
              <NestedComponent text={tree["type"]} children={element} node={tree} map={tracking_map}/>
            );
          }

          /*

            If there is a left side, we need to recursively call the function again
            and slot it into the display first

          */

          if (tree["left"]) {
            final_array_of_elements.push(
              <NestedComponent children={[_iterate(tree.left, element), symbolMap[tree["type"]]]} node={tree} map={tracking_map}/>
            );
          }

          /*

            The right follows the left, and should be prepended by the symbol (done above)

          */

          if (tree["right"]) {
            // operator
            if (tree["name"]) {
              final_array_of_elements.push(
                <NestedComponent children={[_iterate(tree.right, element), tree["name"]]} node={tree} map={tracking_map}/>
              )
            } else {
              final_array_of_elements.push(
                <NestedComponent children={_iterate(tree.right, element)} node={tree} map={tracking_map}/>
              )
            }
          }

          /*

            The arguments are of type array, and should be iterated through
            with recursive calls to the function, in order

          */


          if (tree.arguments) {
            if (tree["name"]) {
              final_array_of_elements.push(<NestedComponent text={tree["name"]} children={element} node={tree} map={tracking_map}/>)
            } 
            tree.arguments.forEach((args: any) => {
              final_array_of_elements.push(_iterate(args, <></>));
            })
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

        if (tree["left"] || tree["right"]) {
          final_array_of_elements.push(symbolMap[tree["type"]]);
          final_array_of_elements.unshift(_iterate(tree.left, <></>));
          final_array_of_elements.push(_iterate(tree.right, <></>));
        } else {
          /*

            There is not a top level split, so we want to prepend the whole 
            formula with the initial function

          */

          final_array_of_elements.push(<>{tree["name"]}</>);
          if (tree["arguments"]) {
            final_array_of_elements.push(tree["arguments"].map((el: any) => {
              return _iterate(el, <></>);
            }));
          }
        }
        return final_array_of_elements;
      };
      return traverse(tree);
    }

    return <></>;
  }, [stringTree]);

  return (
    wrappedElements.length && <S.Container>
      <S.OuterContainer>{wrappedElements}</S.OuterContainer>
    </S.Container>
  );
};

export default Visualizer;
