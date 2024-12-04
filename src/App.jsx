import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LogInPage from './pages/Login';
import SignUpPage from './pages/Signup';
import EditProfilePage from './pages/Edit';
import InfoSetup from './pages/InfoSetup';
import { UserDataContextProvider } from './components/Context';
import { AuthProvider } from './components/AuthContext';
import { ProtectedRoutes, PublicRoutes } from './components/RoutesComponent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} /*loader={() => {return isUserLogged;}}*/>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="infosetup" element={<InfoSetup />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="edit" element={<EditProfilePage />} />
      </Route>
    </>,
  ),
);

function App() {
  return (
    <AuthProvider>
      <UserDataContextProvider>
        <RouterProvider router={router} />;
      </UserDataContextProvider>
    </AuthProvider>
  );
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
