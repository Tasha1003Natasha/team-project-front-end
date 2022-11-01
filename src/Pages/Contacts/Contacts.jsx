import ContactsCard from '../../components/ContactsCard/ContactsCard';
// import styles from './Contacts.module.css';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { getTeams } from '../../redux/contacts/contacts-operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const teams = useSelector(getContacts);
  console.log(teams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <ul>
      {teams.map((id, team) => {
        return (
          <li key={id}>
            <ContactsCard key={team.id} data={team} />
            {/* <ContactsCard  key={item.id} name={team.name} url={team.url} /> */}
          </li>
        );
      })}
    </ul>
  );
  // <main>
  //   <section className={styles.section}>
  //     <div className={styles.container}>
  //       <h1 className={styles.title}>Our team</h1>
  //       <p>
  //         <hr className={styles.line} />
  //       </p>
  //       <ContactsCard />
  //     </div>
  //   </section>
  // </main>
};

export default Contacts;
