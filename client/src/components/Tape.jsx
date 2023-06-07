import React from 'react';
import Block from './Block.jsx';

const Tape = ({expression, resizable}) => {
  return (
    <div className={`tape ${resizable}`}>
      { typeof expression !== 'object'
      ? <Block
          value={expression}
          border={typeof expression === 'number' ? 'solid' : 'dashed'}
          color={expression.toString()[0] === '-' ? 'red' : 'green'}
        />
      : expression[0] === 'Add'
      ? expression.slice(1).map((e,i) => <Tape key={i} expression={e} resizable='resizable'/>)
      : expression[0] === 'Multiply'
      ? Array(expression[1]).fill(1).map((e,i) => <Tape key={i} expression={expression[2]} resizable=''/>)
      : expression[0] === 'Subtract'
      ? expression.slice(1).map((e,i) => <Tape key={i} expression={i % 2 === 0 ? e : (typeof e === 'number') ? -e : '-'+ e} resizable='resizable'/>)
      : null
    }
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