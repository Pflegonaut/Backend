import React, { Component } from "react";
import { firebase } from "./firebase";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/_main";

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: "",
      photoUrl: ""
    }
  }
  logout = () => {
    firebase.auth().signOut();
  };

  componentWillMount(){
    this.getUserData()
  }

  getUserData = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        userName: user.displayName,
        photoUrl: user.photoURL
      })
    } else {
      return;
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar 
            photoURL={this.state.photoUrl}
            logout={this.logout}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
