import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';
import ProtectedRoutes from './components/utils/ProtectedRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'logInPage',
        element: <LogInPage />,
      },
      {
        path: '',
        element: <ProtectedRoutes />,
        children: [
          {
            path: 'homepage',
            element: <HomePage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: 'signUpPage',
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
