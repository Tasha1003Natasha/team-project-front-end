import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

export const PublicRoute = () => {
  const isLogin = useSelector(getIsLoggedIn);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
