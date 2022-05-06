import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';

export default function Main() {
  return (
    <>
      <main>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </>
  );
}
