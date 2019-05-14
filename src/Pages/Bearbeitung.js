import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import QuestionCard from '../Components/QuestionCard';
import Filter from '../Components/Filter';

const LinkTo = styled(Link)`
  color: black;
  :hover {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
  }
`;

const Bearbeitung = (props) => {
  const { questions, auth } = props;
  // Protect the edit page and redirect to te login
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm mt-2">
            {questions
              && questions.map(question => (
                <LinkTo to={`/details/${question.id}`}>
                  <QuestionCard question={question} key={question.id} />
                </LinkTo>
              ))}
          </div>
          <div className="col-sm">
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  questions: state.firestore.ordered.questions,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'questions' }]),
)(Bearbeitung);
