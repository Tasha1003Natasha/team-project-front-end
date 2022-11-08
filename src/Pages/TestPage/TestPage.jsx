import { useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import { getToken } from 'redux/auth/auth-selector';
import { useState, useEffect } from 'react';
import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';

import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const [type, setType] = useState('');
  const testCurrent = useSelector(getCurrentTest);


  useEffect(() => {
    setType(testCurrent[0]?.type);
  }, [setType, testCurrent]);

  const token = useSelector(getToken);

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
         
            >
              Close test
            </Link>
          </div>
          <TestForm testCurrent={testCurrent} />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
