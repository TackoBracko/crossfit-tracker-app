import classes from '../CreateContent/CreateContent.module.css';
import Button from '../../../Button';
import InputField from '../../../Input';

export default function CreateContent({
  crossfitData,
  selectedCategory,
  setSelectedCategory,
  selectedExercise,
  selectedExercisesList,
  exerciseMetrics,
  handleExerciseMetrics,
  handleExerciseSelect,
  handleCreateWorkout,
  handleAddSelectedExercise,
  error,
  setError,
  closeCreateModal,
  metricsBlock,
  hasWeight,
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
          <div className={classes.inputGroup}>
            <InputField
              name="sets"
              type="text"
              label="Sets"
              value={exerciseMetrics.sets}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />
            <InputField
              name="reps"
              type="text"
              label="Reps/Cal"
              value={exerciseMetrics.reps}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />
            {hasWeight && (
              <InputField
                name="weight"
                type="text"
                label="Weight"
                value={exerciseMetrics.weight}
                onChange={handleExerciseMetrics}
                variation="inputForModal"
                placeholder="e.g. 50"
              />
            )}
            <InputField
              name="work"
              type="text"
              label="Work time"
              value={exerciseMetrics.work}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
              placeholder="in seconds (e.g. 60)"
            />
            <InputField
              name="rest"
              type="text"
              label="Rest time"
              value={exerciseMetrics.rest}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
              placeholder="in seconds (e.g. 60)"
            />

            <div className={classes.addExerciseBtn}>
              <Button variation="primary" onClick={handleAddSelectedExercise}>
                Add exercise
              </Button>
            </div>
          </div>
        </>
      )}

      {selectedExercisesList.length > 0 && (
        <div>
          <ul className={classes.exercisePreviewList}>
            {selectedExercisesList.map((exercise) => (
              <li key={exercise.id}>{metricsBlock(exercise)}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={classes.workoutBtn}>
        <Button variation="primary" onClick={handleCreateWorkout}>
          Create Workout
        </Button>
        <Button variation="quaternary" onClick={closeCreateModal}>
          Cancel
        </Button>
      </div>
      {error.workoutplan && <p className={classes.errorText}>Cannot create empty workout</p>}
    </>
  );
}
