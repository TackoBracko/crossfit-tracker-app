import { Form, redirect } from 'react-router-dom';
import classes from '../Signup/Signup.module.css';
import { useRef, useState } from 'react';

export default function SignUpPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleEmailBlur = () => {
    setError((prevState) => {
      return { ...prevState, email: false };
    });
  };

  const handlePasswordBlur = () => {
    setError((prevState) => {
      return { ...prevState, password: false, confirmPassword: false };
    });
  };

  const handleConfirmPasswordBlur = () => {
    setError((prevState) => {
      return { ...prevState, confirmPassword: false };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const isEmailValid = email.trim() !== '' || email.includes('@');
    const isPasswordValid = password.trim() !== '';
    const isConfirmPasswordValid = password === confirmPassword;

    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      if (!isEmailValid) {
        setError((prevState) => {
          return { ...prevState, email: true };
        });
      }

      if (!isPasswordValid) {
        setError((prevState) => {
          return { ...prevState, password: true };
        });
      }

      if (!isConfirmPasswordValid) {
        setError((prevState) => {
          return { ...prevState, confirmPassword: true };
        });
      }

      return;
    }

    redirect('/');
  };

  return (
    <>
      <div className={classes.signupHeader}>
        <h3>
          Hello <span>Rookies</span>,
        </h3>
        <p>Enter your informations below or login with other account</p>
      </div>

      <section className={classes.formSection}>
        <Form onSubmit={handleSubmit}>
          <div>
            {error.email ? <p className={classes.errorText}>You have entered an invalid email address</p> : null}
            <input ref={emailRef} type="email" placeholder="Email" name="email" onBlur={handleEmailBlur} />
          </div>

          <div>
            {error.password ? <p className={classes.errorText}>Password can not be empty</p> : null}
            <input ref={passwordRef} type="password" placeholder="Password" name="password" onBlur={handlePasswordBlur} />
          </div>

          <div>
            {error.confirmPassword ? <p className={classes.errorText}>Passwords do not match</p> : null}
            <input ref={confirmPasswordRef} type="password" placeholder="Password again" name="password again" onBlur={handleConfirmPasswordBlur} />
          </div>

          <div>
            <button type="submit">Sign up</button>
          </div>
        </Form>
      </section>
    </>
  );
}
