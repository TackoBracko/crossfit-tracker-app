import classes from './WorkoutDetailsPage.module.css';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext';
import { useContext } from 'react';
import Button from '../../components/Button';
import LeftIcon from '../../components/Icons/LeftIcon';
import { NavLink } from 'react-router-dom';

export default function WorkoutDetailsPage() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);

  return (
    <>
      <header className={classes.detailsHeader}>
        <NavLink to="/usercalendar">
          <Button variation="secondary" iconLeft={<LeftIcon />} />
        </NavLink>
        <h1>Workout details for: </h1>
      </header>
      <section>
        <h2>{workoutDetails.title}</h2>
        <p>{workoutDetails.exercise}</p>
        <p style={{ whiteSpace: 'pre-line' }}>{workoutDetails.notes}</p>
      </section>
    </>
  );
}
