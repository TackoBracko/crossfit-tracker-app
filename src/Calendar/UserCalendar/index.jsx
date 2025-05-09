import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { crossfitData } from '../../Crossfit/data/CrossfitData.js';
import { NavLink } from 'react-router-dom';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext.jsx';
import classes from './UserCalendar.module.css';
import Button from '../../components/Button/index.jsx';
import GeneralModal from '../../components/Modal/GeneralModal';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from './../../Calendar/CalendarDays';
import CreateWorkoutContent from '../../components/WorkoutModalContent/CreateWorkoutContent';
import WorkoutHeaderContent from '../../components/WorkoutModalContent/WorkoutHeaderContent';
import CalendarModalContent from '../../components/Modal/CalendarModalContent';
import EditWorkoutContent from '../../components/WorkoutModalContent/EditWorkoutContent/index.jsx';

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
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [editWorkout, setEditWorkout] = useState(null);

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
      openEditModal();
    }
  };

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

  const handleAddChanges = () => {
    setPreviewNotes(notes);
  };

  //DELETE

  const handleDeleteWorkout = (id) => {
    deleteWorkout(currentDate, id);
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

  const clearModal = () => {
    setSelectedCategory([]);
    setSelectedExercise([]);
    setNotes('');
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

      <GeneralModal ref={createModalRef}>
        <CalendarModalContent>
          <WorkoutHeaderContent
            modalTitle={`Workout for ${currentDate}`}
            workoutTitle={workoutTitle}
            setWorkoutTitle={setWorkoutTitle}
            error={error}
            setError={setError}
          />

          <CreateWorkoutContent
            crossfitData={crossfitData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleMoreExercise={handleMoreExercise}
            notes={notes}
            setNotes={setNotes}
            error={error}
            setError={setError}
            handleCreateWorkout={handleCreateWorkout}
            closeModal={closeModal}
          />
        </CalendarModalContent>
      </GeneralModal>

      {editWorkout && (
        <GeneralModal ref={editModalRef}>
          <CalendarModalContent>
            <WorkoutHeaderContent
              modalTitle={`Edit  workout for ${currentDate}`}
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              error={error}
              setError={setError}
            />

            <EditWorkoutContent
              crossfitData={crossfitData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleMoreExercise={handleMoreExercise}
              notes={notes}
              setNotes={setNotes}
              handleSaveEditWorkout={handleSaveEditWorkout}
              closeEditModal={closeEditModal}
            />
          </CalendarModalContent>
        </GeneralModal>
      )}

      {dateHasWorkout && (
        <div className={classes.workoutBox}>
          <h3 className={classes.workoutDayTitle}>Your workout plan for {dateHasWorkout.date}</h3>
          {dateHasWorkout.workout.map((workout, index) => (
            <div key={index} className={classes.workoutPlan}>
              <NavLink to={`/workout/${workout.id}`} key={workout.id} onClick={() => addWorkoutsToContext(workout)}>
                <h4 className={classes.workoutTitle}>{workout.title}</h4>
              </NavLink>
              <p className={classes.workoutExercise}>Exercises: {workout.exercises.map((exercise) => exercise.name).join(', ')}</p>
              <p className={classes.workoutExercise}>Notes: {workout.notes}</p>

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
    </>
  );
}
