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
            <div className={classes.workoutControls}>
              <h4 className={classes.workoutTitle}>{workout.title}</h4>
              <div className={classes.workoutBtns}>
                <Button variation="primary" onClick={() => handleEditWorkout(workout)}>
                  EDIT
                </Button>

                <Button variation="quaternary" onClick={() => handleDeleteWorkout(workout.id)}>
                  X
                </Button>
              </div>
            </div>

            <div className={classes.workoutExercises}>
              <p>Exercises:</p>
              <ul>
                {workout.exercises.map((exercise) => (
                  <li key={exercise.id}>{exercise.note}</li>
                ))}
              </ul>
            </div>
            <NavLink to={`/workouts/${workout.id}`} key={workout.id} onClick={() => addWorkoutsToContext(workout)}>
              <Button variation="primary">Start workout</Button>
            </NavLink>
          </div>
        ))}

        <Button onClick={openCreateModal} variation="fifth">
          Create new workout
        </Button>
      </div>
    </>
  );
}
