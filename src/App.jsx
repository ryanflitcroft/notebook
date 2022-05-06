import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotesList from './components/NoteList/NotesList';
import NoteDetail from './components/NoteDetail/NoteDetail';
import './App.css';

export default function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/notes">
            <NotesList />
          </PrivateRoute>
          <PrivateRoute path="/notes/:id">
            <NoteDetail />
          </PrivateRoute>
        </Switch>
      </main>
    </>
  );
}
