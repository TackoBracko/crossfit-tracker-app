import { Form, redirect } from 'react-router-dom';
import classes from './Login.module.css';
import { useRef, useState } from 'react';

export default function LogInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email && !password) {
      console.log('Inputs are empty');
      setErrorMessage(true);

      return;
    }

    if (email.trim() === '' || !email.includes('@')) {
      console.log('Error with email');
      setEmailError(true);

      return;
    }

    if (password.trim() === '') {
      console.log('Error with password');
      setPasswordError(true);

      return;
    }

    console.log({ email, password });
    redirect('home');
  };

  return (
    <>
      <div className={classes.loginHeader}>
        <h3>
          Welcome back <span>Sarah</span>
        </h3>
      </div>

      <div className={classes.formSection}>
        {errorMessage ? <p className={classes.errorText}>You need to fulfill inputs for email and password, they are required</p> : null}
        <Form onSubmit={handleSubmit}>
          <div>
            {emailError ? <p className={classes.errorText}>Email is required</p> : null}
            <input ref={emailRef} type="email" placeholder="Email" name="email" />
          </div>

          <div>
            {passwordError ? <p className={classes.errorText}>Password is required</p> : null}
            <input ref={passwordRef} type="password" placeholder="Password" name="password" />
          </div>

          <div>
            <button type="submit">Login </button>
          </div>
        </Form>
      </div>
    </>
  );
}
