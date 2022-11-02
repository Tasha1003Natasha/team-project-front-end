// import ContactsCard from '../../components/ContactsCard/ContactsCard';
// import styles from './Contacts.module.css';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { getTeams } from '../../redux/contacts/contacts-operations';
import Sprite from '../../images/icons/icons-social.svg';
import styles from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const team = useSelector(getContacts);
  console.log(team);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our team</h1>
          <p className={styles.line}></p>

          <ul className={styles.card}>
            {team.map((team, id) => {
              return (
                <li key={id}>
                  <img
                    src={team.url}
                    alt="1"
                    className={styles.img}
                    height="280"
                  />

                  <h3 className={styles.member__title}>{team.name}</h3>
                  <p className={styles.role__text}>{team.role}</p>

                  <a
                    className={styles.social__link}
                    href={team.github}
                    target="blank"
                  >
                    <svg className={styles.arrowIcon} width={24} height={24}>
                      <use href={`${Sprite}#icon-github-1`}></use>
                    </svg>
                  </a>

                  <a
                    className={styles.social__link}
                    href={team.linkedin}
                    target="blank"
                  >
                    <svg className={styles.arrowIcon} width={24} height={24}>
                      <use href={`${Sprite}#icon-linkedin-1`}></use>
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
