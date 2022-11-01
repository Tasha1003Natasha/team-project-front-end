import styles from './Navigation.module.css';
import logo from '../../images/icons/icons.svg';
import logo_sign_out from '../../images/icons/icons.svg';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__nav}>
            <Link to="/">
              <svg width={129} height={28} className={styles.header__logo}>
                <use href={logo + '#logo-header'}></use>
              </svg>
            </Link>
            <div className={styles.menu__container}>
              <ul className={styles.menu__container_list}>
                <li className={styles.menu__container_list_item}>
                  <NavLink className={styles.menu__container_list_item_text}>Home</NavLink>
                </li>
                <li className={styles.menu__container_list_item}>
                  <NavLink className={styles.menu__container_list_item_text}>Materials</NavLink>
                </li>
                <li className={styles.menu__container_list_item}>
                  <NavLink className={styles.menu__container_list_item_text}>Contacts</NavLink>
                </li>
              </ul>
              <p></p>
              <p></p>
              <span className={styles.line}></span>
              <button className={styles.button_logo_sign_out}>
                <svg width={16} height={16}>
                  <use href={logo_sign_out + '#sign-out'}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
