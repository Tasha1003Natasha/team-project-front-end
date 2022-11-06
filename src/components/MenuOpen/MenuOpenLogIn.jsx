import Sprite from '../../images/icons/icons.svg';
import styles from './MenuOpenLogIn.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MenuOpenLogIn = ({ setOpenMenu, setShowHeader, handlerLogOut }) => {
  const pathname = useLocation().pathname;

  const handlerClose = () => {
    setOpenMenu(false);
    setShowHeader(true);
    document.body.classList.remove('noscroll');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobileWrapper}>
          <div className={styles.container}>
            <div className={styles.header__nav}>
              <Link to="/" onClick={handlerClose}>
                <svg width={129} height={28}>
                  <use href={`${Sprite}#logo-header`}></use>
                </svg>
              </Link>

              <div className={styles.container_close}>
                <span className={styles.userLine}></span>

                <button
                  className={styles.iconButton}
                  type="button"
                  onClick={handlerClose}
                >
                  <Link to="/">
                    <svg className={styles.logoutIcon} width={26} height={26}>
                      <use href={`${Sprite}#close`}></use>
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.menu__container}>
        <ul className={styles.menu__container_list}>
          <li
            // className={`${styles.list_item_text} ${styles.list_item_current}`}
            className={styles.list_item_text}
          >
            <NavLink
              onClick={handlerClose}
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
              onClick={handlerClose}
              to="/useful-info"
              className={({ isActive }) =>
                isActive ? styles.list_item_current : styles.list_item_text
              }
            >
              Materials
            </NavLink>
          </li>
          <li className={styles.list_item_text}>
            <NavLink
              onClick={handlerClose}
              to="/contacts"
              className={({ isActive }) =>
                isActive ? styles.list_item_current : styles.list_item_text
              }

            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <button
          className={styles.iconButtonLogOut}
          type="button"
          onClick={handlerLogOut}
        >
          <svg className={styles.logoutIcon} width={16} height={16}>
            <use href={`${Sprite}#sign-out`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default MenuOpenLogIn;
