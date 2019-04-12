import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Login from "./Pages/Login";
import App from "./App";
import Eingabe from "./Pages/Eingabe";
import Bearbeitung from "./Pages/Bearbeitung";
import Kontrollieren from "./Pages/Kontrollieren";
import Profil from "./Pages/Profil";
import QuestionDetails from "./Pages/QuestionDetails";
import NavBar from './Components/NavBar';

export const history = createHistory();

const Router = () => (
  <BrowserRouter history={history}>
    <NavBar/>
    <Switch>
      {/* Login */}
      <Route exact path="/" component={Login} />
      {/*Dashboard*/}
      <Route path="/dashboard" component={App} />
      <Route path="/eingabe" component={Eingabe} />
      <Route path="/bearbeitung" component={Bearbeitung} />
      <Route path="/details/:id" component={QuestionDetails}/>
      <Route path="/kontrollieren" component={Kontrollieren} />
      <Route path="/profil" component={Profil} />
    </Switch>
  </BrowserRouter>
);

export default Router;
