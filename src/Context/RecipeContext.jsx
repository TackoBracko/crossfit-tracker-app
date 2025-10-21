import { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');
  const [recipesForTab, setRecipesForTab] = useState([]);
  const [recipeSearchResults, setRecipeSearchResults] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);

  //find recipe for tabs
  const fetchRecipesForTab = async (category) => {
    try {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await result.json();
      setRecipesForTab(data.meals || []);
    } catch (error) {
      console.error('Error fetching by category:', error);
    }
  };

  //activeTab
  const changeActiveTab = (tab) => {
    setActiveTab(tab);
    fetchRecipesForTab(tab);
  };

  //search for Form

  const fetchRecipeFromSearch = async (recipe) => {
    try {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`);
      const data = await result.json();
      setRecipeSearchResults(data.meals || []);
    } catch (error) {
      console.error('Error searching recipe:', error);
    }
  };

  // fetch recipe details
  const fetchRecipeDetails = async (idMeal) => {
    try {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await result.json();
      setRecipeDetails(data.meals[0]);

      setRecipeIngredients([]);
      setRecipeMeasures([]);

      Object.keys(data.meals[0]).forEach((key) => {
        if (key.includes('strIngredient') && data.meals[0][key] !== '') {
          setRecipeIngredients((prev) => {
            if (prev.length === 0) return [data.meals[0][key]];
            else return [...prev, data.meals[0][key]];
          });
        }

        if (key.includes('strMeasure') && data.meals[0][key] !== '') {
          setRecipeMeasures((prev) => {
            if (prev.length === 0) return [data.meals[0][key]];
            else return [...prev, data.meals[0][key]];
          });
        }
      });
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  //favorites and remove

  const addToFavoriteRecipe = (recipe) => {
    const recipeId = recipe.idMeal || recipe.id;

    setFavoriteRecipes((prevData) => {
      if (prevData.some((recipe) => (recipe.idMeal || recipe.id) === recipeId)) return prevData;
      return [...prevData, recipe];
    });
  };

  const removeFromFavoriteRecipe = (recipeId) => {
    setFavoriteRecipes((prevData) => prevData.filter((recipe) => (recipe.idMeal || recipe.id) !== recipeId));
  };

  const updateFavoriteRecipe = (updatedRecipe) => {
    setFavoriteRecipes((prevData) => prevData.map((favorite) => (favorite.id === updatedRecipe.id ? { ...favorite, ...updatedRecipe } : favorite)));
  };

  const isFavoriteRecipe = (recipe) => {
    const recipeId = recipe.idMeal || recipe.id;
    return favoriteRecipes.some((favorite) => (favorite.idMeal || favorite.id) === recipeId);
  };

  const clearRecipeSearchResults = () => setRecipeSearchResults([]);

  return (
    <RecipeContext.Provider
      value={{
        recipesForTab,
        recipeSearchResults,
        recipeDetails,
        activeTab,
        favoriteRecipes,
        recipeIngredients,
        recipeMeasures,
        changeActiveTab,
        fetchRecipeFromSearch,
        fetchRecipeDetails,
        addToFavoriteRecipe,
        removeFromFavoriteRecipe,
        updateFavoriteRecipe,
        isFavoriteRecipe,
        clearRecipeSearchResults,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

//const recipesForActiveTab = recipeData.filter((recipe) => recipe.type === activeTab);

/*const findRecipe = (recipeValue) => {
    if (!recipeValue) return [];

    return recipeData.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(recipeValue.toLowerCase()) ||
        recipe.ingredients.some((ingred) => ingred.toLowerCase().includes(recipeValue.toLowerCase())),
    );
  };

    /*const handleSearchSubmit = (e) => {
    e.preventDefault();
    const recipeSearchList = findRecipe(recipesFotTabs);
    setRecipeResults(recipeSearchList);
    setRecipeSuggestions([]);
  };*/

/*const handleRecipeSearch = (e) => {
    const searchValue = e.target.value;
    setRecipeValue(searchValue);

    const recipesFotTabs = findRecipe(searchValue);
    setRecipeSuggestions(recipesFotTabs.slice(0, 3));

    if (searchValue.trim() === '') {
      setRecipeSuggestions([]);
      setRecipeResults([]);
    }
  };*/
