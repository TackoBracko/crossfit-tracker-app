import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="login">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="signup">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
