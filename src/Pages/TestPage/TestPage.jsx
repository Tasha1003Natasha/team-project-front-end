import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import { getToken } from 'redux/auth/auth-selector';
import { useState, useEffect } from 'react';
import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';

import { getTest } from 'redux/tests/tests-operations';
import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const testCurrent = useSelector(getCurrentTest);
  // useEffect(() => {
  //   const typeCurrent = String(testCurrent[0].type);
  //   setType(typeCurrent);
  //   console.log(typeCurrent);
  // });

  useEffect(() => {
    setType(String(testCurrent[0].type));
  }, [setType, testCurrent]);

  const token = useSelector(getToken);
  console.log(type);

  const hendlerCloseTest = () => {
    const test = [];
    dispatch(getTest(test));
  };

  return (
    <>
      {token ? (
        <section className={style.sectionTest}>
          <div className={style.hederTest}>
            {type === 'tech' && (
              <p className={style.hederText}>[QA_technical&shy;_training]</p>
            )}
            {type === 'theory' && (
              <p className={style.hederText}>[Testing &shy;theory_]</p>
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
          <TestForm />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
