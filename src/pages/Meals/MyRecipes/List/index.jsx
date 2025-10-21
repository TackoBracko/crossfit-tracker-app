import { useContext } from 'react';
import classes from './MyRecipesList.module.css';
import { NavLink } from 'react-router-dom';
import { RecipeContext } from '../../../../Context/RecipeContext';
import { MyRecipeContext } from '../../../../Context/MyRecipeContext';
import MealFilterTabs from '../../../../components/Meals/FilterTabs';
import Button from '../../../../components/Button';
import LeftIcon from '../../../../components/Icons/LeftIcon';

export default function MyRecipesList() {
  const { myRecipes } = useContext(MyRecipeContext);
  const { activeTab } = useContext(RecipeContext);

  const filteredRecipesForTab =
    activeTab === 'All' ? myRecipes : myRecipes.filter((recipe) => recipe.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <>
      <header>
        <div className={classes.myRecipesHeader}>
          <NavLink to={'/meals'}>
            <Button variation="secondary" iconLeft={<LeftIcon />} />
          </NavLink>

          <h1>My Recipes 🍳 </h1>
        </div>
        <MealFilterTabs showAllTabs={true} />
      </header>

      <section className={classes.myRecipesSection}>
        <div className={classes.recipesBox}>
          {filteredRecipesForTab.length > 0 ? (
            filteredRecipesForTab.map((recipe) => (
              <div key={recipe.id} className={classes.recipeCard}>
                {recipe.picture ? <img src={recipe.picture} alt={recipe.title} /> : <div className={classes.noImage}>📸 No Image</div>}

                <div className={classes.recipeText}>
                  <h2>{recipe.title}</h2>
                  <p className={classes.recipeCategory}>{recipe.category}</p>

                  <NavLink to={`/my-recipes/${recipe.id}`}>View Details</NavLink>
                </div>
              </div>
            ))
          ) : (
            <p className={classes.noRecipe}>No recipes found in this category</p>
          )}
        </div>
      </section>
    </>
  );
}
