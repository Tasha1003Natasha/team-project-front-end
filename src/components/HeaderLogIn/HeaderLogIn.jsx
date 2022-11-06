import Sprite from '../../images/icons/icons.svg';
import styles from './HeaderLogIn.module.css';
import { Link, NavLink } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import MenuOpenLogIn from '../MenuOpen/MenuOpenLogIn';
// import { getUser } from '../../redux/auth/auth-selector';

const HeaderLogIn = () => {
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(logOut());
    document.body.classList.remove('noscroll');
  };

  // const userName = useSelector(getUser);
  // const avatarName = userName?.slice(0, 1).toLocaleUpperCase();

  const [openMenu, setOpenMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const openModal = () => {
    setOpenMenu(true);
    setShowHeader(false);
    document.body.classList.add('noscroll');
  };

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
            <div className={styles.container}>
              <div className={styles.header__nav}>
                <Link to="/">
                  <svg width={129} height={28}>
                    <use href={`${Sprite}#logo-header`}></use>
                  </svg>
                </Link>
                <div className={styles.menu__container}>
                  {/* <p className={styles.iconAvatar}>{avatarName || 'U'}</p> */}
                  <button
                    className={styles.iconButton}
                    type="button"
                    onClick={openModal}
                  >
                    <svg className={styles.logoutIcon} width={16} height={16}>
                      <use href={`${Sprite}#burger-menu`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.desktopWrapper}>
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
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.list_item_text} ${styles.list_item_current}`
                            : `${styles.list_item_text}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className={styles.menu__container_list_item}>
                      <NavLink
                        to="/useful-info"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.list_item_text} ${styles.list_item_current}`
                            : `${styles.list_item_text}`
                        }
                      >
                        Materials
                      </NavLink>
                    </li>
                    <li className={styles.menu__container_list_item}>
                      <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.list_item_text} ${styles.list_item_current}`
                            : `${styles.list_item_text}`
                        }
                      >
                        Contacts
                      </NavLink>
                    </li>
                  </ul>
                  <div className={styles.textAvatar}>
                    {/* <p className={styles.iconAvatar}>{avatarName || 'U'}</p> */}
                    <p className={styles.avatarName}>
                      {/* {userName || 'User Name'} */}
                    </p>
                  </div>

                  <button
                    className={styles.iconButton}
                    type="button"
                    onClick={handlerLogOut}
                  >
                    <MdLogout className={styles.logoutIcon} />
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
