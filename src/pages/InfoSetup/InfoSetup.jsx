import { useState } from 'react';

import classes from './InfoSetup.module.css';
import Button from '../../components/Button';
import RightIcon from '../../components/Icons/RightIcon';
import { useNavigate, Form } from 'react-router-dom';

export default function InfoSetup() {
  const [userInfoSetup, setUserInfoSetup] = useState({
    birthday: '',
    weight: '',
    height: '',
    gender: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSetupInfo = (e) => {
    const { name, value } = e.target;
    setUserInfoSetup((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleGenderToggle = (gender) => {
    setUserInfoSetup((prevData) => {
      return { ...prevData, gender };
    });
  };

  const handleSetupInfoSubmit = (e) => {
    e.preventDefault();

    if (!userInfoSetup.birthday || !userInfoSetup.weight || !userInfoSetup.height || !userInfoSetup.gender) {
      setError(true);
      return;
    }

    console.log(userInfoSetup);
    navigate('/');
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

          <div className={classes.infoSetupDiv}>
            <label>Birthday</label>
            <input name="birthday" type="date" value={userInfoSetup.birthday} onChange={handleSetupInfo} className={classes.customDate} />
          </div>

          <div className={classes.infoSetupDiv}>
            <label>Weight</label>
            <input
              name="weight"
              type="number"
              placeholder="Click here"
              value={userInfoSetup.weight}
              onChange={handleSetupInfo}
              className={classes.hiddenInput}
            />
            <span className={classes.unit}>kg</span>
          </div>

          <div className={classes.infoSetupDiv}>
            <label>Height</label>
            <input
              name="height"
              type="number"
              placeholder="Click here"
              value={userInfoSetup.height}
              onChange={handleSetupInfo}
              className={classes.hiddenInput}
            />
            <span className={classes.unit}>cm</span>
          </div>

          <div className={`${classes.infoSetupDiv} ${classes.genderField}`}>
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
