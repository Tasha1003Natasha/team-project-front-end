// import { ReactComponent as Arrow } from '../../images/icons/icons.svg#arrow';
import Sprite from '../../images/icons/icons.svg';
import { Link } from 'react-router-dom';

import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <main>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <div className={styles.descriptionWrappper}>
              <h1 className={styles.mainTitle}>
              “Regression testing. What is it? <br/> If the system compiles, that's good, if it boots, that's great!”
              </h1>
              <hr className={styles.mainLine}/>
              
              <p className={styles.mainTextStrong}>Linus Torvalds</p>
              
              <p className={styles.mainText}>Linux kernel creator, hacker, 1969</p>
            </div>
            <div className={styles.btnsWrapper}>
              <Link to="test" className={styles.mainButton}>QA technical training
              
                <svg className={styles.arrowIcon} width={24} height={16}>
              <use href={`${Sprite}#arrow`}></use>
            </svg>


                </Link>
              <Link to="useful-info" className={styles.mainButtonTest}>Testing theory
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
