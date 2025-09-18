import { NavLink } from 'react-router-dom';
import classes from './RecipeList.module.css';

export default function MealRecipeList({ recipes }) {
  return (
    <section className={classes.recipeSection}>
      {recipes.map((recipe) => (
        <NavLink to={`/meals/${recipe.id}`} key={recipe.id} className={classes.recipeBox}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </NavLink>
      ))}
    </section>
  );
}
