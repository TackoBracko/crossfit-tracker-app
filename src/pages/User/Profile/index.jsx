import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { AuthContext } from '../../../Context/AuthContext';
import classes from './../Profile/Profile.module.css';
import Button from '../../../components/Button';

export default function Profile() {
  const { user } = useContext(UserContext);
  const { logout } = useContext(AuthContext);
  const profileInitial = user.name ? user.name.charAt(0).toUpperCase() : '';

  return (
    <div className={classes.profileContainer}>
      <header className={classes.profileHeader}>
        <h1>Profile</h1>
      </header>

      <section className={classes.profileInfo}>
        <div className={classes.leftInfo}>
          {/*<img src={profilePic} alt="User profile picture" className={classes.profilePic} />*/}
          <p className={classes.profilePic}>{profileInitial}</p>
          <h3>
            <span>{user.name}</span>
          </h3>
        </div>

        <div className={classes.rightInfo}>
          <p>
            <span>Weight: </span>
            <span> {user.weight} kg </span>
          </p>
          <p>
            <span>Height: </span>
            <span> {user.height} cm</span>
          </p>
          <p>
            <span>Age: </span>
            <span> {user.age} years</span>
          </p>
        </div>
      </section>

      <section className={classes.profileList}>
        <ul>
          <li>
            <NavLink to="/edit">Edit Profile</NavLink>
          </li>
          <li>
            <NavLink to="">Privacy Policy</NavLink>
          </li>
        </ul>

        <Button variation="tertiary" onClick={() => logout()}>
          Sign out
        </Button>
      </section>
    </div>
  );
}
