import { Form } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <>
      <div>
        <Form className="login_form">
          <h3>Create account</h3>
          <p>Enter your information to create an account</p>

          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name..." required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter your email..." required />
          </div>

          <div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" placeholder="Enter your password..." required />
            </div>

            <div>
              <label>Confirm You Password:</label>
              <input type="password" name="password" placeholder="Confirm your password..." required />
            </div>
          </div>

          <div>
            <button type="submit">Signup</button>
          </div>
        </Form>
      </div>
    </>
  );
}
