import { useParams, Link, useNavigate } from 'react-router-dom';
import { crossfitData } from './../../data/CrossfitData.js';
import classes from './CrossfitMovement.module.css';
import Button from '../../components/Button/index.jsx';
import LeftIcon from '../../components/Icons/LeftIcon.jsx';

export default function CrossfitMovement() {
  const { categoryId, exerciseId } = useParams();
  console.log(exerciseId);
  const navigate = useNavigate();

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));

  return (
    <>
      <header className={classes.movementHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        {/*<Link to={`/categories/${categoryId}`}>
        </Link>*/}
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
        {selectedExercise.subCategory && (
          <div className={classes.subCategory}>
            <h3>Subcategories:</h3>
            {selectedExercise.subCategory.map((subCategory) => (
              <div key={subCategory.id} className={classes.subCategoryBox}>
                <Link to={`/categories/${categoryId}/exercise/${exerciseId}/${subCategory.id}`}>
                  <h4>{subCategory.name}</h4>
                  <img src={subCategory.picture} alt={subCategory.name} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
