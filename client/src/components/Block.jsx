import React, {useState} from 'react';

const Block = ({value, color, border, reversed}) => {
  return (
    <div className={`block ${color}-${border} ${reversed}`}>
      {value}
    </div>
  )
};

export default Block;