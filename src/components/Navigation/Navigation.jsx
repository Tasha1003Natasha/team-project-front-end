<<<<<<< HEAD
=======
import styles from './Navigation.module.css';
// import logo from '../../images/icons/icons.svg';
// import logo_sign_out from '../../images/icons/icons.svg';
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
      </header>
    </>
  );
};
>>>>>>> main

// import styles from './Navigation.module.css';
// import Sprite from '../../images/icons/icons.svg';

// import UserMenu from 'components/UserMenu/UserMenu';
// import { getIsLoggedIn } from 'redux/auth/auth-selector';

// import { useSelector } from 'react-redux';
// import Modal from 'components/Modal/Modal';
// import { useState } from 'react';

// const Navigation= () => {

//   const isLogin = useSelector(getIsLoggedIn);

//   const [modalActive, setOnSubmitButton] = useState(false);

//   const modalChange = () => {
//     setOnSubmitButton(!modalActive);
//   };

//   const handelOpenModal = () => {
//     modalChange();
//   };
//   return (
//     <>
//      <header className={styles.header}>
//         <div className={styles.headerContainer}>
//           {modalActive && (
//             <Modal
//               title="Do you really want to leave?"
//               modalChange={modalChange}
//             />
//           )}
//           <button
//             className={styles.headerButton}
//             type="button"
//             onClick={handelOpenModal}
//           >
//             <svg className={styles.logoIcon} width={90} height={31}>
//               <use href={`${Sprite}#icon-logo`}></use>
//             </svg>
//           </button>
//           {isLogin && <UserMenu />}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navigation;
