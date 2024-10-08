import profilePic from './../../assets/pictures/ProfilePic.png';
import backArrow from './../../assets/icons/BackArrow.svg';
import editBtn from './../../assets/icons/EditBtn.svg';
import classes from './Profile.module.css';
import { NavLink } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <>
      <header className={classes.profileHeader}>
        <nav className={classes.profileNav}>
          <ul className={classes.back}>
            <li>
              <NavLink to="/">
                <img src={backArrow} alt="Sign for back" />
              </NavLink>
            </li>
          </ul>
          <h2>Profile</h2>
          <ul className={classes.edit}>
            <li>
              <NavLink to="">
                <img src={editBtn} alt="Button for editing profile" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className={classes.profileInfo}>
        <img src={profilePic} alt="Profile Picture" />
        <h3>
          <span>Sarah</span> Wegan
        </h3>
        <p>Basic Member</p>
      </section>

      <section className={classes.profileDetails}>
        <div className={classes.measures}>
          <p>
            <span>53 kg</span> Wight
          </p>
          <p>
            <span>160 cm</span> Height
          </p>
          <p>
            <span>33 years</span> Age
          </p>
        </div>

        <div>
          <NavLink to="login">
            <button className={classes.signoutBtn}>Sign out</button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
