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
import EditPenBtnIcon from '../../components/Icons/EditPenBtnIcon.jsx';
import ExBtnIcon from '../../components/Icons/ExBtnIcon.jsx';
import SaveBtnIcon from '../../components/Icons/SaveBtnIcon.jsx';

export default function UserCalendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const createModalRef = useRef();
  const editModalRef = useRef();
  const { allWorkouts, createWorkout, deleteWorkout, changeWorkout, addWorkoutsToContext } = useContext(WorkoutDetailsContext);

  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [notes, setNotes] = useState('');
  const [previewNotes, setPreviewNotes] = useState('');
  //const [savedWorkout, setSavedWorkout] = useState({});
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [editWorkout, setEditWorkout] = useState();
  const [editPreviewWorkout, setEditPreviewWorkout] = useState(null);

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

  const handleCategoryChange = (category) => {
    const selectedCategoryData = crossfitData.find((data) => data.title === category);
    const filteredExercisesData = selectedCategoryData ? selectedCategoryData.exercises : [];
    setSelectedCategory(category);
    setFilteredExercises(filteredExercisesData);
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

  //ADD/CREATE

  const handlePreviewWorkout = () => {
    if (selectedCategory && selectedExercise.length > 0) {
      const categoryData = crossfitData.find((category) => category.title === selectedCategory);
      const newWorkout = {
        id: uuidv4(),
        title: workoutTitle,
        category: selectedCategory,
        exercises: selectedExercise.map((exercise) => {
          const exerciseData = categoryData.exercises.find((ex) => ex.name === exercise);
          return {
            id: exerciseData.id,
            name: exerciseData.name,
            category: exerciseData.category,
          };
        }),
        notes: notes,
        date: currentDate,
      };

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

      /*setWorkoutPlan((prevPlan) => [...prevPlan, newWorkout]);
      setPreviewNotes((prevNotes) => {
        return `${prevNotes}\n${selectedExercise.join(', ')} - ${notes}`;
      });*/

      setEditPreviewWorkout(null);
      setPreviewNotes('');
      setFilteredExercises([]);
      setSelectedExercise([]);
      setNotes('');

      console.log(newWorkout.title);
      console.log(newWorkout);
    }
  };

  const handleCreateWorkout = () => {
    const todayWorkout = {
      id: uuidv4(),
      title: workoutTitle,
      date: currentDate,
      workout: [...workoutPlan],
    };

    createWorkout(currentDate, todayWorkout);

    //setSavedWorkout((prevData) => ({ ...prevData, [currentDate]: todayWorkout }));
    closeModal();
    clearModal();

    console.log(todayWorkout.title);
    console.log(todayWorkout);
    console.log(todayWorkout.id);
  };

  //EDITING

  const handleEditWorkout = (workout) => {
    if (workout) {
      console.log('opening editing modal for:', workout);
      setEditWorkout(workout);
      setWorkoutTitle(workout.title);
      setSelectedCategory(workout.category);
      setSelectedExercise(workout.exercises);
      setNotes(workout.notes);
      setPreviewNotes(workout.notes);
      setEditPreviewWorkout(workout);

      openEditModal();
    }
  };

  const handleEditPreviewWorkout = (id) => {
    const workoutToEdit = workoutPlan.find((plan) => plan.id === id);
    if (workoutToEdit) {
      setEditPreviewWorkout(workoutToEdit);
      setPreviewNotes(workoutToEdit.notes);
    }
  };

  //SAVING

  const handleSaveEditWorkout = () => {
    if (editWorkout) {
      const updatedWorkout = {
        ...editWorkout,
        title: workoutTitle,
        category: selectedCategory,
        exercises: selectedExercise,
        notes: previewNotes,
      };

      changeWorkout(currentDate, updatedWorkout);

      /*setSavedWorkout((prevData) => ({
        ...prevData,
        [currentDate]: {
          ...prevData[currentDate],
          workout: prevData[currentDate].workout.map((workout) => (workout.id === updatedWorkout.id ? updatedWorkout : workout)),
        },
      }));*/
    }

    setEditWorkout();
    clearModal();
    closeModal();
  };

  const handleSavePreviewChanges = () => {
    if (editPreviewWorkout) {
      setWorkoutPlan((prevPlan) => prevPlan.map((plan) => (plan.id === editPreviewWorkout.id ? { ...plan, notes: editPreviewWorkout.notes } : plan)));
    }

    setEditPreviewWorkout(null);
    setWorkoutTitle('');
    setSelectedCategory('');
    setSelectedExercise([]);
    setNotes('');
  };

  const handleAddChanges = () => {
    setPreviewNotes(notes);
  };

  //DELETE

  const handleDeleteWorkout = (id) => {
    deleteWorkout(currentDate, id);
  };

  const handleDeletePreviewWorkout = (id) => {
    setWorkoutPlan((prevPlan) => prevPlan.filter((plan) => plan.id !== id));
  };

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

  /*const closeModalOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };*/

  const clearModal = () => {
    setSelectedCategory('');
    setFilteredExercises([]);
    setSelectedExercise([]);
    setNotes('');
    setWorkoutPlan([]);
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
                <input className={style.workoutTitle} type="text" value={workoutTitle} onChange={(e) => setWorkoutTitle(e.target.value)} />
              </div>

              <div className={style.modalInput}>
                <label>Category</label>
                <select className={style.dropdownMenu} value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
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
                <select className={style.dropdownMenu} onChange={handleMoreExercise}>
                  <option disabled value={selectedExercise}>
                    Choose an Exercise
                  </option>
                  {filteredExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.name}>
                      {exercise.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.modalInput}>
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={handlePreviewWorkout}>
                  Add Preview
                </button>
                <button className={style.cancelBtn} onClick={closeModal}>
                  Cancel
                </button>
              </div>

              {workoutPlan.length > 0 && (
                <div className={style.workoutPreview}>
                  <h3>Preview:</h3>
                  {workoutPlan.map((workout, index) => {
                    return (
                      <div key={index} className={style.previewInfo}>
                        <div className={style.previewBtn}>
                          <button className={style.exIcon} onClick={() => handleDeletePreviewWorkout(workout.id)}>
                            <ExBtnIcon />
                          </button>

                          {!editPreviewWorkout || editPreviewWorkout.id !== workout.id ? (
                            <button className={style.editIcon} onClick={() => handleEditPreviewWorkout(workout.id)}>
                              <EditPenBtnIcon />
                            </button>
                          ) : (
                            <button className={style.saveIcon} onClick={handleSavePreviewChanges}>
                              <SaveBtnIcon />
                            </button>
                          )}
                        </div>

                        <p style={{ whiteSpace: 'pre-line' }}>
                          {editPreviewWorkout && editPreviewWorkout.id ? (
                            <textarea
                              className={style.textarea}
                              value={editPreviewWorkout.notes}
                              onChange={(e) => setEditPreviewWorkout({ ...editPreviewWorkout, notes: e.target.value })}
                            />
                          ) : (
                            workout.notes
                          )}
                        </p>
                      </div>
                    );
                  })}
                  <Button variation="primary" onClick={handleCreateWorkout}>
                    Create Workout
                  </Button>
                </div>
              )}
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
                <select className={style.dropdownMenu} value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
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
                <select className={style.dropdownMenu} onChange={handleMoreExercise}>
                  <option disabled value={selectedExercise}>
                    Choose an Exercise
                  </option>
                  {filteredExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.name}>
                      {exercise.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.modalInput}>
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={handlePreviewWorkout}>
                  Add Preview
                </button>
                <button className={style.cancelBtn} onClick={closeModal}>
                  Cancel
                </button>
              </div>

              {workoutPlan.length > 0 && (
                <div className={style.workoutPreview}>
                  <h3>Preview:</h3>
                  {workoutPlan.map((workout, index) => {
                    return (
                      <div key={index} className={style.previewInfo}>
                        <div className={style.previewBtn}>
                          <button className={style.exIcon} onClick={() => handleDeletePreviewWorkout(workout.id)}>
                            <ExBtnIcon />
                          </button>

                          {!editPreviewWorkout || editPreviewWorkout.id !== workout.id ? (
                            <button className={style.editIcon} onClick={() => handleEditPreviewWorkout(workout.id)}>
                              <EditPenBtnIcon />
                            </button>
                          ) : (
                            <button className={style.saveIcon} onClick={handleSavePreviewChanges}>
                              <SaveBtnIcon />
                            </button>
                          )}
                        </div>

                        <p style={{ whiteSpace: 'pre-line' }}>
                          {editPreviewWorkout && editPreviewWorkout.id ? (
                            <textarea
                              className={style.textarea}
                              value={editPreviewWorkout.notes}
                              onChange={(e) => setEditPreviewWorkout({ ...editPreviewWorkout, notes: e.target.value })}
                            />
                          ) : (
                            workout.notes
                          )}
                        </p>
                      </div>
                    );
                  })}
                  <Button variation="primary" onClick={handleCreateWorkout}>
                    Create Workout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {dateHasWorkout && (
        <div>
          <h3 className={classes.workoutTitle}>Your workout plan for {dateHasWorkout.date}</h3>
          {dateHasWorkout.workout.map((workout, index) => (
            <div key={index} className={classes.workoutPlan}>
              <NavLink to={`/workout/${workout.id}`} key={workout.id} onClick={() => addWorkoutsToContext(workout)}>
                <h4>{workout.title}</h4>
              </NavLink>
              <p>Exercises: {workout.exercises.map((exercise) => exercise.name).join(', ')}</p>
              <p style={{ whiteSpace: 'pre-line' }}>Notes: {workout.notes}</p>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={() => handleEditWorkout(workout)}>
                  Edit Workout
                </button>
                <button className={style.cancelBtn} onClick={() => handleDeleteWorkout(workout.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button className={style.createWorkoutBtn} onClick={openCreateModal}>
            Create new workout
          </button>
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
                <select className={style.dropdownMenu} value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
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
                <label>Exercises for {selectedCategory} </label>
                <select className={style.dropdownMenu} onChange={handleMoreExercise}>
                  <option disabled value={selectedExercise}>
                    Choose a Exercise
                  </option>
                  {filteredExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.name}>
                      {exercise.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.modalInput}>
                <label>Notes (you can edit or change your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={handleAddChanges}>
                  Add changes
                </button>
                <button className={style.cancelBtn} onClick={closeEditModal}>
                  Cancel
                </button>
              </div>

              <div className={style.workoutPreview}>
                <h3>Preview</h3>
                <div className={style.previewInfo}>
                  <p style={{ whiteSpace: 'pre-line' }}>
                    <textarea className={style.textarea} value={previewNotes} onChange={(e) => setPreviewNotes(e.target.value)} />
                  </p>
                </div>
              </div>
              <button className={style.primaryBtn} onClick={handleSaveEditWorkout}>
                Save changes
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
