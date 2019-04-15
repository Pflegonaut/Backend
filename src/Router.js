import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "./Pages/Login";
import Eingabe from "./Pages/Eingabe";
import Bearbeitung from "./Pages/Bearbeitung";
import Kontrollieren from "./Pages/Kontrollieren";
import Profil from "./Pages/Profil";
import QuestionDetails from "./Pages/QuestionDetails";
import NavBar from "./Components/NavBar";
import { connect } from "react-redux";
import Dashboard from "./Pages/Dashboard";
import signUp from './Pages/signUpUser';

export const history = createHistory();

class Router extends Component {
 
  render() {
    console.log(this.props);
    return (
      <BrowserRouter history={history}>
        {this.props.auth.uid ? <NavBar /> : null}
        <Switch>
          {/* Login */}
          <Route exact path="/" component={Login} />
          {/*Dashboard*/}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/eingabe" component={Eingabe} />
          <Route path="/bearbeitung" component={Bearbeitung} />
          <Route path="/details/:id" component={QuestionDetails} />
          <Route path="/kontrollieren" component={Kontrollieren} />
          <Route path="/profil" component={Profil} />
          <Route path="/pflegonautwerden" component={signUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Router);
