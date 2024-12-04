import { Form, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { useContext, useRef, useState } from 'react';

import Button from '../../components/Button';
import InputField from '../../components/Input';
import RightIcon from '../../components/Icons/RightIcon';
import { AuthContext } from '../../components/AuthContext';

export default function LogInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailBlur = () => {
    setEmailError(false);
  };

  const handlePasswordBlur = () => {
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isEmailValid = email.trim() !== '' || email.includes('@');
    const isPasswordValid = password.trim() !== '';

    if (!isEmailValid && !isPasswordValid) {
      setErrorMessage(true);

      return;
    }

    if (!isEmailValid) {
      setEmailError(true);

      return;
    }

    if (!isPasswordValid) {
      setPasswordError(true);

      return;
    }

    login();
    navigate('/');
  };

  return (
    <>
      <div className={classes.loginHeader}>
        <h3>
          Welcome back, <span>Sarah</span>
        </h3>
      </div>

      <section className={classes.formSection}>
        {errorMessage ? <p className={classes.errorText}>You need to fulfill inputs for email and password</p> : null}
        <Form onSubmit={handleSubmit}>
          <div>
            {emailError ? <p className={classes.errorText}>Email is required</p> : null}
            <InputField ref={emailRef} type="email" placeholder="Email" name="email" onBlur={handleEmailBlur} />
          </div>

          <div>
            {passwordError ? <p className={classes.errorText}>Password is required</p> : null}
            <InputField ref={passwordRef} type="password" placeholder="Password" name="password" onBlur={handlePasswordBlur} />
          </div>

          <Button variation="primary" iconRight={<RightIcon />} type="submit">
            Login
          </Button>
        </Form>
      </section>
    </>
  );
}
