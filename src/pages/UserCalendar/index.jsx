import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { crossfitData } from './../../data/CrossfitData.js';
import { NavLink } from 'react-router-dom';
import classes from './UserCalendar.module.css';
import style from './../../components/CalendarModal/CalendarModal.module.css';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from '../CalendarDays';
import Modal from '../../components/CalendarModal';
import Button from '../../components/Button/index.jsx';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext.jsx';

export default function UserCalendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const createModalRef = useRef();
  const editModalRef = useRef();
  const { allWorkouts, createWorkout, deleteWorkout, changeWorkout, addWorkoutsToContext } = useContext(WorkoutDetailsContext);

  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [notes, setNotes] = useState('');
  const [previewNotes, setPreviewNotes] = useState('');
  //const [workoutPlan, setWorkoutPlan] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [editWorkout, setEditWorkout] = useState(null);
  //const [editPreviewWorkout, setEditPreviewWorkout] = useState(null);

  const [error, setError] = useState({
    title: false,
    workoutplan: false,
  });

  const currentDate = `${currentDay.getDate()}_${currentDay.getMonth() + 1}_${currentDay.getFullYear()}`;
  const dateHasWorkout = allWorkouts[currentDate];

  const changeCurrentDay = (day) => {
    const newDate = new Date(day.year, day.month, day.number);
    const selectedDay = `${newDate.getDate()}_${newDate.getMonth() + 1}_${newDate.getFullYear()}`;
    setCurrentDay(newDate);

    if (!allWorkouts[selectedDay]) {
      console.log('opening add modal');
      openCreateModal();
    }
  };

  const handleMoreExercise = (e) => {
    const options = [...e.target.selectedOptions];
    const exercises = options.map((exercise) => exercise.value);

    setSelectedExercise((prevExercise) => {
      const newExercises = exercises.filter((exercise) => !prevExercise.includes(exercise));
      return [...prevExercise, ...newExercises];
    });

    setNotes((prevNote) => (prevNote ? `${prevNote}\n${exercises.join('\n')}` : exercises.join('\n')));
  };

  const handleWorkoutBuild = (selectedExercise, workoutTitle, notes, currentDate) => {
    let categoriesList = [];

    crossfitData.map((category) => {
      const exercises = category.exercises.map((exercise) => {
        if (exercise.subCategory) {
          return exercise.subCategory.map((subcategory) => ({
            id: subcategory.id,
            name: subcategory.name,
            categoryId: category.id,
            category: category.title,
            subCategory: exercise.id,
            picture: subcategory.picture,
          }));
        } else {
          return [
            {
              id: exercise.id,
              name: exercise.name,
              categoryId: category.id,
              category: category.title,
              subCategory: null,
              picture: exercise.picture,
            },
          ];
        }
      });

      categoriesList = categoriesList.concat(...exercises);
    });

    const selectedExercisesData = selectedExercise.map((exerciseName) => {
      const exerciseData = categoriesList.find((ex) => ex.name === exerciseName);

      return {
        id: exerciseData.id,
        name: exerciseData.name,
        categoryId: exerciseData.categoryId,
        category: exerciseData.category,
        subCategory: exerciseData.subCategory,
        picture: exerciseData.picture,
        note: notes.split('\n').find((note) => note.includes(exerciseName)),
      };
    });

    return {
      id: uuidv4(),
      title: workoutTitle,
      exercises: selectedExercisesData,
      notes: notes,
      date: currentDate,
    };
  };

  //ADD/CREATE

  /*const handlePreviewWorkout = () => {
    const errorTitle = !workoutTitle.trim();
    const errorWorkoutPlan = !selectedCategory && selectedExercise.length === 0 && !notes.trim() && errorTitle;

    if (errorWorkoutPlan) {
      setError({
        title: false,
        workoutplan: true,
      });
      return;
    }

    if (errorTitle) {
      setError({
        title: true,
        workoutplan: false,
      });
      return;
    }

    const newWorkout = handleWorkoutBuild(selectedExercise, workoutTitle, notes, currentDate);

    setWorkoutPlan((prevPlan) => {
      const previewPlan = prevPlan.map((plan) =>
        plan.date === currentDate
          ? {
              ...plan,
              exercises: [...plan.exercises, ...newWorkout.exercises],
              notes: plan.notes ? `${plan.notes}\n${notes}` : notes,
            }
          : plan,
      );

      return prevPlan.some((plan) => plan.date === currentDate) ? previewPlan : [...prevPlan, newWorkout];
    });

    setEditPreviewWorkout(null);
    setPreviewNotes('');
    setSelectedCategory([]);
    setSelectedExercise([]);
    setNotes('');
    setError({
      title: false,
      workoutplan: false,
    });

    console.log(newWorkout.title);
    console.log(newWorkout);
  };*/

  const handleCreateWorkout = () => {
    const errorTitle = !workoutTitle.trim();
    const errorWorkoutPlan = !selectedCategory || selectedExercise.length === 0;

    if (errorTitle || errorWorkoutPlan) {
      setError({
        title: errorTitle,
        workoutplan: errorWorkoutPlan,
      });
      return;
    }

    const newWorkout = handleWorkoutBuild(selectedExercise, workoutTitle, notes, currentDate);

    const todayWorkout = {
      id: uuidv4(),
      date: currentDate,
      workout: [newWorkout],
    };

    createWorkout(currentDate, todayWorkout);

    closeModal();
    clearModal();
    setError({
      title: false,
      workoutplan: false,
    });

    console.log(todayWorkout);
    console.log(todayWorkout.id);
  };

  //EDITING

  const handleEditWorkout = (workout) => {
    if (workout) {
      console.log('opening editing modal for:', workout);
      setEditWorkout(workout);
      setWorkoutTitle(workout.title);
      setSelectedCategory('');
      setSelectedExercise(workout.exercises.map((exercise) => exercise.name));
      setNotes(workout.notes);
      setPreviewNotes(workout.notes);
      //setEditPreviewWorkout(workout);

      openEditModal();
    }
  };

  /*const handleEditPreviewWorkout = (id) => {
    const workoutToEdit = workoutPlan.find((plan) => plan.id === id);
    if (workoutToEdit) {
      setEditPreviewWorkout(workoutToEdit);
      setPreviewNotes(workoutToEdit.notes);
    }
  };*/

  //SAVING

  const handleSaveEditWorkout = () => {
    if (editWorkout) {
      const newEditedWorkout = handleWorkoutBuild(selectedExercise, workoutTitle, notes, currentDate);

      const updatedWorkout = {
        ...editWorkout,
        title: newEditedWorkout.title,
        category: selectedCategory,
        exercises: newEditedWorkout.exercises.filter((exercise) => notes.includes(exercise.name)),
        notes: newEditedWorkout.notes,
      };

      changeWorkout(currentDate, updatedWorkout);
      console.log(updatedWorkout);
    }

    setEditWorkout();
    clearModal();
    closeModal();
  };

  /*const handleSavePreviewChanges = () => {
    if (editPreviewWorkout) {
      const updatePreviewWorkout = editPreviewWorkout.exercises.filter((exercise) => editPreviewWorkout.notes.includes(exercise.name));

      setWorkoutPlan((prevPlan) =>
        prevPlan.map((plan) =>
          plan.id === editPreviewWorkout.id ? { ...plan, notes: editPreviewWorkout.notes, exercises: updatePreviewWorkout } : plan,
        ),
      );
    }

    setEditPreviewWorkout(null);
    setWorkoutTitle('');
    setSelectedCategory([]);
    setSelectedExercise([]);
    setNotes('');
  };*/

  const handleAddChanges = () => {
    setPreviewNotes(notes);
  };

  //DELETE

  const handleDeleteWorkout = (id) => {
    deleteWorkout(currentDate, id);
  };

  /*const handleDeletePreviewWorkout = (id) => {
    setWorkoutPlan((prevPlan) => prevPlan.filter((plan) => plan.id !== id));
  };*/

  //modal

  const nextMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const previousMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const openCreateModal = () => {
    console.log('Modal ref:', createModalRef.current);
    if (createModalRef.current) {
      createModalRef.current.open();
    }
  };

  const openEditModal = () => {
    if (editModalRef.current) {
      editModalRef.current.open();
    }
  };

  const closeModal = () => {
    console.log('closing modal');
    if (createModalRef.current) {
      createModalRef.current.close();
      console.log('modal successfully close');
    }

    clearModal();
  };

  const closeEditModal = () => {
    if (editModalRef.current) {
      editModalRef.current.close();
      console.log('modal for editing successfully close');
    }
  };

  const clearModal = () => {
    setSelectedCategory([]);
    setSelectedExercise([]);
    setNotes('');
    //setWorkoutPlan([]);
    setPreviewNotes('');
    setWorkoutTitle('');
  };

  return (
    <>
      <header className={classes.calendarHeader}>
        <div onClick={previousMonth}>
          <CalendarBackIcon />
        </div>
        <h1>{months[currentDay.getMonth()]}</h1>
        <div onClick={nextMonth}>
          <CalendarForwardIcon />
        </div>
      </header>

      <section className={classes.calendarSection}>
        <div className={classes.daysName}>
          {daysOfWeek.map((weekDay, index) => {
            return <div key={index}>{weekDay}</div>;
          })}
        </div>
        <CalendarDays currentDay={currentDay} changeCurrentDay={changeCurrentDay} savedWorkout={allWorkouts} />
      </section>

      <Modal ref={createModalRef}>
        {!dateHasWorkout ? (
          <div className={style.modalOverlay}>
            <div className={style.modalContent}>
              <h2>Workout for {currentDate}</h2>

              <div className={style.modalInput}>
                <label>Workout Title</label>
                {error.title && <p className={classes.errorText}>Workout title is required</p>}
                <input
                  className={style.workoutTitle}
                  type="text"
                  value={workoutTitle}
                  onChange={(e) => {
                    setWorkoutTitle(e.target.value);
                    if (error.title && e.target.value.trim()) {
                      setError((prev) => ({ ...prev, title: false }));
                    }
                  }}
                />
              </div>

              <div className={style.modalInput}>
                <label>Category</label>
                <select
                  className={style.dropdownMenu}
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    if (error.workoutplan && e.target.value) {
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

              <div className={style.modalInput}>
                <label>Exercises for {selectedCategory}</label>
                <select className={style.dropdownMenu} onChange={handleMoreExercise} value="">
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

              <div className={style.modalInput}>
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={classes.workoutBtn}>
                <Button variation="primary" onClick={handleCreateWorkout}>
                  Create Workout
                </Button>
                {error.workoutplan && <p className={classes.errorText}>Cannot create empty workout</p>}
                <Button variation="quaternary" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.modalOverlay}>
            <div className={style.modalContent}>
              <h2>Workout for {currentDate}</h2>

              <div className={style.modalInput}>
                <label>Workout Title</label>
                <input className={style.workoutTitle} type="text" value={workoutTitle} onChange={(e) => setWorkoutTitle(e.target.value)} />
              </div>

              <div className={style.modalInput}>
                <label>Category</label>
                <select className={style.dropdownMenu} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
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

              <div className={style.modalInput}>
                <label>Exercises for {selectedCategory}</label>
                <select className={style.dropdownMenu} onChange={handleMoreExercise} value="">
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

              <div className={style.modalInput}>
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <Button variation="primary" onClick={handleCreateWorkout}>
                  Create Workout
                </Button>

                <Button variation="quaternary" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {dateHasWorkout && (
        <div className={classes.workoutBox}>
          <h3 className={classes.workoutTitle}>Your workout plan for {dateHasWorkout.date}</h3>
          {dateHasWorkout.workout.map((workout, index) => (
            <div key={index} className={classes.workoutPlan}>
              <NavLink to={`/workout/${workout.id}`} key={workout.id} onClick={() => addWorkoutsToContext(workout)}>
                <h4>{workout.title}</h4>
              </NavLink>
              <p>Exercises: {workout.exercises.map((exercise) => exercise.name).join(', ')}</p>
              <p style={{ whiteSpace: 'pre-line' }}>Notes: {workout.notes}</p>

              <div className={classes.workoutBtn}>
                <Button variation="primary" onClick={() => handleEditWorkout(workout)}>
                  Edit Workout
                </Button>

                <Button variation="quaternary" onClick={() => handleDeleteWorkout(workout.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
          <Button onClick={openCreateModal} variation="fifth" className={classes.createWorkoutBtn}>
            Create new workout
          </Button>
        </div>
      )}

      {editWorkout && (
        <Modal ref={editModalRef}>
          <div className={style.modalOverlay}>
            <div className={style.modalContent}>
              <h2>Edit workout for {currentDate}</h2>

              <div className={style.modalInput}>
                <label>Workout Title</label>
                <input className={style.workoutTitle} type="text" value={workoutTitle} onChange={(e) => setWorkoutTitle(e.target.value)} />
              </div>

              <div className={style.modalInput}>
                <label>Category</label>
                <select className={style.dropdownMenu} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
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

              <div className={style.modalInput}>
                <label>Exercises for {selectedCategory}</label>
                <select className={style.dropdownMenu} onChange={handleMoreExercise} value="">
                  <option disabled value="">
                    Choose an Exercise
                  </option>

                  {crossfitData
                    .find((cat) => cat.title === selectedCategory)
                    ?.exercises.map((exercise) =>
                      exercise.subCategory ? (
                        <optgroup key={exercise.id} label={exercise.name}>
                          {exercise.subCategory.map((subcategory) => (
                            <option key={subcategory.id} value={`${subcategory.name}`}>
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

              <div className={style.modalInput}>
                <label>Notes (you can edit or change your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={classes.workoutBtn}>
                <Button className={style.primaryBtn} onClick={handleSaveEditWorkout} variation="primary">
                  Save changes
                </Button>

                <Button variation="quaternary" onClick={closeEditModal}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
