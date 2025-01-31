import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { crossfitData } from './../../data/CrossfitData.js';
import classes from './CrossfitMovement.module.css';
import Button from '../../components/Button/index.jsx';
import LeftIcon from '../../components/Icons/LeftIcon.jsx';
import UserCalendar from '../UserCalendar/index.jsx';

export default function CrossfitMovement() {
  const { categoryId, exerciseId } = useParams();

  const selectedCategory = crossfitData.find((category) => category.id === parseInt(categoryId));
  const selectedExercise = selectedCategory.exercises.find((exercise) => exercise.id === parseInt(exerciseId));

  const [showCalendarPopUp, setShowCalendarPopUp] = useState(false);

  const toggleCalendarPopUp = () => {
    setShowCalendarPopUp(!showCalendarPopUp);
  };

  return (
    <>
      <header className={classes.movementHeader}>
        <Link to={`/categories/${categoryId}`}>
          <Button variation="secondary" iconLeft={<LeftIcon />} />
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
        </div>
        <p className={classes.videoDescription}>{selectedExercise.description}</p>
        <Button variation="primary" onClick={toggleCalendarPopUp}>
          Add to calendar
        </Button>
      </section>

      {showCalendarPopUp && (
        <div className={classes.popupDisplay}>
          <div className={classes.popupText}>
            <button onClick={toggleCalendarPopUp} className={classes.closeBtn}>
              X
            </button>
            <h2>Choose a Date</h2>
            <UserCalendar />
          </div>
        </div>
      )}

      <section className={classes.subCategorySection}>
        {selectedExercise.subCategories && (
          <div className={classes.subCategory}>
            <h3>Subcategories:</h3>
            {selectedExercise.subCategories.map((subCategory) => (
              <div key={subCategory.id} className={classes.subCategoryBox}>
                <h4>{subCategory.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={subCategory.picture} alt={subCategory.name} />
                </div>
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
                </div>
                <p className={classes.subVideoDescription}>{subCategory.description}</p>
                <Button variation="primary" type="submit">
                  Add to calendar
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
