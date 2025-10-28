import { useContext } from 'react';
import { RecipeContext } from '../../../Context/RecipeContext';
import { NavLink } from 'react-router-dom';
import classes from './FavoritesMealsPreview.module.css';

export default function FavoritesMealsPreview() {
  const { favoriteRecipes } = useContext(RecipeContext);

  return (
    <>
      <header className={classes.favoritesHeader}>
        <h1>⭐ Favorites Recipes ⭐</h1>
        <NavLink to="/favorites" className={classes.viewAllFavorites}>
          View all
        </NavLink>
      </header>

      <section className={classes.favoritesSection}>
        {favoriteRecipes && favoriteRecipes.length > 0 ? (
          <div className={classes.favoritesBlock}>
            {favoriteRecipes.slice(0, 5).map((recipe) => (
              <NavLink
                key={recipe.idMeal || recipe.id}
                to={recipe.idMeal ? `/meals/${recipe.idMeal}` : `/my-recipes/${recipe.id}`}
                className={classes.favoritesBox}
              >
                <img src={recipe.strMealThumb || recipe.picture} alt={recipe.strMeal || recipe.picture} />
                <h3>{recipe.strMeal || recipe.title}</h3>
              </NavLink>
            ))}
          </div>
        ) : (
          <p>You have no favorite recipes yet</p>
        )}
      </section>
    </>
  );
}
