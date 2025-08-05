import Button from '../../../components/Button';
import classes from './WorkoutDone.module.css';
import { useContext } from 'react';
import { WorkoutDetailsContext } from '../../../Context/WorkoutDetailsContext';
import { NavLink } from 'react-router-dom';

export default function WorkoutDone({ closeDoneModal }) {
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  return (
    <>
      <section className={classes.modalDoneSection}>
        <h1>🎉 WORKOUT COMPLETED 💪</h1>
        <h3>{workoutDetails.title}</h3>

        <div className={classes.workoutDoneSummary}>
          <ul className={classes.exercisesList}>
            {workoutDetails.exercises.map((exercise) => (
              <li key={exercise.id} className={classes.exerciseCard}>
                {exercise.note}
                <img src={exercise.picture} alt={exercise.name} className={classes.exercisePic} />
              </li>
            ))}
          </ul>
          <NavLink to="/workouts/:id">
            <Button onClick={closeDoneModal} className={classes.closeDoneModal}>
              Close
            </Button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
