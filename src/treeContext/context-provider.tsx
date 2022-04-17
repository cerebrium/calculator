import React, { useContext, useState } from "react";

type TreeResult = [
  (tree: any) => void,
  {
    tree: any;
    stringTree: string
  }
];

const TreeContext = React.createContext<TreeResult | undefined>(undefined);

export const TreeParser: React.FC<any> = ({ children }) => {
  const [tree, setTree] = useState(null);
  const [stringTree, setStringTree] = useState<string>('');

  const trigger = (tree: any) => {
    setTree(tree);
    const stringifiedTree = JSON.stringify(tree, null, 2);
    setStringTree(stringifiedTree);
  };

  return (
    <TreeContext.Provider value={[trigger, { tree, stringTree }]}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeProvider = () => {
  const context = useContext(TreeContext);

  if (context === undefined) {
    throw new Error("useTreeProvider must be used in the TreeParser");
  }

  return context;
};
