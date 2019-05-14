/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/logo.png';
import { signUp } from '../Store/actions/authActions';
import Btn from '../Theme/_buttons';
import { StyledLogo } from '../Theme/_main';

const Background = styled.div`
  height: 100vh;
`;

class signUpUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: 'redakteur',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    signUp(this.state);
    console.log(this.props);
  };

  render() {
    const { auth, authError } = this.props;
    const { role } = this.state;
    // Protect the edit page and redirect to te login
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
                  <label htmlFor="exampleInputEmail1">
                    Email Addresse
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </label>
                  <small id="emailHelp" className="form-text text-muted">
                    Wir teilen deine E-Mail-Adresse mit niemandem
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Passwort
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Passwort"
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Vorname
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Vorname"
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Nachname
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Nachname"
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Nutzerrolle
                    <select
                      className="form-control"
                      id="role"
                      value={role}
                      onChange={this.handleChange}
                    >
                      <option value="redakteur">Redakteur</option>
                      <option value="lehrer">Lehrer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </label>
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

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(signUpUser);
