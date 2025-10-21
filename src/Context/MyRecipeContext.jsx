import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RecipeContext } from './RecipeContext';

export const MyRecipeContext = createContext();

export const MyRecipeProvider = ({ children }) => {
  const { isFavoriteRecipe, updateFavoriteRecipe } = useContext(RecipeContext);
  const [myRecipes, setMyRecipes] = useState([]);

  const createRecipe = (recipe) => {
    setMyRecipes((prevData) => [...prevData, { ...recipe, id: uuidv4() }]);
  };

  const editRecipe = (updatedRecipe) => {
    setMyRecipes((prevData) => prevData.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)));
    if (isFavoriteRecipe(updatedRecipe)) {
      updateFavoriteRecipe(updatedRecipe);
    }
  };

  const deleteRecipe = (id) => {
    setMyRecipes((prevData) => prevData.filter((recipe) => recipe.id !== id));
  };

  return (
    <MyRecipeContext.Provider
      value={{
        myRecipes,
        createRecipe,
        editRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </MyRecipeContext.Provider>
  );
};
