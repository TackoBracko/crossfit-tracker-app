import { useState } from 'react';
import avatar from './../../assets/icons/Avatar.svg';
import backArrow from './../../assets/icons/BackArrow.svg';
import classes from './EditProfile.module.css';
import { NavLink, Form } from 'react-router-dom';

export default function EditiProfilePage() {
  const [userEditData, setUserEditData] = useState({
    name: 'Tatjana',
    email: '',
    password: '',
    weight: '',
    height: '',
    age: '',
  });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(userEditData);
  };

  const handleEditData = (e) => {
    const { name, value } = e.target;
    setUserEditData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

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

        <Form className={classes.editForm} onSubmit={handleEditSubmit}>
          <div className={classes.inputFields}>
            <label>Full Name</label>
            <input name="name" type="text" onChange={handleEditData} value={userEditData.name} />
          </div>

          <div className={classes.inputFields}>
            <label>Email address</label>
            <input name="email" type="email" onChange={handleEditData} value={userEditData.email} />
          </div>

          <div className={classes.inputFields}>
            <label>Password</label>
            <input name="password" type="text" onChange={handleEditData} value={userEditData.password} />
          </div>

          <div className={classes.inputFields}>
            <label>Weight</label>
            <div className={classes.weightContainer}>
              <input name="weight" type="number" onChange={handleEditData} value={userEditData.weight} />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Height</label>
            <div className={classes.weightContainer}>
              <input name="height" type="number" onChange={handleEditData} value={userEditData.height} />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Gender</label>
            <div className={classes.customSelect}>
              <select name="gender">
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Age</label>
            <input name="age" type="number" onChange={handleEditData} value={userEditData.age} />
          </div>

          <button type="submit" className={classes.saveBtn}>
            Save
          </button>
        </Form>
      </section>
    </>
  );
}
