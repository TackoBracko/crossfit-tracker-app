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
            <input type="email" placeholder="Email" name="email" required />
          </div>

          <div>
            <input type="password" placeholder="Password" name="password" required />
          </div>

          <div>
            <button type="submit">Login </button>
          </div>
        </Form>
      </div>
    </>
  );
}
