// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTest } from '../../redux/tests/tests-operations';
import Sprite from '../../images/icons/icons.svg';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import AuthPage from '../AuthPage/AuthPage';

import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

// import { useState } from 'react';

const MainPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const handleTech = () => {
    dispatch(getTest('tech'));
  };

  const handleTheory = () => {
    dispatch(getTest('theory'));
  };

  return (
    <>
      {token ? (
        <main>
          <section className={styles.container}>
            <div className={styles.mainWrapper}>
              <div className={styles.descriptionWrappper}>
                <h1 className={styles.mainTitle}>
                  “Regression testing. What is it? <br /> If the system
                  compiles, that's good, if it boots, that's great!”
                </h1>
                <hr className={styles.mainLine} />

                <p className={styles.mainTextStrong}>Linus Torvalds</p>

                <p className={styles.mainText}>
                  Linux kernel creator, hacker, 1969
                </p>
              </div>
              <div className={styles.btnsWrapper}>
                <Link
                  to="test"
                  className={styles.mainButton1}
                  onClick={handleTech}
                >
                  <p className={styles.mainButText1}>
                    QA technical <br />
                    training
                  </p>
                  <svg className={styles.arrowIcon} width={24} height={24}>
                    <use href={`${Sprite}#arrow`}></use>
                  </svg>
                </Link>
                <Link
                  to="test"
                  className={styles.mainButton2}
                  onClick={handleTheory}
                >
                  <p className={styles.mainButText2}>
                    Testing <br /> theory
                  </p>
                  <svg className={styles.arrowIcon} width={24} height={24}>
                    <use href={`${Sprite}#arrow`}></use>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default MainPage;
