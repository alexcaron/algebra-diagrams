import React, {useState} from 'react';

const Editor = ({active, setEquation}) => {
  const [input, setInput] = useState('')
  return (
    <div className='equation-input'>
      <label>
        Enter an equation:
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <input type='submit' onClick={e => setEquation(input)} value='go'/>
      </label>
    </div>
  );
}

export default Editor;