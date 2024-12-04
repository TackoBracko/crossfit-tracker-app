import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { isUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isUserLogged) {
    return navigate('/login');
  }

  return <Outlet />;
};

export const PublicRoutes = () => {
  const { isUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isUserLogged) {
    return navigate('/profile');
  }

  return <Outlet />;
};
