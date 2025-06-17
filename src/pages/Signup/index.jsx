import { useContext, useRef, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import classes from './Signup.module.css';

import Button from '../../components/Button';
import InputField from '../../components/Input';
import RightIcon from '../../components/Icons/RightIcon';

export default function Signup() {
  const { handleUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  //onBlur

  const handleOnBlur = (input) => {
    setError((prevData) => {
      return { ...prevData, [input]: false };
    });
  };

  const handleSignUpSubmit = (e) => {
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

    handleUserData({ email, password });
    navigate('/on-bording');
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
        <Form onSubmit={handleSignUpSubmit}>
          <div>
            {error.email ? <p className={classes.errorText}>You have entered an invalid email address</p> : null}
            <InputField ref={emailRef} type="email" placeholder="Email" name="email" onBlur={() => handleOnBlur('email')} />
          </div>

          <div>
            {error.password ? <p className={classes.errorText}>Password can not be empty</p> : null}
            <InputField ref={passwordRef} type="password" placeholder="Password" name="password" onBlur={() => handleOnBlur('password')} />
          </div>

          <div>
            {error.confirmPassword ? <p className={classes.errorText}>Passwords do not match</p> : null}
            <InputField
              ref={confirmPasswordRef}
              type="password"
              placeholder="Repeat Password"
              name="repeat password"
              onBlur={() => handleOnBlur('confirmPassword')}
            />
          </div>

          <Button variation="primary" iconRight={<RightIcon />} type="submit">
            Sign up
          </Button>
        </Form>
      </section>
    </>
  );
}
