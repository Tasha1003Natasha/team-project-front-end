import { useState } from 'react';
import { useDispatch } from 'react-redux';

function fun1() {
  const ansver = [];
  const rad = document.getElementsByName('r1');
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      ansver.push(rad[i].textContent);
      console.log(ansver);
    }
  }
}

const TestCard = () => {
  return (
    <>
      <p>Question?</p>
      <input name="r1" type="radio" /> Первый
      <input name="r1" type="radio" /> Второй
      <input name="r1" type="radio" /> Третий
      <button type="button"></button>
    </>
  );
};

export default TestCard;
