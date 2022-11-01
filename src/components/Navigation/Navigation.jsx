import styles from './Navigation.module.css';
// import logo from '../../images/icons/icons.svg';
// import logo_sign_out from '../../images/icons/icons.svg';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import UserMenu from 'components/UserMenu/UserMenu';
import Sprite from '../../images/icons/icons.svg';

const Navigation = () => {
  const isLogin = useSelector(getIsLoggedIn);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__nav}>
            <Link to="/">
              <svg width={129} height={28} className={styles.header__logo}>
                <use href={`${Sprite}#logo-header`}></use>
              </svg>
            </Link>
            <div className={styles.menu__container}>
              <ul className={styles.menu__container_list}>
                <li className={styles.menu__container_list_item}>
                  <NavLink
                    to="/contacts"
                    className={styles.menu__container_list_item_text}
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {isLogin && <UserMenu />}
        </div>
      </header>
    </>
  );
};

export default Navigation;
