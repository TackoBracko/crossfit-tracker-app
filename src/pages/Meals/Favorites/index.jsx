import classes from './AllFavoritesMeals.module.css';
import { RecipeContext } from '../../../Context/RecipeContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Button from '../../../components/Button';
import LeftIcon from '../../../components/Icons/LeftIcon';

export default function AllFavoritesMeals() {
  const { favoriteRecipes } = useContext(RecipeContext);
  const navigate = useNavigate();

  return (
    <>
      <header className={classes.favoritesHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <h1> All Favorites Recipes </h1>
      </header>

      <section className={classes.favoritesSection}>
        {favoriteRecipes && favoriteRecipes.length > 0 ? (
          favoriteRecipes.slice(0, 6).map((recipe) => (
            <NavLink
              key={recipe.idMeal || recipe.id}
              to={recipe.idMeal ? `/meals/${recipe.idMeal}` : `/my-recipes/${recipe.id}`}
              className={classes.favoritesBox}
            >
              <img src={recipe.strMealThumb || recipe.picture} alt={recipe.strMeal || recipe.picture} />
              <h3>{recipe.strMeal || recipe.title}</h3>
            </NavLink>
          ))
        ) : (
          <p>You have no favorite recipes yet</p>
        )}
      </section>
    </>
  );
}
