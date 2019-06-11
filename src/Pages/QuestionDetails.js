/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Btn from '../Theme/_buttons';
import {
  deleteQuestionAction,
  createQuestionAction,
  updateQuestionAction,
} from '../Store/actions/questionsActions';
import TimelineComponent from '../Components/TimelineComponent';

class QuestionDetails extends Component {
  state = {
    question: '',
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    correctAnswer: 1,
    lernsektor: 'Medizin',
    notiz: '',
    schwierigkeitslevel: 'leicht',
    lernbereich: 'bewegungsapperat',
    deleted: false,
    url: '',
  };

  componentDidMount() {
    const {
      question,
      answerOne,
      answerTwo,
      answerThree,
      answerFour,
      correctAnswer,
      lernsektor,
      notiz,
      schwierigkeitslevel,
      lernbereich,
      // eslint-disable-next-line react/destructuring-assignment
    } = this.props.question;
    this.setState({
      question,
      answerOne,
      answerTwo,
      answerThree,
      answerFour,
      correctAnswer,
      lernsektor,
      notiz: notiz === undefined ? '' : notiz,
      schwierigkeitslevel:
        schwierigkeitslevel === undefined ? '' : schwierigkeitslevel,
      lernbereich: lernbereich === undefined ? '' : lernbereich,
    });

    const url = this.props.match.url.split('/');
    this.setState({
      url,
    });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateQuestionAction(this.state);
  };

  handleDelete = () => {
    if (window.confirm('Willst du diese Frage wirklich dauerhaft löschen?')) {
      const { deleteQuestion } = this.props;
      // eslint-disable-next-line react/destructuring-assignment
      deleteQuestion(this.props.location.pathname.slice(9));
      this.setState({
        deleted: true,
      });
    }
  };

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { deleted } = this.state;
    const { question, auth, role } = this.props;
    if (deleted) return <Redirect to="/dashboard" />;
    if (!auth.uid) return <Redirect to="/" />;
    if (question) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {role && role === 'admin' ? (
                <Btn className="mt-5" onClick={this.handleDelete}>
                  Frage Löschen
                </Btn>
              ) : null}
            </div>
            <div className="col-sm">
              <h3 className="mt-2">Bearbeiten</h3>
              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label htmlFor="question">
                    Frage
                    <textarea
                      className="form-control"
                      id="question"
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
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
                      onChange={e => this.handleChange(e)}
                      defaultValue={question.notiz}
                    />
                  </label>
                </div>
                <Btn className="mt-4" onClick={e => this.handleUpdate(e)}>
                  Update
                </Btn>
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
    role: state.firebase.profile.role,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteQuestion: question => dispatch(deleteQuestionAction(question)),
  createQuestion: question => dispatch(createQuestionAction(question)),
  updateQuestionAction: question => dispatch(updateQuestionAction(question)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  firestoreConnect([
    {
      collection: 'questions',
    },
  ]),
)(QuestionDetails);
