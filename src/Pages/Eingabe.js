import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/_main";

class Eingabe extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <p>Fragen eingeben</p>
      </ThemeProvider>
    );
  }
}

export default Eingabe;
