import Sprite from '../../images/icons/icons.svg';
import styles from './MenuOpenLogOut.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toggle from 'components/Theme/Toggle';

const MenuOpenLogOut = ({ setShowMenu, setShowHeader }) => {
  const theme = useSelector(state => state.theme);
  const handlerClose = () => {
    setShowMenu(false);
    setShowHeader(true);
    document.body.classList.remove('noscroll');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobileWrapper}>
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
              <div className={styles.container_close}>
                <span className={styles.userLine}></span>
                <Link to="/">
                  <button
                    className={styles.iconButton}
                    type="button"
                    onClick={handlerClose}
                  >
                    <svg className={styles.logoutIcon} width={26} height={26}>
                      <use href={`${Sprite}#close`}></use>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.menu__container}>
        <ul className={styles.menu__container_list}>
          <li className={styles.menu__container_list_item}>
            <NavLink
              onClick={handlerClose}
              to="/contacts"
              className={`${styles.menu__container_list_item_text} ${styles.menu__container_list_item_current}`}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuOpenLogOut;
