import ContactsCard from '../../components/ContactsCard/ContactsCard';
import styles from './Contacts.module.css';
import team from './teams.json';

const Contacts = () => {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>Our team</h1>
        <p className={styles.line}></p>
        <ul className={styles.card__wrapper}>
          {team.map((team, id) => {
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
      </section>
    </main>
  );
};

export default Contacts;
