
import { useDispatch, useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
// import { getToken } from 'redux/auth/auth-selector';
// import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const dispatch = useDispatch();
  let testTech = useSelector(getTechTest);
  let theoryTest = useSelector(getTheoryTest);

  const hendlerCloseTest = () => {
    const test = [];
    dispatch(testTech(test));
    dispatch(theoryTest(test));
  };

  return (
    <>
      {/* {token ? ( */}
      <div>
        {testTech[0] ? <p>[QA_technical_training]</p> : <p>[Testing_theory]</p>}

        <Link to="/" type="button" onClick={hendlerCloseTest}>
          Close test
        </Link>
        <TestForm />
      </div>
      {/* ) : (
        <AuthPage />
      )} */}
    </>
  );
};

export default TestPage;
