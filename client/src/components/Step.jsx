import React, {useState} from 'react';
import {ComputeEngine} from '@cortex-js/compute-engine';
import Diagram from './Diagram.jsx';
const ce = new ComputeEngine();

const Step = ({equationStart = ["Equal",["Add",["Multiply",3,"x"],10],22], head = false, removeSelf = ()=>{} }) => {
  const [inputEquation, setInputEquation] = useState(equationStart);
  const [displayEquation, setDisplayEquation] = useState(equationStart);
  const [hasNextStep, setHasNextStep] = useState(false);
  const [userDescriptionStep, setUserDescriptionStep] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const saveHandler = () => {
    if (inputEquation !== displayEquation) {
      setSaveMessage('Be sure to show your latest equation before you save.');
      setTimeout(() => setSaveMessage(''), 5000);
    }
  }

  return (
    <>
    {head && <input type='button' value='Save' className='save-button' onClick={saveHandler}></input>}
    <div className='alert-message'>{saveMessage}</div>
    <div className='step'>
      <div>
        {
          head
          ? (<div className='equation-content'>
              <math-field onInput={e=>setInputEquation(JSON.parse(e.target.getValue('math-json')))}> {ce.serialize(inputEquation)} </math-field>
              <input type='button' value='show' onClick={e=>setDisplayEquation(inputEquation)} disabled={inputEquation===displayEquation}/>
            </div>)
          : (<div className='equation-content-solving'>
              <math-field read-only> {ce.serialize(inputEquation)} </math-field>
              <div className='user-input-step'><math-field></math-field><math-field></math-field></div>
            </div>)
        }
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