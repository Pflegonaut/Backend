import React from "react";

const QuestionCard = ({question}) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4>{question.question}</h4>
          <ul>
              <li>{question.answerOne}</li>
              <li>{question.answerTwo}</li>
              <li>{question.answerThree}</li>
              <li>{question.answerFour}</li>
          </ul>
          <p>{question.correctAnswer}</p>
          <p>{question.lernsektor}</p>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
