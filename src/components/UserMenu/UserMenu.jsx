import { useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { logOut } from '../../redux/auth/auth-operations';
import Sprite from '../../images/icons/icons.svg';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/auth-selector';
import { Link, NavLink } from 'react-router-dom';

const UserMenu = () => {
  const userName = useSelector(getCurrent);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();
  const dispatch = useDispatch();

  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className={styles.header}>
      <div className={styles.userMenuMobile}>
        <div className={styles.container}>
          <div className={styles.header__nav}>
            <Link to="/">
              <svg width={129} height={28}>
                <use href={`${Sprite}#logo-header`}></use>
              </svg>
            </Link>
            <div className={styles.menu__container}>
              <p className={styles.avatarName}>{avatarName || 'U'}</p>
              <p className={styles.userName}>
                {userName || 'User Name'}{' '}
                <span className={styles.userLine}></span>
              </p>
              <button
                className={styles.iconButton}
                type="button"
                onClick={handlelogOut}
              >
                {/* <span className={styles.line}></span> */}
                <svg className={styles.logoutIcon} width={16} height={16}>
                  <use href={`${Sprite}#sign-out`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userMenuDesktop}>
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
                  <NavLink className={styles.menu__container_list_item_text}>
                    Home
                  </NavLink>
                </li>
                <li className={styles.menu__container_list_item}>
                  <NavLink className={styles.menu__container_list_item_text}>
                    Materials
                  </NavLink>
                </li>
                <li className={styles.menu__container_list_item}>
                  <NavLink className={styles.menu__container_list_item_text}>
                    Contacts
                  </NavLink>
                </li>
              </ul>
              <p className={styles.avatarName}>{avatarName || 'U'}</p>
              <p className={styles.userName}>
                {userName || 'User Name'}{' '}
                <span className={styles.userLine}></span>
              </p>
              <button
                className={styles.iconButton}
                type="button"
                onClick={handlelogOut}
              >
                <span className={styles.line}></span>
                <svg className={styles.logoutIcon} width={16} height={16}>
                  <use href={`${Sprite}#sign-out`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserMenu;
