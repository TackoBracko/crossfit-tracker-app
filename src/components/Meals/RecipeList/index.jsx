import { NavLink } from 'react-router-dom';
import classes from './RecipeList.module.css';

export default function MealRecipeList({ recipes }) {
  return (
    <section className={classes.recipeSection}>
      {recipes.map((recipe) => (
        <NavLink to={`/meals/${recipe.idMeal}`} key={recipe.idMeal} className={classes.recipeBox}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </NavLink>
      ))}
    </section>
  );
}
