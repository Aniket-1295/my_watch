import React, { useState, useEffect } from 'react';

export const Stopw = () => {

    const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 

  
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); 
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval); 
    }
    return () => clearInterval(interval); 
  }, [isRunning, time]);

  
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => {
        setIsRunning(false);
        setTime(0);
      }}>
        Reset
      </button>
    </div>
  );
  
  
}
