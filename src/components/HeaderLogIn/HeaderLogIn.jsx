import Sprite from '../../images/icons/icons.svg';
import styles from './HeaderLogIn.module.css';
import { Link, NavLink } from 'react-router-dom';
// import {ReactComponent as LogOut} from '../../images/icons/sign-out.svg';
// import { MdLogout } from 'react-icons/md';
import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import MenuOpenLogIn from '../MenuOpen/MenuOpenLogIn';
import { getUser } from '../../redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Toggle from 'components/Theme/Toggle';
// import { useEffect } from 'react';

const HeaderLogIn = () => {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(logOut());
    document.body.classList.remove('noscroll');
  };

  const userName = useSelector(getUser);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();

  const [openMenu, setOpenMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const openModal = () => {
    setOpenMenu(true);
    setShowHeader(false);
    document.body.classList.add('noscroll');
  };

  const theme = useSelector(state => state.theme);
  // console.log(theme);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   document.documentElement.dataset.theme = theme;
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  return (
    <>
      {openMenu && (
        <MenuOpenLogIn
          setOpenMenu={setOpenMenu}
          setShowHeader={setShowHeader}
          handlerLogOut={handlerLogOut}
        />
      )}
      {showHeader && (
        <header className={styles.header}>
          <div className={styles.mobileWrapper}>
            <div className={styles.header__nav}>
              {theme !== 'dark' ? (
                <Link to="/">
                  <svg width={129} height={28}>
                    <use href={`${Sprite}#logo-header`}></use>
                  </svg>
                </Link>
              ) : (
                <Link to="/">
                  <svg width={129} height={28}>
                    <use href={`${Sprite}#logo-header-dark`}></use>
                  </svg>
                </Link>
              )}

              <Toggle />
              <div className={styles.menu__container}>
                <p className={styles.avatarName}>{avatarName || 'U'}</p>
                <span className={styles.userLine}></span>
                <button
                  className={styles.iconButton}
                  type="button"
                  onClick={openModal}
                >
                  <svg className={styles.logoutIcon} width={20} height={20}>
                    <use href={`${Sprite}#burger-menu`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.desktopWrapper}>
            <div className={styles.container}>
              <div className={styles.header__nav}>
                {theme !== 'dark' ? (
                  <Link to="/">
                    <svg width={129} height={28}>
                      <use href={`${Sprite}#logo-header`}></use>
                    </svg>
                  </Link>
                ) : (
                  <Link to="/">
                    <svg width={129} height={28}>
                      <use href={`${Sprite}#logo-header-dark`}></use>
                    </svg>
                  </Link>
                )}

                <Toggle />
                <div className={styles.menu__container}>
                  <ul className={styles.menu__container_list}>
                    <li className={styles.list_item_text}>
                      <NavLink
                        to="/"
                        className={`${
                          pathname === '/'
                            ? styles.list_item_current
                            : styles.list_item_text
                        }`}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className={styles.list_item_text}>
                      <NavLink
                        to="/useful-info"
                        className={({ isActive }) =>
                          isActive
                            ? styles.list_item_current
                            : styles.list_item_text
                        }
                      >
                        Materials
                      </NavLink>
                    </li>
                    <li className={styles.list_item_text}>
                      <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                          isActive
                            ? styles.list_item_current
                            : styles.list_item_text
                        }
                      >
                        Contacts
                      </NavLink>
                    </li>
                  </ul>
                  <div className={styles.containerAvatar}>
                    <p className={styles.avatarName}>{avatarName || 'U'}</p>

                    <p className={styles.userName}>{userName || 'User Name'}</p>
                  </div>

                  <span className={styles.userLine}></span>

                  <button
                    className={styles.iconButton}
                    type="button"
                    onClick={handlerLogOut}
                  >
                    <svg className={styles.logoutIcon} width={16} height={16}>
                      <use href={`${Sprite}#sign-out`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderLogIn;
