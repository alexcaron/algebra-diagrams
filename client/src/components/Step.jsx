import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
import Diagram from './Diagram.jsx';
const ce = new ComputeEngine();

const Step = ({equationStart = ["Equal",["Add",["Multiply",3,"x"],10],22], head = false, removeSelf = ()=>{} }) => {
  const [inputEquation, setInputEquation] = useState(equationStart);
  const [displayEquation, setDisplayEquation] = useState(equationStart);
  const [hasNextStep, setHasNextStep] = useState(false);

  return (
    <>
    <div className='step'>
      <div>
        <div className='equation-content'>
          <math-field onInput={e=>setInputEquation(JSON.parse(e.target.getValue('math-json')))}> {ce.serialize(inputEquation)} </math-field>
          <input type='button' value='show' onClick={e=>setDisplayEquation(inputEquation)} disabled={inputEquation===displayEquation}/>
        </div>
      </div>
      <div className='diagram-content'>
        <Diagram equation={displayEquation}/>
      </div>
    </div>
    {
      !hasNextStep &&
      <div className='add-remove-button-container'>
        <input className='add-step-button' type="button" value="v Add step" onClick={e => setHasNextStep(true)}/>
        {!head && <input className='remove-step-button' type="button" value="Remove step ^" onClick={removeSelf}/>}
      </div>
    }
    { hasNextStep && <Step equationStart={inputEquation} removeSelf={() => setHasNextStep(false)}/> }
  </>
  );
};

export default Step;