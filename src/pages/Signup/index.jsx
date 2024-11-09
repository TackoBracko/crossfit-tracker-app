import { Form, redirect } from 'react-router-dom';
import classes from '../Signup/Signup.module.css';
import { useRef, useState } from 'react';

import Button from '../../components/Button';
import InputField from '../../components/Input';

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
            <InputField ref={emailRef} type="email" placeholder="Email" name="email" onBlur={handleEmailBlur} />
          </div>

          <div>
            {error.password ? <p className={classes.errorText}>Password can not be empty</p> : null}
            <InputField ref={passwordRef} type="password" placeholder="Password" name="password" onBlur={handlePasswordBlur} />
          </div>

          <div>
            {error.confirmPassword ? <p className={classes.errorText}>Passwords do not match</p> : null}
            <InputField
              ref={confirmPasswordRef}
              type="password"
              placeholder="Repeat Password"
              name="repeat password"
              onBlur={handleConfirmPasswordBlur}
            />
          </div>

          <Button variation="primary" iconRight=">" type="submit">
            Sign up
          </Button>
        </Form>
      </section>
    </>
  );
}
