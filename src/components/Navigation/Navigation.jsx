import styles from './Navigation.module.css';
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
        {/* <div className={styles.mobileWrapper}>
          <div className={styles.container}>
            <div className={styles.header__nav}>
              <Link to="/">
                <svg width={129} height={28} className={styles.header__logo}>
                  <use href={`${Sprite}#logo-header`}></use>
                </svg>
              </Link>
              <div className={styles.menu__container}>
                <span className={styles.line}></span>
                <svg width={20} height={20}>
                  <use href={`${Sprite}#burger-menu`}></use>
                </svg>
              </div>
            </div>
          </div>
        </div> */}
        {''}
        {/* <div className={styles.desktopWrapper}>
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
        </div> */}

        {/* MenuMobileWrapper */}
        <div className={styles.mobileWrapper}>
          <div className={styles.container}>
            <div className={styles.header__nav}>
              <Link to="/">
                <svg width={129} height={28} className={styles.header__logo}>
                  <use href={`${Sprite}#logo-header`}></use>
                </svg>
              </Link>
              <div className={styles.menu__container}>
                <span className={styles.line}></span>
                <svg width={26} height={26}>
                  <use href={`${Sprite}#close`}></use>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* MenuDesktopWrapper */}
      </header>
      <div className={styles.menu}>
        <ul>
          <li className={styles.menu_item}>
            <NavLink
              to="/contacts"
              className={styles.menu__list_item_text}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>



      
    </>
  );
};

export default Navigation;
