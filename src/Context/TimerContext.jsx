import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { WorkoutDetailsContext } from './WorkoutDetailsContext';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [isWorkoutRunning, setIsWorkoutRunning] = useState(false);
  const [restTime, setRestTime] = useState(0);
  const [isRestOn, setIsRestOn] = useState(false);
  const [workoutDone, setWorkoutDone] = useState(false);
  const [transitionTime, setTransitionTime] = useState(0);
  const [isTransitionOn, setIsTransitionOn] = useState(false);
  const [finishWorkoutBtn, setFinishWorkoutBtn] = useState(false);

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
  const workDur = Number(currentExercise.work) || 0;
  const restDur = Number(currentExercise.rest) || 0;

  const handleFinishWorkout = () => {
    setFinishWorkoutBtn(false);
    setWorkoutDone(true);
  };

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

  //transition

  useEffect(() => {
    let intervalId;
    if (isTransitionOn) {
      intervalId = setInterval(() => {
        setTransitionTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTransitionOn]);

  const stopWatchNextExercise = () => {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((i) => i + 1);
      setCurrentSet(1);
      setWorkoutTime(0);
      setIsWorkoutRunning(false);
      resetWorkout();
      resetRest();
      setFinishWorkoutBtn(false);
    }
  };

  //next exercise

  useEffect(() => {
    if (!isWorkoutRunning || workDur <= 0 || workoutTime < workDur) return;
    startAndStopWorkout();
    if (restDur > 0) {
      resetRest();
      startAndStopRest();
      return;
    }

    resetWorkout();
    resetRest();

    if (currentSet < setsTotal) {
      setCurrentSet((s) => s + 1);
      startAndStopWorkout();
    } else {
      if (currentIdx < exercises.length - 1) {
        setTransitionTime(10);
        setIsTransitionOn(true);

        setTimeout(() => {
          setIsTransitionOn(false);
          setTransitionTime(0);
          setCurrentIdx((i) => i + 1);
          setCurrentSet(1);
          resetWorkout();
          resetRest();
        }, 10000);
      } else {
        setFinishWorkoutBtn(true);
      }
    }
  }, [
    workoutTime,
    isWorkoutRunning,
    workDur,
    startAndStopWorkout,
    resetRest,
    startAndStopRest,
    restDur,
    currentSet,
    setsTotal,
    currentIdx,
    exercises.length,
    resetWorkout,
  ]);

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
          setTransitionTime(10);
          setIsTransitionOn(true);

          setTimeout(() => {
            setIsTransitionOn(false);
            setTransitionTime(0);
            setCurrentIdx((set) => set + 1);
            setCurrentSet(1);
            resetWorkout();
            resetRest();
          }, 10000);
        } else {
          setFinishWorkoutBtn(true);
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
    setIsWorkoutRunning(false);
    setCurrentIdx(0);
    setCurrentSet(1);
    setFinishWorkoutBtn(false);
    setWorkoutTime(0);
  }, [resetRest, workoutDetails]);

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
        transitionTime,
        isTransitionOn,
        finishWorkoutBtn,
        handleFinishWorkout,
        stopWatchNextExercise,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
