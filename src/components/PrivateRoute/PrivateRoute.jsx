import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken, getIsLoggedIn } from 'redux/auth/auth-selector';
import { Loader } from 'components/Loader/Loader';

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const token = useSelector(getToken);
  const isLogin = useSelector(getIsLoggedIn);

  if (token && !isLogin) {
    return <Loader />;
  }
  return token ? children : <Navigate to="/auth" state={{ pathname }} />;
};
