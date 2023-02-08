import React, { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function passwordChecks() {
    let icon;
    let message;
    if (!password) {
      icon = 'fa-solid fa-x x';
      message = 'A password is required';
    } else if ((password.length) < 8) {
      message = 'Your password is too short.';
      icon = 'fa-solid fa-x x';
    } else {
      icon = 'fa-solid fa-check check';
      message = '';
    }
    return [icon, message];
  }
  const [icon, message] = passwordChecks();
  return (
    <>
      <div>
        <label>Password</label>
      </div>
      <input type='password' value={password} onChange={handlePasswordChange} />
      <i className={icon}></i>
      <div>
        <h5>{message}</h5>
      </div>
    </>
  );
}
