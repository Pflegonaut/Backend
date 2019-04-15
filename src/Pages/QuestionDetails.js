import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
const QuestionDetails = props => {
  const { question, auth } = props;
  //Protect the edit page and redirect to te login 
  if (!auth.uid) return <Redirect to="/" />;
  if (question) {
    return (
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
    );
  } else {
    return <p>Loading… …</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const questions = state.firestore.data.questions;
  const question = questions ? questions[id] : null;
  return {
    question: question,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "questions"
    }
  ])
)(QuestionDetails);
