import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import NotesList from '../NotesList/NotesList';

export default function Home() {
  const { url, path } = useRouteMatch();
  console.log('url', url, 'path', path);
  return (
    <>
      <h2>Welcome to your NoteBook</h2>
      <Link to={`${url}create`}>Create Note</Link>
      <div>
        <NotesList />
        <Switch>
          <Route exact path={`${path}create`}>
            <CreateNote />
          </Route>
        </Switch>
      </div>
    </>
  );
}
