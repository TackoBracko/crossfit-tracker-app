import { useState } from 'react';
//import avatar from './../../assets/icons/Avatar.svg';
import backArrow from './../../assets/icons/BackArrow.svg';
import hideIcon from './../../assets/icons/Hide.svg';
import showIcon from './../../assets/icons/Show.svg';
import classes from './EditProfile.module.css';
import { Form } from 'react-router-dom';

import Button from '../../components/Button';
import InputField from '../../components/Input';

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

  // eye icon
  const togglePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };

  // error
  const [error, setError] = useState({
    newName: false,
    newPassword: false,
    newWeight: false,
    newHeight: false,
    newAge: false,
  });

  //onBlur
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

  const handleWeightBlur = () => {
    setError((prevState) => {
      return { ...prevState, newWeight: false };
    });
  };

  const handleHeightBlur = () => {
    setError((prevState) => {
      return { ...prevState, newHeight: false };
    });
  };

  const handleAgeBlur = () => {
    setError((prevState) => {
      return { ...prevState, newAge: false };
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const isNameEntered = userEditData.name.trim() !== '';
    const isPasswordEntered = userEditData.password.trim() !== '' && userEditData.password.length > 5;

    const isWeightEntered = userEditData.weight.trim() !== '' && userEditData.weight > 0;
    const isHeightEntered = userEditData.height.trim() !== '' && userEditData.height > 0;
    const isAgeEntered = userEditData.age.trim() !== '' && userEditData.age > 0;

    if (!isNameEntered || !isPasswordEntered || !isWeightEntered || !isHeightEntered || !isAgeEntered) {
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

      if (!isWeightEntered) {
        setError((prevState) => {
          return { ...prevState, newWeight: true };
        });
      }

      if (!isHeightEntered) {
        setError((prevState) => {
          return { ...prevState, newHeight: true };
        });
      }

      if (!isAgeEntered) {
        setError((prevState) => {
          return { ...prevState, newAge: true };
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
        <Button variation="secondary">
          <img src={backArrow} alt="Sign for back" className={classes.backBtn} />
        </Button>

        <h1>Edit Profile</h1>
      </header>

      <div className={classes.editProfileImg}>
        {/*<img src={avatar} alt="Avatar" />*/}
        <p>{nameInitial}</p>
      </div>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit} noValidate>
          <div className={classes.inputDiv}>
            <label>Full Name: </label>
            {error.newName ? <p className={classes.errorText}>You did not enter any name </p> : null}
            <InputField name="name" type="text" placeholder="Your name" value={userEditData.name} onChange={handleEditData} onBlur={handleNameBlur} />
          </div>

          <div className={classes.inputDiv}>
            <label>Email address: </label>
            <InputField name="email" type="email" value={userEditData.email} disabled />
          </div>

          <div className={classes.inputDiv}>
            <label>Password: </label>
            <div className={classes.unitContainer}>
              {error.newPassword ? <p className={classes.errorText}>Password has to be longer than 6 caracters</p> : null}
              <InputField
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
                onChange={handleEditData}
                value={userEditData.password}
                onBlur={handlePasswordBlur}
              />
              <span className={`${classes.unit} ${classes.visibility}`}>
                {showPassword ? (
                  <img onClick={togglePasswordVisibility} src={showIcon} alt="Icon Show Password" className={classes.eyeIcon} />
                ) : (
                  <img onClick={togglePasswordVisibility} src={hideIcon} alt="Icon Hide Password" className={classes.eyeIcon} />
                )}
              </span>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <label>Weight: </label>
            <div className={classes.unitContainer}>
              {error.newWeight ? <p className={classes.errorText}>Weight must be positive number </p> : null}
              <InputField
                name="weight"
                type="number"
                placeholder="Your weight"
                onChange={handleEditData}
                value={userEditData.weight}
                onBlur={handleWeightBlur}
              />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <label>Height: </label>
            <div className={classes.unitContainer}>
              {error.newHeight ? <p className={classes.errorText}>Height must be positive number </p> : null}
              <InputField
                name="height"
                type="number"
                placeholder="Your height"
                onChange={handleEditData}
                value={userEditData.height}
                onBlur={handleHeightBlur}
              />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <label>Gender: </label>
            <div className={classes.genderSelect}>
              <select name="gender" value={userEditData.gender} onChange={handleEditData}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <label>Age: </label>
            {error.newAge ? <p className={classes.errorText}>Age must be positive number </p> : null}
            <InputField name="age" type="number" placeholder="Your age" onChange={handleEditData} value={userEditData.age} onBlur={handleAgeBlur} />
          </div>

          <Button variation="primary" type="submit" className={classes.saveBtn}>
            Edit Profile
          </Button>
        </Form>
      </section>
    </>
  );
}
