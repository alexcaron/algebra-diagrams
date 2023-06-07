import React from 'react';
import Step from './components/Step.jsx';

const App = () => {
  return (
    <>
    <div className='nav-bar'>
      <h3>Algebra Diagrammer</h3>
      <div className='nav-bar-right'>
        <span>Saved Equations</span>
        <span> My Account</span>
      </div>
    </div>
    <div className='app-content'>
      <Step head={true}/>
    </div>
    </>
  )
}

export default App;