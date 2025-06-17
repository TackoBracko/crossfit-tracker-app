import classes from './Timer.module.css';
import Button from '../../../Button';
import PlayIcon from '../../../Icons/PlayBtnIcon';
import PauseIcon from '../../../Icons/PauseBtnIcon';
import ResetIcon from '../../../Icons/ResetBtnIcon';
import { useEffect, useState } from 'react';

export default function Timer() {
  const [workoutTime, setWorkoutTime] = useState(0);
  const [isWorkoutRunning, setIsWorkoutRunning] = useState(false);
  const [restTime, setRestTime] = useState(0);
  const [isRestOn, setIsRestOn] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isWorkoutRunning) {
      intervalId = setInterval(() => setWorkoutTime((prevTime) => prevTime + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isWorkoutRunning]);

  useEffect(() => {
    let intervalId;
    if (isRestOn) {
      intervalId = setInterval(() => setRestTime((prevTime) => prevTime + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRestOn]);

  const Time = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startAndStopWorkout = () => {
    setIsWorkoutRunning((prevTime) => !prevTime);
  };

  const resetWorkout = () => {
    setWorkoutTime(0);
    setIsWorkoutRunning(false);
  };

  const startAndStopRest = () => {
    setIsRestOn((prevTime) => !prevTime);
  };

  const resetRest = () => {
    setRestTime(0);
    setIsRestOn(false);
  };

  return (
    <>
      <div className={classes.timerBar}>
        <div className={classes.timerBlock}>
          <span className={classes.timerName}>Workout Timer</span>
          <div className={classes.timerValue}>
            <span>{Time(workoutTime)}</span>
            <Button variation="sixth" onClick={startAndStopWorkout}>
              {isWorkoutRunning ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button variation="sixth" onClick={resetWorkout}>
              <ResetIcon />
            </Button>
          </div>
        </div>

        <div className={classes.timerBlock}>
          <span className={classes.timerName}>Rest Timer</span>
          <div className={classes.timerValue}>
            <span>{Time(restTime)}</span>
            <Button variation="sixth" onClick={startAndStopRest}>
              {isRestOn ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button variation="sixth" onClick={resetRest}>
              <ResetIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
