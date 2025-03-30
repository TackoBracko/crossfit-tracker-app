import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import LeftIcon from '../../components/Icons/LeftIcon';
import classes from './WorkoutDetailsPage.module.css';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext';
import { useContext } from 'react';
import { crossfitData } from '../../data/CrossfitData';

export default function WorkoutDetailsPage() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);

  return (
    <>
      <header className={classes.detailsHeader}>
        <NavLink to="/usercalendar">
          <Button variation="secondary" iconLeft={<LeftIcon />} />
        </NavLink>
        <h1>Workout details for {workoutDetails.title}</h1>
      </header>
      <section>
        <h4>Exercises:</h4>
        <ul>
          {workoutDetails.exercises.map((exercise) => {
            const categoryData = crossfitData.find((category) => category.title === exercise.category);
            const categoryId = categoryData ? categoryData.id : '';
            return (
              <>
                <li key={exercise.id}>
                  <NavLink to={`/categories/${categoryId}/exercise/${exercise.id}`}>{exercise.name}</NavLink>
                </li>
              </>
            );
          })}
        </ul>

        <h4>Notes:</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{workoutDetails.notes}</p>
      </section>
    </>
  );
}
