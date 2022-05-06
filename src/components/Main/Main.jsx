import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotesList from '../NotesList/NotesList';
import Login from '../Login/Login';

export default function Main() {
  return (
    <>
      <main>
        <Switch>
          <PrivateRoute exact path="/">
            <NotesList />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </>
  );
}
