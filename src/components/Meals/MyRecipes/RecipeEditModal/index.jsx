import classes from './../RecipeCreateModal/RecipeCreateModal.module.css';
import InputField from '../../../Input';
import Button from '../../../Button';

export default function RecipeEditModal({
  editMyRecipe,
  handleEditRecipeChange,
  handleEditRecipePicture,
  handleSaveEditedMyRecipe,
  closeRecipeEditModal,
}) {
  return (
    <>
      <header className={classes.modalHeader}>
        <h1>Edit Recipe ✏️</h1>
      </header>

      <section className={classes.modalBody}>
        <div className={classes.recipeForm}>
          <InputField
            name="title"
            label="Recipe Title"
            type="text"
            variation="inputForModal"
            value={editMyRecipe.title}
            onChange={handleEditRecipeChange}
          />

          <div>
            <label>Change or Upload Picture</label>
            <InputField type="file" variation="inputForModal" name="pictureUpload" accept="image/*" onChange={handleEditRecipePicture} />
            {editMyRecipe.picture && (
              <div className={classes.previewImageBox}>
                <img src={editMyRecipe.picture} alt="Preview" className={classes.previewImage} />
              </div>
            )}
          </div>

          <div className={classes.selectWrapper}>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" className={classes.mealFilter} value={editMyRecipe.category} onChange={handleEditRecipeChange}>
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

          <div className={classes.recipeIngredients}>
            <label>Ingredients / Separate ingredients with commas (e.g. 2 eggs, 200g flour...)</label>
            <InputField name="ingredients" variation="inputForModal" value={editMyRecipe.ingredients} onChange={handleEditRecipeChange} />
          </div>

          <div className={classes.recipeInstructions}>
            <label>Instructions / Write your cooking steps here</label>
            <textarea name="instructions" value={editMyRecipe.instructions} onChange={handleEditRecipeChange} />
          </div>

          <div className={classes.modalActions}>
            <Button variation="primary" onClick={handleSaveEditedMyRecipe}>
              Save Changes
            </Button>
            <Button variation="quaternary" onClick={closeRecipeEditModal}>
              Cancel
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
