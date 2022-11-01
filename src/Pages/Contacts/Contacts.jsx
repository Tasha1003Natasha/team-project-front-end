import ContactsCard from '../../components/ContactsCard/ContactsCard';
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
            {teams.map(team => (
              <li key={team.id}>
                <ContactsCard
                  imageUrl={team.url}
                  name={team.name}
                  role={team.role}
                  linkGit={team.github}
                  linkedIn={team.linkedin}
                />
              </li>
            ))}
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
