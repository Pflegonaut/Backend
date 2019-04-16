import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profil extends Component {
  render() {
    const { auth } = this.props;
    //Protect the edit page and redirect to te login 
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <p>Profil</p>
        <p>Vorname</p>
        <p>Nachname</p>
        <p>Mail</p>
      </>
    );
  }
}



export default connect()(Profil);
