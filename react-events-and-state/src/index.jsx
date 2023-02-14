import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function CustomButton({ text }) {
  const [isClicked, setClick] = useState(false);
  function handleClick() {
    setClick(!isClicked);
  }
  if (isClicked) {
    return (
      <button onClick={handleClick}>{text} is cool...</button>
    );
  }
  return (
    <button onClick={handleClick}>{text}</button>
  );

}

const element = (
  <div>
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
