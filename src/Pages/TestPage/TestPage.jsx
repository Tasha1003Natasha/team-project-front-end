import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentTest,
  rightAnswers,
  userAnswers,
} from '../../redux/tests/test-selector';
import { getToken } from 'redux/auth/auth-selector';
import { useState, useEffect } from 'react';
import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';
import { getAnswers } from 'redux/tests/tests-operations';
import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const [type, setType] = useState('');
  const testCurrent = useSelector(getCurrentTest);
  const rightAnswerArr = useSelector(rightAnswers);
  const userAnswerArr = useSelector(userAnswers);
  const dispatch = useDispatch();
  useEffect(() => {
    setType(testCurrent[0]?.type);
  }, [setType, testCurrent]);

  const token = useSelector(getToken);

  const hendleClear = () => {
    dispatch(getAnswers([]));
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
              onClick={hendleClear}
            >
              Close test
            </Link>
          </div>
          <TestForm
            testCurrent={testCurrent}
            rightAnswerArr={rightAnswerArr}
            userAnswerArr={userAnswerArr}
          />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
