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

      {selectedExercise.length > 0 && (
        <>
          <p className={classes.selectedExercise}>Selected exercise: {selectedExercise}</p>
          <InputField name="sets" type="text" label="Sets" value={exerciseMetrics.sets} onChange={handleExerciseMetrics} variation="inputModal" />
          <InputField name="reps" type="text" label="Reps" value={exerciseMetrics.reps} onChange={handleExerciseMetrics} variation="inputModal" />
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
              Add exercise
            </Button>
          </div>
        </>
      )}

      {selectedExercisesList.length > 0 && (
        <div>
          <ul className={classes.textArea}>
            {selectedExercisesList.map((exercise, idx) => (
              <li key={idx}>
                {exercise.name}
                {(exercise.sets > 0 || exercise.reps > 0) && (
                  <>
                    {' '}
                    {exercise.sets > 0 && exercise.reps > 0
                      ? ` ${exercise.sets} sets x ${exercise.reps} reps`
                      : exercise.sets > 0
                        ? `${exercise.sets} sets`
                        : exercise.reps > 0
                          ? `${exercise.reps} reps`
                          : ''}
                    {exercise.weight ? ` @ ${exercise.weight} kg` : ''}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error.workoutplan && <p className={classes.errorText}>Cannot create empty workout</p>}
      <div className={classes.workoutBtn}>
        <Button variation="primary" onClick={handleCreateWorkout}>
          Create Workout
        </Button>
        <Button variation="quaternary" onClick={closeCreateModal}>
          Cancel
        </Button>
      </div>
    </>
  );
}
