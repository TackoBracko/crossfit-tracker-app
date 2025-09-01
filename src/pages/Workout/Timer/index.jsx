import classes from './Timer.module.css';
import Button from '../../../components/Button';
import PlayIcon from '../../../components/Icons/PlayBtnIcon';
import PauseIcon from '../../../components/Icons/PauseBtnIcon';
import Header from './Header';
import WorkoutDone from '../Done';
import Modal from '../../../components/Modal';
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../../../Context/TimerContext';
import { WorkoutDetailsContext } from '../../../Context/WorkoutDetailsContext';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function Timer() {
  const {
    currentExercise,
    exercises,
    currentIdx,
    currentSet,
    workoutTime,
    isWorkoutRunning,
    restTime,
    isRestOn,
    startAndStopWorkout,
    startAndStopRest,
    resetWorkout,
    resetRest,
    workoutDone,
    isTransitionOn,
    transitionTime,
    finishWorkoutBtn,
    handleFinishWorkout,
    stopWatchNextExercise,
    resetAllTimer,
  } = useContext(TimerContext);
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  const navigate = useNavigate();

  const nextExercise = exercises[currentIdx + 1] || { name: '', picture: '' };
  const setsTotal = currentExercise.sets || 1;
  const workoutDoneModalRef = useRef();
  const workFlashSign = useRef();
  const hasJustMetrics = !currentExercise.work && !currentExercise.rest;

  const Time = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const openWorkoutDoneModal = () => {
    if (workoutDoneModalRef.current) {
      workoutDoneModalRef.current.open();
    }
  };

  const closeWorkoutDoneModal = () => {
    if (workoutDoneModalRef.current) {
      workoutDoneModalRef.current.close();
      resetAllTimer();
      navigate(`/workouts/${workoutDetails.id}`);
    }
  };

  useEffect(() => {
    if (workoutDone) {
      openWorkoutDoneModal();
    }
  }, [workoutDone]);

  useEffect(() => {
    if (currentSet > 1 && workFlashSign.current) {
      const el = workFlashSign.current;
      el.classList.add(classes.flash);
      setTimeout(() => el.classList.remove(classes.flash), 700);
    }
  }, [currentSet]);

  return (
    <div className={classes.timerWrapper}>
      <Header picture={currentExercise.picture} />

      <div className={classes.setCounter}>
        <div className={classes.exerciseCount}>
          Exercise {currentIdx + 1}/{exercises.length}
        </div>

        <h2>
          {workoutDetails.title} <span>({currentExercise.name})</span>
        </h2>
      </div>

      <div className={classes.exerciseMetrics}>
        <div className={classes.metrics}>
          <p>Sets</p>
          <span>{currentExercise.sets}</span>
        </div>
        <div className={classes.metrics}>
          <p>Reps</p>
          <span>{currentExercise.reps}</span>
        </div>

        {currentExercise.weight && (
          <div className={classes.metrics}>
            <p>Weight</p>
            <span>{currentExercise.weight ? `${currentExercise.weight} kg` : ''}</span>
          </div>
        )}

        {currentExercise.work && (
          <div className={classes.metrics}>
            <p>Work</p>
            <span>{currentExercise.work ? `${currentExercise.work} s` : ''}</span>
          </div>
        )}

        {currentExercise.rest && (
          <div className={classes.metrics}>
            <p>Rest</p>
            <span>{currentExercise.rest ? `${currentExercise.rest} s` : ''}</span>
          </div>
        )}
      </div>

      <div className={classes.dualTimers}>
        <div ref={workFlashSign} className={`${classes.timerBlock} ${isWorkoutRunning ? classes.active : ''}`}>
          <div>
            {currentExercise.work ? (
              <>
                WORK
                <span>
                  {currentSet} set{currentSet > 1 ? 's' : ''} / {setsTotal} set{setsTotal > 1 ? 's' : ''}
                </span>
              </>
            ) : (
              <span>
                {currentExercise.sets && currentExercise.reps
                  ? `${currentExercise.sets} sets x ${currentExercise.reps} reps of ${currentExercise.name}`
                  : currentExercise.name}
              </span>
            )}
          </div>

          <CircularProgressbar className={classes.progressBar} text={Time(workoutTime)} />
          <div className={classes.timerControls}>
            <Button onClick={startAndStopWorkout}>{isWorkoutRunning ? <PauseIcon /> : <PlayIcon />}</Button>
            <Button onClick={resetWorkout}>Reset</Button>
          </div>
        </div>

        {currentExercise.rest && (
          <div className={`${classes.timerBlock} ${isRestOn ? classes.active : ''}`}>
            <div>
              REST
              <span>
                {currentSet} rest{currentSet > 1 ? 's' : ''} / {setsTotal} rest{setsTotal > 1 ? 's' : ''}
              </span>
            </div>
            <CircularProgressbar className={classes.progressBar} text={Time(restTime)} />
            <div className={classes.timerControls}>
              <Button onClick={startAndStopRest}>{isRestOn ? <PauseIcon /> : <PlayIcon />}</Button>
              <Button onClick={resetRest}>Reset</Button>
            </div>
          </div>
        )}
      </div>

      {hasJustMetrics && !isWorkoutRunning && workoutTime > 0 && (
        <div className={classes.metricsNavBtn}>
          {currentIdx < exercises.length - 1 ? (
            <Button variation="fifth" onClick={stopWatchNextExercise}>
              Next exercise
            </Button>
          ) : (
            <Button variation="fifth" onClick={handleFinishWorkout}>
              Finish workout
            </Button>
          )}
        </div>
      )}

      {nextExercise.name && (
        <div onClick={stopWatchNextExercise} className={`${classes.nextExerciseBox} ${isTransitionOn ? classes.transitionTimeBox : ''}`}>
          <img src={nextExercise.picture} alt={nextExercise.name} />
          <div className={classes.nextExerciseBoxText}>
            <span>Up next (or you can skip it)</span>
            <p>{nextExercise.name}</p>
            {isTransitionOn && <span className={classes.transitionCountdown}>Starts in {transitionTime}s</span>}
          </div>
        </div>
      )}

      {finishWorkoutBtn && (
        <div className={classes.finishWorkoutBtn}>
          <Button variation="fifth" onClick={handleFinishWorkout}>
            Finish Workout
          </Button>
        </div>
      )}

      {workoutDone && (
        <Modal ref={workoutDoneModalRef}>
          <WorkoutDone closeDoneModal={closeWorkoutDoneModal} />
        </Modal>
      )}
    </div>
  );
}
