import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/Login';
import SignUpPage from './pages/Signup';
import EditiProfilePage from './pages/Edit';

const isUserLogged = true;

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
  {
    path: 'profile',
    loader: protectedRoutesLoader,
    element: <ProfilePage />,
  },
  {
    path: 'edit',
    loader: protectedRoutesLoader,
    element: <EditiProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
