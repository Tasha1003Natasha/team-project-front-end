import styles from './Footer.module.css';
import heart from '../../images/icons/icons.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footer__text}>
            {' '}
            &#169; 2021 | All Rights Reserved | Developed with
          </p>
          <svg width={16} height={16} className={styles.footer__svg}>
            <use href={heart + '#heart-footer'}></use>
          </svg>
          <p className={styles.footer__text}>by</p>
          <Link to="/contacts" className={styles.footer__link}>
            GoIT Students
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
