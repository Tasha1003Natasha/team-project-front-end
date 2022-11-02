// import PropTypes from 'prop-types';
// import Sprite from '../../images/icons/icons-social.svg';
// import styles from './ContactsCard.module.css';

// import defaultImage from '../../images/team/default.png';

// const ContactsCard = (
//     {
//   imageUrl = defaultImage,
//   name,
//   role,
//   linkGit,
//   linkedIn
// }
// ) => {
//   return (
//     <div className={styles.card}>
//             <img
//                  src={imageUrl}
//                   alt="1"
//                   className={styles.img}
//                   width="280"
//                   height="280"
//                 />

//               <div className={styles.team__about}>
//                 <h3 className={styles.member__title}>{name}</h3>
//                 <p className={styles.role__text}>{role}</p>

//                 <ul className={styles.social__list}>
//                   <li className={styles.list__item}>
//                     <a
//                       className={styles.social__link}
//                       href={linkGit}
//                       target="blank"
//                     >
//                       <svg className={styles.arrowIcon} width={24} height={24}>
//                         <use href={`${Sprite}#icon-github-1`}></use>
//                       </svg>
//                     </a>
//                   </li>
//                   <li className={styles.list__item}>
//                     <a
//                       className={styles.social__link}
//                       href={linkedIn}
//                       target="blank"
//                     >

//                       <svg className={styles.arrowIcon} width={24} height={24}>
//                         <use href={`${Sprite}#icon-linkedin-1`}></use>
//                       </svg>
//                     </a>
//                   </li>

//                 </ul>
//               </div>
//             </div>
//   );
// };

// ContactsCard.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//  name: PropTypes.string.isRequired,
//   role: PropTypes.string.isRequired,
//   linkGit: PropTypes.string.isRequired,
//   linkedIn: PropTypes.string.isRequired,
// };

// export default ContactsCard;
/////////////////////////////////////////////////////////////////////////////////
// import styles from './ContactsCard.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts } from '../../redux/contacts/contacts-selector';
// const dispatch = useDispatch();

const ContactsCard = ({ url, name, role, github, linkedin }) => {
  console.log({ url, name, role, github, linkedin });
  // const dispatch = useDispatch();
  // const { url, name, role, github, linkedin } = useSelector(getContacts);

  return <></>;
};

export default ContactsCard;
