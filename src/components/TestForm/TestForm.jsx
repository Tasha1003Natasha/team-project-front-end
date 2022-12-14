import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TestForm.module.css';

import { results } from 'redux/tests/tests-operations';
import { useDispatch } from 'react-redux';
import TestCard from '../TestCard/TestCard';
import Sprite from '../../images/icons/icons.svg';

export const TestForm = ({ testCurrent }) => {
  const screenWidth = window.screen.width;
  const [isDisable, setIsDisable] = useState(true);
  const [index, setIndex] = useState('0');

  const dispatch = useDispatch();
  const answer = JSON.parse(localStorage.getItem('userAnswers'));
  const getResultsFunc = () => {
    dispatch(results(answer));
  };

  const currentQuestionIndexBack = evt => {
    setIsDisable(false);
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 1) {
      setIndex(0);
    }
  };

  const changeButtonStatus = () => {
    setIsDisable(false);
  };

  const currentQuestionIndexNext = evt => {
    const isDisabled = answer.find(
      ({ _id }) => _id === testCurrent[Number(index)]._id
    );
    setIsDisable(!Boolean(isDisabled));

    const NextIndex = Number(index) + 1;
    if (NextIndex > 0 && NextIndex <= 12) {
      setIndex(NextIndex);
    }
    if (NextIndex < 0) {
      setIndex(0);
    }
  };

  return (
    <>
      <div className={style.questionContainer}>
        <p className={style.numberQuestion}>
          Question <span className={style.active}>{Number(index) + 1}</span> /
          12
        </p>
        <TestCard
          index={index}
          unDisableBtn={changeButtonStatus}
          test={testCurrent}
        />
      </div>
      <div className={style.testFooter}>
        <button
          className={style.btnQuestions}
          type="button"
          name="back"
          disabled={!Boolean(answer?.length)}
          onClick={currentQuestionIndexBack}
        >
          <svg className={style.arrowBack} width={24} height={16}>
            <use href={`${Sprite}#arrow`}></use>
          </svg>
          {screenWidth >= 768 && (
            <span className={style.btnPrevious}>Previous question</span>
          )}
        </button>
        {Number(index) + 1 < 12 ? (
          <button
            className={style.btnQuestions}
            type="button"
            id="next"
            onClick={currentQuestionIndexNext}
            disabled={isDisable}
          >
            {screenWidth >= 768 && (
              <span className={style.btnPrevious}>Next question</span>
            )}
            <svg className={style.arrowNext} width={24} height={16}>
              <use href={`${Sprite}#arrow`}></use>
            </svg>
          </button>
        ) : (
          <Link to="/results">
            <button
              className={style.btnFinish}
              name="finish"
              onClick={getResultsFunc}
              disabled={isDisable}
            >
              Finish
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default TestForm;
