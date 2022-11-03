import { useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { logOut } from '../../redux/auth/auth-operations';
import Sprite from '../../images/icons/icons.svg';
import { useDispatch } from 'react-redux';
// import { getCurrent } from 'redux/auth/auth-selector';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  // const userName = useSelector(getCurrent);
  const userName = useSelector(state => state.user?.user?.email);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();
  const dispatch = useDispatch();

  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenu}>
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
      </ul>
      <p className={styles.avatarName}>{avatarName || 'U'}</p>
      <p className={styles.userName}>
        {userName || 'User Name'} <span className={styles.userLine}></span>
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
  );
};

export default UserMenu;
