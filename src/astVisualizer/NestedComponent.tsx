import React from "react";
import * as S from "./styledComponents.styled";
import { useTreeProvider } from "../treeContext/context-provider";

type NestedComponentProps = {
  children: any;
  text?: string;
  node: any;
  map: any;
};

const NestedComponent: React.FC<NestedComponentProps> = ({
  children,
  text,
  node,
  map,
}) => {
  const [trigger, { tree }] = useTreeProvider();

  const removeNode = (type: string, level: number) => {
    /*

      Recursively iterate through the tree to find matching node for removal.
      Level is passed in that is generated in the visualizer component. Level
      is meant to solve the duplication issue. There are some bugs in it though,
      solving these would be a top priority. 

    */
    let new_tree = tree;
    let reached_level = 1;

    const _iterate = (tree: any, type: string, level: number): any => {
      if (tree) {
        if (tree.type === type) {
          reached_level += 1;
          /* 
          
            Have found the node being looked for... ideally would delete the parent nodes 
            reference to this whole branch, however, deleting its children works. 

            I though for some time about making the references null instead of deleting them, 
            should be slightly faster, but the appearance of a bunch of null references is 
            judged to be worse than a slight performance hit, which should be negligible.

          */
          if (
            (tree.name === text || tree.value === text || tree.type === text) &&
            reached_level >= level
          ) {
            const keys = Object.keys(tree);
            keys.forEach((key: string) => {
              delete tree[key];
            });

            return;
          }
        }

        _iterate(tree["left"], type, level);
        _iterate(tree["right"], type, level);
        if (tree.arguments) {
          tree["arguments"].forEach((args: any) => {
            _iterate(args, type, level);
          });
        }
      }
      return;
    };

    _iterate(new_tree, type, level);

    trigger(new_tree);
  };

  const handleClick = () => {
    removeNode(node["type"], map[node["type"]]);
  };
  if (!text) {
    return children;
  }
  return (
    <S.SubContainer onClick={handleClick}>
      {text} {children}
    </S.SubContainer>
  );
};

export default NestedComponent;
