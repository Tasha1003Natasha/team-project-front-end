import styles from './UsefulInfo.module.css';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';
import AuthPage from 'Pages/AuthPage/AuthPage';

const UsefulInfo = () => {
  const isLogin = useSelector(getToken);
  const theme = useSelector(state => state.theme);

  return (
    <>
      {isLogin ? (
        <main>
          <section
            className={`${
              theme !== 'dark' ? styles.useSection : styles.useSection_dark
            }`}
          >
            <div className={styles.container}>
              <ul>
                <li>
                  <ul className={styles.useWrapper}>
                    <li>
                      <h3 className={styles.useTitle}>Useful literature</h3>
                    </li>
                    <li>
                      <hr className={styles.useLine} />
                    </li>
                    <li>
                      <p className={styles.useText}>
                        1. Testing dot.com Savin.{' '}
                      </p>
                    </li>
                    <li>
                      <p className={styles.useText}>
                        2. A mental hospital in the hands of patients.
                      </p>
                    </li>
                    <li>
                      <p className={styles.useText}>3. Scrum. J. Sutherland.</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul>
                    <li>
                      <h3 className={styles.useTitle}>Useful resources</h3>
                    </li>
                    <li>
                      <hr className={styles.useLine} />
                    </li>
                    <li>
                      <p className={styles.useText}>
                        1.{' '}
                        <a
                          href="https://dou.ua/"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.useTextLine}
                        >
                          dou.ua
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className={styles.useText}>
                        2.{' '}
                        <a
                          href="https://habr.com/ru/all/"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.useTextLine}
                        >
                          Habr
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className={styles.useText}>
                        3.{' '}
                        <a
                          href="https://www.facebook.com/qa.blog.ua/"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.useTextLine}
                        >
                          facebook.com/QA
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className={styles.useText}>
                        4.{' '}
                        <a
                          href="https://goit.global/ua/"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.useTextLine}
                        >
                          goit.ua
                        </a>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default UsefulInfo;
