import React, { Component } from "react";
import { signUp } from "../Store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "../Assets/logo.png";
import styled from "styled-components";
import {Btn} from '../Theme/_buttons';
import {StyledLogo} from '../Theme/_main';

const Background = styled.div`
  height: 100vh;
`;

class signUpUser extends Component {
 constructor(props){
   super(props);
   this.state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "redakteur"
  };
 }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    console.log(this.props);
  }

  render() {
    const { auth, authError } = this.props;
    //Protect the edit page and redirect to te login
    console.log(authError);
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <Background className="container-fluid">
          <div className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <StyledLogo
                src={logo}
                className="img-fluid mx-auto d-block"
                alt="Pflegonaut Logo"
                width="80%"
              />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email Addresse</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Wir teilen deine E-Mail-Adresse mit niemandem
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Passwort</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Passwort"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Vorname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Vorname"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Nachname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Nachname"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Nutzerrolle</label>
                  <select
                    className="form-control"
                    id="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                  >
                    <option value="redakteur">Redakteur</option>
                    <option value="lehrer">Lehrer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <Btn type="submit" className="btn btn-primary">
                  Submit
                </Btn>
              </form>
            </div>
            <div className="col-sm" />
          </div>
        </Background>
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
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signUpUser);
