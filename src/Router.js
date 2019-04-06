import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Login from "./Pages/Login";
import App from "./App";

export const history = createHistory();

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      {/* Login */}
      <Route exact path="/" component={Login} />
      {/*Dashboard*/}
      <Route path="/dashboard" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
