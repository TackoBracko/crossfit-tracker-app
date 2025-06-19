import classes from './Header.module.css';
import Button from '../../Button';
import LeftIcon from '../../Icons/LeftIcon';
import { useNavigate } from 'react-router-dom';

export default function Header({ exercise }) {
  const navigate = useNavigate();

  return (
    <header className={classes.workoutHeader}>
      <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
      <img src={exercise.picture} alt={exercise.name} />
      <h2>{exercise.name}</h2>
    </header>
  );
}
