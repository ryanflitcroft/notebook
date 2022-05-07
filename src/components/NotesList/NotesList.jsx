import React, { useState, useEffect, useRef } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { getNotes } from '../../services/fetch-utils';
import NoteCard from '../NoteCard/NoteCard';

export default function NotesList() {
  const { user } = useUserContext();
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getNotes(user.id);
      setNotesList(data);
    };
    getData();
  }, []);

  return (
    <>
      <section>
        {notesList.map((note, i) => (
          <NoteCard key={`${note.id} - ${i}`} note={note} />
        ))}
      </section>
    </>
  );
}
