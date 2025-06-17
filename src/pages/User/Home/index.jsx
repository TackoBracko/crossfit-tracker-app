import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import classes from './../Home/Home.module.css';

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className={classes.homeHeader}>
        <h1>
          Welcome back, <br />
          {user.name}
        </h1>
        <p>Push yourself, because no one else is going to do it for you</p>
      </header>
    </>
  );
}
