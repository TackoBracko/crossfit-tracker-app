import { crossfitData } from '../../../../data/CrossfitData.js';
import { Link, useParams } from 'react-router-dom';
import classes from './../ExercisesList/ExercisesList.module.css';
import Button from '../../../../components/Button/index.jsx';
import LeftIcon from '../../../../components/Icons/LeftIcon.jsx';

export default function ExercisesList() {
  const { categoryId } = useParams();
  console.log(categoryId);

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));

  return (
    <>
      <header className={classes.categoryListHeader}>
        <div className={classes.categoryHeader}>
          <Link to="/category">
            <Button variation="secondary" iconLeft={<LeftIcon />} />
          </Link>
          <h1>{selectedCategory.title}</h1>
        </div>
        <p>{selectedCategory.categoryDescription}</p>
      </header>

      <section className={classes.categoryListSection}>
        {selectedCategory.exercises.map((exercise) => {
          return (
            <div key={exercise.id} className={classes.exerciseBox}>
              <Link to={`/category/${categoryId}/exercises/${exercise.id}`}>
                <h3>{exercise.name}</h3>
                <img src={exercise.picture} />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
