import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout/Index';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';

const isUserLogged = false;

const protectedRoutesLoader = () => {
  if (!isUserLogged) {
    return redirect('/login');
  } else {
    return null;
  }
};

const publicRoutesLoader = () => {
  if (isUserLogged) {
    return redirect('/');
  } else {
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: protectedRoutesLoader,
        element: <HomePage />,
      },
      {
        path: 'profile',
        loader: protectedRoutesLoader,
        element: <ProfilePage />,
      },
      {
        path: 'login',
        element: <LogInPage />,
        loader: publicRoutesLoader,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
        loader: publicRoutesLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
