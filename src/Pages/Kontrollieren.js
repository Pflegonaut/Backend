import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Kontrollieren extends Component {
  render() {
    const { auth } = this.props;
    //Protect the edit page and redirect to te login 
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <p>Kontrollieren</p>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

export default connect(mapStateToProps)(Kontrollieren);
