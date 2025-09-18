import Button from '../../../components/Button';
import LeftIcon from '../../../components/Icons/LeftIcon';
import classes from './MealDetails.module.css';
import { recipeData } from '../../../data/RecipeData';
import { useNavigate, useParams } from 'react-router-dom';

export default function MealDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const recipeInfo = recipeData.find((recipe) => recipe.id === Number(id));

  return (
    <>
      <header className={classes.mealDetailsHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <div className={classes.mealHeroImage}>
          <img src={recipeInfo.image} alt={recipeInfo.title} />
        </div>
      </header>

      <section className={classes.mealDetailsSection}>
        <h1>{recipeInfo.title}</h1>

        <div className={classes.ingredientsCard}>
          <h3>Ingredients</h3>
          <ul className={classes.ingredientsList}>
            {recipeInfo.ingredients.map((ingred, i) => (
              <li key={i}>{ingred}</li>
            ))}
          </ul>
        </div>

        <div className={classes.recipeCard}>
          <h3>Recipe and steps</h3>
          <ul className={classes.recipeSteps}>
            {recipeInfo.direction.map((steps, i) => (
              <li key={i}>{steps}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
