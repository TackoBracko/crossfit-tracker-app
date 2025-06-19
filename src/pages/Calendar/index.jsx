import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { crossfitData } from '../../data/CrossfitData.js';
import { WorkoutDetailsContext } from '../../Context/WorkoutDetailsContext.jsx';
import classes from './Calendar.module.css';
import Modal from './../../components/Modal';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon.jsx';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon.jsx';
import Planner from './../../components/Calendar/Planner';
import DayWithWorkout from './../../components/Calendar/DayWithWorkout';
import LayoutContent from './../../components/Calendar/WorkoutModalContent/LayoutContent';
import CreateContent from './../../components/Calendar/WorkoutModalContent/CreateContent';
import HeaderContent from './../../components/Calendar/WorkoutModalContent/HeaderContent';
import EditContent from './../../components/Calendar/WorkoutModalContent/EditContent';

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const createModalRef = useRef();
  const editModalRef = useRef();
  const { allWorkouts, createWorkout, deleteWorkout, changeWorkout, addWorkoutsToContext } = useContext(WorkoutDetailsContext);

  const [currentDay, setCurrentDay] = useState(new Date());
  const currentDate = `${currentDay.getDate()}_${currentDay.getMonth() + 1}_${currentDay.getFullYear()}`;
  const dateHasWorkout = allWorkouts[currentDate];

  const [workoutTitle, setWorkoutTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');
  const [selectedExercisesList, setSelectedExercisesList] = useState([]);
  const [exerciseMetrics, setExerciseMetrics] = useState({ sets: '', reps: '', weight: '' });
  const [editWorkout, setEditWorkout] = useState(null);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState({
    title: false,
    workoutplan: false,
  });

  const changeCurrentDay = (day) => {
    const newDate = new Date(day.year, day.month, day.number);
    const selectedDay = `${newDate.getDate()}_${newDate.getMonth() + 1}_${newDate.getFullYear()}`;
    setCurrentDay(newDate);

    if (!allWorkouts[selectedDay]) {
      console.log('opening add modal');
      openCreateModal();
    }
  };

  const handleExerciseSelect = (e) => {
    setSelectedExercise(e.target.value);
  };

  const handleExerciseMetrics = (e) => {
    const { name, value } = e.target;
    setExerciseMetrics((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleAddSelectedExercise = () => {
    const newExercise = {
      name: selectedExercise,
      sets: Number(exerciseMetrics.sets),
      reps: Number(exerciseMetrics.reps),
      weight: exerciseMetrics.weight,
    };

    let line = newExercise.name;
    if (newExercise.sets > 0 && newExercise.reps > 0) {
      line += ` ${newExercise.sets} sets x ${newExercise.reps} reps`;
    } else if (newExercise.sets > 0) {
      line += ` ${newExercise.sets} sets`;
    } else if (newExercise.reps > 0) {
      line += ` ${newExercise.reps} reps`;
    }
    if (newExercise.weight) {
      line += ` @ ${newExercise.weight} kg`;
    }

    setSelectedExercisesList((prev) => [...prev, newExercise]);
    setNotes((prevNote) => (prevNote ? `${prevNote}\n${line}` : line));

    setExerciseMetrics({ sets: '', reps: '', weight: '' });
    setSelectedExercise('');
  };

  const handleWorkoutBuild = (workoutTitle, notes, currentDate, selectedExercisesList) => {
    let categoriesList = [];

    crossfitData.map((category) => {
      const exercises = category.exercises.map((exercise) => {
        if (exercise.subExercise) {
          return exercise.subExercise.map((subexercise) => ({
            id: subexercise.id,
            name: subexercise.name,
            categoryId: category.id,
            category: category.title,
            subExercise: exercise.id,
            picture: subexercise.picture,
          }));
        } else {
          return [
            {
              id: exercise.id,
              name: exercise.name,
              categoryId: category.id,
              category: category.title,
              subExercise: null,
              picture: exercise.picture,
            },
          ];
        }
      });

      categoriesList = categoriesList.concat(...exercises);
    });

    const selectedExercisesData = selectedExercisesList.map((exercise) => {
      const exerciseData = categoriesList.find((ex) => ex.name === exercise.name);

      return {
        id: exerciseData.id,
        name: exerciseData.name,
        categoryId: exerciseData.categoryId,
        category: exerciseData.category,
        subExercise: exerciseData.subExercise,
        picture: exerciseData.picture,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        note: notes.split('\n').find((note) => note.includes(exercise.name)) || '',
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
    const errorWorkoutPlan = !selectedCategory || selectedExercisesList.length === 0;

    if (errorTitle || errorWorkoutPlan) {
      setError({
        title: errorTitle,
        workoutplan: errorWorkoutPlan,
      });
      return;
    }

    const newWorkout = handleWorkoutBuild(workoutTitle, notes, currentDate, selectedExercisesList);

    const todayWorkout = {
      id: uuidv4(),
      date: currentDate,
      workout: [newWorkout],
    };

    createWorkout(currentDate, todayWorkout);

    closeCreateModal();
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
      setSelectedCategory(workout.category || '');
      setSelectedExercise('');
      setSelectedExercisesList(
        workout.exercises.map((ex) => ({
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
        })),
      );
      setNotes(workout.notes);
      openEditModal();
    }
  };

  const handleSaveEditWorkout = () => {
    if (editWorkout) {
      const newEditedWorkout = handleWorkoutBuild(workoutTitle, notes, currentDate, selectedExercisesList);

      const updatedWorkout = {
        ...editWorkout,
        title: newEditedWorkout.title,
        category: selectedCategory,
        exercises: newEditedWorkout.exercises.filter((ex) => notes.includes(ex.name)),
        notes: newEditedWorkout.notes,
      };

      changeWorkout(currentDate, updatedWorkout);
      console.log(updatedWorkout);
    }

    setEditWorkout(null);
    clearModal();
    closeEditModal();
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

  const closeCreateModal = () => {
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
    setSelectedCategory('');
    setSelectedExercise('');
    setSelectedExercisesList([]);
    setExerciseMetrics({ sets: '', reps: '', weight: '' });
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
        <Planner currentDay={currentDay} changeCurrentDay={changeCurrentDay} savedWorkout={allWorkouts} />
      </section>

      <Modal ref={createModalRef}>
        <LayoutContent>
          <HeaderContent
            modalTitle={`Workout for ${currentDate}`}
            workoutTitle={workoutTitle}
            setWorkoutTitle={setWorkoutTitle}
            error={error}
            setError={setError}
          />

          <CreateContent
            crossfitData={crossfitData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedExercise={selectedExercise}
            selectedExercisesList={selectedExercisesList}
            handleCreateWorkout={handleCreateWorkout}
            exerciseMetrics={exerciseMetrics}
            handleExerciseMetrics={handleExerciseMetrics}
            handleAddSelectedExercise={handleAddSelectedExercise}
            handleExerciseSelect={handleExerciseSelect}
            error={error}
            setError={setError}
            closeCreateModal={closeCreateModal}
          />
        </LayoutContent>
      </Modal>

      {editWorkout && (
        <Modal ref={editModalRef}>
          <LayoutContent>
            <HeaderContent
              modalTitle={`Edit  workout for ${currentDate}`}
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              error={error}
              setError={setError}
            />

            <EditContent
              crossfitData={crossfitData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedExercise={selectedExercise}
              selectedExercisesList={selectedExercisesList}
              exerciseMetrics={exerciseMetrics}
              handleExerciseMetrics={handleExerciseMetrics}
              handleExerciseSelect={handleExerciseSelect}
              handleAddSelectedExercise={handleAddSelectedExercise}
              handleSaveEditWorkout={handleSaveEditWorkout}
              notes={notes}
              setNotes={setNotes}
              closeEditModal={closeEditModal}
            />
          </LayoutContent>
        </Modal>
      )}

      {dateHasWorkout && (
        <DayWithWorkout
          dateHasWorkout={dateHasWorkout}
          addWorkoutsToContext={addWorkoutsToContext}
          handleEditWorkout={handleEditWorkout}
          handleDeleteWorkout={handleDeleteWorkout}
          openCreateModal={openCreateModal}
        />
      )}
    </>
  );
}
