import React from 'react';
import Block from './Block.jsx';

const Tape = ({expression, resizable, reversed}) => {
  return (
    <div className={`tape ${resizable} ${reversed}`}>
      { typeof expression !== 'object'
      ? <Block
          value={expression}
          border={typeof expression === 'number' ? 'solid' : 'dashed'}
          color={expression.toString()[0] === '-' ? 'red' : 'green'}
          reversed={reversed}
        />
      : expression[0] === 'Add'
      ? expression.slice(1).map((e,i) => <Tape key={i} expression={e} resizable='resizable' reversed=''/>)
      : expression[0] === 'Multiply'
      ? Array(expression[1]).fill(1).map((e,i) => <Tape key={i} expression={expression[2]} resizable='' reversed=''/>)
      : expression[0] === 'Subtract'
      ? (<div className='tape stackable outline'>
          {expression.slice(1).map((e,i) => <Tape key={i} expression={i % 2 === 0 ? e : (typeof e === 'number') ? -e : '-'+ e} resizable='resizable' reversed={i % 2 === 0 ? '' : 'reversed'}/>)}
        </div>)
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