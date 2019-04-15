import React, { Component } from "react";
import { signUp } from "../Store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "../Assets/logo.png";
import styled from "styled-components";
import { slideDown, hovering } from "../Theme/_animations";

const Btn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  padding: 0.2rem 4rem;
  font-size: 0.8rem;
  border: 0.2rem solid ${props => props.theme.secondaryColor};
  border-radius: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  animation: ${slideDown} 0.8s ease;
  :hover {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    border: 0.2rem solid ${props => props.theme.secondaryColor};
    transition: all 0.2s ease;
    transform: scale(1.1);
  }
  :focus {
    outline: none;
  }
`;

const Background = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
`;

const StyledLogo = styled.img`
  animation-name: ${hovering};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

class signUpUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth } = this.props;
    //Protect the edit page and redirect to te login
    if (auth.uid) return <Redirect to="/dashboard" />;
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
