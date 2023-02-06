import React, { useState } from 'react';

export function HotButton({ text }) {
  const [isClicked, setClick] = useState(0);
  function handleClick() {
    setClick(isClicked + 1);
  }
  let temperatureClass;
  if (isClicked < 4) {
    temperatureClass = 'purple';
  } else if (isClicked < 7) {
    temperatureClass = 'light-purple';
  } else if (isClicked < 10) {
    temperatureClass = 'red';
  } else if (isClicked < 13) {
    temperatureClass = 'orange';
  } else if (isClicked < 16) {
    temperatureClass = 'yellow';
  } else {
    temperatureClass = 'white';
  }
  return (
    <button className={`hot-button ${temperatureClass}`} onClick={handleClick}> {text}</button>
  );
}
