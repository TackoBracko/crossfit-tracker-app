import { useState } from 'react';
import avatar from './../../assets/icons/Avatar.svg';
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
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
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
        <img src={avatar} alt="Avatar" />
      </div>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit}>
          <div className={classes.inputFields}>
            <label>Full Name: </label>
            {isEditing ? <input name="name" type="text" onChange={handleEditData} value={userEditData.name} /> : <span> {userEditData.name}</span>}
          </div>

          <div className={classes.inputFields}>
            <label>Email address: </label>
            {isEditing ? (
              <input name="email" type="email" onChange={handleEditData} value={userEditData.email} />
            ) : (
              <span> {userEditData.email}</span>
            )}
          </div>

          <div className={classes.inputFields}>
            <label>Password: </label>
            {isEditing ? (
              <input name="password" type="text" onChange={handleEditData} value={userEditData.password} />
            ) : (
              <span> {userEditData.password}</span>
            )}
          </div>

          <div className={classes.inputFields}>
            <label>Weight: </label>
            {isEditing ? (
              <div className={classes.unitContainer}>
                <input name="weight" type="number" onChange={handleEditData} value={userEditData.weight} />
                <span className={classes.unit}>kg</span>
              </div>
            ) : (
              <span> {userEditData.weight} kg</span>
            )}
          </div>

          <div className={classes.inputFields}>
            <label>Height: </label>
            {isEditing ? (
              <div className={classes.unitContainer}>
                <input name="height" type="number" onChange={handleEditData} value={userEditData.height} />
                <span className={classes.unit}>cm</span>
              </div>
            ) : (
              <span> {userEditData.height} cm</span>
            )}
          </div>

          <div className={classes.inputFields}>
            <label>Gender: </label>
            {isEditing ? (
              <div className={classes.genderSelect}>
                <select name="gender" value={userEditData.gender} onChange={handleEditData}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            ) : (
              <span> {userEditData.gender}</span>
            )}
          </div>

          <div className={classes.inputFields}>
            <label>Age: </label>
            {isEditing ? (
              <input name="age" type="number" onChange={handleEditData} value={userEditData.age} />
            ) : (
              <span> {userEditData.age} years</span>
            )}
          </div>

          <button type="submit" className={classes.saveBtn}>
            {isEditing ? 'Save profile' : 'Edit profile'}
          </button>
        </Form>
      </section>
    </>
  );
}
