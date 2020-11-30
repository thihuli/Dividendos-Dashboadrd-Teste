
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from './views/Login';
import AuthProvider from './Context/hooks/AuthProvider';
import PrivateRoute from '../src/RoutePrivate/Private';

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <AuthProvider>
      <Switch>
        <PrivateRoute path="/admin" component={Admin} />
        <Route path='/login' component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
