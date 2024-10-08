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
            <label>Phone</label>
            <input name="phone" type="number" />
          </div>

          <div className={classes.inputFields}>
            <label>Email address</label>
            <input name="email" type="email" />
          </div>

          <button type="submit" className={classes.saveBtn}>
            Save
          </button>
        </Form>
      </section>
    </>
  );
}
