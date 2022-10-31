import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TestForm.module.css';
import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';
import { results } from 'redux/tests/tests-operations';
import { useDispatch } from 'react-redux';
import TestCard from '../TestCard/TestCard';

export const TestForm = () => {
  const [index, setIndex] = useState('0');
  const [answer, setAnswer] = useState([]);
  const dispatch = useDispatch();

  const radioButton = document.getElementsByName('r1');
  const backBtn = document.querySelector('back');
  // const nextBtn = document.querySelector('next');
  // const finishBtn = document.querySelector('finish');
  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  const checkAnswer = radioButton => {
    for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].checked && testTech[0]) {
        setAnswer([
          ...answer,
          {
            userAnswer: radioButton[i].value,
            _id: testTech[Number(index)]._id,
          },
        ]);
      }
      if (radioButton[i].checked && testTheory[0]) {
        setAnswer([
          ...answer,
          {
            userAnswer: radioButton[i].value,
            _id: testTheory[Number(index)]._id,
          },
        ]);
      }
    }
  };

  const currentQuestionIndexBack = evt => {
    checkAnswer(radioButton);
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 0) {
      backBtn.disablead = true;
      setIndex(0);
    }
  };

  const currentQuestionIndexNext = evt => {
    checkAnswer(radioButton);
    const NextIndex = Number(index) + 1;
    if (NextIndex > 0 && NextIndex <= 12) {
      setIndex(NextIndex);
    }
    if (NextIndex < 0) {
      setIndex(0);
    }
  };

  const getResultsFunc = () => {
    dispatch(results(answer));
  };

  return (
    <>
      <div className={style.questionContainer}>
        <p>Question {Number(index) + 1} / 12 </p>
        <TestCard index={index} radioButton={radioButton} />
      </div>
      <div>
        <button type="button" name="back" onClick={currentQuestionIndexBack}>
          Back
        </button>
        {Number(index) + 1 < 12 ? (
          <button type="button" name="next" onClick={currentQuestionIndexNext}>
            Next
          </button>
        ) : (
          <Link to="/results" name="finish" onClick={getResultsFunc}>
            Finish test
          </Link>
        )}
      </div>
    </>
  );
};

export default TestForm;
