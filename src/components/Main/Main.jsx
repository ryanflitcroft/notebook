import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';
import CreateNote from '../CreateNote/CreateNote';

export default function Main() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/create">
            <CreateNote />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </main>
    </>
  );
}
