import { useSelector } from 'react-redux';

import TestForm from '../../components/TestForm/TestForm';
import { getToken } from 'redux/auth/auth-selector';
const TestPage = () => {
  const token = useSelector(getToken);
  return (
    <>
      {/* {token && ( */}
      <div>
        <p>name test</p>
        <button type="button">Close</button>
        <TestForm />
        <button type="button">Next question</button>
      </div>
      {/* )} */}
    </>
  );
};

export default TestPage;
