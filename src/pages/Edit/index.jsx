import { useState } from 'react';
//import avatar from './../../assets/icons/Avatar.svg';
import backArrow from './../../assets/icons/BackArrow.svg';
import classes from './EditProfile.module.css';
import { NavLink, Form } from 'react-router-dom';

export default function EditiProfilePage() {
  const [userEditData, setUserEditData] = useState({
    name: 'Sarah',
    email: 'sarah145@mail.com',
    password: '123456',
    weight: '55',
    height: '170',
    gender: 'Female',
    age: '21',
  });

  const nameInitial = userEditData.name.charAt(0);

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
        <NavLink to="/profile">
          <img src={backArrow} alt="Sign for back" className={classes.backBtn} />
        </NavLink>

        <h1>Edit Profile</h1>
      </header>

      <div className={classes.editProfileImg}>
        {/*<img src={avatar} alt="Avatar" />*/}
        <span>{nameInitial}</span>
      </div>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit}>
          <div className={classes.inputFields}>
            <label>Full Name: </label>
            <input name="name" type="text" onChange={handleEditData} value={userEditData.name} />
          </div>

          <div className={classes.inputFields}>
            <label>Email address: </label>
            <input name="email" type="email" onChange={handleEditData} value={userEditData.email} />
          </div>

          <div className={classes.inputFields}>
            <label>Password: </label>
            <input name="password" type="text" onChange={handleEditData} value={userEditData.password} />
          </div>

          <div className={classes.inputFields}>
            <label>Weight: </label>
            <div className={classes.unitContainer}>
              <input name="weight" type="number" onChange={handleEditData} value={userEditData.weight} />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Height: </label>
            <div className={classes.unitContainer}>
              <input name="height" type="number" onChange={handleEditData} value={userEditData.height} />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Gender: </label>
            <div className={classes.genderSelect}>
              <select name="gender" value={userEditData.gender} onChange={handleEditData}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Age: </label>
            <input name="age" type="number" onChange={handleEditData} value={userEditData.age} />
          </div>

          <button type="submit" className={classes.saveBtn}>
            Edit Profile
          </button>
        </Form>
      </section>
    </>
  );
}
