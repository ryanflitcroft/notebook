import React from 'react';
import CreateNote from '../CreateNote/CreateNote';
import NotesList from '../NotesList/NotesList';

export default function Home() {
  return (
    <>
      <NotesList />
      <CreateNote />
    </>
  );
}
