import { useState } from 'react';
import './App.css';
import * as Parser from './parser/formula-parser';
import Visualizer from './astVisualizer/Visualizer';
import { useTreeProvider } from './treeContext/context-provider';
const parse = Parser.parse;

const App: React.FC = () =>{
  let [formula, setFormula] = useState('($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)');
  let [syntaxTree, syntaxTreeChange] = useState('');
  let [syntaxTreeJson, syntaxTreeJsonChange] = useState<any>(null);
  let [displayVisualizer, setDisplayVisualizer] = useState(false);

  const [trigger, {subSections}] = useTreeProvider();


  const updateAst = () => {
    const newSyntaxTree = parse(formula);
    syntaxTreeChange(newSyntaxTree);

    const syntaxTree = JSON.stringify(newSyntaxTree, null, 2)
    syntaxTreeJsonChange(syntaxTree);
    trigger(syntaxTree)
  };

  const convertAstToFormula = () => {     
    setDisplayVisualizer(() => !displayVisualizer);
  };

  return (
    <div className='formulizer'>
      <h1>Welcome to the formulizer!</h1>
      <h3>Input formula</h3>
      <p>
        <textarea 
          cols={100} 
          rows={8} 
          value={formula} 
          onChange={(event) => setFormula(event.target.value)}/> <br/>
      </p>
      <p><button onClick={updateAst}>Parse and update AST View</button></p>
      <h3>Syntax tree</h3>
      <pre >{syntaxTreeJson}</pre>
      <p><button onClick={convertAstToFormula}>Convert AST to Formula</button></p>
      {displayVisualizer && <Visualizer  />}
    </div>
  );
}

export default App;
