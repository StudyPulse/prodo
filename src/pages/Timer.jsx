import React, { useState, useEffect } from 'react';
import { Header } from '../components';

const Employees = () => {
  const [timerDuration] = useState(10 * 60); // 10 minutes in seconds
  const [timerValue, setTimerValue] = useState(timerDuration);
  const [timerRunning, setTimerRunning] = useState(false);

  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  const startTimer = () => {
    setTimerValue(timerDuration);
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerValue(timerDuration);
    setTimerRunning(false);
  };

  useEffect(() => {
    let timer;

    if (timerRunning && timerValue > 0) {
      timer = setInterval(() => {
        setTimerValue((prevValue) => prevValue - 1);
      }, 1000);
    } else if (timerValue === 0) {
      showNotification();
      setTimerRunning(false);
    }

    return () => clearInterval(timer);
  }, [timerRunning, timerValue]);

  const showNotification = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Timer Finished', {
            body: 'The timer has finished!',
          });
        }
      });
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Timer Page" />
      <div>
        <p>Timer Value: {formatTime(timerValue)}</p>
      </div>
      <div>
        {!timerRunning ? (
          <button onClick={startTimer}>Start Timer</button>
        ) : (
          <>
            <button onClick={pauseTimer}>Pause Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
          </>
        )}
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default Employees;

