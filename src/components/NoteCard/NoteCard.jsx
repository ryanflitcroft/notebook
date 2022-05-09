import React from 'react';

export default function NoteCard({ note }) {
  return (
    <>
      <article aria-label="container for user notes">
        <h3>{note.heading}</h3>
        <p aria-label="note content">{note.content}</p>
        <p aria-label="note date">{new Date(note.created_at).toDateString()}</p>
      </article>
    </>
  );
}
