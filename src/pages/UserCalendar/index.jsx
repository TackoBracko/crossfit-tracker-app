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

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const modalRef = useRef();
  const { setWorkoutDetails } = useContext(WorkoutDetailsContext);

  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [notes, setNotes] = useState('');
  const [previewNotes, setPreviewNotes] = useState('');
  const [savedWorkout, setSavedWorkout] = useState({});
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [editWorkout, setEditWorkout] = useState();
  const [editPreviewWorkout, setEditPreviewWorkout] = useState();

  const currentDate = `${currentDay.getDate()}_${currentDay.getMonth() + 1}_${currentDay.getFullYear()}`;
  const dateHasWorkout = savedWorkout[currentDate];

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
    console.log('changing current day to:', day);

    if (!dateHasWorkout) {
      console.log('opening add modal');
      openModal();
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

  const handleAddWorkout = () => {
    if (selectedCategory && selectedExercise.length > 0) {
      const newExercise = {
        id: uuidv4(),
        title: workoutTitle,
        category: selectedCategory,
        exercise: [...selectedExercise],
        notes: notes,
      };

      setWorkoutPlan((prevPlan) => [...prevPlan, newExercise]);

      setEditPreviewWorkout(null);
      setPreviewNotes('');
      setFilteredExercises([]);
      setNotes('');

      console.log(newExercise.title);
      console.log(newExercise);
    }
  };

  const handleCreateWorkout = () => {
    const todayWorkout = {
      id: uuidv4(),
      title: workoutTitle,
      date: currentDate,
      workout: workoutPlan,
    };

    setSavedWorkout((prevData) => ({ ...prevData, [currentDate]: todayWorkout }));
    closeModal();
    clearModal();

    console.log(todayWorkout.title);
    console.log(todayWorkout);
    console.log(todayWorkout.id);
  };

  const handleWorkoutDetails = (workout) => {
    setWorkoutDetails(workout);
  };

  //EDITING

  const handleEditWorkout = (workout) => {
    if (workout) {
      console.log('opening editing modal for:', workout);
      setEditWorkout(workout);
      setWorkoutTitle(workout.title);
      setSelectedCategory(workout.category);
      setSelectedExercise(workout.exercise);
      setNotes(workout.notes);
      setPreviewNotes(workout.notes);
      setEditPreviewWorkout(workout);

      openModal();
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
        exercise: selectedExercise,
        notes: previewNotes,
      };

      setSavedWorkout((prevData) => ({
        ...prevData,
        [currentDate]: {
          ...prevData[currentDate],
          workout: prevData[currentDate].workout.map((workout) => (workout.id === updatedWorkout.id ? updatedWorkout : workout)),
        },
      }));

      //setWorkoutPlan([...workoutPlan, updatedWorkout]);
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
    setSavedWorkout((prevData) => {
      const updatedWorkoutList = prevData[currentDate].workout.filter((training) => training.id !== id);

      return {
        ...prevData,
        [currentDate]: updatedWorkoutList.length > 0 ? { ...prevData[currentDate], workout: updatedWorkoutList } : undefined,
      };
    });

    /*setSavedWorkout((prevData) => ({
      ...prevData,
      [currentDate]: {
        ...prevData[currentDate],
        workout: prevData[currentDate].workout.filter((training) => training.id !== id),
      },
    }));*/
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

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    } else {
      console.error('Modal is not opening');
    }
  };

  const closeModal = () => {
    console.log('closing modal');
    if (modalRef.current) {
      modalRef.current.close();
      console.log('modal successfully close');
    }

    clearModal();
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
        <CalendarDays currentDay={currentDay} changeCurrentDay={changeCurrentDay} savedWorkout={savedWorkout} />
      </section>

      {!dateHasWorkout && (
        <Modal ref={modalRef}>
          <div className={style.modalOverlay}>
            <div className={style.modalContent}>
              <h2>Plan for {currentDate}</h2>

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
                  <option disabled selected value={selectedExercise}>
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
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={handleAddWorkout}>
                  Save
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
                        <p style={{ whiteSpace: 'pre-line' }}>
                          Notes:
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

                        <div className={style.modalBtn}>
                          <button className={style.cancelBtn} onClick={() => handleDeletePreviewWorkout(workout.id)}>
                            Delete
                          </button>

                          {!editPreviewWorkout || editPreviewWorkout.id !== workout.id ? (
                            <button className={style.primaryBtn} onClick={() => handleEditPreviewWorkout(workout.id)}>
                              Edit preview
                            </button>
                          ) : (
                            <button className={style.primaryBtn} onClick={handleSavePreviewChanges}>
                              Save changes
                            </button>
                          )}
                        </div>
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
        </Modal>
      )}

      {dateHasWorkout && (
        <div>
          <h3 className={classes.workoutTitle}>Your workout plan for {dateHasWorkout.date}</h3>
          {dateHasWorkout.workout.map((workout, index) => (
            <div key={index} className={classes.workoutPlan}>
              <NavLink to={`/workout/${workout.id}`} onClick={() => handleWorkoutDetails(workout)}>
                <h4>{workout.title}</h4>
              </NavLink>
              <p>Exercises: {workout.exercise.join(', ')}</p>
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
        </div>
      )}

      {editWorkout && (
        <Modal ref={modalRef}>
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
                <button className={style.cancelBtn} onClick={closeModal}>
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
