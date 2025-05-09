import classes from '../CreateWorkoutContent/CreateWorkoutContent.module.css';
import Button from '../../Button';

export default function CreateWorkoutContent({
  crossfitData,
  selectedCategory,
  setSelectedCategory,
  handleMoreExercise,
  notes,
  setNotes,
  error,
  setError,
  handleCreateWorkout,
  closeModal,
}) {
  return (
    <>
      <div className={classes.workoutInput}>
        <label>Category</label>
        <select
          className={classes.dropdownMenu}
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            if (error.workoutplan) {
              setError((prev) => ({ ...prev, workoutplan: false }));
            }
          }}
        >
          <option disabled value="">
            Choose a Category
          </option>
          {crossfitData.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.workoutInput}>
        <label>Exercises for {selectedCategory}</label>
        <select className={classes.dropdownMenu} onChange={handleMoreExercise} value="">
          <option disabled value="">
            Choose an Exercise
          </option>

          {crossfitData
            .find((cat) => cat.title === selectedCategory)
            ?.exercises.map((exercise) =>
              exercise.subCategory ? (
                <optgroup key={exercise.id} label={exercise.name}>
                  {exercise.subCategory.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.name}>
                      {subcategory.name}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option key={exercise.id} value={exercise.name}>
                  {exercise.name}
                </option>
              ),
            )}
        </select>
      </div>

      <div className={classes.workoutInput}>
        <label>Notes (you can edit your exercises)</label>
        <textarea className={classes.textArea} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      {error.workoutplan && <p className={classes.errorText}>Cannot create empty workout</p>}
      <div className={classes.workoutBtn}>
        <Button variation="primary" onClick={handleCreateWorkout}>
          Create Workout
        </Button>
        <Button variation="quaternary" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </>
  );
}
