import classes from './MyRecipeDetails.module.css';
import Button from '../../../../components/Button';
import LeftIcon from '../../../../components/Icons/LeftIcon';
import { useContext, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../../../Context/RecipeContext';
import { MyRecipeContext } from '../../../../Context/MyRecipeContext';
import Modal from '../../../../components/Modal';
import RecipeEditModal from '../../../../components/Meals/MyRecipes/RecipeEditModal';
import LayoutContent from '../../../../components/Calendar/WorkoutModalContent/LayoutContent';

export default function MyRecipeDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToFavoriteRecipe, removeFromFavoriteRecipe, isFavoriteRecipe } = useContext(RecipeContext);
  const { myRecipes, editRecipe, deleteRecipe } = useContext(MyRecipeContext);

  const [editMyRecipe, setEditMyRecipe] = useState(null);

  const recipeEditModalRef = useRef();

  const openRecipeEditModal = () => {
    if (recipeEditModalRef.current) {
      recipeEditModalRef.current.open();
    }
  };

  const closeRecipeEditModal = () => {
    if (recipeEditModalRef.current) {
      recipeEditModalRef.current.close();
    }
  };

  const myRecipeDetails = myRecipes.find((recipe) => recipe.id === id);
  if (!myRecipeDetails) {
    return (
      <div className={classes.noRecipe}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <p>Recipe not found 🥄</p>
      </div>
    );
  }

  const isFavorite = isFavoriteRecipe(myRecipeDetails);

  const handleEditRecipeChange = (e) => {
    const { name, value } = e.target;
    setEditMyRecipe((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditRecipePicture = (e) => {
    const picture = e.target.files[0];
    if (picture) {
      const pictureUrl = URL.createObjectURL(picture);
      setEditMyRecipe((prevData) => ({ ...prevData, picture: pictureUrl }));
    }
  };

  const handleEditMyRecipe = (recipe) => {
    if (!recipe) return;

    setEditMyRecipe({
      id: recipe.id,
      title: recipe.title,
      category: recipe.category,
      ingredients: recipe.ingredients.join(', '),
      instructions: recipe.instructions || '',
      picture: recipe.picture,
    });

    openRecipeEditModal();
  };

  const handleSaveEditedMyRecipe = () => {
    if (!editMyRecipe) return;

    const updatedMyRecipe = {
      ...editMyRecipe,
      id: editMyRecipe.id,
      title: editMyRecipe.title,
      category: editMyRecipe.category,
      ingredients: editMyRecipe.ingredients
        .split(', ')
        .map((ing) => ing.trim())
        .filter((ing) => ing.length > 0),
      instructions: editMyRecipe.instructions,
    };

    editRecipe(updatedMyRecipe);
    closeRecipeEditModal();
    console.log(updatedMyRecipe);
  };

  const handleDeleteRecipe = () => {
    deleteRecipe(id);
    removeFromFavoriteRecipe(id);
    navigate('/my-recipes');
  };

  return (
    <>
      <header className={classes.recipeDetailsHeader}>
        <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
        <div className={classes.recipeHeroImage}>
          {myRecipeDetails.picture ? (
            <img src={myRecipeDetails.picture} alt={myRecipeDetails.title} />
          ) : (
            <div className={classes.noImage}>📸 No Image</div>
          )}
        </div>
      </header>

      <section className={classes.recipeDetailsSection}>
        <h1>{myRecipeDetails.title}</h1>
        <span className={classes.recipeCategory}>{myRecipeDetails.category}</span>
        <div className={classes.recipeIngredientsCard}>
          <h3>🧂 Ingredients</h3>
          <ul className={classes.recipeIngredientsList}>
            {myRecipeDetails.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className={classes.recipeInstructionsCard}>
          <h3>👩‍🍳 Instructions</h3>
          <p>{myRecipeDetails.instructions}</p>
        </div>

        <div className={classes.recipeBtns}>
          <Button variation="primary" onClick={() => handleEditMyRecipe(myRecipeDetails)}>
            Edit
          </Button>
          <Button variation="quaternary" onClick={handleDeleteRecipe}>
            Delete
          </Button>

          {isFavorite ? (
            <Button variation="quaternary" onClick={() => removeFromFavoriteRecipe(myRecipeDetails.id)}>
              ❌ Remove from Favorites
            </Button>
          ) : (
            <Button variation="primary" onClick={() => addToFavoriteRecipe(myRecipeDetails)}>
              ❤️ Add to Favorites
            </Button>
          )}
        </div>
      </section>

      <Modal ref={recipeEditModalRef}>
        <LayoutContent>
          <RecipeEditModal
            editMyRecipe={editMyRecipe || { title: '', category: '', ingredients: '', instructions: '', picture: '' }}
            handleEditRecipeChange={handleEditRecipeChange}
            handleEditRecipePicture={handleEditRecipePicture}
            handleSaveEditedMyRecipe={handleSaveEditedMyRecipe}
            closeRecipeEditModal={closeRecipeEditModal}
          />
        </LayoutContent>
      </Modal>
    </>
  );
}
