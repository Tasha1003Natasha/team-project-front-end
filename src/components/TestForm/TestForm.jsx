import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TestForm.module.css';
import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';
import { results } from 'redux/tests/tests-operations';
import { useDispatch } from 'react-redux';
import TestCard from '../TestCard/TestCard';
import Sprite from '../../images/icons/icons.svg';

export const TestForm = () => {
  const screenWidth = window.screen.width;
  console.log(screenWidth);
  const [index, setIndex] = useState('0');
  const [answer, setAnswer] = useState([]);
  // const [active, setActive] = useState('true');
  const dispatch = useDispatch();

  const radioButton = document.getElementsByName('r1');

  // nextBtn.disabled = true;

  // console.log(nextBtn);

  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  const checkAnswer = radioButton => {
    for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].checked && testTech[0]) {
        const userAnswer = {
          userAnswer: radioButton[i].value,
          _id: testTech[Number(index)]._id,
        };
        unClick(radioButton[i]);

        for (let i = 0; i < answer.length; i++) {
          if (userAnswer._id === answer[i]._id) {
            const index = answer.indexOf(answer[i]);

            answer.splice(index, 1);
          }
        }

        setAnswer([...answer, userAnswer]);
      }
      if (radioButton[i].checked && testTheory[0]) {
        const userAnswer = {
          userAnswer: radioButton[i].value,
          _id: testTheory[Number(index)]._id,
        };

        for (let i = 0; i < answer.length; i++) {
          if (userAnswer._id === answer[i]._id) {
            const index = answer.indexOf(answer[i]);

            answer.splice(index, 1);
          }
        }

        setAnswer([...answer, userAnswer]);
      }
    }
  };

  const currentQuestionIndexBack = evt => {
    checkAnswer(radioButton);
    chechButton(radioButton);
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 1) {
      setIndex(0);
    }
  };

  const currentQuestionIndexNext = evt => {
    checkAnswer(radioButton);

    const NextIndex = Number(index) + 1;
    if (NextIndex > 0 && NextIndex <= 12) {
      setIndex(NextIndex);
      // setActive('true');
    }
    if (NextIndex < 0) {
      setIndex(0);
    }
  };

  const getResultsFunc = () => {
    checkAnswer(radioButton);
    dispatch(results(answer));
  };

  localStorage.setItem('userAnswers', JSON.stringify(answer));

  const localStorageArrayAnswers = JSON.parse(
    localStorage.getItem('userAnswers')
  );
  console.log(localStorageArrayAnswers);

  const chechButton = radioButton => {
    if (localStorageArrayAnswers.length) {
      for (let i = 0; i < radioButton.length; i++) {
        // console.log(radioButton[i]);
        for (let j = 0; j < localStorageArrayAnswers.length; j++) {
          if (
            testTech[Number(index)]._id === localStorageArrayAnswers[j]._id &&
            String(radioButton[i].value).length ===
              String(localStorageArrayAnswers[j].userAnswer).len
          ) {
            radioButton[i].value === localStorageArrayAnswers[j].userAnswer
              ? (radioButton[i].checked = true)
              : (radioButton[i].checked = false);
          }
        }
      }
    }
  };

  const unClick = radioButton => {
    radioButton.checked = false;
  };

  return (
    <>
      <div className={style.questionContainer}>
        <p className={style.numberQuestion}>
          Question <span className={style.active}>{Number(index) + 1}</span> /
          12
        </p>
        <TestCard index={index} radioButton={radioButton} />
      </div>
      <div className={style.testFooter}>
        <button
          className={style.btnQuestions}
          type="button"
          name="back"
          onClick={currentQuestionIndexBack}
        >
          <svg className={style.arrowBack} width={24} height={16}>
            <use href={`${Sprite}#arrow`}></use>
          </svg>
          {screenWidth >= 768 && <span>Previous question</span>}
        </button>
        {Number(index) + 1 < 12 ? (
          <button
            className={style.btnQuestions}
            type="button"
            name="next"
            onClick={currentQuestionIndexNext}
          >
            {screenWidth >= 768 && <span>Next question</span>}
            <svg className={style.arrowNext} width={24} height={16}>
              <use href={`${Sprite}#arrow`}></use>
            </svg>
          </button>
        ) : (
          <Link
            className={style.btnQuestions}
            to="/results"
            name="finish"
            onClick={getResultsFunc}
          >
            <span>Finish test</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default TestForm;
