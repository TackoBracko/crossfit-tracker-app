import { createContext, useState } from 'react';
import { recipeData } from '../data/RecipeData';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');
  const [recipeValue, setRecipeValue] = useState('');
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const [recipeResults, setRecipeResults] = useState([]);

  //activeTab in overview
  const recipesForActiveTab = recipeData.filter((recipe) => recipe.type === activeTab);
  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  //find recipe
  const findRecipe = (recipeValue) => {
    if (!recipeValue) return [];

    return recipeData.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(recipeValue.toLowerCase()) ||
        recipe.ingredients.some((ingred) => ingred.toLowerCase().includes(recipeValue.toLowerCase())),
    );
  };

  //search form
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const recipeSearchList = findRecipe(recipeValue);
    setRecipeResults(recipeSearchList);
    setRecipeSuggestions([]);
  };

  const handleRecipeSearch = (e) => {
    const searchValue = e.target.value;
    setRecipeValue(searchValue);

    const recipes = findRecipe(searchValue);
    setRecipeSuggestions(recipes.slice(0, 3));

    if (searchValue.trim() === '') {
      setRecipeSuggestions([]);
      setRecipeResults([]);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeValue,
        recipeSuggestions,
        recipeResults,
        handleSearchSubmit,
        handleRecipeSearch,
        recipesForActiveTab,
        activeTab,
        changeActiveTab,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
