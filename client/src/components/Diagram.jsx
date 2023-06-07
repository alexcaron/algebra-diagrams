import React from 'react';
import Tape from './Tape.jsx';

const Diagram = ({equation}) => {
  console.log(equation);
  return (
    <div className='diagram'>
      <Tape expression={equation[2]}/>
      <Tape expression={equation[1]}/>
    </div>
  );
};

export default Diagram;