import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const QuestionCard = ({ question }) => {
  return (
    <>
      <Card className="card mb-2">
        <div className="card-body">
          <h4 className="text-center">{question.question}</h4>
          <p>Fragen:</p>
          <ol>
            <li>{question.answerOne}</li>
            <li>{question.answerTwo}</li>
            <li>{question.answerThree}</li>
            <li>{question.answerFour}</li>
          </ol>
          <p>Richtige Antwort: {question.correctAnswer}</p>
          <p>Lernsektor: {question.lernsektor}</p>
          <p>Geschrieben von: {question.authorFirstName} {question.authorLastName}</p>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
