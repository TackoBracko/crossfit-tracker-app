import { Form } from 'react-router-dom';

export default function LogInPage() {
  return (
    <>
      <div>
        <Form className="login_form">
          <h3>Login</h3>
          <p>Enter your information to log into an account</p>

          <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter your email..." required />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter your password..." required />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
}
