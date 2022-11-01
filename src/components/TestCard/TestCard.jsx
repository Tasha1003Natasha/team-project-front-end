// import { useEffect, useState } from 'react';
// import style from './TestCard.module.css';
import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

const TestCard = ({ index = 0 }) => {
  let currentIndex = Number(index);

  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  return (
    <>
      {testTech[currentIndex] && (
        <div>
          <p>{testTech[currentIndex].question}</p>
          {/* <p>{testTech[currentIndex]._id}</p> */}
          <ul>
            {testTech[currentIndex].answers.map((answer, ind) => {
              return (
                <li key={ind}>
                  <input
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
        </div>
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
