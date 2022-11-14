import style from './TestCard.module.css';
import Radio from '@mui/material/Radio';
import { useEffect, useState } from 'react';
import { orange, grey } from '@mui/material/colors';

const TestCard = ({
  index = 0,
  unDisableBtn,
  test,
  userAnswerArr,
  rightAnswerArr,
}) => {
  const [answer, setAnswer] = useState([]);
  let currentIndex = Number(index);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    setSelectedValue('');
  }, [selectedValue]);

  const handleChange = event => {
    setSelectedValue(event.target.value);

    const answer = JSON.parse(localStorage.getItem('userAnswers'));

    const userAnswer = {
      userAnswer: event.target.value,
      _id: test[currentIndex]._id,
    };

    const checked = answer.find(({ _id }) => _id === test[currentIndex]._id);

    if (checked) {
      const index = answer.indexOf(checked);
      answer.splice(index, 1);
    }

    setSelectedValue(event.target.value);
    setAnswer([...answer, userAnswer]);
    unDisableBtn();
  };

  localStorage.setItem('userAnswers', JSON.stringify(answer));

  const check = ans => {
    const a = userAnswerArr.find(
      item => item._id === test[currentIndex]._id && item.userAnswer === ans
    );

    return a;
  };

  return (
    <>
      {test[currentIndex] && (
        <>
          <p className={style.questionText}>{test[currentIndex].question}</p>
          <hr className={style.line} />

          <ul className={style.answersList}>
            {test[currentIndex].answers.map((answer, ind) => {
              const localStorageArrayAnswers = JSON.parse(
                localStorage.getItem('userAnswers')
              );
              console.log(rightAnswerArr);
              if (rightAnswerArr?.lenght > 1) {
                const r = rightAnswerArr.find(
                  item =>
                    item._id === test[currentIndex]._id &&
                    item.rightAnswer === answer
                );
                console.log(r);
                return r;
              }

              const a = localStorageArrayAnswers.find(
                item =>
                  item._id === test[currentIndex]._id &&
                  item.userAnswer === answer
              );

              const user = userAnswerArr?.find(
                item =>
                  item._id === test[currentIndex]._id &&
                  item.userAnswer === answer
              );

              return (
                <li className={style.answersItem} key={ind}>
                  <Radio
                    checked={
                      Boolean(a) ||
                      selectedValue === answer ||
                      Boolean(check(answer))
                    }
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
                  {answer ? (
                    <span className={style.green}>{answer}</span>
                  ) : (
                    <span>{answer}</span>
                  )}
                  {user !== answer &&
                    (user === answer) &
                    <span className={style.red}>{answer}</span>}
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
