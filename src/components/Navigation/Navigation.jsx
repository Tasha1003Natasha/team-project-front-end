// import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
// import UserMenu from 'components/UserMenu/UserMenu';
// import Sprite from '../../images/icons/icons.svg';

import HeaderLogOut from '../HeaderLogOut/HeaderLogOut';
import HeaderLogIn from '../HeaderLogIn/HeaderLogIn';
// import MenuOpen from '../MenuOpen/MenuOpenLogOut';

const Navigation = () => {
  const isLogin = useSelector(getIsLoggedIn);

  return <>{isLogin ? <HeaderLogIn /> : <HeaderLogOut />}</>;
};

export default Navigation;
