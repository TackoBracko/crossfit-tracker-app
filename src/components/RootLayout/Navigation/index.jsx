import {
  NavLink,
  //useRouteLoaderData,
  //useLoaderData,
} from 'react-router-dom';
import classes from './Navigation.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import ExercisesIcon from '../../Icons/ExercisesIcon';
import MealPlansIcon from '../../Icons/MealPlansIcon';
import HomeIcon from '../../Icons/HomeIcon';
import ProfileIcon from '../../Icons/ProfileIcon';
import UserCalendarIcon from '../../Icons/UserCalendarIcon';

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
                <NavLink to="" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  <HomeIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="categories" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  <ExercisesIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="meals" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  <MealPlansIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="usercalendar" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  <UserCalendarIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="profile" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  <ProfileIcon />
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
