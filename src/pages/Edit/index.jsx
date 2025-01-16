import { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/Context/UserContext';
import classes from './EditProfile.module.css';

import Button from '../../components/Button';
import InputField from '../../components/Input';
import ShowPassword from '../../components/Icons/ShowPasswordIcon';
import HidePassword from '../../components/Icons/HidePasswordIcon';
import LeftIcon from '../../components/Icons/LeftIcon';
//import BackBtn from '../../components/Icons/BackBtnIcon';
//import RightIcon from '../../components/Icons/RightIcon';

export default function EditiProfilePage() {
  const { user, handleUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [userEditData, setUserEditData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    weight: user.weight,
    height: user.height,
    gender: user.gender,
    age: user.age,
  });

  const [nameInitial, setNameInitial] = useState(userEditData.name.charAt(0));
  const [showPassword, setShowPassword] = useState(false);

  const handleGenderToggle = (gender) => {
    setUserEditData((prevData) => {
      return { ...prevData, gender };
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

  const handleOnBlur = (input) => {
    setError((prevData) => {
      return { ...prevData, [input]: false };
    });
  };

  const handleEditData = (e) => {
    const { name, value } = e.target;
    setUserEditData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const isNameEntered = userEditData.name.trim() !== '';
    const isPasswordEntered = userEditData.password.trim() !== '' && userEditData.password.length > 5;

    const isWeightEntered = userEditData.weight.trim() === '' || Number(userEditData.weight) >= 0;
    const isHeightEntered = userEditData.height.trim() === '' || Number(userEditData.height) >= 0;
    const isAgeEntered = userEditData.age.trim() === '' || Number(userEditData.age) >= 0;

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

    handleUserData(userEditData);
    setNameInitial(userEditData.name.charAt(0).toUpperCase());
    console.log(userEditData);
    navigate('/profile');
  };

  return (
    <>
      <header className={classes.editHeader}>
        <Link to="/profile">
          <Button variation="secondary" iconLeft={<LeftIcon />} />
        </Link>

        <h1>Edit Profile</h1>
      </header>

      <div className={classes.editProfileImg}>
        <p>{nameInitial}</p>
      </div>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit} noValidate>
          <div className={classes.inputDiv}>
            {/* {error.newName ? <p className={classes.errorText}>You did not enter any name </p> : null}*/}
            <InputField
              name="name"
              type="text"
              label="Full name"
              placeholder="Your name"
              value={userEditData.name}
              onChange={handleEditData}
              onBlur={() => handleOnBlur('newName')}
              error={error.newName ? 'You did not enter any name' : null}
            />
          </div>

          <div className={classes.inputDiv}>
            <InputField name="email" type="email" label="Email address" value={userEditData.email} disabled />
          </div>

          <div className={classes.inputDiv}>
            <div className={classes.unitContainer}>
              {/*{error.newPassword ? <p className={classes.errorText}>Password has to be longer than 6 caracters</p> : null}*/}
              <InputField
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Your password"
                onChange={handleEditData}
                value={userEditData.password}
                onBlur={() => handleOnBlur('newPassword')}
                error={error.newPassword ? 'Password has to be longer than 6 characters' : null}
              />
              <span className={`${classes.unit} ${classes.visibility}`} onClick={togglePasswordVisibility}>
                {showPassword ? <ShowPassword /> : <HidePassword />}
              </span>
              {/*<span className={`${classes.unit} ${classes.visibility}`}>
                {showPassword ? (
                  <img onClick={togglePasswordVisibility} src={showIcon} alt="Icon Show Password" className={classes.eyeIcon} />
                ) : (
                  <img onClick={togglePasswordVisibility} src={hideIcon} alt="Icon Hide Password" className={classes.eyeIcon} />
                )}
              </span>*/}
            </div>
          </div>

          <div className={classes.inputDiv}>
            <div className={classes.unitContainer}>
              {/*{error.newWeight ? <p className={classes.errorText}>Weight cannot be negative number </p> : null}*/}
              <InputField
                name="weight"
                type="number"
                label="Weight"
                placeholder="Your weight"
                onChange={handleEditData}
                value={userEditData.weight}
                onBlur={() => handleOnBlur('newWeight')}
                error={error.newWeight ? 'Weight cannot be negative number' : null}
              />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <div className={classes.unitContainer}>
              {/*{error.newHeight ? <p className={classes.errorText}>Height cannot be negative number </p> : null}*/}
              <InputField
                name="height"
                type="number"
                label="Height"
                placeholder="Your height"
                onChange={handleEditData}
                value={userEditData.height}
                onBlur={() => handleOnBlur('newHeight')}
                error={error.newHeight ? 'Height cannot be negative number' : null}
              />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={`${classes.inputDiv} ${classes.genderField}`}>
            <label>Gender: </label>
            <div className={classes.genderSelection}>
              <button
                type="button"
                className={`${classes.genderBtn} ${userEditData.gender === 'Male' ? classes.activeGender : ''}`}
                onClick={() => handleGenderToggle('Male')}
              >
                Male
              </button>
              <button
                type="button"
                className={`${classes.genderBtn} ${userEditData.gender === 'Female' ? classes.activeGender : ''}`}
                onClick={() => handleGenderToggle('Female')}
              >
                Female
              </button>
            </div>
          </div>

          <div className={classes.inputDiv}>
            {/*{error.newAge ? <p className={classes.errorText}>Age cannot be negative number </p> : null}*/}
            <InputField
              name="age"
              type="number"
              label="Age"
              placeholder="Your age"
              onChange={handleEditData}
              value={userEditData.age}
              onBlur={() => handleOnBlur('newAge')}
              error={error.newAge ? 'Age cannot be negative number' : null}
            />
          </div>

          <Button variation="primary" type="submit">
            Edit Profile
          </Button>
        </Form>
      </section>
    </>
  );
}
