import {
  NavLink,
  //useRouteLoaderData,
  //useLoaderData,
} from 'react-router-dom';
import classes from './Navigation.module.css';
import homeIcon from '../../../assets/icons/Home.svg';
import profileIcon from '../../../assets/icons/Ellipse.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import DiaryIcon from '../../Icons/DiaryIcon';
import MealPlansIcon from '../../Icons/MealPlansIcon';

export default function Navigation() {
  //const isUserLogged = useRouteLoaderData('root');
  const { isUserLogged } = useContext(AuthContext);

  return (
    <>
      <header className={isUserLogged ? `${classes.header} ${classes.dark}` : classes.header}>
        <nav className={classes.nav}>
          {isUserLogged ? (
            <ul className={classes.loggedNav}>
              <li>
                <NavLink to="">
                  <img src={homeIcon} alt="Home Icon" />
                </NavLink>
              </li>
              <li>
                <NavLink to="diary">
                  <DiaryIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="meals">
                  <MealPlansIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="profile">
                  <img src={profileIcon} alt="Profile Icon" />
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className={classes.activeNav}>
              <li>
                <NavLink to="login" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink to="signup" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}
