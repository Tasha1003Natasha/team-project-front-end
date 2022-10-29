import s from './Results.module.css';
// import Chart from 'components/Chart/Chart';
import Chart2 from 'components/Chart/Chart2';
import Cat from '../../images/result/result.png';

const Results = () => {
  return (
    <main>
      <section className={s.sectionResults}>
        <div className={s.container}>
          <div className={s.resultsContent}>
            <div className={s.titlesList}>
              <h2 className={s.resultTitle}>Results</h2>
              <p className={s.resultSubtitle}>[ Testing theory_]</p>
              <div className={s.line}></div>
            </div>
            <div className={s.diagrammWrapper}>
              <div className={s.diagramBox}>
                <Chart2 />
              </div>

              <ul className={s.answerList}>
                <li className={s.answerCorrect}>
                  Correct answers -<span>9</span>
                </li>
                <li className={s.answerTotal}>
                  Total questions -<span>12</span>
                </li>
              </ul>
            </div>
            <img className={s.resultPic} src={Cat} alt="result" />
            <p className={s.resultText}>Not bad!</p>
            <p className={s.materialsText}>
              But you still need to learn some materials.
            </p>
            <button className={s.buttonRepeat}>Try again</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Results;
