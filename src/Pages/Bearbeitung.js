import React, { Component } from "react";
import QuestionCard from "../Components/QuestionCard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import Filter from "../Components/Filter";

const LinkTo = styled(Link)`
  color: black;
  :hover{
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
  }
`;


class Bearbeitung extends Component {
  render() {
    const { questions, auth } = this.props;
    //Protect the edit page and redirect to te login 
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm" />
            <div class="col-sm mt-2">
              {questions &&
                questions.map(question => {
                  return (
                    <LinkTo to={"/details/" + question.id}>
                      <QuestionCard question={question} key={question.id} />
                    </LinkTo>
                  );
                })}
            </div>
            <div className="col-sm">
                <Filter/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.firestore.ordered.questions,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "questions" }])
)(Bearbeitung);
