// import { useSelector } from 'react-redux';
// import { getCurrentTest } from '../../redux/tests/test-selector';
import style from './TestCard.module.css';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { orange, grey } from '@mui/material/colors';

const TestCard = ({ index = 0, unDisableBtn, test }) => {
  const [answer, setAnswer] = useState([]);
  let currentIndex = Number(index);

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    const answer = JSON.parse(localStorage.getItem('userAnswers'));

    const userAnswer = {
      userAnswer: event.target.value,
      _id: test[currentIndex]._id,
    };
    const checked = answer.find(
      ({ _id, userAnswer }) => _id === test[currentIndex]._id
    );

    if (checked) {
      const index = answer.indexOf(checked);
      answer.splice(index, 1);
    }
    setSelectedValue(event.target.value);
    setAnswer([...answer, userAnswer]);
    unDisableBtn();
  };

  localStorage.setItem('userAnswers', JSON.stringify(answer));

  return (
    <>
      {test[currentIndex] && (
        <>
          <p className={style.questionText}>{test[currentIndex].question}</p>
          <hr className={style.line} />
          {/* <p>{testTech[currentIndex]._id}</p> */}
          <ul className={style.answersList}>
            {test[currentIndex].answers.map((answer, ind) => {
              const localStorageArrayAnswers = JSON.parse(
                localStorage.getItem('userAnswers')
              );

              const a = localStorageArrayAnswers.find(
                item =>
                  item._id === test[currentIndex]._id &&
                  item.userAnswer === answer
              );

              return (
                <li className={style.answersItem} key={ind}>
                  <Radio
                    checked={selectedValue === answer || Boolean(a)}
                    onChange={handleChange}
                    value={answer}
                    name="r1"
                    sx={{
                      color: grey[500],
                      '&.Mui-checked': {
                        color: orange[800],
                      },
                    }}
                  />
                  {answer}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default TestCard;
