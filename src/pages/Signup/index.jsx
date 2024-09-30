import { Form, redirect } from 'react-router-dom';
import classes from '../Signup/Signup.module.css';
import { useRef, useState } from 'react';

export default function SignUpPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const isEmailValid = email.trim() !== '' || email.includes('@');
    const isPasswordValid = password.trim() !== '';
    const isConfirmPasswordValid = isPasswordValid === confirmPassword;

    if (!isEmailValid && !isPasswordValid && !isConfirmPasswordValid) {
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

    if (!isConfirmPasswordValid) {
      setConfirmPasswordError(true);

      return;
    }

    redirect('/');
  };

  return (
    <>
      <div className={classes.signupHeader}>
        <h3>Hello Rookies, </h3>
        <p>enter your informations below or login with other account</p>
      </div>

      <section className={classes.formSection}>
        {errorMessage ? <p className={classes.errorText}>You need to fulfill all inputs</p> : null}

        <Form onSubmit={handleSubmit}>
          <div>
            {emailError ? <p className={classes.errorText}>You have entered an invalid email address</p> : null}
            <input ref={emailRef} type="email" placeholder="Email" name="email" />
          </div>

          <div>
            {passwordError ? <p className={classes.errorText}>Password can not be empty</p> : null}
            <input ref={passwordRef} type="password" placeholder="Password" name="password" />
          </div>

          <div>
            {confirmPasswordError ? <p className={classes.errorText}>Passwords do not match</p> : null}
            <input ref={confirmPasswordRef} type="password" placeholder="Password again" name="password again" />
          </div>

          <div>
            <button type="submit">Sign up</button>
          </div>
        </Form>
      </section>
    </>
  );
}
