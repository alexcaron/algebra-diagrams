import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
import Diagram from './Diagram.jsx';

const Step = () => {
  const defaultEquation = ["Equal",["Add",["Multiply",3,"x"],10],22];  // also hardcoded into math-field element
  const [inputEquation, setInputEquation] = useState(defaultEquation);
  const [displayEquation, setDisplayEquation] = useState(defaultEquation);
  return (
    <div className='step'>
      <div>
        <div className='equation-content'>
          <math-field onInput={e=>setInputEquation(JSON.parse(e.target.getValue('math-json')))}>3x+10 = 22</math-field>
          <input type="submit" value="Go" onClick={e=>setDisplayEquation(inputEquation)} disabled={inputEquation===displayEquation}/>
        </div>
      </div>
      <div className='diagram-content'>
        <Diagram equation={displayEquation}/>
      </div>
    </div>
  );
}

export default Step;