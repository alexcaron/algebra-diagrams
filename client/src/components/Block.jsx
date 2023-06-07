import React, {useState} from 'react';

const Block = ({value, color, border}) => {
  return (
    <div className={`block ${color}-${border}`}>
      {value}
    </div>
  )
};

export default Block;