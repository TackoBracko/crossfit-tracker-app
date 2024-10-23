//import profilePic from './../../assets/pictures/ProfilePic.png';
import backArrow from './../../assets/icons/BackArrow.svg';
import classes from './Profile.module.css';
import { NavLink } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <>
      <header className={classes.profileHeader}>
        <NavLink to="/" className={classes.backBtn}>
          <img src={backArrow} alt="Back arrow" />
        </NavLink>
        <h1>Profile</h1>
      </header>

      <section className={classes.profileInfo}>
        <div className={classes.leftInfo}>
          {/*<img src={profilePic} alt="User profile picture" className={classes.profilePic} />*/}
          <p className={classes.profilePic}>S</p>
          <h3>
            <span>Sarah</span> Warner
          </h3>
        </div>

        <div className={classes.rightInfo}>
          <p>
            <span>Weight: </span>
            <span> 55 </span> kg
          </p>
          <p>
            <span>Height: </span>
            <span>170</span> cm
          </p>
          <p>
            <span>Age: </span>
            <span>21</span> years
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

        <div className={classes.signOut}>
          <NavLink to="/">Sign out</NavLink>
        </div>
      </section>
    </>
  );
}
