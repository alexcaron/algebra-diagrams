import React, { useState, useEffect } from 'react';
import Step from './components/Step.jsx';
import axios from 'axios';

const App = () => {
  const [view, setView] = useState('equation');
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [savedEquations, setSavedEquations] = useState([]);

  useEffect(() => {
    axios.get('/status')
      .then(res => {
        if (res.data.passport && res.data.passport.user) {
          setUserId(res.data.passport.user);
          setAuthenticated(true);
        }
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
          setUserId(res.data.passport.user);
          setAuthenticated(true);
          setView('equation');
        } else {
          setView('login');
        }
      })
      .catch(err => console.log('error with login'));
  }

  const saveEquation = (equation, next) => {
    axios.post('/equations', {userId: userId, equation: equation, next: next});
  }

  const saveViewHandler = () => {
    axios.get(`/equations/${userId}`)
      .then(res => {
        return setSavedEquations(res.data);
      })
      .then(() => {
        setView('saved');
      });
  }

  return (
    <>
    <div className='nav-bar'>
      <h3 onClick={() => setView('equation')}>Algebra Diagrammer</h3>
      <div className='nav-bar-right'>
        { authenticated && <span onClick={saveViewHandler}>Saved Equations</span> }
        <span onClick={() => setView('login')} >My Account</span>
      </div>
    </div>
    {
      view === 'equation'
      ? <div className='app-content'>
        <Step head={true} authenticated={authenticated} saveEquation={saveEquation}/>
      </div>
      : view === 'signup'
      ? <div className='signup'>
          <form>
            <label>Username:
              <input id='userForSignup' type='text' required/>
            </label>
            <label>Password:
              <input id='passwordForSignup' type='password' required/>
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
              <input id='passwordForLogin' type='password' required/>
            </label>
            <input type='submit' value='Login' onClick={loginHandler}/>
          </form>
          <div className='no-account'>No account?</div>
          <input type='button' value='Sign Up' onClick={() => setView('signup')}/>
        </div>
      : view === 'saved'
      ? <div>
        {savedEquations.map(eq => <div key={eq._id} >{eq.equation}</div>)}
      </div>
      : null
    }
    </>
  )
}

export default App;