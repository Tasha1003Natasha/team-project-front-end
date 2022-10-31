import styles from './Footer.module.css';
import heart from '../../images/icons/icons.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={(styles.container)}>
          <p className={styles.footer__text}>
            {' '}
            &#169; 2021 | All Rights Reserved | Developed with
            <span>
              <svg width={16} height={14} className={styles.footer__svg}>
                <use href={heart + '#heart-footer'}></use>
              </svg>
            </span>
            by
          </p>
          <Link to="/" className={styles.footer__link}>
            GoIT Students
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
