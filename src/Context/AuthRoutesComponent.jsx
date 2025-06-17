import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { isUserLogged } = useContext(AuthContext);
  if (!isUserLogged) {
    return <Navigate to="log-in" />;
  }

  return <Outlet />;
};

export const PublicRoutes = () => {
  const { isUserLogged } = useContext(AuthContext);
  if (isUserLogged) {
    return <Navigate to="profile" />;
  }

  return <Outlet />;
};
