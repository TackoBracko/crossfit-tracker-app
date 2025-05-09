import Button from '../../components/Button';
import LeftIcon from '../../components/Icons/LeftIcon';
import classes from './WorkoutDetails.module.css';
import { NavLink } from 'react-router-dom';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext';
import { useContext } from 'react';
import { crossfitData } from './../../Crossfit/data/CrossfitData';
import PlayIcon from './../../components/Icons/PlayBtnIcon';
import TimerIcon from './../../components/Icons/TimerBtnIcon';
import CaloriesIcon from './../../components/Icons/CaloriesBtnIcon';
import ExercisesIcon from './../../components/Icons/ExercisesIcon';

export default function WorkoutDetails() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);

  const handleWorkoutDetails = workoutDetails.exercises.map((exercise) => {
    const categoryData = crossfitData.find((category) => category.id === exercise.categoryId);
    const categoryId = categoryData.id;
    const mainExercise = categoryData.exercises.find((ex) => ex.id === exercise.subCategory);

    if (exercise.subCategory) {
      return (
        <li key={exercise.id}>
          <NavLink to={`/categories/${categoryId}/exercise/${mainExercise.id}/${exercise.id}`} className={classes.exerciseLink}>
            <div>
              <span>{exercise.name}</span>
            </div>
          </NavLink>
        </li>
      );
    } else {
      return (
        <li key={exercise.id}>
          <NavLink to={`/categories/${categoryId}/exercise/${exercise.id}`} className={classes.exerciseLink}>
            <div>
              <span>{exercise.name}</span>
            </div>
          </NavLink>
        </li>
      );
    }
  });

  return (
    <>
      <header className={classes.detailsHeader}>
        <NavLink to="/usercalendar">
          <Button variation="secondary" iconLeft={<LeftIcon />} />
        </NavLink>
        <h1 className={classes.workoutDetailsTitle}>
          Workout details for <span>{workoutDetails.title}</span>
        </h1>
      </header>

      <section className={classes.detailsMetrics}>
        <div className={classes.text}>
          <p>The goal is simple: build week over week. Strength lifts will gradually get heavier and accessory work will build in volume</p>
        </div>

        <div className={classes.timerBar}>
          <div className={classes.timerBlock}>
            <span className={classes.timerName}>Workout Timer</span>
            <div className={classes.timerValue}>
              <span className={classes.timerClock}>00:00</span>
              <PlayIcon />
            </div>
          </div>

          <div className={classes.timerBlock}>
            <span className={classes.timerName}>Rest Timer</span>
            <div className={classes.timerValue}>
              <span className={classes.timerClock}>00:00</span>
              <PlayIcon />
            </div>
          </div>
        </div>

        <div className={classes.metrics}>
          <div className={classes.metricItem}>
            <TimerIcon />
            <span className={classes.metricValue}>0m 00s</span>
          </div>

          <div className={classes.metricItem}>
            <ExercisesIcon />
            <span className={classes.metricValue}>0 kg</span>
          </div>

          <div className={classes.metricItem}>
            <CaloriesIcon />
            <span className={classes.metricValue}>0 cal</span>
          </div>
        </div>
      </section>

      <div className={classes.detailsContent}>
        <h4>
          Exercises <span>(click for info)</span>
        </h4>
        <ul className={classes.exercisesList}>{handleWorkoutDetails}</ul>

        <h4>Notes</h4>
        <ul>
          {workoutDetails.exercises.map((exercise) => (
            <li key={exercise.id} className={classes.exerciseItem}>
              <img src={exercise.picture} alt={exercise.name} className={classes.exercisePic} />
              <div>
                <p>{exercise.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
