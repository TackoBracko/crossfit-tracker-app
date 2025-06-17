import { NavLink } from 'react-router-dom';
import classes from './DayWithWorkout.module.css';
import Button from '../../Button';

export default function DayWithWorkout({ dateHasWorkout, addWorkoutsToContext, handleEditWorkout, handleDeleteWorkout, openCreateModal }) {
  return (
    <>
      <div className={classes.workoutBox}>
        <h3 className={classes.workoutDayTitle}>Your workout plan for {dateHasWorkout.date}</h3>
        {dateHasWorkout.workout.map((workout, index) => (
          <div key={index} className={classes.workoutPlan}>
            <NavLink to={`/workouts/${workout.id}`} key={workout.id} onClick={() => addWorkoutsToContext(workout)}>
              <h4 className={classes.workoutTitle}>{workout.title}</h4>
            </NavLink>

            <div>
              <p>Exercises:</p>
              <ul>
                {workout.exercises.map((exercise) => (
                  <li key={exercise.id}>{exercise.note}</li>
                ))}
              </ul>
            </div>

            <div className={classes.workoutBtn}>
              <Button variation="primary" onClick={() => handleEditWorkout(workout)}>
                Edit Workout
              </Button>

              <Button variation="quaternary" onClick={() => handleDeleteWorkout(workout.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Button onClick={openCreateModal} variation="fifth" className={classes.createWorkoutBtn}>
          Create new workout
        </Button>
      </div>
    </>
  );
}
