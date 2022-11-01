import { useDispatch, useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const dispatch = useDispatch();
  const testTech = useSelector(getTechTest);
  const theoryTest = useSelector(getTheoryTest);
  const nextBtn = document.getElementsByName('next');
  nextBtn.disabled = true;

  const isLogin = useSelector(getIsLoggedIn);
  const hendlerCloseTest = () => {
    const test = [];
    dispatch(testTech(test));
    dispatch(theoryTest(test));
  };

  return (
    <>
      {isLogin ? (
        <section className={style.sectionTest}>
          <div className={style.hederTest}>
            {testTech[0] ? (
              <p className={style.hederText}>[QA_technical&shy;_training]</p>
            ) : (
              <p className={style.hederTest}>[Testing&shy;theory_]</p>
            )}

            <Link
              className={style.closeBtn}
              to="/"
              type="button"
              onClick={hendlerCloseTest}
            >
              Close test
            </Link>
          </div>
          <TestForm nextBtn={nextBtn} />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
