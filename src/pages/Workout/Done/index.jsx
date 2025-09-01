import Button from '../../../components/Button';
import classes from './WorkoutDone.module.css';
import { useContext } from 'react';
import { WorkoutDetailsContext } from '../../../Context/WorkoutDetailsContext';

export default function WorkoutDone({ closeDoneModal }) {
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  return (
    <>
      <section className={classes.modalDoneSection}>
        <h1>🎉 WORKOUT COMPLETED 💪</h1>
        <h3>{workoutDetails.title}</h3>

        <ul className={classes.exercisesList}>
          {workoutDetails.exercises.map((exercise) => (
            <li key={exercise.id} className={classes.exerciseCard}>
              <img src={exercise.picture} alt={exercise.name} className={classes.exercisePic} />
              <div className={classes.exerciseNote}>
                <div className={classes.note}>{exercise.note}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className={classes.closeDoneWraper}>
          <Button variation="fifth" onClick={closeDoneModal} className={classes.closeDoneModalBtn}>
            Close
          </Button>
        </div>
      </section>
    </>
  );
}
