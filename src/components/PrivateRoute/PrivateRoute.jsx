import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

export const PrivateRoute = () => {
  const isLogin = useSelector(getIsLoggedIn);
  if (!isLogin) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};
