import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TestCard = () => {
  return (
    <>
      <p>Question?</p>
      <input type="checkbox" />A
      <input type="checkbox" />B
      <input type="checkbox" />C
    </>
  );
};

export default TestCard;
