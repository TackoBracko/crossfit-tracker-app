import classes from './RecipeCreateModal.module.css';
import Button from '../../../Button';
import InputField from '../../../Input';
import { NavLink } from 'react-router-dom';

export default function RecipeCreateModal({
  newRecipe,
  recipePreview,
  handleRecipeChange,
  handleRecipePreview,
  handleCreateRecipe,
  handleRecipePicture,
  closeRecipeCreateModal,
}) {
  return (
    <>
      <header className={classes.modalHeader}>
        <h1>Create Your Own Recipe 🍽️</h1>
        <p>
          Feeling creative? Add your own recipe and save it to
          <NavLink to="/my-recipes">My Recipes</NavLink>
        </p>
      </header>

      <section className={classes.modalBody}>
        <div className={classes.recipeForm}>
          <InputField name="title" label="Recipe Title" type="text" variation="inputForModal" value={newRecipe.title} onChange={handleRecipeChange} />

          <div className={classes.selectWrapper}>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={newRecipe.category} onChange={handleRecipeChange} className={classes.mealFilter}>
              <option value="">Select a category...</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Chicken">Chicken</option>
              <option value="Pasta">Pasta</option>
              <option value="Beef">Beef</option>
              <option value="Pork">Pork</option>
              <option value="Salmon">Salmon</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label>Upload Picture</label>
            <InputField type="file" variation="inputForModal" name="pictureUpload" accept="image/*" onChange={handleRecipePicture} />
            {newRecipe.picture && (
              <div className={classes.previewImageBox}>
                <img src={newRecipe.picture} alt="Preview" className={classes.previewImage} />
              </div>
            )}
          </div>

          <div className={classes.recipeIngredients}>
            <label>Ingredients / Separate ingredients with commas (e.g. 2 eggs, 200g flour...)</label>
            <InputField name="ingredients" variation="inputForModal" value={(newRecipe.ingredients || []).join(', ')} onChange={handleRecipeChange} />
          </div>

          <div className={classes.recipeInstructions}>
            <label>Instructions / Write your cooking steps here</label>
            <textarea name="instructions" value={newRecipe.instructions} onChange={handleRecipeChange} />
          </div>

          <div className={classes.modalActions}>
            <Button variation="primary" onClick={handleRecipePreview}>
              Add to preview
            </Button>
            <Button variation="quaternary" onClick={closeRecipeCreateModal}>
              Cancel
            </Button>
          </div>
        </div>

        {recipePreview && (
          <div className={classes.previewBox}>
            <h3>Preview Recipe:</h3>
            <p>Title: {recipePreview.title}</p>
            <p>Category: {recipePreview.category}</p>
            <p>Ingredients: {recipePreview.ingredients.join(', ')}</p>
            <p>
              Instructions:
              {recipePreview.instructions.length > 150 ? `${recipePreview.instructions.substring(0, 150)}...` : recipePreview.instructions}
            </p>
            <Button variation="primary" onClick={handleCreateRecipe}>
              Save Recipe
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
