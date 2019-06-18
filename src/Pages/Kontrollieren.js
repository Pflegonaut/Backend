import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Kontrollieren = (props) => {
  const { auth } = props;
  // Protect the edit page and redirect to te login
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <>
      <p>Kontrollieren</p>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Kontrollieren);
