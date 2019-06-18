import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { signIn } from '../Store/actions/authActions';
import logo from '../Assets/logo.png';
import { slideDown, hovering } from '../Theme/_animations';
import theme from '../Theme/_main';

const Background = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
`;

const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  animation: ${slideDown} 0.8s ease;
`;

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
    transition: all 0.2s ease;
    transform: scale(1.1);
  }
  :focus {
    outline: none;
  }
`;

const StyledLogo = styled.img`
  animation-name: ${hovering};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const AuthError = styled.p`
  color: red;
  text-align: center;
  margin-top: 5%;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.signIn(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <>
        <ThemeProvider theme={theme}>
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
                <Heading>Login</Heading>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <StyledLabel htmlFor="email" className="text-white">
                      Deine E-Mail-Adresse
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                      />
                    </StyledLabel>
                  </div>
                  <div className="form-group">
                    <StyledLabel
                      htmlFor="exampleInputPassword1"
                      className="text-white"
                    >
                      Dein Password
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                      />
                    </StyledLabel>
                  </div>
                  <Btn type="submit" classNanme="btn btn-primary">
                    Login
                  </Btn>
                </form>
                <AuthError>{authError}</AuthError>
              </div>
              <div className="col-sm" />
            </div>
          </Background>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
