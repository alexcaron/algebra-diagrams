import React, {useState} from 'react';

const Block = ({value, color, border, reversed}) => {
  const [dotView, setDotView] = useState(false);
  console.log(typeof value);
  return (
    <div className={`block ${color}-${border} ${reversed}`} onClick={e => setDotView(!dotView)}>
      {
        !dotView
        ? value
        : typeof value === 'number'
        ? (Array(Math.abs(value)).fill(1).map((v, i) => <div className='dot' key={i}></div>))
        : (<>
            <div className='dot-variable'></div>
            <div className='dot-variable'></div>
            <div> ... </div>
            <div className='dot-variable'></div>
          </>)
      }
    </div>
  )
};

export default Block;