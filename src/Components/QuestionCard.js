import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const LevelTagLeicht = styled.div`
  background-color: green;
  width: 20%;
  padding: 5px;
  text-align: center;
  color: white;
  border-radius: 30px;
  margin-top: 2%;
  margin-left: 2%;
`;

const LevelTagMittel = styled.div`
  background-color: yellow;
  width: 20%;
  padding: 5px;
  text-align: center;
  color: white;
  border-radius: 30px;
  margin-top: 2%;
  margin-left: 2%;
`;

const LevelTagSchwer = styled.div`
  background-color: red;
  width: 20%;
  padding: 5px;
  text-align: center;
  color: white;
  border-radius: 30px;
  margin-top: 2%;
  margin-left: 2%;
`;

const Lernbereich = styled.div`
  float: right;
`;

const QuestionCard = ({ question }) => {
  return (
    <>
      <Card className="card mb-2">
        {question.schwierigkeitslevel &&
        question.schwierigkeitslevel === "leicht" ? (
          <LevelTagLeicht>Leicht</LevelTagLeicht>
        ) : question.schwierigkeitslevel === "mittel" ? (
          <LevelTagMittel>Mittel</LevelTagMittel>
        ) : question.schwierigkeitslevel === "schwer" ? (
          <LevelTagSchwer>Schwer</LevelTagSchwer>
        ) : null}
        <div className="card-body">
          <h4 className="text-center">{question.question}</h4>
          <div>
            <Lernbereich>
              <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
              &nbsp;&nbsp; {question.lernsektor}
            </Lernbereich>
          </div>
          <p>
            <FontAwesomeIcon icon={faUser} className="icon" />
            &nbsp;&nbsp;
            {question.authorFirstName} {question.authorLastName}
          </p>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
