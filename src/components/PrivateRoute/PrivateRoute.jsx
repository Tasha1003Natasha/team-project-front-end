import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selector';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);
  console.log(token);
  return token ? children : <Navigate to="/" />;
};
