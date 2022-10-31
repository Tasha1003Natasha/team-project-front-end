import ContactsCard from '../../components/ContactsCard/ContactsCard'
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';




const Contacts = ({ items }) => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our team</h1>
          <p><hr className={styles.line}/></p>

          <ul className={styles.card__wrapper}>
            {items.map(item =>  (
              <li key={item.id}> 

              <ContactsCard
                imageUrl={item.url}
                name={item.name}
                role={item.role}
                linkGit={item.link.github}
                linkedIn={item.link.linkedin}              
              />
                
              </li>

            ))}
            
          </ul>          

        </div>
      </section>
    </main>
  );
};

Contacts.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Contacts;
