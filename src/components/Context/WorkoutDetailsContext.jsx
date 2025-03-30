import { createContext, useState } from 'react';

export const WorkoutDetailsContext = createContext();

export const WorkoutDetailsProvider = ({ children }) => {
  const [allWorkouts, setAllWorkouts] = useState({});
  const [workoutDetails, setWorkoutDetails] = useState(null);

  const createWorkout = (currentDate, workout) => {
    setAllWorkouts((prevData) => {
      if (prevData[currentDate]) {
        return {
          ...prevData,
          [currentDate]: {
            ...prevData[currentDate],
            workout: [...prevData[currentDate].workout, ...workout.workout],
          },
        };
      } else {
        return {
          ...prevData,
          [currentDate]: workout,
        };
      }
    });
  };

  const deleteWorkout = (currentDate, id) => {
    setAllWorkouts((prevData) => {
      const updatedWorkoutList = prevData[currentDate].workout.filter((training) => training.id !== id);

      return {
        ...prevData,
        [currentDate]: updatedWorkoutList.length > 0 ? { ...prevData[currentDate], workout: updatedWorkoutList } : undefined,
      };
    });
  };

  const changeWorkout = (currentDate, updatedWorkout) => {
    setAllWorkouts((prevData) => ({
      ...prevData,
      [currentDate]: {
        ...prevData[currentDate],
        workout: prevData[currentDate].workout.map((workout) => (workout.id === updatedWorkout.id ? updatedWorkout : workout)),
      },
    }));
  };

  const addWorkoutsToContext = (workout) => {
    setWorkoutDetails(workout);
    console.log(workout);
  };

  return (
    <WorkoutDetailsContext.Provider value={{ allWorkouts, createWorkout, workoutDetails, changeWorkout, deleteWorkout, addWorkoutsToContext }}>
      {children}
    </WorkoutDetailsContext.Provider>
  );
};
