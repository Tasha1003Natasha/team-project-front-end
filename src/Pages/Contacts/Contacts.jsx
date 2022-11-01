// import ContactsCard from '../../components/ContactsCard/ContactsCard';
import styles from './Contacts.module.css';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';

const Contacts = () => {
  const teams = useSelector(getContacts);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our team</h1>
          <p>
            <hr className={styles.line} />
          </p>

          <ul className={styles.card__wrapper}>
            {teams.map((id, team) => {
              return (
                <li key={id}>
                  <img
                    src={team.url}
                    alt="/"
                    className={styles.img}
                    width="280"
                    height="280"
                  />
                  <h3 className={styles.member__title}>{team.name}</h3>
                  <p className={styles.role__text}>{team.role}</p>
                  <li key={id} className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href={team.github}
                      target="blank"
                    >
                      {/* <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg> */}
                    </a>
                  </li>
                  <li key={id} className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href={team.linkedin}
                      target="blank"
                    >
                      {/* <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg> */}
                    </a>
                  </li>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

// Contacts.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Contacts;
