import { useRef, useState } from 'react';
import { crossfitData } from './../../data/CrossfitData.js';
import classes from './UserCalendar.module.css';
import style from './../../components/CalendarModal/CalendarModal.module.css';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from '../CalendarDays';
import Modal from '../../components/CalendarModal';
import Button from '../../components/Button/index.jsx';

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const modalRef = useRef();

  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [notes, setNotes] = useState('');
  const [savedWorkout, setSavedWorkout] = useState([]);
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState('');

  const currentDate = `${currentDay.getDate()} ${currentDay.toLocaleString('en-US', { month: 'long' })} ${currentDay.getFullYear()}`;

  const dateHasWorkout = savedWorkout.find((workout) => {
    return workout.date === currentDate;
  });

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));

    if (!dateHasWorkout) {
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
    const values = options.map((exercise) => exercise.value);

    setSelectedExercise((prevExercise) => [...prevExercise, ...values]);
    setNotes((prevNote) => [...prevNote, ...values]);
  };

  const handleAddExercise = () => {
    if (selectedCategory && selectedExercise.length > 0) {
      const newExercise = {
        title: workoutTitle,
        category: selectedCategory,
        exercise: selectedExercise,
        notes: notes,
      };

      setWorkoutPlan((prevPlan) => [...prevPlan, newExercise]);

      setWorkoutTitle('');
      setSelectedExercise([]);
      setFilteredExercises([]);
      setNotes('');
    }
  };

  const handleCreateWorkout = () => {
    const todayWorkout = {
      title: workoutTitle,
      date: currentDate,
      workout: workoutPlan,
    };

    setSavedWorkout((prevData) => [...prevData, todayWorkout]);
    console.log(todayWorkout);
    clearModal();
    closeModal();
  };

  const nextMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const previousMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const openModal = () => {
    modalRef.current.open();
  };

  const closeModal = () => {
    clearModal();
    modalRef.current.close();
  };

  const closeModalOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const clearModal = () => {
    setSelectedCategory('');
    setFilteredExercises([]);
    setSelectedExercise([]);
    setNotes('');
    setWorkoutPlan([]);
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

      {!dateHasWorkout ? (
        <Modal ref={modalRef}>
          <div className={style.modalOverlay} onClick={closeModalOutside}>
            <div className={style.modalContent}>
              <h2>Plan for {currentDate}</h2>

              <div className={style.modalInput}>
                <label>Workout Title</label>
                <input className={style.workoutTitle} type="text" value={workoutTitle} onChange={(e) => setWorkoutTitle(e.target.value)} />
              </div>

              <div className={style.modalInput}>
                <label>Category</label>
                <select className={style.dropdownMenu} onChange={(e) => handleCategoryChange(e.target.value)}>
                  <option>Choose a Category</option>
                  {crossfitData.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.modalInput}>
                <label>Exercises for {selectedCategory} </label>
                <select className={style.dropdownMenu} multiple value={selectedExercise} onChange={handleMoreExercise}>
                  <option>Choose a Exercise</option>
                  {filteredExercises.map((exercise) => (
                    <option key={exercise.id}>{exercise.name}</option>
                  ))}
                </select>
              </div>

              <div className={style.modalInput}>
                <label>Notes (you can edit your exercises)</label>
                <textarea className={style.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>

              <div className={style.modalBtn}>
                <button className={style.primaryBtn} onClick={handleAddExercise}>
                  Add Exercise
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
                        <p>Title: {workout.title}</p>
                        <p>Exercises: {workout.exercise.join(', ')}</p>
                        <p>Note: {workout.notes.join(', ')}</p>
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
      ) : (
        <>
          {dateHasWorkout && (
            <div className={classes.workoutPlan}>
              <h3>Your workout plan for {dateHasWorkout.date}</h3>
              {dateHasWorkout.workout.map((workout, index) => (
                <div key={index}>
                  <h4>{workout.title}</h4>
                  <p>Exercises: {workout.exercise.join(', ')}</p>
                  <p>Notes: {workout.notes.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
