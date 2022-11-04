import { useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import style from './TestCard.module.css';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { orange, grey } from '@mui/material/colors';

const TestCard = ({ index = 0 }) => {
  let currentIndex = Number(index);

  const currentTest = useSelector(getCurrentTest);

  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = event => {
    setSelectedValue('');
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

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
              // localStorageArrayAnswers.filter(({ userAnswer, _id }) => {
              //   const current =
              //     _id === currentTest[currentIndex]._id &&
              //     userAnswer === answer;

              //   console.log('true');
              //   // setSelectedValue(answer);
              //   return current;
              // });

              const a = localStorageArrayAnswers.find(item => 
                item._id === currentTest[currentIndex]._id &&
                  item.userAnswer === answer
              );
              // setSelectedValue(a.userAnswer);
              console.log(Boolean(a));

              return (
                <li className={style.answersItem} key={ind}>
                  <Radio
                    // checked={localStorageArrayAnswers.filter(
                    //   ({ userAnswer, _id }) => {
                    //     const current =
                    //       _id === currentTest[currentIndex]._id &&
                    //       userAnswer === answer;

                    //     console.log('true');
                    //     // setSelectedValue(answer);
                    //     return answer;
                    //   }
                    // )}
                    // checked={Boolean(a)}
                   
                    checked={selectedValue === answer || Boolean(a)}
                    // checked={localStorageArrayAnswers.find(
                    //   ({ userAnswer, _id }) =>
                    //     _id === currentTest[currentIndex]._id &&
                    //     userAnswer === answer[ind]
                    // )}
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
