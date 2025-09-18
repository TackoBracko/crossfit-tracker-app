import MealOverview from './Overview';
import MealFilterTabs from '../../components/Meals/FilterTabs';
import MealRecipeList from '../../components/Meals//RecipeList';
import MealGenerateRecipe from '../../components/Meals/Generate';
import classes from './Meals.module.css';
import { useContext, useRef } from 'react';
import { RecipeContext } from '../../Context/RecipeContext';
import Modal from '../../components/Modal';
import RecipeGenerateModal from './RecipGenerateModal';
import LayoutContent from '../../components/Calendar/WorkoutModalContent/LayoutContent';

export default function Meals() {
  const { recipesForActiveTab } = useContext(RecipeContext);
  const recipeGenerateModalRef = useRef();

  const openRecipeGenerateModal = () => {
    if (recipeGenerateModalRef.current) {
      recipeGenerateModalRef.current.open();
    }
  };

  const closeRecipeGenerateModal = () => {
    if (recipeGenerateModalRef.current) {
      recipeGenerateModalRef.current.close();
    }
  };

  return (
    <div className={classes.mealsPage}>
      <MealOverview />
      <MealFilterTabs />
      <MealRecipeList recipes={recipesForActiveTab} />
      <MealGenerateRecipe openModal={openRecipeGenerateModal} />

      <Modal ref={recipeGenerateModalRef}>
        <LayoutContent>
          <RecipeGenerateModal closeModal={closeRecipeGenerateModal} />
        </LayoutContent>
      </Modal>
    </div>
  );
}
