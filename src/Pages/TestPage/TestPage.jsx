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
          <div>
            {testTech[0] ? (
              <p>[QA_technical_training]</p>
            ) : (
              <p>[Testing_theory]</p>
            )}

            <Link to="/" type="button" onClick={hendlerCloseTest}>
              Close test
            </Link>
          </div>
          <TestForm />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
