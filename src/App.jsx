import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/Login';
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
    id: 'root',
    element: <RootLayout />,
    loader: () => {
      return isUserLogged;
    },
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
        loader: publicRoutesLoader,
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
