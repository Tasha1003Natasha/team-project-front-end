// import { useEffect, useState } from 'react';
// import style from './TestCard.module.css';
import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';
import style from './TestCard.module.css';

const TestCard = ({ index = 0 }) => {
  let currentIndex = Number(index);

  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  return (
    <>
      {testTech[currentIndex] && (
        <>
          <p className={style.questionText}>
            {testTech[currentIndex].question}
          </p>
          <hr className={style.line} />
          {/* <p>{testTech[currentIndex]._id}</p> */}
          <ul className={style.answersList}>
            {testTech[currentIndex].answers.map((answer, ind) => {
              return (
                <li className={style.answersItem} key={ind}>
                  <input
                    className={style.radio}
                    // style="background-color: #ff6b09"
                    name="r1"
                    type="radio"
                    value={answer}
                    // onClick={onClick}
                    defaultChecked={false}
                  />
                  {answer}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {testTheory[currentIndex] && (
        <div>
          <p>{testTheory[currentIndex].question}</p>
          <ul>
            {testTheory[currentIndex].answers.map((answer, ind) => {
              return (
                <>
                  <li key={currentIndex}>
                    <input
                      name="r1"
                      type="radio"
                      value={answer}
                      id={ind}
                      key={ind}
                    />
                    {answer}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default TestCard;
