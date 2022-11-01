import { useDispatch, useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/auth/auth-selector';
import AuthPage from 'Pages/AuthPage/AuthPage';

import s from './TestPage.module.css';

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
        <section className={s.sectionTest}>
          <div className={s.container}>
            <div className={s.buttonsWrapper}>
              {testTech[0] ? (
                <p className={s.trainingTitle}>
                  [QA_technical_
                  <br />
                  training]
                </p>
              ) : (
                <p className={s.trainingTitle}>[Testing_theory]</p>
              )}

              <Link
                className={s.finishBtn}
                to="/"
                type="button"
                onClick={hendlerCloseTest}
              >
                Finish test
              </Link>
            </div>
            <TestForm />
          </div>
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
