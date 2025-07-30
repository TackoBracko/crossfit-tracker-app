import classes from './Header.module.css';
import LeftIcon from '../../../../components/Icons/LeftIcon';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Header({ picture, name }) {
  const navigate = useNavigate();

  return (
    <header className={classes.timerHeader}>
      <Button variation="secondary" iconLeft={<LeftIcon />} onClick={() => navigate(-1)} />
      <img src={picture} alt={name} />
    </header>
  );
}
