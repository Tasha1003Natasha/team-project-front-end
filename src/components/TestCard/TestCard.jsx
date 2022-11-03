import { useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import style from './TestCard.module.css';

const TestCard = ({ index = 0 }) => {
  let currentIndex = Number(index);

  const currentTest = useSelector(getCurrentTest);

  // const nextBtn = document.getElementsByName('next');

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
              return (
                <li className={style.answersItem} key={ind}>
                  <input
                    className={style.radio}
                    name="r1"
                    type="radio"
                    value={answer}
                    onClick={evt => {
                      document.getElementsByName('next').disabled = 'false';
                    }}
                    defaultChecked={false}
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
