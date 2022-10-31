import s from '../PageNotFound/PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.gifBox}>
        <img
          className={s.gifImage}
          src="https://media.tenor.com/DiUjye_MGoAAAAAd/not-found-404error.gif"
          alt="gif"
        />
        <h2 className={s.pageTitle}>Sorry, this page does not exist.</h2>
        <p className={s.pageSubtitle}>
          Go to{' '}
          <Link className={s.link} to="/">
            Main Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
