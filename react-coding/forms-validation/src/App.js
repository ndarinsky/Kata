import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const  [state, setState] = useState({
    username:'',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleClick = (e) => {
    e.preventDefault()
    console.log(state)
  }

  const handleInputChange = ({target}) => {
    setState(prev => ({
        ...prev,
        [target.name]: target.value
      })
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  // console.log('render')

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username-input">Username</label>
          <input
            id="username-input"
            name="username"
            required
            type="text"
            pattern="^[a-zA-Z0-9]+$"
            value = {state.username}
            onChange={handleInputChange} 
            minLength="4" />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            name="email"
            type="email"
            value = {state.email} 
            onChange={handleInputChange} 
            />
        </div>
        <div>
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            name="password"
            required
            type="password"
            value = {state.password}
            onChange={handleInputChange} 
            minLength="6" />
        </div>
        <div>
          <label htmlFor="password-confirm-input">
            Confirm Password
          </label>
          <input
            id="password-confirm-input"
            name="passwordConfirm"
            required
            type="password"
            minLength="6"
            value = {state.passwordConfirm}
            onChange={handleInputChange} 
            aria-describedby="password-mismatch-error" />
          <div
            className="error hidden"
            id="password-mismatch-error">
            The passwords do not match
          </div>
        </div>
        <div>
          <button type="submit" >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
