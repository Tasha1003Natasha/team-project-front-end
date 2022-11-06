import ContactsCard from '../../components/ContactsCard/ContactsCard';
import styles from './Contacts.module.css';
import team from './teams.json';

// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { getToken } from 'redux/auth/auth-selector';
// import AuthPage from '../AuthPage/AuthPage';

const Contacts = () => {
  // const token = useSelector(getToken);

  // if (token) {
  //   <Navigate to="/" />;
  // } else {
  //   <Navigate to="/auth" />;
  // }

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
