import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Login from "./Pages/Login";
import App from "./App";
import Eingabe from "./Pages/Eingabe";

export const history = createHistory();

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      {/* Login */}
      <Route exact path="/" component={Login} />
      {/*Dashboard*/}
      <Route path="/dashboard" component={App} />
      <Route path="/eingabe" component={Eingabe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
