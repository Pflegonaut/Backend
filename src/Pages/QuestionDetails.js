/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Btn from '../Theme/_buttons';
import TimelineComponent from '../Components/TimelineComponent';

class QuestionDetails extends Component {
  handleUpdate = (e) => {
    e.preventDefault();

    // TODO: - Dispatch update question
  };

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
                  <label htmlFor="question">
                    Frage
                    <textarea
                      className="form-control"
                      id="question"
                      onChange={this.handleChange}
                      defaultValue={question.question}
                      ref={input => (this.getQuestion = input)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="answerOne">
                    Antwort 1:
                    <input
                      type="text"
                      className="form-control"
                      id="answerOne"
                      placeholder="Antwort"
                      onChange={this.handleChange}
                      defaultValue={question.answerOne}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="answerTwo">
                    Antwort 2:
                    <input
                      type="text"
                      className="form-control"
                      id="answerTwo"
                      placeholder="Antwort"
                      onChange={this.handleChange}
                      defaultValue={question.answerTwo}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="answerThree">
                    Antwort 3:
                    <input
                      type="text"
                      className="form-control"
                      id="answerThree"
                      placeholder="Antwort"
                      onChange={this.handleChange}
                      defaultValue={question.answerThree}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="answerFour">
                    Antwort 4:
                    <input
                      type="text"
                      className="form-control"
                      id="answerFour"
                      placeholder="Antwort"
                      onChange={this.handleChange}
                      defaultValue={question.answerFour}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="correctAnswer">
                    Richtige Antwort
                    <select
                      className="form-control"
                      id="correctAnswer"
                      onChange={this.handleChange}
                      defaultValue={question.correctAnswer}
                      required
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="lernsektor">
                    Lernsektor
                    <select
                      className="form-control"
                      value={question.lernsektor}
                      onChange={this.handleChange}
                      id="lernsektor"
                      required
                    >
                      <option value="Medizin">Medizin</option>
                      <option value="Magen">Magen</option>
                      <option value="Rücken">Rücken</option>
                      <option value="Gehirn">Gehirn</option>
                    </select>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="schwierigkeitslevel">
                    Schwierigkeitslevel
                    <select
                      className="form-control"
                      value={question.schwierigkeitslevel}
                      onChange={this.handleChange}
                      id="schwierigkeitslevel"
                      required
                    >
                      <option value="leicht">leicht</option>
                      <option value="mittel">mittel</option>
                      <option value="schwer">schwer</option>
                    </select>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="lernbereich">
                    Lernbereich
                    <select
                      className="form-control"
                      value={question.lernbereich}
                      id="lernbereich"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="bewegungsaparat">bewegungsaparat</option>
                      <option value="innere Organe">innere Organe</option>
                      <option value="histologie">histologie</option>
                      <option value="genetik">genetik</option>
                      <option value="neurologie">neurologie</option>
                      <option value="nephrologie">nephrologie</option>
                    </select>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="notiz">
                    Notiz
                    <textarea
                      className="form-control"
                      id="notiz"
                      onChange={this.handleChange}
                      value={question.notiz}
                    />
                  </label>
                </div>
                <Btn className="mt-4">Update</Btn>
              </form>
            </div>
            <div className="col-sm">
              <TimelineComponent
                createdAt={question.createdAt}
                authorFirstName={question.authorFirstName}
                authorLastName={question.authorLastName}
              />
            </div>
          </div>
        </div>
      );
    }
    return <p>Loading… …</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { questions } = state.firestore.data;
  const question = questions ? questions[id] : null;
  return {
    question,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'questions',
    },
  ]),
)(QuestionDetails);
