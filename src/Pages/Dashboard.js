import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddedQuestions from "../Components/AddedQuestions";

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    //Protect the edit page and redirect to te login
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm">
              <AddedQuestions />
            </div>
            <div className="col-sm" />
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

export default connect(mapStateToProps)(Dashboard);
