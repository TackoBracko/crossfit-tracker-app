import Button from './../../../components/Button';
import LeftIcon from './../../../components/Icons/LeftIcon';
import classes from './WorkoutDetails.module.css';
import { NavLink } from 'react-router-dom';
import { WorkoutDetailsContext } from '../../../Context/WorkoutDetailsContext';
import { useContext } from 'react';

export default function WorkoutDetails() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);

  const handleWorkoutDetails = workoutDetails.exercises.map((exercise) => {
    const categoryId = exercise.categoryId;
    const exerciseId = exercise.subExercise;

    if (exercise.subExercise != null) {
      return (
        <li key={exercise.id}>
          <NavLink to={`/category/${categoryId}/exercises/${exerciseId}/${exercise.id}`} className={classes.exerciseLink}>
            <div>
              <span>{exercise.name}</span>
            </div>
          </NavLink>
        </li>
      );
    } else {
      return (
        <li key={exercise.id}>
          <NavLink to={`/category/${categoryId}/exercises/${exercise.id}`} className={classes.exerciseLink}>
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
        <NavLink to="/calendar">
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
      </section>

      <section className={classes.detailsContent}>
        <h4>
          Exercises <span>(click for info)</span>
        </h4>
        <ul className={classes.exercisesList}>{handleWorkoutDetails}</ul>

        <h4>Exercises details</h4>

        <ul>
          {workoutDetails.exercises.map((exercise) => (
            <li key={exercise.id} className={classes.exerciseItem}>
              <div>
                <p>{exercise.notes}</p>
              </div>
              <img src={exercise.picture} alt={exercise.name} className={classes.exercisePic} />
            </li>
          ))}
        </ul>
      </section>

      <NavLink to="/player">
        <Button variation="primary">Start Workout</Button>
      </NavLink>
    </>
  );
}
