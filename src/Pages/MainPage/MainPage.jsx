// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { techTest, theoryTest } from '../../redux/tests/tests-operations';
import Sprite from '../../images/icons/icons.svg';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useDispatch();

  const handleTech = evt => {
    dispatch(techTest());
  };

  const handleTheory = evt => {
    dispatch(theoryTest());
  };

  return (
    <main>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <div className={styles.descriptionWrappper}>
              <h1 className={styles.mainTitle}>
                “Regression testing. What is it? <br /> If the system compiles,
                that's good, if it boots, that's great!”
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
                className={styles.mainButton}
                onClick={handleTech}
              >
                QA technical training
                <svg className={styles.arrowIcon} width={24} height={16}>
                  <use href={`${Sprite}#arrow`}></use>
                </svg>
              </Link>
              <Link
                to="test"
                className={styles.mainButtonTest}
                onClick={handleTheory}
              >
                Testing theory
                <svg className={styles.arrowIcon} width={24} height={16}>
                  <use href={`${Sprite}#arrow`}></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
