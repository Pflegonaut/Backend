import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Btn } from "../Theme/_buttons";
import moment from "moment";

class QuestionDetails extends Component {
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    const { question, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    if (question) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <h3 className="mt-2">Bearbeiten</h3>
              <form>
                <div className="form-group">
                  <label for="question">Frage</label>
                  <textarea
                    class="form-control"
                    id="question"
                    value={question.question}
                  />
                </div>
                <div className="form-group">
                  <label for="answerOne">Antwort 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerOne"
                    placeholder="Antwort"
                    value={question.answerOne}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="answerTwo">Antwort 2:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerTwo"
                    placeholder="Antwort"
                    value={question.answerTwo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="answerThree">Antwort 3:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerThree"
                    placeholder="Antwort"
                    value={question.answerThree}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="answerFour">Antwort 4:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerFour"
                    placeholder="Antwort"
                    value={question.answerFour}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="correctAnswer">Richtige Antwort</label>
                  <select
                    className="form-control"
                    id="correctAnswer"
                    value={question.correctAnswer}
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="lernsektor">Lernsektor</label>
                  <select
                    className="form-control"
                    value={question.lernsektor}
                    id="lernsektor"
                    required
                  >
                    <option value="Medizin">Medizin</option>
                    <option value="Magen">Magen</option>
                    <option value="Rücken">Rücken</option>
                    <option value="Gehirn">Gehirn</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="schwierigkeitslevel">Schwierigkeitslevel</label>
                  <select
                    className="form-control"
                    value={question.schwierigkeitslevel}
                    id="schwierigkeitslevel"
                    required
                  >
                    <option value="leicht">leicht</option>
                    <option value="mittel">mittel</option>
                    <option value="schwer">schwer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="lernbereich">Lernbereich</label>
                  <select
                    className="form-control"
                    value={question.lernbereich}
                    id="lernbereich"
                    required
                  >
                    <option value="bewegungsaparat">bewegungsaparat</option>
                    <option value="innere Organe">innere Organe</option>
                    <option value="histologie">histologie</option>
                    <option value="genetik">genetik</option>
                    <option value="neurologie">neurologie</option>
                    <option value="nephrologie">nephrologie</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="notiz">Notiz</label>
                  <textarea
                    class="form-control"
                    id="notiz"
                    value={question.notiz}
                  />
                </div>
                <Btn className="mt-4">Update</Btn>
              </form>
            </div>
            <div className="col-sm">
              <h3 className="mt-2">Timeline</h3>
              <p>
                Erstellt am:{" "}
                {moment(question.createdAt.toDate()).format("Do MMMM YYYY")}
              </p>
              <p>
                Update am:{" "}
                {moment(question.createdAt.toDate()).format("Do MMMM YYYY")}{" "}
                durch {question.authorFirstName + question.authorLastName}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading… …</p>;
    }
  }
}

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
