import { useParams, Link } from 'react-router-dom';
import { crossfitData } from '../../data/CrossfitData.js';
import classes from '../CrossfitMovement/CrossfitMovement.module.css';
import BackBtn from '../../components/Icons/BackBtnIcon.jsx';

export default function CrossfitSubCategory() {
  const { categoryId, exerciseId, subcategoryId } = useParams();
  console.log(subcategoryId);

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));
  const selectedSubCategory = selectedExercise.subCategory.find((subcategory) => subcategory.id === parseInt(subcategoryId));

  return (
    <>
      <header className={classes.movementHeader}>
        <Link to={`/categories/${categoryId}/exercise/${exerciseId}`}>
          <BackBtn />
        </Link>
        <img src={selectedSubCategory.picture} alt={selectedSubCategory.name} />
      </header>

      <section className={classes.movementInfo}>
        <div className={classes.movementVideo}>
          <h1>{selectedSubCategory.name}</h1>
          <p>Watch video for better experience</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedSubCategory.video}`}
            title="YouTube video of movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className={classes.videoDescription}>{selectedSubCategory.description}</p>
      </section>
    </>
  );
}
