import { useParams, useNavigate } from 'react-router-dom';
import { crossfitData } from '../../../../../../data/CrossfitData.js';
import Button from '../../../../../../components/Button/index.jsx';
import LeftIcon from '../../../../../../components/Icons/LeftIcon.jsx';
import classes from './../../Exercise/Exercise.module.css';

export default function SubExercise() {
  const { categoryId, exerciseId, subexerciseId } = useParams();
  const navigate = useNavigate();
  console.log(subexerciseId);

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));
  const selectedSubExercise = selectedExercise.subExercise.find((subexercise) => subexercise.id === parseInt(subexerciseId));

  return (
    <>
      <header className={classes.movementHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        {/*<Link to={`/categories/${categoryId}/exercise/${exerciseId}`}>
          
        </Link>*/}
        <img src={selectedSubExercise.picture} alt={selectedSubExercise.name} />
      </header>

      <section className={classes.movementInfo}>
        <div className={classes.movementVideo}>
          <h1>{selectedSubExercise.name}</h1>
          <p>Watch video for better experience</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedSubExercise.video}`}
            title="YouTube video of movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className={classes.videoDescription}>{selectedSubExercise.description}</p>
      </section>
    </>
  );
}
