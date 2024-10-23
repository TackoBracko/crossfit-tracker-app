import { useState } from 'react';
//import avatar from './../../assets/icons/Avatar.svg';
import backArrow from './../../assets/icons/BackArrow.svg';
import hideIcon from './../../assets/icons/Hide.svg';
import showIcon from './../../assets/icons/Show.svg';
import classes from './EditProfile.module.css';
import { NavLink, Form } from 'react-router-dom';

export default function EditiProfilePage() {
  const [userEditData, setUserEditData] = useState({
    name: 'Sarah',
    email: 'sarah145@mail.com',
    password: '123456',
    weight: '55',
    height: '170',
    gender: '',
    age: '21',
  });

  const [nameInitial, setNameInitial] = useState(userEditData.name.charAt(0));
  const [showPassword, setShowPassword] = useState(false);

  const handleEditData = (e) => {
    const { name, value } = e.target;
    setUserEditData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };

  const [error, setError] = useState({
    newName: false,
    newPassword: false,
  });

  const handleNameBlur = () => {
    setError((prevState) => {
      return { ...prevState, newName: false };
    });
  };

  const handlePasswordBlur = () => {
    setError((prevState) => {
      return { ...prevState, newPassword: false };
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const isNameEntered = userEditData.name.trim() !== '';
    const isPasswordEntered = userEditData.password.trim() !== '' && userEditData.password.length > 5;

    if (!isNameEntered || !isPasswordEntered) {
      if (!isNameEntered) {
        setError((prevState) => {
          return { ...prevState, newName: true };
        });
      }

      if (!isPasswordEntered) {
        setError((prevState) => {
          return { ...prevState, newPassword: true };
        });
      }

      return;
    }

    setNameInitial(userEditData.name.charAt(0).toUpperCase());
    console.log(userEditData);
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
        <p>{nameInitial}</p>
      </div>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit}>
          <div className={classes.inputFields}>
            <label>Full Name: </label>
            {error.newName ? <p className={classes.errorText}>You did not enter any name </p> : null}
            <input name="name" type="text" placeholder="Your name" onChange={handleEditData} value={userEditData.name} onBlur={handleNameBlur} />
          </div>

          <div className={classes.inputFields}>
            <label>Email address: </label>
            <input name="email" type="email" value={userEditData.email} disabled />
          </div>

          <div className={classes.inputFields}>
            <label>Password: </label>
            <div className={classes.unitContainer}>
              {error.newPassword ? <p className={classes.errorText}>Password has to be longer than 6 caracters</p> : null}
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
                onChange={handleEditData}
                value={userEditData.password}
                onBlur={handlePasswordBlur}
              />
              <span className={classes.unit}>
                {showPassword ? (
                  <img onClick={togglePasswordVisibility} src={showIcon} alt="Icon Show Password" />
                ) : (
                  <img onClick={togglePasswordVisibility} src={hideIcon} alt="Icon Hide Password" />
                )}
              </span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Weight: </label>
            <div className={classes.unitContainer}>
              <input name="weight" type="number" placeholder="Your weight" onChange={handleEditData} value={userEditData.weight} max={250} />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputFields}>
            <label>Height: </label>
            <div className={classes.unitContainer}>
              <input
                name="height"
                type="number"
                placeholder="Your height"
                onChange={handleEditData}
                value={userEditData.height}
                min={150}
                max={220}
              />
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
            <input name="age" type="number" placeholder="Your age" onChange={handleEditData} value={userEditData.age} min={7} max={77} />
          </div>

          <button type="submit" className={classes.saveBtn}>
            Edit Profile
          </button>
        </Form>
      </section>
    </>
  );
}
