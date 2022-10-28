import { useState } from 'react';

import TestCard from '../TestCard/TestCard';

export const TestForm = () => {
  const [index, setIndex] = useState('0');
  const [answer, setAnswer] = useState([]);
  const radioButton = document.getElementsByName('r1');

  const checkAnswer = radioButton => {
    for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].checked) {
        setAnswer([...answer, radioButton[i].value]);
      }
    }
  };
  console.log(answer);
  const currentQuestionIndexBack = evt => {
    checkAnswer(radioButton);
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 0) {
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

  return (
    <>
      <TestCard index={index} radioButton={radioButton} />
      <button type="button" onClick={currentQuestionIndexBack}>
        Back
      </button>
      <button type="button" onClick={currentQuestionIndexNext}>
        Next
      </button>
    </>
  );
};

export default TestForm;
