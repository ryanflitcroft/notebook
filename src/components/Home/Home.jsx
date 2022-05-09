import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';

export default function Home() {
  const { url, path } = useRouteMatch();

  console.log('url', url, 'path', path);
  return (
    <>
      <Link to={`${url}create`}>Create a Note</Link>
      <NotesList />
    </>
  );
}
