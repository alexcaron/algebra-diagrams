import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
import Diagram from './Diagram.jsx';
const ce = new ComputeEngine();

const Step = ({equationStart = ["Equal",["Add",["Multiply",3,"x"],10],22]}) => {
  const [inputEquation, setInputEquation] = useState(equationStart);
  const [displayEquation, setDisplayEquation] = useState(equationStart);

  return (
    <>
    <div className='step'>
      <div>
        <div className='equation-content'>
          <math-field onInput={e=>setInputEquation(JSON.parse(e.target.getValue('math-json')))}>{ce.serialize(inputEquation)}</math-field>
          <input type="button" value="Go" onClick={e=>setDisplayEquation(inputEquation)} disabled={inputEquation===displayEquation}/>
        </div>
      </div>
      <div className='diagram-content'>
        <Diagram equation={displayEquation}/>
      </div>
    </div>
    <input className='add-step-button' type="button" value="Add step"/>
    </>
  );
}

export default Step;