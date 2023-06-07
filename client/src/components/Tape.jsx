import React from 'react';
import Block from './Block.jsx';

const Tape = ({expression}) => {
  return (
    <div className='tape'>
      { typeof expression !== 'object'
      ? <Block value={expression} border='dashed' color='green' />
      : expression[0] === 'Add'
      ? expression.slice(1).map(e => <Tape expression={e}/>)
      : expression[0] === 'Multiply'
      ? Array(expression[1]).fill(1).map((e,i) => <Tape key={i} expression={expression[2]}/>)
      : null }
    </div>
  )
};

export default Tape;

// { typeof expression !== 'object'
// ? <Block border='dashed' color='green' value={expression}>
// : expression[0] === 'Add'
// ? (<><Block border='dashed' color='green' value={expression[1]} /> <Block border='dashed' color='green' value={expression[2]}/></>)
// : expression[0] === 'Multiply'
// ? (Array(expression[1]).fill(1).map(i => <Block key={i} border='dashed' color='green' value={expression[2]}/>)
// : null
// }