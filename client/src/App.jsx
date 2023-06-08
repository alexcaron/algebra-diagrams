import React, { useState } from 'react';
import Step from './components/Step.jsx';
import axios from 'axios';

const App = () => {
  const [view, setView] = useState('equation');
  const signUpHandler = (e) => {
    e.preventDefault();
    const username = e.target.form.elements.userForSignup.value;
    const password = e.target.form.elements.passwordForSignup.value;
    const newUser = { username, password };
    axios.post('users/signup', newUser);
  }
  return (
    <>
    <div className='nav-bar'>
      <h3>Algebra Diagrammer</h3>
      <div className='nav-bar-right'>
        <span>Saved Equations</span>
        <span onClick={() => setView('signup')} >My Account</span>
      </div>
    </div>
    {
      view === 'equation'
      ? <div className='app-content'>
        <Step head={true}/>
      </div>
      : view === 'signup'
      ? <div className='signup'>
          <form>
            <label>Username:
              <input id='userForSignup' type='text' required/>
            </label>
            <label>Password:
              <input id='passwordForSignup' type='text' required/>
            </label>
            <input type='submit' value='Sign Up' onClick={signUpHandler}/>
          </form>
        </div>
      : null
    }
    </>
  )
}

export default App;