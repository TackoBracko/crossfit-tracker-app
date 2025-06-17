import classes from '../CreateContent/CreateContent.module.css';
import InputField from '../../../Input';
import Button from '../../../Button';

export default function EditContent({
  crossfitData,
  selectedCategory,
  setSelectedCategory,
  selectedExercise,
  handleExerciseSelect,
  exerciseMetrics,
  handleExerciseMetrics,
  handleAddSelectedExercise,
  notes,
  setNotes,
  handleSaveEditWorkout,
  closeEditModal,
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
        <select className={classes.dropdownMenu} onChange={handleExerciseSelect} value={selectedExercise}>
          <option disabled value="">
            Choose an Exercise
          </option>

          {crossfitData
            .find((cat) => cat.title === selectedCategory)
            ?.exercises.map((exercise) =>
              exercise.subExercise ? (
                <optgroup key={exercise.id} label={exercise.name}>
                  {exercise.subExercise.map((subexercise) => (
                    <option key={subexercise.id} value={subexercise.name}>
                      {subexercise.name}
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

      {selectedExercise && (
        <>
          <p className={classes.selectedExercise}>Selected exercise: {selectedExercise}</p>
          <InputField name="sets" type="number" label="Sets" value={exerciseMetrics.sets} onChange={handleExerciseMetrics} variation="inputModal" />
          <InputField name="reps" type="number" label="Reps" value={exerciseMetrics.reps} onChange={handleExerciseMetrics} variation="inputModal" />
          <InputField
            name="weight"
            type="text"
            label="Weight (kg)"
            value={exerciseMetrics.weight}
            onChange={handleExerciseMetrics}
            variation="inputModal"
          />
          <div className={classes.workoutBtn}>
            <Button variation="primary" onClick={handleAddSelectedExercise}>
              Add exercise to preview
            </Button>
          </div>
        </>
      )}

      <div className={classes.workoutInput}>
        <label>Notes (you can edit your workout manually)</label>
        <textarea className={classes.textArea} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      <div className={classes.workoutBtn}>
        <Button variation="primary" onClick={handleSaveEditWorkout}>
          Save changes
        </Button>
        <Button variation="quaternary" onClick={closeEditModal}>
          Cancel
        </Button>
      </div>
    </>
  );
}
