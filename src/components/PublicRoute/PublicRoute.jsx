import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken, getIsLoggedIn } from 'redux/auth/auth-selector';
import { Loader } from 'components/Loader/Loader';

export const PublicRoute = ({ children }) => {
  const { state } = useLocation();
  const token = useSelector(getToken);
  const isLogin = useSelector(getIsLoggedIn);
  if (token && !isLogin) {
    return <Loader />;
  }
  return token ? (
    children
  ) : (
    <Navigate to={state?.pathname ? state.pathname : '/'} />
  );
};
