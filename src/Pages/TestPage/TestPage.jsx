import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';

import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';

import { getTest } from 'redux/tests/tests-operations';

const TestPage = () => {
  const dispatch = useDispatch();
  const testCurrent = useSelector(getCurrentTest);

  // const changeNext = radioButton => {
  //   const checkRadio = [];
  //   for (let i = 0; i < radioButton.lenght; i++) {
  //     if (radioButton[i].checked) {
  //       checkRadio.push(radioButton[i]);
  //     }
  //   }
  //   console.log(checkRadio);
  //   return checkRadio.length;
  // };

  // nextBtn.disabled = true;
  // console.log(nextBtn);

  const hendlerCloseTest = () => {
    const test = [];
    dispatch(getTest(test));
  };

  return (
    <>
      <section className={style.sectionTest}>
        <div className={style.hederTest}>
          {testCurrent[0].type === 'tech' ? (
            <p className={style.hederText}>[QA_technical&shy;_training]</p>
          ) : (
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
    </>
  );
};

export default TestPage;
