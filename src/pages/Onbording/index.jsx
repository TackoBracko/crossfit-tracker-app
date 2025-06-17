import { useContext, useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { AuthContext } from '../../Context/AuthContext';

import classes from './Onbording.module.css';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import RightIcon from '../../components/Icons/RightIcon';

export default function Onbording() {
  const { user, handleUserData } = useContext(UserContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfoSetup, setUserInfoSetup] = useState({
    birthday: user.birthday,
    weight: user.weight,
    height: user.height,
    gender: user.gender,
  });

  const [error, setError] = useState(false);

  const handleGenderToggle = (gender) => {
    setUserInfoSetup((prevData) => {
      return { ...prevData, gender };
    });
  };

  const handleSetupInfo = (e) => {
    const { name, value } = e.target;
    setUserInfoSetup((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSetupInfoSubmit = (e) => {
    e.preventDefault();

    if (!userInfoSetup.birthday || !userInfoSetup.weight || !userInfoSetup.height || !userInfoSetup.gender) {
      setError(true);
      return;
    }

    handleUserData(userInfoSetup);
    console.log(userInfoSetup);
    login();
    navigate('/profile');
  };

  return (
    <>
      <header className={classes.infoSetupHeader}>
        <h1>Personal Details</h1>
        <h3>Tell us about yourself</h3>
        <p>Let us know about you to speed up the result.</p>
      </header>

      <section className={classes.infoSetupSection}>
        <Form onSubmit={handleSetupInfoSubmit} noValidate>
          {error ? <p className={classes.errorText}>Please fill out all fields </p> : null}

          <div className={classes.inputDiv}>
            <InputField label="Birthday" name="birthday" type="date" value={userInfoSetup.birthday} onChange={handleSetupInfo} />
          </div>

          <div className={classes.inputDiv}>
            <div className={classes.unitContainer}>
              <InputField label="Weight" name="weight" type="number" value={userInfoSetup.weight} onChange={handleSetupInfo} />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.inputDiv}>
            <div className={classes.unitContainer}>
              <InputField label="Height" name="height" type="number" value={userInfoSetup.height} onChange={handleSetupInfo} />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={`${classes.inputDiv} ${classes.genderField}`}>
            <label>Gender </label>
            <div className={classes.genderSelection}>
              <button
                type="button"
                className={`${classes.genderBtn} ${userInfoSetup.gender === 'Male' ? classes.activeGender : ''}`}
                onClick={() => handleGenderToggle('Male')}
              >
                Male
              </button>
              <button
                type="button"
                className={`${classes.genderBtn} ${userInfoSetup.gender === 'Female' ? classes.activeGender : ''}`}
                onClick={() => handleGenderToggle('Female')}
              >
                Female
              </button>
            </div>
          </div>

          <Button variation="primary" iconRight={<RightIcon />} type="submit">
            Start
          </Button>
        </Form>
      </section>
    </>
  );
}
