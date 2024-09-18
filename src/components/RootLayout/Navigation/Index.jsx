import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

export default function Navigation() {
  const isUserLogged = false;

  //const loginBackground = isUserLogged ? undefined : classes.loginBackground;

  return (
    <>
      <header className={classes.nav}>
        <nav>
          <ul>
            {isUserLogged ? (
              <>
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink to="profile">Profile</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="login">LogIn</NavLink>
                </li>
                <li>
                  <NavLink to="signup">Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
