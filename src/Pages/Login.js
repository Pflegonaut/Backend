import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import { shake, slideDown, hovering } from "../Theme/_animations";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/_main";
import { firebase, googleAuthProvider } from "../firebase";

const LeftCol = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
`;

const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  animation: ${slideDown} 0.8s ease;
`;

const Instructions = styled.p`
  color: white;
  font-size: 1rem;
  animation: ${slideDown} 0.8s ease;
`;

const Btn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  padding: .2rem 4rem;
  font-size: .8rem;
  border: 0.2rem solid ${props => props.theme.secondaryColor};
  border-radius: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  animation: ${slideDown} 0.8s ease;
  :hover {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    transition: all 0.5s ease;
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
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

const Login = () => {
  //Logging the user in with google
  const startLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <LeftCol className="col-sm align-content text-center">
              <StyledLogo
                src={logo}
                className="img-fluid"
                alt="Pflegonaut Logo"
                width="50%"
              />
              <Heading>Bist du bereit durchzustarten?</Heading>
              <Instructions>
                Log dich bitte mit deiner Google-Mail hier ein,
                <br />
                sodass die Reise beginnen kann.
              </Instructions>
              <Btn type="button" onClick={startLogin} href="/dashboard">
                Login
              </Btn>
            </LeftCol>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
