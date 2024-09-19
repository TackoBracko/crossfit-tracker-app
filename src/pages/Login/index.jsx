import { Form, Link } from 'react-router-dom';
import classes from './Login.module.css';

export default function LogInPage() {
  return (
    <div className={classes.loginContainer}>
      <div className={classes.formContainer}>
        <Form>
          <h3>
            Welcome back,
            <br />
            Sarah
          </h3>

          <div>
            <label className={classes.labelEmail}>Email</label>
            <input type="email" name="email" required />
          </div>

          <div>
            <label className={classes.labelPassword}>Password</label>
            <input type="password" name="password" required />
          </div>

          <div className={classes.buttonContainer}>
            <Link to="">Forgot Password</Link>
            <button type="submit">Login </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
