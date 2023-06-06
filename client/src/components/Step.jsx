import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
const Step = () => {
  const [editing, setEditing] = useState(true);
  const [equation, setEquation] = useState('');
  const update = (e) => {
    console.log(e.target.getValue('math-json'));
  };

  return (
    <div className='step'>
      <div className='equation-content'>
        <math-field onInput={e=>update(e)}>3x+10 = 25</math-field>
      </div>
      <div className='diagram-content'>
        <div>diagram here</div>
      </div>
    </div>
  );
}

export default Step;