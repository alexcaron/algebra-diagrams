import React, { useState, useEffect } from 'react';
import Step from './components/Step.jsx';
import axios from 'axios';

const App = () => {
  const [view, setView] = useState('equation');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/status')
      .then(res => {
        if (res.data.passport.user) setAuthenticated(true);
      });
    }, []);

  const signUpHandler = (e) => {
    e.preventDefault();
    const username = e.target.form.elements.userForSignup.value;
    const password = e.target.form.elements.passwordForSignup.value;
    const newUser = { username, password };
    axios.post('/signup', newUser)
      .then(res => {
        setView('login');
      })
      .catch(err => console.log('error with signup'));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const username = e.target.form.elements.userForLogin.value;
    const password = e.target.form.elements.passwordForLogin.value;
    const user = { username, password };
    axios.post('/login', user)
      .then(res => {
        console.log('response from post, ', res);
        if (res.data.passport.user) {
          setAuthenticated(true);
          setView('equation');
        } else {
          setView('login');
        }
      })
      .catch(err => console.log('error with login'));
  }

  return (
    <>
    <div className='nav-bar'>
      <h3>Algebra Diagrammer</h3>
      <div className='nav-bar-right'>
        { authenticated && <span onClick={() => setView('saved')}>Saved Equations</span> }
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
      : view === 'login'
      ? <div className='login'>
          <form>
            <label>Username:
              <input id='userForLogin' type='text' required/>
            </label>
            <label>Password:
              <input id='passwordForLogin' type='text' required/>
            </label>
            <input type='submit' value='Login' onClick={loginHandler}/>
          </form>
        </div>
      : null
    }
    </>
  )
}

export default App;