import { useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import style from './TestCard.module.css';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { orange, grey } from '@mui/material/colors';

const TestCard = ({ index = 0, chengeNext }) => {
  const [answer, setAnswer] = useState([]);
  let currentIndex = Number(index);

  const currentTest = useSelector(getCurrentTest);

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    const answer = JSON.parse(localStorage.getItem('userAnswers'));

    const userAnswer = {
      userAnswer: event.target.value,
      _id: currentTest[currentIndex]._id,
    };
    const checked = answer.find(
      ({ _id, userAnswer }) => _id === currentTest[currentIndex]._id
    );

    if (checked) {
      setSelectedValue('');
      const index = answer.indexOf(checked);
      answer.splice(index, 1);
    }
    setSelectedValue(event.target.value);
    setAnswer([...answer, userAnswer]);
  };

  localStorage.setItem('userAnswers', JSON.stringify(answer));

  return (
    <>
      {currentTest[currentIndex] && (
        <>
          <p className={style.questionText}>
            {currentTest[currentIndex].question}
          </p>
          <hr className={style.line} />
          {/* <p>{testTech[currentIndex]._id}</p> */}
          <ul className={style.answersList}>
            {currentTest[currentIndex].answers.map((answer, ind) => {
              const localStorageArrayAnswers = JSON.parse(
                localStorage.getItem('userAnswers')
              );

              const a = localStorageArrayAnswers.find(
                item =>
                  item._id === currentTest[currentIndex]._id &&
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
                    // inputProps={{ 'aria-label': 'A' }}
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
