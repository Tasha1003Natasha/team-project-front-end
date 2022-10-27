const TestCard = ({ item, id }) => {
  const { question, answers, type, _id } = item;

  const radioButton = document.getElementsByName('r1');
  // console.log(radioButton);
  const ansver = [];
  const checkAnswer = () => {
    for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].checked) {
        ansver.push(radioButton[i].value);
      }
      console.log(ansver);
    }
  };

  return (
    <>
      {item && (
        <div key={id}>
          <p>{question}</p>
          {answers.map((answer, ind) => {
            return (
              <>
                <input
                  name="r1"
                  type="radio"
                  value={answer}
                  id={ind}
                  key={ind}
                />
                {answer}
              </>
            );
          })}
          <button type="submit" onSubmit={checkAnswer}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default TestCard;
