import classes from '../CreateContent/CreateContent.module.css';
import InputField from '../../../Input';
import Button from '../../../Button';

export default function EditContent({
  crossfitData,
  selectedCategory,
  setSelectedCategory,
  selectedExercise,
  selectedExercisesList,
  handleExerciseSelect,
  exerciseMetrics,
  handleExerciseMetrics,
  handleAddSelectedExercise,
  handleSaveEditedWorkout,
  //notes,
  //setNotes,
  handleEditExercise,
  handleSaveEditedExercise,
  handleDeleteExercise,
  closeEditModal,
  isEditing,
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
              type="number"
              label="Sets"
              value={exerciseMetrics.sets}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />
            <InputField
              name="reps"
              type="number"
              label="Reps/Cal"
              value={exerciseMetrics.reps}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />
            {hasWeight && (
              <InputField
                name="weight"
                type="text"
                label="Weight (kg)"
                value={exerciseMetrics.weight}
                onChange={handleExerciseMetrics}
                variation="inputForModal"
              />
            )}
            <InputField
              name="work"
              type="text"
              label="Work"
              value={exerciseMetrics.work}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />
            <InputField
              name="rest"
              type="text"
              label="Rest"
              value={exerciseMetrics.rest}
              onChange={handleExerciseMetrics}
              variation="inputForModal"
            />

            <div className={classes.addExerciseBtn}>
              <Button variation="primary" onClick={isEditing ? handleSaveEditedExercise : handleAddSelectedExercise}>
                {isEditing ? 'Add Changes' : 'Add Exercise'}
              </Button>
            </div>
          </div>
        </>
      )}

      {selectedExercisesList.length > 0 ? (
        <ul className={classes.exercisePreviewList}>
          {selectedExercisesList.map((exercise, id) => (
            <li key={id} className={classes.exerciseItem}>
              {metricsBlock(exercise)}

              <div className={classes.exerciseListBtns}>
                <Button variation="primary" onClick={() => handleEditExercise(exercise.id)}>
                  Edit
                </Button>
                <Button variation="quaternary" onClick={() => handleDeleteExercise(exercise.id)}>
                  X
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={classes.boxAlert}>
          <p className={classes.textAlert}>This workout is empty. You can add new exercises or save it to remove it from the calendar</p>
        </div>
      )}

      <div className={classes.workoutBtn}>
        <Button variation="primary" onClick={handleSaveEditedWorkout}>
          Save changes
        </Button>
        <Button variation="quaternary" onClick={closeEditModal}>
          Cancel
        </Button>
      </div>
    </>
  );
}
