import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute>
          <NotesList path="/:notes" />
        </PrivateRoute>
        <PrivateRoute>
          <NoteDetail path="/:notes/:id" />
        </PrivateRoute>
      </Switch>
    </>
  );
}
