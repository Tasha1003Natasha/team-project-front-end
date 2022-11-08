import Sprite from '../../images/icons/icons.svg';
import styles from './HeaderLogOut.module.css';
import { Link, NavLink } from 'react-router-dom';
import MenuOpenLogOut from 'components/MenuOpen/MenuOpenLogOut';
import { useState } from 'react';
import Toggle from 'components/Theme/Toggle';
import { useSelector } from 'react-redux';


const HeaderLogOut = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const theme = useSelector(state => state.theme);
 
  const handlerOpen = () => {
    setShowMenu(true);
    setShowHeader(false);
    document.body.classList.add('noscroll');
  };

  return (
    <>
      {showMenu && (
        <MenuOpenLogOut
          setShowMenu={setShowMenu}
          setShowHeader={setShowHeader}
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
                <span className={styles.userLine}></span>
                <button
                  className={styles.iconButton}
                  type="button"
                  onClick={handlerOpen}
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
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderLogOut;
