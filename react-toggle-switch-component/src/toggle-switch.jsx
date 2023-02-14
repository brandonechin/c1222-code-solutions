import React, { useState } from 'react';

export function ToggleSwitch() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  let position;
  if (!click) {
    position = 'on';
  } else {
    position = 'off';
  }
  return (
    <div className='container'>
      <div className={`switch ${position}`}>
        <span className={`slider ${position}`} onClick={handleClick}></span>
      </div>
      <h2>{position}</h2>
    </div>
  );
}
