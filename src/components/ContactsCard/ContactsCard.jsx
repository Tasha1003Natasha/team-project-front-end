import Sprite from '../../images/icons/icons-social.svg';
import styles from './ContactsCard.module.css';

const ContactsCard = team => {
  return (
    <div className={styles.card}>
      <img
        src={team.url}
        alt="1"
        className={styles.img}
        width="280"
        height="280"
      />

      <div className={styles.team__about}>
        <h3 className={styles.member__title}>{team.name}</h3>
        <p className={styles.role__text}>{team.role}</p>

        <ul className={styles.social__list}>
          <li className={styles.list__item}>
            <a
              className={styles.social__link}
              href={team.github}
              target="blank"
            >
              <svg className={styles.arrowIcon} width={24} height={24}>
                <use href={`${Sprite}#icon-github-1`}></use>
              </svg>
            </a>
          </li>
          <li className={styles.list__item}>
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
        </ul>
      </div>
    </div>
  );
};

export default ContactsCard;
