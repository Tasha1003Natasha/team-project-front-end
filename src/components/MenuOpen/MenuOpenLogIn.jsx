import Sprite from '../../images/icons/icons.svg';
import styles from './MenuOpenLogIn.module.css';
import { Link, NavLink } from 'react-router-dom';

const MenuOpenLogIn = ({setOpenMenu,setShowHeader,handlerLogOut}) => {

const handlerClose=()=>{
  setOpenMenu(false)
  setShowHeader(true)
  document.body.classList.remove('noscroll');
}

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobileWrapper}>
          <div className={styles.container}>
            <div className={styles.header__nav}>
              <Link to="/">
                <svg width={129} height={28}>
                  <use href={`${Sprite}#logo-header`}></use>
                </svg>
              </Link>

              <button className={styles.iconButton} type="button" onClick={handlerClose}>
                <svg className={styles.logoutIcon} width={26} height={26}>
                  <use href={`${Sprite}#close`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.menu__container}>
        <ul className={styles.menu__container_list}>
          <li className={styles.menu__container_list_item}>
            <NavLink
              to="/"
              className={`${styles.menu__container_list_item_text} ${styles.menu__container_list_item_current}`}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.menu__container_list_item}>
            <NavLink
              to="/"
              className={`${styles.menu__container_list_item_text}`}
            >
              Materials
            </NavLink>
          </li>
          <li className={styles.menu__container_list_item}>
            <NavLink
              to="/"
              className={`${styles.menu__container_list_item_text}`}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <button className={styles.iconButtonLogOut} type="button" onClick={handlerLogOut}>
          {/* <span className={styles.line}></span> */}
          <svg className={styles.logoutIcon} width={16} height={16}>
            <use href={`${Sprite}#sign-out`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default MenuOpenLogIn;
