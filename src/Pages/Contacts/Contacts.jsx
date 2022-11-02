import ContactsCard from '../../components/ContactsCard/ContactsCard';
import styles from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { getTeams } from '../../redux/contacts/contacts-operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const team = useSelector(getContacts);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our team</h1>
          <p className={styles.line}></p>

          <ul className={styles.card__wrapper}>
            {team.map((team, id) => {
            //  console.log(team)
              return (
                <ContactsCard
                  key={id}
                  url={team.url}
                  name={team.name}
                  role={team.role}
                  github={team.github}
                  linkedin={team.linkedin}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
