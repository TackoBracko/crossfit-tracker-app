import avatar from './../../assets/icons/Avatar.svg';
import backArrow from './../../assets/icons/BackArrow.svg';
import classes from './EditProfile.module.css';
import { NavLink, Form } from 'react-router-dom';

export default function EditiProfilePage() {
  return (
    <>
      <header className={classes.editHeader}>
        <ul className={classes.back}>
          <li>
            <NavLink to="/">
              <img src={backArrow} alt="Sign for back" />
            </NavLink>
          </li>
        </ul>
        <h2>Edit Profile</h2>
      </header>

      <section className={classes.editFormSection}>
        <div className={classes.editProfileImg}>
          <img src={avatar} alt="Avatar" />
        </div>

        <Form className={classes.editForm}>
          <div className={classes.inputFields}>
            <label>Full Name</label>
            <input name="name" type="text" />
          </div>

          <div className={classes.inputFields}>
            <label>Email address</label>
            <input name="email" type="email" />
          </div>

          <div className={classes.inputFields}>
            <label>Password</label>
            <input name="password" type="text" />
          </div>

          <div className={classes.inputFields}>
            <label>Weight</label>
            <div className={classes.weightContainer}>
              <input name="weight" type="number" />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Height</label>
            <div className={classes.weightContainer}>
              <input name="height" type="number" />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Gender</label>
            <div className={classes.customSelect}>
              <select name="gender">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Age</label>
            <input name="weight" type="number" />
          </div>

          <button type="submit" className={classes.saveBtn}>
            Save
          </button>
        </Form>
      </section>
    </>
  );
}
