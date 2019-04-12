import React, { Component } from "react";
import QuestionCard from "../Components/QuestionCard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

class Bearbeitung extends Component {
  render() {
    const { questions } = this.props;
    return (
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm" />
            <div class="col-sm">
              {questions &&
                questions.map(question => {
                  return (
                    <Link to={"/details/" + question.id}>
                      <QuestionCard question={question} key={question.id} />
                    </Link>
                  );
                })}
            </div>
            <div className="col-sm" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    questions: state.firestore.ordered.questions
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "questions" }])
)(Bearbeitung);
