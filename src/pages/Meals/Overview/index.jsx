import classes from './Overview.module.css';
import InputField from '../../../components/Input';
import Button from '../../../components/Button';
import MealRecipeList from '../../../components/Meals/RecipeList';
import { Form, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { RecipeContext } from '../../../Context/RecipeContext';

export default function MealOverview() {
  const { user } = useContext(UserContext);
  const { recipeValue, recipeSuggestions, recipeResults, handleSearchSubmit, handleRecipeSearch } = useContext(RecipeContext);

  return (
    <header className={classes.mealHeader}>
      <h3>
        Hi,<span> {user.name}</span>
      </h3>
      <h1>Make your own food, stay at home</h1>

      <Form className={classes.mealSearchForm} onSubmit={handleSearchSubmit}>
        <div className={classes.mealSearchWrapper}>
          <InputField
            variation="inputForMealSearch"
            placeholder="🔎 Search meals, ingredients..."
            type="text"
            value={recipeValue}
            onChange={handleRecipeSearch}
          />

          {recipeSuggestions.length > 0 && (
            <ul className={classes.recipeResults}>
              {recipeSuggestions.map((result) => (
                <li key={result.id}>
                  <NavLink to={`/meals/${result.id}`}>* {result.title}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button variation="seventh" className={classes.mealSearchBtn} onClick={() => handleRecipeSearch(recipeValue)}>
          🔎
        </Button>
      </Form>

      <div>{recipeResults.length > 0 && <MealRecipeList recipes={recipeResults} />}</div>
    </header>
  );
}
