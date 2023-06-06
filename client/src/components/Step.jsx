import React, {useState} from 'react';

const Step = () => {
  const [editing, setEditing] = useState(true);
  const [equation, setEquation] = useState('');
  return (
    <div className='step'>
      <div className='equation-content'>
        {editing &&
        <label>
          Enter an equation:
          <input value={equation} onChange={e => setEquation(e.target.value)}/>
          <input type='submit' onClick={e => alert(equation)}/>
        </label>}
      </div>
      <div className='diagram-content'>
      </div>
    </div>
  );
}

export default Step;