import React, { useState } from 'react';

export function StopWatch() {
  const [tick, setTick] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function startTimer() {
    if (!tick) {
      const id = setInterval(() => {
        setTick(true);
        setIntervalId(id);
        setCount((count) => count + 1);
      }, 1000);
    } else {
      stopTimer(intervalId);
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    setTick(false);
  }

  function resetTimer() {
    if (!tick) {
      setCount(0);
    }
  }

  function icon() {
    if (tick) {
      return 'fa-solid fa-pause buttons';
    }
    return 'fa-solid fa-play buttons';
  }

  return (
    <>
      <div className='circle' onClick={resetTimer}>
        <div className='number'>{count}</div>
      </div>
      <div>
        <i className={icon()} onClick={startTimer}></i>
      </div>
    </>
  );
}
