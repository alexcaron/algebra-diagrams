import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
import Diagram from './Diagram.jsx';

const Step = () => {
  const [inputEquation, setInputEquation] = useState('');
  const [displayEquation, setDisplayEquation] = useState('');
  return (
    <div className='step'>
      <div className='equation-content'>
        <math-field onInput={e=>setInputEquation(e.target.getValue('math-json'))}>-3x+10 = 22</math-field>
        <input type="submit" value="Go" onClick={e=>setDisplayEquation(inputEquation)}/>
      </div>
      <div className='diagram-content'>
        <Diagram equation={displayEquation}/>
      </div>
    </div>
  );
}

export default Step;