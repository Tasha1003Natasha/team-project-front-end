import styles from './UsefulInfo.module.css';

const UsefulInfo = () => {
  
  return (
    <main>
      <section className={styles.useSection}>
      <div className={styles.container}>      
        <ul>
          <li>
            <ul className={styles.useWrapper}>
              <li><h3 className={styles.useTitle}>Useful literature</h3></li>
              <li><hr className={styles.useLine}/></li>
              <li><p className={styles.useText}>1. Testing dot.com Savin.  </p></li>
              <li><p className={styles.useText}>2. A mental hospital in the hands of patients.</p></li>
              <li><p className={styles.useText}>3. Scrum. J. Sutherland.</p></li>
            </ul>
             </li>

             <li>
            <ul>
              <li><h3 className={styles.useTitle}>Useful resources</h3></li>
              <li><hr className={styles.useLine}/></li>
              <li><p className={styles.useText}>1. <span className={styles.useTextLine}>dou.ua</span></p></li>
              <li><p className={styles.useText}>2. <span className={styles.useTextLine}>Habr</span></p></li>
              <li><p className={styles.useText}>3. <span className={styles.useTextLine}>facebook.com/QA</span></p></li>
              <li><p className={styles.useText}>4. <span className={styles.useTextLine}>goit.ua</span></p></li>
               
            </ul>
             </li>
        </ul>
      </div>
      </section>
    </main>
  );
};

export default UsefulInfo;









