import { useState } from 'react';

// import { useSelector } from 'react-redux';
// import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';
import TestCard from '../TestCard/TestCard';
// import { useEffect, useState } from 'react';
// const backBTn = document.querySelector('.backBTn');
// const nextBTn = document.querySelector('.nextBTn');
// backBTn.addEventListener('onClick', currentQuestionIndexBack);
// nextBTn.addEventListener('onClick', currentQuestionIndexNext);
export const TestForm = () => {
  const [index, setIndex] = useState('0');

  // const testTech = useSelector(getTechTest);
  // const testTheory = useSelector(getTheoryTest);

  const currentQuestionIndexBack = evt => {
    const backIndex = Number(index) - 1;
    if (backIndex > 0 && backIndex <= 12) {
      setIndex(backIndex);
    }
    if (backIndex < 0) {
      setIndex(0);
    }
  };

  const currentQuestionIndexNext = evt => {
    const NextIndex = Number(index) + 1;
    if (NextIndex > 0 && NextIndex <= 12) {
      setIndex(NextIndex);
    }
    if (NextIndex < 0) {
      setIndex(0);
    }
  };
  console.log(index);

  return (
    <>
      <TestCard index={index} />
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
