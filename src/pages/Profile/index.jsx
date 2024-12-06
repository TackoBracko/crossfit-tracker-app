//import profilePic from './../../assets/pictures/ProfilePic.png';
//import backArrow from './../../assets/icons/BackArrow.svg';
import classes from './Profile.module.css';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../components/Context/UserContext';
import { useContext } from 'react';

import Button from '../../components/Button';
import BackBtn from '../../components/Icons/BackBtnIcon';
import { AuthContext } from '../../components/Context/AuthContext';

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const { logout } = useContext(AuthContext);

  return (
    <>
      <header className={classes.profileHeader}>
        <Button variation="secondary">
          <Link to="/">
            <BackBtn />
          </Link>
        </Button>
        <h1>Profile</h1>
      </header>

      <section className={classes.profileInfo}>
        <div className={classes.leftInfo}>
          {/*<img src={profilePic} alt="User profile picture" className={classes.profilePic} />*/}
          <p className={classes.profilePic}>S</p>
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
    </>
  );
}
