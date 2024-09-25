import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './Navigation.module.css';
import homeIcon from '../../../assets/icons/Home.svg';
import profileIcon from '../../../assets/icons/Ellipse.svg';

export default function Navigation() {
  const isUserLogged = useRouteLoaderData('root');

  return (
    <>
      <header className={isUserLogged ? classes.navHome : classes.navHeader}>
        <nav className={classes.nav}>
          <ul>
            {isUserLogged ? (
              <>
                <li>
                  <NavLink to="">
                    <img src={homeIcon} alt="homeIcon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="profile">
                    <img src={profileIcon} alt="profileIcon" />
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
