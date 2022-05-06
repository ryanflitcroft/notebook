import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotesList from './components/NoteList/NotesList';
import NoteDetail from './components/NoteDetail/NoteDetail';
import './App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute>
          <NotesList path="/notes" />
        </PrivateRoute>
        <PrivateRoute>
          <NoteDetail path="/notes/:id" />
        </PrivateRoute>
      </Switch>
    </>
  );
}
