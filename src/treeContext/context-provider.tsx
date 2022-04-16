import React, { useContext, useState } from "react";

type TreeResult = [
  (tree: any) => void,
  {
    tree: any;
  }
];

const TreeContext = React.createContext<TreeResult | undefined>(undefined);

export const TreeParser: React.FC<any> = ({ children }) => {
  const [tree, setTree] = useState(null);

  const trigger = (tree: any) => {
    setTree(tree);
  };

  return (
    <TreeContext.Provider value={[trigger, { tree }]}>
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
