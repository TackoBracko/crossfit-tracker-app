import Button from '../../../Button';
import classes from './RecipeCreateBtn.module.css';

export default function RecipeCreateBtn({ openRecipeCreateModal }) {
  return (
    <section className={classes.ingredientsSection}>
      <h3>You have ingredients?</h3>
      <div className={classes.ingredientsBox}>
        <p>No problem, make your recipe 👨‍🍳 </p>
        <Button variation="primary" onClick={openRecipeCreateModal}>
          Create Recipe
        </Button>
      </div>
    </section>
  );
}
