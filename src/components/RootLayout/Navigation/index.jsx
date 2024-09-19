import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './Navigation.module.css';

export default function Navigation() {
  const isUserLogged = useRouteLoaderData('root');

  return (
    <>
      <header className={classes.navHeader}>
        <nav className={classes.nav}>
          <ul>
            {isUserLogged ? (
              <>
                <li>
                  <NavLink to="" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="profile" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                    Profile
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
