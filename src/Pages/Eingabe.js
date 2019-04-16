import React, { Component } from "react";
import { createQuestion } from "../Store/actions/questionsActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Btn } from "../Theme/_buttons";

class Eingabe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answerOne: "",
      answerTwo: "",
      answerThree: "",
      answerFour: "",
      correctAnswer: 1,
      lernsektor: "Medizin"
    };
    this.sendQuestion = this.sendQuestion.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerOneChange = this.handleAnswerOneChange.bind(this);
    this.handleAnswerTwoChange = this.handleAnswerTwoChange.bind(this);
    this.handleAnswerThreeChange = this.handleAnswerThreeChange.bind(this);
    this.handleAnswerFourChange = this.handleAnswerFourChange.bind(this);
    this.handleCorrectAnswerChange = this.handleCorrectAnswerChange.bind(this);
    this.handleLernsektorChange = this.handleLernsektorChange.bind(this);
  }

  sendQuestion = e => {
    e.preventDefault();
    //Send Data to store
    this.props.createQuestion(this.state);
    this.setState({
      question: "",
      answerOne: "",
      answerTwo: "",
      answerThree: "",
      answerFour: "",
      correctAnswer: 1,
      lernsektor: "Medizin"
    });
  };

  handleQuestionChange = e => {
    this.setState({
      question: e.target.value
    });
  };

  handleAnswerOneChange = e => {
    this.setState({
      answerOne: e.target.value
    });
  };

  handleAnswerTwoChange = e => {
    this.setState({
      answerTwo: e.target.value
    });
  };

  handleAnswerThreeChange = e => {
    this.setState({
      answerThree: e.target.value
    });
  };

  handleAnswerFourChange = e => {
    this.setState({
      answerFour: e.target.value
    });
  };

  handleCorrectAnswerChange = e => {
    this.setState({
      correctAnswer: e.target.value
    });
  };

  handleLernsektorChange = e => {
    this.setState({
      lernsektor: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    //Protect the edit page and redirect to te login
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm" />
            <div className="col-sm">
              <form onSubmit={this.sendQuestion}>
                <div className="form-group">
                  <label for="formGroupExampleInput">Frage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Frage …"
                    value={this.state.question}
                    onChange={this.handleQuestionChange}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput2">Antwort 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Antwort"
                    value={this.state.answerOne}
                    onChange={this.handleAnswerOneChange}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput2">Antwort 2:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Antwort"
                    value={this.state.answerTwo}
                    onChange={this.handleAnswerTwoChange}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput2">Antwort 3:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Antwort"
                    value={this.state.answerThree}
                    onChange={this.handleAnswerThreeChange}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput2">Antwort 4:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Antwort"
                    value={this.state.answerFour}
                    onChange={this.handleAnswerFourChange}
                  />
                </div>
                <label for="form-control">Richtige Antwort</label>
                <select
                  className="form-control"
                  value={this.state.correctAnswer}
                  onChange={this.handleCorrectAnswerChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <label for="form-control">Lernsektor</label>
                <select
                  className="form-control"
                  value={this.state.lernsektor}
                  onChange={this.handleLernsektorChange}
                >
                  <option value="Medizin">Medizin</option>
                  <option value="Magen">Magen</option>
                  <option value="Rücken">Rücken</option>
                  <option value="Gehirn">Gehirn</option>
                </select>
                <Btn className="mt-4">Speichern</Btn>
              </form>
            </div>
            <div className="col-sm" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Eingabe);
