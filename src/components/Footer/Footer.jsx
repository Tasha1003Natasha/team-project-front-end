
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p className={styles.footer__text}>
                  <span>&#169</span> 2022 | All Rights Reserved
                </p>
            </div>
        </footer>

        </>
    );
}

export default Footer;