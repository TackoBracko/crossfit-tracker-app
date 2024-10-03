import profilePic from './../../assets/pictures/ProfilePic.png';
import classes from './Profile.module.css';

export default function ProfilePage() {
  return (
    <>
      <div className={classes.profile}>
        <h2>Profile</h2>
        <img src={profilePic} alt="Profile picture" />
        <h1>Sarah</h1>
        <h1>Wegan</h1>
      </div>
    </>
  );
}
