import Button from '../../../components/Button';
import InputField from '../../../components/Input';
import classes from './RecipeGenerateModal.module.css';

export default function RecipeGenerateModal({ closeModal }) {
  return (
    <>
      <header className={classes.modalHeader}>
        <div>
          <h1>Generate Recipe</h1>
          <Button variation="secondary">X</Button>
        </div>

        <div className={classes.generateText}>
          <h3>No recipe yet - no problem</h3>
          <p>Enter your available ingredients below and we will help you create a recipe.</p>
        </div>
      </header>

      <section className={classes.generateBody}>
        <div className={classes.generateInputs}>
          <InputField label="Ingredients you have" type="text" placeholder="e.g. chicken, rice, broccoli" variation="inputForModal" />
        </div>

        <div className={classes.modalActions}>
          <Button variation="primary">Generate Recipe</Button>
          <Button variation="quaternary" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </section>
    </>
  );
}
