import { useContext } from 'react';
import Timer from './Timer';
import Header from './Header';
import { WorkoutDetailsContext } from '../../../Context/WorkoutDetailsContext';

export default function Player() {
  const { workoutDetails } = useContext(WorkoutDetailsContext);
  const currentExercise = workoutDetails.exercises[0];

  return (
    <>
      <Header exercise={currentExercise} />
      <Timer />
    </>
  );
}
