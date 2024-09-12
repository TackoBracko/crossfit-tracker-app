import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const isLoggin = false;

  if (isLoggin) {
    return <Outlet />;
  } else {
    return <Navigate to="logInPage" />;
  }
}
