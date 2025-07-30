import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Onbording from './pages/Onbording';
import Home from './pages/User/Home';
import Profile from './pages/User/Profile';
import EditProfile from './pages/User/Edit';
import MealPlans from './pages/MealPlans';
import Category from './pages/Categories/Category';
import ExercisesList from './pages/Categories/Category/ExercisesList';
import Exercise from './pages/Categories/Category/ExercisesList/Exercise';
import SubExercise from './pages/Categories/Category/ExercisesList/Exercise/SubExercise';
import Calendar from './pages/Calendar';
import WorkoutDetails from './pages/Workout/Details';
import Timer from './pages/Workout/Timer';
import { UserDataContextProvider } from './Context/UserContext';
import { AuthProvider } from './Context/AuthContext';
import { ProtectedRoutes, PublicRoutes } from './Context/AuthRoutesComponent';
import { WorkoutDetailsProvider } from './Context/WorkoutDetailsContext';
import { TimerProvider } from './Context/TimerContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} /*loader={() => {return isUserLogged;}}*/>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
          <Route path="meals" element={<MealPlans />} />
          <Route path="/workouts/:id" element={<WorkoutDetails />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="on-bording" element={<Onbording />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/category/:categoryId" element={<ExercisesList />} />
        <Route path="/category/:categoryId/exercises/:exerciseId" element={<Exercise />} />
        <Route path="/category/:categoryId/exercises/:exerciseId/:subexerciseId" element={<SubExercise />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="timer" element={<Timer />} />
      </Route>
    </>,
  ),
);

function App() {
  return (
    <AuthProvider>
      <UserDataContextProvider>
        <WorkoutDetailsProvider>
          <TimerProvider>
            <RouterProvider router={router} />
          </TimerProvider>
        </WorkoutDetailsProvider>
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
