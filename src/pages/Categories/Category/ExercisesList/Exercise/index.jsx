import { useParams, Link, useNavigate } from 'react-router-dom';
import { crossfitData } from '../../../../../data/CrossfitData.js';
import classes from './../Exercise/Exercise.module.css';
import Button from '../../../../../components/Button/index.jsx';
import LeftIcon from '../../../../../components/Icons/LeftIcon.jsx';

export default function Exercise() {
  const { categoryId, exerciseId } = useParams();
  const navigate = useNavigate();
  console.log(exerciseId);

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));

  return (
    <>
      <header className={classes.movementHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <img src={selectedExercise.picture} alt={selectedExercise.name} />
      </header>

      <section className={classes.movementInfo}>
        <div className={classes.movementVideo}>
          <h1>{selectedExercise.name}</h1>
          <p>Watch video for better experience</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedExercise.video}`}
            title="YouTube video of movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className={classes.videoDescription}>{selectedExercise.description}</p>
      </section>

      <section className={classes.subCategorySection}>
        {selectedExercise.subExercise && (
          <div className={classes.subExercise}>
            <h3>Subcategories:</h3>
            {selectedExercise.subExercise.map((subExercise) => (
              <div key={subExercise.id} className={classes.subCategoryBox}>
                <Link to={`/category/${categoryId}/exercises/${exerciseId}/${subExercise.id}`}>
                  <h4>{subExercise.name}</h4>
                  <img src={subExercise.picture} alt={subExercise.name} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
