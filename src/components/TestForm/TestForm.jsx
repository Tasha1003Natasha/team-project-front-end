import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { getTechTest, getTheoryTest } from '../../redux/tests/test-selector';
import TestCard from '../TestCard/TestCard';

export const TestForm = () => {
  const testTech = useSelector(getTechTest);
  const testTheory = useSelector(getTheoryTest);

  return (
    <>
      {testTech.length
        ? testTech.map((item, i) => {
            return (
              <TestCard
                id={i}
                key={i}
                item={item}
                // handelClickNext={handelClickNext}
              />
            );
          })
        : testTheory.map((item, i) => {
            return (
              <TestCard
                id={i}
                key={i}
                item={item}
                // handelClickNext={handelClickNext}
              />
            );
          })}
    </>
  );
};

export default TestForm;
