import React, {useState} from 'react';
import Editor from './Editor.jsx';

const Step = () => {
  const [editing, setEditing] = useState(true);
  const [equation, setEquation] = useState('');
  return (
    <div className='step'>
      <Editor active={editing} setEquation={setEquation}/>
      <div className='equation-content'>
        <div>{equation}</div>
        <math-field>f(x) = \sin(x+\pi)</math-field>
      </div>
      <div className='diagram-content'>
      </div>
    </div>
  );
}

export default Step;