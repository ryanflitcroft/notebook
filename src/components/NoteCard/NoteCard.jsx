import React from 'react';

export default function NoteCard({ note }) {
  return (
    <>
      <article aria-label="container for user notes">
        <h3>{note.heading}</h3>
        <p>{note.content}</p>
        <p>{new Date(note.created_at).toDateString()}</p>
      </article>
    </>
  );
}
