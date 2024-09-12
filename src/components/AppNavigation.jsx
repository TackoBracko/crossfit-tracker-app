import { NavLink } from 'react-router-dom';

export default function AppNavigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="homepage">Home</NavLink>
            </li>
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="logInPage">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="signUpPage">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
