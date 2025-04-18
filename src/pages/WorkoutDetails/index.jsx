import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import LeftIcon from '../../components/Icons/LeftIcon';
import classes from './WorkoutDetailsPage.module.css';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext';
import { useContext } from 'react';
import { crossfitData } from '../../data/CrossfitData';

export default function WorkoutDetailsPage() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);

  const handleWorkoutDetails = workoutDetails.exercises.map((exercise) => {
    const categoryData = crossfitData.find((category) => category.title === exercise.category);
    const categoryId = categoryData ? categoryData.id : '';
    const isSubExercise = exercise.subCategory && exercise.subCategory !== 'Do not have';

    if (isSubExercise) {
      const mainExercise = categoryData && categoryData.exercises.find((ex) => ex.name === exercise.subCategory);

      return (
        <li key={exercise.id}>
          <NavLink to={`/categories/${categoryId}/exercise/${mainExercise.id}/subcategory/${exercise.id}`}>{exercise.name}</NavLink>
        </li>
      );
    } else {
      return (
        <li key={exercise.id}>
          <NavLink to={`/categories/${categoryId}/exercise/${exercise.id}`}>{exercise.name}</NavLink>
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
        <h1>Workout details for {workoutDetails.title}</h1>
      </header>
      <section>
        <h4>Exercises:</h4>
        <ul>{handleWorkoutDetails}</ul>

        <h4>Notes:</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{workoutDetails.notes}</p>
      </section>
    </>
  );
}
