import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './TestForm.module.css';

import { results } from 'redux/tests/tests-operations';
import { useDispatch } from 'react-redux';
import TestCard from '../TestCard/TestCard';
import Sprite from '../../images/icons/icons.svg';

export const TestForm = () => {
  const radioButton = document.getElementsByName('r1');
  console.log(radioButton);
  const next = radioButton => {
    for (let i = 0; i < radioButton.length; i++) {
      radioButton.find(radioButton[i].checked);
      console.log('checked');
    }
    console.log('disabled');
  };

  const screenWidth = window.screen.width;
  // document.getElementsByName('next').disabled = true;
  console.log(document.getElementsByName('next'));
  const [index, setIndex] = useState('0');

  const dispatch = useDispatch();

  const currentQuestionIndexBack = evt => {
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 1) {
      setIndex(0);
    }
  };

  const currentQuestionIndexNext = evt => {
    // checkAnswer(radioButton);

    const NextIndex = Number(index) + 1;
    if (NextIndex > 0 && NextIndex <= 12) {
      setIndex(NextIndex);
    }
    if (NextIndex < 0) {
      setIndex(0);
    }
  };
  const answer = JSON.parse(localStorage.getItem('userAnswers'));
  const getResultsFunc = () => {
    dispatch(results(answer));
  };
  console.log(answer);
  // const chengeNext = () => {
  //   document.getElementsByName('next').disabled = false;

  // };
  // console.log(document.getElementsByName('next'));
  console.log(Number(index) + 1);

  return (
    <>
      <div className={style.questionContainer}>
        <p className={style.numberQuestion}>
          Question <span className={style.active}>{Number(index) + 1}</span> /
          12
        </p>
        <TestCard index={index} />
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
            // disabled={}
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
