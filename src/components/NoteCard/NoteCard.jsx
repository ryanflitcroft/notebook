import React from 'react';

export default function NoteCard({ note }) {
  return (
    <>
      <article>
        <h3>{note.heading}</h3>
        <p>{note.content}</p>
        <p>{new Date(note.created_at).toDateString()}</p>
      </article>
    </>
  );
}
