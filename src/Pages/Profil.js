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
        <p>Hier könnte ihre Werbung stehen</p>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  }; 

export default connect(mapStateToProps)(Profil);
