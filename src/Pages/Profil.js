import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profil = (props) => {
  const { auth } = props;
  // Protect the edit page and redirect to te login
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <>
      <p>Profil</p>
      <p>Vorname</p>
      <p>Nachname</p>
      <p>Mail</p>
    </>
  );
};

export default connect()(Profil);
