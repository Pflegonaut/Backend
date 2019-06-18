import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createQuestionAction } from '../Store/actions/questionsActions';
import Btn from '../Theme/_buttons';

class Eingabe extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  sendQuestion = (e) => {
    e.preventDefault();
    // Send Data to store
    const { createQuestion } = this.props;
    createQuestion(this.state);
    this.setState({
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
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { auth, authError } = this.props;
    const {
      question,
      answerOne,
      answerTwo,
      answerThree,
      answerFour,
      correctAnswer,
      lernsektor,
      schwierigkeitslevel,
      lernbereich,
      notiz,
    } = this.state;
    // Protect the edit page and redirect to te login
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm" />
            <div className="col-sm">
              <form onSubmit={this.sendQuestion}>
                <div className="form-group">
                  <label htmlFor="question">Frage</label>
                  <textarea
                    className="form-control"
                    id="question"
                    onChange={this.handleChange}
                    value={question}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answerOne">Antwort 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerOne"
                    placeholder="Antwort"
                    value={answerOne}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answerTwo">Antwort 2:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerTwo"
                    placeholder="Antwort"
                    value={answerTwo}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answerThree">Antwort 3:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerThree"
                    placeholder="Antwort"
                    value={answerThree}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answerFour">Antwort 4:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="answerFour"
                    placeholder="Antwort"
                    value={answerFour}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="correctAnswer">Richtige Antwort</label>
                  <select
                    className="form-control"
                    id="correctAnswer"
                    value={correctAnswer}
                    onChange={this.handleChange}
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="lernsektor">Lernsektor</label>
                  <select
                    className="form-control"
                    value={lernsektor}
                    id="lernsektor"
                    onChange={this.handleChange}
                    required
                  >
                    <option value="Medizin">Medizin</option>
                    <option value="Magen">Magen</option>
                    <option value="Rücken">Rücken</option>
                    <option value="Gehirn">Gehirn</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="schwierigkeitslevel">
                    Schwierigkeitslevel
                  </label>
                  <select
                    className="form-control"
                    value={schwierigkeitslevel}
                    id="schwierigkeitslevel"
                    onChange={this.handleChange}
                    required
                  >
                    <option value="leicht">leicht</option>
                    <option value="mittel">mittel</option>
                    <option value="schwer">schwer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="lernbereich">Lernbereich</label>
                  <select
                    className="form-control"
                    value={lernbereich}
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
                </div>
                <div className="form-group">
                  <label htmlFor="notiz">Notiz</label>
                  <textarea
                    className="form-control"
                    id="notiz"
                    onChange={this.handleChange}
                    value={notiz}
                  />
                </div>
                <Btn className="mt-4">Speichern</Btn>
                <p>{authError}</p>
              </form>
            </div>
            <div className="col-sm" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestionAction(question)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Eingabe);
