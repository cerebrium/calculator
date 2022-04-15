import React, { useContext, useState } from "react";

type TreeResult = [
  (tree: any) => void,
  {
    subSections: any;
  }
];

const TreeContext = React.createContext<TreeResult | undefined>(undefined);

const parseTree = (tree: any) => {
    const _iterate = () => {
        const _iterateNode = (node: any) => {
            if (node.type === "section") {
                node.subSections = node.subSections.map((subSection: any) => {
                    return _iterateNode(subSection);
                });
            }
            return node;
        };
        return _iterateNode(tree);
    }
}

export const TreeParser: React.FC<any> = ({ children }) => {
    const [subSections, setSubsections] = useState([]);

  const trigger = (tree: any) => {
    /*

        Parse the tree
        Each 'type' needs to be a subdivision
           Left and right are the subsections

    */

    
        console.log("tree: ", tree)
  };

  return (
    <TreeContext.Provider value={[trigger, {subSections}]}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeProvider = () => {
  const context = useContext(TreeContext);

  if (context === undefined) {
    throw new Error("useThemeProvider must be used in the TreeParser");
  }

  return context;
};