import { createContext, useState } from 'react';

export const WorkoutDetailsContext = createContext();

export const WorkoutDetailsProvider = ({ children }) => {
  const [workoutDetails, setWorkoutDetails] = useState({});

  return <WorkoutDetailsContext.Provider value={{ workoutDetails, setWorkoutDetails }}>{children}</WorkoutDetailsContext.Provider>;
};
