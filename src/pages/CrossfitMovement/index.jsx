import { useParams, Link } from 'react-router-dom';
import { crossfitData } from '../../data/CrossfitData.js';
import classes from './CrossfitMovement.module.css';
//import play from './../../assets/icons/AppIcons/Play.svg';
import BackBtn from '../../components/Icons/BackBtnIcon.jsx';

export default function CrossfitMovement() {
  const { categoryId, exerciseId } = useParams();

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));

  return (
    <>
      <header className={classes.movementHeader}>
        <Link to={`/categories/${categoryId}`}>
          <BackBtn />
        </Link>
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
          {/*<img src={play} alt="Play Video Icon" />*/}
        </div>
        <p className={classes.videoDescription}>{selectedExercise.description}</p>
      </section>

      <section className={classes.subCategorySection}>
        {selectedExercise.subCategories && (
          <div className={classes.subCategory}>
            <h3>Subcategories:</h3>
            {selectedExercise.subCategories.map((subCategory) => (
              <div key={subCategory.id} className={classes.subCategoryBox}>
                <h4>{subCategory.name}</h4>
                <img src={subCategory.picture} alt={subCategory.name} />
                <div className={classes.subCategoryVideo}>
                  <p>Watch video:</p>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${subCategory.video}`}
                    title="YouTube video of movement"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  {/*<img src={play} alt="Play Video Icon" />*/}
                </div>
                <p className={classes.subVideoDescription}>{subCategory.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
