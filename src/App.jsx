import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/Login';
import SignUpPage from './pages/Signup';
import EditProfilePage from './pages/Edit';

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        loader={() => {
          return isUserLogged;
        }}
      >
        <Route index element={<HomePage />} loader={protectedRoutesLoader} />
        <Route path="login" element={<LogInPage />} loader={publicRoutesLoader} />
        <Route path="signup" element={<SignUpPage />} loader={publicRoutesLoader} />
      </Route>
      ,
      <Route path="profile" element={<ProfilePage />} loader={protectedRoutesLoader} />
      <Route path="edit" element={<EditProfilePage />} loader={protectedRoutesLoader} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/Login';
import SignUpPage from './pages/Signup';
import EditiProfilePage from './pages/Edit';

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

export default App;*/
