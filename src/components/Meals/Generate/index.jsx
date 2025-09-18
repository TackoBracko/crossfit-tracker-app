import Button from '../../Button';
import classes from './Generate.module.css';

export default function MealGenerateRecipe({ openModal }) {
  return (
    <section className={classes.ingredientsSection}>
      <h3>You have ingredients</h3>
      <div className={classes.ingredientsBox}>
        <p>No problem</p>
        <Button variation="primary" onClick={openModal}>
          Generate Recipe
        </Button>
      </div>
    </section>
  );
}
