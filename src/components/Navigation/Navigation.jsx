import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import HeaderLogOut from '../HeaderLogOut/HeaderLogOut';
import HeaderLogIn from '../HeaderLogIn/HeaderLogIn';

const Navigation = () => {
  const isLogin = useSelector(getIsLoggedIn);

  return <>{isLogin ? <HeaderLogIn /> : <HeaderLogOut />}</>;
};

export default Navigation;
