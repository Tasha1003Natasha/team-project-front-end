import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

import TestForm from '../../components/TestForm/TestForm';
// import { getToken } from 'redux/auth/auth-selector';
// import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const testTech = useSelector(getTechTest);

  return (
    <>
      {/* {token ? ( */}
      <div>
        {testTech[0] ? <p>[QA_technical_training]</p> : <p>[Testing_theory]</p>}

        <button type="button">Close</button>
        <TestForm />
      </div>
      {/* ) : (
        <AuthPage />
      )} */}
    </>
  );
};

export default TestPage;
