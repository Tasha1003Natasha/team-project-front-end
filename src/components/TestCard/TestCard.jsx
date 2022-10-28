// import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';

const TestCard = ({ index = 0 }) => {
  let currentIndex = Number(index);
  console.log(index);
  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  // const { question, answers, type, _id } = item;

  // const radioButton = document.getElementsByName('r1');
  // console.log(radioButton);

  // const ansver = [];
  // const checkAnswer = () => {

  //   for (let i = 0; i < radioButton.length; i++) {
  //     if (radioButton[i].checked) {
  //       ansver.push(radioButton[i].value);
  //     }
  //     console.log(ansver);
  //   }
  // };

  // console.log(currentIndex);


  return (
    <>
      {testTech[currentIndex] && (
        <div>
          <p>{testTech[currentIndex].question}</p>
          {testTech[currentIndex].answers.map((answer, ind) => {
            return (
              <>
                <input
                  name="r1"
                  type="radio"
                  value={answer}
                  id={ind}
                  key={ind}
                />
                {answer}
              </>
            );
          })}
          {/* <button type="submit" onSubmit={checkAnswer}>
            Next
          </button> */}
        </div>
      )}

      {testTheory[currentIndex] && (
        <div>
          <p>{testTheory[currentIndex].question}</p>
          {testTheory[currentIndex].answers.map((answer, ind) => {
            return (
              <>
                <input
                  name="r1"
                  type="radio"
                  value={answer}
                  id={ind}
                  key={ind}
                />
                {answer}
              </>
            );
          })}
          {/* <button type="submit" onSubmit={checkAnswer}>
            Next
          </button> */}
        </div>
      )}
    </>
  );
};

export default TestCard;
