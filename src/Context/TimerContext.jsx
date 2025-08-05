import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { WorkoutDetailsContext } from './WorkoutDetailsContext';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [isWorkoutRunning, setIsWorkoutRunning] = useState(false);
  const [restTime, setRestTime] = useState(0);
  const [isRestOn, setIsRestOn] = useState(false);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const exercises = workoutDetails && workoutDetails.exercises ? workoutDetails.exercises : [];
  const currentExercise = exercises[currentIdx] || {
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
    picture: '',
    work: '',
    rest: '',
  };
  const setsTotal = currentExercise.sets || 1;
  const workDur = Number(currentExercise.work) || 1;
  const restDur = Number(currentExercise.rest) || 1;
  const [workoutDone, setWorkoutDone] = useState(false);

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

  //timer functions on/off

  const startAndStopWorkout = useCallback(() => {
    if (isRestOn) {
      setIsRestOn(false);
      setRestTime(0);
    }
    setIsWorkoutRunning((prevTime) => !prevTime);
  }, [isRestOn]);

  const resetWorkout = useCallback(() => {
    setWorkoutTime(0);
    setIsWorkoutRunning(false);
  }, []);

  const startAndStopRest = useCallback(() => {
    if (isWorkoutRunning) {
      setIsWorkoutRunning(false);
      setWorkoutTime(0);
    }
    setIsRestOn((prevTime) => !prevTime);
  }, [isWorkoutRunning]);

  const resetRest = useCallback(() => {
    setRestTime(0);
    setIsRestOn(false);
  }, []);

  //next exercise

  useEffect(() => {
    if (isWorkoutRunning && workoutTime >= workDur) {
      startAndStopWorkout();
      resetRest();
      startAndStopRest();
    }
  }, [workoutTime, isWorkoutRunning, workDur, startAndStopWorkout, resetRest, startAndStopRest]);

  useEffect(() => {
    if (isRestOn && restTime >= restDur) {
      startAndStopRest();
      resetWorkout();
      resetRest();

      if (currentSet < setsTotal) {
        setCurrentSet((set) => set + 1);
        startAndStopWorkout();
      } else {
        if (currentIdx < exercises.length - 1) {
          setTimeout(() => {
            setCurrentIdx((set) => set + 1);
            setCurrentSet(1);
            resetWorkout();
            resetRest();
            startAndStopWorkout();
          }, 10000);
        } else {
          setWorkoutDone(true);
        }
      }
    }
  }, [
    restTime,
    isRestOn,
    restDur,
    currentSet,
    setsTotal,
    currentIdx,
    exercises.length,
    startAndStopRest,
    resetWorkout,
    startAndStopWorkout,
    resetRest,
  ]);

  useEffect(() => {
    setWorkoutDone(false);
    setCurrentIdx(0);
    setCurrentSet(1);
  }, [workoutDetails]);

  return (
    <TimerContext.Provider
      value={{
        currentExercise,
        workoutTime,
        isWorkoutRunning,
        restTime,
        isRestOn,
        currentIdx,
        currentSet,
        exercises,
        startAndStopWorkout,
        startAndStopRest,
        resetWorkout,
        resetRest,
        workoutDone,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
