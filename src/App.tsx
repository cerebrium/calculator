import { useState } from 'react';
import './App.css';
import * as Parser from './parser/formula-parser';
import { CalculatorBody } from './calculator';
import styled from "styled-components"
const parse = Parser.parse;

const App: React.FC = () =>{
  let [formula, setFormula] = useState('($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)');
  let [syntaxTree, syntaxTreeChange] = useState('');
  let [syntaxTreeJson, syntaxTreeJsonChange] = useState<any>(null);
  let [displayVisualizer, setDisplayVisualizer] = useState(false);

  const updateAst = () => {
    const newSyntaxTree = parse(formula);
    syntaxTreeChange(newSyntaxTree);

    const syntaxTree = JSON.stringify(newSyntaxTree, null, 2)
    syntaxTreeJsonChange(syntaxTree);
  };

  const convertAstToFormula = () => {     
    setDisplayVisualizer(() => !displayVisualizer);
  };

  return (
    // <div className='formulizer'>
    //   <h1>Welcome to the formulizer!</h1>
    //   <h3>Input formula</h3>
    //   <p>
    //     <textarea 
    //       cols={100} 
    //       rows={8} 
    //       value={formula} 
    //       onChange={(event) => setFormula(event.target.value)}/> <br/>
    //   </p>
    //   <p><button onClick={updateAst}>Parse and update AST View</button></p>
    //   <h3>Syntax tree</h3>
    //   <pre >{syntaxTreeJson}</pre>
    //   <p><button onClick={convertAstToFormula}>Convert AST to Formula</button></p>
    //   {displayVisualizer && <Visualizer  />}
    // </div>
    <Container>
      <CalculatorBody />
    </Container>
    

  );
}

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #222831;
`;


export default App;
