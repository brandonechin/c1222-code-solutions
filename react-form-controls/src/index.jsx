import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('state:', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type='text' name='username' value={username} onChange={handleUsernameChange} />
      <label>Password</label>
      <input type='password' name='password' value={password} onChange={handlePasswordChange} />
      <button type='submit'>Sign Up</button>
    </form>
  );
}
const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm/>);
