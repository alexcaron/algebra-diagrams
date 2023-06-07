import React from 'react';
import Tape from './Tape.jsx';

const Diagram = ({equation}) => {
  console.log(equation);
  return (
    <div className='diagram'>
      <Tape expression={equation[2]} resizable='resizable' reversed=''/>
      <div className='space'></div>
      <Tape expression={equation[1]} resizable='resizable' reversed=''/>
    </div>
  );
};

export default Diagram;