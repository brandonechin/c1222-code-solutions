import React from 'react';
import ReactDOM from 'react-dom/client';

export function RegistrationForm() {

  return (
    <form>
      <input></input>
      <input></input>
      <button></button>
    </form>
  );
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm/>);
