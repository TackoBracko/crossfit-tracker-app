import Button from '../../../components/Button';
import LeftIcon from '../../../components/Icons/LeftIcon';
import classes from './MealDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { RecipeContext } from '../../../Context/RecipeContext';

export default function MealDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { recipeDetails, recipeIngredients, recipeMeasures, fetchRecipeDetails, addToFavoriteRecipe, removeFromFavoriteRecipe, isFavoriteRecipe } =
    useContext(RecipeContext);

  useEffect(() => {
    fetchRecipeDetails(id);
  }, [id, fetchRecipeDetails]);

  if (!recipeDetails) return <p>Loading recipe details...</p>;

  const isFavorite = isFavoriteRecipe(recipeDetails);

  return (
    <>
      <header className={classes.mealDetailsHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <div className={classes.mealHeroImage}>
          <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
        </div>
      </header>

      <section className={classes.mealDetailsSection}>
        <h1>{recipeDetails.strMeal}</h1>

        <div className={classes.ingredientsCard}>
          <h3>Ingredients</h3>
          <ul className={classes.ingredientsList}>
            {recipeIngredients.map((ingredient, index) => (
              <li key={index}>
                {recipeMeasures[index]} {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.instructionsCard}>
          <h3>Recipe instructions</h3>
          <ul className={classes.recipeInstructions}>
            {recipeDetails &&
              recipeDetails.strInstructions.split(/[\r\n.]+/).map((step, index) => {
                return <li key={index}>{step.trim()}</li>;
              })}
          </ul>

          {recipeDetails && recipeDetails.strYoutube && (
            <div className={classes.mealVideo}>
              <p>🎬 Watch how to make it</p>
              <iframe
                width="560"
                height="315"
                src={recipeDetails.strYoutube.replace('watch?v=', 'embed/')}
                title={recipeDetails.strMeal}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className={classes.activeMealBtn}>
          {isFavorite ? (
            <Button variation="quaternary" onClick={() => removeFromFavoriteRecipe(recipeDetails.idMeal)}>
              ❌ Remove from Favorites
            </Button>
          ) : (
            <Button variation="primary" onClick={() => addToFavoriteRecipe(recipeDetails)}>
              ❤️ Add to Favorites
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
