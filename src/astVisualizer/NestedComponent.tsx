import React from "react";
import * as S from "./styledComponents.styled";
import { useTreeProvider } from "../treeContext/context-provider";


type NestedComponentProps = {
  children: any;
  text?: string;
  node: any
  map: any
};

const NestedComponent: React.FC<NestedComponentProps> = ({
  children,
  text,
  node,
  map
}) => {
  const [trigger, { tree, stringTree }] = useTreeProvider();

  const removeNode = (type: string, level: number) => {
    /*

      iterate through, find the node, whilst keeping track of path
      set node equal to null or delete from path

    */
    let new_tree = tree
    let reached_level = 1


    const _iterate = (tree: any, type: string, level: number): any => {
      if (tree) {
        if (tree.type === type) {

          reached_level += 1
          if ((tree.name === text || tree.value === text || tree.type === text) && reached_level >= level) {
            tree.name = null
            tree.type = null
            tree.left = null
            tree.right = null
            tree.value = null
            tree.arguments = null
            
            return;
          }
        } 

        _iterate(tree["left"], type, level)
        _iterate(tree["right"], type, level)
        if (tree.arguments) {
          tree["arguments"].forEach((args: any) => {
            _iterate(args, type, level)
          })
        }
        
      }
      return;
    }

    _iterate(new_tree, type, level)


    trigger(new_tree);
  }

  const handleClick = () => {
    removeNode(node["type"], map[node["type"]])
  }
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
