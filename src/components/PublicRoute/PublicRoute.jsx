import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selector';
export const PublicRoute = ({ children }) => {
  const { state } = useLocation();
  const token = useSelector(getToken);
  return token ? (
    <Navigate to={state?.pathname ? state.pathname : '/'} />
  ) : (
    children
  );
};
