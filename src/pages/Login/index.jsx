import { Form } from 'react-router-dom';
import classes from './Login.module.css';

export default function LogInPage() {
  return (
    <>
      <div className={classes.loginHeader}>
        <h3>
          Welcome back <span>Sarah</span>
        </h3>
      </div>

      <div className={classes.formSection}>
        <Form>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <div className={classes.buttonContainer}>
            <button type="submit">Login </button>
          </div>
        </Form>
      </div>
    </>
  );
}
