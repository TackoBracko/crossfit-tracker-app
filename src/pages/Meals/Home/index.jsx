import classes from './MealsHome.module.css';
import InputField from '../../../components/Input';
import Button from '../../../components/Button';
import MealFilterTabs from '../../../components/Meals/FilterTabs';
import MealRecipeList from '../../../components/Meals/RecipeList';
import MealFavorites from '../../../components/Meals/Favorites';
import RecipeCreateBtn from '../../../components/Meals/MyRecipes/RecipeBtn';
import { Form } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { RecipeContext } from '../../../Context/RecipeContext';
import { MyRecipeContext } from '../../../Context/MyRecipeContext';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../../components/Modal';
import LayoutContent from '../../../components/Calendar/WorkoutModalContent/LayoutContent';
import RecipeCreateModal from '../../../components/Meals/MyRecipes/RecipeCreateModal';

export default function MealsHome() {
  const { user } = useContext(UserContext);
  const { createRecipe } = useContext(MyRecipeContext);
  const { recipesForTab, recipeSearchResults, fetchRecipeFromSearch, clearRecipeSearchResults } = useContext(RecipeContext);
  const [recipeSearchValue, setRecipeSearchValue] = useState('');
  const [recipePreview, setRecipePreview] = useState(null);

  const [newRecipe, setNewRecipe] = useState({
    id: uuidv4(),
    title: '',
    category: '',
    ingredients: [],
    instructions: '',
    picture: '',
  });

  const recipeCreateModalRef = useRef();
  const openRecipeCreateModal = () => {
    if (recipeCreateModalRef.current) {
      recipeCreateModalRef.current.open();
    }
  };

  const closeRecipeCreateModal = () => {
    if (recipeCreateModalRef.current) {
      recipeCreateModalRef.current.close();
    }
  };

  // recipe search

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (recipeSearchValue.trim() !== '') {
      fetchRecipeFromSearch(recipeSearchValue);
    }
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setRecipeSearchValue(searchValue);

    if (searchValue.trim() === '') {
      clearRecipeSearchResults();
    }
  };

  // create recipe

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevData) => {
      if (name === 'ingredients') {
        return { ...prevData, ingredients: value.split(',') };
      }
      return { ...prevData, [name]: value };
    });
  };

  const handleRecipePicture = (e) => {
    const picture = e.target.files[0];

    if (picture) {
      const pictureUrl = URL.createObjectURL(picture);
      setNewRecipe((prevData) => ({ ...prevData, picture: pictureUrl }));
    }
  };

  const handleRecipePreview = () => {
    setRecipePreview(newRecipe);
  };

  const handleCreateRecipe = () => {
    if (!recipePreview) return;

    createRecipe(recipePreview);

    setNewRecipe({
      id: uuidv4(),
      title: '',
      category: '',
      ingredients: [],
      instructions: '',
      picture: '',
    });
    setRecipePreview(null);
    closeRecipeCreateModal();
  };

  return (
    <div className={classes.mealPages}>
      <header className={classes.mealHeader}>
        <h3>
          Hi,<span> {user.name}</span>
        </h3>
        <h1>Craving some delicious meals, feeling the cooking vibe?</h1>
        <p>You have come to the right place for some tasty recipes</p>

        <Form className={classes.mealSearchForm} onSubmit={handleSearchSubmit}>
          <div className={classes.mealSearchWrapper}>
            <InputField
              name="mealSearch"
              variation="inputForMealSearch"
              placeholder="🔎 Search meals, ingredients..."
              type="text"
              value={recipeSearchValue}
              onChange={handleSearchChange}
            />
          </div>

          <Button variation="seventh" className={classes.mealSearchBtn} onClick={handleSearchSubmit}>
            🔎
          </Button>
        </Form>

        <div>{recipeSearchResults.length > 0 && <MealRecipeList recipes={recipeSearchResults} />}</div>
      </header>

      <section>
        <MealFilterTabs showAllTabs={false} />
        <MealRecipeList recipes={recipesForTab} />
        <MealFavorites />
        <RecipeCreateBtn openRecipeCreateModal={openRecipeCreateModal} />

        <NavLink to={'/my-recipes'}>
          <Button variation="primary"> my recipes</Button>
        </NavLink>
      </section>

      <Modal ref={recipeCreateModalRef}>
        <LayoutContent>
          <RecipeCreateModal
            newRecipe={newRecipe}
            recipePreview={recipePreview}
            handleRecipeChange={handleRecipeChange}
            handleRecipePreview={handleRecipePreview}
            handleCreateRecipe={handleCreateRecipe}
            handleRecipePicture={handleRecipePicture}
            closeRecipeCreateModal={closeRecipeCreateModal}
          />
        </LayoutContent>
      </Modal>
    </div>
  );
}
